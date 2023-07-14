
const bcrypt = require('bcryptjs');

const { Member } = require('../models')
const addMember = async(req, res)=>{
    const { password } = req.body;
   try{
       const strongPassword = new RegExp(/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/)
       if(!strongPassword.test(password)){
           res.json({status: "Failed", message: "Password must contain at least 1 capital letter, 1 small letter, 1 number, 1 special character and must be at least 8 characters long"});
           return;
       }else{
           const salt = await bcrypt.genSalt(10);
           const hashedPassword = await bcrypt.hash(password, salt);
           const member = await Member.create({...req.body, password : hashedPassword});
           if(res.statusCode !== 200){
               res.json({status: "Failed", message: "An error occurred"});
               return;
           }else{
               res.json({status: "success", data: member});
           }
       }

   }catch(err){
       console.log("An error occurred -> ", err);
   }
}

// a function to get all members from the database;

const getAllMembers = async(req, res)=>{
    try{
        const members = await Member.findAll();
        if(res.statusCode !== 200){
            res.json({status: "Failed", message: "Could fetch records from the database"});
        }else{
            const result = members.map(member=>{
                const {memberID, firstName, lastName, gender, email, phoneNumber} = member;
                return {memberID, firstName, lastName, gender, email, phoneNumber}
            })
            res.json({status: "Success", data: result });
        }
    }catch(err){
        console.log("An error occurred!", err)
    }
}

// get the details of a single member;

const getSingleMember = async(req, res)=>{
    const { id } = req.params;
    try{
        const member = await Member.findOne({where: {memberID : id}});
        if(!member){
            res.json({status: "Failed", message: `Could not find any user with ID ${id}`});
            return;
        }else{
            res.json({status: "success", data: member})
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = { addMember, getAllMembers, getSingleMember };