import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { MeasurementEntity } from './measurement.entity';

@Controller('measurement')
export class MeasurementController {
  constructor(private _service: MeasurementService) {}

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: MeasurementEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: MeasurementEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
