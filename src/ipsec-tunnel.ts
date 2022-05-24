// https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#account_id IpsecTunnel#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#cloudflare_endpoint IpsecTunnel#cloudflare_endpoint}
  */
  readonly cloudflareEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#customer_endpoint IpsecTunnel#customer_endpoint}
  */
  readonly customerEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#description IpsecTunnel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#id IpsecTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#interface_address IpsecTunnel#interface_address}
  */
  readonly interfaceAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel cloudflare_ipsec_tunnel}
*/
export class IpsecTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ipsec_tunnel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel cloudflare_ipsec_tunnel} Resource
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._cloudflareEndpoint = config.cloudflareEndpoint;
    this._customerEndpoint = config.customerEndpoint;
    this._description = config.description;
    this._id = config.id;
    this._interfaceAddress = config.interfaceAddress;
    this._name = config.name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      cloudflare_endpoint: cdktf.stringToTerraform(this._cloudflareEndpoint),
      customer_endpoint: cdktf.stringToTerraform(this._customerEndpoint),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      interface_address: cdktf.stringToTerraform(this._interfaceAddress),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
