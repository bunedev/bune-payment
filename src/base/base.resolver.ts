import {
  Resolver,
  Query,
  Args,
  ResolveReference,
  Mutation,
} from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostsService } from './base.service';
import { CreatePostInput } from './base/input/CreatePostInput';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => Post)
  async getPost(@Args('id') id: string): Promise<Post> {
    return await this.postsService.findById(id);
  }

  @Mutation(() => Post)
  async createPost(@Args() createPostData: CreatePostInput): Promise<Post> {
    return await this.postsService.createPost(createPostData);
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<Post> {
    return await this.postsService.findById(reference.id);
  }
}
