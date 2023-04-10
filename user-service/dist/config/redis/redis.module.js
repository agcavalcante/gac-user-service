"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisAppModule = void 0;
const ioredis_1 = require("@nestjs-modules/ioredis");
const common_1 = require("@nestjs/common");
const configuration_module_1 = require("../app/configuration.module");
const configuration_service_1 = require("../app/configuration.service");
const app_controler_1 = require("../../controllers/app.controler");
let RedisAppModule = class RedisAppModule {
};
RedisAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            configuration_module_1.AppConfigModule,
            ioredis_1.RedisModule.forRootAsync({
                imports: [configuration_module_1.AppConfigModule],
                useFactory: async (configService) => ({
                    config: {
                        url: configService.redisUrl,
                    },
                }),
                inject: [configuration_service_1.AppConfigService],
            }),
        ],
        exports: [],
        providers: [],
        controllers: [app_controler_1.AppController]
    })
], RedisAppModule);
exports.RedisAppModule = RedisAppModule;
//# sourceMappingURL=redis.module.js.map