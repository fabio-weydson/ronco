angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope) {
  $scope.items = [
    { title: '<b>Espaço BALI</b> colorindo nossas noites de Sexta-Feira aqui na Marulho! Vem conhecer nosso novo ambiente e curtir toda vibe desse lugar mágico ao som de Natiruts & Charlie Brown Jr, por Stefano Marques. Sexta (3) as 19H30 na Marulho. Ingressos antecipados já disponíveis nas lojas Ferrovia Iguatemi & Benfica!!', id: 1, src: 'fotos/nov1.jpg', data: '29 de Julho' },
    { title: '<b>REVEILLON RONCO DO MAR BALI MMXIX.</b> Vem passar a virada de ano no paraíso e desfrutar dos nossos novos ambientes com vista para o mar. Vem celebrar a vida, abraçar quem ama e sorrir com intensidade por cada dia vivido. Reúne a família, convida os amigos e vem sentir toda a Positividade do Ronco do mar.', id: 2, src:'fotos/nov2.jpg', data: '28 de Julho' }
  ];
})

.controller('CardapioCtrl', function($scope, $stateParams) {

  $scope.visivel = true;
  $scope.ativa = function(){
    $scope.visivel = !$scope.visivel;
  }

})
.controller('OEventoCtrl', function($scope, $stateParams) {
  
  $scope.fotos = new Array();		
  var i;
  for(i=1; i<=10; ++i) {
    $scope.fotos.push(i);
    
  }

});
