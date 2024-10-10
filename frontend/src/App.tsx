import React from 'react';
import KanbanBoard from './component/KanbanBoard';

const App: React.FC = () => {
  return (
    <div>
      <h1>Kanban Ticket Management</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;
