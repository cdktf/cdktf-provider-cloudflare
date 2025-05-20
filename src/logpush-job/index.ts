// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogpushJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#account_id LogpushJob#account_id}
  */
  readonly accountId?: string;
  /**
  * Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).
  * Available values: "access_requests", "audit_logs", "biso_user_actions", "casb_findings", "device_posture_results", "dlp_forensic_copies", "dns_firewall_logs", "dns_logs", "email_security_alerts", "firewall_events", "gateway_dns", "gateway_http", "gateway_network", "http_requests", "magic_ids_detections", "nel_reports", "network_analytics_logs", "page_shield_events", "sinkhole_http_logs", "spectrum_events", "ssh_logs", "workers_trace_events", "zaraz_events", "zero_trust_network_sessions".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#dataset LogpushJob#dataset}
  */
  readonly dataset?: string;
  /**
  * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}
  */
  readonly destinationConf: string;
  /**
  * Flag that indicates if the job is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#enabled LogpushJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/filters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#filter LogpushJob#filter}
  */
  readonly filter?: string;
  /**
  * This field is deprecated. Please use `max_upload_*` parameters instead. The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high sends your logs in larger quantities of smaller files. Setting frequency to low sends logs in smaller quantities of larger files.
  * Available values: "high", "low".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#frequency LogpushJob#frequency}
  */
  readonly frequency?: string;
  /**
  * The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs. Currently, Edge Log Delivery is only supported for the `http_requests` dataset.
  * Available values: "edge".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#kind LogpushJob#kind}
  */
  readonly kind?: string;
  /**
  * This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the url (full url or just the query string) of your call here, and logpush will keep on making this call for you, setting start and end times appropriately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}
  */
  readonly logpullOptions?: string;
  /**
  * The maximum uncompressed file size of a batch of logs. This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means that log files may be much smaller than this batch size. This parameter is not available for jobs with `edge` as its kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}
  */
  readonly maxUploadBytes?: number;
  /**
  * The maximum interval in seconds for log batches. This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log batches; this means that log files may be sent in shorter intervals than this. This parameter is only used for jobs with `edge` as its kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}
  */
  readonly maxUploadIntervalSeconds?: number;
  /**
  * The maximum number of log lines per batch. This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch; this means that log files may contain many fewer lines than this. This parameter is not available for jobs with `edge` as its kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}
  */
  readonly maxUploadRecords?: number;
  /**
  * Optional human readable job name. Not unique. Cloudflare suggests that you set this to a meaningful string, like the domain name, to make it easier to identify your job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#name LogpushJob#name}
  */
  readonly name?: string;
  /**
  * The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#output_options LogpushJob#output_options}
  */
  readonly outputOptions?: LogpushJobOutputOptions;
  /**
  * Ownership challenge token to prove destination ownership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}
  */
  readonly ownershipChallenge?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#zone_id LogpushJob#zone_id}
  */
  readonly zoneId?: string;
}
export interface LogpushJobOutputOptions {
  /**
  * String to be prepended before each batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#batch_prefix LogpushJob#batch_prefix}
  */
  readonly batchPrefix?: string;
  /**
  * String to be appended after each batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#batch_suffix LogpushJob#batch_suffix}
  */
  readonly batchSuffix?: string;
  /**
  * If set to true, will cause all occurrences of `${` in the generated files to be replaced with `x{`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#cve_2021_44228 LogpushJob#cve_2021_44228}
  */
  readonly cve202144228?: boolean | cdktf.IResolvable;
  /**
  * String to join fields. This field be ignored when `record_template` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#field_delimiter LogpushJob#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * List of field names to be included in the Logpush output. For the moment, there is no option to add all fields at once, so you must specify all the fields names you are interested in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#field_names LogpushJob#field_names}
  */
  readonly fieldNames?: string[];
  /**
  * Specifies the output type, such as `ndjson` or `csv`. This sets default values for the rest of the settings, depending on the chosen output type. Some formatting rules, like string quoting, are different between output types.
  * Available values: "ndjson", "csv".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#output_type LogpushJob#output_type}
  */
  readonly outputType?: string;
  /**
  * String to be inserted in-between the records as separator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#record_delimiter LogpushJob#record_delimiter}
  */
  readonly recordDelimiter?: string;
  /**
  * String to be prepended before each record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#record_prefix LogpushJob#record_prefix}
  */
  readonly recordPrefix?: string;
  /**
  * String to be appended after each record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#record_suffix LogpushJob#record_suffix}
  */
  readonly recordSuffix?: string;
  /**
  * String to use as template for each record instead of the default json key value mapping. All fields used in the template must be present in `field_names` as well, otherwise they will end up as null. Format as a Go `text/template` without any standard functions, like conditionals, loops, sub-templates, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#record_template LogpushJob#record_template}
  */
  readonly recordTemplate?: string;
  /**
  * Floating number to specify sampling rate. Sampling is applied on top of filtering, and regardless of the current `sample_interval` of the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#sample_rate LogpushJob#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * String to specify the format for timestamps, such as `unixnano`, `unix`, or `rfc3339`.
  * Available values: "unixnano", "unix", "rfc3339".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#timestamp_format LogpushJob#timestamp_format}
  */
  readonly timestampFormat?: string;
}

export function logpushJobOutputOptionsToTerraform(struct?: LogpushJobOutputOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_prefix: cdktf.stringToTerraform(struct!.batchPrefix),
    batch_suffix: cdktf.stringToTerraform(struct!.batchSuffix),
    cve_2021_44228: cdktf.booleanToTerraform(struct!.cve202144228),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldNames),
    output_type: cdktf.stringToTerraform(struct!.outputType),
    record_delimiter: cdktf.stringToTerraform(struct!.recordDelimiter),
    record_prefix: cdktf.stringToTerraform(struct!.recordPrefix),
    record_suffix: cdktf.stringToTerraform(struct!.recordSuffix),
    record_template: cdktf.stringToTerraform(struct!.recordTemplate),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
  }
}


export function logpushJobOutputOptionsToHclTerraform(struct?: LogpushJobOutputOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_prefix: {
      value: cdktf.stringToHclTerraform(struct!.batchPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_suffix: {
      value: cdktf.stringToHclTerraform(struct!.batchSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cve_2021_44228: {
      value: cdktf.booleanToHclTerraform(struct!.cve202144228),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    output_type: {
      value: cdktf.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.recordDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_prefix: {
      value: cdktf.stringToHclTerraform(struct!.recordPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_suffix: {
      value: cdktf.stringToHclTerraform(struct!.recordSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_template: {
      value: cdktf.stringToHclTerraform(struct!.recordTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogpushJobOutputOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogpushJobOutputOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPrefix = this._batchPrefix;
    }
    if (this._batchSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSuffix = this._batchSuffix;
    }
    if (this._cve202144228 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cve202144228 = this._cve202144228;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._fieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNames = this._fieldNames;
    }
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._recordDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordDelimiter = this._recordDelimiter;
    }
    if (this._recordPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordPrefix = this._recordPrefix;
    }
    if (this._recordSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSuffix = this._recordSuffix;
    }
    if (this._recordTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTemplate = this._recordTemplate;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogpushJobOutputOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchPrefix = undefined;
      this._batchSuffix = undefined;
      this._cve202144228 = undefined;
      this._fieldDelimiter = undefined;
      this._fieldNames = undefined;
      this._outputType = undefined;
      this._recordDelimiter = undefined;
      this._recordPrefix = undefined;
      this._recordSuffix = undefined;
      this._recordTemplate = undefined;
      this._sampleRate = undefined;
      this._timestampFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchPrefix = value.batchPrefix;
      this._batchSuffix = value.batchSuffix;
      this._cve202144228 = value.cve202144228;
      this._fieldDelimiter = value.fieldDelimiter;
      this._fieldNames = value.fieldNames;
      this._outputType = value.outputType;
      this._recordDelimiter = value.recordDelimiter;
      this._recordPrefix = value.recordPrefix;
      this._recordSuffix = value.recordSuffix;
      this._recordTemplate = value.recordTemplate;
      this._sampleRate = value.sampleRate;
      this._timestampFormat = value.timestampFormat;
    }
  }

  // batch_prefix - computed: true, optional: true, required: false
  private _batchPrefix?: string; 
  public get batchPrefix() {
    return this.getStringAttribute('batch_prefix');
  }
  public set batchPrefix(value: string) {
    this._batchPrefix = value;
  }
  public resetBatchPrefix() {
    this._batchPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPrefixInput() {
    return this._batchPrefix;
  }

  // batch_suffix - computed: true, optional: true, required: false
  private _batchSuffix?: string; 
  public get batchSuffix() {
    return this.getStringAttribute('batch_suffix');
  }
  public set batchSuffix(value: string) {
    this._batchSuffix = value;
  }
  public resetBatchSuffix() {
    this._batchSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSuffixInput() {
    return this._batchSuffix;
  }

  // cve_2021_44228 - computed: true, optional: true, required: false
  private _cve202144228?: boolean | cdktf.IResolvable; 
  public get cve202144228() {
    return this.getBooleanAttribute('cve_2021_44228');
  }
  public set cve202144228(value: boolean | cdktf.IResolvable) {
    this._cve202144228 = value;
  }
  public resetCve202144228() {
    this._cve202144228 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cve202144228Input() {
    return this._cve202144228;
  }

  // field_delimiter - computed: true, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // field_names - computed: true, optional: true, required: false
  private _fieldNames?: string[]; 
  public get fieldNames() {
    return this.getListAttribute('field_names');
  }
  public set fieldNames(value: string[]) {
    this._fieldNames = value;
  }
  public resetFieldNames() {
    this._fieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNamesInput() {
    return this._fieldNames;
  }

  // output_type - computed: true, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // record_delimiter - computed: true, optional: true, required: false
  private _recordDelimiter?: string; 
  public get recordDelimiter() {
    return this.getStringAttribute('record_delimiter');
  }
  public set recordDelimiter(value: string) {
    this._recordDelimiter = value;
  }
  public resetRecordDelimiter() {
    this._recordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDelimiterInput() {
    return this._recordDelimiter;
  }

  // record_prefix - computed: true, optional: true, required: false
  private _recordPrefix?: string; 
  public get recordPrefix() {
    return this.getStringAttribute('record_prefix');
  }
  public set recordPrefix(value: string) {
    this._recordPrefix = value;
  }
  public resetRecordPrefix() {
    this._recordPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordPrefixInput() {
    return this._recordPrefix;
  }

  // record_suffix - computed: true, optional: true, required: false
  private _recordSuffix?: string; 
  public get recordSuffix() {
    return this.getStringAttribute('record_suffix');
  }
  public set recordSuffix(value: string) {
    this._recordSuffix = value;
  }
  public resetRecordSuffix() {
    this._recordSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSuffixInput() {
    return this._recordSuffix;
  }

  // record_template - computed: true, optional: true, required: false
  private _recordTemplate?: string; 
  public get recordTemplate() {
    return this.getStringAttribute('record_template');
  }
  public set recordTemplate(value: string) {
    this._recordTemplate = value;
  }
  public resetRecordTemplate() {
    this._recordTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTemplateInput() {
    return this._recordTemplate;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // timestamp_format - computed: true, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job cloudflare_logpush_job}
*/
export class LogpushJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_logpush_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogpushJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogpushJob to import
  * @param importFromId The id of the existing LogpushJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogpushJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_logpush_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/logpush_job cloudflare_logpush_job} Resource
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
        providerVersion: '5.5.0',
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
    this._dataset = config.dataset;
    this._destinationConf = config.destinationConf;
    this._enabled = config.enabled;
    this._filter = config.filter;
    this._frequency = config.frequency;
    this._kind = config.kind;
    this._logpullOptions = config.logpullOptions;
    this._maxUploadBytes = config.maxUploadBytes;
    this._maxUploadIntervalSeconds = config.maxUploadIntervalSeconds;
    this._maxUploadRecords = config.maxUploadRecords;
    this._name = config.name;
    this._outputOptions.internalValue = config.outputOptions;
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

  // dataset - computed: true, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
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

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // frequency - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // kind - computed: true, optional: true, required: false
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

  // last_complete - computed: true, optional: false, required: false
  public get lastComplete() {
    return this.getStringAttribute('last_complete');
  }

  // last_error - computed: true, optional: false, required: false
  public get lastError() {
    return this.getStringAttribute('last_error');
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

  // max_upload_interval_seconds - computed: true, optional: true, required: false
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

  // max_upload_records - computed: true, optional: true, required: false
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

  // output_options - computed: true, optional: true, required: false
  private _outputOptions = new LogpushJobOutputOptionsOutputReference(this, "output_options");
  public get outputOptions() {
    return this._outputOptions;
  }
  public putOutputOptions(value: LogpushJobOutputOptions) {
    this._outputOptions.internalValue = value;
  }
  public resetOutputOptions() {
    this._outputOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputOptionsInput() {
    return this._outputOptions.internalValue;
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
      kind: cdktf.stringToTerraform(this._kind),
      logpull_options: cdktf.stringToTerraform(this._logpullOptions),
      max_upload_bytes: cdktf.numberToTerraform(this._maxUploadBytes),
      max_upload_interval_seconds: cdktf.numberToTerraform(this._maxUploadIntervalSeconds),
      max_upload_records: cdktf.numberToTerraform(this._maxUploadRecords),
      name: cdktf.stringToTerraform(this._name),
      output_options: logpushJobOutputOptionsToTerraform(this._outputOptions.internalValue),
      ownership_challenge: cdktf.stringToTerraform(this._ownershipChallenge),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_conf: {
        value: cdktf.stringToHclTerraform(this._destinationConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logpull_options: {
        value: cdktf.stringToHclTerraform(this._logpullOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_upload_bytes: {
        value: cdktf.numberToHclTerraform(this._maxUploadBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_upload_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._maxUploadIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_upload_records: {
        value: cdktf.numberToHclTerraform(this._maxUploadRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_options: {
        value: logpushJobOutputOptionsToHclTerraform(this._outputOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogpushJobOutputOptions",
      },
      ownership_challenge: {
        value: cdktf.stringToHclTerraform(this._ownershipChallenge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
