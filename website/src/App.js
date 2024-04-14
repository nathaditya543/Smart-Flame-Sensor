import mqtt from 'mqtt';
import './App.css';
import Grid from './components/Grid';
import { useState } from 'react';

function App() {

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
      var msg = Vals;
      var ctr = 0;
      for(const[key,value] of Object.entries(msg)){
          if(value == 0){
              for(let i = 0; i < 9; i++)
              graph[i][ctr] = 0;
          }
          ctr++;
      }
      // console.log(graph);

      var src = 0;
      var dest = 8;
      var dist = Array(9).fill(Number.MAX_VALUE);
      var path = Array(9).fill(-1);
      dist[src] = 0;
      path[src] = 0;

      for(let i = 0; i < 8; i++){
          for(let j = 0; j < 9; j++){
              if(dist[j] != Number.MAX_VALUE){
                  for(let k = 0; k < 9; k++){
                      if(graph[j][k] == 1 && dist[j] + 1 < dist[k]){
                          dist[k] = dist[j] + 1;
                          path[k] = j;
                      }
                  }
              }
          }
      }

      console.log(dist);
      console.log(path);
      ctr = dest;
      var path_to_dest = [dest];
      while(ctr != src){
          if(path[ctr] == -1){
              console.log("Not possible");
              break;
          }    
          path_to_dest.push(path[ctr]);
          ctr = path[ctr];
      }
      console.log(path_to_dest);

  }

  const[Vals, setVals] = useState({});

  var options={
    clientId: "mqttjs_nathaditya",
    username: "nathaditya",
    password: "qgtszZnVrMT4X#f"
  }

  const MQTT_URL = "wss://2807b15f3be44f91af8ea438d46bc4d4.s1.eu.hivemq.cloud:8884/mqtt";
  const client = mqtt.connect(MQTT_URL, options);

  client.on("connect", () => {
    console.log("connected!");
  })

  client.subscribe("PinVals", (err) =>{
    if(!err)
      console.log("subscribed!");
  })

  client.on("message", (topic, message) => {
    let msgString = message.toString()
    try {
      let msgJson =  JSON.parse(msgString)
      setVals(msgJson)
      getPath();
    } 
    catch (error) {
      console.log("Invalid json data")
    }
  });
  

  return (
    <body className='Background'>
      <Grid/>
    </body>
  );
}

export default App;
