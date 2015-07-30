// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path("/forecast");
  };

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', function($scope, $resource, $routeParams, cityService, weatherService) {

  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '2';

  // $scope.icon = cityService.icon;

  $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);


   // this.GetIcon = function(city, icon) {

       // $scope.weatherIconAPI = $resource("http://openweathermap.org/img/w/", { callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }});

       // $scope.weatherIcon = $scope.weatherIconAPI.get({ icon: '10n' });

       // console.log($scope.weatherIconAPI);
  // };


    $scope.convertToFahrenheit = function(degK) {

      return Math.round((1.8 * (degK - 273)) + 32);

    };

    $scope.convertToDate = function(dt) {

      return new Date(dt * 1000);

    };

}]);