// Your code here
// const map1 = array1.map(x => x * 2);

function mapToNegativize(s){
  return s.map(x => x*-1);
}


function mapToNoChange(s){
  return s.map(x => x);
}

function mapToDouble(s){
  return s.map(x => x*2);
}

function mapToSquare(s){
  return s.map(x => x*x);
}

<<<<<<< HEAD

function reduceToTotal(s , a=0){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return s.reduce(reducer , a);
}


function reduceToAllTrue(s ){

  return s.reduce((acc, val) => {
  return val = val ? true : false;
}); 
}


function reduceToAnyTrue(s ){

  return s.reduce((acc, val) => {
    console.log("acc= "+ acc+ " val= "+ val);
  return val || acc ? true : false;
}); 
}

=======
// array1.reduce(reducer, 5)

function reduceToTotal(s){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return s.reduce(reducer , let a=0);
}
>>>>>>> bcfa9dc70a23181ab6e7463d8bbf6fe6a6e16349
