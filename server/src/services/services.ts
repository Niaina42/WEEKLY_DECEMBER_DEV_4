const jwt = require("jsonwebtoken");
const SECRET = "passWord";
import QRCode from "qrcode";
import fs from "fs"

const generateToken = (
  u_id: number | undefined,
  u_email: string | undefined
) => {
  const token = jwt.sign(
    {
      u_id,
      u_email,
    },
    SECRET,
    {
      expiresIn: "365d",
    }
  );
  return token;
};

const generateQR = async (text: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await QRCode.toDataURL("http://173.249.22.169:9091/"+text);
      const matches = response.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
      const base64Data = matches ? matches[2] : response;
      // Convert base64 to binary buffer
      const buffer = Buffer.from(base64Data, 'base64');
      resolve(buffer);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

const uploadFile = (qr:any, title:string) => {
  return new Promise((resolve, reject) => {
    let current_time = new Date().getTime();
    let path = `${title}-${current_time}.png`
    fs.writeFile("./public/"+path, qr, (err) => {
      if (err) {
        reject(err)
      }
    
      resolve(path)
  });
})
}

export { generateToken, generateQR, uploadFile };
