export const sendMessage=async(req,res)=>{
    try{
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;  //current logged in user

    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
}