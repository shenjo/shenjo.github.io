/**
 * Created by SHENJO on 11/16/2017.
 */

import {each} from 'lodash';
const files = ['dateFormatFilter.js'];
const filters = [];
each(files, file => {
  const { name, func } = require('./' + file).default;
  filters.push({ name, func });
});

export default filters;
console.log(filters);