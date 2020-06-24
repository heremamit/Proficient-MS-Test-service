import { Transport } from '@nestjs/microservices';

export const microserviceOptions = {
  transport: Transport,
  options: {
    host: '127.0.0.1',
    port: 8877,
  },
};
