import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './interface/dog.interface';

@Controller('dogs')
export class DogController {
    constructor(private readonly dogService: DogService) {}

    @Post()
    async createDog(@Body() createDogDto: CreateDogDto) {
        await this.dogService.createDog(createDogDto);
    }

    @Get()
    async getDogs(): Promise<Dog[]> {
        return this.dogService.getDogs();
    }

    @Get(':id')
    async getDog(@Param('id') id: String){
        return await this.dogService.getDog(id);
    }

}
