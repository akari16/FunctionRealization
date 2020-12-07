/*
 * fn [function] 需要防抖的函数
 * delay [number] 毫秒，防抖期限值
 */
/* function debounce(fn,delay){
    let timer = null //借助闭包
    return function() {
        if(timer){
            clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
            timer = setTimeout(fn,delay) 
        }else{
            timer = setTimeout(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
        }
    }
} */

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
