import { IsString, isNegative } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}
