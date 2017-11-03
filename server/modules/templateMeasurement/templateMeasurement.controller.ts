import { Controller, Req, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TemplateMeasurementService } from './templateMeasurement.service';
import { TemplateMeasurementEntity } from './templateMeasurement.entity';

@Controller('templateMeasurement')
export class TemplateMeasurementController {
  constructor(private _service: TemplateMeasurementService) { }

  @Get(':id')
  getOneById( @Param('id') id: number) {
    return this._service.getOneById(id);
  }

  @Get()
  get() {
    return this._service.get();
  }

  @Post()
  post( @Body() model: TemplateMeasurementEntity) {
    return this._service.post(model);
  }

  @Put()
  put( @Body() model: TemplateMeasurementEntity) {
    return this._service.put(model);
  }

  @Delete()
  delete( @Param('id') id: number) {
    return this._service.delete(id);
  }
}
