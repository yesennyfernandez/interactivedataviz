console.log('hello world');
    const label = document.getElementById("Label")
    const input = document.getElementById("Input")
    const button = document.getElementById("Submit")

    let Name;

    function NameUpdate(){
    Name = "Mary"
    console.log (Name)
    label.innerText = "Wow! I love the name: "+
    Name
    button.innerText = "Name it again!"
    }

    // This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    }
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }
    // This function evaluates the expression and return result
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }