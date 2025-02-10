import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addHabit,removeHabit,updateHabit } from './Redux/habitSlice'
function App() {
  const habits = useSelector(state => state.habits);
  let dispatch = useDispatch();
  const [count, setCount] = useState(0);
  
  // const [habits, setHabits] = useState(
  //   [
  //     {date:"7/2/4",studyRev:"complete",studyFut:"incompleter",programLect:"pending",programProject:"complete"},
  //     {date:"8/2/4",studyRev:"complete",studyFut:"incompleter",programLect:"pending",programProject:"complete"},
  //   ]
  // )
  const date = new Date;
  // dispatch(addHabit());
  console.log(habits);
  habits.forEach(element => {
    console.log(element);
  });
  
  return (
    <div className='m-0 p-0 bg-black text-white w-screen h-screen'>
      <h1 className='text-3xl font-bold text-center pt-5'>{date.toLocaleDateString("en-US",{month:"long"})}</h1>
      {
        habits.map((item,key)=>(
          <h1 key={key}>{item.date}</h1>
        ))
      }

      <p className=''></p>
    </div>
  )
}

export default App
