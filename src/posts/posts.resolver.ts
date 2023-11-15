import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostsService } from './posts.service';
import { GraphQLError } from 'graphql';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => Post)
  async getPost(@Args('id') id: string): Promise<Post> {
      return await this.postsService.findById(id);
   
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<Post> {
      return await this.postsService.findById(reference.id);
  }
}
