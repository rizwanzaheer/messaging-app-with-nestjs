import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    console.log('findOne');
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    console.log('findAll');
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }
  async create(content: string) {
    console.log('create');
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json.json', JSON.stringify(messages));
  }
}
