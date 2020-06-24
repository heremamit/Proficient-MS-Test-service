import { MathService } from './math.sevice';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MathService],
})
export class AppModule {}
