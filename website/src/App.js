import mqtt from 'mqtt';
import './App.css';
import Grid from './components/Grid';
import { useState } from 'react';


function App() {
  var vals = {"Val2":1,"Val3":1,"Val4":1,"Val5":1,"Val6":1,"Val7":1,"Val8":1,"Val9":1,"Val10":1};
  const [path,setPath] = useState(Array(9).fill("normal"))
    // var src = 0;
    // var dest = 8;

    // function SetSrcFunc(){
    //   var selectElement = document.querySelector('#SourceForm');
    //   var output = selectElement.value;
    //   console.log(output);
    //   src = (parseInt(output))
    // }

    // function SetDestFunc(){
    //   var selectElement = document.querySelector('#DestForm');
    //   var output = selectElement.value;
    //   console.log(output);
    //   dest = (parseInt(output))
    // }
  
   function getPath(){
       const graph = [
         [0,1,0,1,0,0,0,0,0],
         [1,0,1,0,1,0,0,0,0],
         [0,1,0,0,0,1,0,0,0],
         [1,0,0,0,1,0,1,0,0],
         [0,1,0,1,0,1,0,1,0],
         [0,0,1,0,1,0,0,0,1],
         [0,0,0,1,0,0,0,1,0],
         [0,0,0,0,1,0,1,0,1],
         [0,0,0,0,0,1,0,1,0]
        ];
        var selectElement = document.querySelector('#SourceForm');
        var output = selectElement.value;
        //  console.log(output);
        var src = parseInt(output);
        
        selectElement = document.querySelector('#DestForm');
        output = selectElement.value;
        //  console.log("Dest:" + output);
        var dest = parseInt(output);
        
        var temp = Array(9).fill("normal");
        var msg = vals;
        var ctr = 0;
        for(const[,value] of Object.entries(msg)){
          if(value === 0 && ctr !== src){
            temp[ctr] = "fire"
            for(let i = 0; i < 9; i++)
                graph[i][ctr] = 0;
           }
           ctr++;
       }
        // console.log(graph);

       var dist = Array(9).fill(Number.MAX_VALUE);
       var path = Array(9).fill(-1);
       dist[src] = 0;
       path[src] = src;

       for(let i = 0; i < 8; i++){
           for(let j = 0; j < 9; j++){
               if(dist[j] !== Number.MAX_VALUE){
                   for(let k = 0; k < 9; k++){
                       if(graph[j][k] === 1 && dist[j] + 1 < dist[k]){
                           dist[k] = dist[j] + 1;
                           path[k] = j;
                       }
                   }
               }
           }
       }

      //  console.log(dist);
      //  console.log(path);
       ctr = dest;
       var path_to_dest = [dest];
       while(ctr !== src){
           if(path[ctr] === -1){
               console.log("Not possible");
               break;
           }    
           path_to_dest.push(path[ctr]);
           ctr = path[ctr];
       }
      //  console.log(path_to_dest);
      if(ctr === src){
        for(var i = 0; i < path_to_dest.length; i++){
          temp[path_to_dest[i]] = "path";
       }
      }
      else{
        for(let i = 0; i < 9; i++){
          temp[i] = "fire";
        }
      }
      setPath(temp);
   }



  var options={
    clientId: 'mqttjs_nathaditya',
    username: "nathaditya",
    password: "qgtszZnVrMT4X#f"
  }

  const MQTT_URL = "wss:b6f457aaa3a941ad806ee701e029f684.s1.eu.hivemq.cloud:8884/mqtt";
  const client = mqtt.connect(MQTT_URL, options);
  console.log('Connecting');

  client.on('connect', () => {
    // console.log('Connected');
  });
  client.subscribe("PinVals", (err) =>{
      // console.log("subscribed!");
  })

  client.on('message', (topic, message) => {
    let msgString = message.toString()
    try {
      let msgJson =  JSON.parse(msgString)
      vals = msgJson;
      // console.log(vals);
      getPath();
    } 
    catch (error) {
      console.log("Invalid json data")
    }
  });
  
  return (
    <>
      <div className="Background">
      <div className='Header'> Smart Fire Evacuation System</div>
      <div className='Items'>
      <Grid
      path = {path}/>
      <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
        <div className = "DropDown">
        Source
        <select className="form-select" id = "SourceForm" aria-label="Default select example" style = {{margin:"5px", marginLeft:"0px"}}>
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            <option value="7">8</option>
            <option value="8">9</option>
        </select>
        
        Destination
        <select className="form-select" id ="DestForm" aria-label="Default select example"  defaultValue={"8"} style={{margin:"5px", marginLeft:"0px"} }>
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            <option value="7">8</option>
            <option value="8">9</option>
          </select>
        </div>
      </div>
      </div>
      <div style={{textAlign:"right", marginRight:"5px", marginTop:"7vh", marginBottom:"3px"}}>Developed by Aditya Nath </div>
      </div>
    </>
  );
}

export default App;
