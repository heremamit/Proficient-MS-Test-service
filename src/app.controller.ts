import { MathService } from './math.sevice';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  @MessagePattern('add')
  accumulate(data: number): number {
    return this.mathService.squareOfTheNumber(data);
  }
}
