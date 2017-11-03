import * as path from 'path';
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

  @Get()
  index( @Res() res: Response) {
    res.sendFile('index.html', { root: path.join(__dirname, '/../../../') });
  }

}
