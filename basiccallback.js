function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

function display(result) {
    console.log("Result = " + result);
}
calculate(10, 20, display);