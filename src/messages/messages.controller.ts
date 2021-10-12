import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesSrv: MessagesService;
  constructor() {
    this.messagesSrv = new MessagesService();
  }
  @Get('/')
  listMessages() {
    console.log('list messages');
    return this.messagesSrv.findAll();
  }

  @Post('/')
  createMessages(@Body() body: CreateMessageDto) {
    console.log('create messages body is: ', body);
    return this.messagesSrv.create(body.content);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log('get messages params id is: ', id);
    return this.messagesSrv.findOne(id);
  }
}
