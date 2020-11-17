/* class Dep {
  constructor() {
    this.subs = [];
  }
  //增加订阅者
  addSub(sub) {
    this.subs.push(sub);
  }
  //判断是否增加订阅者
  depend() {
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  }

  //通知订阅者更新
  notify() {
    this.subs.forEach((sub) => {
      console.log(sub);
      sub.update();
    });
  }
}
Dep.target = null; */

function Dep() {
  this.subs = [];
  //增加订阅者
  this.addSub = function (sub) {
    console.log(sub);
    this.subs.push(sub);
  };
  //判断是否增加订阅者
  this.depend = function () {
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  };

  //通知订阅者更新
  this.notify = function () {
    this.subs.forEach((sub) => {
      console.log(sub);
      sub.update();
    });
  };
}
Dep.target = null;
