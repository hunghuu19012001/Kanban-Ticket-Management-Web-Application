import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Ticket } from "./domain/ticket.entity";

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }

  create(ticket: Ticket): Promise<Ticket> {
    return this.ticketRepository.save(ticket);
  }

  update(id: number, ticket: Partial<Ticket>): Promise<void> {
    return this.ticketRepository.update(id, ticket).then(() => {});
  }

  delete(id: number): Promise<void> {
    return this.ticketRepository.delete(id).then(() => {});
  }
}
