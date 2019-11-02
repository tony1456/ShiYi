<?php
header("Content-type:text/html;charset=utf8");

// 连接数据库
$link = mysqli_connect('localhost','root','','test','3306');

// 判断是否连接成功
if(mysqli_connect_error($link)){
    echo '数据库连接失败：'.mysqli_connect_error();
    die();
} else{
    echo 'OK-数据库连接成功！';
}

// var_dump($link);//object

// 设置字符编码
mysqli_set_charset($link,'utf8');

// 要执行的sql语句
$sql = "select * from user where sex='女'";

// 执行sql语句之后，返回结果集(资源类型resource)
$results = mysqli_query($link,$sql);

// var_dump($results);//object

// $arr = mysqli_fetch_assoc($results);

// var_dump($arr);

echo '<pre>';
// print_r($arr);

// [$arr1,$arr2,$arr3]
$rows = [];
while($arr = mysqli_fetch_assoc($results)){
    $rows[] = $arr;
}
// print_r($rows);//二维数组

$arrLen = count($rows);

// var_dump($arrLen);//int 3

if($arrLen > 0){//有数据
    echo json_encode($rows,JSON_UNESCAPED_UNICODE);//把数组转成json字符串，返回
} else {// 没有数据
    echo '你查询的数据没有!';
}

mysqli_close($link); // 关闭数据库连接



// js部分
// json字符串:json数组，json对象
// var datas = '[{"id":"1","name":"尼古拉斯.赵四","sex":"男","age":"45"},{"id":"4","name":"王宝强","sex":"男","age":"35"},{"id":"5","name":"杨过","sex":"男","age":"30"}]';

// var jsonstr = '{"name":"张三","age":"24"}';

// var arr = JSON.parse(datas);
// var obj = JSON.parse(jsonstr);

?>