/* var Event = function () {
  this.list = [];
};

Event.prototype.add = function (listener) {
  this.list.push(listener);
};

Event.prototype.triggle = function () {
  this.list.forEach((listener) => {
    console.log(listener);
    listener();
  });
}; */

// 没有取消订阅的功能
/* var event = {
  list: {},
  add(type, listener) {
    if (!this.list[type]) {
      this.list[type] = [];
    }
    this.list[type].push(listener);
  },
  triggle(type) {
    this.list[type] &&
      this.list[type].forEach((listener) => {
        listener();
      });
  },
}; */

/* // 添加订阅功能
var event = {
  list: {},
  add(type, listener) {
    if (!this.list[type]) {
      this.list[type] = [];
    }
    this.list[type].push(listener);
  },
  triggle(type) {
    this.list[type] &&
      this.list[type].forEach((listener) => {
        listener();
      });
  },
  remove(type, fn) {
    if (!this.list[type]) return;
    var index = this.list[type].findIndex((listener) => listener === fn);
    this.list[type].splice(index, 1);
  },
};
 */

//  添加历史记录功能
var Event = function () {
  this.list = {};
  this.cache = {};
};

Event.prototype.add = function (area, client) {
  if (!this.list[area]) this.list[area] = [];
  this.list[area].push(client);
  this.cache[area].forEach((price) => {
    client.listen(area, price);
  });
};

Event.prototype.remove = function (area, client) {
  if (!this.list[area]) return;
  var index = this.list[area].findIndex((item) => item === client);
  console.log(this.list[area].splice(index, 1));
  this.list[area].splice(index, 1);
};

Event.prototype.triggle = function (area, price) {
  if (!this.cache[area]) this.cache[area] = [];
  this.cache[area].push(price);

  if (!this.list[area]) return;
  this.list[area].forEach((client) => {
    client.listen(area, price);
  });
};

var Client = function (name) {
  this.name = name;
};

// 监听事件，事件处理逻辑
Client.prototype.listen = function (area, price) {
  console.log(`${this.name}收到${area}平的房源报价${price}`);
};
