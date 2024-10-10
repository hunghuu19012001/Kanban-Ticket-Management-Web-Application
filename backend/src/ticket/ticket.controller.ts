import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { Ticket } from "./domain/ticket.entity";

@Controller("tickets")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Post()
  create(@Body() ticket: Ticket) {
    return this.ticketService.create(ticket);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() ticket: Partial<Ticket>) {
    return this.ticketService.update(id, ticket);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.ticketService.delete(id);
  }
}
