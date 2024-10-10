import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TicketModule } from "./ticket/ticket.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123456",
      database: "postgres",
      schema: "kanban_schema",
      entities: ["dist/**/*.entity{.ts,.js}"],
      migrations: ["dist/migrations/*.js"],
      synchronize: false,
    }),
    TicketModule,
  ],
})
export class AppModule {}
