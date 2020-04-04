import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
  accountId: String,
  ticket:[{type: Schema.Types.ObjectId, ref: 'ticket'}],
  hashedPassword: String,
  username: String,
  phoneNumber: String,
  address: String,
  insertDate: {type: Date, default: Date.now},
  deleteDate: {type: Date, sparse: true},
});

// hash값 적용하는 메서드
UserSchema.methods.setPassword = async function(password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

// 비밀번호 확인 메서드
UserSchema.methods.checkPassword = async function(password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // ture/false
};

UserSchema.statics.findByAccountId = async function(accountId) {
  return this.findOne({ accountId });
};

// 응답 데이터 hashedPassword 제거
UserSchema.methods.serialize = function() {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

// 토큰 생성
UserSchema.methods.generateToken = function() {
  const token = jwt.sign(
    {
      _id: this.id,
      accountId: this.accountId
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );
  return token;
};

const User = mongoose.model("User", UserSchema);
export default User;
