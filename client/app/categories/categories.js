'use strict';

angular.module('roadAmicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categories', {
        url: '/categories',
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {
          categories: function (sessionCache) {
            return sessionCache.categories().$promise;
          }
        }
      })
  });
