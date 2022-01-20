import jwt from "express-jwt";
import { Request } from "express";

const getTokenFromHeader = (req: Request) => {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === "Bearer") {
        return req.headers.authorization.split(' ')[1];
    }
}

export default jwt({
    secret: "my super secret",
    userProperty: "token",
    getToken: getTokenFromHeader,
    algorithms: ['HS256']
})