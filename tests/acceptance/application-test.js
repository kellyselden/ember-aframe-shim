import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    assert.equal(window.AFRAME.scenes.length, 0);

    await visit('/');

    assert.dom('#aframe-scenes-length').hasText('0');
  });
});
