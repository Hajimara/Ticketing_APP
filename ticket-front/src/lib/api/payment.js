import client from "./client";

export const paymentConfirm = ({ ticketData, priceData, user }) =>
  client.post("/api/payment/paymentConfirm", { ticketData, priceData, user });
