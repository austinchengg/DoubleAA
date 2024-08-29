
console.log('This is a popup!');


let simple = (i) => {
    if (i > 3) {
        return "Good Job!"
    }
    alert("Hello?")
    i++
    setTimeout(() => {
        simple(i)
    }, 6000)
}

simple(0)
