import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

const SECRET = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJOYW1lIjoiQWJoaWppdCBNdWtoZXJqZWUiLCJFbWFpbCI6ImFiaGlqaXRAZ21haWwuY29tIiwiSXNFbWFpbFZlcmlmaWVkIjpmYWxzZSwiSXNQcmVtaXVtTWVtYmVyIjpmYWxzZSwiQ3JlYXRlZE9uIjoiMjAyMC0wMS0yOVQxMjo1NTowMC4zMDNaIiwiaWF0IjoxNTgwMzA1MjE5fQGtqRRRLJMoI87k9Kee5Hv8pDszXOEnFZBJWt5VQdAA';

class Encryption {
  constructor() {

  }

  public static encryptPassword = (password: string) => {
    return bcrypt.hashSync(password, 10);
  }

  public static decryptPassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
  }

  public static createToken = async (data: any) => {
    return new Promise((resolve, reject) => {
      try {
        const token = jwt.sign(data, SECRET, {
          expiresIn: '1d',
        });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    })
  }

  public static validateToken = (token: any) => {
    try {
      return jwt.verify(token, SECRET); 
    } catch (error) {
      console.log(error);
      
      return null;
    }
  }
}

export {
  Encryption
}