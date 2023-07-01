# lnbits

Lnbits - JavaScript client for lnbits
API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.10.9
- Package version: 0.10.9
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install lnbits --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your lnbits from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Lnbits = require('lnbits');


var api = new Lnbits.CoreApi()
var usr = "usr_example"; // {String} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiDeleteSettingsAdminApiV1SettingsDelete(usr, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Lnbits.CoreApi* | [**apiDeleteSettingsAdminApiV1SettingsDelete**](docs/CoreApi.md#apiDeleteSettingsAdminApiV1SettingsDelete) | **DELETE** /admin/api/v1/settings/ | Api Delete Settings
*Lnbits.CoreApi* | [**apiDownloadBackupAdminApiV1BackupGet**](docs/CoreApi.md#apiDownloadBackupAdminApiV1BackupGet) | **GET** /admin/api/v1/backup/ | Api Download Backup
*Lnbits.CoreApi* | [**apiFiatAsSatsApiV1ConversionPost**](docs/CoreApi.md#apiFiatAsSatsApiV1ConversionPost) | **POST** /api/v1/conversion | Api Fiat As Sats
*Lnbits.CoreApi* | [**apiGetSettingsAdminApiV1SettingsGet**](docs/CoreApi.md#apiGetSettingsAdminApiV1SettingsGet) | **GET** /admin/api/v1/settings/ | Api Get Settings
*Lnbits.CoreApi* | [**apiInstallExtensionApiV1ExtensionPost**](docs/CoreApi.md#apiInstallExtensionApiV1ExtensionPost) | **POST** /api/v1/extension | Api Install Extension
*Lnbits.CoreApi* | [**apiListCurrenciesAvailableApiV1CurrenciesGet**](docs/CoreApi.md#apiListCurrenciesAvailableApiV1CurrenciesGet) | **GET** /api/v1/currencies | Api List Currencies Available
*Lnbits.CoreApi* | [**apiLnurlscanApiV1LnurlscanCodeGet**](docs/CoreApi.md#apiLnurlscanApiV1LnurlscanCodeGet) | **GET** /api/v1/lnurlscan/{code} | Api Lnurlscan
*Lnbits.CoreApi* | [**apiPaymentApiV1PaymentsPaymentHashGet**](docs/CoreApi.md#apiPaymentApiV1PaymentsPaymentHashGet) | **GET** /api/v1/payments/{payment_hash} | Api Payment
*Lnbits.CoreApi* | [**apiPaymentsCreateApiV1PaymentsPost**](docs/CoreApi.md#apiPaymentsCreateApiV1PaymentsPost) | **POST** /api/v1/payments | Api Payments Create
*Lnbits.CoreApi* | [**apiPaymentsDecodeApiV1PaymentsDecodePost**](docs/CoreApi.md#apiPaymentsDecodeApiV1PaymentsDecodePost) | **POST** /api/v1/payments/decode | Api Payments Decode
*Lnbits.CoreApi* | [**apiPaymentsPayLnurlApiV1PaymentsLnurlPost**](docs/CoreApi.md#apiPaymentsPayLnurlApiV1PaymentsLnurlPost) | **POST** /api/v1/payments/lnurl | Api Payments Pay Lnurl
*Lnbits.CoreApi* | [**apiPaymentsSseApiV1PaymentsSseGet**](docs/CoreApi.md#apiPaymentsSseApiV1PaymentsSseGet) | **GET** /api/v1/payments/sse | Api Payments Sse
*Lnbits.CoreApi* | [**apiPerformLnurlauthApiV1LnurlauthPost**](docs/CoreApi.md#apiPerformLnurlauthApiV1LnurlauthPost) | **POST** /api/v1/lnurlauth | Api Perform Lnurlauth
*Lnbits.CoreApi* | [**apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet**](docs/CoreApi.md#apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet) | **GET** /public/v1/payment/{payment_hash} | Api Public Payment Longpolling
*Lnbits.CoreApi* | [**apiRestartServerAdminApiV1RestartGet**](docs/CoreApi.md#apiRestartServerAdminApiV1RestartGet) | **GET** /admin/api/v1/restart/ | Api Restart Server
*Lnbits.CoreApi* | [**apiUninstallExtensionApiV1ExtensionExtIdDelete**](docs/CoreApi.md#apiUninstallExtensionApiV1ExtensionExtIdDelete) | **DELETE** /api/v1/extension/{ext_id} | Api Uninstall Extension
*Lnbits.CoreApi* | [**apiUpdateSettingsAdminApiV1SettingsPut**](docs/CoreApi.md#apiUpdateSettingsAdminApiV1SettingsPut) | **PUT** /admin/api/v1/settings/ | Api Update Settings
*Lnbits.CoreApi* | [**apiUpdateWalletApiV1WalletNewNamePut**](docs/CoreApi.md#apiUpdateWalletApiV1WalletNewNamePut) | **PUT** /api/v1/wallet/{new_name} | Api Update Wallet
*Lnbits.CoreApi* | [**apiWalletApiV1WalletGet**](docs/CoreApi.md#apiWalletApiV1WalletGet) | **GET** /api/v1/wallet | Api Wallet
*Lnbits.CoreApi* | [**auditAdminApiV1AuditGet**](docs/CoreApi.md#auditAdminApiV1AuditGet) | **GET** /admin/api/v1/audit | Audit
*Lnbits.CoreApi* | [**deleteExtensionDbApiV1ExtensionExtIdDbDelete**](docs/CoreApi.md#deleteExtensionDbApiV1ExtensionExtIdDbDelete) | **DELETE** /api/v1/extension/{ext_id}/db | Delete Extension Db
*Lnbits.CoreApi* | [**getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet**](docs/CoreApi.md#getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet) | **GET** /api/v1/extension/release/{org}/{repo}/{tag_name} | Get Extension Release
*Lnbits.CoreApi* | [**getExtensionReleasesApiV1ExtensionExtIdReleasesGet**](docs/CoreApi.md#getExtensionReleasesApiV1ExtensionExtIdReleasesGet) | **GET** /api/v1/extension/{ext_id}/releases | Get Extension Releases
*Lnbits.CoreApi* | [**healthApiV1HealthGet**](docs/CoreApi.md#healthApiV1HealthGet) | **GET** /api/v1/health | Health
*Lnbits.CoreApi* | [**imgApiV1QrcodeDataGet**](docs/CoreApi.md#imgApiV1QrcodeDataGet) | **GET** /api/v1/qrcode/{data} | Img
*Lnbits.CoreApi* | [**paymentListApiV1PaymentsGet**](docs/CoreApi.md#paymentListApiV1PaymentsGet) | **GET** /api/v1/payments | get list of payments
*Lnbits.CoreApi* | [**paymentListApiV1PaymentsPaginatedGet**](docs/CoreApi.md#paymentListApiV1PaymentsPaginatedGet) | **GET** /api/v1/payments/paginated | get paginated list of payments
*Lnbits.CoreApi* | [**tinyurlApiV1TinyurlPost**](docs/CoreApi.md#tinyurlApiV1TinyurlPost) | **POST** /api/v1/tinyurl | Tinyurl
*Lnbits.CoreApi* | [**tinyurlApiV1TinyurlTinyurlIdDelete**](docs/CoreApi.md#tinyurlApiV1TinyurlTinyurlIdDelete) | **DELETE** /api/v1/tinyurl/{tinyurl_id} | Tinyurl
*Lnbits.CoreApi* | [**tinyurlApiV1TinyurlTinyurlIdGet**](docs/CoreApi.md#tinyurlApiV1TinyurlTinyurlIdGet) | **GET** /api/v1/tinyurl/{tinyurl_id} | Tinyurl
*Lnbits.CoreApi* | [**tinyurlTTinyurlIdGet**](docs/CoreApi.md#tinyurlTTinyurlIdGet) | **GET** /t/{tinyurl_id} | Tinyurl
*Lnbits.CoreApi* | [**topupAdminApiV1TopupPut**](docs/CoreApi.md#topupAdminApiV1TopupPut) | **PUT** /admin/api/v1/topup/ | Topup
*Lnbits.CoreApi* | [**websocketUpdateGetApiV1WsItemIdDataGet**](docs/CoreApi.md#websocketUpdateGetApiV1WsItemIdDataGet) | **GET** /api/v1/ws/{item_id}/{data} | Websocket Update Get
*Lnbits.CoreApi* | [**websocketUpdatePostApiV1WsItemIdPost**](docs/CoreApi.md#websocketUpdatePostApiV1WsItemIdPost) | **POST** /api/v1/ws/{item_id} | Websocket Update Post


## Documentation for Models

 - [Lnbits.ConversionData](docs/ConversionData.md)
 - [Lnbits.CreateExtension](docs/CreateExtension.md)
 - [Lnbits.CreateInvoiceData](docs/CreateInvoiceData.md)
 - [Lnbits.CreateLNURLData](docs/CreateLNURLData.md)
 - [Lnbits.CreateLnurlAuth](docs/CreateLnurlAuth.md)
 - [Lnbits.CreateTopup](docs/CreateTopup.md)
 - [Lnbits.DecodePayment](docs/DecodePayment.md)
 - [Lnbits.EditableSettings](docs/EditableSettings.md)
 - [Lnbits.HTTPValidationError](docs/HTTPValidationError.md)
 - [Lnbits.LocationInner](docs/LocationInner.md)
 - [Lnbits.Page](docs/Page.md)
 - [Lnbits.Payment](docs/Payment.md)
 - [Lnbits.ValidationError](docs/ValidationError.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### APIKeyHeader


- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

### APIKeyQuery


- **Type**: API key
- **API key parameter name**: api-key
- **Location**: URL query string
