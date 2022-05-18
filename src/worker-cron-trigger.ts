// https://www.terraform.io/docs/providers/cloudflare/r/worker_cron_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerCronTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_cron_trigger#account_id WorkerCronTrigger#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_cron_trigger#schedules WorkerCronTrigger#schedules}
  */
  readonly schedules: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_cron_trigger#script_name WorkerCronTrigger#script_name}
  */
  readonly scriptName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_cron_trigger cloudflare_worker_cron_trigger}
*/
export class WorkerCronTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_worker_cron_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_cron_trigger cloudflare_worker_cron_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkerCronTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: WorkerCronTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_worker_cron_trigger',
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
    this._schedules = config.schedules;
    this._scriptName = config.scriptName;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedules - computed: false, optional: false, required: true
  private _schedules?: string[]; 
  public get schedules() {
    return cdktf.Fn.tolist(this.getListAttribute('schedules'));
  }
  public set schedules(value: string[]) {
    this._schedules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules;
  }

  // script_name - computed: false, optional: false, required: true
  private _scriptName?: string; 
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      schedules: cdktf.listMapper(cdktf.stringToTerraform)(this._schedules),
      script_name: cdktf.stringToTerraform(this._scriptName),
    };
  }
}
