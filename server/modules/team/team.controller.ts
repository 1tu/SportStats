import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamEntity } from './team.entity';

@Controller('team')
export class TeamController {
  constructor(private _service: TeamService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: TeamEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: TeamEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
