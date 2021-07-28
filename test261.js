; (function () {

    // 11 2 33

    var p = new Promise((resolve) => {
        console.log(11)
        resolve()
    })

    p.then(() => {
        console.log(33)
    })

    console.log(2)

})();
