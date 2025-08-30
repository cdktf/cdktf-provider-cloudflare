/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareCloudforceOneRequestAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#account_id DataCloudflareCloudforceOneRequestAsset#account_id}
  */
  readonly accountId: string;
  /**
  * UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#asset_id DataCloudflareCloudforceOneRequestAsset#asset_id}
  */
  readonly assetId: string;
  /**
  * UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#request_id DataCloudflareCloudforceOneRequestAsset#request_id}
  */
  readonly requestId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}
*/
export class DataCloudflareCloudforceOneRequestAsset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_cloudforce_one_request_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestAsset to import
  * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareCloudforceOneRequestAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareCloudforceOneRequestAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_cloudforce_one_request_asset',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.9.0',
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
    this._assetId = config.assetId;
    this._requestId = config.requestId;
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

  // asset_id - computed: false, optional: false, required: true
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // request_id - computed: false, optional: false, required: true
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      asset_id: cdktf.stringToTerraform(this._assetId),
      request_id: cdktf.stringToTerraform(this._requestId),
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
      asset_id: {
        value: cdktf.stringToHclTerraform(this._assetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_id: {
        value: cdktf.stringToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
