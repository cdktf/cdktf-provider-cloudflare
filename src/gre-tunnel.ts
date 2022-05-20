// https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GreTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#account_id GreTunnel#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#cloudflare_gre_endpoint GreTunnel#cloudflare_gre_endpoint}
  */
  readonly cloudflareGreEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#customer_gre_endpoint GreTunnel#customer_gre_endpoint}
  */
  readonly customerGreEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#description GreTunnel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#health_check_enabled GreTunnel#health_check_enabled}
  */
  readonly healthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#health_check_target GreTunnel#health_check_target}
  */
  readonly healthCheckTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#health_check_type GreTunnel#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#interface_address GreTunnel#interface_address}
  */
  readonly interfaceAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#mtu GreTunnel#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#name GreTunnel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel#ttl GreTunnel#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel cloudflare_gre_tunnel}
*/
export class GreTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_gre_tunnel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/gre_tunnel cloudflare_gre_tunnel} Resource
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._cloudflareGreEndpoint = config.cloudflareGreEndpoint;
    this._customerGreEndpoint = config.customerGreEndpoint;
    this._description = config.description;
    this._healthCheckEnabled = config.healthCheckEnabled;
    this._healthCheckTarget = config.healthCheckTarget;
    this._healthCheckType = config.healthCheckType;
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
      interface_address: cdktf.stringToTerraform(this._interfaceAddress),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }
}
