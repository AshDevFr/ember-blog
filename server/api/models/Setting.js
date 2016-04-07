/**
 * Setting.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes : {},

  seedData : [
    {
      key   : 'title',
      value : 'Blog Title'
    },
    {
      key   : 'description',
      value : 'Hi, this is my blog'
    },
    {
      key   : 'logo',
      value : 'img/BearsJS.png'
    },
    {
      key   : 'cover',
      value : ''
    },
    {
      key   : 'defaultLang',
      value : 'en_US'
    },
    {
      key   : 'postsPerPage',
      value : '4'
    }
  ]
};

