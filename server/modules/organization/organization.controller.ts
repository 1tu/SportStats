import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationEntity } from './organization.entity';

@Controller('organization')
export class OrganizationController {
  constructor(private _service: OrganizationService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: OrganizationEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: OrganizationEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
