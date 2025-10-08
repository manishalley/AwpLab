import React, { useEffect, useState } from 'react';

function FunctionalLifecycle() {
  const [count, setCount] = useState(0);

  console.log('🧱 Render (Functional)');

  useEffect(() => {
    console.log('🟢 useEffect (componentDidMount equivalent)');

    return () => {
      console.log('🔴 Cleanup (componentWillUnmount)');
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log('🟤 useEffect after update (componentDidUpdate equivalent)');
    }
  }, [count]);

  return (
    <div>
      <h3>Functional Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}

export default FunctionalLifecycle;
