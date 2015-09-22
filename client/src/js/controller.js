//main app controller

angular.module('gapminderTools')
.controller('gapminderToolsCtrl', ['$scope', '$window', '$route', '$routeParams', '$location', 'vizabiItems', 'vizabiFactory', function($scope, $window, $route, $routeParams, $location, vizabiItems, vizabiFactory) {

  var placeholder = document.getElementById('vizabi-placeholder');

  $scope.loadingError = false;
  $scope.tools = {};
  $scope.validTools = [];
  $scope.relatedItems = [];

  //start off by getting all items
  vizabiItems.getItems().then(function(items) {
    $scope.tools = items;
    $scope.validTools = Object.keys($scope.tools);
    $scope.$broadcast('$routeChangeSuccess');
  });


  $scope.$on('$routeChangeSuccess', function() {
    var validTools = $scope.validTools;
    if(validTools.length === 0) return;
    if(validTools.indexOf($routeParams.slug) === -1) {
      //redirect
      $location.path('/' + validTools[0]);
      return;
    }

    scrollTo(document.querySelector('.wrapper'), 0, 200, function() {
      $scope.activeTool = $routeParams.slug;
      var tool = $scope.tools[$scope.activeTool];
      $scope.viz = vizabiFactory.render(tool.tool, placeholder, tool.opts);
      $scope.relatedItems = tool.relateditems;
      $scope.$apply();

      //send to google analytics
      $window.ga('send', 'pageview', { page: $location.url() });
      
    });
  });

  function scrollTo(element, to, duration, cb) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop == to) {
        cb();
        return;
      }
      scrollTo(element, to, duration - 10, cb);
    }, 10);
  }


}]);
