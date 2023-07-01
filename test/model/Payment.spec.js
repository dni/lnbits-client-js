/**
 * lnbits
 * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
 *
 * The version of the OpenAPI document: 0.10.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Lnbits);
  }
}(this, function(expect, Lnbits) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Lnbits.Payment();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Payment', function() {
    it('should create an instance of Payment', function() {
      // uncomment below and update the code to test Payment
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be.a(Lnbits.Payment);
    });

    it('should have the property checkingId (base name: "checking_id")', function() {
      // uncomment below and update the code to test the property checkingId
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property pending (base name: "pending")', function() {
      // uncomment below and update the code to test the property pending
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property bolt11 (base name: "bolt11")', function() {
      // uncomment below and update the code to test the property bolt11
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property preimage (base name: "preimage")', function() {
      // uncomment below and update the code to test the property preimage
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property paymentHash (base name: "payment_hash")', function() {
      // uncomment below and update the code to test the property paymentHash
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property expiry (base name: "expiry")', function() {
      // uncomment below and update the code to test the property expiry
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property extra (base name: "extra")', function() {
      // uncomment below and update the code to test the property extra
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property webhook (base name: "webhook")', function() {
      // uncomment below and update the code to test the property webhook
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

    it('should have the property webhookStatus (base name: "webhook_status")', function() {
      // uncomment below and update the code to test the property webhookStatus
      //var instance = new Lnbits.Payment();
      //expect(instance).to.be();
    });

  });

}));
