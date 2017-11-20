var app = angular.module ('chuckNorrisJokes', []);

app.controller ('JokeController', ['$http', function ($http) {
  var thisController = this;
  thisController.jokes = {};

  thisController.getJoke = function () {
    $http({
      method: 'GET',
      url: 'http://api.icndb.com/jokes/random/'
    }).then(function (success){
      thisController.jokes = success;
    },function (error){

    });
  };

  thisController.getJoke();
}]);
