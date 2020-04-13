import client from './client'

export const dataPush = ({ movieId, price, seat }) =>
         client.post("/api/management/dataPush", { movieId, price, seat });