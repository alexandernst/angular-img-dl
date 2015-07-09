var aid = angular.module('angular-img-dl', []);

aid.directive("angularImgDl", ["$http", function($http) {
	return {
		scope: {
			angularImgDlModel: '=',
			angularImgDlUrl: '@'
		},
		link: function(scope, ele, attr) {
			$http.get(scope.angularImgDlUrl,{}, {
				responseType: 'blob'
			}).success(function (response) {
				angularImgDlModel = response;
			});
		}
	};
}]);
