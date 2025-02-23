/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#account_id Stream#account_id}
  */
  readonly accountId: string;
  /**
  * Lists the origins allowed to display the video. Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#allowed_origins Stream#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * A user-defined identifier for the media creator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#creator Stream#creator}
  */
  readonly creator?: string;
  /**
  * A Cloudflare-generated unique identifier for a media item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#identifier Stream#identifier}
  */
  readonly identifier?: string;
  /**
  * The maximum duration in seconds for a video upload. Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#max_duration_seconds Stream#max_duration_seconds}
  */
  readonly maxDurationSeconds?: number;
  /**
  * A user modifiable key-value store used to reference other systems of record for managing videos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#meta Stream#meta}
  */
  readonly meta?: string;
  /**
  * Indicates whether the video can be a accessed using the UID. When set to `true`, a signed token must be generated with a signing key to view the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#require_signed_urls Stream#require_signed_urls}
  */
  readonly requireSignedUrls?: boolean | cdktf.IResolvable;
  /**
  * Indicates the date and time at which the video will be deleted. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#scheduled_deletion Stream#scheduled_deletion}
  */
  readonly scheduledDeletion?: string;
  /**
  * The timestamp for a thumbnail image calculated as a percentage value of the video's duration. To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#thumbnail_timestamp_pct Stream#thumbnail_timestamp_pct}
  */
  readonly thumbnailTimestampPct?: number;
  /**
  * The date and time when the video upload URL is no longer valid for direct user uploads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#upload_expiry Stream#upload_expiry}
  */
  readonly uploadExpiry?: string;
}
export interface StreamInput {
}

export function streamInputToTerraform(struct?: StreamInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamInputToHclTerraform(struct?: StreamInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamInput | undefined) {
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
export interface StreamPlayback {
}

export function streamPlaybackToTerraform(struct?: StreamPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamPlaybackToHclTerraform(struct?: StreamPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamPlaybackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamPlayback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamPlayback | undefined) {
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
export interface StreamStatus {
}

export function streamStatusToTerraform(struct?: StreamStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamStatusToHclTerraform(struct?: StreamStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamStatus | undefined) {
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
export interface StreamWatermark {
}

export function streamWatermarkToTerraform(struct?: StreamWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamWatermarkToHclTerraform(struct?: StreamWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamWatermarkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamWatermark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamWatermark | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream cloudflare_stream}
*/
export class Stream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stream to import
  * @param importFromId The id of the existing Stream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/stream cloudflare_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamConfig
  */
  public constructor(scope: Construct, id: string, config: StreamConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_stream',
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
    this._allowedOrigins = config.allowedOrigins;
    this._creator = config.creator;
    this._identifier = config.identifier;
    this._maxDurationSeconds = config.maxDurationSeconds;
    this._meta = config.meta;
    this._requireSignedUrls = config.requireSignedUrls;
    this._scheduledDeletion = config.scheduledDeletion;
    this._thumbnailTimestampPct = config.thumbnailTimestampPct;
    this._uploadExpiry = config.uploadExpiry;
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

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
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

  // input - computed: true, optional: false, required: false
  private _input = new StreamInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }

  // live_input - computed: true, optional: false, required: false
  public get liveInput() {
    return this.getStringAttribute('live_input');
  }

  // max_duration_seconds - computed: false, optional: true, required: false
  private _maxDurationSeconds?: number; 
  public get maxDurationSeconds() {
    return this.getNumberAttribute('max_duration_seconds');
  }
  public set maxDurationSeconds(value: number) {
    this._maxDurationSeconds = value;
  }
  public resetMaxDurationSeconds() {
    this._maxDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationSecondsInput() {
    return this._maxDurationSeconds;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: string; 
  public get meta() {
    return this.getStringAttribute('meta');
  }
  public set meta(value: string) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // playback - computed: true, optional: false, required: false
  private _playback = new StreamPlaybackOutputReference(this, "playback");
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

  // scheduled_deletion - computed: false, optional: true, required: false
  private _scheduledDeletion?: string; 
  public get scheduledDeletion() {
    return this.getStringAttribute('scheduled_deletion');
  }
  public set scheduledDeletion(value: string) {
    this._scheduledDeletion = value;
  }
  public resetScheduledDeletion() {
    this._scheduledDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledDeletionInput() {
    return this._scheduledDeletion;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  private _status = new StreamStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // thumbnail - computed: true, optional: false, required: false
  public get thumbnail() {
    return this.getStringAttribute('thumbnail');
  }

  // thumbnail_timestamp_pct - computed: true, optional: true, required: false
  private _thumbnailTimestampPct?: number; 
  public get thumbnailTimestampPct() {
    return this.getNumberAttribute('thumbnail_timestamp_pct');
  }
  public set thumbnailTimestampPct(value: number) {
    this._thumbnailTimestampPct = value;
  }
  public resetThumbnailTimestampPct() {
    this._thumbnailTimestampPct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailTimestampPctInput() {
    return this._thumbnailTimestampPct;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // upload_expiry - computed: false, optional: true, required: false
  private _uploadExpiry?: string; 
  public get uploadExpiry() {
    return this.getStringAttribute('upload_expiry');
  }
  public set uploadExpiry(value: string) {
    this._uploadExpiry = value;
  }
  public resetUploadExpiry() {
    this._uploadExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadExpiryInput() {
    return this._uploadExpiry;
  }

  // uploaded - computed: true, optional: false, required: false
  public get uploaded() {
    return this.getStringAttribute('uploaded');
  }

  // watermark - computed: true, optional: false, required: false
  private _watermark = new StreamWatermarkOutputReference(this, "watermark");
  public get watermark() {
    return this._watermark;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOrigins),
      creator: cdktf.stringToTerraform(this._creator),
      identifier: cdktf.stringToTerraform(this._identifier),
      max_duration_seconds: cdktf.numberToTerraform(this._maxDurationSeconds),
      meta: cdktf.stringToTerraform(this._meta),
      require_signed_urls: cdktf.booleanToTerraform(this._requireSignedUrls),
      scheduled_deletion: cdktf.stringToTerraform(this._scheduledDeletion),
      thumbnail_timestamp_pct: cdktf.numberToTerraform(this._thumbnailTimestampPct),
      upload_expiry: cdktf.stringToTerraform(this._uploadExpiry),
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
      allowed_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOrigins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      creator: {
        value: cdktf.stringToHclTerraform(this._creator),
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
      max_duration_seconds: {
        value: cdktf.numberToHclTerraform(this._maxDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      meta: {
        value: cdktf.stringToHclTerraform(this._meta),
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
      scheduled_deletion: {
        value: cdktf.stringToHclTerraform(this._scheduledDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thumbnail_timestamp_pct: {
        value: cdktf.numberToHclTerraform(this._thumbnailTimestampPct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upload_expiry: {
        value: cdktf.stringToHclTerraform(this._uploadExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
