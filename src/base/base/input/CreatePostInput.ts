import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
class CreatePostInput {
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  title: string;
}

export { CreatePostInput as CreatePostInput };
