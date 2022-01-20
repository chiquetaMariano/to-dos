import { Request, Response, NextFunction } from "express";
import { Model } from "sequelize";
import db from "../../models";
import { UserAttributes } from "../../models/user";

interface UserData {
    token: {
        data: UserAttributes
    },
    currentUser: Model<UserAttributes>
}


export default async (req: Request & UserData, res: Response, next: NextFunction) => {
    const decodedToken = req.token.data;
    const user = await db.User.findOne({ id: decodedToken.id });

    req.currentUser = user;

    if(!user) {
        return res.status(401).end("User not found");
    }
    else {
        return next();
    }
}