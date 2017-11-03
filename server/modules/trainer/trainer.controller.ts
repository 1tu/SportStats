import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { TrainerEntity } from './trainer.entity';

@Controller('trainer')
export class TrainerController {
  constructor(private _service: TrainerService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: TrainerEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: TrainerEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
