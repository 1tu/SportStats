import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { QuantityService } from './quantity.service';
import { QuantityEntity } from './quantity.entity';

@Controller('quantity')
export class QuantityController {
  constructor(private _service: QuantityService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: QuantityEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: QuantityEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
