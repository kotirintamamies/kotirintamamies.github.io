var app = angular.module('app', [])

app.controller('main', function($scope)
{
  $scope.changeposition=function(position)
  {
    console.log(position);
      endPosition = position;
  }
})
