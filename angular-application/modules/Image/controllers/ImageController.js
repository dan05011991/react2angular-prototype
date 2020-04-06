var ImageController = function($scope) {

    var self = this;

    $scope.list = [{
        city: 'Venice',
        position: 3,
        sites: ['Grand Canal', 'Bridge of Sighs', 'Piazza San Marco'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    }, {
        city: 'Paris',
        position: 2,
        sites: ['Eiffel Tower', 'The Louvre', 'Notre-Dame de Paris'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    }, {
        city: 'Santorini',
        position: 1,
        sites: ['Imerovigli', 'Akrotiri', 'Santorini Arts Factory'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    }];

}

module.exports = ['$scope', ImageController];
