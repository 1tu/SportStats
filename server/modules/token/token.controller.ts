import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenEntity } from './token.entity';

@Controller('token')
export class TokenController {
  constructor(private _service: TokenService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: TokenEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: TokenEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
