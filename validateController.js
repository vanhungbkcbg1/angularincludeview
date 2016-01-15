/**
 * Created by 749 on 1/15/2016.
 */
var validateApp=angular.module("validateApp",['ngMessages']);
validateApp.controller("validateController",function($scope){

    $scope.user_name="vanhung";
    $scope.password="vanhungbkcbg1";
    $scope.resetFunction=function()
    {
        $scope.user_name=null;
        $scope.password=null;
    };
    $scope.data=
        [
            {"name":"vanhung1"},
            {"name":"vanhung2"},
            {"name":"vanhung3"},
            {"name":"vanhung4"},
            {"name":"vanhung5"},
            {"name":"vanhung6"}
        ];
});