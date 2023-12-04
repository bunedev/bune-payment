import { Module } from '@nestjs/common';
import { PostsResolver } from './base.resolver';
import { PostsService } from './base.service';

@Module({
  providers: [PostsResolver, PostsService],
  imports: [],
  exports: [PostsService],
})
export class PostsModule {}
