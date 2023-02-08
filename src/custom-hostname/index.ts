// https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom metadata associated with custom hostname. Only supports primitive string values, all other values are accessible via the API directly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_metadata CustomHostname#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: string };
  /**
  * The custom origin server used for certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}
  */
  readonly customOriginServer?: string;
  /**
  * The [custom origin SNI](https://developers.cloudflare.com/ssl/ssl-for-saas/hostname-specific-behavior/custom-origin) used for certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}
  */
  readonly customOriginSni?: string;
  /**
  * Hostname you intend to request a certificate for. **Modifying this attribute will force creation of a new resource.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#hostname CustomHostname#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#id CustomHostname#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to wait for a custom hostname SSL sub-object to reach status `pending_validation` during creation. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#wait_for_ssl_pending_validation CustomHostname#wait_for_ssl_pending_validation}
  */
  readonly waitForSslPendingValidation?: boolean | cdktf.IResolvable;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#zone_id CustomHostname#zone_id}
  */
  readonly zoneId: string;
  /**
  * ssl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#ssl CustomHostname#ssl}
  */
  readonly ssl?: CustomHostnameSsl[] | cdktf.IResolvable;
}
export interface CustomHostnameSslValidationErrors {
}

export function customHostnameSslValidationErrorsToTerraform(struct?: CustomHostnameSslValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CustomHostnameSslValidationErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CustomHostnameSslValidationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHostnameSslValidationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class CustomHostnameSslValidationErrorsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CustomHostnameSslValidationErrorsOutputReference {
    return new CustomHostnameSslValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomHostnameSslValidationRecords {
}

export function customHostnameSslValidationRecordsToTerraform(struct?: CustomHostnameSslValidationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CustomHostnameSslValidationRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CustomHostnameSslValidationRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHostnameSslValidationRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cname_name - computed: true, optional: false, required: false
  public get cnameName() {
    return this.getStringAttribute('cname_name');
  }

  // cname_target - computed: true, optional: false, required: false
  public get cnameTarget() {
    return this.getStringAttribute('cname_target');
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return this.getListAttribute('emails');
  }

  // http_body - computed: true, optional: false, required: false
  public get httpBody() {
    return this.getStringAttribute('http_body');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }

  // txt_name - computed: true, optional: false, required: false
  public get txtName() {
    return this.getStringAttribute('txt_name');
  }

  // txt_value - computed: true, optional: false, required: false
  public get txtValue() {
    return this.getStringAttribute('txt_value');
  }
}

export class CustomHostnameSslValidationRecordsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CustomHostnameSslValidationRecordsOutputReference {
    return new CustomHostnameSslValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomHostnameSslSettings {
  /**
  * List of SSL/TLS ciphers to associate with this certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#ciphers CustomHostname#ciphers}
  */
  readonly ciphers?: string[];
  /**
  * Whether early hints should be supported. Available values: `on`, `off`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#early_hints CustomHostname#early_hints}
  */
  readonly earlyHints?: string;
  /**
  * Whether HTTP2 should be supported. Available values: `on`, `off`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#http2 CustomHostname#http2}
  */
  readonly http2?: string;
  /**
  * Lowest version of TLS this certificate should support. Available values: `1.0`, `1.1`, `1.2`, `1.3`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#min_tls_version CustomHostname#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Whether TLSv1.3 should be supported. Available values: `on`, `off`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#tls13 CustomHostname#tls13}
  */
  readonly tls13?: string;
}

export function customHostnameSslSettingsToTerraform(struct?: CustomHostnameSslSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ciphers),
    early_hints: cdktf.stringToTerraform(struct!.earlyHints),
    http2: cdktf.stringToTerraform(struct!.http2),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    tls13: cdktf.stringToTerraform(struct!.tls13),
  }
}

export class CustomHostnameSslSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CustomHostnameSslSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._earlyHints !== undefined) {
      hasAnyValues = true;
      internalValueResult.earlyHints = this._earlyHints;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._tls13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13 = this._tls13;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHostnameSslSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciphers = undefined;
      this._earlyHints = undefined;
      this._http2 = undefined;
      this._minTlsVersion = undefined;
      this._tls13 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciphers = value.ciphers;
      this._earlyHints = value.earlyHints;
      this._http2 = value.http2;
      this._minTlsVersion = value.minTlsVersion;
      this._tls13 = value.tls13;
    }
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string[]; 
  public get ciphers() {
    return cdktf.Fn.tolist(this.getListAttribute('ciphers'));
  }
  public set ciphers(value: string[]) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // early_hints - computed: false, optional: true, required: false
  private _earlyHints?: string; 
  public get earlyHints() {
    return this.getStringAttribute('early_hints');
  }
  public set earlyHints(value: string) {
    this._earlyHints = value;
  }
  public resetEarlyHints() {
    this._earlyHints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyHintsInput() {
    return this._earlyHints;
  }

  // http2 - computed: false, optional: true, required: false
  private _http2?: string; 
  public get http2() {
    return this.getStringAttribute('http2');
  }
  public set http2(value: string) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }

  // tls13 - computed: false, optional: true, required: false
  private _tls13?: string; 
  public get tls13() {
    return this.getStringAttribute('tls13');
  }
  public set tls13(value: string) {
    this._tls13 = value;
  }
  public resetTls13() {
    this._tls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Input() {
    return this._tls13;
  }
}

export class CustomHostnameSslSettingsList extends cdktf.ComplexList {
  public internalValue? : CustomHostnameSslSettings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CustomHostnameSslSettingsOutputReference {
    return new CustomHostnameSslSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomHostnameSsl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#certificate_authority CustomHostname#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * If a custom uploaded certificate is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_certificate CustomHostname#custom_certificate}
  */
  readonly customCertificate?: string;
  /**
  * The key for a custom uploaded certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_key CustomHostname#custom_key}
  */
  readonly customKey?: string;
  /**
  * Domain control validation (DCV) method used for this hostname. Available values: `http`, `txt`, `email`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#method CustomHostname#method}
  */
  readonly method?: string;
  /**
  * Level of validation to be used for this hostname. Available values: `dv`. Defaults to `dv`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#type CustomHostname#type}
  */
  readonly type?: string;
  /**
  * Indicates whether the certificate covers a wildcard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#wildcard CustomHostname#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#settings CustomHostname#settings}
  */
  readonly settings?: CustomHostnameSslSettings[] | cdktf.IResolvable;
}

export function customHostnameSslToTerraform(struct?: CustomHostnameSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority: cdktf.stringToTerraform(struct!.certificateAuthority),
    custom_certificate: cdktf.stringToTerraform(struct!.customCertificate),
    custom_key: cdktf.stringToTerraform(struct!.customKey),
    method: cdktf.stringToTerraform(struct!.method),
    type: cdktf.stringToTerraform(struct!.type),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
    settings: cdktf.listMapper(customHostnameSslSettingsToTerraform, true)(struct!.settings),
  }
}

export class CustomHostnameSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CustomHostnameSsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthority !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthority = this._certificateAuthority;
    }
    if (this._customCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificate = this._customCertificate;
    }
    if (this._customKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKey = this._customKey;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHostnameSsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthority = undefined;
      this._customCertificate = undefined;
      this._customKey = undefined;
      this._method = undefined;
      this._type = undefined;
      this._wildcard = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthority = value.certificateAuthority;
      this._customCertificate = value.customCertificate;
      this._customKey = value.customKey;
      this._method = value.method;
      this._type = value.type;
      this._wildcard = value.wildcard;
      this._settings.internalValue = value.settings;
    }
  }

  // certificate_authority - computed: true, optional: true, required: false
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority;
  }

  // custom_certificate - computed: false, optional: true, required: false
  private _customCertificate?: string; 
  public get customCertificate() {
    return this.getStringAttribute('custom_certificate');
  }
  public set customCertificate(value: string) {
    this._customCertificate = value;
  }
  public resetCustomCertificate() {
    this._customCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate;
  }

  // custom_key - computed: false, optional: true, required: false
  private _customKey?: string; 
  public get customKey() {
    return this.getStringAttribute('custom_key');
  }
  public set customKey(value: string) {
    this._customKey = value;
  }
  public resetCustomKey() {
    this._customKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyInput() {
    return this._customKey;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validation_errors - computed: true, optional: false, required: false
  private _validationErrors = new CustomHostnameSslValidationErrorsList(this, "validation_errors", false);
  public get validationErrors() {
    return this._validationErrors;
  }

  // validation_records - computed: true, optional: false, required: false
  private _validationRecords = new CustomHostnameSslValidationRecordsList(this, "validation_records", false);
  public get validationRecords() {
    return this._validationRecords;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: boolean | cdktf.IResolvable; 
  public get wildcard() {
    return this.getBooleanAttribute('wildcard');
  }
  public set wildcard(value: boolean | cdktf.IResolvable) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new CustomHostnameSslSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CustomHostnameSslSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class CustomHostnameSslList extends cdktf.ComplexList {
  public internalValue? : CustomHostnameSsl[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CustomHostnameSslOutputReference {
    return new CustomHostnameSslOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname cloudflare_custom_hostname}
*/
export class CustomHostname extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_custom_hostname";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname cloudflare_custom_hostname} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomHostnameConfig
  */
  public constructor(scope: Construct, id: string, config: CustomHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_custom_hostname',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.34.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customMetadata = config.customMetadata;
    this._customOriginServer = config.customOriginServer;
    this._customOriginSni = config.customOriginSni;
    this._hostname = config.hostname;
    this._id = config.id;
    this._waitForSslPendingValidation = config.waitForSslPendingValidation;
    this._zoneId = config.zoneId;
    this._ssl.internalValue = config.ssl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_metadata - computed: false, optional: true, required: false
  private _customMetadata?: { [key: string]: string }; 
  public get customMetadata() {
    return this.getStringMapAttribute('custom_metadata');
  }
  public set customMetadata(value: { [key: string]: string }) {
    this._customMetadata = value;
  }
  public resetCustomMetadata() {
    this._customMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata;
  }

  // custom_origin_server - computed: false, optional: true, required: false
  private _customOriginServer?: string; 
  public get customOriginServer() {
    return this.getStringAttribute('custom_origin_server');
  }
  public set customOriginServer(value: string) {
    this._customOriginServer = value;
  }
  public resetCustomOriginServer() {
    this._customOriginServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOriginServerInput() {
    return this._customOriginServer;
  }

  // custom_origin_sni - computed: false, optional: true, required: false
  private _customOriginSni?: string; 
  public get customOriginSni() {
    return this.getStringAttribute('custom_origin_sni');
  }
  public set customOriginSni(value: string) {
    this._customOriginSni = value;
  }
  public resetCustomOriginSni() {
    this._customOriginSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOriginSniInput() {
    return this._customOriginSni;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ownership_verification - computed: true, optional: false, required: false
  private _ownershipVerification = new cdktf.StringMap(this, "ownership_verification");
  public get ownershipVerification() {
    return this._ownershipVerification;
  }

  // ownership_verification_http - computed: true, optional: false, required: false
  private _ownershipVerificationHttp = new cdktf.StringMap(this, "ownership_verification_http");
  public get ownershipVerificationHttp() {
    return this._ownershipVerificationHttp;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // wait_for_ssl_pending_validation - computed: false, optional: true, required: false
  private _waitForSslPendingValidation?: boolean | cdktf.IResolvable; 
  public get waitForSslPendingValidation() {
    return this.getBooleanAttribute('wait_for_ssl_pending_validation');
  }
  public set waitForSslPendingValidation(value: boolean | cdktf.IResolvable) {
    this._waitForSslPendingValidation = value;
  }
  public resetWaitForSslPendingValidation() {
    this._waitForSslPendingValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSslPendingValidationInput() {
    return this._waitForSslPendingValidation;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl = new CustomHostnameSslList(this, "ssl", false);
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: CustomHostnameSsl[] | cdktf.IResolvable) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._customMetadata),
      custom_origin_server: cdktf.stringToTerraform(this._customOriginServer),
      custom_origin_sni: cdktf.stringToTerraform(this._customOriginSni),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      wait_for_ssl_pending_validation: cdktf.booleanToTerraform(this._waitForSslPendingValidation),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      ssl: cdktf.listMapper(customHostnameSslToTerraform, true)(this._ssl.internalValue),
    };
  }
}
