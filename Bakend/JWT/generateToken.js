import jwt from 'jsonwebtoken'

const createTokenandSaveCokkie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn:"50d"
    });

    res.cookie("jwt",token,{
        httpOnly:true,
        secure:false,
        sameSite: "lax"
        // sameSite:"strict"
    })

}


export default createTokenandSaveCokkie;