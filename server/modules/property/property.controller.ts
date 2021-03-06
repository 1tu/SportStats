import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyEntity } from './property.entity';

@Controller('property')
export class PropertyController {
  constructor(private _service: PropertyService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: PropertyEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: PropertyEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
