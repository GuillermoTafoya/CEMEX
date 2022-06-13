import User from "./api.model.user.js";
import crypto from "crypto";

export async function login(req, res) {
  const users = await User.find();
  console.log(req.body.email);
  console.log(req.body.password);
  try{
  const user = users.filter((u) => u.email === req.body.email); // Filtra por email
  
  const result = user[0].passwordHash === crypto.createHash("sha512").update(req.body.password).digest("base64"); // Contraseñas hasheadas
  console.log(crypto.createHash("sha512").update(req.body.password).digest("base64"));
  if(result){
    const data = { user: user[0], isLogin: result }; // isLogin da true porque era correcto el email y contraseña
    return res.status(200).json(data);
  }
  else{
    return res.sendStatus(404).json({error: "Error 404"});
  }
}
  catch(error){
    return res.status(500).json({error: "El correo y/o contraseña son inválidos"}) // isLogin es falso por defecto
  }
  }
