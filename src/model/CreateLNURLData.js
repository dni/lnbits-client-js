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
 * The CreateLNURLData model module.
 * @module model/CreateLNURLData
 * @version 0.10.9
 */
class CreateLNURLData {
    /**
     * Constructs a new <code>CreateLNURLData</code>.
     * @alias module:model/CreateLNURLData
     * @param descriptionHash {String} 
     * @param callback {String} 
     * @param amount {Number} 
     */
    constructor(descriptionHash, callback, amount) { 
        
        CreateLNURLData.initialize(this, descriptionHash, callback, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, descriptionHash, callback, amount) { 
        obj['description_hash'] = descriptionHash;
        obj['callback'] = callback;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>CreateLNURLData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLNURLData} obj Optional instance to populate.
     * @return {module:model/CreateLNURLData} The populated <code>CreateLNURLData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLNURLData();

            if (data.hasOwnProperty('description_hash')) {
                obj['description_hash'] = ApiClient.convertToType(data['description_hash'], 'String');
            }
            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateLNURLData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateLNURLData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateLNURLData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description_hash'] && !(typeof data['description_hash'] === 'string' || data['description_hash'] instanceof String)) {
            throw new Error("Expected the field `description_hash` to be a primitive type in the JSON string but got " + data['description_hash']);
        }
        // ensure the json data is a string
        if (data['callback'] && !(typeof data['callback'] === 'string' || data['callback'] instanceof String)) {
            throw new Error("Expected the field `callback` to be a primitive type in the JSON string but got " + data['callback']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

CreateLNURLData.RequiredProperties = ["description_hash", "callback", "amount"];

/**
 * @member {String} description_hash
 */
CreateLNURLData.prototype['description_hash'] = undefined;

/**
 * @member {String} callback
 */
CreateLNURLData.prototype['callback'] = undefined;

/**
 * @member {Number} amount
 */
CreateLNURLData.prototype['amount'] = undefined;

/**
 * @member {String} comment
 */
CreateLNURLData.prototype['comment'] = undefined;

/**
 * @member {String} description
 */
CreateLNURLData.prototype['description'] = undefined;






export default CreateLNURLData;
