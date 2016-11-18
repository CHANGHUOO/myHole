/**
 * Created by hc on 16/11/17.
 */

var scoreStr = "小明:87;小花:81;小红:97;小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76";
var sarr = scoreStr.split(";");
var ns = [];
var i = 0;
var sum = 0;

for(;i<sarr.length;i++){
  var arr = sarr[i].split(":");
  ns[i] = [arr[0],parseInt(arr[1])];
  sum += ns[i][1];
}

console.log(sum/i);
