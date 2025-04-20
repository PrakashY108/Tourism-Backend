import jwt from "jsonwebtoken";



export const decodeToken = async (token) => {
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  return decoded?.user_id;
};
