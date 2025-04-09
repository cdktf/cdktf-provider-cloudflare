/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkersForPlatformsScriptSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#account_id WorkersForPlatformsScriptSecret#account_id}
  */
  readonly accountId: string;
  /**
  * Name of the Workers for Platforms dispatch namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#dispatch_namespace WorkersForPlatformsScriptSecret#dispatch_namespace}
  */
  readonly dispatchNamespace: string;
  /**
  * The name of this secret, this is what will be used to access it inside the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#name WorkersForPlatformsScriptSecret#name}
  */
  readonly name: string;
  /**
  * Name of the script, used in URLs and route configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#script_name WorkersForPlatformsScriptSecret#script_name}
  */
  readonly scriptName: string;
  /**
  * The value of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#text WorkersForPlatformsScriptSecret#text}
  */
  readonly text?: string;
  /**
  * The type of secret to put.
  * Available values: "secret_text".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#type WorkersForPlatformsScriptSecret#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret cloudflare_workers_for_platforms_script_secret}
*/
export class WorkersForPlatformsScriptSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_workers_for_platforms_script_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkersForPlatformsScriptSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkersForPlatformsScriptSecret to import
  * @param importFromId The id of the existing WorkersForPlatformsScriptSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkersForPlatformsScriptSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_for_platforms_script_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret cloudflare_workers_for_platforms_script_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkersForPlatformsScriptSecretConfig
  */
  public constructor(scope: Construct, id: string, config: WorkersForPlatformsScriptSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_workers_for_platforms_script_secret',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.3.0',
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
    this._dispatchNamespace = config.dispatchNamespace;
    this._name = config.name;
    this._scriptName = config.scriptName;
    this._text = config.text;
    this._type = config.type;
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

  // dispatch_namespace - computed: false, optional: false, required: true
  private _dispatchNamespace?: string; 
  public get dispatchNamespace() {
    return this.getStringAttribute('dispatch_namespace');
  }
  public set dispatchNamespace(value: string) {
    this._dispatchNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchNamespaceInput() {
    return this._dispatchNamespace;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      dispatch_namespace: cdktf.stringToTerraform(this._dispatchNamespace),
      name: cdktf.stringToTerraform(this._name),
      script_name: cdktf.stringToTerraform(this._scriptName),
      text: cdktf.stringToTerraform(this._text),
      type: cdktf.stringToTerraform(this._type),
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
      dispatch_namespace: {
        value: cdktf.stringToHclTerraform(this._dispatchNamespace),
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
      script_name: {
        value: cdktf.stringToHclTerraform(this._scriptName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
