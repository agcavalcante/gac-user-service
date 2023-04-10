import { CreateUserDto } from 'component/user/create-user.dto';
import { UserService } from 'component/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(response: any, createUserDto: CreateUserDto): Promise<any>;
    getUsers(response: any): Promise<any>;
    getUser(response: any, userId: string): Promise<any>;
    deleteUser(response: any, userId: string): Promise<any>;
}
