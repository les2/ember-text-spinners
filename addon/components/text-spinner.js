import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'span',

  classNames: [
    'loading',
  ],

  attributeBindings: [
    'role',
    'label:aria-label',
  ],

  classNameBindings: [
    'type'
  ],

  role: 'progressbar',

  label: 'Loading ...',

  validTypes: [
    '',
    'dots',
    'dots2',
    'dots3',
    'line',
    'line2',
    'plus',
    'lifting',
    'hamburger',
    'bar',
    'bar2',
    'circle',
    'open-circle',
    'arrow',
    'triangle',
    'triangles',
    'beam',
    'bullet',
    'bullseye',
    'rhomb',
    'fish',
    'toggle',
    'countdown',
    'time',
    'hearts',
    'earth',
    'moon',
    'monkey',
    'runner',
    'box-bounce',
    'start',
    'words',
  ],

  type: '',

  didReceiveAttrs() {
    this._super(...arguments);
    Ember.assert(`Not a valid text-spinner type: ${this.get('type')}. Valid types are: ${this.get('validTypes').join(', ')}`,
      this.get('type') === null || this.get('type') === undefined || (typeof(this.get('type')) === 'string' && this.get('validTypes').indexOf(this.get('type')) >= 0));
  }

});
