import { APP_FILTER } from '@nestjs/core';
import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { DogModule } from './dog/dog.module';
import { CatModule } from './cat/cat.module';
import { HttpErrorFilter } from './shared/http-error.filter';

@Module({
  imports: [
        HttpModule,
        DogModule, 
        CatModule, 
        MongooseModule.forRoot('mongodb://localhost/mongo-connect',
        {useNewUrlParser: true})
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpErrorFilter,
  }],
})
export class AppModule {}
