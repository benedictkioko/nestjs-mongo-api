import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  error(): any {
    return {
      success: 200,
      data: "please make sure you are authenticated!"
    };
  }
}
