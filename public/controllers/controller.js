function AppCtrl($scope, $http) {
  console.log('Hello world from controller');

$http.get('/contactList').success(function(res) {
  console.log('I got the data I requested');
  $scope.contactList = res;
});

  // person1 = {
  //   name: 'Gillie',
  //   email: 'g@g.com',
  //   number: '111-1111'
  // };

  // person2 = {
  //   name: 'Ethan',
  //   email: 'e@e.com',
  //   number: '222-2222'
  // };  

  // person2 = {
  //   name: 'Mike',
  //   email: 'm@m.com',
  //   number: '333-3333'
  // };  

  // person2 = {
  //   name: 'Yuhua',
  //   email: 'y@y.com',
  //   number: '444-4444'
  // };

  // var contactList = { person1, person2, person3, person4 };  

  // $scope.contactList = contactList;
}