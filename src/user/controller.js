const User = require("./modal");

const store = async(req ,res) =>{
try {
    
const {user_name,user_email,user_password,user_address} = req.body;
const newUser = await User.create({
    user_name:user_name,
    user_email:user_email,
    user_password:user_password,
    user_address:user_address
});
if (newUser) {
    res.status(200).json({message:"User Created SuccessFully"})
}else {
    res.status(400).json({message:"Failed To Create User"})
}
} catch (error) {
    console.log(error);
    
}
}


const list = async(req ,res ) =>{
    try {
        console.log("hello from client");
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
        
    }
}


const updatedd = async(req ,res) =>{
    try {
        const {id} = req.params;

        const {user_name,user_email,user_password, user_address} = req.body;
const user = await User.findByPk(id);
if (!user){
    return res.status(404).json({message:"User Not found"})
}

await user.update({
user_name : user_name ? user_name :user.user_name,
user_email:user_email ? user_email :user.user_email,
user_address: user_address ? user_address : user.user_address
})

res.json({message:"User Updated Successfully "})

    } catch (error) {
        console.log(error);
        
    }
}

const deletedd = async(req ,res ) =>{
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);
        if (!user) {
        return res.json({message:"user Not found"})
        }

        await user.destroy();
        res.json({message:"User Deleted SuccessFully"})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    store,
    list,
    updatedd,
    deletedd
}