/**
 * Created by vanhung on 2/23/2016.
 */
var ajaxApp=angular.module("ajaxApp",[]);
ajaxApp.controller('ajaxcontroller',function($scope,$http){

    $scope.load=function()
    {
        $http.get('data.php').success( function(response) {
            $scope.students = response;
        });
    };

});
