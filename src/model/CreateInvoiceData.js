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

import ApiClient from '../ApiClient';

/**
 * The CreateInvoiceData model module.
 * @module model/CreateInvoiceData
 * @version 0.10.9
 */
class CreateInvoiceData {
    /**
     * Constructs a new <code>CreateInvoiceData</code>.
     * @alias module:model/CreateInvoiceData
     */
    constructor() { 
        
        CreateInvoiceData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateInvoiceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInvoiceData} obj Optional instance to populate.
     * @return {module:model/CreateInvoiceData} The populated <code>CreateInvoiceData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInvoiceData();

            if (data.hasOwnProperty('out')) {
                obj['out'] = ApiClient.convertToType(data['out'], 'Boolean');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('description_hash')) {
                obj['description_hash'] = ApiClient.convertToType(data['description_hash'], 'String');
            }
            if (data.hasOwnProperty('unhashed_description')) {
                obj['unhashed_description'] = ApiClient.convertToType(data['unhashed_description'], 'String');
            }
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Number');
            }
            if (data.hasOwnProperty('lnurl_callback')) {
                obj['lnurl_callback'] = ApiClient.convertToType(data['lnurl_callback'], 'String');
            }
            if (data.hasOwnProperty('lnurl_balance_check')) {
                obj['lnurl_balance_check'] = ApiClient.convertToType(data['lnurl_balance_check'], 'String');
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], Object);
            }
            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = ApiClient.convertToType(data['webhook'], 'String');
            }
            if (data.hasOwnProperty('internal')) {
                obj['internal'] = ApiClient.convertToType(data['internal'], 'Boolean');
            }
            if (data.hasOwnProperty('bolt11')) {
                obj['bolt11'] = ApiClient.convertToType(data['bolt11'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateInvoiceData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateInvoiceData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // ensure the json data is a string
        if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
            throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
        }
        // ensure the json data is a string
        if (data['description_hash'] && !(typeof data['description_hash'] === 'string' || data['description_hash'] instanceof String)) {
            throw new Error("Expected the field `description_hash` to be a primitive type in the JSON string but got " + data['description_hash']);
        }
        // ensure the json data is a string
        if (data['unhashed_description'] && !(typeof data['unhashed_description'] === 'string' || data['unhashed_description'] instanceof String)) {
            throw new Error("Expected the field `unhashed_description` to be a primitive type in the JSON string but got " + data['unhashed_description']);
        }
        // ensure the json data is a string
        if (data['lnurl_callback'] && !(typeof data['lnurl_callback'] === 'string' || data['lnurl_callback'] instanceof String)) {
            throw new Error("Expected the field `lnurl_callback` to be a primitive type in the JSON string but got " + data['lnurl_callback']);
        }
        // ensure the json data is a string
        if (data['lnurl_balance_check'] && !(typeof data['lnurl_balance_check'] === 'string' || data['lnurl_balance_check'] instanceof String)) {
            throw new Error("Expected the field `lnurl_balance_check` to be a primitive type in the JSON string but got " + data['lnurl_balance_check']);
        }
        // ensure the json data is a string
        if (data['webhook'] && !(typeof data['webhook'] === 'string' || data['webhook'] instanceof String)) {
            throw new Error("Expected the field `webhook` to be a primitive type in the JSON string but got " + data['webhook']);
        }
        // ensure the json data is a string
        if (data['bolt11'] && !(typeof data['bolt11'] === 'string' || data['bolt11'] instanceof String)) {
            throw new Error("Expected the field `bolt11` to be a primitive type in the JSON string but got " + data['bolt11']);
        }

        return true;
    }


}



/**
 * @member {Boolean} out
 * @default true
 */
CreateInvoiceData.prototype['out'] = true;

/**
 * @member {Number} amount
 */
CreateInvoiceData.prototype['amount'] = undefined;

/**
 * @member {String} memo
 */
CreateInvoiceData.prototype['memo'] = undefined;

/**
 * @member {String} unit
 * @default 'sat'
 */
CreateInvoiceData.prototype['unit'] = 'sat';

/**
 * @member {String} description_hash
 */
CreateInvoiceData.prototype['description_hash'] = undefined;

/**
 * @member {String} unhashed_description
 */
CreateInvoiceData.prototype['unhashed_description'] = undefined;

/**
 * @member {Number} expiry
 */
CreateInvoiceData.prototype['expiry'] = undefined;

/**
 * @member {String} lnurl_callback
 */
CreateInvoiceData.prototype['lnurl_callback'] = undefined;

/**
 * @member {String} lnurl_balance_check
 */
CreateInvoiceData.prototype['lnurl_balance_check'] = undefined;

/**
 * @member {Object} extra
 */
CreateInvoiceData.prototype['extra'] = undefined;

/**
 * @member {String} webhook
 */
CreateInvoiceData.prototype['webhook'] = undefined;

/**
 * @member {Boolean} internal
 * @default false
 */
CreateInvoiceData.prototype['internal'] = false;

/**
 * @member {String} bolt11
 */
CreateInvoiceData.prototype['bolt11'] = undefined;






export default CreateInvoiceData;

