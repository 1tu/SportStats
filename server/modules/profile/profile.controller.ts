import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileEntity } from './profile.entity';

@Controller('profile')
export class ProfileController {
  constructor(private _service: ProfileService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: ProfileEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: ProfileEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
