// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_operation_schema_validation_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareApiShieldOperationSchemaValidationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_operation_schema_validation_settings#operation_id DataCloudflareApiShieldOperationSchemaValidationSettings#operation_id}
  */
  readonly operationId: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_operation_schema_validation_settings#zone_id DataCloudflareApiShieldOperationSchemaValidationSettings#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_operation_schema_validation_settings cloudflare_api_shield_operation_schema_validation_settings}
*/
export class DataCloudflareApiShieldOperationSchemaValidationSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_api_shield_operation_schema_validation_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareApiShieldOperationSchemaValidationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldOperationSchemaValidationSettings to import
  * @param importFromId The id of the existing DataCloudflareApiShieldOperationSchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_operation_schema_validation_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareApiShieldOperationSchemaValidationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_operation_schema_validation_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_operation_schema_validation_settings cloudflare_api_shield_operation_schema_validation_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareApiShieldOperationSchemaValidationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareApiShieldOperationSchemaValidationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_api_shield_operation_schema_validation_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.2.0',
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
    this._operationId = config.operationId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // mitigation_action - computed: true, optional: false, required: false
  public get mitigationAction() {
    return this.getStringAttribute('mitigation_action');
  }

  // operation_id - computed: false, optional: false, required: true
  private _operationId?: string; 
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }
  public set operationId(value: string) {
    this._operationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationIdInput() {
    return this._operationId;
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
      operation_id: cdktf.stringToTerraform(this._operationId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      operation_id: {
        value: cdktf.stringToHclTerraform(this._operationId),
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
