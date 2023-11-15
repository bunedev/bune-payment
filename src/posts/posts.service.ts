import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { createGraphQLError } from 'src/utils/graphql-errors.util';

@Injectable()
export class PostsService {
  constructor(protected readonly prisma: PrismaService) {}
  async findById(id: string): Promise<Post> {

    const post = await this.prisma.post.findUnique({ where: { id } });
    if(!post){
      throw  createGraphQLError('Post does not existed!',1000 );
    }
    return post 
  }
}
