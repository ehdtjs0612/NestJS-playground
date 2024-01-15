import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entities/User.entities';
import { PostsModel } from 'src/posts/entities/Post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserModel,
    ])
  ],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
