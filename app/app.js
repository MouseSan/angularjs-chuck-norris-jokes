var app = angular.module ('chuckNorrisJokes', []);

app.controller ('JokeController', ['$http', function ($http) {
  var thisController = this;
  thisController.joke = {};
  thisController.numberOfJoke = {};

  thisController.getJoke = function () {
    $http({
      method: 'GET',
      url: 'http://api.icndb.com/jokes/random/'
    }).then(function (success){
      thisController.joke = success.data.value.joke;
      thisController.numberOfJoke = success.data.value.id;
    },function (error){

    });
  };

  thisController.getJoke();
}]);
