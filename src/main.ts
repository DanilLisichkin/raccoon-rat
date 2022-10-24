import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule,{ cors: true })

  const configSwagger = new DocumentBuilder()
      .setTitle( process.env.SWAGGER_TITLE)
      .setDescription( process.env.SWAGGER_DESCRIPTION)
      .setVersion( process.env.SWAGGER_VERSION)
      .addTag( process.env.SWAGGER_TAG)
      .build()
  const documentSwagger = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup("/api/docs",app, documentSwagger)

  await app.listen(PORT,()=> console.log(`Server starts on port ${PORT}`))

}
start()