/**
 * 如果在限定时间段内，
 * 类似防抖函数，在一定时间内，用户不断执行某个操作的时候，需要限制去控制流程不执行某个函数
 * 只要不停止触发，
 * 节流函数可以使用定时器，同时也可以使用，时间戳，类似某个时间段去处理，总体思路还是在时间段的处理
 */

function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (!flag) {
      //未进行处理
      return false;
    }
    // 在此区间内可以进行操作
    flag = false;
    setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}
