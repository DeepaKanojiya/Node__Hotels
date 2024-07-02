const express = require('express');

const router = express.Router();

const menuItem = require('./../model/Menu')

router.post('/',async (req,res)=>{
  try{
    const data = req.body;
    const newMenu = new menuItem(data);
    const response = await newMenu.save();
     console.log("data saved")
     res.status(200).json(response)
  }
  catch(err){
     console.log(err)
     res.status(500).json({error : "internal server error"});
  }
})

router.get('/', async(req,res)=>{
  try{
    const data = await menuItem.find();
    console.log("data fetched")
    res.status(200).json(data);
  }
  catch(err){
      console.log(err)
      res.status(500).json({error : "internal server error"})
  }
})

router.get('/:tasteType',async (req,res)=>{
  
  try{
    const tasteType = req.params.tasteType;
    if(tasteType == 'spicy'|| tasteType == 'sour' || tasteType == 'sweet'){
      const response = await menuItem.find({taste : tasteType})
      console.log("response fetched")
      res.status(200).json(response)
    }else{
      res.status(404).json({error : 'invalid taste'})
    }
  }
  catch(err){
      console.log(err)
      res.status(500).json({error : "internal server error"})
  }
})


router.put('/:id',async (req,res)=>{
  try{
    const MenuId = req.params.id;
  const updatedMenuItemData = req.body;

  const response = await menuItem.findByIdAndUpdate(MenuId,updatedMenuItemData,{
    new : true,
    runValidators : true,
   })

   if(!response){
    res.status(404).json({error: 'Person not found'})
   }
    
    console.log("data updated")
    res.status(200).json(response)
  }
  catch(err){
      console.log(err)
      res.status(500).json({error : "internal server error"})
  }

})

router.delete('/:id',async (req,res)=>{
  try{
    const MenuId = req.params.id;

  const response = await menuItem.findByIdAndDelete(MenuId)

   if(!response){
    res.status(404).json({error: 'Person not found'})
   }
    
    console.log("data delete")
    res.status(200).json({message : 'MenuItem Deleted successfully'})
  }
  catch(err){
      console.log(err)
      res.status(500).json({error : "internal server error"})
  }

})

module.exports = router;