import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { AppConfigModule } from 'config/app/configuration.module';
import { AppConfigService } from 'config/app/configuration.service';
import { AppController } from 'controllers/app.controler';

@Module({
    imports: [
        AppConfigModule,
        RedisModule.forRootAsync({
            imports: [AppConfigModule],
            useFactory: async (configService: AppConfigService) => ({
                config: {
                    url: configService.redisUrl,
                },
            }),
            inject: [AppConfigService],
        }),
    ],
    exports: [],
    providers: [],
    controllers: [AppController]
})
export class RedisAppModule { }