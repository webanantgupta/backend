// register a user
let UserCollection = require('../models/User');
const registerUser = async (req,res) => {
    const {name,email,password} = req.body;

    try {
        let data = await UserCollection.create({
            name:name,
            email:email,
            password:password
        })                                             // data is again return to the user
       return res.json({msg:'user register successfully', data, success:true})
    } catch (error) {
        res.json({msg : "error in creating user" , success: false, error:error.message})
    }
}


const getAllUsers = async (req,res) => {
    let data = await UserController.find();
    try {
        return res.json({msg:'user data fetched  successfully', data, success:true})
    } catch (error) {
        return res.json({msg:'error in grtting users', error:error.errmsg, success:false})
    }
}

const deleteUser = async (req,res) => {
    let id = req.params._id //delete by gmail id
    let data = await UserController.findOneAndDelete(id);

try {
    return res.json({msg:'user deleted successfully', success:true})
    
} catch (error) {
    return res.json({msg:'user cannot be deleted', error, success:false})
    
}
}

module.exports = {
    getAllUsers, registerUser , deleteUser
}
