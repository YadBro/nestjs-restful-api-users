import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  age: any;
}
