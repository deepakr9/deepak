let display = document.getElementById("display");

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult(){
    try{
        display.value = eval(display.value)
    }
    catch{

        display.value = 'Dhanush made error'
        
    }
}

function deleteLast(){

    display.value = display.value.slice(0, -1)

}