import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogSchema } from './dog.schema';


@Module({
    imports: [MongooseModule.forFeature([{name: 'Dog', schema: DogSchema}])],
    controllers: [DogController],
    providers: [DogService],
})
export class DogModule {}
