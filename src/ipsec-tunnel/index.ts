/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#account_id IpsecTunnel#account_id}
  */
  readonly accountId?: string;
  /**
  * Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#allow_null_cipher IpsecTunnel#allow_null_cipher}
  */
  readonly allowNullCipher?: boolean | cdktf.IResolvable;
  /**
  * IP address assigned to the Cloudflare side of the IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#cloudflare_endpoint IpsecTunnel#cloudflare_endpoint}
  */
  readonly cloudflareEndpoint: string;
  /**
  * IP address assigned to the customer side of the IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#customer_endpoint IpsecTunnel#customer_endpoint}
  */
  readonly customerEndpoint: string;
  /**
  * An optional description of the IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#description IpsecTunnel#description}
  */
  readonly description?: string;
  /**
  * `remote_id` in the form of a fqdn. This value is generated by cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#fqdn_id IpsecTunnel#fqdn_id}
  */
  readonly fqdnId?: string;
  /**
  * Specifies if ICMP tunnel health checks are enabled. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#health_check_enabled IpsecTunnel#health_check_enabled}
  */
  readonly healthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#health_check_target IpsecTunnel#health_check_target}
  */
  readonly healthCheckTarget?: string;
  /**
  * Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#health_check_type IpsecTunnel#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * `remote_id` as a hex string. This value is generated by cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#hex_id IpsecTunnel#hex_id}
  */
  readonly hexId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#interface_address IpsecTunnel#interface_address}
  */
  readonly interfaceAddress: string;
  /**
  * Name of the IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name: string;
  /**
  * Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#psk IpsecTunnel#psk}
  */
  readonly psk?: string;
  /**
  * ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#remote_id IpsecTunnel#remote_id}
  */
  readonly remoteId?: string;
  /**
  * `remote_id` in the form of an email address. This value is generated by cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#user_id IpsecTunnel#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel cloudflare_ipsec_tunnel}
*/
export class IpsecTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecTunnel to import
  * @param importFromId The id of the existing IpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/ipsec_tunnel cloudflare_ipsec_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ipsec_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.22.0',
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
    this._allowNullCipher = config.allowNullCipher;
    this._cloudflareEndpoint = config.cloudflareEndpoint;
    this._customerEndpoint = config.customerEndpoint;
    this._description = config.description;
    this._fqdnId = config.fqdnId;
    this._healthCheckEnabled = config.healthCheckEnabled;
    this._healthCheckTarget = config.healthCheckTarget;
    this._healthCheckType = config.healthCheckType;
    this._hexId = config.hexId;
    this._id = config.id;
    this._interfaceAddress = config.interfaceAddress;
    this._name = config.name;
    this._psk = config.psk;
    this._remoteId = config.remoteId;
    this._userId = config.userId;
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

  // allow_null_cipher - computed: false, optional: true, required: false
  private _allowNullCipher?: boolean | cdktf.IResolvable; 
  public get allowNullCipher() {
    return this.getBooleanAttribute('allow_null_cipher');
  }
  public set allowNullCipher(value: boolean | cdktf.IResolvable) {
    this._allowNullCipher = value;
  }
  public resetAllowNullCipher() {
    this._allowNullCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNullCipherInput() {
    return this._allowNullCipher;
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

  // customer_endpoint - computed: false, optional: false, required: true
  private _customerEndpoint?: string; 
  public get customerEndpoint() {
    return this.getStringAttribute('customer_endpoint');
  }
  public set customerEndpoint(value: string) {
    this._customerEndpoint = value;
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

  // fqdn_id - computed: true, optional: true, required: false
  private _fqdnId?: string; 
  public get fqdnId() {
    return this.getStringAttribute('fqdn_id');
  }
  public set fqdnId(value: string) {
    this._fqdnId = value;
  }
  public resetFqdnId() {
    this._fqdnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnIdInput() {
    return this._fqdnId;
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

  // hex_id - computed: true, optional: true, required: false
  private _hexId?: string; 
  public get hexId() {
    return this.getStringAttribute('hex_id');
  }
  public set hexId(value: string) {
    this._hexId = value;
  }
  public resetHexId() {
    this._hexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexIdInput() {
    return this._hexId;
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

  // psk - computed: true, optional: true, required: false
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

  // remote_id - computed: true, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allow_null_cipher: cdktf.booleanToTerraform(this._allowNullCipher),
      cloudflare_endpoint: cdktf.stringToTerraform(this._cloudflareEndpoint),
      customer_endpoint: cdktf.stringToTerraform(this._customerEndpoint),
      description: cdktf.stringToTerraform(this._description),
      fqdn_id: cdktf.stringToTerraform(this._fqdnId),
      health_check_enabled: cdktf.booleanToTerraform(this._healthCheckEnabled),
      health_check_target: cdktf.stringToTerraform(this._healthCheckTarget),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      hex_id: cdktf.stringToTerraform(this._hexId),
      id: cdktf.stringToTerraform(this._id),
      interface_address: cdktf.stringToTerraform(this._interfaceAddress),
      name: cdktf.stringToTerraform(this._name),
      psk: cdktf.stringToTerraform(this._psk),
      remote_id: cdktf.stringToTerraform(this._remoteId),
      user_id: cdktf.stringToTerraform(this._userId),
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
      allow_null_cipher: {
        value: cdktf.booleanToHclTerraform(this._allowNullCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      fqdn_id: {
        value: cdktf.stringToHclTerraform(this._fqdnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._healthCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_target: {
        value: cdktf.stringToHclTerraform(this._healthCheckTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hex_id: {
        value: cdktf.stringToHclTerraform(this._hexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      remote_id: {
        value: cdktf.stringToHclTerraform(this._remoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
