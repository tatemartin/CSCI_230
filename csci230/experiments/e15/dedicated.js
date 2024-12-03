let arr = undefined;

self.addEventListener('message', function (event) {
    if (arr === undefined) {
        arr = new Uint8Array(event.data);
    }


    let n = 0;
    
    function factorial(n) {
        if (n === 0) return 1;
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    setInterval(function () {
        if (arr) {
            if (n < arr.length && arr[n] === 0) {
                arr[n] = factorial(n);

                postMessage({ index: n, value: arr[n] });

                n++;
            }
        }
    }, 3000);
});
