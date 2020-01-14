import Joi from "joi";
import User from "../../models/user";

/**
 *  POST /api/auth/register
 */
export const register = async ctx => {
  console.log(ctx.request.body);

  const schema = Joi.object().keys({
    // 스키마 생성
    accountId: Joi.string()
      .alphanum()
      .min(2)
      .max(20)
      .required(),
    password: Joi.string().required()
  });
  // 들어온 파라미터와 스키마 비교
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.state = 400;
    ctx.body = result.error;
    return;
  }
  //  검증 끝

  const { accountId, password } = ctx.request.body;
  try {
    //중복 확인
    const exists = await User.findByAccountId(accountId);
    if (exists) {
      ctx.status = 400;
      return;
    }

    const user = new User({
      accountId
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

  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
      const user = await User.findByAccountId(accountId);
      if(!user){
          ctx.status = 401;
          return;
      }
      const valid = await user.checkPassword(password);
      if(!valid){
          ctx.status = 401;
          return;
      }
      ctx.body = user.serialize();
      const token = user.generateToken();
      ctx.cookies.set('access_token',token,{
          maxAge: 1000* 60* 60 *24* 7,
          httpOnly: true
      })
  } catch (error) {
    ctx.throw(500, error);
  }
};

/**
 *  POST /api/auth/check
 */
export const check = async ctx => {
    const {user} = ctx.state;
    if(!user){
        ctx.state = 401;
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
