import { CreateUserDto } from './create-user.dto';
import { IUser } from './IStudent';
import { Model } from "mongoose";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<IUser>);
    createUser(createUserDto: CreateUserDto): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    getUser(userId: string): Promise<IUser>;
    deleteUser(userId: string): Promise<IUser>;
}
