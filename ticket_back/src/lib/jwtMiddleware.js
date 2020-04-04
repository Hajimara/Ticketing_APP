import jwt from "jsonwebtoken";
import User from "../models/user";

const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get("access_token");
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // 해독
    ctx.state.user = {
      // 결과를 이후 미들웨어에서 사용할 수 있도록 state에 넣어줌
      _id: decoded._id,
      accountId: decoded.accountId
    };
    console.log(decoded);

    // 유효기간 3.5일 미만 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id);
      const token = await user.generateToken();
      ctx.cookies.set("access_token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      });
    }

    return next();
  } catch (error) {
    return next();
  }
};

export default jwtMiddleware;
