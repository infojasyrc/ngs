const mainFunction = delay => {
    setTimeout(() => {
        console.log('Hello world. ' + delay);
        mainFunction(delay + 1);
    }, delay * 1000);
}

mainFunction(1);
