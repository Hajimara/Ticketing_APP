import Joi from "joi";
import User from "../../models/user";

/**
 *  POST /api/auth/register
 */
export const register = async ctx => {
  const schema = Joi.object().keys({
    // 스키마 생성
    accountId: Joi.string().alphanum().min(2).max(20).required(),
    password: Joi.string()
      .min(8)
      .max(20)// 8~20 영문 숫자 특수문자 포함
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
      .required(),
    username: Joi.string().min(2).max(20).required(),
    address: Joi.string()
      .email({ minDomainAtoms: 2, tldWhitelist: ["com", "net"] })
      .required(),
    phoneNumber: Joi.string()
      .regex(/^\d{3}-\d{3,4}-\d{4}$/)
      .required(),
  });
  // 들어온 파라미터와 스키마 비교
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  //  검증 끝
  
  const {
    accountId,
    password,
    username,
    address,
    phoneNumber
  } = ctx.request.body;
  try {
    //중복 확인
    const exists = await User.findByAccountId(accountId);
    if (exists) {
      ctx.status = 400;
      return;
    }
    const deleteDate = null;
    const user = new User({
      accountId,
      username,
      address,
      phoneNumber,
      insertDate: new Date(),
      deleteDate
    });
    await user.setPassword(password);
    await user.save(); // DB저장

    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true // XSS 방지
    }); 
  } catch (error) {
    ctx.throw(500, error);
  }
};

/**
 *  POST /api/auth/login
 */
export const login = async ctx => {
  const { accountId, password } = ctx.request.body;
  console.log("login start");
  
  if (!accountId || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await User.findByAccountId(accountId);
    if (!user) {
      ctx.status = 401;
      console.log("login fail");
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    });
  } catch (error) {
    ctx.throw(500, error);
  }
};

/**
 *  POST /api/auth/check
 */
export const check = async ctx => {
  const { user } = ctx.state;
  console.log(user);
  
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = user;
};

/**
 *  POST /api/auth/logout
 */
export const logout = async ctx => {
  ctx.cookies.set("access_token");
  ctx.status = 204; // 컨텐츠 없음
};
