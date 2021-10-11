import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get('/')
  listMessages() {
    console.log('list messages')
  }
  
  @Post('/')
  createMessages() {

    console.log('create messages')
  }
  
  @Get('/:id')
  getMessages() {
    console.log('get messages')

  }
}
