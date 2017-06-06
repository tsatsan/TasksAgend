angular.module('tasksAgend')
    .factory('apiTasksService', function($http) {
        function addTask(nameUser, nameUser2, dateCreation, dateRealized, title, description, completed) {
            return $http({
                url: '/tasks',
                method: "POST",
                data: {
                    nameUser,
                    nameUser2,
                    dateCreation,
                    dateRealized,
                    title,
                    description,
                    completed
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function(response) {
                return response.data
            })
        }

        function getAll() {
            return $http.get('/tasks')
                .then(response => response.data)
        }
        return {
            getAll,
            addTask
        }
    })
