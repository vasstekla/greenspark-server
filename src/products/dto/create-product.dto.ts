import { IsNotEmpty, IsNumber, IsString, IsBoolean, MaxLength } from "class-validator";
export class CreateProductDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly type: string;

    @IsNumber()
    @IsNotEmpty()
    readonly amount: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly action: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly active: boolean;

    @IsBoolean()
    @IsNotEmpty()
    readonly linked: boolean;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly selectedColor: string;
}