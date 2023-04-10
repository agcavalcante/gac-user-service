import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppConfigModule } from "config/app/configuration.module";
import { AppConfigService } from "config/app/configuration.service";

@Module({
  imports: [
    // AppConfigModule,
    // MongooseModule.forRootAsync({
    //   imports: [AppConfigModule],
    //   useFactory: async (configService: AppConfigService) => ({
    //     config: {
    //       uri: configService.databaseUrl,
    //     },
    //   }),
    //   inject: [AppConfigService],
    // }),
    MongooseModule.forRoot(process.env.DATABASE_URL)
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppMongooseModule { }