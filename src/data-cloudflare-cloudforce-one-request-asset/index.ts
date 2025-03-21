// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareCloudforceOneRequestAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#account_identifier DataCloudflareCloudforceOneRequestAsset#account_identifier}
  */
  readonly accountIdentifier: string;
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#asset_identifer DataCloudflareCloudforceOneRequestAsset#asset_identifer}
  */
  readonly assetIdentifer: string;
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#request_identifier DataCloudflareCloudforceOneRequestAsset#request_identifier}
  */
  readonly requestIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}
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
  * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset} Data Source
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
        providerVersion: '5.2.0',
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
    this._assetIdentifer = config.assetIdentifer;
    this._requestIdentifier = config.requestIdentifier;
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

  // asset_identifer - computed: false, optional: false, required: true
  private _assetIdentifer?: string; 
  public get assetIdentifer() {
    return this.getStringAttribute('asset_identifer');
  }
  public set assetIdentifer(value: string) {
    this._assetIdentifer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdentiferInput() {
    return this._assetIdentifer;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_identifier: cdktf.stringToTerraform(this._accountIdentifier),
      asset_identifer: cdktf.stringToTerraform(this._assetIdentifer),
      request_identifier: cdktf.stringToTerraform(this._requestIdentifier),
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
      asset_identifer: {
        value: cdktf.stringToHclTerraform(this._assetIdentifer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_identifier: {
        value: cdktf.stringToHclTerraform(this._requestIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
