angular.module('app').controller(

  // controller name
  'ProdutosNewCtrl',

  // dependencies injection
  ['$rootScope', '$scope', 'ProdutosResource', 'InputFocusFactory',

// controller definition
function ($rootScope, $scope, resource, input) {

  //---
  var ctrlName = 'ProdutosNewCtrl';
  input = input.get(ctrlName);

  input.config(
    $scope,
    [
      'focusProdutoNomeInput'
    ]);
  
  input.setFocus('focusProdutoNomeInput', 200);

  //console.log(input);
  //---

  $scope.title = 'New Produto';

  $scope.produto = new resource({
    'id':0, 
    'nome':'', 
    'descricao':'', 
    'valorCompra':0,
    'valorVenda':0
  });

  $scope.save = function() {
    $scope.produto.$save(function(res) {
      $rootScope.$emit('produtos:add:event', 'added');
    });
  };

}]);