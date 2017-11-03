import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';

@Controller('role')
export class RoleController {
  constructor(private _service: RoleService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: RoleEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: RoleEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
