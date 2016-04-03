import DS from 'ember-data';

const {
        Model,
        attr
      } = DS;

export default Model.extend({
  name: attr('string'),
  slug: attr('string'),
  email: attr('string'),
  image: attr('string'),
  cover: attr('string'),
  bio: attr('string'),
  website: attr('string'),
  location: attr('string')
});
