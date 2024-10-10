import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ticket from './Ticket';

export interface TicketType {
  id: number;
  title: string;
  description: string;
  status: string;
}

const KanbanBoard: React.FC = () => {
  const [tickets, setTickets] = useState<TicketType[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/tickets')
      .then((response) => setTickets(response.data))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, []);

  const handleUpdate = (id: number, status: string) => {
    axios.put(`http://localhost:3000/tickets/${id}`, { status })
      .then(() => {
        setTickets((prev) =>
          prev.map((ticket) =>
            ticket.id === id ? { ...ticket, status } : ticket
          )
        );
      });
  };

  return (
    <div className="kanban-board">
      {['todo', 'in-progress', 'done'].map((status) => (
        <div key={status} className="column">
          <h2>{status.toUpperCase()}</h2>
          {tickets
            .filter((ticket) => ticket.status === status)
            .map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} onUpdate={handleUpdate} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
