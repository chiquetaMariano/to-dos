import * as argon2 from "argon2";
import { randomBytes } from "crypto";
import db from "../../models";

export default class AuthService {
    public async Signup(name: string, email: string, password: string): Promise<any> {
        const salt = randomBytes(32);
        const passwordHashed = await argon2.hash(password, {salt});

        const userRecord = await db.User.create({
            name,
            email,
            password: passwordHashed
        });

        return {
            user: {
                name: userRecord.name,
                email: userRecord.email
            }
        }
    }
}