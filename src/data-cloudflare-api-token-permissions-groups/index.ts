// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_token_permissions_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareApiTokenPermissionsGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_token_permissions_groups#account_id DataCloudflareApiTokenPermissionsGroups#account_id}
  */
  readonly accountId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_token_permissions_groups cloudflare_api_token_permissions_groups}
*/
export class DataCloudflareApiTokenPermissionsGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_api_token_permissions_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareApiTokenPermissionsGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareApiTokenPermissionsGroups to import
  * @param importFromId The id of the existing DataCloudflareApiTokenPermissionsGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_token_permissions_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareApiTokenPermissionsGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_token_permissions_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_token_permissions_groups cloudflare_api_token_permissions_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareApiTokenPermissionsGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareApiTokenPermissionsGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_api_token_permissions_groups',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
