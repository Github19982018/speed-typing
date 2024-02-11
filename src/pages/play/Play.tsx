import './Play.css'
import { useRef, useState, useEffect} from "react"
import Link from "../../components/Link"

function accuracy(total, input) {
  let accumalator = 0;
  for(let i=0; i<=input.length-1;i++) {
    if(input[i] == total[i]){accumalator++}
  }
    return accumalator*100/input.length;
}

export const Play = ({timer=1, level}:{timer:number;level:string;}) => {
    const t = timer?timer*60:60
    const [time, setTime] = useState<number>(t);
    const timeRef = useRef(0);
    const inputRef = useRef();
    const contentRef = useRef()
    const [start, setStart] = useState<boolean>(false);
    const [input, setInput] = useState('')
    const [out,setOut] = useState<object>({wpm:null,accr:null});
    
    const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus natus quasi pariatur praesentium, nam dolor culpa asperiores.Hic cum porro dolores voluptatem quia libero impedit maxime quibusdam quo odio."
    const span = useRef(content.split('').map((val,index)=>{
      return {val:val,id:index,className:"inactive"}
    }));

    
    useEffect(() => { 
         if (time ==  0) {
            clearInterval(timeRef.current);
            inputRef.current.disabled=true;
            setOut({wpm:input.length/5/(t/60),accr:accuracy(content.split(''), input.split(''))});

         }
         
    },[time,t,input])

    const changeHandler = (e) => {
      setInput(e.target.value);
      const inputArray = e.target.value.split('');
      span.current[inputArray.length].className=='inactive'?span.current[inputArray.length].className='active':span.current[inputArray.length].className='inactive';span.current[inputArray.length+1].className='inactive';
      inputArray[inputArray.length-1]?inputArray[inputArray.length-1]===span.current[inputArray.length-1].val?span.current[inputArray.length-1].className='green':span.current[inputArray.length-1].className='red':null;
      if (!start) {
        setStart(true);
        timeRef.current = setInterval(()=>{setTime(time => time-1)},1000);
        return () => clearInterval(timeRef.current);
     }
    }

    const againHandler = () => {
        clearInterval(timeRef.current);
        setTime(t);
        setStart(false);
        setInput('');
        inputRef.current.disabled = false;
        inputRef.current.focus();
        span.current.forEach((item)=>item.className="inactive");
    }

  return (
    <div>
      <Link href='/' className='item'> 
          Landing
      </Link>
       <h2>{time}</h2>
       <h2 ref={contentRef} style={{overflowX:"auto", width:"400px", height:"40px", whiteSpace:"nowrap"}}>{span.current.map((val,index)=>{
           return <span className={val.className} key={val.id}>{val.val}</span>
       })}</h2>
       <input ref={inputRef} onChange={changeHandler} value={input} title="type here" type="text" autoFocus/>
       <button onClick={againHandler}>Again</button>
      Play
      {out.wpm>0&&<h2>{out.wpm}</h2>}
      {out.accr>0&&<h2>{out.accr+'%'}</h2>}
      
    </div>
  )
}
