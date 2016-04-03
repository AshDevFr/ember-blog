import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['publishedAt:desc'],
  postList: Ember.computed.sort('posts', 'sortProperties')
});
