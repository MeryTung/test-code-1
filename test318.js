;(function () {

  // 待优化
  // 24点

  function judgePoint24 (nums) {
    function next (nums, res = { isValid: false, expression: [] }) {
      const len = nums.length

      if (len === 1) {
        return {
          isValid: Math.abs(nums[0] - 24) < 1e-9,
          expression: res.expression
        }
      }

      let _expression = []

      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const num1 = nums[i]
          const num2 = nums[j]
          const remained = []
          for (let k = 0; k < len; k++) {
            if (k !== i && k !== j) {
              remained.push(nums[k])
            }
          }
          if (!res.isValid) {
            let _pops = 0
            if (res.expression.length === 0) {
              _expression = res.expression.concat(num1, '+', num2)
              _pops = 3
            } else {
              _expression = res.expression.concat('+', num2)
              _pops = 2
            }
            res = next([num1 + num2, ...remained], {
              ...res,
              expression: _expression
            })
            if (!res.isValid) {
              res.expression = res.expression.slice(0, res.expression.length - _pops)
            }
          }
          if (!res.isValid) {
            let _pops = 0
            if (res.expression.length === 0) {
              _expression = res.expression.concat(num1, '*', num2)
              _pops = 3
            } else {
              _expression = ['('].concat(res.expression).concat(')', '*', num2)
              _pops = 2
            }
            res = next([num1 * num2, ...remained], {
              ...res,
              expression: _expression
            })
            if (!res.isValid) {
              res.expression = res.expression.slice(0, res.expression.length - _pops)
            }
          }
          if (res.isValid) {
            return res
          }
        }
      }

      return res
    }

    return next(nums)
  }

  console.log(judgePoint24([1, 2, 3, 4]))

})();