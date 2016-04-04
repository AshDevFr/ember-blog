import Ember from 'ember';
import DS from 'ember-data';

const {
        Model,
        attr,
        belongsTo
      } = DS;
const {computed} = Ember;
const {equal} = computed;

export default Model.extend({
  uuid            : attr('string'),
  title           : attr('string', {defaultValue : ''}),
  slug            : attr('string'),
  markdown        : attr('string', {defaultValue : ''}),
  html            : attr('string'),
  image           : attr('string'),
  featured        : attr('boolean', {defaultValue : false}),
  page            : attr('boolean', {defaultValue : false}),
  status          : attr('string', {defaultValue : 'draft'}),
  language        : attr('string', {defaultValue : 'en_US'}),
  metaTitle       : attr('string'),
  metaDescription : attr('string'),
  author          : belongsTo('author', {async : true}),
  updatedAt       : attr('date'),
  publishedAt     : attr('date'),
  createdAt       : attr('date'),
  tags            : DS.hasMany('tag', {
    embedded : 'always',
    async    : true
  }),
  url             : attr('string'),

  isPublished : equal('status', 'published'),
  isDraft     : equal('status', 'draft'),

  updateTags() {
    let tags    = this.get('tags');
    let oldTags = tags.filterBy('id', null);

    tags.removeObjects(oldTags);
    oldTags.invoke('deleteRecord');
  }
});