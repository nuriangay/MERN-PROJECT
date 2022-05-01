const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const User=require('../modelss/userModel')
const protect=asyncHandler(async(req,res,next)=>{
    let token 

    if(req.header.authorization&&req.header.authorization.startsWith('Bearer')){

        try {
            //get token from header
            token=req.headers.authorization.split('')[1]

            //verify token

            const decoded=jwt.verify(token,'abc123')

            //get user from token

            req.user=await User.findById(decoded.id).select('-password')

            next()
            
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('not authorized')
            
        }

    }
    if(!token){
        res.status(401)
        throw new Error('not authorized')
        
    }


})

module.exports={protect}