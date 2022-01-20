import { Request, Response, Router } from "express";
import AuthService from '../services/AuthService';
import isAuth from "../middlewares/isAuth";
import attachCurrentUser from "../middlewares/attachCurrentUser";
import { Model } from "sequelize";
import db from "../../models";
import { UserAttributes } from "../../models/user";


interface UserData {
    token: {
        data: UserAttributes
    },
    currentUser: Model<UserAttributes>
}

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;    

    const user = await db.User.findOne({ where: {email} });

    if(user) {
        res.send({
            message: 'The email provided is already in use'
        }).status(404);
    }
    else {
        const authService = new AuthService();
        const user = await authService.Signup(email, password, name);
        res.send({
            message: 'User created successfully',
            user: user
        }).status(201);
    }
});

router.post('/login', async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    const authService = new AuthService();
    const user = await authService.Login(email, password);

    res.send({user}).status(200);
});

router.get('/whoami', isAuth, attachCurrentUser, async (req: Request & UserData, res: Response) => {
    const user: any = req.currentUser;
    res.send({
        message: `You are logged in as ${user.fullname}`
    }).status(200);
});

export default router;