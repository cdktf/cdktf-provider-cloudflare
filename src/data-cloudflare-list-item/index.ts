/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/list_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareListItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/list_item#account_id DataCloudflareListItem#account_id}
  */
  readonly accountId: string;
  /**
  * Defines the unique ID of the item in the List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/list_item#item_id DataCloudflareListItem#item_id}
  */
  readonly itemId: string;
  /**
  * The unique ID of the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/list_item#list_id DataCloudflareListItem#list_id}
  */
  readonly listId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/list_item cloudflare_list_item}
*/
export class DataCloudflareListItem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_list_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareListItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareListItem to import
  * @param importFromId The id of the existing DataCloudflareListItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/list_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareListItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/list_item cloudflare_list_item} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareListItemConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareListItemConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_list_item',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._itemId = config.itemId;
    this._listId = config.listId;
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

  // item_id - computed: false, optional: false, required: true
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
  }

  // list_id - computed: false, optional: false, required: true
  private _listId?: string; 
  public get listId() {
    return this.getStringAttribute('list_id');
  }
  public set listId(value: string) {
    this._listId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listIdInput() {
    return this._listId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      item_id: cdktf.stringToTerraform(this._itemId),
      list_id: cdktf.stringToTerraform(this._listId),
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
      item_id: {
        value: cdktf.stringToHclTerraform(this._itemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_id: {
        value: cdktf.stringToHclTerraform(this._listId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
