// https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TurnstileWidgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}
  */
  readonly accountId: string;
  /**
  * If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}
  */
  readonly botFightMode?: boolean | cdktf.IResolvable;
  /**
  * Domains where the widget is deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}
  */
  readonly domains: string[];
  /**
  * The identifier of this resource. This is the site key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget#id TurnstileWidget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Widget Mode. Available values: `non-interactive`, `invisible`, `managed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}
  */
  readonly mode: string;
  /**
  * Human readable widget name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget#name TurnstileWidget#name}
  */
  readonly name: string;
  /**
  * Do not show any Cloudflare branding on the widget (Enterprise only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}
  */
  readonly offlabel?: boolean | cdktf.IResolvable;
  /**
  * Region where this widget can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget#region TurnstileWidget#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}
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
  * @param importFromId The id of the existing TurnstileWidget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TurnstileWidget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_turnstile_widget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/turnstile_widget cloudflare_turnstile_widget} Resource
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
        providerVersion: '4.31.0',
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
    this._botFightMode = config.botFightMode;
    this._domains = config.domains;
    this._id = config.id;
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

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bot_fight_mode: cdktf.booleanToTerraform(this._botFightMode),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      id: cdktf.stringToTerraform(this._id),
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
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
