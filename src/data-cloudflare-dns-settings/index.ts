// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareDnsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings#account_id DataCloudflareDnsSettings#account_id}
  */
  readonly accountId?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings#zone_id DataCloudflareDnsSettings#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareDnsSettingsZoneDefaultsInternalDns {
}

export function dataCloudflareDnsSettingsZoneDefaultsInternalDnsToTerraform(struct?: DataCloudflareDnsSettingsZoneDefaultsInternalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct?: DataCloudflareDnsSettingsZoneDefaultsInternalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareDnsSettingsZoneDefaultsInternalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsSettingsZoneDefaultsInternalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsSettingsZoneDefaultsInternalDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference_zone_id - computed: true, optional: false, required: false
  public get referenceZoneId() {
    return this.getStringAttribute('reference_zone_id');
  }
}
export interface DataCloudflareDnsSettingsZoneDefaultsNameservers {
}

export function dataCloudflareDnsSettingsZoneDefaultsNameserversToTerraform(struct?: DataCloudflareDnsSettingsZoneDefaultsNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareDnsSettingsZoneDefaultsNameserversToHclTerraform(struct?: DataCloudflareDnsSettingsZoneDefaultsNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareDnsSettingsZoneDefaultsNameserversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsSettingsZoneDefaultsNameservers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsSettingsZoneDefaultsNameservers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareDnsSettingsZoneDefaultsSoa {
}

export function dataCloudflareDnsSettingsZoneDefaultsSoaToTerraform(struct?: DataCloudflareDnsSettingsZoneDefaultsSoa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareDnsSettingsZoneDefaultsSoaToHclTerraform(struct?: DataCloudflareDnsSettingsZoneDefaultsSoa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareDnsSettingsZoneDefaultsSoaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsSettingsZoneDefaultsSoa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsSettingsZoneDefaultsSoa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expire - computed: true, optional: false, required: false
  public get expire() {
    return this.getNumberAttribute('expire');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }

  // mname - computed: true, optional: false, required: false
  public get mname() {
    return this.getStringAttribute('mname');
  }

  // refresh - computed: true, optional: false, required: false
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getNumberAttribute('retry');
  }

  // rname - computed: true, optional: false, required: false
  public get rname() {
    return this.getStringAttribute('rname');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}
export interface DataCloudflareDnsSettingsZoneDefaults {
}

export function dataCloudflareDnsSettingsZoneDefaultsToTerraform(struct?: DataCloudflareDnsSettingsZoneDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareDnsSettingsZoneDefaultsToHclTerraform(struct?: DataCloudflareDnsSettingsZoneDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareDnsSettingsZoneDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsSettingsZoneDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsSettingsZoneDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flatten_all_cnames - computed: true, optional: false, required: false
  public get flattenAllCnames() {
    return this.getBooleanAttribute('flatten_all_cnames');
  }

  // foundation_dns - computed: true, optional: false, required: false
  public get foundationDns() {
    return this.getBooleanAttribute('foundation_dns');
  }

  // internal_dns - computed: true, optional: false, required: false
  private _internalDns = new DataCloudflareDnsSettingsZoneDefaultsInternalDnsOutputReference(this, "internal_dns");
  public get internalDns() {
    return this._internalDns;
  }

  // multi_provider - computed: true, optional: false, required: false
  public get multiProvider() {
    return this.getBooleanAttribute('multi_provider');
  }

  // nameservers - computed: true, optional: false, required: false
  private _nameservers = new DataCloudflareDnsSettingsZoneDefaultsNameserversOutputReference(this, "nameservers");
  public get nameservers() {
    return this._nameservers;
  }

  // ns_ttl - computed: true, optional: false, required: false
  public get nsTtl() {
    return this.getNumberAttribute('ns_ttl');
  }

  // secondary_overrides - computed: true, optional: false, required: false
  public get secondaryOverrides() {
    return this.getBooleanAttribute('secondary_overrides');
  }

  // soa - computed: true, optional: false, required: false
  private _soa = new DataCloudflareDnsSettingsZoneDefaultsSoaOutputReference(this, "soa");
  public get soa() {
    return this._soa;
  }

  // zone_mode - computed: true, optional: false, required: false
  public get zoneMode() {
    return this.getStringAttribute('zone_mode');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings cloudflare_dns_settings}
*/
export class DataCloudflareDnsSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareDnsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareDnsSettings to import
  * @param importFromId The id of the existing DataCloudflareDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareDnsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings cloudflare_dns_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareDnsSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareDnsSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
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
    this._accountId = config.accountId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // zone_defaults - computed: true, optional: false, required: false
  private _zoneDefaults = new DataCloudflareDnsSettingsZoneDefaultsOutputReference(this, "zone_defaults");
  public get zoneDefaults() {
    return this._zoneDefaults;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
