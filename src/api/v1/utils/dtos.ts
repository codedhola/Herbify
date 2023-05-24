import { Length, IsEmail, IsStrongPassword, IsNotEmpty } from 'class-validator'

export class UserDTO {
    @Length(10, 30)
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string

    @IsStrongPassword()
    @IsNotEmpty()
    password!: string
}

export class herbDTO {
    @IsNotEmpty()
    @Length(5, 50)
    name!: string

    @IsNotEmpty()
    @Length(20, 200)
    description!: string

    @Length(10, 100)
    botanicalName!: string

    @IsNotEmpty()
    @Length(20, 200)
    effect!: number

    @IsNotEmpty()
    @Length(20, 200)
    categoryID!: string
}