/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_dns_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareAccountDnsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_dns_settings#account_id DataCloudflareAccountDnsSettings#account_id}
  */
  readonly accountId: string;
}
export interface DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns {
}

export function dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns | undefined) {
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
export interface DataCloudflareAccountDnsSettingsZoneDefaultsNameservers {
}

export function dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountDnsSettingsZoneDefaultsNameservers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountDnsSettingsZoneDefaultsNameservers | undefined) {
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
export interface DataCloudflareAccountDnsSettingsZoneDefaultsSoa {
}

export function dataCloudflareAccountDnsSettingsZoneDefaultsSoaToTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsSoa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountDnsSettingsZoneDefaultsSoaToHclTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsSoa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountDnsSettingsZoneDefaultsSoa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountDnsSettingsZoneDefaultsSoa | undefined) {
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
export interface DataCloudflareAccountDnsSettingsZoneDefaults {
}

export function dataCloudflareAccountDnsSettingsZoneDefaultsToTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountDnsSettingsZoneDefaultsToHclTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountDnsSettingsZoneDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountDnsSettingsZoneDefaults | undefined) {
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
  private _internalDns = new DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference(this, "internal_dns");
  public get internalDns() {
    return this._internalDns;
  }

  // multi_provider - computed: true, optional: false, required: false
  public get multiProvider() {
    return this.getBooleanAttribute('multi_provider');
  }

  // nameservers - computed: true, optional: false, required: false
  private _nameservers = new DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference(this, "nameservers");
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
  private _soa = new DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference(this, "soa");
  public get soa() {
    return this._soa;
  }

  // zone_mode - computed: true, optional: false, required: false
  public get zoneMode() {
    return this.getStringAttribute('zone_mode');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings}
*/
export class DataCloudflareAccountDnsSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_account_dns_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareAccountDnsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAccountDnsSettings to import
  * @param importFromId The id of the existing DataCloudflareAccountDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_dns_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAccountDnsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_dns_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAccountDnsSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAccountDnsSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_account_dns_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // zone_defaults - computed: true, optional: false, required: false
  private _zoneDefaults = new DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference(this, "zone_defaults");
  public get zoneDefaults() {
    return this._zoneDefaults;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
