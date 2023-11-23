import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { createGraphQLError } from 'src/utils/graphql-errors.util';
import { ErrorCodes, ErrorMessages } from 'src/common/constants/errors';
import { CreatePostInput } from './base/input/CreatePostInput';

@Injectable()
export class PostsService {
  constructor(protected readonly prisma: PrismaService) {}
  async findById(id: string): Promise<Post> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw createGraphQLError(
        ErrorMessages.PostNotFound,
        ErrorCodes.PostNotFound,
      );
    }
    return post;
  }

  async createPost(data: CreatePostInput): Promise<Post> {
    return await this.prisma.post.create({
      data,
    });
  }
}
