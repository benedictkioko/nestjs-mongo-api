import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { DogModule } from './dog/dog.module';
import { CatModule } from './cat/cat.module';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';

@Module({
  imports: [
        HttpModule,
        DogModule, 
        CatModule, 
        MongooseModule.forRoot('mongodb://localhost/mongo-connect',
        {useNewUrlParser: true})
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
],
})
export class AppModule {}
