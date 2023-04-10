import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly firstName: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly lastName: string;
    @IsString()
    @IsNotEmpty()
    readonly gender: string;
    @IsString()
    @IsNotEmpty()
    readonly country: string;
    @IsString()
    @IsNotEmpty()
    readonly isActive: boolean;
    @IsString()
    @IsNotEmpty()
    password: string;
}