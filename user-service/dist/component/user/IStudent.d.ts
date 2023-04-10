import { Document } from 'mongoose';
export interface IUser extends Document {
    readonly name: string;
    readonly lastname: string;
    readonly gender: string;
    readonly country: string;
    readonly isActive: boolean;
    password: string;
}
