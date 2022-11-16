// https://www.terraform.io/docs/providers/cloudflare/r/waf_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}
  */
  readonly groups?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}
  */
  readonly rewriteAction?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}
  */
  readonly rules?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}
  */
  readonly urls: string[];
  /**
  * The zone identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#zone_id WafOverride#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override cloudflare_waf_override}
*/
export class WafOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waf_override";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override cloudflare_waf_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: WafOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_override',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.28.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._groups = config.groups;
    this._id = config.id;
    this._paused = config.paused;
    this._priority = config.priority;
    this._rewriteAction = config.rewriteAction;
    this._rules = config.rules;
    this._urls = config.urls;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // groups - computed: false, optional: true, required: false
  private _groups?: { [key: string]: string }; 
  public get groups() {
    return this.getStringMapAttribute('groups');
  }
  public set groups(value: { [key: string]: string }) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // override_id - computed: true, optional: false, required: false
  public get overrideId() {
    return this.getStringAttribute('override_id');
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rewrite_action - computed: false, optional: true, required: false
  private _rewriteAction?: { [key: string]: string }; 
  public get rewriteAction() {
    return this.getStringMapAttribute('rewrite_action');
  }
  public set rewriteAction(value: { [key: string]: string }) {
    this._rewriteAction = value;
  }
  public resetRewriteAction() {
    this._rewriteAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteActionInput() {
    return this._rewriteAction;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: { [key: string]: string }; 
  public get rules() {
    return this.getStringMapAttribute('rules');
  }
  public set rules(value: { [key: string]: string }) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // urls - computed: false, optional: false, required: true
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
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
      description: cdktf.stringToTerraform(this._description),
      groups: cdktf.hashMapper(cdktf.stringToTerraform)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      paused: cdktf.booleanToTerraform(this._paused),
      priority: cdktf.numberToTerraform(this._priority),
      rewrite_action: cdktf.hashMapper(cdktf.stringToTerraform)(this._rewriteAction),
      rules: cdktf.hashMapper(cdktf.stringToTerraform)(this._rules),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
