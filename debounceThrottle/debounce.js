
/*
  对于短时间内连续触发的事件（上面的滚动事件,包含点击事件，用户不断点击等），
  防抖的含义就是让某个事件或者说需要进行的逻辑操作在一定时间内，事件处理函数只执行一次。
*/ 

/*****************************简化后的分割线 ******************************/
function debounce(fn, delay) {
  let timer = null; //使用闭包将需要进行处理的函数进行返回
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay); // 简化写法
  };
}
