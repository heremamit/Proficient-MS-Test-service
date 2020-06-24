import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  squareOfTheNumber(data) {
    return data * data;
  }
}
