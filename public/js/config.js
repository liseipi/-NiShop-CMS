requirejs.config({
  baseUrl: '/js',
  paths: {
    jquery: 'lib/jquery.min',
    'jquery-ui': 'vendor/jquery-ui/jquery-ui.min',
    sui: 'vendor/sui3/js/sui.min',
    metisMenu: 'lib/metisMenu',
    vue: 'lib/vue.min',
    cmsui: 'lib/cmsui',
    ckedit: 'vendor/ckeditor/ckeditor',
    holder: 'lib/holder',
    zyUpload: 'vendor/zyUploads/js/zyupload-1.0.0.min',
    timepicker: 'vendor/timepicker/jquery-ui-timepicker-addon.min'
  },
  map: {
    '*': {
      'css': 'lib/css.min'
    }
  },
  shim: {
    sui: {
      deps: [
        'jquery',
      ]
    },
    metisMenu: {
      deps: [
        'jquery',
      ]
    },
    cmsui: {
      deps: [
        'sui',
        'metisMenu'
      ]
    },
    zyUpload: {
      deps: [
        'css!vendor/zyUploads/css/zyupload-1.0.0.min.css',
        'jquery'
      ]
    },
    timepicker: {
      deps: [
        'css!vendor/jquery-ui/jquery-ui.min.css',
        'css!vendor/timepicker/jquery-ui-timepicker-addon.min.css',
        'jquery'
      ]
    },
  }
});
