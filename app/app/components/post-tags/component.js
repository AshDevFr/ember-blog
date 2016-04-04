import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'span',
  tagList : Ember.computed('tags.@each.name', function() {
    return this.get('tags').mapBy('name').sort().join(', ');
  })
});
