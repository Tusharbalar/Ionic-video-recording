angular.module('jumpbyte')

  .controller('cameraCtrl', function ($scope, $cordovaCamera, $cordovaCapture, $localStorage) {

    $scope.videos = [];

    $scope.recordVideo = function () {

      var options = { limit: 1, duration: 15 };

      $cordovaCapture.captureVideo(options).then(function (videoData) {

        alert(JSON.stringify(videoData));

        $scope.videos.push({
          name: videoData[0].name,
          length: parseInt(videoData[0].size/(1024*1024)),
          date: new Date(),
          fullPath: videoData[0].fullPath
        });

      }, function (err) {
        console.log("Error occured" + err);
      });

    }

  })