/**
 * Created by yjf on 16-12-5.
 */

function say(word) {
    console.log(word);
}
function execute(someFuntion,value) {
    someFuntion(value);
}
execute(say,"hello world");
execute(function (word) {
    console.log(word);
},"hahha");

console.log(__filename);
