angular.module('jumpbyte')

  .controller('cameraCtrl', function ($scope, $cordovaCamera, $cordovaCapture, $localStorage) {

    $scope.videos = [];

    $scope.recordVideo = function () {

      var options = { limit: 1, duration: 15 };

      $cordovaCapture.captureVideo(options).then(function (videoData) {
        

        $scope.videos.push({
          fullPath: videoData[0].fullPath
        });

        // $localStorage.fullPath.push(videoData[0].fullPath);

        // alert("video " + JSON.stringify($localStorage.fullPath));
        // var v = "<video controls='controls'>";
        // v += "<source src='" + videoData[0].fullPath + "' type='video/mp4'>";
        // v += "</video>";
        // document.querySelector("#videoArea").innerHTML = v;

      }, function (err) {
        console.log("Error occured" + err);
      });

    }

  })