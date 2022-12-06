import { useEffect, useState } from 'react';
import './App.css';

var n;

const App = () => {
  const [blank,setblank]=useState('');
  const [val,setval]=useState(['','','','','','','','','']);
  const [pos,setpos] = useState(0);
  var i=0,t=0;
  for(i=0;i<9;i++) {
    var value;
    var number;
    
    value=Math.ceil(Math.random()*9);
    number=val.includes(value);
    val[i]=value;
    if(number==true)
    {
      i--;
      continue;
    }
  }
  for(i=0;i<9;i++){
    if(val[i]==9) {
      val[i]=' ';
      break;
    }
  }
  function value0(v){
    t=pos;
    if (val[v + 1] == '') 
    {
      val[v + 1] = val[v];
      val[1] = '';  
    }
    if (val[0] == '') 
    {
      val[0] = val[1];
      val[1] = '';
      
    }
    if (val[0] == '') 
    {
      val[0] = val[2];
      val[2] = '';
    }
    
    t++;
    setpos(t);
  }
  function value1()
  {
    t=pos;
    if(val[1] == ' ')
    {
      val[1] = val[0];
      val[0] = ' ';
    }
    if(val[1] == ' ')
    {
      val[1] = val[2];
      val[2] = ' ';
    }
    if(val[1] == ' ')
    {
      val[1] = val[4];
      val[4] = ' ';
    }
    t++;
    setpos(t);
     
  }
  function value2()
  {
    t=pos;
    if(val[2] == ' ')
    {
      val[2] = val[1];
      val[1] = ' ';
    }
    if(val[2] == ' ')
    {
      val[2] = val[1];
      val[1] = ' ';
    }
    if(val[2] == ' ')
    {
      val[2] = val[5];
      val[5] = ' ';
    }
    t++;
    setpos(t);
  }
  function value3(){
    t=pos;
    if(val[3] == ' ')
    {
      val[3] = val[0];
      val[0] = ' ';
    }
    if(val[3] == ' ')
    {
      val[3] = val[4];
      val[4] = ' ';
    }
    if(val[3] == ' ')
    {
      val[3] = val[6];
      val[6] = ' ';
    }
    t++;
    setpos(t);
  }

  return (
    <div className="App">
      <center>
        <div className="display">
          <div className="top">
            <input type="button" value={val[0]} onClick={()=>{ value0(val[0]) }}/>
            <input type="button" value={val[1]} onClick={()=>{ value1() }}/>
            <input type="button" value={val[2]} onClick={()=>{ value2() }}/>
          </div>
          <div className="middle">
            <input type="button" value={val[3]} onClick={()=>{ value() }}/>
            <input type="button" value={val[4]}/>
            <input type="button" value={val[5]}/>
          </div> 
          <div className="bottom">
            <input type="button" value={val[6]}/>
            <input type="button" value={val[7]}/>
            <input type="button" value={val[8]}/>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;