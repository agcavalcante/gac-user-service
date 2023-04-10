import { Redis } from '@nestjs-modules/ioredis';
export declare class AppController {
    private readonly redis;
    constructor(redis: Redis);
    setValue(key: string, value: any): Promise<void>;
    getValue(key: string): Promise<any>;
}
