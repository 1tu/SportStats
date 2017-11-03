import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { SportService } from './sport.service';
import { SportEntity } from './sport.entity';

@Controller('sport')
export class SportController {
  constructor(private _service: SportService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: SportEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: SportEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
