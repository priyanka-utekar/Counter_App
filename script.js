const countValue = document.querySelector("#counter");//using counter id fetch element div-0 name countValue 


const increment = () => {
//get the value from UI  //using let coz const value not change its constant
 let value = parseInt(countValue.innerText);
 //update the value
value = value + 1;
//set the value onto UI
countValue.innerText = value;
};
 
const decrement = () => {
//get the value from UI
let value = parseInt(countValue.innerText);
//update the value
value = value - 1;
//set the value onto UI
countValue.innerText = value;
}

const reset = () => {
    //update the value
    value = 0;
    //set value onto UI
    countValue.innerText = value;
    

}