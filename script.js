const output = document.getElementById("output");

new Promise((resolve) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 3000);
})
.then((arr) => {
    return new Promise((resolve) => {
        const evenNumbers = arr.filter(num => num % 2 === 0);

        setTimeout(() => {
            output.textContent = evenNumbers.join(",");
            resolve(evenNumbers);
        }, 1000);
    });
})
.then((evenNumbers) => {
    return new Promise((resolve) => {
        const doubledNumbers = evenNumbers.map(num => num * 2);

        setTimeout(() => {
            output.textContent = doubledNumbers.join(",");
            resolve(doubledNumbers);
        }, 2000);
    });
});
