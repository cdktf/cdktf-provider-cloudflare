/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GreTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#account_id GreTunnel#account_id}
  */
  readonly accountId?: string;
  /**
  * The IP address assigned to the Cloudflare side of the GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#cloudflare_gre_endpoint GreTunnel#cloudflare_gre_endpoint}
  */
  readonly cloudflareGreEndpoint: string;
  /**
  * The IP address assigned to the customer side of the GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#customer_gre_endpoint GreTunnel#customer_gre_endpoint}
  */
  readonly customerGreEndpoint: string;
  /**
  * Description of the GRE tunnel intent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#description GreTunnel#description}
  */
  readonly description?: string;
  /**
  * Specifies if ICMP tunnel health checks are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#health_check_enabled GreTunnel#health_check_enabled}
  */
  readonly healthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * The IP address of the customer endpoint that will receive tunnel health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#health_check_target GreTunnel#health_check_target}
  */
  readonly healthCheckTarget?: string;
  /**
  * Specifies the ICMP echo type for the health check. Available values: `request`, `reply`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#health_check_type GreTunnel#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#id GreTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#interface_address GreTunnel#interface_address}
  */
  readonly interfaceAddress: string;
  /**
  * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#mtu GreTunnel#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#name GreTunnel#name}
  */
  readonly name: string;
  /**
  * Time To Live (TTL) in number of hops of the GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#ttl GreTunnel#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel cloudflare_gre_tunnel}
*/
export class GreTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_gre_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GreTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GreTunnel to import
  * @param importFromId The id of the existing GreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GreTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_gre_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/gre_tunnel cloudflare_gre_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GreTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: GreTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_gre_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.19.0',
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
    this._cloudflareGreEndpoint = config.cloudflareGreEndpoint;
    this._customerGreEndpoint = config.customerGreEndpoint;
    this._description = config.description;
    this._healthCheckEnabled = config.healthCheckEnabled;
    this._healthCheckTarget = config.healthCheckTarget;
    this._healthCheckType = config.healthCheckType;
    this._id = config.id;
    this._interfaceAddress = config.interfaceAddress;
    this._mtu = config.mtu;
    this._name = config.name;
    this._ttl = config.ttl;
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

  // cloudflare_gre_endpoint - computed: false, optional: false, required: true
  private _cloudflareGreEndpoint?: string; 
  public get cloudflareGreEndpoint() {
    return this.getStringAttribute('cloudflare_gre_endpoint');
  }
  public set cloudflareGreEndpoint(value: string) {
    this._cloudflareGreEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareGreEndpointInput() {
    return this._cloudflareGreEndpoint;
  }

  // customer_gre_endpoint - computed: false, optional: false, required: true
  private _customerGreEndpoint?: string; 
  public get customerGreEndpoint() {
    return this.getStringAttribute('customer_gre_endpoint');
  }
  public set customerGreEndpoint(value: string) {
    this._customerGreEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGreEndpointInput() {
    return this._customerGreEndpoint;
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

  // health_check_enabled - computed: true, optional: true, required: false
  private _healthCheckEnabled?: boolean | cdktf.IResolvable; 
  public get healthCheckEnabled() {
    return this.getBooleanAttribute('health_check_enabled');
  }
  public set healthCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._healthCheckEnabled = value;
  }
  public resetHealthCheckEnabled() {
    this._healthCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckEnabledInput() {
    return this._healthCheckEnabled;
  }

  // health_check_target - computed: true, optional: true, required: false
  private _healthCheckTarget?: string; 
  public get healthCheckTarget() {
    return this.getStringAttribute('health_check_target');
  }
  public set healthCheckTarget(value: string) {
    this._healthCheckTarget = value;
  }
  public resetHealthCheckTarget() {
    this._healthCheckTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTargetInput() {
    return this._healthCheckTarget;
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
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

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      cloudflare_gre_endpoint: cdktf.stringToTerraform(this._cloudflareGreEndpoint),
      customer_gre_endpoint: cdktf.stringToTerraform(this._customerGreEndpoint),
      description: cdktf.stringToTerraform(this._description),
      health_check_enabled: cdktf.booleanToTerraform(this._healthCheckEnabled),
      health_check_target: cdktf.stringToTerraform(this._healthCheckTarget),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      id: cdktf.stringToTerraform(this._id),
      interface_address: cdktf.stringToTerraform(this._interfaceAddress),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }
}
