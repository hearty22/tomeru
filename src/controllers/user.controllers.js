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
  } catch (error) {
    return res.status(500).json({
      
    }) 
  }
};
