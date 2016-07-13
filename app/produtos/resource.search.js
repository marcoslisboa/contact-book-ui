angular.module('app').factory(

  // resource name
  'ProdutosSearchResource', 

  // dependency injection
  ['$resource', 

function($resource) {

  // http://code.angularjs.org/1.1.5/docs/api/ngResource.$resource
  var rest = $resource(
    'rest/produtos/search/:name'
  );

  return rest;

}]);