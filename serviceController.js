/**
 * Created by 749 on 1/15/2016.
 */
var serviceApp=angular.module("serviceApp",[]);
serviceApp.factory("Math",function(){
    var factory={};
    factory.doSomething=function()
    {
        return "dosomthing";
    };
    return factory;
});

serviceApp.factory("MyMath",function(){

    var myMathFactory={};
    myMathFactory.doSomething=function()
    {
      return "MyMath function";
    };
    return myMathFactory;
});

serviceApp.service("CalService",function(Math,MyMath){

    this.doSomething= function () {
        return Math.doSomething();
    };
    this.MyDoSomthing=function()
    {
      return  MyMath.doSomething();
    };
});

serviceApp.controller("serviceController",function($scope,CalService){

    $scope.name=CalService.doSomething();
    $scope.myMath=CalService.MyDoSomthing();
});