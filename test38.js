var str = '每一段路都是一种领悟，每一段路都荆棘密布！'

; (function () {

    function findSubStr(str, subStr) {
        var res = {
            num: 0, // 当前字符在整个字符串中出现了几次
            idxs: [] // 分别出现在哪几个位置
        }

        var idx = str.indexOf(subStr, 0)

        while (idx > -1) {
            res.num += 1
            res.idxs.push(idx)
            idx = str.indexOf(subStr, idx + 1)
        }

        return res
    }

    console.time('findSubStr1')
    console.log(findSubStr(str, '一'))
    console.timeEnd('findSubStr1')

})();

;(function () {

    function findSubStr (str, subStr) {
        const res = {
            num: 0,
            idxs: []
        }
        for (let i = 0; i < str.length; i++) {
            if (str[i] === subStr) {
                res.num += 1
                res.idxs.push(i)
            }
        }
        return res
    }

    console.time('findSubStr2')
    console.log(findSubStr(str, '一'))
    console.timeEnd('findSubStr2')
})();