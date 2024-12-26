/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAnalyticsRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#account_id WebAnalyticsRule#account_id}
  */
  readonly accountId: string;
  /**
  * The host to apply the rule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#id WebAnalyticsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the rule includes or excludes the matched traffic from being measured in Web Analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#inclusive WebAnalyticsRule#inclusive}
  */
  readonly inclusive: boolean | cdktf.IResolvable;
  /**
  * Whether the rule is paused or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#is_paused WebAnalyticsRule#is_paused}
  */
  readonly isPaused: boolean | cdktf.IResolvable;
  /**
  * A list of paths to apply the rule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}
  */
  readonly paths: string[];
  /**
  * The Web Analytics ruleset id. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#ruleset_id WebAnalyticsRule#ruleset_id}
  */
  readonly rulesetId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#timeouts WebAnalyticsRule#timeouts}
  */
  readonly timeouts?: WebAnalyticsRuleTimeouts;
}
export interface WebAnalyticsRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#create WebAnalyticsRule#create}
  */
  readonly create?: string;
}

export function webAnalyticsRuleTimeoutsToTerraform(struct?: WebAnalyticsRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function webAnalyticsRuleTimeoutsToHclTerraform(struct?: WebAnalyticsRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAnalyticsRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebAnalyticsRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAnalyticsRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule}
*/
export class WebAnalyticsRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_web_analytics_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAnalyticsRule to import
  * @param importFromId The id of the existing WebAnalyticsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAnalyticsRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAnalyticsRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WebAnalyticsRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_web_analytics_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.49.0',
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
    this._host = config.host;
    this._id = config.id;
    this._inclusive = config.inclusive;
    this._isPaused = config.isPaused;
    this._paths = config.paths;
    this._rulesetId = config.rulesetId;
    this._timeouts.internalValue = config.timeouts;
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // inclusive - computed: false, optional: false, required: true
  private _inclusive?: boolean | cdktf.IResolvable; 
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }
  public set inclusive(value: boolean | cdktf.IResolvable) {
    this._inclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveInput() {
    return this._inclusive;
  }

  // is_paused - computed: false, optional: false, required: true
  private _isPaused?: boolean | cdktf.IResolvable; 
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }
  public set isPaused(value: boolean | cdktf.IResolvable) {
    this._isPaused = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPausedInput() {
    return this._isPaused;
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // ruleset_id - computed: false, optional: false, required: true
  private _rulesetId?: string; 
  public get rulesetId() {
    return this.getStringAttribute('ruleset_id');
  }
  public set rulesetId(value: string) {
    this._rulesetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetIdInput() {
    return this._rulesetId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WebAnalyticsRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WebAnalyticsRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      inclusive: cdktf.booleanToTerraform(this._inclusive),
      is_paused: cdktf.booleanToTerraform(this._isPaused),
      paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._paths),
      ruleset_id: cdktf.stringToTerraform(this._rulesetId),
      timeouts: webAnalyticsRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inclusive: {
        value: cdktf.booleanToHclTerraform(this._inclusive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_paused: {
        value: cdktf.booleanToHclTerraform(this._isPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._paths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ruleset_id: {
        value: cdktf.stringToHclTerraform(this._rulesetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: webAnalyticsRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebAnalyticsRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
