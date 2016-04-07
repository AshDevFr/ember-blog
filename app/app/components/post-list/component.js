import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties : ['publishedAt:desc'],
  pageNumber     : 1,
  pageCount      : Ember.computed('sortedList.[]', 'postsPerPage', function() {
    return Math.ceil(this.get('sortedList').length / this.get('postsPerPage'));
  }),
  sortedList     : Ember.computed.sort('posts', 'sortProperties'),
  postList       : Ember.computed('sortedList', 'pageNumber', 'postsPerPage', function() {
    let start = (this.get('pageNumber') - 1 ) * this.get('postsPerPage'),
        end   = this.get('pageNumber') * this.get('postsPerPage');
    return this.get('sortedList').slice(start, end);
  }),
  displayPrev    : Ember.computed('pageNumber', function() {
    return this.get('pageNumber') > 1;
  }),
  displayNext    : Ember.computed('pageNumber', 'pageCount', function() {
    return this.get('pageNumber') < this.get('pageCount');
  }),
  actions        : {
    goPrev : function() {
      if (this.get('pageNumber') > 1) {
        this.set('pageNumber', (this.get('pageNumber') - 1));
        window.scrollTo(0,0);
      }
    },
    goNext : function() {
      if (this.get('pageNumber') < this.get('pageCount')) {
        this.set('pageNumber', (this.get('pageNumber') + 1));
        window.scrollTo(0,0);
      }
    }
  }
});
