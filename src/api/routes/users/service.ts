import { IsDateString, IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class CreateUserBody {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  lastName: string

  @IsEmail()
  email: string
}

export class CreateUserResponse {
  @IsUUID()
  id: string

  @IsDateString()
  createdAt: string
}
