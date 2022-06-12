import User from "./api.model.user.js";
import crypto from "crypto";

const hashing = crypto.createHash("sha512");

export async function login(req, res) {
  const users = await User.find();
  const user = users.filter((u) => u.email === req.body.email); // Filtra por email
  const result = user[0].passwordHash === hashing.update(req.body.password).digest("base64"); // Contraseñas hasheadas
  const data = { user: user[0], isLogin: result };
  res.json(data);
}
