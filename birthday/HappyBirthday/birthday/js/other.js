;($)(function() {
    function getQueryObject(url) {
        // 参数校验
        url = url ? url : window.location.href;
        var search = url.substring(url.lastIndexOf('?') + 1);
        // 开始进行字符串解析name=zhangsan&age=18&sex=25
        // +代表匹配一个或多个，零个肯定是不行的。*代表0个或多个，这里value没有是允许的。那么这里要注意的就是^在单独使用时，代表以什么开头，在中括号里面使用代表不包含的意思
        // 中括号里面的内容相当于是或的意思：表示除了?,&,=这三个字符以外的其他所有字符
        var reg = /([^?&=]+)=([^?&=]*)/g;
        var obj = {};
        // 其中res表示匹配成功的字符串序列，$1，表示第一个（）内所匹配的内容，$2为第二个，依次类推。当我们使用全局匹配时，只要匹配成功的子串最后都会执行一遍function函数
        search.replace(reg, function (res, $1, $2) {
            // name=zhangsan,age=18,sex=male
            // console.log(res, $1, $2);
            obj[$1] = decodeURIComponent($2);
        });
        return obj;
    }

    var query = getQueryObject();

    var timer = setInterval(function () {
        // document.getElementById('auto')
        var userEle = $('#message .name');
        if (userEle) {
            clearInterval(timer)
            // audioId.play();
            console.log(query)
            userEle.text(query.userName);
            $('#page').trigger("click");

        }
    }, 50)
})