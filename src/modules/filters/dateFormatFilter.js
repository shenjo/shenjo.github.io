/**
 * Created by SHENJO on 11/16/2017.
 */
import moment from 'moment';


const dateFromat = function(value, format) {
  if (value) {
    return moment(value).format(format);
  } else {
    return '';
  }

};
export default {
  name: 'dateFormat',
  func: dateFromat
}