import { userModel } from "../models/users.js";

//getAllUsers
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({
      ok: true,
      message: "usuarios obtenidos exitosamente",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: `error interno en el getAllUsers: ${error}`,
    });
  }
};

//getUserbyID
export const getUser = async (req, res) =>{
  try {
    const {id} = req.params;


    const user = await userModel.findById(id);

    return res.status(200).json({
      ok: true,
      message: "usuario obtenido exitosamente",
      data: user,
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: `error interno en el getUser: ${error}`,
    }) 
  }
}

export const updateUser = async (req, res) => {
  try {
    const info = req.user;
    const user = await userModel.findById(info._id);
    const {first_name, last_name, age, avatar, phone} = req.body.profile;

    user.profile.first_name = first_name || user.profile.first_name;
    user.profile.last_name = last_name || user.profile.last_name;
    user.profile.age = age || user.profile.age;
    user.profile.avatar = avatar || user.profile.avatar;
    user.profile.phone = phone || user.profile.phone;
    
    await user.save();
    
    return res.status(200).json({
      ok: true,
      message: "usuario actualizado exitosamente",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: `error interno en el updateUser: ${error}`,
    }) 
  }
};
