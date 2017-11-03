import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PropertyCategoryService } from './propertyCategory.service';
import { PropertyCategoryEntity } from './propertyCategory.entity';

@Controller('propertyCategory')
export class PropertyCategoryController {
  constructor(private _service: PropertyCategoryService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: PropertyCategoryEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: PropertyCategoryEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
