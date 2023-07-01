# Lnbits.CoreApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDeleteSettingsAdminApiV1SettingsDelete**](CoreApi.md#apiDeleteSettingsAdminApiV1SettingsDelete) | **DELETE** /admin/api/v1/settings/ | Api Delete Settings
[**apiDownloadBackupAdminApiV1BackupGet**](CoreApi.md#apiDownloadBackupAdminApiV1BackupGet) | **GET** /admin/api/v1/backup/ | Api Download Backup
[**apiFiatAsSatsApiV1ConversionPost**](CoreApi.md#apiFiatAsSatsApiV1ConversionPost) | **POST** /api/v1/conversion | Api Fiat As Sats
[**apiGetSettingsAdminApiV1SettingsGet**](CoreApi.md#apiGetSettingsAdminApiV1SettingsGet) | **GET** /admin/api/v1/settings/ | Api Get Settings
[**apiInstallExtensionApiV1ExtensionPost**](CoreApi.md#apiInstallExtensionApiV1ExtensionPost) | **POST** /api/v1/extension | Api Install Extension
[**apiListCurrenciesAvailableApiV1CurrenciesGet**](CoreApi.md#apiListCurrenciesAvailableApiV1CurrenciesGet) | **GET** /api/v1/currencies | Api List Currencies Available
[**apiLnurlscanApiV1LnurlscanCodeGet**](CoreApi.md#apiLnurlscanApiV1LnurlscanCodeGet) | **GET** /api/v1/lnurlscan/{code} | Api Lnurlscan
[**apiPaymentApiV1PaymentsPaymentHashGet**](CoreApi.md#apiPaymentApiV1PaymentsPaymentHashGet) | **GET** /api/v1/payments/{payment_hash} | Api Payment
[**apiPaymentsCreateApiV1PaymentsPost**](CoreApi.md#apiPaymentsCreateApiV1PaymentsPost) | **POST** /api/v1/payments | Api Payments Create
[**apiPaymentsDecodeApiV1PaymentsDecodePost**](CoreApi.md#apiPaymentsDecodeApiV1PaymentsDecodePost) | **POST** /api/v1/payments/decode | Api Payments Decode
[**apiPaymentsPayLnurlApiV1PaymentsLnurlPost**](CoreApi.md#apiPaymentsPayLnurlApiV1PaymentsLnurlPost) | **POST** /api/v1/payments/lnurl | Api Payments Pay Lnurl
[**apiPaymentsSseApiV1PaymentsSseGet**](CoreApi.md#apiPaymentsSseApiV1PaymentsSseGet) | **GET** /api/v1/payments/sse | Api Payments Sse
[**apiPerformLnurlauthApiV1LnurlauthPost**](CoreApi.md#apiPerformLnurlauthApiV1LnurlauthPost) | **POST** /api/v1/lnurlauth | Api Perform Lnurlauth
[**apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet**](CoreApi.md#apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet) | **GET** /public/v1/payment/{payment_hash} | Api Public Payment Longpolling
[**apiRestartServerAdminApiV1RestartGet**](CoreApi.md#apiRestartServerAdminApiV1RestartGet) | **GET** /admin/api/v1/restart/ | Api Restart Server
[**apiUninstallExtensionApiV1ExtensionExtIdDelete**](CoreApi.md#apiUninstallExtensionApiV1ExtensionExtIdDelete) | **DELETE** /api/v1/extension/{ext_id} | Api Uninstall Extension
[**apiUpdateSettingsAdminApiV1SettingsPut**](CoreApi.md#apiUpdateSettingsAdminApiV1SettingsPut) | **PUT** /admin/api/v1/settings/ | Api Update Settings
[**apiUpdateWalletApiV1WalletNewNamePut**](CoreApi.md#apiUpdateWalletApiV1WalletNewNamePut) | **PUT** /api/v1/wallet/{new_name} | Api Update Wallet
[**apiWalletApiV1WalletGet**](CoreApi.md#apiWalletApiV1WalletGet) | **GET** /api/v1/wallet | Api Wallet
[**auditAdminApiV1AuditGet**](CoreApi.md#auditAdminApiV1AuditGet) | **GET** /admin/api/v1/audit | Audit
[**deleteExtensionDbApiV1ExtensionExtIdDbDelete**](CoreApi.md#deleteExtensionDbApiV1ExtensionExtIdDbDelete) | **DELETE** /api/v1/extension/{ext_id}/db | Delete Extension Db
[**getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet**](CoreApi.md#getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet) | **GET** /api/v1/extension/release/{org}/{repo}/{tag_name} | Get Extension Release
[**getExtensionReleasesApiV1ExtensionExtIdReleasesGet**](CoreApi.md#getExtensionReleasesApiV1ExtensionExtIdReleasesGet) | **GET** /api/v1/extension/{ext_id}/releases | Get Extension Releases
[**healthApiV1HealthGet**](CoreApi.md#healthApiV1HealthGet) | **GET** /api/v1/health | Health
[**imgApiV1QrcodeDataGet**](CoreApi.md#imgApiV1QrcodeDataGet) | **GET** /api/v1/qrcode/{data} | Img
[**paymentListApiV1PaymentsGet**](CoreApi.md#paymentListApiV1PaymentsGet) | **GET** /api/v1/payments | get list of payments
[**paymentListApiV1PaymentsPaginatedGet**](CoreApi.md#paymentListApiV1PaymentsPaginatedGet) | **GET** /api/v1/payments/paginated | get paginated list of payments
[**tinyurlApiV1TinyurlPost**](CoreApi.md#tinyurlApiV1TinyurlPost) | **POST** /api/v1/tinyurl | Tinyurl
[**tinyurlApiV1TinyurlTinyurlIdDelete**](CoreApi.md#tinyurlApiV1TinyurlTinyurlIdDelete) | **DELETE** /api/v1/tinyurl/{tinyurl_id} | Tinyurl
[**tinyurlApiV1TinyurlTinyurlIdGet**](CoreApi.md#tinyurlApiV1TinyurlTinyurlIdGet) | **GET** /api/v1/tinyurl/{tinyurl_id} | Tinyurl
[**tinyurlTTinyurlIdGet**](CoreApi.md#tinyurlTTinyurlIdGet) | **GET** /t/{tinyurl_id} | Tinyurl
[**topupAdminApiV1TopupPut**](CoreApi.md#topupAdminApiV1TopupPut) | **PUT** /admin/api/v1/topup/ | Topup
[**websocketUpdateGetApiV1WsItemIdDataGet**](CoreApi.md#websocketUpdateGetApiV1WsItemIdDataGet) | **GET** /api/v1/ws/{item_id}/{data} | Websocket Update Get
[**websocketUpdatePostApiV1WsItemIdPost**](CoreApi.md#websocketUpdatePostApiV1WsItemIdPost) | **POST** /api/v1/ws/{item_id} | Websocket Update Post



## apiDeleteSettingsAdminApiV1SettingsDelete

> Object apiDeleteSettingsAdminApiV1SettingsDelete(usr)

Api Delete Settings

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let usr = "usr_example"; // String | 
apiInstance.apiDeleteSettingsAdminApiV1SettingsDelete(usr, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiDownloadBackupAdminApiV1BackupGet

> apiDownloadBackupAdminApiV1BackupGet(usr)

Api Download Backup

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let usr = "usr_example"; // String | 
apiInstance.apiDownloadBackupAdminApiV1BackupGet(usr, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiFiatAsSatsApiV1ConversionPost

> Object apiFiatAsSatsApiV1ConversionPost(conversionData)

Api Fiat As Sats

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let conversionData = new Lnbits.ConversionData(); // ConversionData | 
apiInstance.apiFiatAsSatsApiV1ConversionPost(conversionData, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversionData** | [**ConversionData**](ConversionData.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiGetSettingsAdminApiV1SettingsGet

> Object apiGetSettingsAdminApiV1SettingsGet(usr)

Api Get Settings

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let usr = "usr_example"; // String | 
apiInstance.apiGetSettingsAdminApiV1SettingsGet(usr, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiInstallExtensionApiV1ExtensionPost

> Object apiInstallExtensionApiV1ExtensionPost(usr, createExtension)

Api Install Extension

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let usr = "usr_example"; // String | 
let createExtension = new Lnbits.CreateExtension(); // CreateExtension | 
apiInstance.apiInstallExtensionApiV1ExtensionPost(usr, createExtension, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 
 **createExtension** | [**CreateExtension**](CreateExtension.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiListCurrenciesAvailableApiV1CurrenciesGet

> Object apiListCurrenciesAvailableApiV1CurrenciesGet()

Api List Currencies Available

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
apiInstance.apiListCurrenciesAvailableApiV1CurrenciesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiLnurlscanApiV1LnurlscanCodeGet

> Object apiLnurlscanApiV1LnurlscanCodeGet(code)

Api Lnurlscan

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let code = "code_example"; // String | 
apiInstance.apiLnurlscanApiV1LnurlscanCodeGet(code, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiPaymentApiV1PaymentsPaymentHashGet

> Object apiPaymentApiV1PaymentsPaymentHashGet(paymentHash, opts)

Api Payment

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let paymentHash = null; // Object | 
let opts = {
  'xApiKey': "xApiKey_example" // String | 
};
apiInstance.apiPaymentApiV1PaymentsPaymentHashGet(paymentHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentHash** | [**Object**](.md)|  | 
 **xApiKey** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiPaymentsCreateApiV1PaymentsPost

> Object apiPaymentsCreateApiV1PaymentsPost(createInvoiceData)

Api Payments Create

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let createInvoiceData = new Lnbits.CreateInvoiceData(); // CreateInvoiceData | 
apiInstance.apiPaymentsCreateApiV1PaymentsPost(createInvoiceData, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInvoiceData** | [**CreateInvoiceData**](CreateInvoiceData.md)|  | 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiPaymentsDecodeApiV1PaymentsDecodePost

> Object apiPaymentsDecodeApiV1PaymentsDecodePost(decodePayment)

Api Payments Decode

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let decodePayment = new Lnbits.DecodePayment(); // DecodePayment | 
apiInstance.apiPaymentsDecodeApiV1PaymentsDecodePost(decodePayment, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decodePayment** | [**DecodePayment**](DecodePayment.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiPaymentsPayLnurlApiV1PaymentsLnurlPost

> Object apiPaymentsPayLnurlApiV1PaymentsLnurlPost(createLNURLData)

Api Payments Pay Lnurl

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let createLNURLData = new Lnbits.CreateLNURLData(); // CreateLNURLData | 
apiInstance.apiPaymentsPayLnurlApiV1PaymentsLnurlPost(createLNURLData, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLNURLData** | [**CreateLNURLData**](CreateLNURLData.md)|  | 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiPaymentsSseApiV1PaymentsSseGet

> Object apiPaymentsSseApiV1PaymentsSseGet()

Api Payments Sse

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
apiInstance.apiPaymentsSseApiV1PaymentsSseGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiPerformLnurlauthApiV1LnurlauthPost

> Object apiPerformLnurlauthApiV1LnurlauthPost(createLnurlAuth)

Api Perform Lnurlauth

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let createLnurlAuth = new Lnbits.CreateLnurlAuth(); // CreateLnurlAuth | 
apiInstance.apiPerformLnurlauthApiV1LnurlauthPost(createLnurlAuth, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLnurlAuth** | [**CreateLnurlAuth**](CreateLnurlAuth.md)|  | 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet

> Object apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet(paymentHash)

Api Public Payment Longpolling

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let paymentHash = null; // Object | 
apiInstance.apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet(paymentHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentHash** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiRestartServerAdminApiV1RestartGet

> Object apiRestartServerAdminApiV1RestartGet(usr)

Api Restart Server

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let usr = "usr_example"; // String | 
apiInstance.apiRestartServerAdminApiV1RestartGet(usr, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiUninstallExtensionApiV1ExtensionExtIdDelete

> Object apiUninstallExtensionApiV1ExtensionExtIdDelete(extId, usr)

Api Uninstall Extension

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let extId = "extId_example"; // String | 
let usr = "usr_example"; // String | 
apiInstance.apiUninstallExtensionApiV1ExtensionExtIdDelete(extId, usr, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extId** | **String**|  | 
 **usr** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiUpdateSettingsAdminApiV1SettingsPut

> Object apiUpdateSettingsAdminApiV1SettingsPut(usr, editableSettings)

Api Update Settings

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let usr = "usr_example"; // String | 
let editableSettings = new Lnbits.EditableSettings(); // EditableSettings | 
apiInstance.apiUpdateSettingsAdminApiV1SettingsPut(usr, editableSettings, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 
 **editableSettings** | [**EditableSettings**](EditableSettings.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiUpdateWalletApiV1WalletNewNamePut

> Object apiUpdateWalletApiV1WalletNewNamePut(newName)

Api Update Wallet

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let newName = "newName_example"; // String | 
apiInstance.apiUpdateWalletApiV1WalletNewNamePut(newName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newName** | **String**|  | 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiWalletApiV1WalletGet

> Object apiWalletApiV1WalletGet()

Api Wallet

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
apiInstance.apiWalletApiV1WalletGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## auditAdminApiV1AuditGet

> Object auditAdminApiV1AuditGet(usr)

Audit

show the current balance of the node and the LNbits database

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let usr = "usr_example"; // String | 
apiInstance.auditAdminApiV1AuditGet(usr, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteExtensionDbApiV1ExtensionExtIdDbDelete

> Object deleteExtensionDbApiV1ExtensionExtIdDbDelete(extId, usr)

Delete Extension Db

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let extId = "extId_example"; // String | 
let usr = "usr_example"; // String | 
apiInstance.deleteExtensionDbApiV1ExtensionExtIdDbDelete(extId, usr, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extId** | **String**|  | 
 **usr** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet

> Object getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet(org, repo, tagName, usr)

Get Extension Release

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let org = "org_example"; // String | 
let repo = "repo_example"; // String | 
let tagName = "tagName_example"; // String | 
let usr = "usr_example"; // String | 
apiInstance.getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet(org, repo, tagName, usr, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 
 **repo** | **String**|  | 
 **tagName** | **String**|  | 
 **usr** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExtensionReleasesApiV1ExtensionExtIdReleasesGet

> Object getExtensionReleasesApiV1ExtensionExtIdReleasesGet(extId, usr)

Get Extension Releases

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let extId = "extId_example"; // String | 
let usr = "usr_example"; // String | 
apiInstance.getExtensionReleasesApiV1ExtensionExtIdReleasesGet(extId, usr, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extId** | **String**|  | 
 **usr** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## healthApiV1HealthGet

> Object healthApiV1HealthGet()

Health

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
apiInstance.healthApiV1HealthGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## imgApiV1QrcodeDataGet

> imgApiV1QrcodeDataGet(data)

Img

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let data = null; // Object | 
apiInstance.imgApiV1QrcodeDataGet(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Object**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentListApiV1PaymentsGet

> [Payment] paymentListApiV1PaymentsGet(opts)

get list of payments

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let opts = {
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'sortby': "sortby_example", // String | 
  'direction': "direction_example", // String | 
  'search': "search_example", // String | Text based search
  'checkingId': "checkingId_example", // String | Supports Filtering
  'amount': 56, // Number | Supports Filtering. Supports Search
  'fee': 56, // Number | Supports Filtering
  'memo': "memo_example", // String | Supports Filtering. Supports Search
  'time': new Date("2013-10-20T19:20:30+01:00"), // Date | Supports Filtering
  'bolt11': "bolt11_example", // String | Supports Filtering
  'preimage': "preimage_example", // String | Supports Filtering
  'paymentHash': "paymentHash_example", // String | Supports Filtering
  'expiry': new Date("2013-10-20T19:20:30+01:00"), // Date | Supports Filtering
  'extra': {key: null}, // Object | Supports Filtering. Nested attributes can be filtered too, e.g. `extra.[additional].[attributes]`
  'walletId': "walletId_example", // String | Supports Filtering
  'webhook': "webhook_example", // String | Supports Filtering
  'webhookStatus': 56 // Number | Supports Filtering
};
apiInstance.paymentListApiV1PaymentsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **sortby** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **search** | **String**| Text based search | [optional] 
 **checkingId** | **String**| Supports Filtering | [optional] 
 **amount** | **Number**| Supports Filtering. Supports Search | [optional] 
 **fee** | **Number**| Supports Filtering | [optional] 
 **memo** | **String**| Supports Filtering. Supports Search | [optional] 
 **time** | **Date**| Supports Filtering | [optional] 
 **bolt11** | **String**| Supports Filtering | [optional] 
 **preimage** | **String**| Supports Filtering | [optional] 
 **paymentHash** | **String**| Supports Filtering | [optional] 
 **expiry** | **Date**| Supports Filtering | [optional] 
 **extra** | [**Object**](.md)| Supports Filtering. Nested attributes can be filtered too, e.g. &#x60;extra.[additional].[attributes]&#x60; | [optional] 
 **walletId** | **String**| Supports Filtering | [optional] 
 **webhook** | **String**| Supports Filtering | [optional] 
 **webhookStatus** | **Number**| Supports Filtering | [optional] 

### Return type

[**[Payment]**](Payment.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentListApiV1PaymentsPaginatedGet

> Page paymentListApiV1PaymentsPaginatedGet(opts)

get paginated list of payments

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let opts = {
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'sortby': "sortby_example", // String | 
  'direction': "direction_example", // String | 
  'search': "search_example", // String | Text based search
  'checkingId': "checkingId_example", // String | Supports Filtering
  'amount': 56, // Number | Supports Filtering. Supports Search
  'fee': 56, // Number | Supports Filtering
  'memo': "memo_example", // String | Supports Filtering. Supports Search
  'time': new Date("2013-10-20T19:20:30+01:00"), // Date | Supports Filtering
  'bolt11': "bolt11_example", // String | Supports Filtering
  'preimage': "preimage_example", // String | Supports Filtering
  'paymentHash': "paymentHash_example", // String | Supports Filtering
  'expiry': new Date("2013-10-20T19:20:30+01:00"), // Date | Supports Filtering
  'extra': {key: null}, // Object | Supports Filtering. Nested attributes can be filtered too, e.g. `extra.[additional].[attributes]`
  'walletId': "walletId_example", // String | Supports Filtering
  'webhook': "webhook_example", // String | Supports Filtering
  'webhookStatus': 56 // Number | Supports Filtering
};
apiInstance.paymentListApiV1PaymentsPaginatedGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **sortby** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **search** | **String**| Text based search | [optional] 
 **checkingId** | **String**| Supports Filtering | [optional] 
 **amount** | **Number**| Supports Filtering. Supports Search | [optional] 
 **fee** | **Number**| Supports Filtering | [optional] 
 **memo** | **String**| Supports Filtering. Supports Search | [optional] 
 **time** | **Date**| Supports Filtering | [optional] 
 **bolt11** | **String**| Supports Filtering | [optional] 
 **preimage** | **String**| Supports Filtering | [optional] 
 **paymentHash** | **String**| Supports Filtering | [optional] 
 **expiry** | **Date**| Supports Filtering | [optional] 
 **extra** | [**Object**](.md)| Supports Filtering. Nested attributes can be filtered too, e.g. &#x60;extra.[additional].[attributes]&#x60; | [optional] 
 **walletId** | **String**| Supports Filtering | [optional] 
 **webhook** | **String**| Supports Filtering | [optional] 
 **webhookStatus** | **Number**| Supports Filtering | [optional] 

### Return type

[**Page**](Page.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tinyurlApiV1TinyurlPost

> Object tinyurlApiV1TinyurlPost(url, opts)

Tinyurl

creates a tinyurl

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let url = "url_example"; // String | 
let opts = {
  'endless': false // Boolean | 
};
apiInstance.tinyurlApiV1TinyurlPost(url, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**|  | 
 **endless** | **Boolean**|  | [optional] [default to false]

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tinyurlApiV1TinyurlTinyurlIdDelete

> Object tinyurlApiV1TinyurlTinyurlIdDelete(tinyurlId)

Tinyurl

delete a tinyurl by id

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let tinyurlId = "tinyurlId_example"; // String | 
apiInstance.tinyurlApiV1TinyurlTinyurlIdDelete(tinyurlId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tinyurlId** | **String**|  | 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tinyurlApiV1TinyurlTinyurlIdGet

> Object tinyurlApiV1TinyurlTinyurlIdGet(tinyurlId)

Tinyurl

get a tinyurl by id

### Example

```javascript
import Lnbits from 'lnbits';
let defaultClient = Lnbits.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure API key authorization: APIKeyQuery
let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
APIKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQuery.apiKeyPrefix = 'Token';

let apiInstance = new Lnbits.CoreApi();
let tinyurlId = "tinyurlId_example"; // String | 
apiInstance.tinyurlApiV1TinyurlTinyurlIdGet(tinyurlId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tinyurlId** | **String**|  | 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tinyurlTTinyurlIdGet

> Object tinyurlTTinyurlIdGet(tinyurlId)

Tinyurl

redirects a tinyurl by id

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let tinyurlId = "tinyurlId_example"; // String | 
apiInstance.tinyurlTTinyurlIdGet(tinyurlId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tinyurlId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## topupAdminApiV1TopupPut

> Object topupAdminApiV1TopupPut(usr, createTopup)

Topup

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let usr = "usr_example"; // String | 
let createTopup = new Lnbits.CreateTopup(); // CreateTopup | 
apiInstance.topupAdminApiV1TopupPut(usr, createTopup, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 
 **createTopup** | [**CreateTopup**](CreateTopup.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## websocketUpdateGetApiV1WsItemIdDataGet

> Object websocketUpdateGetApiV1WsItemIdDataGet(itemId, data)

Websocket Update Get

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let itemId = "itemId_example"; // String | 
let data = "data_example"; // String | 
apiInstance.websocketUpdateGetApiV1WsItemIdDataGet(itemId, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **String**|  | 
 **data** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websocketUpdatePostApiV1WsItemIdPost

> Object websocketUpdatePostApiV1WsItemIdPost(itemId, data)

Websocket Update Post

### Example

```javascript
import Lnbits from 'lnbits';

let apiInstance = new Lnbits.CoreApi();
let itemId = "itemId_example"; // String | 
let data = "data_example"; // String | 
apiInstance.websocketUpdatePostApiV1WsItemIdPost(itemId, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **String**|  | 
 **data** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

