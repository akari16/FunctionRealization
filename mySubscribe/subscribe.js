/*
  初始化代码添加历史记录功能，
  添加信息订阅功能
*/ 
var Messege = function () {
  this.list = {};
  this.cache = {};
};

Messege.prototype.add = function (noticeType, client) {
  // 将收到的信息加入到noticeType订阅列表当中
  console.log(noticeType);
  console.log(client);

  if (!this.list[noticeType]) this.list[noticeType] = [];
  this.list[noticeType].push(client);
  this.cache[noticeType].forEach((words) => {
    client.listen(noticeType, words);
  });
};

// 通过传入的信息类型，遍历查找
Messege.prototype.remove = function (noticeType, client) {
  if (!this.list[noticeType]) return; //可以作为提示或者说处理符合业务需求的操作
  var index = this.list[noticeType].findIndex((item) => item === client);
  console.log(this.list[noticeType].splice(index, 1));
  this.list[noticeType].splice(index, 1);
};

Messege.prototype.triggle = function (noticeType, words) {
  if (!this.cache[noticeType]) this.cache[noticeType] = [];
  this.cache[noticeType].push(words);

  if (!this.list[noticeType]) return;
  this.list[noticeType].forEach((client) => {
    client.listen(noticeType, words);
  });
};

var Client = function (name) {
  this.name = name;
};

// 监听事件，事件处理逻辑
Client.prototype.listen = function (noticeType, words) {
  console.log(`${this.name}收到${noticeType}的信息是：${words}`);
};
