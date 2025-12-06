/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable rule to block AI Scrapers and Crawlers. Please note the value `only_on_ad_pages` is currently not available for Enterprise customers.
  * Available values: "block", "disabled", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#ai_bots_protection BotManagement#ai_bots_protection}
  */
  readonly aiBotsProtection?: string;
  /**
  * Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}
  */
  readonly autoUpdateModel?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#bm_cookie_enabled BotManagement#bm_cookie_enabled}
  */
  readonly bmCookieEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the Robots Access Control License variant to use.
  * Available values: "off", "policy_only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#cf_robots_variant BotManagement#cf_robots_variant}
  */
  readonly cfRobotsVariant?: string;
  /**
  * Enable rule to punish AI Scrapers and Crawlers via a link maze.
  * Available values: "enabled", "disabled".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#crawler_protection BotManagement#crawler_protection}
  */
  readonly crawlerProtection?: string;
  /**
  * Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#enable_js BotManagement#enable_js}
  */
  readonly enableJs?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Bot Fight Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}
  */
  readonly fightMode?: boolean | cdktf.IResolvable;
  /**
  * Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#is_robots_txt_managed BotManagement#is_robots_txt_managed}
  */
  readonly isRobotsTxtManaged?: boolean | cdktf.IResolvable;
  /**
  * Whether to optimize Super Bot Fight Mode protections for Wordpress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}
  */
  readonly optimizeWordpress?: boolean | cdktf.IResolvable;
  /**
  * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
  * Available values: "allow", "block", "managed_challenge".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}
  */
  readonly sbfmDefinitelyAutomated?: string;
  /**
  * Super Bot Fight Mode (SBFM) action to take on likely automated requests.
  * Available values: "allow", "block", "managed_challenge".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}
  */
  readonly sbfmLikelyAutomated?: string;
  /**
  * Super Bot Fight Mode (SBFM) to enable static resource protection.
  * Enable if static resources on your application need bot protection.
  * Note: Static resource protection can also result in legitimate traffic being blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}
  */
  readonly sbfmStaticResourceProtection?: boolean | cdktf.IResolvable;
  /**
  * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
  * Available values: "allow", "block".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}
  */
  readonly sbfmVerifiedBots?: string;
  /**
  * Whether to disable tracking the highest bot score for a session in the Bot Management cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}
  */
  readonly suppressSessionScore?: boolean | cdktf.IResolvable;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#zone_id BotManagement#zone_id}
  */
  readonly zoneId: string;
}
export interface BotManagementStaleZoneConfiguration {
}

export function botManagementStaleZoneConfigurationToTerraform(struct?: BotManagementStaleZoneConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function botManagementStaleZoneConfigurationToHclTerraform(struct?: BotManagementStaleZoneConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BotManagementStaleZoneConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BotManagementStaleZoneConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotManagementStaleZoneConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fight_mode - computed: true, optional: false, required: false
  public get fightMode() {
    return this.getBooleanAttribute('fight_mode');
  }

  // optimize_wordpress - computed: true, optional: false, required: false
  public get optimizeWordpress() {
    return this.getBooleanAttribute('optimize_wordpress');
  }

  // sbfm_definitely_automated - computed: true, optional: false, required: false
  public get sbfmDefinitelyAutomated() {
    return this.getStringAttribute('sbfm_definitely_automated');
  }

  // sbfm_likely_automated - computed: true, optional: false, required: false
  public get sbfmLikelyAutomated() {
    return this.getStringAttribute('sbfm_likely_automated');
  }

  // sbfm_static_resource_protection - computed: true, optional: false, required: false
  public get sbfmStaticResourceProtection() {
    return this.getStringAttribute('sbfm_static_resource_protection');
  }

  // sbfm_verified_bots - computed: true, optional: false, required: false
  public get sbfmVerifiedBots() {
    return this.getStringAttribute('sbfm_verified_bots');
  }

  // suppress_session_score - computed: true, optional: false, required: false
  public get suppressSessionScore() {
    return this.getBooleanAttribute('suppress_session_score');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management cloudflare_bot_management}
*/
export class BotManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_bot_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotManagement to import
  * @param importFromId The id of the existing BotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_bot_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/bot_management cloudflare_bot_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotManagementConfig
  */
  public constructor(scope: Construct, id: string, config: BotManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_bot_management',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
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
    this._aiBotsProtection = config.aiBotsProtection;
    this._autoUpdateModel = config.autoUpdateModel;
    this._bmCookieEnabled = config.bmCookieEnabled;
    this._cfRobotsVariant = config.cfRobotsVariant;
    this._crawlerProtection = config.crawlerProtection;
    this._enableJs = config.enableJs;
    this._fightMode = config.fightMode;
    this._isRobotsTxtManaged = config.isRobotsTxtManaged;
    this._optimizeWordpress = config.optimizeWordpress;
    this._sbfmDefinitelyAutomated = config.sbfmDefinitelyAutomated;
    this._sbfmLikelyAutomated = config.sbfmLikelyAutomated;
    this._sbfmStaticResourceProtection = config.sbfmStaticResourceProtection;
    this._sbfmVerifiedBots = config.sbfmVerifiedBots;
    this._suppressSessionScore = config.suppressSessionScore;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_bots_protection - computed: true, optional: true, required: false
  private _aiBotsProtection?: string; 
  public get aiBotsProtection() {
    return this.getStringAttribute('ai_bots_protection');
  }
  public set aiBotsProtection(value: string) {
    this._aiBotsProtection = value;
  }
  public resetAiBotsProtection() {
    this._aiBotsProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiBotsProtectionInput() {
    return this._aiBotsProtection;
  }

  // auto_update_model - computed: true, optional: true, required: false
  private _autoUpdateModel?: boolean | cdktf.IResolvable; 
  public get autoUpdateModel() {
    return this.getBooleanAttribute('auto_update_model');
  }
  public set autoUpdateModel(value: boolean | cdktf.IResolvable) {
    this._autoUpdateModel = value;
  }
  public resetAutoUpdateModel() {
    this._autoUpdateModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateModelInput() {
    return this._autoUpdateModel;
  }

  // bm_cookie_enabled - computed: true, optional: true, required: false
  private _bmCookieEnabled?: boolean | cdktf.IResolvable; 
  public get bmCookieEnabled() {
    return this.getBooleanAttribute('bm_cookie_enabled');
  }
  public set bmCookieEnabled(value: boolean | cdktf.IResolvable) {
    this._bmCookieEnabled = value;
  }
  public resetBmCookieEnabled() {
    this._bmCookieEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmCookieEnabledInput() {
    return this._bmCookieEnabled;
  }

  // cf_robots_variant - computed: true, optional: true, required: false
  private _cfRobotsVariant?: string; 
  public get cfRobotsVariant() {
    return this.getStringAttribute('cf_robots_variant');
  }
  public set cfRobotsVariant(value: string) {
    this._cfRobotsVariant = value;
  }
  public resetCfRobotsVariant() {
    this._cfRobotsVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfRobotsVariantInput() {
    return this._cfRobotsVariant;
  }

  // crawler_protection - computed: true, optional: true, required: false
  private _crawlerProtection?: string; 
  public get crawlerProtection() {
    return this.getStringAttribute('crawler_protection');
  }
  public set crawlerProtection(value: string) {
    this._crawlerProtection = value;
  }
  public resetCrawlerProtection() {
    this._crawlerProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerProtectionInput() {
    return this._crawlerProtection;
  }

  // enable_js - computed: true, optional: true, required: false
  private _enableJs?: boolean | cdktf.IResolvable; 
  public get enableJs() {
    return this.getBooleanAttribute('enable_js');
  }
  public set enableJs(value: boolean | cdktf.IResolvable) {
    this._enableJs = value;
  }
  public resetEnableJs() {
    this._enableJs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJsInput() {
    return this._enableJs;
  }

  // fight_mode - computed: true, optional: true, required: false
  private _fightMode?: boolean | cdktf.IResolvable; 
  public get fightMode() {
    return this.getBooleanAttribute('fight_mode');
  }
  public set fightMode(value: boolean | cdktf.IResolvable) {
    this._fightMode = value;
  }
  public resetFightMode() {
    this._fightMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fightModeInput() {
    return this._fightMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_robots_txt_managed - computed: true, optional: true, required: false
  private _isRobotsTxtManaged?: boolean | cdktf.IResolvable; 
  public get isRobotsTxtManaged() {
    return this.getBooleanAttribute('is_robots_txt_managed');
  }
  public set isRobotsTxtManaged(value: boolean | cdktf.IResolvable) {
    this._isRobotsTxtManaged = value;
  }
  public resetIsRobotsTxtManaged() {
    this._isRobotsTxtManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRobotsTxtManagedInput() {
    return this._isRobotsTxtManaged;
  }

  // optimize_wordpress - computed: true, optional: true, required: false
  private _optimizeWordpress?: boolean | cdktf.IResolvable; 
  public get optimizeWordpress() {
    return this.getBooleanAttribute('optimize_wordpress');
  }
  public set optimizeWordpress(value: boolean | cdktf.IResolvable) {
    this._optimizeWordpress = value;
  }
  public resetOptimizeWordpress() {
    this._optimizeWordpress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeWordpressInput() {
    return this._optimizeWordpress;
  }

  // sbfm_definitely_automated - computed: true, optional: true, required: false
  private _sbfmDefinitelyAutomated?: string; 
  public get sbfmDefinitelyAutomated() {
    return this.getStringAttribute('sbfm_definitely_automated');
  }
  public set sbfmDefinitelyAutomated(value: string) {
    this._sbfmDefinitelyAutomated = value;
  }
  public resetSbfmDefinitelyAutomated() {
    this._sbfmDefinitelyAutomated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbfmDefinitelyAutomatedInput() {
    return this._sbfmDefinitelyAutomated;
  }

  // sbfm_likely_automated - computed: true, optional: true, required: false
  private _sbfmLikelyAutomated?: string; 
  public get sbfmLikelyAutomated() {
    return this.getStringAttribute('sbfm_likely_automated');
  }
  public set sbfmLikelyAutomated(value: string) {
    this._sbfmLikelyAutomated = value;
  }
  public resetSbfmLikelyAutomated() {
    this._sbfmLikelyAutomated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbfmLikelyAutomatedInput() {
    return this._sbfmLikelyAutomated;
  }

  // sbfm_static_resource_protection - computed: true, optional: true, required: false
  private _sbfmStaticResourceProtection?: boolean | cdktf.IResolvable; 
  public get sbfmStaticResourceProtection() {
    return this.getBooleanAttribute('sbfm_static_resource_protection');
  }
  public set sbfmStaticResourceProtection(value: boolean | cdktf.IResolvable) {
    this._sbfmStaticResourceProtection = value;
  }
  public resetSbfmStaticResourceProtection() {
    this._sbfmStaticResourceProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbfmStaticResourceProtectionInput() {
    return this._sbfmStaticResourceProtection;
  }

  // sbfm_verified_bots - computed: true, optional: true, required: false
  private _sbfmVerifiedBots?: string; 
  public get sbfmVerifiedBots() {
    return this.getStringAttribute('sbfm_verified_bots');
  }
  public set sbfmVerifiedBots(value: string) {
    this._sbfmVerifiedBots = value;
  }
  public resetSbfmVerifiedBots() {
    this._sbfmVerifiedBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbfmVerifiedBotsInput() {
    return this._sbfmVerifiedBots;
  }

  // stale_zone_configuration - computed: true, optional: false, required: false
  private _staleZoneConfiguration = new BotManagementStaleZoneConfigurationOutputReference(this, "stale_zone_configuration");
  public get staleZoneConfiguration() {
    return this._staleZoneConfiguration;
  }

  // suppress_session_score - computed: true, optional: true, required: false
  private _suppressSessionScore?: boolean | cdktf.IResolvable; 
  public get suppressSessionScore() {
    return this.getBooleanAttribute('suppress_session_score');
  }
  public set suppressSessionScore(value: boolean | cdktf.IResolvable) {
    this._suppressSessionScore = value;
  }
  public resetSuppressSessionScore() {
    this._suppressSessionScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressSessionScoreInput() {
    return this._suppressSessionScore;
  }

  // using_latest_model - computed: true, optional: false, required: false
  public get usingLatestModel() {
    return this.getBooleanAttribute('using_latest_model');
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
      ai_bots_protection: cdktf.stringToTerraform(this._aiBotsProtection),
      auto_update_model: cdktf.booleanToTerraform(this._autoUpdateModel),
      bm_cookie_enabled: cdktf.booleanToTerraform(this._bmCookieEnabled),
      cf_robots_variant: cdktf.stringToTerraform(this._cfRobotsVariant),
      crawler_protection: cdktf.stringToTerraform(this._crawlerProtection),
      enable_js: cdktf.booleanToTerraform(this._enableJs),
      fight_mode: cdktf.booleanToTerraform(this._fightMode),
      is_robots_txt_managed: cdktf.booleanToTerraform(this._isRobotsTxtManaged),
      optimize_wordpress: cdktf.booleanToTerraform(this._optimizeWordpress),
      sbfm_definitely_automated: cdktf.stringToTerraform(this._sbfmDefinitelyAutomated),
      sbfm_likely_automated: cdktf.stringToTerraform(this._sbfmLikelyAutomated),
      sbfm_static_resource_protection: cdktf.booleanToTerraform(this._sbfmStaticResourceProtection),
      sbfm_verified_bots: cdktf.stringToTerraform(this._sbfmVerifiedBots),
      suppress_session_score: cdktf.booleanToTerraform(this._suppressSessionScore),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ai_bots_protection: {
        value: cdktf.stringToHclTerraform(this._aiBotsProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_update_model: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateModel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bm_cookie_enabled: {
        value: cdktf.booleanToHclTerraform(this._bmCookieEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cf_robots_variant: {
        value: cdktf.stringToHclTerraform(this._cfRobotsVariant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crawler_protection: {
        value: cdktf.stringToHclTerraform(this._crawlerProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_js: {
        value: cdktf.booleanToHclTerraform(this._enableJs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fight_mode: {
        value: cdktf.booleanToHclTerraform(this._fightMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_robots_txt_managed: {
        value: cdktf.booleanToHclTerraform(this._isRobotsTxtManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimize_wordpress: {
        value: cdktf.booleanToHclTerraform(this._optimizeWordpress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sbfm_definitely_automated: {
        value: cdktf.stringToHclTerraform(this._sbfmDefinitelyAutomated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sbfm_likely_automated: {
        value: cdktf.stringToHclTerraform(this._sbfmLikelyAutomated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sbfm_static_resource_protection: {
        value: cdktf.booleanToHclTerraform(this._sbfmStaticResourceProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sbfm_verified_bots: {
        value: cdktf.stringToHclTerraform(this._sbfmVerifiedBots),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_session_score: {
        value: cdktf.booleanToHclTerraform(this._suppressSessionScore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
