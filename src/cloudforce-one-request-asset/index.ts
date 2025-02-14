/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/cloudforce_one_request_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudforceOneRequestAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/cloudforce_one_request_asset#account_identifier CloudforceOneRequestAsset#account_identifier}
  */
  readonly accountIdentifier: string;
  /**
  * Page number of results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/cloudforce_one_request_asset#page CloudforceOneRequestAsset#page}
  */
  readonly page: number;
  /**
  * Number of results per page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/cloudforce_one_request_asset#per_page CloudforceOneRequestAsset#per_page}
  */
  readonly perPage: number;
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/cloudforce_one_request_asset#request_identifier CloudforceOneRequestAsset#request_identifier}
  */
  readonly requestIdentifier: string;
  /**
  * Asset file to upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/cloudforce_one_request_asset#source CloudforceOneRequestAsset#source}
  */
  readonly source?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}
*/
export class CloudforceOneRequestAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_cloudforce_one_request_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudforceOneRequestAsset to import
  * @param importFromId The id of the existing CloudforceOneRequestAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudforceOneRequestAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudforceOneRequestAssetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudforceOneRequestAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_cloudforce_one_request_asset',
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
    this._accountIdentifier = config.accountIdentifier;
    this._page = config.page;
    this._perPage = config.perPage;
    this._requestIdentifier = config.requestIdentifier;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_identifier - computed: false, optional: false, required: true
  private _accountIdentifier?: string; 
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }
  public set accountIdentifier(value: string) {
    this._accountIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdentifierInput() {
    return this._accountIdentifier;
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

  // page - computed: false, optional: false, required: true
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // per_page - computed: false, optional: false, required: true
  private _perPage?: number; 
  public get perPage() {
    return this.getNumberAttribute('per_page');
  }
  public set perPage(value: number) {
    this._perPage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perPageInput() {
    return this._perPage;
  }

  // request_identifier - computed: false, optional: false, required: true
  private _requestIdentifier?: string; 
  public get requestIdentifier() {
    return this.getStringAttribute('request_identifier');
  }
  public set requestIdentifier(value: string) {
    this._requestIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdentifierInput() {
    return this._requestIdentifier;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_identifier: cdktf.stringToTerraform(this._accountIdentifier),
      page: cdktf.numberToTerraform(this._page),
      per_page: cdktf.numberToTerraform(this._perPage),
      request_identifier: cdktf.stringToTerraform(this._requestIdentifier),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_identifier: {
        value: cdktf.stringToHclTerraform(this._accountIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_page: {
        value: cdktf.numberToHclTerraform(this._perPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_identifier: {
        value: cdktf.stringToHclTerraform(this._requestIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
