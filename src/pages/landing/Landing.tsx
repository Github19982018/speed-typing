
import { useEffect } from "react";
import Link from "../../components/Link"


export const Landing = ({setLevel,setTimer}:
  {setLevel: React.Dispatch<React.SetStateAction<string>>;
    setTimer:  React.Dispatch<React.SetStateAction<number>>;}) => {

    useEffect(() => {
      setLevel('easy');
      setTimer(1);
    },[setLevel,setTimer])

    const timeHandler = (e) => {
      setTimer(e.target.value);
    }
    
    const levelHandler = (e) => {
      setLevel(e.target.value);
    }

  return (
    <div>
        <label htmlFor="time">Select time duration:</label>
        <select defaultValue={1} 
        title='time' 
        name="time" id="time" 
        onChange={(e) => timeHandler(e)}>
            <option value=".5">30seconds</option>
            <option value="1">1 minute</option>
            <option value="2">2 minutes</option>
            <option value="3">3 minutes</option>
        </select>
        <label htmlFor="level">Select difficulty:</label>
        <select title='difficulty' 
        name="level" id="level" 
        onChange={(e) => levelHandler(e)}> 
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <Link href='/play' className='item'> 
          Play
      </Link>
    </div>
  )
}
