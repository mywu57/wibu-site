import { IsOptional, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  public name: string;

  @IsOptional()
  parentId?: number;
}
