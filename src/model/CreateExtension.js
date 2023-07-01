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
 * The CreateExtension model module.
 * @module model/CreateExtension
 * @version 0.10.9
 */
class CreateExtension {
    /**
     * Constructs a new <code>CreateExtension</code>.
     * @alias module:model/CreateExtension
     * @param extId {String} 
     * @param archive {String} 
     * @param sourceRepo {String} 
     */
    constructor(extId, archive, sourceRepo) { 
        
        CreateExtension.initialize(this, extId, archive, sourceRepo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, extId, archive, sourceRepo) { 
        obj['ext_id'] = extId;
        obj['archive'] = archive;
        obj['source_repo'] = sourceRepo;
    }

    /**
     * Constructs a <code>CreateExtension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateExtension} obj Optional instance to populate.
     * @return {module:model/CreateExtension} The populated <code>CreateExtension</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateExtension();

            if (data.hasOwnProperty('ext_id')) {
                obj['ext_id'] = ApiClient.convertToType(data['ext_id'], 'String');
            }
            if (data.hasOwnProperty('archive')) {
                obj['archive'] = ApiClient.convertToType(data['archive'], 'String');
            }
            if (data.hasOwnProperty('source_repo')) {
                obj['source_repo'] = ApiClient.convertToType(data['source_repo'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateExtension</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateExtension</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateExtension.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ext_id'] && !(typeof data['ext_id'] === 'string' || data['ext_id'] instanceof String)) {
            throw new Error("Expected the field `ext_id` to be a primitive type in the JSON string but got " + data['ext_id']);
        }
        // ensure the json data is a string
        if (data['archive'] && !(typeof data['archive'] === 'string' || data['archive'] instanceof String)) {
            throw new Error("Expected the field `archive` to be a primitive type in the JSON string but got " + data['archive']);
        }
        // ensure the json data is a string
        if (data['source_repo'] && !(typeof data['source_repo'] === 'string' || data['source_repo'] instanceof String)) {
            throw new Error("Expected the field `source_repo` to be a primitive type in the JSON string but got " + data['source_repo']);
        }

        return true;
    }


}

CreateExtension.RequiredProperties = ["ext_id", "archive", "source_repo"];

/**
 * @member {String} ext_id
 */
CreateExtension.prototype['ext_id'] = undefined;

/**
 * @member {String} archive
 */
CreateExtension.prototype['archive'] = undefined;

/**
 * @member {String} source_repo
 */
CreateExtension.prototype['source_repo'] = undefined;






export default CreateExtension;

