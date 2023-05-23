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

