// https://www.terraform.io/docs/providers/cloudflare/r/logpush_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogpushJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#account_id LogpushJob#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#dataset LogpushJob#dataset}
  */
  readonly dataset: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#destination_conf LogpushJob#destination_conf}
  */
  readonly destinationConf: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#enabled LogpushJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#id LogpushJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#logpull_options LogpushJob#logpull_options}
  */
  readonly logpullOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#name LogpushJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#ownership_challenge LogpushJob#ownership_challenge}
  */
  readonly ownershipChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#zone_id LogpushJob#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job cloudflare_logpush_job}
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
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job cloudflare_logpush_job} Resource
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._dataset = config.dataset;
    this._destinationConf = config.destinationConf;
    this._enabled = config.enabled;
    this._id = config.id;
    this._logpullOptions = config.logpullOptions;
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
      id: cdktf.stringToTerraform(this._id),
      logpull_options: cdktf.stringToTerraform(this._logpullOptions),
      name: cdktf.stringToTerraform(this._name),
      ownership_challenge: cdktf.stringToTerraform(this._ownershipChallenge),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
