var app = angular.module('app', [])

app.controller('main', function($scope)
{
  $scope.changeposition=function(position)
  {
      endPosition = position;
  }

  var objects = ["outrun", "blinds", "fish", "bass", "king"];
  for(var i = 0; i<objects.length;i++)
  {
    loadObject(objects[i], {x: -1200+i*100, y: 100, z: -1100 });
  }


  function loadObject(objectName, position)
  {
    var jsonload = new THREE.ObjectLoader();
    jsonload.load("gallery/"+objectName+".json",
    function(object)
    {
      object.rotation.y = Math.PI
      object.position.x = position.x
      object.position.y= position.y;
      object.position.z= position.z;
      object.scale.x = 9
      object.scale.y = 9
      object.scale.z = 3

      scene.add(object);
    });
}
})
