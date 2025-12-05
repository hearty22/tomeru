import { userModel } from "../models/users.js";
import { hashPassword } from "../helpers/bcrypt.js";
export const register = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const {first_name, last_name, age, avatar, phone} = req.body.profile;
    
    const hashed = await hashPassword(password);

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
