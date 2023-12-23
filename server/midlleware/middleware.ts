import { Request, Response } from "express";
const jwt = require('jsonwebtoken'); 


const isValid = (req:Request, res:Response, next:any) => {
    try {
      const token = req.headers.authorization?.split('my_key ')[1];
      const decodedToken = jwt.verify(token, 'iLoveYou');
      const u_id = parseInt(decodedToken.u_id);
      
      if (!u_id) {
        res.status(403).json('Invalid user');
      } else {
        next();
      }
    } catch {
      res.status(401).json('Invalid request!');
    }
}

export {
  isValid,
}