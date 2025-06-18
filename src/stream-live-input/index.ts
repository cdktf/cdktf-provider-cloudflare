/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamLiveInputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#account_id StreamLiveInput#account_id}
  */
  readonly accountId: string;
  /**
  * Sets the creator ID asssociated with this live input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#default_creator StreamLiveInput#default_creator}
  */
  readonly defaultCreator?: string;
  /**
  * Indicates the number of days after which the live inputs recordings will be deleted. When a stream completes and the recording is ready, the value is used to calculate a scheduled deletion date for that recording. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#delete_recording_after_days StreamLiveInput#delete_recording_after_days}
  */
  readonly deleteRecordingAfterDays?: number;
  /**
  * A unique identifier for a live input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#live_input_identifier StreamLiveInput#live_input_identifier}
  */
  readonly liveInputIdentifier?: string;
  /**
  * A user modifiable key-value store used to reference other systems of record for managing live inputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#meta StreamLiveInput#meta}
  */
  readonly meta?: string;
  /**
  * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In most cases, the video will initially be viewable as a live video and transition to on-demand after a condition is satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#recording StreamLiveInput#recording}
  */
  readonly recording?: StreamLiveInputRecording;
}
export interface StreamLiveInputRecording {
  /**
  * Lists the origins allowed to display videos created with this input. Enter allowed origin domains in an array and use `*` for wildcard subdomains. An empty array allows videos to be viewed on any origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#allowed_origins StreamLiveInput#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Disables reporting the number of live viewers when this property is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#hide_live_viewer_count StreamLiveInput#hide_live_viewer_count}
  */
  readonly hideLiveViewerCount?: boolean | cdktf.IResolvable;
  /**
  * Specifies the recording behavior for the live input. Set this value to `off` to prevent a recording. Set the value to `automatic` to begin a recording and transition to on-demand after Stream Live stops receiving input.
  * Available values: "off", "automatic".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#mode StreamLiveInput#mode}
  */
  readonly mode?: string;
  /**
  * Indicates if a video using the live input has the `requireSignedURLs` property set. Also enforces access controls on any video recording of the livestream with the live input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#require_signed_urls StreamLiveInput#require_signed_urls}
  */
  readonly requireSignedUrls?: boolean | cdktf.IResolvable;
  /**
  * Determines the amount of time a live input configured in `automatic` mode should wait before a recording transitions from live to on-demand. `0` is recommended for most use cases and indicates the platform default should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#timeout_seconds StreamLiveInput#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function streamLiveInputRecordingToTerraform(struct?: StreamLiveInputRecording | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    hide_live_viewer_count: cdktf.booleanToTerraform(struct!.hideLiveViewerCount),
    mode: cdktf.stringToTerraform(struct!.mode),
    require_signed_urls: cdktf.booleanToTerraform(struct!.requireSignedUrls),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function streamLiveInputRecordingToHclTerraform(struct?: StreamLiveInputRecording | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hide_live_viewer_count: {
      value: cdktf.booleanToHclTerraform(struct!.hideLiveViewerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_signed_urls: {
      value: cdktf.booleanToHclTerraform(struct!.requireSignedUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamLiveInputRecordingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamLiveInputRecording | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._hideLiveViewerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideLiveViewerCount = this._hideLiveViewerCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._requireSignedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSignedUrls = this._requireSignedUrls;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamLiveInputRecording | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedOrigins = undefined;
      this._hideLiveViewerCount = undefined;
      this._mode = undefined;
      this._requireSignedUrls = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedOrigins = value.allowedOrigins;
      this._hideLiveViewerCount = value.hideLiveViewerCount;
      this._mode = value.mode;
      this._requireSignedUrls = value.requireSignedUrls;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // allowed_origins - computed: true, optional: true, required: false
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

  // hide_live_viewer_count - computed: true, optional: true, required: false
  private _hideLiveViewerCount?: boolean | cdktf.IResolvable; 
  public get hideLiveViewerCount() {
    return this.getBooleanAttribute('hide_live_viewer_count');
  }
  public set hideLiveViewerCount(value: boolean | cdktf.IResolvable) {
    this._hideLiveViewerCount = value;
  }
  public resetHideLiveViewerCount() {
    this._hideLiveViewerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideLiveViewerCountInput() {
    return this._hideLiveViewerCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface StreamLiveInputRtmps {
}

export function streamLiveInputRtmpsToTerraform(struct?: StreamLiveInputRtmps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamLiveInputRtmpsToHclTerraform(struct?: StreamLiveInputRtmps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamLiveInputRtmpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamLiveInputRtmps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamLiveInputRtmps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stream_key - computed: true, optional: false, required: false
  public get streamKey() {
    return this.getStringAttribute('stream_key');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface StreamLiveInputRtmpsPlayback {
}

export function streamLiveInputRtmpsPlaybackToTerraform(struct?: StreamLiveInputRtmpsPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamLiveInputRtmpsPlaybackToHclTerraform(struct?: StreamLiveInputRtmpsPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamLiveInputRtmpsPlaybackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamLiveInputRtmpsPlayback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamLiveInputRtmpsPlayback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stream_key - computed: true, optional: false, required: false
  public get streamKey() {
    return this.getStringAttribute('stream_key');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface StreamLiveInputSrt {
}

export function streamLiveInputSrtToTerraform(struct?: StreamLiveInputSrt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamLiveInputSrtToHclTerraform(struct?: StreamLiveInputSrt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamLiveInputSrtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamLiveInputSrt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamLiveInputSrt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface StreamLiveInputSrtPlayback {
}

export function streamLiveInputSrtPlaybackToTerraform(struct?: StreamLiveInputSrtPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamLiveInputSrtPlaybackToHclTerraform(struct?: StreamLiveInputSrtPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamLiveInputSrtPlaybackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamLiveInputSrtPlayback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamLiveInputSrtPlayback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface StreamLiveInputWebRtc {
}

export function streamLiveInputWebRtcToTerraform(struct?: StreamLiveInputWebRtc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamLiveInputWebRtcToHclTerraform(struct?: StreamLiveInputWebRtc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamLiveInputWebRtcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamLiveInputWebRtc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamLiveInputWebRtc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface StreamLiveInputWebRtcPlayback {
}

export function streamLiveInputWebRtcPlaybackToTerraform(struct?: StreamLiveInputWebRtcPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamLiveInputWebRtcPlaybackToHclTerraform(struct?: StreamLiveInputWebRtcPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamLiveInputWebRtcPlaybackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamLiveInputWebRtcPlayback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamLiveInputWebRtcPlayback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input cloudflare_stream_live_input}
*/
export class StreamLiveInput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_stream_live_input";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamLiveInput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamLiveInput to import
  * @param importFromId The id of the existing StreamLiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamLiveInput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_live_input", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input cloudflare_stream_live_input} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamLiveInputConfig
  */
  public constructor(scope: Construct, id: string, config: StreamLiveInputConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_stream_live_input',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.6.0',
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
    this._defaultCreator = config.defaultCreator;
    this._deleteRecordingAfterDays = config.deleteRecordingAfterDays;
    this._liveInputIdentifier = config.liveInputIdentifier;
    this._meta = config.meta;
    this._recording.internalValue = config.recording;
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

  // default_creator - computed: false, optional: true, required: false
  private _defaultCreator?: string; 
  public get defaultCreator() {
    return this.getStringAttribute('default_creator');
  }
  public set defaultCreator(value: string) {
    this._defaultCreator = value;
  }
  public resetDefaultCreator() {
    this._defaultCreator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCreatorInput() {
    return this._defaultCreator;
  }

  // delete_recording_after_days - computed: false, optional: true, required: false
  private _deleteRecordingAfterDays?: number; 
  public get deleteRecordingAfterDays() {
    return this.getNumberAttribute('delete_recording_after_days');
  }
  public set deleteRecordingAfterDays(value: number) {
    this._deleteRecordingAfterDays = value;
  }
  public resetDeleteRecordingAfterDays() {
    this._deleteRecordingAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecordingAfterDaysInput() {
    return this._deleteRecordingAfterDays;
  }

  // live_input_identifier - computed: false, optional: true, required: false
  private _liveInputIdentifier?: string; 
  public get liveInputIdentifier() {
    return this.getStringAttribute('live_input_identifier');
  }
  public set liveInputIdentifier(value: string) {
    this._liveInputIdentifier = value;
  }
  public resetLiveInputIdentifier() {
    this._liveInputIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveInputIdentifierInput() {
    return this._liveInputIdentifier;
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

  // recording - computed: true, optional: true, required: false
  private _recording = new StreamLiveInputRecordingOutputReference(this, "recording");
  public get recording() {
    return this._recording;
  }
  public putRecording(value: StreamLiveInputRecording) {
    this._recording.internalValue = value;
  }
  public resetRecording() {
    this._recording.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingInput() {
    return this._recording.internalValue;
  }

  // rtmps - computed: true, optional: false, required: false
  private _rtmps = new StreamLiveInputRtmpsOutputReference(this, "rtmps");
  public get rtmps() {
    return this._rtmps;
  }

  // rtmps_playback - computed: true, optional: false, required: false
  private _rtmpsPlayback = new StreamLiveInputRtmpsPlaybackOutputReference(this, "rtmps_playback");
  public get rtmpsPlayback() {
    return this._rtmpsPlayback;
  }

  // srt - computed: true, optional: false, required: false
  private _srt = new StreamLiveInputSrtOutputReference(this, "srt");
  public get srt() {
    return this._srt;
  }

  // srt_playback - computed: true, optional: false, required: false
  private _srtPlayback = new StreamLiveInputSrtPlaybackOutputReference(this, "srt_playback");
  public get srtPlayback() {
    return this._srtPlayback;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // web_rtc - computed: true, optional: false, required: false
  private _webRtc = new StreamLiveInputWebRtcOutputReference(this, "web_rtc");
  public get webRtc() {
    return this._webRtc;
  }

  // web_rtc_playback - computed: true, optional: false, required: false
  private _webRtcPlayback = new StreamLiveInputWebRtcPlaybackOutputReference(this, "web_rtc_playback");
  public get webRtcPlayback() {
    return this._webRtcPlayback;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      default_creator: cdktf.stringToTerraform(this._defaultCreator),
      delete_recording_after_days: cdktf.numberToTerraform(this._deleteRecordingAfterDays),
      live_input_identifier: cdktf.stringToTerraform(this._liveInputIdentifier),
      meta: cdktf.stringToTerraform(this._meta),
      recording: streamLiveInputRecordingToTerraform(this._recording.internalValue),
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
      default_creator: {
        value: cdktf.stringToHclTerraform(this._defaultCreator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_recording_after_days: {
        value: cdktf.numberToHclTerraform(this._deleteRecordingAfterDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      live_input_identifier: {
        value: cdktf.stringToHclTerraform(this._liveInputIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: cdktf.stringToHclTerraform(this._meta),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording: {
        value: streamLiveInputRecordingToHclTerraform(this._recording.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamLiveInputRecording",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
