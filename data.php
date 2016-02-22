<?php
/**
 * Created by PhpStorm.
 * User: vanhung
 * Date: 2/23/2016
 * Time: 1:33 AM
 */

$data=[];
for($i=0;$i<10;$i++)
{
    $data[]=array('name'=>'vanhung','age'=>11+$i);
}

echo json_encode($data);