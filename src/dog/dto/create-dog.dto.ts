import { IsString } from "class-validator";

export class CreateDogDto {
    @IsString()
    name: string;

    @IsString()
    breed: string;

    @IsString()
    owner: string;
  }