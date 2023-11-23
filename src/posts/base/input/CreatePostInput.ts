import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
class PostCreateInput {
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  title: string;
}

export { PostCreateInput as PostCreateInput };
