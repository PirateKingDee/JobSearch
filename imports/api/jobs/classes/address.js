import { Meteor } from 'meteor/meteor';
import { Class } from 'meteor/jagi:astronomy';

export const Address = Class.create({
  name: 'Address',
  /* No collection attribute */
  fields: { //ONLY ACCOUNTING FOR JOBS IN THE UNITED STATES FOR NOW
    city: {
      type: String,
      validators: [{
        type: 'minLength',
        param: 2 //Name of shortest city in the US is 2 letters
      }]
    },

    state: {
      type: String,
      validators: [{
        type: 'minLength',
        param: 4 //Shortest state name is 4 letters.
      }]
    },

    zip: {
      type: String,
      optional: true
    },

    streetAddress: {
      type: String,
      optional: true //for now streetAddress will be optional
    }
  }
});
