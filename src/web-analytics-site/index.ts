/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAnalyticsSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site#account_id WebAnalyticsSite#account_id}
  */
  readonly accountId: string;
  /**
  * If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site#auto_install WebAnalyticsSite#auto_install}
  */
  readonly autoInstall?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables RUM. This option can be used only when auto_install is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site#enabled WebAnalyticsSite#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The hostname to use for gray-clouded sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site#host WebAnalyticsSite#host}
  */
  readonly host?: string;
  /**
  * If enabled, the JavaScript snippet will not be injected for visitors from the EU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site#lite WebAnalyticsSite#lite}
  */
  readonly lite?: boolean | cdktf.IResolvable;
  /**
  * The zone identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site#zone_tag WebAnalyticsSite#zone_tag}
  */
  readonly zoneTag?: string;
}
export interface WebAnalyticsSiteRules {
}

export function webAnalyticsSiteRulesToTerraform(struct?: WebAnalyticsSiteRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function webAnalyticsSiteRulesToHclTerraform(struct?: WebAnalyticsSiteRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WebAnalyticsSiteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebAnalyticsSiteRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAnalyticsSiteRules | undefined) {
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

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inclusive - computed: true, optional: false, required: false
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }

  // is_paused - computed: true, optional: false, required: false
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class WebAnalyticsSiteRulesList extends cdktf.ComplexList {

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
  public get(index: number): WebAnalyticsSiteRulesOutputReference {
    return new WebAnalyticsSiteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebAnalyticsSiteRuleset {
}

export function webAnalyticsSiteRulesetToTerraform(struct?: WebAnalyticsSiteRuleset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function webAnalyticsSiteRulesetToHclTerraform(struct?: WebAnalyticsSiteRuleset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WebAnalyticsSiteRulesetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebAnalyticsSiteRuleset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAnalyticsSiteRuleset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }

  // zone_tag - computed: true, optional: false, required: false
  public get zoneTag() {
    return this.getStringAttribute('zone_tag');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site cloudflare_web_analytics_site}
*/
export class WebAnalyticsSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_web_analytics_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAnalyticsSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAnalyticsSite to import
  * @param importFromId The id of the existing WebAnalyticsSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAnalyticsSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/web_analytics_site cloudflare_web_analytics_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAnalyticsSiteConfig
  */
  public constructor(scope: Construct, id: string, config: WebAnalyticsSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_web_analytics_site',
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
    this._autoInstall = config.autoInstall;
    this._enabled = config.enabled;
    this._host = config.host;
    this._lite = config.lite;
    this._zoneTag = config.zoneTag;
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

  // auto_install - computed: false, optional: true, required: false
  private _autoInstall?: boolean | cdktf.IResolvable; 
  public get autoInstall() {
    return this.getBooleanAttribute('auto_install');
  }
  public set autoInstall(value: boolean | cdktf.IResolvable) {
    this._autoInstall = value;
  }
  public resetAutoInstall() {
    this._autoInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInstallInput() {
    return this._autoInstall;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lite - computed: false, optional: true, required: false
  private _lite?: boolean | cdktf.IResolvable; 
  public get lite() {
    return this.getBooleanAttribute('lite');
  }
  public set lite(value: boolean | cdktf.IResolvable) {
    this._lite = value;
  }
  public resetLite() {
    this._lite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liteInput() {
    return this._lite;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new WebAnalyticsSiteRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // ruleset - computed: true, optional: false, required: false
  private _ruleset = new WebAnalyticsSiteRulesetOutputReference(this, "ruleset");
  public get ruleset() {
    return this._ruleset;
  }

  // site_tag - computed: true, optional: false, required: false
  public get siteTag() {
    return this.getStringAttribute('site_tag');
  }

  // site_token - computed: true, optional: false, required: false
  public get siteToken() {
    return this.getStringAttribute('site_token');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // zone_tag - computed: false, optional: true, required: false
  private _zoneTag?: string; 
  public get zoneTag() {
    return this.getStringAttribute('zone_tag');
  }
  public set zoneTag(value: string) {
    this._zoneTag = value;
  }
  public resetZoneTag() {
    this._zoneTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTagInput() {
    return this._zoneTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      auto_install: cdktf.booleanToTerraform(this._autoInstall),
      enabled: cdktf.booleanToTerraform(this._enabled),
      host: cdktf.stringToTerraform(this._host),
      lite: cdktf.booleanToTerraform(this._lite),
      zone_tag: cdktf.stringToTerraform(this._zoneTag),
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
      auto_install: {
        value: cdktf.booleanToHclTerraform(this._autoInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lite: {
        value: cdktf.booleanToHclTerraform(this._lite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_tag: {
        value: cdktf.stringToHclTerraform(this._zoneTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
