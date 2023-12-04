import { GraphQLError } from 'graphql';

export function createGraphQLError(
  message: string,
  messageCode: number,
): GraphQLError {
  return new GraphQLError(message, {
    extensions: {
      code: 'BAD_USER_INPUT',
      messageCode: messageCode,
    },
  });
}
