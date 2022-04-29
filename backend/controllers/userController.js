//desc register a new user
//ROUTE //api/users
//access public
const asyncHandler=require('express-async-handler')
const bcrypt=require('bcryptjs')
const User=require('../modelss/userModel')
const jwt=require=('jsonwebtoken')


const registerUser=asyncHandler( async(req,res)=>{
    const{name,email,password}=req.body

    //validation

     if(!name ||!email||!password){
        res.status(400)
   throw new Error('please include all fields')

     }

    //find if user already exist

   const userExist=await User.findOne({email})

    if(userExist){
         res.status(400)
        throw new Error('user already exist')
   }

     //Hash password
     const salt=await bcrypt.genSalt(10)
     const hashedPassword =await bcrypt.hash(password,salt)


     //create user

    const user=await User.create({

    name,email,password:hashedPassword
     })

     if(user){
         res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
           token:generateToken(user._id)


        })
     }
     else{
         res.status(400)
         throw new error('Invalid user data')
     }


    
    


 

}
)
//desc re lign user
//ROUTE //api/users/login
//access public

const loginUser=asyncHandler( async(req,res)=>{
    const {email,password}=req.body

    const user=await User.findOne({email})


    //check user and passwords match
        if(user && (await bcrypt.compare(password,user.password))){
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)
    
    
            })

        }else{
            res.status(401)
            throw new Error('Invalid credentials')
        }


    

    

}
)


const getMe=asyncHandler( async(req,res)=>{

    const user={id:req.user._id,email:req.user.email,name:req.user.name}


 res.status(200).json(user)

})
const generateToken=(id)=>{
    return jwt.substring({id},'abc123',{expiresIn:'30d'})
}

module.exports={
    registerUser,
    loginUser,
    getMe
}
