import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  assignmentFrequencies: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  actions: {
    addUnavailableDate() {
      this.model.get('datesUnavailable').pushObject({ date: null });
    },
    deleteUnavailableDate(date) {
      this.model.get('datesUnavailable').removeObject(date);
    },
    save() {
      this.groups.invoke('save');
      this.model.save();
      this.transitionToRoute('people');
    },
    cancel() {
      window.history.back();
    }
  }
});
