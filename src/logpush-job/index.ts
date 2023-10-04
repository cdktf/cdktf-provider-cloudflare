// https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogpushJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#account_id LogpushJob#account_id}
  */
  readonly accountId?: string;
  /**
  * The kind of the dataset to use with the logpush job. Available values: `access_requests`, `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`, `workers_trace_events`, `device_posture_results`, `zero_trust_network_sessions`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#dataset LogpushJob#dataset}
  */
  readonly dataset: string;
  /**
  * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}
  */
  readonly destinationConf: string;
  /**
  * Whether to enable the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#enabled LogpushJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#filter LogpushJob#filter}
  */
  readonly filter?: string;
  /**
  * A higher frequency will result in logs being pushed on faster with smaller files. `low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#frequency LogpushJob#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#id LogpushJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#kind LogpushJob#kind}
  */
  readonly kind?: string;
  /**
  * Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}
  */
  readonly logpullOptions?: string;
  /**
  * The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}
  */
  readonly maxUploadBytes?: number;
  /**
  * The maximum interval in seconds for log batches. Value must be between 30 and 300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}
  */
  readonly maxUploadIntervalSeconds?: number;
  /**
  * The maximum number of log lines per batch. Value must be between 1000 and 1,000,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}
  */
  readonly maxUploadRecords?: number;
  /**
  * The name of the logpush job to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#name LogpushJob#name}
  */
  readonly name?: string;
  /**
  * Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}
  */
  readonly ownershipChallenge?: string;
  /**
  * The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#zone_id LogpushJob#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job cloudflare_logpush_job}
*/
export class LogpushJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_logpush_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job cloudflare_logpush_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogpushJobConfig
  */
  public constructor(scope: Construct, id: string, config: LogpushJobConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_logpush_job',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.16.0',
        providerVersionConstraint: '~> 4.3'
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
    this._dataset = config.dataset;
    this._destinationConf = config.destinationConf;
    this._enabled = config.enabled;
    this._filter = config.filter;
    this._frequency = config.frequency;
    this._id = config.id;
    this._kind = config.kind;
    this._logpullOptions = config.logpullOptions;
    this._maxUploadBytes = config.maxUploadBytes;
    this._maxUploadIntervalSeconds = config.maxUploadIntervalSeconds;
    this._maxUploadRecords = config.maxUploadRecords;
    this._name = config.name;
    this._ownershipChallenge = config.ownershipChallenge;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // destination_conf - computed: false, optional: false, required: true
  private _destinationConf?: string; 
  public get destinationConf() {
    return this.getStringAttribute('destination_conf');
  }
  public set destinationConf(value: string) {
    this._destinationConf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfInput() {
    return this._destinationConf;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // logpull_options - computed: false, optional: true, required: false
  private _logpullOptions?: string; 
  public get logpullOptions() {
    return this.getStringAttribute('logpull_options');
  }
  public set logpullOptions(value: string) {
    this._logpullOptions = value;
  }
  public resetLogpullOptions() {
    this._logpullOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logpullOptionsInput() {
    return this._logpullOptions;
  }

  // max_upload_bytes - computed: false, optional: true, required: false
  private _maxUploadBytes?: number; 
  public get maxUploadBytes() {
    return this.getNumberAttribute('max_upload_bytes');
  }
  public set maxUploadBytes(value: number) {
    this._maxUploadBytes = value;
  }
  public resetMaxUploadBytes() {
    this._maxUploadBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUploadBytesInput() {
    return this._maxUploadBytes;
  }

  // max_upload_interval_seconds - computed: false, optional: true, required: false
  private _maxUploadIntervalSeconds?: number; 
  public get maxUploadIntervalSeconds() {
    return this.getNumberAttribute('max_upload_interval_seconds');
  }
  public set maxUploadIntervalSeconds(value: number) {
    this._maxUploadIntervalSeconds = value;
  }
  public resetMaxUploadIntervalSeconds() {
    this._maxUploadIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUploadIntervalSecondsInput() {
    return this._maxUploadIntervalSeconds;
  }

  // max_upload_records - computed: false, optional: true, required: false
  private _maxUploadRecords?: number; 
  public get maxUploadRecords() {
    return this.getNumberAttribute('max_upload_records');
  }
  public set maxUploadRecords(value: number) {
    this._maxUploadRecords = value;
  }
  public resetMaxUploadRecords() {
    this._maxUploadRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUploadRecordsInput() {
    return this._maxUploadRecords;
  }

  // name - computed: false, optional: true, required: false
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

  // ownership_challenge - computed: false, optional: true, required: false
  private _ownershipChallenge?: string; 
  public get ownershipChallenge() {
    return this.getStringAttribute('ownership_challenge');
  }
  public set ownershipChallenge(value: string) {
    this._ownershipChallenge = value;
  }
  public resetOwnershipChallenge() {
    this._ownershipChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipChallengeInput() {
    return this._ownershipChallenge;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      dataset: cdktf.stringToTerraform(this._dataset),
      destination_conf: cdktf.stringToTerraform(this._destinationConf),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter: cdktf.stringToTerraform(this._filter),
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      logpull_options: cdktf.stringToTerraform(this._logpullOptions),
      max_upload_bytes: cdktf.numberToTerraform(this._maxUploadBytes),
      max_upload_interval_seconds: cdktf.numberToTerraform(this._maxUploadIntervalSeconds),
      max_upload_records: cdktf.numberToTerraform(this._maxUploadRecords),
      name: cdktf.stringToTerraform(this._name),
      ownership_challenge: cdktf.stringToTerraform(this._ownershipChallenge),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
