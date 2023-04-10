import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class User {
   @Prop()
   name: string;
   @Prop()
   lastname: string;
   @Prop()
   gender: string;
   @Prop()
   country: string;
   @Prop()
   isActive: boolean;
   @Prop()
   password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);