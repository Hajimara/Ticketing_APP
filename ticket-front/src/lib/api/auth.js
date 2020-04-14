import client from "./client";

export const login = ({ accountId, password }) =>
  client.post("/api/auth/login", { accountId, password });

export const register = ({
  accountId,
  password,
  username,
  address,
  phoneNumber
}) =>
  client.post("/api/auth/register", {
    accountId,
    password,
    username,
    address,
    phoneNumber
  });

export const check = () => client.get("/api/auth/check");

export const logout = () => client.post("/api/auth/logout");

export const userInfo = ({user}) => client.post("/api/auth/userInfo",{user});
