import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interface/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatService {
    constructor(@InjectModel('Cat') private catModel: Model<Cat>) {}
  
    async create(createCatDto: CreateCatDto): Promise<Cat> {
      const createdCat = new this.catModel(createCatDto);
      return createdCat.save();
    }
  
    async findAll(): Promise<Cat[]> {
      const exist = await this.catModel.find().exec();

      if (!exist){
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }
      return exist;
    }
}
  
