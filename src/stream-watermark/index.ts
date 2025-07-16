/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamWatermarkAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark#account_id StreamWatermarkA#account_id}
  */
  readonly accountId: string;
  /**
  * The image file to upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark#file StreamWatermarkA#file}
  */
  readonly file: string;
  /**
  * The unique identifier for a watermark profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark#identifier StreamWatermarkA#identifier}
  */
  readonly identifier?: string;
  /**
  * A short description of the watermark profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark#name StreamWatermarkA#name}
  */
  readonly name?: string;
  /**
  * The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark#opacity StreamWatermarkA#opacity}
  */
  readonly opacity?: number;
  /**
  * The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark#padding StreamWatermarkA#padding}
  */
  readonly padding?: number;
  /**
  * The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark#position StreamWatermarkA#position}
  */
  readonly position?: string;
  /**
  * The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark#scale StreamWatermarkA#scale}
  */
  readonly scale?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark cloudflare_stream_watermark}
*/
export class StreamWatermarkA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_stream_watermark";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamWatermarkA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamWatermarkA to import
  * @param importFromId The id of the existing StreamWatermarkA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamWatermarkA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_watermark", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/stream_watermark cloudflare_stream_watermark} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamWatermarkAConfig
  */
  public constructor(scope: Construct, id: string, config: StreamWatermarkAConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_stream_watermark',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
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
    this._file = config.file;
    this._identifier = config.identifier;
    this._name = config.name;
    this._opacity = config.opacity;
    this._padding = config.padding;
    this._position = config.position;
    this._scale = config.scale;
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

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // downloaded_from - computed: true, optional: false, required: false
  public get downloadedFrom() {
    return this.getStringAttribute('downloaded_from');
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // opacity - computed: true, optional: true, required: false
  private _opacity?: number; 
  public get opacity() {
    return this.getNumberAttribute('opacity');
  }
  public set opacity(value: number) {
    this._opacity = value;
  }
  public resetOpacity() {
    this._opacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity;
  }

  // padding - computed: true, optional: true, required: false
  private _padding?: number; 
  public get padding() {
    return this.getNumberAttribute('padding');
  }
  public set padding(value: number) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // position - computed: true, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // scale - computed: true, optional: true, required: false
  private _scale?: number; 
  public get scale() {
    return this.getNumberAttribute('scale');
  }
  public set scale(value: number) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      file: cdktf.stringToTerraform(this._file),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      opacity: cdktf.numberToTerraform(this._opacity),
      padding: cdktf.numberToTerraform(this._padding),
      position: cdktf.stringToTerraform(this._position),
      scale: cdktf.numberToTerraform(this._scale),
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
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opacity: {
        value: cdktf.numberToHclTerraform(this._opacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      padding: {
        value: cdktf.numberToHclTerraform(this._padding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale: {
        value: cdktf.numberToHclTerraform(this._scale),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
