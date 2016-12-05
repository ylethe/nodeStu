/**
 * Created by yjf on 16-12-5.
 */
//缓冲区
var buf= new Buffer(26);
for(var i =0 ;i<26;i++){
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));

console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));

var buf2 = new Buffer('www.runoob.com');
var json = buf2.toJSON(buf2);
console.log(json);

var buf1 = new Buffer('菜鸟教程');
var buf3 = Buffer.concat([buf1,buf2]);
console.log("buf3内容:"+ buf3.toString());

