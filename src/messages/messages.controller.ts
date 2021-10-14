import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesSrv: MessagesService) {}

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
    const msg = this.messagesSrv.findOne(id);
    if (!msg) {
      throw new NotFoundException('message not found!');
    }
    return msg;
  }
}
