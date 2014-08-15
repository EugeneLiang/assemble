/**
 * Assemble <http://site.io>
 *
 * Copyright (c) 2014, Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT License (MIT).
 */

'use strict';

var assert = require('assert');
var should = require('should');
var assemble = require('..');


describe('assemble omit', function () {
  var site = null;
  beforeEach(function () {
    site = assemble.create();
  });
  
  describe('.omit()', function () {

    it('should omit a value from the cache', function () {
      site.set('a', 'b');

      // property should be on the cache
      site.get('a').should.equal('b');
      site.omit('a');

      // property should not be on the cache
      assert(site.get('a') === undefined);
    });

    it('should omit an array of values from the cache', function () {
      site
      	.set('a', 'a')
      	.set('b', 'b')
      	.set('c', 'c')
      	.set('d', 'd');

      // properties should be on the cache
      site.get('a').should.equal('a');
      site.get('b').should.equal('b');
      site.get('c').should.equal('c');
      site.get('d').should.equal('d');

      site.omit(['a', 'b', 'c', 'd']);

      // properties should not be on the cache
      assert(site.get('a') === undefined);
      assert(site.get('b') === undefined);
      assert(site.get('c') === undefined);
      assert(site.get('d') === undefined);
    });

  });
});