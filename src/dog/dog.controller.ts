import { Controller, Get, Post, Put, Body, Param, Delete, UsePipes, Logger } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './interface/dog.interface';
import { ValidationPipe } from '../shared/validation.pipe';
import { stringify } from 'querystring';

@Controller('dogs')
export class DogController {

    // log data coming in
    private logger = new Logger('DogController');

    constructor(private readonly dogService: DogService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async createDog(@Body() createDogDto: CreateDogDto) {
        this.logger.log(JSON.stringify(createDogDto));
        return await this.dogService.createDog(createDogDto);
    }

    @Get()
    async getDogs(): Promise<Dog[]> {
        return this.dogService.getDogs();
    }

    @Get(':id')
    async getDog(@Param('id') id: string){
        return await this.dogService.getDog(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async updateDog(@Param('id') id: string, @Body() createDogDto: Partial<CreateDogDto> ){
        this.logger.log(JSON.stringify(createDogDto));
        return await this.dogService.updateDog(id, createDogDto);
    }

    @Delete(':id')
    async deleteDog(@Param('id') id: string){
        return await this.dogService.deleteDog(id)
    }

}
