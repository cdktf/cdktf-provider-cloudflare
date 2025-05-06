/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/logpush_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareLogpushJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/logpush_job#account_id DataCloudflareLogpushJob#account_id}
  */
  readonly accountId?: string;
  /**
  * Unique id of the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/logpush_job#job_id DataCloudflareLogpushJob#job_id}
  */
  readonly jobId?: number;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/logpush_job#zone_id DataCloudflareLogpushJob#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareLogpushJobOutputOptions {
}

export function dataCloudflareLogpushJobOutputOptionsToTerraform(struct?: DataCloudflareLogpushJobOutputOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLogpushJobOutputOptionsToHclTerraform(struct?: DataCloudflareLogpushJobOutputOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLogpushJobOutputOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLogpushJobOutputOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLogpushJobOutputOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_prefix - computed: true, optional: false, required: false
  public get batchPrefix() {
    return this.getStringAttribute('batch_prefix');
  }

  // batch_suffix - computed: true, optional: false, required: false
  public get batchSuffix() {
    return this.getStringAttribute('batch_suffix');
  }

  // cve_2021_44228 - computed: true, optional: false, required: false
  public get cve202144228() {
    return this.getBooleanAttribute('cve_2021_44228');
  }

  // field_delimiter - computed: true, optional: false, required: false
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }

  // field_names - computed: true, optional: false, required: false
  public get fieldNames() {
    return this.getListAttribute('field_names');
  }

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
  }

  // record_delimiter - computed: true, optional: false, required: false
  public get recordDelimiter() {
    return this.getStringAttribute('record_delimiter');
  }

  // record_prefix - computed: true, optional: false, required: false
  public get recordPrefix() {
    return this.getStringAttribute('record_prefix');
  }

  // record_suffix - computed: true, optional: false, required: false
  public get recordSuffix() {
    return this.getStringAttribute('record_suffix');
  }

  // record_template - computed: true, optional: false, required: false
  public get recordTemplate() {
    return this.getStringAttribute('record_template');
  }

  // sample_rate - computed: true, optional: false, required: false
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/logpush_job cloudflare_logpush_job}
*/
export class DataCloudflareLogpushJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_logpush_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareLogpushJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareLogpushJob to import
  * @param importFromId The id of the existing DataCloudflareLogpushJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/logpush_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareLogpushJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_logpush_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/logpush_job cloudflare_logpush_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareLogpushJobConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareLogpushJobConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_logpush_job',
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
    this._jobId = config.jobId;
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

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // destination_conf - computed: true, optional: false, required: false
  public get destinationConf() {
    return this.getStringAttribute('destination_conf');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // job_id - computed: false, optional: true, required: false
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // last_complete - computed: true, optional: false, required: false
  public get lastComplete() {
    return this.getStringAttribute('last_complete');
  }

  // last_error - computed: true, optional: false, required: false
  public get lastError() {
    return this.getStringAttribute('last_error');
  }

  // logpull_options - computed: true, optional: false, required: false
  public get logpullOptions() {
    return this.getStringAttribute('logpull_options');
  }

  // max_upload_bytes - computed: true, optional: false, required: false
  public get maxUploadBytes() {
    return this.getNumberAttribute('max_upload_bytes');
  }

  // max_upload_interval_seconds - computed: true, optional: false, required: false
  public get maxUploadIntervalSeconds() {
    return this.getNumberAttribute('max_upload_interval_seconds');
  }

  // max_upload_records - computed: true, optional: false, required: false
  public get maxUploadRecords() {
    return this.getNumberAttribute('max_upload_records');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_options - computed: true, optional: false, required: false
  private _outputOptions = new DataCloudflareLogpushJobOutputOptionsOutputReference(this, "output_options");
  public get outputOptions() {
    return this._outputOptions;
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
      job_id: cdktf.numberToTerraform(this._jobId),
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
      job_id: {
        value: cdktf.numberToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
