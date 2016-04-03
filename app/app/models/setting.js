import DS from 'ember-data';

const {
        Model,
        attr
      } = DS;

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  logo: attr('string'),
  cover: attr('string'),
  defaultLang: attr('string'),
  postsPerPage: attr('number'),
  ghostHead: attr('string'),
  ghostFoot: attr('string'),
  navigation: attr('string'),
  password: attr('string')
});
