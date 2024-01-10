// https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}
  */
  readonly autoUpdateModel?: boolean | cdktf.IResolvable;
  /**
  * Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#enable_js BotManagement#enable_js}
  */
  readonly enableJs?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Bot Fight Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}
  */
  readonly fightMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#id BotManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to optimize Super Bot Fight Mode protections for Wordpress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}
  */
  readonly optimizeWordpress?: boolean | cdktf.IResolvable;
  /**
  * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}
  */
  readonly sbfmDefinitelyAutomated?: string;
  /**
  * Super Bot Fight Mode (SBFM) action to take on likely automated requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}
  */
  readonly sbfmLikelyAutomated?: string;
  /**
  * Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if static resources on your application need bot protection. Note: Static resource protection can also result in legitimate traffic being blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}
  */
  readonly sbfmStaticResourceProtection?: boolean | cdktf.IResolvable;
  /**
  * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}
  */
  readonly sbfmVerifiedBots?: string;
  /**
  * Whether to disable tracking the highest bot score for a session in the Bot Management cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}
  */
  readonly suppressSessionScore?: boolean | cdktf.IResolvable;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#zone_id BotManagement#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management cloudflare_bot_management}
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
  * @param importFromId The id of the existing BotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_bot_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/bot_management cloudflare_bot_management} Resource
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
        providerVersion: '4.22.0',
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
    this._autoUpdateModel = config.autoUpdateModel;
    this._enableJs = config.enableJs;
    this._fightMode = config.fightMode;
    this._id = config.id;
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

  // auto_update_model - computed: false, optional: true, required: false
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

  // enable_js - computed: false, optional: true, required: false
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

  // fight_mode - computed: false, optional: true, required: false
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

  // optimize_wordpress - computed: false, optional: true, required: false
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

  // sbfm_definitely_automated - computed: false, optional: true, required: false
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

  // sbfm_likely_automated - computed: false, optional: true, required: false
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

  // sbfm_static_resource_protection - computed: false, optional: true, required: false
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

  // sbfm_verified_bots - computed: false, optional: true, required: false
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

  // suppress_session_score - computed: false, optional: true, required: false
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
      auto_update_model: cdktf.booleanToTerraform(this._autoUpdateModel),
      enable_js: cdktf.booleanToTerraform(this._enableJs),
      fight_mode: cdktf.booleanToTerraform(this._fightMode),
      id: cdktf.stringToTerraform(this._id),
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
      auto_update_model: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateModel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
