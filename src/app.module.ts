import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CategorysModule } from './categorys/categorys.module';

@Module({
  imports: [UsersModule, UsersModule, PostsModule, CategorysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
