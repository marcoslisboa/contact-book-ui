angular.module('app').config(

  // dependencies injection
  ['$routeProvider',

// routes definition
function ($routeProvider) {

  $routeProvider

    //--- @begin: bookmarks
    .when(
      '/bookmarks',
      {
        controller: 'BookmarksListCtrl',
        templateUrl: 'app/bookmarks/tpl.list.html'
      }
    )
    .when(
      '/bookmarks/search',
      {
        controller: 'BookmarksSearchCtrl',
        templateUrl: 'app/bookmarks/tpl.search.html'
      }
    )
    .when(
      '/bookmarks/new',
      {
        controller: 'BookmarksNewCtrl',
        templateUrl: 'app/bookmarks/tpl.form.html'
      }
    )
    .when(
      '/bookmarks/edit/:id',
      {
        controller: 'BookmarksEditCtrl',
        templateUrl: 'app/bookmarks/tpl.form.html'
      }
    )
    //--- @end: bookmarks

    .when(
      '/produtos',
      {
        controller: 'ProdutosListCtrl',
        templateUrl: 'app/produtos/tpl.list.html'
      }
    )
    .when(
      '/produtos/search',
      {
        controller: 'ProdutosSearchCtrl',
        templateUrl: 'app/produtos/tpl.search.html'
      }
    )
    .when(
      '/produtos/new',
      {
        controller: 'ProdutosNewCtrl',
        templateUrl: 'app/produtos/tpl.form.html'
      }
    )
    .when(
      '/produtos/edit/:id',
      {
        controller: 'ProdutosEditCtrl',
        templateUrl: 'app/produtos/tpl.form.html'
      }
    )
    
     //--- @end: produtos
    
    .when(
      '/about',
      {
        templateUrl: 'app/about/tpl.html'
      }
    )

    .otherwise({redirectTo:'/bookmarks'});

}]);