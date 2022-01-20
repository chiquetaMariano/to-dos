import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import db from "../../models";
import { UserAttributes } from "../../models/user";

export default class AuthService {
    public async Signup(fullname: string, email: string, password: string): Promise<any> {
        const salt = randomBytes(32);
        const passwordHashed = await argon2.hash(password, {salt});

        // TODO: check email availability

        const user = await db.User.create({
            fullname,
            email,
            password: passwordHashed
        });

        return {
            user: {
                fullname: user.fullname,
                email: user.email
            }
        }
    }

    public async Login(email: string, password: string): Promise<any> {
        const user = await db.User.findOne({ email });
        if(!user) {
            throw new Error("User not found");
        }
        else  {
            const correctPassword = await argon2.verify(user.password, password);
            if(!correctPassword) {
                throw new Error("Incorrect password");
            }
        }

        return {
            user: {
                fullname: user.fullname,
                email: user.email
            },
            token: this.generateJWT(user)
        }
    }

    private generateJWT(user: UserAttributes) {

        const data = {
            id: user.id,
            fullname: user.fullname,
            email: user.email
        };

        // TODO: move secret to .env file
        const signature = "my super secret";
        const expiration = "6h";

        return jwt.sign({data}, signature, { expiresIn: expiration });
    }
}