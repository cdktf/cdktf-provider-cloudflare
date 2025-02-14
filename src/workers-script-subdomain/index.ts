// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/workers_script_subdomain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkersScriptSubdomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/workers_script_subdomain#account_id WorkersScriptSubdomain#account_id}
  */
  readonly accountId: string;
  /**
  * Whether the Worker should be available on the workers.dev subdomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/workers_script_subdomain#enabled WorkersScriptSubdomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Whether the Worker's Preview URLs should be available on the workers.dev subdomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/workers_script_subdomain#previews_enabled WorkersScriptSubdomain#previews_enabled}
  */
  readonly previewsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the script, used in URLs and route configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/workers_script_subdomain#script_name WorkersScriptSubdomain#script_name}
  */
  readonly scriptName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/workers_script_subdomain cloudflare_workers_script_subdomain}
*/
export class WorkersScriptSubdomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_workers_script_subdomain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkersScriptSubdomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkersScriptSubdomain to import
  * @param importFromId The id of the existing WorkersScriptSubdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/workers_script_subdomain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkersScriptSubdomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_script_subdomain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/workers_script_subdomain cloudflare_workers_script_subdomain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkersScriptSubdomainConfig
  */
  public constructor(scope: Construct, id: string, config: WorkersScriptSubdomainConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_workers_script_subdomain',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
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
    this._enabled = config.enabled;
    this._previewsEnabled = config.previewsEnabled;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // previews_enabled - computed: false, optional: true, required: false
  private _previewsEnabled?: boolean | cdktf.IResolvable; 
  public get previewsEnabled() {
    return this.getBooleanAttribute('previews_enabled');
  }
  public set previewsEnabled(value: boolean | cdktf.IResolvable) {
    this._previewsEnabled = value;
  }
  public resetPreviewsEnabled() {
    this._previewsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewsEnabledInput() {
    return this._previewsEnabled;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      previews_enabled: cdktf.booleanToTerraform(this._previewsEnabled),
      script_name: cdktf.stringToTerraform(this._scriptName),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      previews_enabled: {
        value: cdktf.booleanToHclTerraform(this._previewsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      script_name: {
        value: cdktf.stringToHclTerraform(this._scriptName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
