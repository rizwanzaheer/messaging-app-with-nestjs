import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get('/')
  listMessages() {
    console.log('list messages')
  }
  
  @Post('/')
  createMessages(@Body() body: CreateMessageDto) {

    console.log('create messages body is: ', body)

  }
  
  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log('get messages params id is: ', id)

  }
}
