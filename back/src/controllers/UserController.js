const { createUser, getAllUsersService,updateUser,deleteUser } = require("../services/users");
const catchedAsync = require("../utils/catchedAsync");

const postUser = catchedAsync(async(req, res)=>{
    const {firstname, lastname, documentType, document, dateOfBirth, placeOfBirth, placeOfResidence, email, phone, userName, password}=req.body;

    const postedUser = await createUser(firstname, lastname, documentType, document, dateOfBirth, placeOfBirth, placeOfResidence, email, phone, userName, password);
   
    if(!postedUser.error){
        console.log(postedUser);
        return res.status(200).json(postedUser)
    }
    else{
        console.log(postedUser);
        return res.status(401).json(postedUser.error)
    }
});


const getAllUsers = catchedAsync(async(req, res)=>{
     const data=await getAllUsersService();
   
    if(!data.error){
        console.log(data);
        return res.status(200).json(data);
    }
    else{
        console.log(data);
        return res.status(401).json(data.error);
    }
});


const updateUserById = catchedAsync(async (req, res) => {
  const userId = req.params.id; 
  const updatedData = req.body;

  const updatedUser = await updateUser(userId, updatedData);

  if (!updatedUser.error) {
    console.log(updatedUser);
    return res.status(200).json(updatedUser);
  } else {
    console.log(updatedUser);
    return res.status(400).json(updatedUser.error);
  }
});
const deleteUserById = catchedAsync(async (req, res) => {
    const userId = req.params.id;
  
    const result = await deleteUser(userId);
  
    if (!result.error) {
      console.log(result);
      return res.status(200).json(result);
    } else {
      console.log(result);
      return res.status(result.status || 500).json(result.error);
    }
  });



module.exports = {
    postUser,
    getAllUsers,
    updateUserById,
    deleteUserById
};