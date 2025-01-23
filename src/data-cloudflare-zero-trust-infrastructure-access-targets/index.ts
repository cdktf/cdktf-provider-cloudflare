/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustInfrastructureAccessTargetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#account_id DataCloudflareZeroTrustInfrastructureAccessTargets#account_id}
  */
  readonly accountId: string;
  /**
  * A date and time after a target was created to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#created_after DataCloudflareZeroTrustInfrastructureAccessTargets#created_after}
  */
  readonly createdAfter?: string;
  /**
  * The hostname of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#hostname DataCloudflareZeroTrustInfrastructureAccessTargets#hostname}
  */
  readonly hostname?: string;
  /**
  * Partial match to the hostname of a target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#hostname_contains DataCloudflareZeroTrustInfrastructureAccessTargets#hostname_contains}
  */
  readonly hostnameContains?: string;
  /**
  * The target's IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#ipv4 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv4}
  */
  readonly ipv4?: string;
  /**
  * The target's IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#ipv6 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv6}
  */
  readonly ipv6?: string;
  /**
  * A date and time after a target was modified to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#modified_after DataCloudflareZeroTrustInfrastructureAccessTargets#modified_after}
  */
  readonly modifiedAfter?: string;
  /**
  * The private virtual network identifier for the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#virtual_network_id DataCloudflareZeroTrustInfrastructureAccessTargets#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}
export interface DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4 {
  /**
  * The IP address of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#ip_addr DataCloudflareZeroTrustInfrastructureAccessTargets#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * The private virtual network identifier for the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#virtual_network_id DataCloudflareZeroTrustInfrastructureAccessTargets#virtual_network_id}
  */
  readonly virtualNetworkId: string;
}

export function dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4ToTerraform(struct?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._virtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._virtualNetworkId = value.virtualNetworkId;
    }
  }

  // ip_addr - computed: true, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // virtual_network_id - computed: true, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }
}
export interface DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6 {
  /**
  * The IP address of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#ip_addr DataCloudflareZeroTrustInfrastructureAccessTargets#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * The private virtual network identifier for the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#virtual_network_id DataCloudflareZeroTrustInfrastructureAccessTargets#virtual_network_id}
  */
  readonly virtualNetworkId: string;
}

export function dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6ToTerraform(struct?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._virtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._virtualNetworkId = value.virtualNetworkId;
    }
  }

  // ip_addr - computed: true, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // virtual_network_id - computed: true, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }
}
export interface DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp {
  /**
  * The target's IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#ipv4 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv4}
  */
  readonly ipv4?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4;
  /**
  * The target's IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#ipv6 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv6}
  */
  readonly ipv6?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6;
}

export function dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpToTerraform(struct?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4ToTerraform(struct!.ipv4),
    ipv6: dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6ToTerraform(struct!.ipv6),
  }
}


export function dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpToHclTerraform(struct?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4",
    },
    ipv6: {
      value: dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface DataCloudflareZeroTrustInfrastructureAccessTargetsTargets {
  /**
  * The IPv4/IPv6 address that identifies where to reach a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#ip DataCloudflareZeroTrustInfrastructureAccessTargets#ip}
  */
  readonly ip: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp;
}

export function dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsToTerraform(struct?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpToTerraform(struct!.ip),
  }
}


export function dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsToHclTerraform(struct?: DataCloudflareZeroTrustInfrastructureAccessTargetsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: dataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustInfrastructureAccessTargetsTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustInfrastructureAccessTargetsTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip.internalValue = value.ip;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
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

  // ip - computed: true, optional: false, required: true
  private _ip = new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }
}

export class DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList extends cdktf.ComplexList {
  public internalValue? : DataCloudflareZeroTrustInfrastructureAccessTargetsTargets[] | cdktf.IResolvable

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
  public get(index: number): DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference {
    return new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets cloudflare_zero_trust_infrastructure_access_targets}
*/
export class DataCloudflareZeroTrustInfrastructureAccessTargets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_infrastructure_access_targets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustInfrastructureAccessTargets to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustInfrastructureAccessTargets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustInfrastructureAccessTargets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_infrastructure_access_targets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/zero_trust_infrastructure_access_targets cloudflare_zero_trust_infrastructure_access_targets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustInfrastructureAccessTargetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustInfrastructureAccessTargetsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_infrastructure_access_targets',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.51.0',
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
    this._accountId = config.accountId;
    this._createdAfter = config.createdAfter;
    this._hostname = config.hostname;
    this._hostnameContains = config.hostnameContains;
    this._ipv4 = config.ipv4;
    this._ipv6 = config.ipv6;
    this._modifiedAfter = config.modifiedAfter;
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

  // targets - computed: true, optional: false, required: false
  private _targets = new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
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
      hostname: cdktf.stringToTerraform(this._hostname),
      hostname_contains: cdktf.stringToTerraform(this._hostnameContains),
      ipv4: cdktf.stringToTerraform(this._ipv4),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      modified_after: cdktf.stringToTerraform(this._modifiedAfter),
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
      ipv4: {
        value: cdktf.stringToHclTerraform(this._ipv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified_after: {
        value: cdktf.stringToHclTerraform(this._modifiedAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
