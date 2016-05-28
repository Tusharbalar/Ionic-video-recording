angular.module('jumpbyte')

  .controller('cameraCtrl', function ($scope, $cordovaCamera, $cordovaCapture) {

    $scope.recordVideo = function () {

      var options = { limit: 1, duration: 15 };

      $cordovaCapture.captureVideo(options).then(function (videoData) {
        alert("video " + JSON.stringify(videoData));
      }, function (err) {
        alert("Error occured" + err);
      });

    }

  })