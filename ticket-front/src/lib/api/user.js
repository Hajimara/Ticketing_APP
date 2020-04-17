import client from "./client";

export const getUserTicket = ({ user,pagination }) =>
  client.post(`/api/user/getUserTicket`, { user,pagination });
