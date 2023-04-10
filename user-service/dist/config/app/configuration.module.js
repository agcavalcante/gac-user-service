"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppConfigModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModule = void 0;
const Joi = require("@hapi/joi");
const common_1 = require("@nestjs/common");
const configuration_1 = require("./configuration");
const configuration_service_1 = require("./configuration.service");
const config_1 = require("@nestjs/config");
let AppConfigModule = AppConfigModule_1 = class AppConfigModule {
    static forRoot() {
        return {
            module: AppConfigModule_1,
            providers: [configuration_service_1.AppConfigService],
            exports: [configuration_service_1.AppConfigService],
        };
    }
};
AppConfigModule = AppConfigModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
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
        providers: [config_1.ConfigService, configuration_service_1.AppConfigService],
        exports: [config_1.ConfigService, configuration_service_1.AppConfigService],
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;
//# sourceMappingURL=configuration.module.js.map