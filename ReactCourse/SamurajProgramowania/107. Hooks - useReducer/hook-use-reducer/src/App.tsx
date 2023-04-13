import { randomUUID } from 'crypto';
import React, { useReducer } from 'react';

const courses = [
  { id: randomUUID(), name: "First" },
  { id: randomUUID(), name: "Second" },
  { id: randomUUID(), name: "Third" },
  { id: randomUUID(), name: "Four" },
  { id: randomUUID(), name: "Five" },
]

const coursesReducer = (state: { id: string, name: string }, action: { type: string }) => {
  switch (action.type) {
    case "ADD":
      return;
    case "REMOVE":
      
      return;
    case "FETCH":
      return;
    default:
      throw new Error("Oops something went wrong!");
  }
}


const App = () => {
  const [state, dispatch] = useReducer(coursesReducer, courses);
  return (
    <div>
    </div>
  );
};

export default App;