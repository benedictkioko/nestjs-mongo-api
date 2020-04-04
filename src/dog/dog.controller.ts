import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './interface/dog.interface';

@Controller('dogs')
export class DogController {
    constructor(private readonly dogService: DogService) {}

    @Post()
    async createDog(@Body() createDogDto: CreateDogDto) {
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
    async updateDog(@Param('id') id: string, @Body() createDogDto: Partial<CreateDogDto> ){
        return await this.dogService.updateDog(id, createDogDto);
    }

    @Delete(':id')
    async deleteDog(@Param('id') id: string){
        return await this.dogService.deleteDog(id)
    }

}
