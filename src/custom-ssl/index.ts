/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
  * Available values: "ubiquitous", "optimal", "force".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#bundle_method CustomSsl#bundle_method}
  */
  readonly bundleMethod?: string;
  /**
  * The zone's SSL certificate or certificate and the intermediate(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#certificate CustomSsl#certificate}
  */
  readonly certificate: string;
  /**
  * Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Options allow distribution to only to U.S. data centers, only to E.U. data centers, or only to highest security data centers. Default distribution is to all Cloudflare datacenters, for optimal performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#geo_restrictions CustomSsl#geo_restrictions}
  */
  readonly geoRestrictions?: CustomSslGeoRestrictions;
  /**
  * Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Any combination of countries, specified by their two letter country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) can be chosen, such as 'country: IN', as well as 'region: EU' which refers to the EU region. If there are too few data centers satisfying the policy, it will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#policy CustomSsl#policy}
  */
  readonly policy?: string;
  /**
  * The zone's private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#private_key CustomSsl#private_key}
  */
  readonly privateKey: string;
  /**
  * The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake.
  * Available values: "legacy_custom", "sni_custom".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#type CustomSsl#type}
  */
  readonly type?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#zone_id CustomSsl#zone_id}
  */
  readonly zoneId: string;
}
export interface CustomSslGeoRestrictions {
  /**
  * Available values: "us", "eu", "highest_security".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#label CustomSsl#label}
  */
  readonly label?: string;
}

export function customSslGeoRestrictionsToTerraform(struct?: CustomSslGeoRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function customSslGeoRestrictionsToHclTerraform(struct?: CustomSslGeoRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomSslGeoRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomSslGeoRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomSslGeoRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}
export interface CustomSslKeylessServerTunnel {
}

export function customSslKeylessServerTunnelToTerraform(struct?: CustomSslKeylessServerTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function customSslKeylessServerTunnelToHclTerraform(struct?: CustomSslKeylessServerTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomSslKeylessServerTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomSslKeylessServerTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomSslKeylessServerTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // vnet_id - computed: true, optional: false, required: false
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
}
export interface CustomSslKeylessServer {
}

export function customSslKeylessServerToTerraform(struct?: CustomSslKeylessServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function customSslKeylessServerToHclTerraform(struct?: CustomSslKeylessServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomSslKeylessServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomSslKeylessServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomSslKeylessServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tunnel - computed: true, optional: false, required: false
  private _tunnel = new CustomSslKeylessServerTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl cloudflare_custom_ssl}
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
  * @param importFromId The id of the existing CustomSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomSsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl cloudflare_custom_ssl} Resource
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
        providerVersion: '5.14.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleMethod = config.bundleMethod;
    this._certificate = config.certificate;
    this._geoRestrictions.internalValue = config.geoRestrictions;
    this._policy = config.policy;
    this._privateKey = config.privateKey;
    this._type = config.type;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_method - computed: true, optional: true, required: false
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

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // geo_restrictions - computed: false, optional: true, required: false
  private _geoRestrictions = new CustomSslGeoRestrictionsOutputReference(this, "geo_restrictions");
  public get geoRestrictions() {
    return this._geoRestrictions;
  }
  public putGeoRestrictions(value: CustomSslGeoRestrictions) {
    this._geoRestrictions.internalValue = value;
  }
  public resetGeoRestrictions() {
    this._geoRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionsInput() {
    return this._geoRestrictions.internalValue;
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // keyless_server - computed: true, optional: false, required: false
  private _keylessServer = new CustomSslKeylessServerOutputReference(this, "keyless_server");
  public get keylessServer() {
    return this._keylessServer;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_method: cdktf.stringToTerraform(this._bundleMethod),
      certificate: cdktf.stringToTerraform(this._certificate),
      geo_restrictions: customSslGeoRestrictionsToTerraform(this._geoRestrictions.internalValue),
      policy: cdktf.stringToTerraform(this._policy),
      private_key: cdktf.stringToTerraform(this._privateKey),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_method: {
        value: cdktf.stringToHclTerraform(this._bundleMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_restrictions: {
        value: customSslGeoRestrictionsToHclTerraform(this._geoRestrictions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomSslGeoRestrictions",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
