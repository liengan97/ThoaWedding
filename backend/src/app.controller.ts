import { Controller, Get, Res, Req, Next } from '@nestjs/common';
import { AppService } from './app.service';
import { NextFunction, Response } from "express";
import { join } from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("*")
  getHello(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    // const filePath = join(__dirname, "..", "public", "index.html");
    // console.log("Serving file from:", filePath);
    // res.sendFile(filePath);
    // Check if the request is for an asset

    console.log('Path', req.url);

    if (req.url.startsWith("/api")) {
      console.error('WDVDSFSF');
      return next();
    }

    // serve static images
    if (req.url.startsWith("/") || req.url.startsWith("/assets/")) {
      return res.sendFile(join(__dirname, "..", "public", req.url));
    }

    // Otherwise, return the React app
    res.sendFile(join(__dirname, "..", "public", "index.html"));
  }
}
