import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      settings : this.store.findAll('setting').then((settings) => settings.objectAt(0)),
      post   : this.store.query('post', { slug: params.post_slug }).then((posts) => posts.objectAt(0))
    });
  }
});
