const mainFunction = delay => {
    const delayTime = delay * 100;
    let cont = 0;
    const lastInterval = setInterval(() => {
        console.log('Hello World. ' + delayTime);
        cont +=1;
        if (cont === 5) {
            clearInterval(lastInterval);
            mainFunction(delay + 1);
        }
    }, delayTime);
};

mainFunction(1);