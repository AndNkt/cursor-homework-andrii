function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}
const idGenerator = createIdGenerator();
console.log('idGenerator.next().value -> 1',idGenerator.next().value);
console.log('idGenerator.next().value -> 2',idGenerator.next().value);
console.log('idGenerator.next().value -> 3',idGenerator.next().value);


/*
//my self done generator function)))
function newFontGenerator(val) {
  let state = 0;
  let InitVal = val;
  let buffVal;
  return {
    next: function(input) {
      if(state==0 && input=='up'){
        state = 1;
        buffVal = InitVal;
        return{
          value:InitVal,
          done: false
        }
      }
      if(state>0 && input=='up'){
        buffVal += 2; 
        return{
          value: buffVal,
          done: false
        }
      }
      if(state>0 && input=='down'){
        buffVal -= 2;
                return{
          value: buffVal,
          done: false
        }
      }
      if(state>0 && input==undefined || state>0 && input==null){
        return{
          value: buffVal,
          done:false
        }
      }
    }
  };
}
*/


function* newFontGenerator(fontSize) {

    while (true){
        let reset = yield fontSize;
        if(reset==='up'){
            fontSize+=2;
        }
        else{
          if (reset === 'down'){
              fontSize-=2;
          }
        }
    }
}


const fontGenerator = newFontGenerator(14);
console.log('fontGenerator.next("up").value -> 14',fontGenerator.next('up').value);
console.log('fontGenerator.next("up").value -> 16',fontGenerator.next('up').value);
console.log('fontGenerator.next("up").value -> 18',fontGenerator.next('up').value);
console.log('fontGenerator.next().value -> 18',fontGenerator.next().value);
console.log('fontGenerator.next("down").value -> 16',fontGenerator.next('down').value);
console.log('fontGenerator.next("down").value -> 14',fontGenerator.next('down').value);

