function sum(a,b){
  return a+b;
}

function multiply(a,b){
  return a*b;
}

function device(a,b){
  if(b===0){
    throw new Error('Cannot divide by zero');
  }return(a/b)
}

module.exports={sum,multiply,devide};
