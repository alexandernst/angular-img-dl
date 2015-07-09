var aid = angular.module('angular-img-dl', []);

aid.directive("angularImgDl", ["$http", function($http) {
	return {
		scope: {
			angularImgDlModel: '=',
			angularImgDlUrl: '@'
		},
		link: function(scope, elem, attrs) {
			$http.get(scope.angularImgDlUrl, {
				responseType: 'blob'
			}).success(function (response, status) {
				if(status !== 200) return;
				scope.angularImgDlModel = response;
			});
		}
	};
}]);
