import React from 'react';
import { TicketType } from './KanbanBoard';

interface TicketProps {
  ticket: TicketType;
  onUpdate: (id: number, status: string) => void;
}

const Ticket: React.FC<TicketProps> = ({ ticket, onUpdate }) => {
  const moveForward = () => {
    const newStatus =
      ticket.status === 'todo' ? 'in-progress' : 'done';
    onUpdate(ticket.id, newStatus);
  };

  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      {ticket.status !== 'done' && (
        <button onClick={moveForward}>Move Forward</button>
      )}
    </div>
  );
};

export default Ticket;
