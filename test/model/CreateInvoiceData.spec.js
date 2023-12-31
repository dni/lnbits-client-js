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
    instance = new Lnbits.CreateInvoiceData();
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

  describe('CreateInvoiceData', function() {
    it('should create an instance of CreateInvoiceData', function() {
      // uncomment below and update the code to test CreateInvoiceData
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be.a(Lnbits.CreateInvoiceData);
    });

    it('should have the property out (base name: "out")', function() {
      // uncomment below and update the code to test the property out
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property descriptionHash (base name: "description_hash")', function() {
      // uncomment below and update the code to test the property descriptionHash
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property unhashedDescription (base name: "unhashed_description")', function() {
      // uncomment below and update the code to test the property unhashedDescription
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property expiry (base name: "expiry")', function() {
      // uncomment below and update the code to test the property expiry
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property lnurlCallback (base name: "lnurl_callback")', function() {
      // uncomment below and update the code to test the property lnurlCallback
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property lnurlBalanceCheck (base name: "lnurl_balance_check")', function() {
      // uncomment below and update the code to test the property lnurlBalanceCheck
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property extra (base name: "extra")', function() {
      // uncomment below and update the code to test the property extra
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property webhook (base name: "webhook")', function() {
      // uncomment below and update the code to test the property webhook
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property internal (base name: "internal")', function() {
      // uncomment below and update the code to test the property internal
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

    it('should have the property bolt11 (base name: "bolt11")', function() {
      // uncomment below and update the code to test the property bolt11
      //var instance = new Lnbits.CreateInvoiceData();
      //expect(instance).to.be();
    });

  });

}));
