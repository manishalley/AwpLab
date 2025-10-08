import React, { useState } from 'react';
import ClassLifecycle from './components/ClassLifecycle';
import FunctionalLifecycle from './components/FunctionalLifecycle';

function App() {
  const [showClassComp, setShowClassComp] = useState(false);
  const [showFuncComp, setShowFuncComp] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>🧪 React Lifecycle Explorer</h1>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setShowClassComp(!showClassComp)}>
          Toggle Class Component
        </button>
        <button onClick={() => setShowFuncComp(!showFuncComp)} style={{ marginLeft: 10 }}>
          Toggle Functional Component
        </button>
      </div>

      {showClassComp && <ClassLifecycle />}
      {showFuncComp && <FunctionalLifecycle />}
    </div>
  );
}

export default App;
