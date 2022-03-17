const useModel=require('../model/userModel')

exports.createUser=(req,res)=>{
    try {
        const newUser=new useModel({
            
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email,
            Password:req.body.Password,
            Telephone:req.body.Telephone
        })
        newUser.save(newUser)
        res.json({status:200,newUser})

    } catch (error) {
        res.json(error.message)
    }
}
