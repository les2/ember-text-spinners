import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('text-spinner', 'Integration | Component | text spinner', {
  integration: true
});

test('it renders the default text-spinner', function (assert) {

  this.render(hbs`{{text-spinner}}`);

  assert.equal(this.$('span.loading').length, 1);
});

test('the spinner adds ARIA attributes', function (assert) {

  this.render(hbs`{{text-spinner}}`);

  let spinner = this.$('span.loading');
  assert.equal(spinner.attr('role'), 'progressbar');
  assert.equal(spinner.attr('aria-label'), 'Loading ...');
});

test('the spinner accepts a custom aria-label', function (assert) {
  this.render(hbs`{{text-spinner label='Mississippi'}}`);
  let spinner = this.$('span.loading');
  assert.equal(spinner.attr('aria-label'), 'Mississippi');
});

test('it renders the `dots` spinner', function (assert) {
  this.render(hbs`{{text-spinner type='dots'}}`);
  assert.equal(this.$('span.loading.dots').length, 1);
});

test('it throws when the spinner type is not valid', function (assert) {
  assert.throws(() => {
    this.render(hbs`{{text-spinner type='WRONG'}}`);
  });
});

test('it throws if the spinner type is changed from a valid type to an invalid type', function (assert) {
  this.set('type', 'dots');
  this.render(hbs`{{text-spinner type=(readonly type)}}`);
  assert.throws(() => {
    this.set('type', 'WRONG');
  });
});

test('it renders the default spinner when the type is null', function (assert) {
  this.set('type', null);
  this.render(hbs`{{text-spinner type=type}}`);
  assert.equal(this.$('span.loading').length, 1);
});

test('it renders the default spinner when the type is undefined', function (assert) {
  this.set('type', undefined);
  this.render(hbs`{{text-spinner type=type}}`);
  assert.equal(this.$('span.loading').length, 1);
});

test('it renders the default spinner when the type is empty string', function (assert) {
  this.set('type', '');
  this.render(hbs`{{text-spinner type=type}}`);
  assert.equal(this.$('span.loading').length, 1);
});

test('it throws if the spinner type is a boolean', function (assert) {
  this.set('type', false);
  assert.throws(() => {
    this.render(hbs`{{text-spinner type=(readonly type)}}`);
  });
});
