import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionEntity } from './permission.entity';

@Controller('permission')
export class PermissionController {
  constructor(private _service: PermissionService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: PermissionEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: PermissionEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
