// https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#zone_id CustomSsl#zone_id}
  */
  readonly zoneId: string;
  /**
  * custom_ssl_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#custom_ssl_options CustomSsl#custom_ssl_options}
  */
  readonly customSslOptions?: CustomSslCustomSslOptions;
  /**
  * custom_ssl_priority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#custom_ssl_priority CustomSsl#custom_ssl_priority}
  */
  readonly customSslPriority?: CustomSslCustomSslPriority[] | cdktf.IResolvable;
}
export interface CustomSslCustomSslOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#bundle_method CustomSsl#bundle_method}
  */
  readonly bundleMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#certificate CustomSsl#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#geo_restrictions CustomSsl#geo_restrictions}
  */
  readonly geoRestrictions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#private_key CustomSsl#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#type CustomSsl#type}
  */
  readonly type?: string;
}

export function customSslCustomSslOptionsToTerraform(struct?: CustomSslCustomSslOptionsOutputReference | CustomSslCustomSslOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_method: cdktf.stringToTerraform(struct!.bundleMethod),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    geo_restrictions: cdktf.stringToTerraform(struct!.geoRestrictions),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CustomSslCustomSslOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomSslCustomSslOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleMethod = this._bundleMethod;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._geoRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestrictions = this._geoRestrictions;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomSslCustomSslOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bundleMethod = undefined;
      this._certificate = undefined;
      this._geoRestrictions = undefined;
      this._privateKey = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bundleMethod = value.bundleMethod;
      this._certificate = value.certificate;
      this._geoRestrictions = value.geoRestrictions;
      this._privateKey = value.privateKey;
      this._type = value.type;
    }
  }

  // bundle_method - computed: false, optional: true, required: false
  private _bundleMethod?: string; 
  public get bundleMethod() {
    return this.getStringAttribute('bundle_method');
  }
  public set bundleMethod(value: string) {
    this._bundleMethod = value;
  }
  public resetBundleMethod() {
    this._bundleMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleMethodInput() {
    return this._bundleMethod;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // geo_restrictions - computed: false, optional: true, required: false
  private _geoRestrictions?: string; 
  public get geoRestrictions() {
    return this.getStringAttribute('geo_restrictions');
  }
  public set geoRestrictions(value: string) {
    this._geoRestrictions = value;
  }
  public resetGeoRestrictions() {
    this._geoRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionsInput() {
    return this._geoRestrictions;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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
}
export interface CustomSslCustomSslPriority {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#id CustomSsl#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl#priority CustomSsl#priority}
  */
  readonly priority?: number;
}

export function customSslCustomSslPriorityToTerraform(struct?: CustomSslCustomSslPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl cloudflare_custom_ssl}
*/
export class CustomSsl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_custom_ssl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl cloudflare_custom_ssl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomSslConfig
  */
  public constructor(scope: Construct, id: string, config: CustomSslConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_custom_ssl',
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
    this._zoneId = config.zoneId;
    this._customSslOptions.internalValue = config.customSslOptions;
    this._customSslPriority = config.customSslPriority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uploaded_on - computed: true, optional: false, required: false
  public get uploadedOn() {
    return this.getStringAttribute('uploaded_on');
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

  // custom_ssl_options - computed: false, optional: true, required: false
  private _customSslOptions = new CustomSslCustomSslOptionsOutputReference(this, "custom_ssl_options");
  public get customSslOptions() {
    return this._customSslOptions;
  }
  public putCustomSslOptions(value: CustomSslCustomSslOptions) {
    this._customSslOptions.internalValue = value;
  }
  public resetCustomSslOptions() {
    this._customSslOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSslOptionsInput() {
    return this._customSslOptions.internalValue;
  }

  // custom_ssl_priority - computed: false, optional: true, required: false
  private _customSslPriority?: CustomSslCustomSslPriority[] | cdktf.IResolvable; 
  public get customSslPriority() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_ssl_priority');
  }
  public set customSslPriority(value: CustomSslCustomSslPriority[] | cdktf.IResolvable) {
    this._customSslPriority = value;
  }
  public resetCustomSslPriority() {
    this._customSslPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSslPriorityInput() {
    return this._customSslPriority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      zone_id: cdktf.stringToTerraform(this._zoneId),
      custom_ssl_options: customSslCustomSslOptionsToTerraform(this._customSslOptions.internalValue),
      custom_ssl_priority: cdktf.listMapper(customSslCustomSslPriorityToTerraform)(this._customSslPriority),
    };
  }
}
