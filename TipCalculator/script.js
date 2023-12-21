const button = document.querySelector("button")
const output = document.querySelector(".output")
button.addEventListener('click',() =>
{
    const cost = document.querySelector("input").value;
    const tip = (cost*0.15).toFixed(2);
    const temp = `<h1>You shuld tip ${tip} rupees on ${cost} rupees</h1>` 
    output.innerHTML = temp
})