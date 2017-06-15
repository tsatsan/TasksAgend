angular.module('tasksAgend')
  .controller('detailController', function ($scope, $location, apiTasksService, toastr) {
     
    $scope.updateTask = function (id) {
    let {newFrom, newTo, newDate, newDescription} = $scope
   	// console.log(id)
  if(newDate){
  newDate=newDate.split("/");
  newDate=newDate[1]+","+newDate[0]+","+newDate[2];
  newDate = new Date(newDate).getTime() 
  }


     apiTasksService.updateTask({newFrom, newTo, newDate, newDescription}, id)
         .then(task => {
           $scope.task = task
           $location.path('/listTasks')
   toastr.success('Success update task', 'Hello')
        })
    }
})
      