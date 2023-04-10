"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const configuration_module_1 = require("./config/app/configuration.module");
const redis_module_1 = require("./config/redis/redis.module");
const user_module_1 = require("./component/user/user.module");
const configuration_module_2 = require("./config/database/mongodb/configuration.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            configuration_module_1.AppConfigModule,
            redis_module_1.RedisAppModule,
            user_module_1.UserModule,
            configuration_module_2.AppMongooseModule
        ],
        exports: [],
        providers: [],
        controllers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map