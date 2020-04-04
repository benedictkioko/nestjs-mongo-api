import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dog } from './interface/dog.interface';
import { CreateDogDto } from './dto/create-dog.dto';


@Injectable()
export class DogService {

    constructor(@InjectModel('Dog') private dogModel: Model<Dog>){
        
    }

    async createDog(createDogDto: CreateDogDto): Promise<Dog> {
        const createdDog = new this.dogModel(createDogDto);
        return createdDog.save();
    }

    async getDogs(): Promise<Dog[]>{
        const exist = await this.dogModel.find().exec();
        if (!exist){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return exist;
    }

    async getDog(id: string): Promise<Dog>{
        const exist = await this.dogModel.findOne({_id: id});
        // check if exists
        if (!exist){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return exist;
    }

    async updateDog(_id: string, createDogDto: Partial<CreateDogDto>): Promise<Dog> {
        const exist = await this.dogModel.findOne({_id})

        if (!exist){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
         
        await this.dogModel.updateOne({ _id }, createDogDto );

        return exist;
    }

    async deleteDog(_id: string): Promise<Dog> {

        const exist = await this.dogModel.findOne({_id})

        if (!exist){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        await this.dogModel.deleteOne({ _id});

        return exist;
    }

 }
