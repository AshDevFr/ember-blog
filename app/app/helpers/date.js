import Ember from 'ember';
import moment from 'moment';

export function date(params, {format}) {
  let date = params[0] === null ? undefined : params[0];
  format   = format || 'MMM Do, YYYY';

  return moment(date).format(format);
}

export default Ember.Helper.helper(date);
