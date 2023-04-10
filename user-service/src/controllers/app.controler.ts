import { Body, Controller, Get, Param, Post, } from '@nestjs/common';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';

@Controller('redis')
export class AppController {
  constructor(
    @InjectRedis() private readonly redis: Redis,
  ) {}

  @Post(':key')
  async setValue(@Param('key') key: string, @Body() value: any): Promise<void> {
    await this.redis.set(key, value);
  }

  @Get(':key')
  async getValue(@Param('key') key:string): Promise<any> {
    return await this.redis.get(key);
  }
}