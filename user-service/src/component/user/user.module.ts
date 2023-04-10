import { UserController } from "controllers/user.controller"
import { UserService } from "./user.service"
import { User, UserSchema } from "./user.schema"
import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { AppMongooseModule } from "config/database/mongodb/configuration.module"

@Module({
    imports: [
        AppMongooseModule,
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}