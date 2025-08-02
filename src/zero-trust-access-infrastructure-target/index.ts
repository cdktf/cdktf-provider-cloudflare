/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessInfrastructureTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#account_id ZeroTrustAccessInfrastructureTarget#account_id}
  */
  readonly accountId: string;
  /**
  * A non-unique field that refers to a target. Case insensitive, maximum
  * length of 255 characters, supports the use of special characters dash
  * and period, does not support spaces, and must start and end with an
  * alphanumeric character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#hostname ZeroTrustAccessInfrastructureTarget#hostname}
  */
  readonly hostname: string;
  /**
  * The IPv4/IPv6 address that identifies where to reach a target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#ip ZeroTrustAccessInfrastructureTarget#ip}
  */
  readonly ip: ZeroTrustAccessInfrastructureTargetIp;
}
export interface ZeroTrustAccessInfrastructureTargetIpIpv4 {
  /**
  * IP address of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}

export function zeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct?: ZeroTrustAccessInfrastructureTargetIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function zeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct?: ZeroTrustAccessInfrastructureTargetIpIpv4 | cdktf.IResolvable): any {
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

export class ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessInfrastructureTargetIpIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessInfrastructureTargetIpIpv4 | cdktf.IResolvable | undefined) {
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

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
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
export interface ZeroTrustAccessInfrastructureTargetIpIpv6 {
  /**
  * IP address of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}

export function zeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct?: ZeroTrustAccessInfrastructureTargetIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function zeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct?: ZeroTrustAccessInfrastructureTargetIpIpv6 | cdktf.IResolvable): any {
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

export class ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessInfrastructureTargetIpIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessInfrastructureTargetIpIpv6 | cdktf.IResolvable | undefined) {
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

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
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
export interface ZeroTrustAccessInfrastructureTargetIp {
  /**
  * The target's IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#ipv4 ZeroTrustAccessInfrastructureTarget#ipv4}
  */
  readonly ipv4?: ZeroTrustAccessInfrastructureTargetIpIpv4;
  /**
  * The target's IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#ipv6 ZeroTrustAccessInfrastructureTarget#ipv6}
  */
  readonly ipv6?: ZeroTrustAccessInfrastructureTargetIpIpv6;
}

export function zeroTrustAccessInfrastructureTargetIpToTerraform(struct?: ZeroTrustAccessInfrastructureTargetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: zeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct!.ipv4),
    ipv6: zeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct!.ipv6),
  }
}


export function zeroTrustAccessInfrastructureTargetIpToHclTerraform(struct?: ZeroTrustAccessInfrastructureTargetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: zeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessInfrastructureTargetIpIpv4",
    },
    ipv6: {
      value: zeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessInfrastructureTargetIpIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessInfrastructureTargetIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessInfrastructureTargetIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ZeroTrustAccessInfrastructureTargetIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ZeroTrustAccessInfrastructureTargetIpIpv4) {
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
  private _ipv6 = new ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ZeroTrustAccessInfrastructureTargetIpIpv6) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}
*/
export class ZeroTrustAccessInfrastructureTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_infrastructure_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessInfrastructureTarget to import
  * @param importFromId The id of the existing ZeroTrustAccessInfrastructureTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessInfrastructureTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_infrastructure_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessInfrastructureTargetConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessInfrastructureTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_infrastructure_target',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._hostname = config.hostname;
    this._ip.internalValue = config.ip;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new ZeroTrustAccessInfrastructureTargetIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: ZeroTrustAccessInfrastructureTargetIp) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      hostname: cdktf.stringToTerraform(this._hostname),
      ip: zeroTrustAccessInfrastructureTargetIpToTerraform(this._ip.internalValue),
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: zeroTrustAccessInfrastructureTargetIpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustAccessInfrastructureTargetIp",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
