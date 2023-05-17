// https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/data-sources/api_token_permission_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareApiTokenPermissionGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/data-sources/api_token_permission_groups#id DataCloudflareApiTokenPermissionGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/data-sources/api_token_permission_groups cloudflare_api_token_permission_groups}
*/
export class DataCloudflareApiTokenPermissionGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_api_token_permission_groups";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/data-sources/api_token_permission_groups cloudflare_api_token_permission_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareApiTokenPermissionGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareApiTokenPermissionGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_api_token_permission_groups',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.6.0',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  private _account = new cdktf.StringMap(this, "account");
  public get account() {
    return this._account;
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new cdktf.StringMap(this, "permissions");
  public get permissions() {
    return this._permissions;
  }

  // user - computed: true, optional: false, required: false
  private _user = new cdktf.StringMap(this, "user");
  public get user() {
    return this._user;
  }

  // zone - computed: true, optional: false, required: false
  private _zone = new cdktf.StringMap(this, "zone");
  public get zone() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
