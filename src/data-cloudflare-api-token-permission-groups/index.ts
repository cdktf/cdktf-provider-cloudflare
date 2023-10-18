/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/data-sources/api_token_permission_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareApiTokenPermissionGroupsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/data-sources/api_token_permission_groups cloudflare_api_token_permission_groups}
*/
export class DataCloudflareApiTokenPermissionGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_api_token_permission_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareApiTokenPermissionGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareApiTokenPermissionGroups to import
  * @param importFromId The id of the existing DataCloudflareApiTokenPermissionGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/data-sources/api_token_permission_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareApiTokenPermissionGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_token_permission_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/data-sources/api_token_permission_groups cloudflare_api_token_permission_groups} Data Source
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
        providerVersion: '4.17.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  private _account = new cdktf.StringMap(this, "account");
  public get account() {
    return this._account;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new cdktf.StringMap(this, "permissions");
  public get permissions() {
    return this._permissions;
  }

  // r2 - computed: true, optional: false, required: false
  private _r2 = new cdktf.StringMap(this, "r2");
  public get r2() {
    return this._r2;
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
    };
  }
}
