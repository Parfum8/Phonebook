var app = angular.module('phonebook', []);

app.controller('PhonebookController', ['$scope',
    'DataService', function(scope, dataService){
        scope.persons = dataService.list();
        scope.view = 'table';
        scope.view = 'list';
    }]);

app.directive('pbPersonCard', function(){
    return {
        restrict: 'E',
        scope: {
            person: '='
        },
        templateUrl: 'partials/person-card.html'
    };
});

app.service('DataService', [ function(){
    function  list() {
        return [
            {
                "name": "Serezhka Mironov",
                "phone": "178-64-14",
                "company": "Miron Inc",
                "photo": "1.jpg"
            },
            {
                "name": "Yulian Koval",
                "phone": "150-65-15",
                "company": "Miron Inc",
                "photo": "ulian.jpg"
            },
            {
                "name": "Alena Serduk",
                "phone": "321-22-76",
                "company": "Miron Inc",
                "photo": "alena.jpg"
            },
            {
                "name": "Ilya Oleynik",
                "phone": "242-23-54",
                "company": "Miron Inc",
                "photo": "ilya.jpg"
            },
            {
                "name": "Snezhana Shirskaya",
                "phone": "342-11-54",
                "company": "Avon",
                "photo": "snezhana.jpg"
            },
        ]
    }
    return {
        list:list
    }
}])





