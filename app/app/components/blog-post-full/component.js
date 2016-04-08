import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    window.scrollTo(0,0);
  }
});
