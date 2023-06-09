import * as Joi from '@hapi/joi';
import { DynamicModule, Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './configuration.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('MyApp'),
        APP_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
        APP_URL: Joi.string().default('http://my-app.test'),
        APP_PORT: Joi.number().default(4000),
        REDIS_URL: Joi.string().default('redis://localhost:6379'),
        DATABASE_URL: Joi.string().default('mongodb://localhost:27017'),
      }),
    })
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {
  static forRoot(): DynamicModule {
    return {
      module: AppConfigModule,
      providers: [AppConfigService],
      exports: [AppConfigService],
    };
  }
}