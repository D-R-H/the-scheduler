import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  groups: hasMany('group'),
  assignmentFrequency: attr('number'),
  lastAssignment: attr(),
  assignmentCount: attr('number'), // used to even out schedules
  datesUnavailable: attr({ defaultValue() { return []; } }),
  randomSeed: Ember.computed(function() {
    return Math.random();
  }).volatile(),
  assignmentFrequencyPrintable: Ember.computed('assignmentFrequency', function() {
    if (this.get('assignmentFrequency') === 0) {
      return 'As needed';
    } else {
      return `${this.get('assignmentFrequency')} weeks`;
    }
  })
});
