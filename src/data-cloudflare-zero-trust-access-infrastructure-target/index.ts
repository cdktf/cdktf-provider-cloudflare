/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustAccessInfrastructureTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#account_id DataCloudflareZeroTrustAccessInfrastructureTarget#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#filter DataCloudflareZeroTrustAccessInfrastructureTarget#filter}
  */
  readonly filter?: DataCloudflareZeroTrustAccessInfrastructureTargetFilter;
  /**
  * Target identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#target_id DataCloudflareZeroTrustAccessInfrastructureTarget#target_id}
  */
  readonly targetId?: string;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetFilter {
  /**
  * Date and time at which the target was created after (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#created_after DataCloudflareZeroTrustAccessInfrastructureTarget#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Date and time at which the target was created before (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#created_before DataCloudflareZeroTrustAccessInfrastructureTarget#created_before}
  */
  readonly createdBefore?: string;
  /**
  * The sorting direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#direction DataCloudflareZeroTrustAccessInfrastructureTarget#direction}
  */
  readonly direction?: string;
  /**
  * Hostname of a target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#hostname DataCloudflareZeroTrustAccessInfrastructureTarget#hostname}
  */
  readonly hostname?: string;
  /**
  * Partial match to the hostname of a target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#hostname_contains DataCloudflareZeroTrustAccessInfrastructureTarget#hostname_contains}
  */
  readonly hostnameContains?: string;
  /**
  * Filters for targets whose IP addresses look like the specified string.
  * Supports `*` as a wildcard character
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#ip_like DataCloudflareZeroTrustAccessInfrastructureTarget#ip_like}
  */
  readonly ipLike?: string;
  /**
  * IPv4 address of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#ip_v4 DataCloudflareZeroTrustAccessInfrastructureTarget#ip_v4}
  */
  readonly ipV4?: string;
  /**
  * IPv6 address of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#ip_v6 DataCloudflareZeroTrustAccessInfrastructureTarget#ip_v6}
  */
  readonly ipV6?: string;
  /**
  * Filters for targets that have any of the following IP addresses. Specify
  * `ips` multiple times in query parameter to build list of candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#ips DataCloudflareZeroTrustAccessInfrastructureTarget#ips}
  */
  readonly ips?: string[];
  /**
  * Defines an IPv4 filter range's ending value (inclusive). Requires
  * `ipv4_start` to be specified as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv4_end DataCloudflareZeroTrustAccessInfrastructureTarget#ipv4_end}
  */
  readonly ipv4End?: string;
  /**
  * Defines an IPv4 filter range's starting value (inclusive). Requires
  * `ipv4_end` to be specified as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv4_start DataCloudflareZeroTrustAccessInfrastructureTarget#ipv4_start}
  */
  readonly ipv4Start?: string;
  /**
  * Defines an IPv6 filter range's ending value (inclusive). Requires
  * `ipv6_start` to be specified as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv6_end DataCloudflareZeroTrustAccessInfrastructureTarget#ipv6_end}
  */
  readonly ipv6End?: string;
  /**
  * Defines an IPv6 filter range's starting value (inclusive). Requires
  * `ipv6_end` to be specified as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv6_start DataCloudflareZeroTrustAccessInfrastructureTarget#ipv6_start}
  */
  readonly ipv6Start?: string;
  /**
  * Date and time at which the target was modified after (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#modified_after DataCloudflareZeroTrustAccessInfrastructureTarget#modified_after}
  */
  readonly modifiedAfter?: string;
  /**
  * Date and time at which the target was modified before (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#modified_before DataCloudflareZeroTrustAccessInfrastructureTarget#modified_before}
  */
  readonly modifiedBefore?: string;
  /**
  * The field to sort by.
  * Available values: "hostname", "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#order DataCloudflareZeroTrustAccessInfrastructureTarget#order}
  */
  readonly order?: string;
  /**
  * Filters for targets that have any of the following UUIDs. Specify
  * `target_ids` multiple times in query parameter to build list of
  * candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#target_ids DataCloudflareZeroTrustAccessInfrastructureTarget#target_ids}
  */
  readonly targetIds?: string[];
  /**
  * Private virtual network identifier of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#virtual_network_id DataCloudflareZeroTrustAccessInfrastructureTarget#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}

export function dataCloudflareZeroTrustAccessInfrastructureTargetFilterToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_after: cdktf.stringToTerraform(struct!.createdAfter),
    created_before: cdktf.stringToTerraform(struct!.createdBefore),
    direction: cdktf.stringToTerraform(struct!.direction),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hostname_contains: cdktf.stringToTerraform(struct!.hostnameContains),
    ip_like: cdktf.stringToTerraform(struct!.ipLike),
    ip_v4: cdktf.stringToTerraform(struct!.ipV4),
    ip_v6: cdktf.stringToTerraform(struct!.ipV6),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    ipv4_end: cdktf.stringToTerraform(struct!.ipv4End),
    ipv4_start: cdktf.stringToTerraform(struct!.ipv4Start),
    ipv6_end: cdktf.stringToTerraform(struct!.ipv6End),
    ipv6_start: cdktf.stringToTerraform(struct!.ipv6Start),
    modified_after: cdktf.stringToTerraform(struct!.modifiedAfter),
    modified_before: cdktf.stringToTerraform(struct!.modifiedBefore),
    order: cdktf.stringToTerraform(struct!.order),
    target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetIds),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function dataCloudflareZeroTrustAccessInfrastructureTargetFilterToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_after: {
      value: cdktf.stringToHclTerraform(struct!.createdAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_before: {
      value: cdktf.stringToHclTerraform(struct!.createdBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_contains: {
      value: cdktf.stringToHclTerraform(struct!.hostnameContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_like: {
      value: cdktf.stringToHclTerraform(struct!.ipLike),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_v4: {
      value: cdktf.stringToHclTerraform(struct!.ipV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_v6: {
      value: cdktf.stringToHclTerraform(struct!.ipV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_end: {
      value: cdktf.stringToHclTerraform(struct!.ipv4End),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_start: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_end: {
      value: cdktf.stringToHclTerraform(struct!.ipv6End),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_start: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modified_after: {
      value: cdktf.stringToHclTerraform(struct!.modifiedAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modified_before: {
      value: cdktf.stringToHclTerraform(struct!.modifiedBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAfter = this._createdAfter;
    }
    if (this._createdBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBefore = this._createdBefore;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hostnameContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameContains = this._hostnameContains;
    }
    if (this._ipLike !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipLike = this._ipLike;
    }
    if (this._ipV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipV4 = this._ipV4;
    }
    if (this._ipV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipV6 = this._ipV6;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._ipv4End !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4End = this._ipv4End;
    }
    if (this._ipv4Start !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Start = this._ipv4Start;
    }
    if (this._ipv6End !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6End = this._ipv6End;
    }
    if (this._ipv6Start !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Start = this._ipv6Start;
    }
    if (this._modifiedAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiedAfter = this._modifiedAfter;
    }
    if (this._modifiedBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiedBefore = this._modifiedBefore;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._targetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIds = this._targetIds;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAfter = undefined;
      this._createdBefore = undefined;
      this._direction = undefined;
      this._hostname = undefined;
      this._hostnameContains = undefined;
      this._ipLike = undefined;
      this._ipV4 = undefined;
      this._ipV6 = undefined;
      this._ips = undefined;
      this._ipv4End = undefined;
      this._ipv4Start = undefined;
      this._ipv6End = undefined;
      this._ipv6Start = undefined;
      this._modifiedAfter = undefined;
      this._modifiedBefore = undefined;
      this._order = undefined;
      this._targetIds = undefined;
      this._virtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAfter = value.createdAfter;
      this._createdBefore = value.createdBefore;
      this._direction = value.direction;
      this._hostname = value.hostname;
      this._hostnameContains = value.hostnameContains;
      this._ipLike = value.ipLike;
      this._ipV4 = value.ipV4;
      this._ipV6 = value.ipV6;
      this._ips = value.ips;
      this._ipv4End = value.ipv4End;
      this._ipv4Start = value.ipv4Start;
      this._ipv6End = value.ipv6End;
      this._ipv6Start = value.ipv6Start;
      this._modifiedAfter = value.modifiedAfter;
      this._modifiedBefore = value.modifiedBefore;
      this._order = value.order;
      this._targetIds = value.targetIds;
      this._virtualNetworkId = value.virtualNetworkId;
    }
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
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4 {
}

export function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4 | undefined) {
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
export interface DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6 {
}

export function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6 | undefined) {
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
export interface DataCloudflareZeroTrustAccessInfrastructureTargetIp {
}

export function dataCloudflareZeroTrustAccessInfrastructureTargetIpToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessInfrastructureTargetIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}
*/
export class DataCloudflareZeroTrustAccessInfrastructureTarget extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_infrastructure_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessInfrastructureTarget to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustAccessInfrastructureTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessInfrastructureTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_infrastructure_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustAccessInfrastructureTargetConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessInfrastructureTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_infrastructure_target',
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
    this._filter.internalValue = config.filter;
    this._targetId = config.targetId;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustAccessInfrastructureTargetFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
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
  private _ip = new DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustAccessInfrastructureTargetFilterToTerraform(this._filter.internalValue),
      target_id: cdktf.stringToTerraform(this._targetId),
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
      filter: {
        value: dataCloudflareZeroTrustAccessInfrastructureTargetFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustAccessInfrastructureTargetFilter",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
