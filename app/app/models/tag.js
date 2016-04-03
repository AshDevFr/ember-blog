import DS from 'ember-data';

const {
        Model,
        attr
      } = DS;

export default Model.extend({
  uuid            : attr('string'),
  name            : attr('string'),
  slug            : attr('string'),
  description     : attr('string'),
  image           : attr('string'),
  count           : attr('raw')
});
