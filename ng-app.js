var app = angular.module('app', [])

app.controller('main', function($scope)
{
  $scope.changeposition=function(position)
  {
      endPosition = position;
  }

  loadObject("outrun");

  function loadObject(objectName)
  {
    var jsonload = new THREE.ObjectLoader();
    jsonload.load("gallery/"+objectName+".json",
    function(object)
    {
      object.position.x = 1200
      object.position.y= 100;
      object.position.z= 900;
      console.log(object.position)
      object.scale.x = 10
      object.scale.y = 10
      object.scale.z = 10
      //console.log(geometry);
      //var mater = new THREE.MultiMaterial(materials);


      scene.add(object);
    });
}
})
