'use strict';

angular.module('roadAmicoApp')
  .factory('Place', function ($resource) {
    return $resource('/api/places/:id', {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  });