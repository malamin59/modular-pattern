import bcrypt from "bcryptjs";
import { pool } from "../../database/bt";
import jwt from "jsonwebtoken"

const loginUserIntoDB = async (email: string, password: string) => {
  const user = await pool.query(
    `
    SELECT * FROM users WHERE email=$1`,
    [email],
  );
  if (user.rows.length === 0) {
    throw new Error("User not found");
  }
  const matchPassword = await bcrypt.compare(password, user.rows[0].password);

  if (!matchPassword) {
    throw new Error("Invalid Credential");
  }
 /// JWT
 const jwtPayload = {
    id : user.rows[0].id,
    name : user.rows[0].name,
    email : user.rows[0].email
 }
 const secret = "s9K#vT2!pL8@xQ4^mZ7$wR1&bN5*eH3"
 const token = jwt.sign(jwtPayload ,secret ,{expiresIn: "7d"})
 delete user.rows[0].password

  return {token , user : user.rows[0]};
};

export const authServices = {
  loginUserIntoDB,
};
