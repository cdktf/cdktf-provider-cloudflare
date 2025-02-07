/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/stream#account_id DataCloudflareStream#account_id}
  */
  readonly accountId: string;
  /**
  * A Cloudflare-generated unique identifier for a media item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/stream#identifier DataCloudflareStream#identifier}
  */
  readonly identifier: string;
}
export interface DataCloudflareStreamInput {
}

export function dataCloudflareStreamInputToTerraform(struct?: DataCloudflareStreamInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareStreamInputToHclTerraform(struct?: DataCloudflareStreamInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareStreamInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareStreamInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareStreamInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }
}
export interface DataCloudflareStreamPlayback {
}

export function dataCloudflareStreamPlaybackToTerraform(struct?: DataCloudflareStreamPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareStreamPlaybackToHclTerraform(struct?: DataCloudflareStreamPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareStreamPlaybackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareStreamPlayback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareStreamPlayback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dash - computed: true, optional: false, required: false
  public get dash() {
    return this.getStringAttribute('dash');
  }

  // hls - computed: true, optional: false, required: false
  public get hls() {
    return this.getStringAttribute('hls');
  }
}
export interface DataCloudflareStreamStatus {
}

export function dataCloudflareStreamStatusToTerraform(struct?: DataCloudflareStreamStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareStreamStatusToHclTerraform(struct?: DataCloudflareStreamStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareStreamStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareStreamStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareStreamStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_reason_code - computed: true, optional: false, required: false
  public get errorReasonCode() {
    return this.getStringAttribute('error_reason_code');
  }

  // error_reason_text - computed: true, optional: false, required: false
  public get errorReasonText() {
    return this.getStringAttribute('error_reason_text');
  }

  // pct_complete - computed: true, optional: false, required: false
  public get pctComplete() {
    return this.getStringAttribute('pct_complete');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataCloudflareStreamWatermark {
}

export function dataCloudflareStreamWatermarkToTerraform(struct?: DataCloudflareStreamWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareStreamWatermarkToHclTerraform(struct?: DataCloudflareStreamWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareStreamWatermarkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareStreamWatermark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareStreamWatermark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // downloaded_from - computed: true, optional: false, required: false
  public get downloadedFrom() {
    return this.getStringAttribute('downloaded_from');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // opacity - computed: true, optional: false, required: false
  public get opacity() {
    return this.getNumberAttribute('opacity');
  }

  // padding - computed: true, optional: false, required: false
  public get padding() {
    return this.getNumberAttribute('padding');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/stream cloudflare_stream}
*/
export class DataCloudflareStream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareStream to import
  * @param importFromId The id of the existing DataCloudflareStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/stream cloudflare_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_stream',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.0.0',
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
    this._identifier = config.identifier;
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

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // input - computed: true, optional: false, required: false
  private _input = new DataCloudflareStreamInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }

  // live_input - computed: true, optional: false, required: false
  public get liveInput() {
    return this.getStringAttribute('live_input');
  }

  // max_duration_seconds - computed: true, optional: false, required: false
  public get maxDurationSeconds() {
    return this.getNumberAttribute('max_duration_seconds');
  }

  // meta - computed: true, optional: false, required: false
  public get meta() {
    return this.getStringAttribute('meta');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // playback - computed: true, optional: false, required: false
  private _playback = new DataCloudflareStreamPlaybackOutputReference(this, "playback");
  public get playback() {
    return this._playback;
  }

  // preview - computed: true, optional: false, required: false
  public get preview() {
    return this.getStringAttribute('preview');
  }

  // ready_to_stream - computed: true, optional: false, required: false
  public get readyToStream() {
    return this.getBooleanAttribute('ready_to_stream');
  }

  // ready_to_stream_at - computed: true, optional: false, required: false
  public get readyToStreamAt() {
    return this.getStringAttribute('ready_to_stream_at');
  }

  // require_signed_urls - computed: true, optional: false, required: false
  public get requireSignedUrls() {
    return this.getBooleanAttribute('require_signed_urls');
  }

  // scheduled_deletion - computed: true, optional: false, required: false
  public get scheduledDeletion() {
    return this.getStringAttribute('scheduled_deletion');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataCloudflareStreamStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // thumbnail - computed: true, optional: false, required: false
  public get thumbnail() {
    return this.getStringAttribute('thumbnail');
  }

  // thumbnail_timestamp_pct - computed: true, optional: false, required: false
  public get thumbnailTimestampPct() {
    return this.getNumberAttribute('thumbnail_timestamp_pct');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // upload_expiry - computed: true, optional: false, required: false
  public get uploadExpiry() {
    return this.getStringAttribute('upload_expiry');
  }

  // uploaded - computed: true, optional: false, required: false
  public get uploaded() {
    return this.getStringAttribute('uploaded');
  }

  // watermark - computed: true, optional: false, required: false
  private _watermark = new DataCloudflareStreamWatermarkOutputReference(this, "watermark");
  public get watermark() {
    return this._watermark;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      identifier: cdktf.stringToTerraform(this._identifier),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
