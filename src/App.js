import './App.css';
import React,{useState} from 'react';

function App() {
  const [value, setValue]=useState("")
  const [input,setInput]=useState([])

  const valueChange=(e)=>{
     setValue(e.target.value)
     console.log(e.target.value)
  }
  const valueSubmit=(e)=>{
    e.praventDefault()
    
  }
  const handleClick=()=>{
    if (!value) {
			alert('Enter todo');
			return;
		}
    const newValue = {
			id: Math.floor(Math.random() * 10000),
			value: value,
		};
    setInput(list=>[...list,newValue])

    setValue('')
  }
  const handleDelete=(id)=>{
    const newDelValue=input.filter(a=>a.id!==id);
    setInput(newDelValue)
  }
  
  return (
    <div className="app_bigdiv">
      <div className='app_minidiv'>
        <h1>To Do App</h1>
        <div className='app_formdiv'>
        <form onSubmit={valueSubmit}>
          <input placeholder='Melumati daxil et' value={value} onChange={valueChange}/>
        </form>
        <button  onClick={() => handleClick()}>Add</button>

        </div>
        <div className='app_resultdiv'>
          <ul>
          {
            input.map((i)=>{
              return(
                <li key={i.id}>{i.value}
                <button onClick={()=>handleDelete(i.id)}><i class="fa-solid fa-trash"></i></button>
                </li>
              )
            })
          }

          </ul>
         
        </div>
      
        

      </div>
      
    </div>
  );
}

export default App;
