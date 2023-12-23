const jwt = require("jsonwebtoken");
const SECRET = "iLoveYou";

const generateToken = (u_id : number | undefined, u_email : string | undefined) => {
    const token = jwt.sign(
        {
            u_id,
            u_email,
        },
        SECRET,
        { 
            expiresIn: "365d" 
        }
    );
    return token;
}

export {
    generateToken,
}