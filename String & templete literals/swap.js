let arr = [10,2,5,15,1,3]

for(let i =0 ; i < arr.length-1;i++){
    let curr_minimum=i;
    for(let j=i+1;j< arr.length;j++){
        if(arr[j] < arr[curr_minimum]){
        curr_minimum
        }
    }


let temp = arr[i];
arr[i] = arr[curr_minimum];
arr[curr_minimum]=temp;

const newArr=[...arr];
console.log(i,newArr)

}

console.log(arr)