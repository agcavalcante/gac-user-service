import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { hash } from 'argon2';
import { CreateUserDto } from 'component/user/create-user.dto';
import { UserService } from 'component/user/user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Res() response, @Body() createUserDto: CreateUserDto) {
        try {
            const hashedPass = await hash(createUserDto.password, {
                type: 0,
                memoryCost: 2 ** 16,
                hashLength: 50,
            });
            createUserDto.password = hashedPass;
            const newUser = await this.userService.createUser(createUserDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'User has been created successfully',
                newUser,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: User not created!',
                error: 'Bad Request'
            });
        }
    }

    @Get()
    async getUsers(@Res() response) {
        try {
            const userData = await this.userService.getAllUsers();
            return response.status(HttpStatus.OK).json({
                message: 'All users data found successfully', userData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getUser(@Res() response, @Param('id') userId: string) {
        try {
            const existingUser = await
                this.userService.getUser(userId);
            return response.status(HttpStatus.OK).json({
                message: 'User found successfully', existingUser,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    
    @Delete('/:id')
    async deleteUser(@Res() response, @Param('id') userId: string) {
        try {
            const deletedUser = await this.userService.deleteUser(userId);
            return response.status(HttpStatus.OK).json({
                message: 'User deleted successfully',
                deletedUser,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}