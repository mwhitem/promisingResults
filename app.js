//promise chaining
slowMath.add(6, 2)
.then((value1) => {
    console.log(value1)
    return slowMath.multiply(value1, 2)
})
.then((value2) => {
    console.log(value2);
    return slowMath.divide(value2, 4)
})
.then((value3) => {
    console.log(value3);
    return slowMath.subtract(value3, 3)
})
.then((value4) => {
    console.log(value4);
    return slowMath.add(value4, 98)
})
.then((value5) => {
    console.log(value5);
    return slowMath.remainder(value5, 2)
})
.then((value6) => {
    console.log(value6);
    return slowMath.multiply(value6, 50)
})
.then((value7) => {
    console.log(value7);
    return slowMath.remainder(value7, 40)
})
.then((value8) => {
    console.log(value8);
    return slowMath.add(value8, 32)
})
.then((value9) => {
    console.log(`The final result is ${value9}`);
})
.catch((err) => console.log(err))


//async/await 

let container = document.createElement('div');
container.setAttribute('id', 'container');
container.style.backgroundColor = 'slateblue';
container.style.textAlign = 'center';
container.style.fontSize = 'large';
container.style.fontFamily = 'Verdana';
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let div4 = document.createElement('div');
let div5 = document.createElement('div');
let div6 = document.createElement('div');
let div7 = document.createElement('div');
let div8 = document.createElement('div');
let div9 = document.createElement('div');
document.body.appendChild(container);


async function doMath() {
    try {
        let value1 = await slowMath.add(6,2);
        div1.innerText = `6 + 2 = ${value1}`;
        container.appendChild(div1);

        let value2 = await slowMath.multiply(value1, 2)
        div2.innerText = `8 * 2 = ${value2}`;
        container.appendChild(div2);


        let value3 = await slowMath.divide(value2, 4)
        div3.innerText = `16 / 4 = ${value3}`;
        container.appendChild(div3);


        let value4 = await slowMath.subtract(value3, 3)
        div4.innerText = `4 - 3 = ${value4}`;
        container.appendChild(div4);

        let value5 = await slowMath.add(value4, 98)
        div5.innerText = `1 + 98 = ${value5}`;
        container.appendChild(div5);

        let value6 = await slowMath.remainder(value5, 2)
        div6.innerText = `99 % 2 = ${value6}`;
        container.appendChild(div6);

        let value7 = await slowMath.multiply(value6, 50)
        div7.innerText = `1 * 50 = ${value7}`;
        container.appendChild(div7);

        let value8 = await slowMath.remainder(value7, 40)
        div8.innerText = `50 % 40 = ${value8}`;
        container.appendChild(div8);

        let value9 = await slowMath.add(value8, 32)
        div9.innerText = `Final result: 10 + 32 = ${value9}`;
        container.appendChild(div9);

    } catch (err) {
        document.body.innerHTML = err;
    }
}

doMath()