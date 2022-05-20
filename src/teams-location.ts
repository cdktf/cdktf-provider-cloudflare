// https://www.terraform.io/docs/providers/cloudflare/r/teams_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamsLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#account_id TeamsLocation#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#client_default TeamsLocation#client_default}
  */
  readonly clientDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#name TeamsLocation#name}
  */
  readonly name: string;
  /**
  * networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#networks TeamsLocation#networks}
  */
  readonly networks?: TeamsLocationNetworks[] | cdktf.IResolvable;
}
export interface TeamsLocationNetworks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#network TeamsLocation#network}
  */
  readonly network: string;
}

export function teamsLocationNetworksToTerraform(struct?: TeamsLocationNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location cloudflare_teams_location}
*/
export class TeamsLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_teams_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location cloudflare_teams_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamsLocationConfig
  */
  public constructor(scope: Construct, id: string, config: TeamsLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_teams_location',
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
    this._clientDefault = config.clientDefault;
    this._name = config.name;
    this._networks = config.networks;
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

  // anonymized_logs_enabled - computed: true, optional: false, required: false
  public get anonymizedLogsEnabled() {
    return this.getBooleanAttribute('anonymized_logs_enabled');
  }

  // client_default - computed: false, optional: true, required: false
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

  // doh_subdomain - computed: true, optional: false, required: false
  public get dohSubdomain() {
    return this.getStringAttribute('doh_subdomain');
  }

  // id - computed: true, optional: true, required: false
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

  // policy_ids - computed: true, optional: false, required: false
  public get policyIds() {
    return this.getListAttribute('policy_ids');
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: TeamsLocationNetworks[] | cdktf.IResolvable; 
  public get networks() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('networks')));
  }
  public set networks(value: TeamsLocationNetworks[] | cdktf.IResolvable) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      client_default: cdktf.booleanToTerraform(this._clientDefault),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(teamsLocationNetworksToTerraform)(this._networks),
    };
  }
}
