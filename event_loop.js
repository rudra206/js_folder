console.log('syncronous_1');

setTimeout(function timeout (){
   console.log('syncronous_1'); 
},5000);

console.log('syncronous_2');
setTimeout(function timeout (){
   console.log('syncronous_2'); 
},10000);



console.log('syncronous_3');

setTimeout(function timeout (){
   console.log('syncronous_3'); 
},1000);

