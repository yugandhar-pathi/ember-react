import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | volume-dashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:volume-dashboard');
    assert.ok(route);
  });
});
