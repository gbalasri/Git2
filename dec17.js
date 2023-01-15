//inserting an element at the given position in the array;
var array=[1,2,3,4,5];
var element=3.5;
var index=3;
for(var i=array.length-1; i>=index; i--)
{
    array[i+1]=array[i];
    
}
array[index]=element;
console.log(array);
console.log(typeof array);
