import React from 'react';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="p-4 text-center h-screen">
      {/* <p className="p-1 align-left"> Click + New Task To create your Todays Task</p> */}
      <TaskManager />
    </div>
  );
}

export default App;
