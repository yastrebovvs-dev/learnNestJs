import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersModule } from './modules/users.module';
import { Test1Module } from './test-1/test-1.module';
import { Test2Module } from './test-2/test-2.module';
import { Test3Module } from './test-3/test-3.module';
import { Test4Module } from './test-4/test-4.module';
import { Test5Module } from './test-5/test-5.module';
import { Test6Module } from './test-6/test-6.module';
import { Test7Module } from './test-7/test-7.module';
import { Test8Module } from './test-8/test-8.module';
import { Test9Module } from './test-9/test-9.module';

const environment: string = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${ environment }.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PSQL_HOST,
      port: Number(process.env.PSQL_PORT),
      username: process.env.PSQL_USER,
      password: process.env.PSQL_PASS,
      database: 'test_crud',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    Test1Module,
    Test2Module,
    Test3Module,
    Test4Module,
    Test5Module,
    Test6Module,
    Test7Module,
    Test8Module,
    Test9Module,
  ]
})
export class AppModule {}
