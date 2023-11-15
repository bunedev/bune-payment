import { Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import * as path from 'path';
import { appendFile } from "node:fs/promises";

@Catch()
export class GqlAllExceptionsFilter implements GqlExceptionFilter {

  private readonly logger = new Logger(GqlAllExceptionsFilter.name);
  private logFilePath = path.join(__dirname, '../../../logs/error.log'); // Adjust the path as needed

  private async logToFile(message: string) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    await appendFile(this.logFilePath, logMessage);
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const context = gqlHost.getContext();
    const response = context?.res; // context may not include the response

    let status = 500;
    let message = 'Internal Server Error';
    let messageCode = 0;
    let code = 'INTERNAL_SERVER_ERROR';
    let stacktrace = [];

    if (exception instanceof GraphQLError) {
      console.log('exception.extensions', exception.extensions)
      message = exception.message;
      code = exception.extensions?.code || 'INTERNAL_SERVER_ERROR' as any;
      stacktrace = exception.stack?.split('\n') || [];
      status = exception.extensions?.status || 500 as any;
      messageCode = exception.extensions?.messageCode as any;
    } else if (exception instanceof Error) {
      status = 'status' in exception ? exception['status'] : 500 as any;
      message = exception.message;
      stacktrace = exception.stack?.split('\n') || [];
    } else {
      // For unexpected or unhandled errors, log the full error
      this.logger.error('Unexpected error', exception);
    }

    if (response) {
      // Send the JSON error response as expected in GraphQL
      response.status(status).json({
        errors: [
          {
            message,
            extensions: {
              code,
              messageCode,
              stacktrace,
            },
          },
        ],
        data: null,
      });
    } else {
      // If response is not available, log the error details
      this.logger.error('HTTP response object is undefined', {
        status,
        message,
        code,
        messageCode,
        stacktrace,
        exception,
      });
      // Here you should decide how to handle the lack of a response object
      // Perhaps re-throwing the exception or handling it in another way
    }

     // After determining the error details
     const logOutput = `Error: ${message} Code: ${code} Status: ${status} messageCode: ${messageCode} stacktrace: ${stacktrace}`;
     this.logger.error(logOutput); // Logs to the console
     this.logToFile(logOutput); // Logs to the file
  }
}
