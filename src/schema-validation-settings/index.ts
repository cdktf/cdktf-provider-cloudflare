/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/schema_validation_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaValidationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default mitigation action used
  * Mitigation actions are as follows:
  * 
  *   - `"log"` - log request when request does not conform to schema
  *   - `"block"` - deny access to the site when request does not conform to schema
  *   - `"none"` - skip running schema validation
  * Available values: "none", "log", "block".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/schema_validation_settings#validation_default_mitigation_action SchemaValidationSettings#validation_default_mitigation_action}
  */
  readonly validationDefaultMitigationAction: string;
  /**
  * When set, this overrides both zone level and operation level mitigation actions.
  * 
  *   - `"none"` - skip running schema validation entirely for the request
  *   - `null` - clears any existing override
  * Available values: "none".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/schema_validation_settings#validation_override_mitigation_action SchemaValidationSettings#validation_override_mitigation_action}
  */
  readonly validationOverrideMitigationAction?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/schema_validation_settings#zone_id SchemaValidationSettings#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/schema_validation_settings cloudflare_schema_validation_settings}
*/
export class SchemaValidationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_schema_validation_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaValidationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaValidationSettings to import
  * @param importFromId The id of the existing SchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/schema_validation_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaValidationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_schema_validation_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/schema_validation_settings cloudflare_schema_validation_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaValidationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaValidationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_schema_validation_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._validationDefaultMitigationAction = config.validationDefaultMitigationAction;
    this._validationOverrideMitigationAction = config.validationOverrideMitigationAction;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // validation_default_mitigation_action - computed: false, optional: false, required: true
  private _validationDefaultMitigationAction?: string; 
  public get validationDefaultMitigationAction() {
    return this.getStringAttribute('validation_default_mitigation_action');
  }
  public set validationDefaultMitigationAction(value: string) {
    this._validationDefaultMitigationAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDefaultMitigationActionInput() {
    return this._validationDefaultMitigationAction;
  }

  // validation_override_mitigation_action - computed: false, optional: true, required: false
  private _validationOverrideMitigationAction?: string; 
  public get validationOverrideMitigationAction() {
    return this.getStringAttribute('validation_override_mitigation_action');
  }
  public set validationOverrideMitigationAction(value: string) {
    this._validationOverrideMitigationAction = value;
  }
  public resetValidationOverrideMitigationAction() {
    this._validationOverrideMitigationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationOverrideMitigationActionInput() {
    return this._validationOverrideMitigationAction;
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
      validation_default_mitigation_action: cdktf.stringToTerraform(this._validationDefaultMitigationAction),
      validation_override_mitigation_action: cdktf.stringToTerraform(this._validationOverrideMitigationAction),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      validation_default_mitigation_action: {
        value: cdktf.stringToHclTerraform(this._validationDefaultMitigationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_override_mitigation_action: {
        value: cdktf.stringToHclTerraform(this._validationOverrideMitigationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
