(function () {

  // 最后一个稍微实用些

  const mockInterval = {
    timer: null,
    setInterval: function (callback, delay) {
      const self = this
      const loop = function () {
        self.timer = setTimeout(loop, delay)
        callback && callback()
      }
      this.timer = setTimeout(loop, delay)
      return this.timer
    },
    clearInterval: function () {
      clearTimeout(this.timer)
    }
  }

  return

  let count = 0
  let timer = mockInterval.setInterval(() => {
    if (count < 5) {
      console.log(count)
      count++
    } else {
      mockInterval.clearInterval(timer)
    }
  }, 1000)

})();

; (function () {

  const timer = {
    id: null
  }

  function _setInterval(callback, delay) {
    function loop() {
      timer.id = setTimeout(loop, delay)
      callback && callback()
    }
    timer.id = setTimeout(loop, delay)
    return timer
  }

  function _clearInterval(timer) {
    clearTimeout(timer.id)
  }

  return

  let count = 0
  let _timer = _setInterval(() => {
    if (count < 5) {
      console.log(count, timer === _timer /** true */)
      count++
    } else {
      _clearInterval(_timer)
    }
  }, 1000)

  console.log(timer)

})();

; (function () {

  return

  // 浏览器环境下，setTimeout 返回的是一个 number
  // node 环境下，setTimeout 返回的是一个 Object

  const timer1 = setTimeout(() => { }, 1000)
  const timer2 = setTimeout(() => { }, 1000)
  console.log(timer1)
  console.log(timer2)

})();

; (function () {

  // const setIntervalTimerMap = {}
  const setIntervalTimerList = []

  function _setInterval(callback, delay) {
    // const index = Object.keys(setIntervalTimerMap).length
    const index = setIntervalTimerList.length
    function loop() {
      // setIntervalTimerMap[index] = setTimeout(loop, delay)
      setIntervalTimerList[index] = setTimeout(loop, delay)
      callback()
    }
    // setIntervalTimerMap[index] = setTimeout(loop, delay)
    setIntervalTimerList[index] = setTimeout(loop, delay)
    return index
  }

  function _clearInterval(timerIndex) {
    // clearTimeout(setIntervalTimerMap[timerIndex])
    clearTimeout(setIntervalTimerList[timerIndex])
  }

  let count1 = 0
  let timerId1 = _setInterval(() => {
    if (count1 < 5) {
      console.log('count1: ', count1, 'timerId1: ', timerId1)
      count1++
    } else {
      _clearInterval(timerId1)
      timerId1 = null
    }
  }, 1000)

  let count2 = 5
  let timerId2 = _setInterval(() => {
    if (count2 > 0) {
      console.log('count2: ', count2, 'timerId2: ', timerId2)
      count2--
    } else {
      _clearInterval(timerId2)
      timerId2 = null
    }
  }, 1000)

})();