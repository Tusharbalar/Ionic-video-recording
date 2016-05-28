angular.module('jumpbyte', ['ionic', 'ngCordova', 'jumpbyte.controllers', 'jumpbyte.services', 'ngStorage'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    /**
     * Set tabs position on bottom of screen in android
     */
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        controller: 'cameraCtrl',
        templateUrl: 'templates/tabs.html'
      })

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/tab/dash');

  });
