/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustAccessInfrastructureTargetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#account_id DataCloudflareZeroTrustAccessInfrastructureTargets#account_id}
  */
  readonly accountId: string;
  /**
  * Date and time at which the target was created after (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#created_after DataCloudflareZeroTrustAccessInfrastructureTargets#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Date and time at which the target was created before (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#created_before DataCloudflareZeroTrustAccessInfrastructureTargets#created_before}
  */
  readonly createdBefore?: string;
  /**
  * The sorting direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#direction DataCloudflareZeroTrustAccessInfrastructureTargets#direction}
  */
  readonly direction?: string;
  /**
  * Hostname of a target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#hostname DataCloudflareZeroTrustAccessInfrastructureTargets#hostname}
  */
  readonly hostname?: string;
  /**
  * Partial match to the hostname of a target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#hostname_contains DataCloudflareZeroTrustAccessInfrastructureTargets#hostname_contains}
  */
  readonly hostnameContains?: string;
  /**
  * Filters for targets whose IP addresses look like the specified string.
  * Supports `*` as a wildcard character
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#ip_like DataCloudflareZeroTrustAccessInfrastructureTargets#ip_like}
  */
  readonly ipLike?: string;
  /**
  * IPv4 address of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#ip_v4 DataCloudflareZeroTrustAccessInfrastructureTargets#ip_v4}
  */
  readonly ipV4?: string;
  /**
  * IPv6 address of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#ip_v6 DataCloudflareZeroTrustAccessInfrastructureTargets#ip_v6}
  */
  readonly ipV6?: string;
  /**
  * Filters for targets that have any of the following IP addresses. Specify
  * `ips` multiple times in query parameter to build list of candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#ips DataCloudflareZeroTrustAccessInfrastructureTargets#ips}
  */
  readonly ips?: string[];
  /**
  * Defines an IPv4 filter range's ending value (inclusive). Requires
  * `ipv4_start` to be specified as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv4_end DataCloudflareZeroTrustAccessInfrastructureTargets#ipv4_end}
  */
  readonly ipv4End?: string;
  /**
  * Defines an IPv4 filter range's starting value (inclusive). Requires
  * `ipv4_end` to be specified as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv4_start DataCloudflareZeroTrustAccessInfrastructureTargets#ipv4_start}
  */
  readonly ipv4Start?: string;
  /**
  * Defines an IPv6 filter range's ending value (inclusive). Requires
  * `ipv6_start` to be specified as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv6_end DataCloudflareZeroTrustAccessInfrastructureTargets#ipv6_end}
  */
  readonly ipv6End?: string;
  /**
  * Defines an IPv6 filter range's starting value (inclusive). Requires
  * `ipv6_end` to be specified as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv6_start DataCloudflareZeroTrustAccessInfrastructureTargets#ipv6_start}
  */
  readonly ipv6Start?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#max_items DataCloudflareZeroTrustAccessInfrastructureTargets#max_items}
  */
  readonly maxItems?: number;
  /**
  * Date and time at which the target was modified after (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#modified_after DataCloudflareZeroTrustAccessInfrastructureTargets#modified_after}
  */
  readonly modifiedAfter?: string;
  /**
  * Date and time at which the target was modified before (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#modified_before DataCloudflareZeroTrustAccessInfrastructureTargets#modified_before}
  */
  readonly modifiedBefore?: string;
  /**
  * The field to sort by.
  * Available values: "hostname", "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#order DataCloudflareZeroTrustAccessInfrastructureTargets#order}
  */
  readonly order?: string;
  /**
  * Filters for targets that have any of the following UUIDs. Specify
  * `target_ids` multiple times in query parameter to build list of
  * candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#target_ids DataCloudflareZeroTrustAccessInfrastructureTargets#target_ids}
  */
  readonly targetIds?: string[];
  /**
  * Private virtual network identifier of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#virtual_network_id DataCloudflareZeroTrustAccessInfrastructureTargets#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4 {
}

export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6 {
}

export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp {
}

export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetsResult {
}

export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }
}

export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference {
    return new DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets cloudflare_zero_trust_access_infrastructure_targets}
*/
export class DataCloudflareZeroTrustAccessInfrastructureTargets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_infrastructure_targets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessInfrastructureTargets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessInfrastructureTargets to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustAccessInfrastructureTargets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessInfrastructureTargets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_infrastructure_targets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_targets cloudflare_zero_trust_access_infrastructure_targets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustAccessInfrastructureTargetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessInfrastructureTargetsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_infrastructure_targets',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.13.0',
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
    this._createdAfter = config.createdAfter;
    this._createdBefore = config.createdBefore;
    this._direction = config.direction;
    this._hostname = config.hostname;
    this._hostnameContains = config.hostnameContains;
    this._ipLike = config.ipLike;
    this._ipV4 = config.ipV4;
    this._ipV6 = config.ipV6;
    this._ips = config.ips;
    this._ipv4End = config.ipv4End;
    this._ipv4Start = config.ipv4Start;
    this._ipv6End = config.ipv6End;
    this._ipv6Start = config.ipv6Start;
    this._maxItems = config.maxItems;
    this._modifiedAfter = config.modifiedAfter;
    this._modifiedBefore = config.modifiedBefore;
    this._order = config.order;
    this._targetIds = config.targetIds;
    this._virtualNetworkId = config.virtualNetworkId;
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

  // created_after - computed: false, optional: true, required: false
  private _createdAfter?: string; 
  public get createdAfter() {
    return this.getStringAttribute('created_after');
  }
  public set createdAfter(value: string) {
    this._createdAfter = value;
  }
  public resetCreatedAfter() {
    this._createdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAfterInput() {
    return this._createdAfter;
  }

  // created_before - computed: false, optional: true, required: false
  private _createdBefore?: string; 
  public get createdBefore() {
    return this.getStringAttribute('created_before');
  }
  public set createdBefore(value: string) {
    this._createdBefore = value;
  }
  public resetCreatedBefore() {
    this._createdBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeInput() {
    return this._createdBefore;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hostname_contains - computed: false, optional: true, required: false
  private _hostnameContains?: string; 
  public get hostnameContains() {
    return this.getStringAttribute('hostname_contains');
  }
  public set hostnameContains(value: string) {
    this._hostnameContains = value;
  }
  public resetHostnameContains() {
    this._hostnameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameContainsInput() {
    return this._hostnameContains;
  }

  // ip_like - computed: false, optional: true, required: false
  private _ipLike?: string; 
  public get ipLike() {
    return this.getStringAttribute('ip_like');
  }
  public set ipLike(value: string) {
    this._ipLike = value;
  }
  public resetIpLike() {
    this._ipLike = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipLikeInput() {
    return this._ipLike;
  }

  // ip_v4 - computed: false, optional: true, required: false
  private _ipV4?: string; 
  public get ipV4() {
    return this.getStringAttribute('ip_v4');
  }
  public set ipV4(value: string) {
    this._ipV4 = value;
  }
  public resetIpV4() {
    this._ipV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipV4Input() {
    return this._ipV4;
  }

  // ip_v6 - computed: false, optional: true, required: false
  private _ipV6?: string; 
  public get ipV6() {
    return this.getStringAttribute('ip_v6');
  }
  public set ipV6(value: string) {
    this._ipV6 = value;
  }
  public resetIpV6() {
    this._ipV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipV6Input() {
    return this._ipV6;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // ipv4_end - computed: false, optional: true, required: false
  private _ipv4End?: string; 
  public get ipv4End() {
    return this.getStringAttribute('ipv4_end');
  }
  public set ipv4End(value: string) {
    this._ipv4End = value;
  }
  public resetIpv4End() {
    this._ipv4End = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EndInput() {
    return this._ipv4End;
  }

  // ipv4_start - computed: false, optional: true, required: false
  private _ipv4Start?: string; 
  public get ipv4Start() {
    return this.getStringAttribute('ipv4_start');
  }
  public set ipv4Start(value: string) {
    this._ipv4Start = value;
  }
  public resetIpv4Start() {
    this._ipv4Start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StartInput() {
    return this._ipv4Start;
  }

  // ipv6_end - computed: false, optional: true, required: false
  private _ipv6End?: string; 
  public get ipv6End() {
    return this.getStringAttribute('ipv6_end');
  }
  public set ipv6End(value: string) {
    this._ipv6End = value;
  }
  public resetIpv6End() {
    this._ipv6End = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EndInput() {
    return this._ipv6End;
  }

  // ipv6_start - computed: false, optional: true, required: false
  private _ipv6Start?: string; 
  public get ipv6Start() {
    return this.getStringAttribute('ipv6_start');
  }
  public set ipv6Start(value: string) {
    this._ipv6Start = value;
  }
  public resetIpv6Start() {
    this._ipv6Start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6StartInput() {
    return this._ipv6Start;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // modified_after - computed: false, optional: true, required: false
  private _modifiedAfter?: string; 
  public get modifiedAfter() {
    return this.getStringAttribute('modified_after');
  }
  public set modifiedAfter(value: string) {
    this._modifiedAfter = value;
  }
  public resetModifiedAfter() {
    this._modifiedAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedAfterInput() {
    return this._modifiedAfter;
  }

  // modified_before - computed: false, optional: true, required: false
  private _modifiedBefore?: string; 
  public get modifiedBefore() {
    return this.getStringAttribute('modified_before');
  }
  public set modifiedBefore(value: string) {
    this._modifiedBefore = value;
  }
  public resetModifiedBefore() {
    this._modifiedBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedBeforeInput() {
    return this._modifiedBefore;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // target_ids - computed: false, optional: true, required: false
  private _targetIds?: string[]; 
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }
  public set targetIds(value: string[]) {
    this._targetIds = value;
  }
  public resetTargetIds() {
    this._targetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdsInput() {
    return this._targetIds;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      created_after: cdktf.stringToTerraform(this._createdAfter),
      created_before: cdktf.stringToTerraform(this._createdBefore),
      direction: cdktf.stringToTerraform(this._direction),
      hostname: cdktf.stringToTerraform(this._hostname),
      hostname_contains: cdktf.stringToTerraform(this._hostnameContains),
      ip_like: cdktf.stringToTerraform(this._ipLike),
      ip_v4: cdktf.stringToTerraform(this._ipV4),
      ip_v6: cdktf.stringToTerraform(this._ipV6),
      ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
      ipv4_end: cdktf.stringToTerraform(this._ipv4End),
      ipv4_start: cdktf.stringToTerraform(this._ipv4Start),
      ipv6_end: cdktf.stringToTerraform(this._ipv6End),
      ipv6_start: cdktf.stringToTerraform(this._ipv6Start),
      max_items: cdktf.numberToTerraform(this._maxItems),
      modified_after: cdktf.stringToTerraform(this._modifiedAfter),
      modified_before: cdktf.stringToTerraform(this._modifiedBefore),
      order: cdktf.stringToTerraform(this._order),
      target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetIds),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
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
      created_after: {
        value: cdktf.stringToHclTerraform(this._createdAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_before: {
        value: cdktf.stringToHclTerraform(this._createdBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_contains: {
        value: cdktf.stringToHclTerraform(this._hostnameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_like: {
        value: cdktf.stringToHclTerraform(this._ipLike),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_v4: {
        value: cdktf.stringToHclTerraform(this._ipV4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_v6: {
        value: cdktf.stringToHclTerraform(this._ipV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv4_end: {
        value: cdktf.stringToHclTerraform(this._ipv4End),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_start: {
        value: cdktf.stringToHclTerraform(this._ipv4Start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_end: {
        value: cdktf.stringToHclTerraform(this._ipv6End),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_start: {
        value: cdktf.stringToHclTerraform(this._ipv6Start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      modified_after: {
        value: cdktf.stringToHclTerraform(this._modifiedAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified_before: {
        value: cdktf.stringToHclTerraform(this._modifiedBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virtual_network_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
