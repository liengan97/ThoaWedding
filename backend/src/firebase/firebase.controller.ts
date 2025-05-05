import { Controller, Get, Post, Body, Res } from "@nestjs/common";
import { Response } from "express";
import { FirebaseService } from "./firebase.service";

@Controller("api/wish")
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Get()
  handleEvents(@Res() res: Response) {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    this.firebaseService.listenForMessages((messages) => {
      res.write(`data: ${JSON.stringify(messages)}\n\n`);
    });
  }

  @Post()
  async sendMessage(@Body() body: { sender: string; message: string }) {
    return this.firebaseService.sendMessage(body.sender, body.message);
  }
}
