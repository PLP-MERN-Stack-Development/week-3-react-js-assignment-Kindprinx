import React, { useState } from 'react';
import Button from './Button';
import { useLocalStorage } from '../hooks/useLocalStorage';

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        completed: false,
      },
    ]);
    setNewTask('');
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={addTask} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <Button type="submit">Add</Button>
        </div>
      </form>

      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded shadow"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-4 w-4"
              />
              <span
                className={`${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.text}
              </span>
            </div>
            <Button
              variant="danger"
              onClick={() => deleteTask(task.id)}
              className="ml-2"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;