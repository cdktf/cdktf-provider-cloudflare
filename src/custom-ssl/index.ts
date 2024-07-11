// https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#id CustomSsl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The zone identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#zone_id CustomSsl#zone_id}
  */
  readonly zoneId: string;
  /**
  * custom_ssl_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#custom_ssl_options CustomSsl#custom_ssl_options}
  */
  readonly customSslOptions?: CustomSslCustomSslOptions;
  /**
  * custom_ssl_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#custom_ssl_priority CustomSsl#custom_ssl_priority}
  */
  readonly customSslPriority?: CustomSslCustomSslPriority[] | cdktf.IResolvable;
}
export interface CustomSslCustomSslOptions {
  /**
  * Method of building intermediate certificate chain. A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it. Available values: `ubiquitous`, `optimal`, `force`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#bundle_method CustomSsl#bundle_method}
  */
  readonly bundleMethod?: string;
  /**
  * Certificate certificate and the intermediate(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#certificate CustomSsl#certificate}
  */
  readonly certificate?: string;
  /**
  * Specifies the region where your private key can be held locally. Available values: `us`, `eu`, `highest_security`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#geo_restrictions CustomSsl#geo_restrictions}
  */
  readonly geoRestrictions?: string;
  /**
  * Certificate's private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#private_key CustomSsl#private_key}
  */
  readonly privateKey?: string;
  /**
  * Whether to enable support for legacy clients which do not include SNI in the TLS handshake. Available values: `legacy_custom`, `sni_custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#type CustomSsl#type}
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


export function customSslCustomSslOptionsToHclTerraform(struct?: CustomSslCustomSslOptionsOutputReference | CustomSslCustomSslOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_method: {
      value: cdktf.stringToHclTerraform(struct!.bundleMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_restrictions: {
      value: cdktf.stringToHclTerraform(struct!.geoRestrictions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#id CustomSsl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#priority CustomSsl#priority}
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


export function customSslCustomSslPriorityToHclTerraform(struct?: CustomSslCustomSslPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomSslCustomSslPriorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomSslCustomSslPriority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomSslCustomSslPriority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._priority = value.priority;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class CustomSslCustomSslPriorityList extends cdktf.ComplexList {
  public internalValue? : CustomSslCustomSslPriority[] | cdktf.IResolvable

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
  public get(index: number): CustomSslCustomSslPriorityOutputReference {
    return new CustomSslCustomSslPriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl cloudflare_custom_ssl}
*/
export class CustomSsl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_custom_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomSsl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomSsl to import
  * @param importFromId The id of the existing CustomSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomSsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/custom_ssl cloudflare_custom_ssl} Resource
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
        providerVersion: '4.37.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._zoneId = config.zoneId;
    this._customSslOptions.internalValue = config.customSslOptions;
    this._customSslPriority.internalValue = config.customSslPriority;
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
  private _customSslPriority = new CustomSslCustomSslPriorityList(this, "custom_ssl_priority", false);
  public get customSslPriority() {
    return this._customSslPriority;
  }
  public putCustomSslPriority(value: CustomSslCustomSslPriority[] | cdktf.IResolvable) {
    this._customSslPriority.internalValue = value;
  }
  public resetCustomSslPriority() {
    this._customSslPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSslPriorityInput() {
    return this._customSslPriority.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      custom_ssl_options: customSslCustomSslOptionsToTerraform(this._customSslOptions.internalValue),
      custom_ssl_priority: cdktf.listMapper(customSslCustomSslPriorityToTerraform, true)(this._customSslPriority.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_ssl_options: {
        value: customSslCustomSslOptionsToHclTerraform(this._customSslOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomSslCustomSslOptionsList",
      },
      custom_ssl_priority: {
        value: cdktf.listMapperHcl(customSslCustomSslPriorityToHclTerraform, true)(this._customSslPriority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomSslCustomSslPriorityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
