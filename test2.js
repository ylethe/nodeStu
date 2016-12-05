/**
 * Created by yjf on 16-12-5.
 */
//引入events模块
var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandle =function connected(){
    console.log('连接成功');
    eventEmitter.emit('data_received');
};

eventEmitter.on('connection',connectHandle);
eventEmitter.on('data_received',function (){
 console.log('数据接收成功');

});
eventEmitter.emit('connection');
console.log("程序执行完毕");

eventEmitter.on('some_event',function(){
    console.log("some_event");
});
setTimeout(function(){
    eventEmitter.emit('some_event');
},1000);

eventEmitter.on('someEvent',function (arg1,arg2){
   console.log('listener1',arg1,arg2);
});
eventEmitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
});
eventEmitter.emit('someEvent','arg1','arg2');

var lisenner1 = function listener1() {
    console.log('监听器listener1执行');
};
var listerner2 = function listener2() {
    console.log('监听器2listener2执行');
};
eventEmitter.addListener('connection',lisenner1);
eventEmitter.on('connection',listerner2);

var eventListeners= require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"个监听连接事件");
eventEmitter.emit('connection');

eventEmitter.removeListener('connection',lisenner1);
console.log("listener1不再监听");

eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"个监听连接事件");

