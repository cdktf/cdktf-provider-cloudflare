/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicWanIpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}
  */
  readonly accountId: string;
  /**
  * The IP address assigned to the Cloudflare side of the IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}
  */
  readonly cloudflareEndpoint: string;
  /**
  * The IP address assigned to the customer side of the IPsec tunnel. Not required, but must be set for proactive traceroutes to work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}
  */
  readonly customerEndpoint?: string;
  /**
  * An optional description forthe IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}
  */
  readonly healthCheck?: MagicWanIpsecTunnelHealthCheck;
  /**
  * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}
  */
  readonly interfaceAddress: string;
  /**
  * The name of the IPsec tunnel. The name cannot share a name with other tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}
  */
  readonly name: string;
  /**
  * A randomly generated or provided string for use in the IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}
  */
  readonly psk?: string;
  /**
  * If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}
  */
  readonly replayProtection?: boolean | cdktf.IResolvable;
}
export interface MagicWanIpsecTunnelHealthCheckTarget {
  /**
  * The saved health check target. Setting the value to the empty string indicates that the calculated default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}
  */
  readonly saved?: string;
}

export function magicWanIpsecTunnelHealthCheckTargetToTerraform(struct?: MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saved: cdktf.stringToTerraform(struct!.saved),
  }
}


export function magicWanIpsecTunnelHealthCheckTargetToHclTerraform(struct?: MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saved: {
      value: cdktf.stringToHclTerraform(struct!.saved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicWanIpsecTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saved !== undefined) {
      hasAnyValues = true;
      internalValueResult.saved = this._saved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._saved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._saved = value.saved;
    }
  }

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getStringAttribute('effective');
  }

  // saved - computed: true, optional: true, required: false
  private _saved?: string; 
  public get saved() {
    return this.getStringAttribute('saved');
  }
  public set saved(value: string) {
    this._saved = value;
  }
  public resetSaved() {
    this._saved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedInput() {
    return this._saved;
  }
}
export interface MagicWanIpsecTunnelHealthCheck {
  /**
  * The direction of the flow of the healthcheck. Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
  * Available values: "unidirectional", "bidirectional".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}
  */
  readonly direction?: string;
  /**
  * Determines whether to run healthchecks for a tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How frequent the health check is run. The default value is `mid`.
  * Available values: "low", "mid", "high".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}
  */
  readonly rate?: string;
  /**
  * The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}
  */
  readonly target?: MagicWanIpsecTunnelHealthCheckTarget;
  /**
  * The type of healthcheck to run, reply or request. The default value is `reply`.
  * Available values: "reply", "request".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}
  */
  readonly type?: string;
}

export function magicWanIpsecTunnelHealthCheckToTerraform(struct?: MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rate: cdktf.stringToTerraform(struct!.rate),
    target: magicWanIpsecTunnelHealthCheckTargetToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function magicWanIpsecTunnelHealthCheckToHclTerraform(struct?: MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: magicWanIpsecTunnelHealthCheckTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "MagicWanIpsecTunnelHealthCheckTarget",
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

export class MagicWanIpsecTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._enabled = undefined;
      this._rate = undefined;
      this._target.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._enabled = value.enabled;
      this._rate = value.rate;
      this._target.internalValue = value.target;
      this._type = value.type;
    }
  }

  // direction - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // rate - computed: true, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // target - computed: true, optional: true, required: false
  private _target = new MagicWanIpsecTunnelHealthCheckTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: MagicWanIpsecTunnelHealthCheckTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
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
}
export interface MagicWanIpsecTunnelPskMetadata {
}

export function magicWanIpsecTunnelPskMetadataToTerraform(struct?: MagicWanIpsecTunnelPskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanIpsecTunnelPskMetadataToHclTerraform(struct?: MagicWanIpsecTunnelPskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanIpsecTunnelPskMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanIpsecTunnelPskMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanIpsecTunnelPskMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_generated_on - computed: true, optional: false, required: false
  public get lastGeneratedOn() {
    return this.getStringAttribute('last_generated_on');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}
*/
export class MagicWanIpsecTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_wan_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicWanIpsecTunnel to import
  * @param importFromId The id of the existing MagicWanIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicWanIpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicWanIpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: MagicWanIpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_wan_ipsec_tunnel',
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
    this._cloudflareEndpoint = config.cloudflareEndpoint;
    this._customerEndpoint = config.customerEndpoint;
    this._description = config.description;
    this._healthCheck.internalValue = config.healthCheck;
    this._interfaceAddress = config.interfaceAddress;
    this._name = config.name;
    this._psk = config.psk;
    this._replayProtection = config.replayProtection;
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

  // allow_null_cipher - computed: true, optional: false, required: false
  public get allowNullCipher() {
    return this.getBooleanAttribute('allow_null_cipher');
  }

  // cloudflare_endpoint - computed: false, optional: false, required: true
  private _cloudflareEndpoint?: string; 
  public get cloudflareEndpoint() {
    return this.getStringAttribute('cloudflare_endpoint');
  }
  public set cloudflareEndpoint(value: string) {
    this._cloudflareEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareEndpointInput() {
    return this._cloudflareEndpoint;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // customer_endpoint - computed: false, optional: true, required: false
  private _customerEndpoint?: string; 
  public get customerEndpoint() {
    return this.getStringAttribute('customer_endpoint');
  }
  public set customerEndpoint(value: string) {
    this._customerEndpoint = value;
  }
  public resetCustomerEndpoint() {
    this._customerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEndpointInput() {
    return this._customerEndpoint;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck = new MagicWanIpsecTunnelHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: MagicWanIpsecTunnelHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_address - computed: false, optional: false, required: true
  private _interfaceAddress?: string; 
  public get interfaceAddress() {
    return this.getStringAttribute('interface_address');
  }
  public set interfaceAddress(value: string) {
    this._interfaceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAddressInput() {
    return this._interfaceAddress;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // psk - computed: false, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // psk_metadata - computed: true, optional: false, required: false
  private _pskMetadata = new MagicWanIpsecTunnelPskMetadataOutputReference(this, "psk_metadata");
  public get pskMetadata() {
    return this._pskMetadata;
  }

  // replay_protection - computed: true, optional: true, required: false
  private _replayProtection?: boolean | cdktf.IResolvable; 
  public get replayProtection() {
    return this.getBooleanAttribute('replay_protection');
  }
  public set replayProtection(value: boolean | cdktf.IResolvable) {
    this._replayProtection = value;
  }
  public resetReplayProtection() {
    this._replayProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayProtectionInput() {
    return this._replayProtection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      cloudflare_endpoint: cdktf.stringToTerraform(this._cloudflareEndpoint),
      customer_endpoint: cdktf.stringToTerraform(this._customerEndpoint),
      description: cdktf.stringToTerraform(this._description),
      health_check: magicWanIpsecTunnelHealthCheckToTerraform(this._healthCheck.internalValue),
      interface_address: cdktf.stringToTerraform(this._interfaceAddress),
      name: cdktf.stringToTerraform(this._name),
      psk: cdktf.stringToTerraform(this._psk),
      replay_protection: cdktf.booleanToTerraform(this._replayProtection),
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
      cloudflare_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudflareEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_endpoint: {
        value: cdktf.stringToHclTerraform(this._customerEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: magicWanIpsecTunnelHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicWanIpsecTunnelHealthCheck",
      },
      interface_address: {
        value: cdktf.stringToHclTerraform(this._interfaceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replay_protection: {
        value: cdktf.booleanToHclTerraform(this._replayProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
