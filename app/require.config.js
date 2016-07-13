require({

	// define js scripts dependencies
	shim : {

		// ---

		'app/main/module' : {
			deps : [ 'angular_route', 'angular_resource',
					'shared/components/progressbar/loading/module',
					'shared/components/input/utils/module',
					'shared/components/pagination/module' ]
		},

		// --- @begin app files

		'app/main/factory.menu.config' : {
			deps : [ 'app/main/module' ]
		},

		'app/main/controller' : {
			deps : [ 'app/main/factory.menu.config' ]
		},

		// --- @begin: bookmarks
		'app/bookmarks/resource' : {
			deps : [ 'app/main/module' ]
		},
		'app/bookmarks/resource.search' : {
			deps : [ 'app/main/module' ]
		},

		'app/bookmarks/controller.search' : {
			deps : [ 'app/bookmarks/resource.search',
					'shared/components/pagination/factory',
					'shared/components/input/utils/factory.input.focus' ]
		},
		'app/bookmarks/controller.list' : {
			deps : [ 'app/bookmarks/resource',
					'shared/components/pagination/factory',
					'shared/components/input/utils/factory.input.focus' ]
		},
		'app/bookmarks/controller.new' : {
			deps : [ 'app/bookmarks/resource' ]
		},
		'app/bookmarks/controller.edit' : {
			deps : [ 'app/bookmarks/resource' ]
		},
		// --- @edit: bookmarks
		
		// --- @begin: produtos
		'app/produtos/resource' : {
			deps : [ 'app/main/module' ]
		},
		'app/produtos/resource.search' : {
			deps : [ 'app/main/module' ]
		},

		'app/produtos/controller.search' : {
			deps : [ 'app/produtos/resource.search',
					'shared/components/pagination/factory',
					'shared/components/input/utils/factory.input.focus' ]
		},
		'app/produtos/controller.list' : {
			deps : [ 'app/produtos/resource',
					'shared/components/pagination/factory',
					'shared/components/input/utils/factory.input.focus' ]
		},
		'app/produtos/controller.new' : {
			deps : [ 'app/produtos/resource' ]
		},
		'app/produtos/controller.edit' : {
			deps : [ 'app/produtos/resource' ]
		},
		// --- @edit: produtos

		// --- @end app files

		'app/main/routes' : {
			deps : [ 
			'app/bookmarks/controller.search',
			'app/bookmarks/controller.list',
			'app/bookmarks/controller.new',
			'app/bookmarks/controller.edit',
			'app/produtos/controller.search', 
			'app/produtos/controller.list',
			'app/produtos/controller.new',
			'app/produtos/controller.edit']
		},

		'app/main/start' : {
			deps : [ 
						// ref's
			'shared/components/pagination/filter.pages.range', // TODO: review
			'app/main/controller', 'app/main/routes' ]
		}

	}

},

[ 'require' ], function(require) {

	console.log('app require.js config');

	require([ 'app/main/start' ]);

});