// https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}
  */
  readonly customOriginServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}
  */
  readonly customOriginSni?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#hostname CustomHostname#hostname}
  */
  readonly hostname: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#ciphers CustomHostname#ciphers}
  */
  readonly ciphers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#early_hints CustomHostname#early_hints}
  */
  readonly earlyHints?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#http2 CustomHostname#http2}
  */
  readonly http2?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#min_tls_version CustomHostname#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
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
    ciphers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ciphers),
    early_hints: cdktf.stringToTerraform(struct!.earlyHints),
    http2: cdktf.stringToTerraform(struct!.http2),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    tls13: cdktf.stringToTerraform(struct!.tls13),
  }
}

export interface CustomHostnameSsl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#certificate_authority CustomHostname#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_certificate CustomHostname#custom_certificate}
  */
  readonly customCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_key CustomHostname#custom_key}
  */
  readonly customKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#method CustomHostname#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#type CustomHostname#type}
  */
  readonly type?: string;
  /**
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
    settings: cdktf.listMapper(customHostnameSslSettingsToTerraform)(struct!.settings),
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customOriginServer = config.customOriginServer;
    this._customOriginSni = config.customOriginSni;
    this._hostname = config.hostname;
    this._zoneId = config.zoneId;
    this._ssl = config.ssl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // ownership_verification - computed: true, optional: false, required: false
  public ownershipVerification(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'ownership_verification').lookup(key);
  }

  // ownership_verification_http - computed: true, optional: false, required: false
  public ownershipVerificationHttp(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'ownership_verification_http').lookup(key);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
  private _ssl?: CustomHostnameSsl[] | cdktf.IResolvable; 
  public get ssl() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ssl');
  }
  public set ssl(value: CustomHostnameSsl[] | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_origin_server: cdktf.stringToTerraform(this._customOriginServer),
      custom_origin_sni: cdktf.stringToTerraform(this._customOriginSni),
      hostname: cdktf.stringToTerraform(this._hostname),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      ssl: cdktf.listMapper(customHostnameSslToTerraform)(this._ssl),
    };
  }
}
