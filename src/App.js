import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value); // 👈 changed "container" → "counter"
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: 10 }}>
        Decrement
      </button>
    </div>
  );
}

export default App;
