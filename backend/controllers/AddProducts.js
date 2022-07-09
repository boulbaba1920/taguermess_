const bcrypt = require("bcrypt");
const Prod = require("../model/Users");
const multer = require ("multer")
const AddProd = async (req, res) => {

  const { Name, price,type, desc ,img  } = req.body;
  console.log('Name -----------------'+Name);
//  console.log('-----------------'+img);
  //img_url = img.toString('base64');
//  console.log(img);
  const NewProd = new Prod({
    Name,
    price,
    type,
    desc,
    img:{
     img
    }
  });

  NewProd
    .save()
    .then((Name) => {
      res.json({ message: "Prod created", Name });
    })
    .catch((error) => console.error(error));

};

module.exports = AddProd;
