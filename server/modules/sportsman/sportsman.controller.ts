import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { SportsmanService } from './sportsman.service';
import { SportsmanEntity } from './sportsman.entity';

@Controller('sportsman')
export class SportsmanController {
  constructor(private _service: SportsmanService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: SportsmanEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: SportsmanEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
