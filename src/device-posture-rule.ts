// https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicePostureRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#account_id DevicePostureRule#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#description DevicePostureRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#name DevicePostureRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#schedule DevicePostureRule#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#type DevicePostureRule#type}
  */
  readonly type: string;
  /**
  * input block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#input DevicePostureRule#input}
  */
  readonly input?: DevicePostureRuleInput[] | cdktf.IResolvable;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#match DevicePostureRule#match}
  */
  readonly match?: DevicePostureRuleMatch[] | cdktf.IResolvable;
}
export interface DevicePostureRuleInput {
  /**
  * The workspace one device compliance status.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#compliance_status DevicePostureRule#compliance_status}
  */
  readonly complianceStatus?: string;
  /**
  * The workspace one connection id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#connection_id DevicePostureRule#connection_id}
  */
  readonly connectionId?: string;
  /**
  * The domain that the client must join.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#domain DevicePostureRule#domain}
  */
  readonly domain?: string;
  /**
  * True if the firewall must be enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#enabled DevicePostureRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Checks if the file should exist.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#exists DevicePostureRule#exists}
  */
  readonly exists?: boolean | cdktf.IResolvable;
  /**
  * The Teams List id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#id DevicePostureRule#id}
  */
  readonly id?: string;
  /**
  * The version comparison operator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#operator DevicePostureRule#operator}
  */
  readonly operator?: string;
  /**
  * The path to the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#path DevicePostureRule#path}
  */
  readonly path?: string;
  /**
  * True if all drives must be encrypted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#require_all DevicePostureRule#require_all}
  */
  readonly requireAll?: boolean | cdktf.IResolvable;
  /**
  * Checks if the application should be running
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#running DevicePostureRule#running}
  */
  readonly running?: boolean | cdktf.IResolvable;
  /**
  * The sha256 hash of the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#sha256 DevicePostureRule#sha256}
  */
  readonly sha256?: string;
  /**
  * The thumbprint of the file certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#thumbprint DevicePostureRule#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * The operating system semantic version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#version DevicePostureRule#version}
  */
  readonly version?: string;
}

export function devicePostureRuleInputToTerraform(struct?: DevicePostureRuleInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_status: cdktf.stringToTerraform(struct!.complianceStatus),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    domain: cdktf.stringToTerraform(struct!.domain),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exists: cdktf.booleanToTerraform(struct!.exists),
    id: cdktf.stringToTerraform(struct!.id),
    operator: cdktf.stringToTerraform(struct!.operator),
    path: cdktf.stringToTerraform(struct!.path),
    require_all: cdktf.booleanToTerraform(struct!.requireAll),
    running: cdktf.booleanToTerraform(struct!.running),
    sha256: cdktf.stringToTerraform(struct!.sha256),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface DevicePostureRuleMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule#platform DevicePostureRule#platform}
  */
  readonly platform?: string;
}

export function devicePostureRuleMatchToTerraform(struct?: DevicePostureRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform: cdktf.stringToTerraform(struct!.platform),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule cloudflare_device_posture_rule}
*/
export class DevicePostureRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_device_posture_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/device_posture_rule cloudflare_device_posture_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicePostureRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DevicePostureRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_device_posture_rule',
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
    this._description = config.description;
    this._name = config.name;
    this._schedule = config.schedule;
    this._type = config.type;
    this._input = config.input;
    this._match = config.match;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // input - computed: false, optional: true, required: false
  private _input?: DevicePostureRuleInput[] | cdktf.IResolvable; 
  public get input() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('input');
  }
  public set input(value: DevicePostureRuleInput[] | cdktf.IResolvable) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // match - computed: false, optional: true, required: false
  private _match?: DevicePostureRuleMatch[] | cdktf.IResolvable; 
  public get match() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match');
  }
  public set match(value: DevicePostureRuleMatch[] | cdktf.IResolvable) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      type: cdktf.stringToTerraform(this._type),
      input: cdktf.listMapper(devicePostureRuleInputToTerraform)(this._input),
      match: cdktf.listMapper(devicePostureRuleMatchToTerraform)(this._match),
    };
  }
}
