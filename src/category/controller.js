const Category = require("./modal");

const store = async(req ,res) =>{
try {
    
const {category_name,category_description} = req.body;
const newUser = await Category.create({
    category_name:category_name,
    category_description:category_name,
});
if (newUser) {
    res.status(200).json({message:"Category Created SuccessFully"})
}else {
    res.status(400).json({message:"Failed To Create Category"})
}
} catch (error) {
    console.log(error);
    
}
}


const list = async(req ,res ) =>{
    try {
        console.log("hello from client");
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.log(error);
        
    }
}


const updatedd = async(req ,res) =>{
    try {
        const {id} = req.params;

        const {name,description} = req.body;
const category = await Category.findByPk(id);
if (!category){
    return res.status(404).json({message:"Category Not found"})
}

await Category.update({
category_name : name ? name :category.category_name,
user_email:description ? description :category.description,
})

res.json({message:"Category Updated Successfully "})

    } catch (error) {
        console.log(error);
        
    }
}

const deletedd = async(req ,res ) =>{
    try {
        const {id} = req.params;
        const category = await Category.findByPk(id);
        if (!category) {
        return res.json({message:"Category Not found"})
        }

        await category.destroy();
        res.json({message:"Category Deleted SuccessFully"})
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