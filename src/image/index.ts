/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image#account_id Image#account_id}
  */
  readonly accountId: string;
  /**
  * Can set the creator field with an internal user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image#creator Image#creator}
  */
  readonly creator?: string;
  /**
  * An image binary data. Only needed when type is uploading a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image#file Image#file}
  */
  readonly file?: string;
  /**
  * An optional custom unique identifier for your image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image#id Image#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * User modifiable key-value store. Can use used for keeping references to another system of record for managing images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image#metadata Image#metadata}
  */
  readonly metadata?: string;
  /**
  * Indicates whether the image requires a signature token for the access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image#require_signed_urls Image#require_signed_urls}
  */
  readonly requireSignedUrls?: boolean | cdktf.IResolvable;
  /**
  * A URL to fetch an image from origin. Only needed when type is uploading from a URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image#url Image#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image cloudflare_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/image cloudflare_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_image',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.11.0',
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
    this._creator = config.creator;
    this._file = config.file;
    this._id = config.id;
    this._metadata = config.metadata;
    this._requireSignedUrls = config.requireSignedUrls;
    this._url = config.url;
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

  // creator - computed: false, optional: true, required: false
  private _creator?: string; 
  public get creator() {
    return this.getStringAttribute('creator');
  }
  public set creator(value: string) {
    this._creator = value;
  }
  public resetCreator() {
    this._creator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorInput() {
    return this._creator;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta - computed: true, optional: false, required: false
  public get meta() {
    return this.getStringAttribute('meta');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // require_signed_urls - computed: true, optional: true, required: false
  private _requireSignedUrls?: boolean | cdktf.IResolvable; 
  public get requireSignedUrls() {
    return this.getBooleanAttribute('require_signed_urls');
  }
  public set requireSignedUrls(value: boolean | cdktf.IResolvable) {
    this._requireSignedUrls = value;
  }
  public resetRequireSignedUrls() {
    this._requireSignedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedUrlsInput() {
    return this._requireSignedUrls;
  }

  // uploaded - computed: true, optional: false, required: false
  public get uploaded() {
    return this.getStringAttribute('uploaded');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // variants - computed: true, optional: false, required: false
  public get variants() {
    return this.getListAttribute('variants');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      creator: cdktf.stringToTerraform(this._creator),
      file: cdktf.stringToTerraform(this._file),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.stringToTerraform(this._metadata),
      require_signed_urls: cdktf.booleanToTerraform(this._requireSignedUrls),
      url: cdktf.stringToTerraform(this._url),
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
      creator: {
        value: cdktf.stringToHclTerraform(this._creator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_signed_urls: {
        value: cdktf.booleanToHclTerraform(this._requireSignedUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
