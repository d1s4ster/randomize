function randomize() {
    let min = parseInt(document.getElementById("firstNumber").value);
    let max = parseInt(document.getElementById("secondaryNumber").value);
    let quantity = parseInt(document.getElementById("quantityNumber").value);
    let output = document.getElementById("output");

    const arr = Array.from({ length: max-min+1 },
    (v, i) => i +1);
    
    for (let i = 0; i < quantity; i++ ) {

        let randomize = Math.random() * (max - min) + min;
        let result = Math.floor(randomize);
        console.log(result);
        //let outputItem = document.createElement('li');
        //output.append(outputItem);
        //output.textContent = result;
        //return document.getElementById("output").innerHTML = result;
    }

}