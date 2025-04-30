import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SecretKey=process.env.JWT_SECRET;
export function  authMiddleware(req,res,next){
    const authHeader=req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    };
    const token = authHeader.split(' ')[1];

   try {
    const jwtVerifier= jwt.verify(token,SecretKey);
    if(jwtVerifier.userId){
    req.userId=jwtVerifier.userId
    next();
}else{
    return res.status(403).json({}); 
}
   } catch (error) {
    return res.status(403).json({});
   }
};