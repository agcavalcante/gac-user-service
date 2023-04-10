import { Module } from '@nestjs/common';
import { AppConfigModule } from 'config/app/configuration.module';
import { RedisAppModule } from 'config/redis/redis.module';
import { UserModule } from 'component/user/user.module';
import { AppMongooseModule } from 'config/database/mongodb/configuration.module';

@Module({
    imports: [
        AppConfigModule,
        RedisAppModule,
        UserModule,
        AppMongooseModule
    ],
    exports: [],
    providers: [],
    controllers: []
})
export class AppModule { }