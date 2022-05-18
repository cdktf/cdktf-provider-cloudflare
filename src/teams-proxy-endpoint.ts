// https://www.terraform.io/docs/providers/cloudflare/r/teams_proxy_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamsProxyEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_proxy_endpoint#account_id TeamsProxyEndpoint#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_proxy_endpoint#ips TeamsProxyEndpoint#ips}
  */
  readonly ips: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_proxy_endpoint#name TeamsProxyEndpoint#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_proxy_endpoint cloudflare_teams_proxy_endpoint}
*/
export class TeamsProxyEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_teams_proxy_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_proxy_endpoint cloudflare_teams_proxy_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamsProxyEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: TeamsProxyEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_teams_proxy_endpoint',
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
    this._ips = config.ips;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips - computed: false, optional: false, required: true
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
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

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      ips: cdktf.listMapper(cdktf.stringToTerraform)(this._ips),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
