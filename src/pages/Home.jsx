import React from 'react';
import TaskManager from '../components/TaskManager';

function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Task Management</h1>
      <TaskManager />
    </div>
  );
}

export default Home;