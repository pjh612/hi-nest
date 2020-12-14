import { Controller, Get } from '@nestjs/common';
import { getDefaultSettings } from 'http2';

@Controller('')
export class AppController {
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}
