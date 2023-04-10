"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const configuration_service_1 = require("./config/app/configuration.service");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configApp = app.get(configuration_service_1.AppConfigService);
    await app.listen(configApp.port);
}
bootstrap();
//# sourceMappingURL=main.js.map