// https://www.terraform.io/docs/providers/cloudflare/r/tunnel_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TunnelVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_virtual_network#account_id TunnelVirtualNetwork#account_id}
  */
  readonly accountId: string;
  /**
  * Description of the tunnel virtual network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_virtual_network#comment TunnelVirtualNetwork#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_virtual_network#id TunnelVirtualNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether this virtual network is the default one for the account. This means IP Routes belong to this virtual network and Teams Clients in the account route through this virtual network, unless specified otherwise for each case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_virtual_network#is_default_network TunnelVirtualNetwork#is_default_network}
  */
  readonly isDefaultNetwork?: boolean | cdktf.IResolvable;
  /**
  * A user-friendly name chosen when the virtual network is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_virtual_network#name TunnelVirtualNetwork#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_virtual_network cloudflare_tunnel_virtual_network}
*/
export class TunnelVirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_tunnel_virtual_network";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_virtual_network cloudflare_tunnel_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TunnelVirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: TunnelVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_tunnel_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.19.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._comment = config.comment;
    this._id = config.id;
    this._isDefaultNetwork = config.isDefaultNetwork;
    this._name = config.name;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // is_default_network - computed: false, optional: true, required: false
  private _isDefaultNetwork?: boolean | cdktf.IResolvable; 
  public get isDefaultNetwork() {
    return this.getBooleanAttribute('is_default_network');
  }
  public set isDefaultNetwork(value: boolean | cdktf.IResolvable) {
    this._isDefaultNetwork = value;
  }
  public resetIsDefaultNetwork() {
    this._isDefaultNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultNetworkInput() {
    return this._isDefaultNetwork;
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
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      is_default_network: cdktf.booleanToTerraform(this._isDefaultNetwork),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
