/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDnsLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#account_id ZeroTrustDnsLocation#account_id}
  */
  readonly accountId: string;
  /**
  * True if the location is the default location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#client_default ZeroTrustDnsLocation#client_default}
  */
  readonly clientDefault?: boolean | cdktf.IResolvable;
  /**
  * The identifier of the pair of IPv4 addresses assigned to this location. When creating a location, if this field is absent or set with null, the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is auto-assigned. When updating a location, if the field is absent or set with null, the pre-assigned pair remains unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#dns_destination_ips_id ZeroTrustDnsLocation#dns_destination_ips_id}
  */
  readonly dnsDestinationIpsId?: string;
  /**
  * True if the location needs to resolve EDNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#ecs_support ZeroTrustDnsLocation#ecs_support}
  */
  readonly ecsSupport?: boolean | cdktf.IResolvable;
  /**
  * The destination endpoints configured for this location. When updating a location, if this field is absent or set with null, the endpoints configuration remains unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#endpoints ZeroTrustDnsLocation#endpoints}
  */
  readonly endpoints?: ZeroTrustDnsLocationEndpoints;
  /**
  * The name of the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#name ZeroTrustDnsLocation#name}
  */
  readonly name: string;
  /**
  * A list of network ranges that requests from this location would originate from. A non-empty list is only effective if the ipv4 endpoint is enabled for this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}
  */
  readonly networks?: ZeroTrustDnsLocationNetworks[] | cdktf.IResolvable;
}
export interface ZeroTrustDnsLocationEndpointsDohNetworks {
  /**
  * The IP address or IP CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}
  */
  readonly network: string;
}

export function zeroTrustDnsLocationEndpointsDohNetworksToTerraform(struct?: ZeroTrustDnsLocationEndpointsDohNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function zeroTrustDnsLocationEndpointsDohNetworksToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsDohNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDnsLocationEndpointsDohNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustDnsLocationEndpointsDohNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDnsLocationEndpointsDohNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class ZeroTrustDnsLocationEndpointsDohNetworksList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDnsLocationEndpointsDohNetworks[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustDnsLocationEndpointsDohNetworksOutputReference {
    return new ZeroTrustDnsLocationEndpointsDohNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustDnsLocationEndpointsDoh {
  /**
  * True if the endpoint is enabled for this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A list of allowed source IP network ranges for this endpoint. When empty, all source IPs are allowed. A non-empty list is only effective if the endpoint is enabled for this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}
  */
  readonly networks?: ZeroTrustDnsLocationEndpointsDohNetworks[] | cdktf.IResolvable;
  /**
  * True if the endpoint requires [user identity](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/agentless/dns/dns-over-https/#filter-doh-requests-by-user) authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#require_token ZeroTrustDnsLocation#require_token}
  */
  readonly requireToken?: boolean | cdktf.IResolvable;
}

export function zeroTrustDnsLocationEndpointsDohToTerraform(struct?: ZeroTrustDnsLocationEndpointsDoh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    networks: cdktf.listMapper(zeroTrustDnsLocationEndpointsDohNetworksToTerraform, false)(struct!.networks),
    require_token: cdktf.booleanToTerraform(struct!.requireToken),
  }
}


export function zeroTrustDnsLocationEndpointsDohToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsDoh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    networks: {
      value: cdktf.listMapperHcl(zeroTrustDnsLocationEndpointsDohNetworksToHclTerraform, false)(struct!.networks),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustDnsLocationEndpointsDohNetworksList",
    },
    require_token: {
      value: cdktf.booleanToHclTerraform(struct!.requireToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDnsLocationEndpointsDohOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDnsLocationEndpointsDoh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks?.internalValue;
    }
    if (this._requireToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireToken = this._requireToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDnsLocationEndpointsDoh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._networks.internalValue = undefined;
      this._requireToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._networks.internalValue = value.networks;
      this._requireToken = value.requireToken;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new ZeroTrustDnsLocationEndpointsDohNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: ZeroTrustDnsLocationEndpointsDohNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // require_token - computed: false, optional: true, required: false
  private _requireToken?: boolean | cdktf.IResolvable; 
  public get requireToken() {
    return this.getBooleanAttribute('require_token');
  }
  public set requireToken(value: boolean | cdktf.IResolvable) {
    this._requireToken = value;
  }
  public resetRequireToken() {
    this._requireToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTokenInput() {
    return this._requireToken;
  }
}
export interface ZeroTrustDnsLocationEndpointsDotNetworks {
  /**
  * The IP address or IP CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}
  */
  readonly network: string;
}

export function zeroTrustDnsLocationEndpointsDotNetworksToTerraform(struct?: ZeroTrustDnsLocationEndpointsDotNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function zeroTrustDnsLocationEndpointsDotNetworksToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsDotNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDnsLocationEndpointsDotNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustDnsLocationEndpointsDotNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDnsLocationEndpointsDotNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class ZeroTrustDnsLocationEndpointsDotNetworksList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDnsLocationEndpointsDotNetworks[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustDnsLocationEndpointsDotNetworksOutputReference {
    return new ZeroTrustDnsLocationEndpointsDotNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustDnsLocationEndpointsDot {
  /**
  * True if the endpoint is enabled for this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A list of allowed source IP network ranges for this endpoint. When empty, all source IPs are allowed. A non-empty list is only effective if the endpoint is enabled for this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}
  */
  readonly networks?: ZeroTrustDnsLocationEndpointsDotNetworks[] | cdktf.IResolvable;
}

export function zeroTrustDnsLocationEndpointsDotToTerraform(struct?: ZeroTrustDnsLocationEndpointsDot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    networks: cdktf.listMapper(zeroTrustDnsLocationEndpointsDotNetworksToTerraform, false)(struct!.networks),
  }
}


export function zeroTrustDnsLocationEndpointsDotToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsDot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    networks: {
      value: cdktf.listMapperHcl(zeroTrustDnsLocationEndpointsDotNetworksToHclTerraform, false)(struct!.networks),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustDnsLocationEndpointsDotNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDnsLocationEndpointsDotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDnsLocationEndpointsDot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDnsLocationEndpointsDot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._networks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._networks.internalValue = value.networks;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new ZeroTrustDnsLocationEndpointsDotNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: ZeroTrustDnsLocationEndpointsDotNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }
}
export interface ZeroTrustDnsLocationEndpointsIpv4 {
  /**
  * True if the endpoint is enabled for this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function zeroTrustDnsLocationEndpointsIpv4ToTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function zeroTrustDnsLocationEndpointsIpv4ToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDnsLocationEndpointsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDnsLocationEndpointsIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDnsLocationEndpointsIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ZeroTrustDnsLocationEndpointsIpv6Networks {
  /**
  * The IPv6 address or IPv6 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}
  */
  readonly network: string;
}

export function zeroTrustDnsLocationEndpointsIpv6NetworksToTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv6Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function zeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv6Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustDnsLocationEndpointsIpv6Networks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDnsLocationEndpointsIpv6Networks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class ZeroTrustDnsLocationEndpointsIpv6NetworksList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDnsLocationEndpointsIpv6Networks[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference {
    return new ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustDnsLocationEndpointsIpv6 {
  /**
  * True if the endpoint is enabled for this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A list of allowed source IPv6 network ranges for this endpoint. When empty, all source IPs are allowed. A non-empty list is only effective if the endpoint is enabled for this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}
  */
  readonly networks?: ZeroTrustDnsLocationEndpointsIpv6Networks[] | cdktf.IResolvable;
}

export function zeroTrustDnsLocationEndpointsIpv6ToTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    networks: cdktf.listMapper(zeroTrustDnsLocationEndpointsIpv6NetworksToTerraform, false)(struct!.networks),
  }
}


export function zeroTrustDnsLocationEndpointsIpv6ToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    networks: {
      value: cdktf.listMapperHcl(zeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform, false)(struct!.networks),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustDnsLocationEndpointsIpv6NetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDnsLocationEndpointsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDnsLocationEndpointsIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDnsLocationEndpointsIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._networks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._networks.internalValue = value.networks;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new ZeroTrustDnsLocationEndpointsIpv6NetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: ZeroTrustDnsLocationEndpointsIpv6Networks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }
}
export interface ZeroTrustDnsLocationEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#doh ZeroTrustDnsLocation#doh}
  */
  readonly doh?: ZeroTrustDnsLocationEndpointsDoh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#dot ZeroTrustDnsLocation#dot}
  */
  readonly dot?: ZeroTrustDnsLocationEndpointsDot;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#ipv4 ZeroTrustDnsLocation#ipv4}
  */
  readonly ipv4?: ZeroTrustDnsLocationEndpointsIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#ipv6 ZeroTrustDnsLocation#ipv6}
  */
  readonly ipv6?: ZeroTrustDnsLocationEndpointsIpv6;
}

export function zeroTrustDnsLocationEndpointsToTerraform(struct?: ZeroTrustDnsLocationEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    doh: zeroTrustDnsLocationEndpointsDohToTerraform(struct!.doh),
    dot: zeroTrustDnsLocationEndpointsDotToTerraform(struct!.dot),
    ipv4: zeroTrustDnsLocationEndpointsIpv4ToTerraform(struct!.ipv4),
    ipv6: zeroTrustDnsLocationEndpointsIpv6ToTerraform(struct!.ipv6),
  }
}


export function zeroTrustDnsLocationEndpointsToHclTerraform(struct?: ZeroTrustDnsLocationEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    doh: {
      value: zeroTrustDnsLocationEndpointsDohToHclTerraform(struct!.doh),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustDnsLocationEndpointsDoh",
    },
    dot: {
      value: zeroTrustDnsLocationEndpointsDotToHclTerraform(struct!.dot),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustDnsLocationEndpointsDot",
    },
    ipv4: {
      value: zeroTrustDnsLocationEndpointsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustDnsLocationEndpointsIpv4",
    },
    ipv6: {
      value: zeroTrustDnsLocationEndpointsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustDnsLocationEndpointsIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDnsLocationEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDnsLocationEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doh = this._doh?.internalValue;
    }
    if (this._dot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot = this._dot?.internalValue;
    }
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

  public set internalValue(value: ZeroTrustDnsLocationEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doh.internalValue = undefined;
      this._dot.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doh.internalValue = value.doh;
      this._dot.internalValue = value.dot;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // doh - computed: false, optional: true, required: false
  private _doh = new ZeroTrustDnsLocationEndpointsDohOutputReference(this, "doh");
  public get doh() {
    return this._doh;
  }
  public putDoh(value: ZeroTrustDnsLocationEndpointsDoh) {
    this._doh.internalValue = value;
  }
  public resetDoh() {
    this._doh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohInput() {
    return this._doh.internalValue;
  }

  // dot - computed: false, optional: true, required: false
  private _dot = new ZeroTrustDnsLocationEndpointsDotOutputReference(this, "dot");
  public get dot() {
    return this._dot;
  }
  public putDot(value: ZeroTrustDnsLocationEndpointsDot) {
    this._dot.internalValue = value;
  }
  public resetDot() {
    this._dot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotInput() {
    return this._dot.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ZeroTrustDnsLocationEndpointsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ZeroTrustDnsLocationEndpointsIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ZeroTrustDnsLocationEndpointsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ZeroTrustDnsLocationEndpointsIpv6) {
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
export interface ZeroTrustDnsLocationNetworks {
  /**
  * The IPv4 address or IPv4 CIDR. IPv4 CIDRs are limited to a maximum of /24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}
  */
  readonly network: string;
}

export function zeroTrustDnsLocationNetworksToTerraform(struct?: ZeroTrustDnsLocationNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function zeroTrustDnsLocationNetworksToHclTerraform(struct?: ZeroTrustDnsLocationNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDnsLocationNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustDnsLocationNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDnsLocationNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class ZeroTrustDnsLocationNetworksList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDnsLocationNetworks[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustDnsLocationNetworksOutputReference {
    return new ZeroTrustDnsLocationNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location}
*/
export class ZeroTrustDnsLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_dns_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDnsLocation to import
  * @param importFromId The id of the existing ZeroTrustDnsLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDnsLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dns_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDnsLocationConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDnsLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_dns_location',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
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
    this._clientDefault = config.clientDefault;
    this._dnsDestinationIpsId = config.dnsDestinationIpsId;
    this._ecsSupport = config.ecsSupport;
    this._endpoints.internalValue = config.endpoints;
    this._name = config.name;
    this._networks.internalValue = config.networks;
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

  // client_default - computed: true, optional: true, required: false
  private _clientDefault?: boolean | cdktf.IResolvable; 
  public get clientDefault() {
    return this.getBooleanAttribute('client_default');
  }
  public set clientDefault(value: boolean | cdktf.IResolvable) {
    this._clientDefault = value;
  }
  public resetClientDefault() {
    this._clientDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDefaultInput() {
    return this._clientDefault;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_destination_ips_id - computed: false, optional: true, required: false
  private _dnsDestinationIpsId?: string; 
  public get dnsDestinationIpsId() {
    return this.getStringAttribute('dns_destination_ips_id');
  }
  public set dnsDestinationIpsId(value: string) {
    this._dnsDestinationIpsId = value;
  }
  public resetDnsDestinationIpsId() {
    this._dnsDestinationIpsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDestinationIpsIdInput() {
    return this._dnsDestinationIpsId;
  }

  // dns_destination_ipv6_block_id - computed: true, optional: false, required: false
  public get dnsDestinationIpv6BlockId() {
    return this.getStringAttribute('dns_destination_ipv6_block_id');
  }

  // doh_subdomain - computed: true, optional: false, required: false
  public get dohSubdomain() {
    return this.getStringAttribute('doh_subdomain');
  }

  // ecs_support - computed: true, optional: true, required: false
  private _ecsSupport?: boolean | cdktf.IResolvable; 
  public get ecsSupport() {
    return this.getBooleanAttribute('ecs_support');
  }
  public set ecsSupport(value: boolean | cdktf.IResolvable) {
    this._ecsSupport = value;
  }
  public resetEcsSupport() {
    this._ecsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsSupportInput() {
    return this._ecsSupport;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new ZeroTrustDnsLocationEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: ZeroTrustDnsLocationEndpoints) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ipv4_destination - computed: true, optional: false, required: false
  public get ipv4Destination() {
    return this.getStringAttribute('ipv4_destination');
  }

  // ipv4_destination_backup - computed: true, optional: false, required: false
  public get ipv4DestinationBackup() {
    return this.getStringAttribute('ipv4_destination_backup');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new ZeroTrustDnsLocationNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: ZeroTrustDnsLocationNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      client_default: cdktf.booleanToTerraform(this._clientDefault),
      dns_destination_ips_id: cdktf.stringToTerraform(this._dnsDestinationIpsId),
      ecs_support: cdktf.booleanToTerraform(this._ecsSupport),
      endpoints: zeroTrustDnsLocationEndpointsToTerraform(this._endpoints.internalValue),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(zeroTrustDnsLocationNetworksToTerraform, false)(this._networks.internalValue),
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
      client_default: {
        value: cdktf.booleanToHclTerraform(this._clientDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_destination_ips_id: {
        value: cdktf.stringToHclTerraform(this._dnsDestinationIpsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_support: {
        value: cdktf.booleanToHclTerraform(this._ecsSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoints: {
        value: zeroTrustDnsLocationEndpointsToHclTerraform(this._endpoints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustDnsLocationEndpoints",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(zeroTrustDnsLocationNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustDnsLocationNetworksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
