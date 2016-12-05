/**
 * Created by yjf on 16-12-5.
 */
console.info("start");

var counter =10;
console.log("计数: %d",counter);
console.time("获取数据");
console.timeEnd("获取数据");
console.info("end");

process.on('exit', function(code) {
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 1000);

    console.log('退出码为:', code);
});
console.log("程序执行结束");
