console.log("Giving time to run the perf test on the node console");

setTimeout(() => {

    const ARRA_SIZES = [10_000,100_000];

    function intArray(n){
        return new Array(n).fill(0).map(() => Math.floor(Math.random() * 100));
    }

    function addOneToEverything(arr){
        /*
        const newArr = [];
        arr.forEach((item) => {
            newArr.push(item+ 1);
        });
        */
        const newArr = arr.reduce((acc, item) => {
            return [...acc, item + 1];
        }, []);
        console.log(newArr);
    }

    (function (){
        ARRA_SIZES.forEach((size) => {
            const arr = intArray(size);
            console.log (`Array size: ${size}`);
            const t0 = performance.now();
            addOneToEverything(arr);
            const t1 = performance.now();
            console.log(`Array size:  ${size}`);
            console.log('Total time', t1 - t0)
        });
    })();

}, 5000);
