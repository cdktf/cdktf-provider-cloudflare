/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneCacheVariantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Value of the zone setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#value ZoneCacheVariants#value}
  */
  readonly value: ZoneCacheVariantsValue;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}
  */
  readonly zoneId: string;
}
export interface ZoneCacheVariantsValue {
  /**
  * List of strings with the MIME types of all the variants that should be served for avif.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#avif ZoneCacheVariants#avif}
  */
  readonly avif?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for bmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#bmp ZoneCacheVariants#bmp}
  */
  readonly bmp?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for gif.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#gif ZoneCacheVariants#gif}
  */
  readonly gif?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for jp2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#jp2 ZoneCacheVariants#jp2}
  */
  readonly jp2?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for jpeg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}
  */
  readonly jpeg?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for jpg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#jpg ZoneCacheVariants#jpg}
  */
  readonly jpg?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for jpg2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}
  */
  readonly jpg2?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for png.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#png ZoneCacheVariants#png}
  */
  readonly png?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for tif.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#tif ZoneCacheVariants#tif}
  */
  readonly tif?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for tiff.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#tiff ZoneCacheVariants#tiff}
  */
  readonly tiff?: string[];
  /**
  * List of strings with the MIME types of all the variants that should be served for webp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#webp ZoneCacheVariants#webp}
  */
  readonly webp?: string[];
}

export function zoneCacheVariantsValueToTerraform(struct?: ZoneCacheVariantsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avif: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.avif),
    bmp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bmp),
    gif: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gif),
    jp2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jp2),
    jpeg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jpeg),
    jpg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jpg),
    jpg2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jpg2),
    png: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.png),
    tif: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tif),
    tiff: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tiff),
    webp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webp),
  }
}


export function zoneCacheVariantsValueToHclTerraform(struct?: ZoneCacheVariantsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avif: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.avif),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bmp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bmp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gif: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gif),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jp2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jp2),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jpeg: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jpeg),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jpg: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jpg),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jpg2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jpg2),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    png: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.png),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tif: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tif),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tiff: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tiff),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    webp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneCacheVariantsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneCacheVariantsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avif !== undefined) {
      hasAnyValues = true;
      internalValueResult.avif = this._avif;
    }
    if (this._bmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmp = this._bmp;
    }
    if (this._gif !== undefined) {
      hasAnyValues = true;
      internalValueResult.gif = this._gif;
    }
    if (this._jp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.jp2 = this._jp2;
    }
    if (this._jpeg !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpeg = this._jpeg;
    }
    if (this._jpg !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpg = this._jpg;
    }
    if (this._jpg2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpg2 = this._jpg2;
    }
    if (this._png !== undefined) {
      hasAnyValues = true;
      internalValueResult.png = this._png;
    }
    if (this._tif !== undefined) {
      hasAnyValues = true;
      internalValueResult.tif = this._tif;
    }
    if (this._tiff !== undefined) {
      hasAnyValues = true;
      internalValueResult.tiff = this._tiff;
    }
    if (this._webp !== undefined) {
      hasAnyValues = true;
      internalValueResult.webp = this._webp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneCacheVariantsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avif = undefined;
      this._bmp = undefined;
      this._gif = undefined;
      this._jp2 = undefined;
      this._jpeg = undefined;
      this._jpg = undefined;
      this._jpg2 = undefined;
      this._png = undefined;
      this._tif = undefined;
      this._tiff = undefined;
      this._webp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avif = value.avif;
      this._bmp = value.bmp;
      this._gif = value.gif;
      this._jp2 = value.jp2;
      this._jpeg = value.jpeg;
      this._jpg = value.jpg;
      this._jpg2 = value.jpg2;
      this._png = value.png;
      this._tif = value.tif;
      this._tiff = value.tiff;
      this._webp = value.webp;
    }
  }

  // avif - computed: false, optional: true, required: false
  private _avif?: string[]; 
  public get avif() {
    return this.getListAttribute('avif');
  }
  public set avif(value: string[]) {
    this._avif = value;
  }
  public resetAvif() {
    this._avif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avifInput() {
    return this._avif;
  }

  // bmp - computed: false, optional: true, required: false
  private _bmp?: string[]; 
  public get bmp() {
    return this.getListAttribute('bmp');
  }
  public set bmp(value: string[]) {
    this._bmp = value;
  }
  public resetBmp() {
    this._bmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmpInput() {
    return this._bmp;
  }

  // gif - computed: false, optional: true, required: false
  private _gif?: string[]; 
  public get gif() {
    return this.getListAttribute('gif');
  }
  public set gif(value: string[]) {
    this._gif = value;
  }
  public resetGif() {
    this._gif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gifInput() {
    return this._gif;
  }

  // jp2 - computed: false, optional: true, required: false
  private _jp2?: string[]; 
  public get jp2() {
    return this.getListAttribute('jp2');
  }
  public set jp2(value: string[]) {
    this._jp2 = value;
  }
  public resetJp2() {
    this._jp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jp2Input() {
    return this._jp2;
  }

  // jpeg - computed: false, optional: true, required: false
  private _jpeg?: string[]; 
  public get jpeg() {
    return this.getListAttribute('jpeg');
  }
  public set jpeg(value: string[]) {
    this._jpeg = value;
  }
  public resetJpeg() {
    this._jpeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpegInput() {
    return this._jpeg;
  }

  // jpg - computed: false, optional: true, required: false
  private _jpg?: string[]; 
  public get jpg() {
    return this.getListAttribute('jpg');
  }
  public set jpg(value: string[]) {
    this._jpg = value;
  }
  public resetJpg() {
    this._jpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpgInput() {
    return this._jpg;
  }

  // jpg2 - computed: false, optional: true, required: false
  private _jpg2?: string[]; 
  public get jpg2() {
    return this.getListAttribute('jpg2');
  }
  public set jpg2(value: string[]) {
    this._jpg2 = value;
  }
  public resetJpg2() {
    this._jpg2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpg2Input() {
    return this._jpg2;
  }

  // png - computed: false, optional: true, required: false
  private _png?: string[]; 
  public get png() {
    return this.getListAttribute('png');
  }
  public set png(value: string[]) {
    this._png = value;
  }
  public resetPng() {
    this._png = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pngInput() {
    return this._png;
  }

  // tif - computed: false, optional: true, required: false
  private _tif?: string[]; 
  public get tif() {
    return this.getListAttribute('tif');
  }
  public set tif(value: string[]) {
    this._tif = value;
  }
  public resetTif() {
    this._tif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tifInput() {
    return this._tif;
  }

  // tiff - computed: false, optional: true, required: false
  private _tiff?: string[]; 
  public get tiff() {
    return this.getListAttribute('tiff');
  }
  public set tiff(value: string[]) {
    this._tiff = value;
  }
  public resetTiff() {
    this._tiff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiffInput() {
    return this._tiff;
  }

  // webp - computed: false, optional: true, required: false
  private _webp?: string[]; 
  public get webp() {
    return this.getListAttribute('webp');
  }
  public set webp(value: string[]) {
    this._webp = value;
  }
  public resetWebp() {
    this._webp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webpInput() {
    return this._webp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}
*/
export class ZoneCacheVariants extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_cache_variants";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneCacheVariants to import
  * @param importFromId The id of the existing ZoneCacheVariants that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneCacheVariants to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_cache_variants", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneCacheVariantsConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneCacheVariantsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_cache_variants',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.0',
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
    this._value.internalValue = config.value;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // editable - computed: true, optional: false, required: false
  public get editable() {
    return this.getBooleanAttribute('editable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // value - computed: false, optional: false, required: true
  private _value = new ZoneCacheVariantsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ZoneCacheVariantsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      value: zoneCacheVariantsValueToTerraform(this._value.internalValue),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      value: {
        value: zoneCacheVariantsValueToHclTerraform(this._value.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneCacheVariantsValue",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
