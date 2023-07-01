import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { BillModule } from './bill/bill.module';
import { BillItemModule } from './bill-item/bill-item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    ProductModule,
    AuthModule,
    CategoryModule,
    BillModule,
    BillItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
