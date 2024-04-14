const graph = [[0,1,0,1,0,0,0,0,0],[1,0,1,0,1,0,0,0,0],[0,1,0,0,0,1,0,0,0],[1,0,0,0,1,0,1,0,0],[0,1,0,1,0,1,0,1,0],[0,0,1,0,1,0,0,0,1],[0,0,0,1,0,0,0,1,0],[0,0,0,0,1,0,1,0,1],[0,0,0,0,0,1,0,1,0]];
var msg = {"Val2":1,"Val3":1,"Val4":1,"Val5":1,"Val6":1,"Val7":1,"Val8":1,"Val9":1,"Val10":1};
var ctr = 0;
for(const[key,value] of Object.entries(msg)){
    if(value == 0){
        for(let i = 0; i < 9; i++)
        graph[i][ctr] = 0;
    }
    ctr++;
}
// console.log(graph);

var src = 4;
var dest = 0;
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
