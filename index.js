/**
 * Created by yjf on 16-12-5.
 */
var serve =require("./server");
var router =require("./route");

serve.start(router.route);
