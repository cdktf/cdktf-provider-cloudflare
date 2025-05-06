// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareStreamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#account_id DataCloudflareStreams#account_id}
  */
  readonly accountId: string;
  /**
  * Lists videos in ascending order of creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#asc DataCloudflareStreams#asc}
  */
  readonly asc?: boolean | cdktf.IResolvable;
  /**
  * A user-defined identifier for the media creator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#creator DataCloudflareStreams#creator}
  */
  readonly creator?: string;
  /**
  * Lists videos created before the specified date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#end DataCloudflareStreams#end}
  */
  readonly end?: string;
  /**
  * Includes the total number of videos associated with the submitted query parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#include_counts DataCloudflareStreams#include_counts}
  */
  readonly includeCounts?: boolean | cdktf.IResolvable;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#max_items DataCloudflareStreams#max_items}
  */
  readonly maxItems?: number;
  /**
  * Searches over the `name` key in the `meta` field. This field can be set with or after the upload request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#search DataCloudflareStreams#search}
  */
  readonly search?: string;
  /**
  * Lists videos created after the specified date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#start DataCloudflareStreams#start}
  */
  readonly start?: string;
  /**
  * Specifies the processing status for all quality levels for a video.
  * Available values: "pendingupload", "downloading", "queued", "inprogress", "ready", "error".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#status DataCloudflareStreams#status}
  */
  readonly status?: string;
  /**
  * Specifies whether the video is `vod` or `live`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#type DataCloudflareStreams#type}
  */
  readonly type?: string;
}
export interface DataCloudflareStreamsResultInput {
}

export function dataCloudflareStreamsResultInputToTerraform(struct?: DataCloudflareStreamsResultInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareStreamsResultInputToHclTerraform(struct?: DataCloudflareStreamsResultInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareStreamsResultInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareStreamsResultInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareStreamsResultInput | undefined) {
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
export interface DataCloudflareStreamsResultPlayback {
}

export function dataCloudflareStreamsResultPlaybackToTerraform(struct?: DataCloudflareStreamsResultPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareStreamsResultPlaybackToHclTerraform(struct?: DataCloudflareStreamsResultPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareStreamsResultPlaybackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareStreamsResultPlayback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareStreamsResultPlayback | undefined) {
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
export interface DataCloudflareStreamsResultStatus {
}

export function dataCloudflareStreamsResultStatusToTerraform(struct?: DataCloudflareStreamsResultStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareStreamsResultStatusToHclTerraform(struct?: DataCloudflareStreamsResultStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareStreamsResultStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareStreamsResultStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareStreamsResultStatus | undefined) {
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
export interface DataCloudflareStreamsResultWatermark {
}

export function dataCloudflareStreamsResultWatermarkToTerraform(struct?: DataCloudflareStreamsResultWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareStreamsResultWatermarkToHclTerraform(struct?: DataCloudflareStreamsResultWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareStreamsResultWatermarkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareStreamsResultWatermark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareStreamsResultWatermark | undefined) {
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
export interface DataCloudflareStreamsResult {
}

export function dataCloudflareStreamsResultToTerraform(struct?: DataCloudflareStreamsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareStreamsResultToHclTerraform(struct?: DataCloudflareStreamsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareStreamsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareStreamsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareStreamsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // input - computed: true, optional: false, required: false
  private _input = new DataCloudflareStreamsResultInputOutputReference(this, "input");
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
  private _playback = new DataCloudflareStreamsResultPlaybackOutputReference(this, "playback");
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
  private _status = new DataCloudflareStreamsResultStatusOutputReference(this, "status");
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
  private _watermark = new DataCloudflareStreamsResultWatermarkOutputReference(this, "watermark");
  public get watermark() {
    return this._watermark;
  }
}

export class DataCloudflareStreamsResultList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareStreamsResultOutputReference {
    return new DataCloudflareStreamsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams cloudflare_streams}
*/
export class DataCloudflareStreams extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_streams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareStreams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareStreams to import
  * @param importFromId The id of the existing DataCloudflareStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareStreams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_streams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/streams cloudflare_streams} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareStreamsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareStreamsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_streams',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.4.0',
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
    this._asc = config.asc;
    this._creator = config.creator;
    this._end = config.end;
    this._includeCounts = config.includeCounts;
    this._maxItems = config.maxItems;
    this._search = config.search;
    this._start = config.start;
    this._status = config.status;
    this._type = config.type;
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

  // asc - computed: true, optional: true, required: false
  private _asc?: boolean | cdktf.IResolvable; 
  public get asc() {
    return this.getBooleanAttribute('asc');
  }
  public set asc(value: boolean | cdktf.IResolvable) {
    this._asc = value;
  }
  public resetAsc() {
    this._asc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascInput() {
    return this._asc;
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

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // include_counts - computed: true, optional: true, required: false
  private _includeCounts?: boolean | cdktf.IResolvable; 
  public get includeCounts() {
    return this.getBooleanAttribute('include_counts');
  }
  public set includeCounts(value: boolean | cdktf.IResolvable) {
    this._includeCounts = value;
  }
  public resetIncludeCounts() {
    this._includeCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCountsInput() {
    return this._includeCounts;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareStreamsResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      asc: cdktf.booleanToTerraform(this._asc),
      creator: cdktf.stringToTerraform(this._creator),
      end: cdktf.stringToTerraform(this._end),
      include_counts: cdktf.booleanToTerraform(this._includeCounts),
      max_items: cdktf.numberToTerraform(this._maxItems),
      search: cdktf.stringToTerraform(this._search),
      start: cdktf.stringToTerraform(this._start),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
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
      asc: {
        value: cdktf.booleanToHclTerraform(this._asc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      creator: {
        value: cdktf.stringToHclTerraform(this._creator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end: {
        value: cdktf.stringToHclTerraform(this._end),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_counts: {
        value: cdktf.booleanToHclTerraform(this._includeCounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktf.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
