import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ServeStaticModule} from "@nestjs/serve-static/dist/serve-static.module";
import {resolve} from "path";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
            isGlobal: true
        }),
        // TypeOrmModule.forRoot({
        //     type: 'postgres',
        //     host: process.env.POSTGRES_HOST,
        //     port: Number(process.env.POSTGRES_PORT),
        //     username: process.env.POSTGRES_USERNAME,
        //     password: process.env.POSTGRES_PASSWORD,
        //     database: process.env.POSTGRES_DATABASE,
        //     entities: [],
        //     synchronize: true,
        // }),
        // ServeStaticModule.forRoot({
        //     rootPath: resolve(__dirname, 'static'),
        // }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
