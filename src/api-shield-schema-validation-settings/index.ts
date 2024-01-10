/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/api_shield_schema_validation_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiShieldSchemaValidationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/api_shield_schema_validation_settings#id ApiShieldSchemaValidationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The default mitigation action used when there is no mitigation action defined on the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/api_shield_schema_validation_settings#validation_default_mitigation_action ApiShieldSchemaValidationSettings#validation_default_mitigation_action}
  */
  readonly validationDefaultMitigationAction: string;
  /**
  * When set, this overrides both zone level and operation level mitigation actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/api_shield_schema_validation_settings#validation_override_mitigation_action ApiShieldSchemaValidationSettings#validation_override_mitigation_action}
  */
  readonly validationOverrideMitigationAction?: string;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/api_shield_schema_validation_settings#zone_id ApiShieldSchemaValidationSettings#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings}
*/
export class ApiShieldSchemaValidationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_api_shield_schema_validation_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiShieldSchemaValidationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiShieldSchemaValidationSettings to import
  * @param importFromId The id of the existing ApiShieldSchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/api_shield_schema_validation_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiShieldSchemaValidationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_schema_validation_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiShieldSchemaValidationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiShieldSchemaValidationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_api_shield_schema_validation_settings',
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
    this._id = config.id;
    this._validationDefaultMitigationAction = config.validationDefaultMitigationAction;
    this._validationOverrideMitigationAction = config.validationOverrideMitigationAction;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      id: cdktf.stringToTerraform(this._id),
      validation_default_mitigation_action: cdktf.stringToTerraform(this._validationDefaultMitigationAction),
      validation_override_mitigation_action: cdktf.stringToTerraform(this._validationOverrideMitigationAction),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
