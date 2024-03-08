const product = require("../models/Productmodel")

const {Op} = require("sequelize")


exports.addProducts = async (req, res) => {
    try {
        const { productName, productPrice, category } = req.body;
        console.log("hey:", req.body);
        const Seq = await product.create({ productName, productPrice, category })
        res.json({ Seq })
        console.log(Seq)
    } catch (error) {
        console.log(error)
    }
}

exports.getProducts = async (req, res) => {
    try {

        const data = await product.findAll();
        return res.status(200).json({ data: data })
        // console.log(data)

    } catch (error) {
        console.log(error)
    }

}

exports.searchapi = async(req,res) =>{
    try {
        
        const {productName} = req.query;
        console.log(req.query)
    
        const results = await product.findAll({
            where:{
                productName:{
                    [Op.like]: `%${productName}%`
                }
    
            }
        })
        return res.json({success : true, products : results})
    } catch (error) {
        
    }
}