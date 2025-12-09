import  userModel  from "../models/users.js";
import { hashPassword, comparePassword } from "../helpers/bcrypt.js";
import { signToken } from "../helpers/jsonwebtoken.js";


export const register = async (req , res) => {
  try {
    const {username, email, password} = req.body;
    const {first_name, last_name, age, avatar, phone} = req.body.profile;
    
    const hashed = await hashPassword(password)

    const user = await userModel.create({
      username: username,
      email: email,
      password: hashed,
      profile: {
        first_name: first_name,
        last_name: last_name,
        age: age,
        avatar: avatar,
        phone: phone
      } 
    });
    
    return res.status(201).json({
      ok : true,
      message: "registro exitoso",
      data: user
    })
  } catch (error) {
    return res.status(500).json({
      ok : false,
      error: `error interno en el registro. info: ${error}`
    })
  }
}
export const login = async (req , res) => {
  try {
    const {username, password} = req.body;

    const user = await userModel.findOne({username: username});
    if(!user){
      return res.status(401).json({
        ok: false,
        message: "credenciales invalidas"
      })
    }
    const isValidPass = await comparePassword(password, user.password); 
    if (!isValidPass) {
      return res.status(401).json({
        ok: false,
        message: "credenciales invalidas"
      })
    }
   res.cookie("token", signToken(user), {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24});
    return res.status(200).json({
      ok : true,
      message: "login exitoso"
    })
  } catch (error) {
   return res.status(500).json({
      ok: false,
      error: `error interno en el login: ${error}`
   }) 
  }
}

export const logout = (req, res) =>{
  try {
   res.clearCookie("token");
    return res.status(200).json({
      ok: true,
      message: "logout exitoso"
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: `error interno en el logout: ${error}`
    })
  }
}

export const profile = (req, res) => {
  try {
    return res.status(200).json({
      ok: true,
      data: req.user
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: `error interno en el profile: ${error}`
    })
  }
}
