function forLoop(array) {
  if (array.length<25){
    for (let i=0; i<25; i++){
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(num){
  while (num>0){
    console.log(--num);
  };
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr){
  do {
    arr.pop();
  } while (arr.length>0 && maybeTrue()){
    }
    return arr;
}
