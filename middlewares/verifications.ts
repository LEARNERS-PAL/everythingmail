import { Request, Response, NextFunction } from 'express';
import { CreateError, VerifyToken } from '../utilities';

declare module "express-serve-static-core" {
    interface Request {
        user: any;
    }
}

export const VerifyAccessToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return next(CreateError(401, "Access denied"));
        }
        const token = authorization.split(" ")[1];
        if (!token) {
            return next(CreateError(401, "Access denied"));
        }
        const decoded: any = await VerifyToken(token, "access")

        if(!decoded) {
            return next(CreateError(401, "Access denied"));
        }

        // check expiration
        if (decoded.exp < Date.now().valueOf() / 1000) {
            return next(CreateError(401, "Access token has expired, please login again"));
        }

        // assign user to request object
        req.user = decoded;
        next();
    } catch (error : any) {
        next(error);
    }
}

export const VerifyRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return next(CreateError(401, "Access denied"));
        }
        const token = authorization.split(" ")[1];
        if (!token) {
            return next(CreateError(401, "Access denied"));
        }
        const decoded: any = await VerifyToken(token, "refresh")

        // check expiration
        if (decoded.exp < Date.now().valueOf() / 1000) {
            return next(CreateError(401, "Refresh token has expired, please login again"));
        }

        // assign user to request object
        req.user = decoded;
        next();
    } catch (error) {
        next(error);
    }
}

export const VerifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req;

    if (user.role === "Admin") {
        return next();
    } else {
        return next(CreateError(401, "Access denied"));
    }
}

export const VerifyOrganizer = async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req;
    if (user.role === "Organizer") {
        return next();
    } else {
        return next(CreateError(401, "Access denied"));
    }
}

