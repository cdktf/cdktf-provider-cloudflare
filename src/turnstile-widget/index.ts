/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TurnstileWidgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}
  */
  readonly accountId: string;
  /**
  * If bot_fight_mode is set to `true`, Cloudflare issues computationally
  * expensive challenges in response to malicious bots (ENT only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}
  */
  readonly botFightMode?: boolean | cdktf.IResolvable;
  /**
  * If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance,
  * this setting can determine the clearance level to be set
  * Available values: "no_clearance", "jschallenge", "managed", "interactive".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#clearance_level TurnstileWidget#clearance_level}
  */
  readonly clearanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#domains TurnstileWidget#domains}
  */
  readonly domains: string[];
  /**
  * Return the Ephemeral ID in /siteverify (ENT only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#ephemeral_id TurnstileWidget#ephemeral_id}
  */
  readonly ephemeralId?: boolean | cdktf.IResolvable;
  /**
  * Widget Mode
  * Available values: "non-interactive", "invisible", "managed".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#mode TurnstileWidget#mode}
  */
  readonly mode: string;
  /**
  * Human readable widget name. Not unique. Cloudflare suggests that you
  * set this to a meaningful string to make it easier to identify your
  * widget, and where it is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#name TurnstileWidget#name}
  */
  readonly name: string;
  /**
  * Do not show any Cloudflare branding on the widget (ENT only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}
  */
  readonly offlabel?: boolean | cdktf.IResolvable;
  /**
  * Region where this widget can be used. This cannot be changed after creation.
  * Available values: "world", "china".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#region TurnstileWidget#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget cloudflare_turnstile_widget}
*/
export class TurnstileWidget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_turnstile_widget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TurnstileWidget to import
  * @param importFromId The id of the existing TurnstileWidget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TurnstileWidget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_turnstile_widget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget cloudflare_turnstile_widget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TurnstileWidgetConfig
  */
  public constructor(scope: Construct, id: string, config: TurnstileWidgetConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_turnstile_widget',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
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
    this._botFightMode = config.botFightMode;
    this._clearanceLevel = config.clearanceLevel;
    this._domains = config.domains;
    this._ephemeralId = config.ephemeralId;
    this._mode = config.mode;
    this._name = config.name;
    this._offlabel = config.offlabel;
    this._region = config.region;
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

  // bot_fight_mode - computed: true, optional: true, required: false
  private _botFightMode?: boolean | cdktf.IResolvable; 
  public get botFightMode() {
    return this.getBooleanAttribute('bot_fight_mode');
  }
  public set botFightMode(value: boolean | cdktf.IResolvable) {
    this._botFightMode = value;
  }
  public resetBotFightMode() {
    this._botFightMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botFightModeInput() {
    return this._botFightMode;
  }

  // clearance_level - computed: true, optional: true, required: false
  private _clearanceLevel?: string; 
  public get clearanceLevel() {
    return this.getStringAttribute('clearance_level');
  }
  public set clearanceLevel(value: string) {
    this._clearanceLevel = value;
  }
  public resetClearanceLevel() {
    this._clearanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearanceLevelInput() {
    return this._clearanceLevel;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // ephemeral_id - computed: true, optional: true, required: false
  private _ephemeralId?: boolean | cdktf.IResolvable; 
  public get ephemeralId() {
    return this.getBooleanAttribute('ephemeral_id');
  }
  public set ephemeralId(value: boolean | cdktf.IResolvable) {
    this._ephemeralId = value;
  }
  public resetEphemeralId() {
    this._ephemeralId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralIdInput() {
    return this._ephemeralId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // offlabel - computed: true, optional: true, required: false
  private _offlabel?: boolean | cdktf.IResolvable; 
  public get offlabel() {
    return this.getBooleanAttribute('offlabel');
  }
  public set offlabel(value: boolean | cdktf.IResolvable) {
    this._offlabel = value;
  }
  public resetOfflabel() {
    this._offlabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlabelInput() {
    return this._offlabel;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // sitekey - computed: true, optional: false, required: false
  public get sitekey() {
    return this.getStringAttribute('sitekey');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bot_fight_mode: cdktf.booleanToTerraform(this._botFightMode),
      clearance_level: cdktf.stringToTerraform(this._clearanceLevel),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      ephemeral_id: cdktf.booleanToTerraform(this._ephemeralId),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      offlabel: cdktf.booleanToTerraform(this._offlabel),
      region: cdktf.stringToTerraform(this._region),
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
      bot_fight_mode: {
        value: cdktf.booleanToHclTerraform(this._botFightMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clearance_level: {
        value: cdktf.stringToHclTerraform(this._clearanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ephemeral_id: {
        value: cdktf.booleanToHclTerraform(this._ephemeralId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offlabel: {
        value: cdktf.booleanToHclTerraform(this._offlabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
