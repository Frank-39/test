
var mysql = require('mysql');

//   1.创建连接数据库
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'142857',
    database:'检票数据' 
});

//2.连接数据库 打开冰箱门
connection.connect();

data ={}
//3.执行数据操作 
data2={'北京市':0,
    '天津市' :0,
    '河北省' :0,
    '山西省' :0,
    '内蒙古自治区' :0,
    
    '黑龙江' :0, '上海市' :0, '江苏省' :0,'浙江省' :0, '安徽省' :0, '福建省' :0, '江西省' :0, '山东省' :0, '河南省' :0, '湖北省' :0, '湖南省':0, '广东省' :0, '广西壮族自治区' :0, '海南省' :0, '重庆市' :0, '四川省' :0, '贵州省' :0, '云南省' :0, '西藏自治区' :0, '陕西省' :0,'甘肃省' :0, '青海省':0, '宁夏回族自治区' :0, '新疆维吾尔自治区':0,}
connection.query('select fticketno from 查询历史时段票捡记录 ',function(error,results,field){
    if(error) throw error;
    console.log(results[0])
    //where funiqueid< 576579499559374149
    for(var i=0;i<results.length;i++){
        
        //var str1 = results[i].fticketno.toJSONString();
        if(results[i].fticketno.length ==18 ){
            var str = results[i].fticketno.substr(0,2)
        }else {
            str = "异常值"
        }
        if (data[str] === undefined){
            data[str] = 1
        } else{
            data[str] += 1
        }
        
        
    
        
    }
    
    console.log(data);
    data2['北京市']=data['11'];
    data2['天津市']=data['12'];
    data2['河北省']=data['13'];
    data2['山西省']=data['14'];
    data2['内蒙古自治区']=data['15'];
    data2['辽宁']=data['21'];
    data2['吉林']=data['22']
    data2['黑龙江']=data['23'];
    data2['上海市']=data['31'];
    data2['江苏省']=data['32'];
    data2['浙江省']=data['33'];
    data2['安徽省']=data['34'];
    data2['福建省']=data['35'];
    data2['江西省']=data['36'];
    data2['山东省'] =data['37'];
    data2['河南省']=data['41'] ;
    data2['湖北省']=data['42'];
    data2['湖南省']=data['43'] ;
    data2['广东省']=data['44'] ;
    data2['广西壮族自治区']=data['45'];
    data2['海南省' ]=data['46'];
    data2['重庆市' ]=data['50'];
    data2['四川省']=data['51'] ;
    data2['贵州省']=data['52'] ;
    data2['云南省']=data['53'];
    data2['西藏自治区']=data['54'];
    data2['陕西省']=data['61'];
    data2['甘肃省']=data['62'];
    data2['青海省']=data['63'];
    data2['宁夏回族自治区']=data['64'];
    data2['新疆维吾尔自治区']=data['65'];
    data2['异常值'] = data['异常值']
    console.log(data2)
});




// connection.query('insert into test values(NULL,"admin","123456")',function(error,results,field){
//     if(error) throw error;
//     console.log('The solution is: ',results);
// });
//4.关闭连接 关闭冰箱门
connection.end();
