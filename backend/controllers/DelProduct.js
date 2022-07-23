const Prod = require("../model/Users");

const DelProduct = async (req,res) => {
   // const { id }= req.body;
   const Prod_id= req.body._id;
  
 //  res.json(id);
 Prod.findByIdAndRemove(Prod_id, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        if(docs==null){
            res.json({message : "mouch mawjoud : " });
        }else{
            res.json({message : "Removed Product : ", docs });
        }
        
    }
});

};
module.exports = DelProduct;