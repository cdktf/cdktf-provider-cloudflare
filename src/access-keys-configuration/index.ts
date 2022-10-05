// https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessKeysConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration#account_id AccessKeysConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration#id AccessKeysConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of days to trigger a rotation of the keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration#key_rotation_interval_days AccessKeysConfiguration#key_rotation_interval_days}
  */
  readonly keyRotationIntervalDays?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration cloudflare_access_keys_configuration}
*/
export class AccessKeysConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_keys_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration cloudflare_access_keys_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessKeysConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AccessKeysConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_keys_configuration',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.25.0',
        providerVersionConstraint: '~> 3.14'
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
    this._id = config.id;
    this._keyRotationIntervalDays = config.keyRotationIntervalDays;
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

  // key_rotation_interval_days - computed: true, optional: true, required: false
  private _keyRotationIntervalDays?: number; 
  public get keyRotationIntervalDays() {
    return this.getNumberAttribute('key_rotation_interval_days');
  }
  public set keyRotationIntervalDays(value: number) {
    this._keyRotationIntervalDays = value;
  }
  public resetKeyRotationIntervalDays() {
    this._keyRotationIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRotationIntervalDaysInput() {
    return this._keyRotationIntervalDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      key_rotation_interval_days: cdktf.numberToTerraform(this._keyRotationIntervalDays),
    };
  }
}
