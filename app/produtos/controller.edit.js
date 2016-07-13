angular.module('app').controller(

  // controller name
  'ProdutosEditCtrl',

  // dependencies injection
  ['$rootScope', '$scope', 'ProdutosResource', '$routeParams', 'InputFocusFactory',

// controller definition
function ($rootScope, $scope, resource, $routeParams, input) {

  //---
  var ctrlName = 'ProdutosEditCtrl';
  input = input.get(ctrlName);

  input.config(
    $scope,
    [
      'focusProdutoNomeInput'
    ]);
  //console.log(input);
  //---

  $scope.title = 'Edit Produto : ' + $routeParams.id;

  resource.get({id: $routeParams.id}, function(result) {
    $scope.produto = result;
    input.setFocus('focusProdutoNomeInput', 200);
  });

  $scope.save = function() {
    $scope.produto.$update({id: $routeParams.id}, function(res) {
      $rootScope.$emit('produtos:update:event', 'updated');
    });
  };
  
  $scope.showConfirm = false;
  
  $scope.remove = function() {
    $scope.showConfirm = true;
  };

  $scope.cancelRemove = function() {
    $scope.showConfirm = false;
    input.focusReset();
    input.setFocus('focusProdutoNomeInput');
  };

  $scope.destroy = function() {
    $scope.produto.$delete({id: $routeParams.id}, function(res) {
      $scope.showConfirm = false;
      $rootScope.$emit('produtos:remove:event', 'removed');
    });
  };

}]);