import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const CreateError = (code: number, message: string,) => {
    const error = new Error() as any;
    error.message = message;
    error.statusCode = code;
    return error;
}


export const GeneratePIN: any = async (length: number = 6) => {
    // generate random {length} digits PIN code
    let pin = "";
    for (let i = 0; i < length; i++) {
        pin += Math.floor(Math.random() * 10);
    }
    const { password, hashedPassword } = await BcryptPassword(pin);
    return {
        password,
        hashedPassword
    }
}

const BcryptPassword = async (password: string) => {
    // encrypt password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return {
        password,
        hashedPassword
    }
}

export const ComparePassword = async (password: string, hashedPassword: string) => {
    // compare password with hashed password
    return await bcrypt.compare(password, hashedPassword);
}


export const HashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}

export const GenerateToken = (user: any, role: string) => {
    //   Create access token
    const accessToken = jwt.sign(
        { id: user._id, role },
        process.env.JWT_ACCESS_SECRET || "",
        {
            expiresIn: process.env.JWT_ACCESS_EXPIRATION || "1d"
        }
    );
    //   Create refresh token
    const refreshToken = jwt.sign(
        { id: user._id, role },
        process.env.JWT_REFRESH_SECRET || "",
        {
            expiresIn: process.env.JWT_REFRESH_EXPIRATION || "30d"
        }
    );

    return { accessToken, refreshToken }
}

export const VerifyToken = async (token: string, type:string) => {
    // verify token
    const secret = type === "access" ? process.env.JWT_ACCESS_SECRET : process.env.JWT_REFRESH_SECRET;
    return  jwt.verify(token, secret || "");
}

