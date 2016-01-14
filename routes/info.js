/**
 * Created by lcc on 16/1/13.
 */

var mysql=require('mysql');

/**
 * 从数据库获取数据
 */
function getDatFromDB(datacallback){
    var connection=mysql.createConnection({
        host :'127.0.0.1',
        user :'root',
        password :'123',
        port : '3306',
        database :'mydb'
    });
    //开始连接
    connection.connect();
    var querySql="select * from userinfo";
    connection.query(querySql,function(err,result,fields){
        if(err){
            connection.close();
            return;
        }

        for(var i=0;i<result.length;i++){
            var rlt=result[i];
            var age=rlt['age'];
        }
        datacallback(rlt);
    });
}

module.exports=function(request,response,next){
    getDatFromDB();
    console.log("进入 info 路由");

    getDatFromDB(function(result){


        for(var i=0;i<result.length;i++){
            var rlt=result[i];
            var age=rlt['age'];
        }

        response.render('info',{
            'queryRlt': result
        });
    })
};