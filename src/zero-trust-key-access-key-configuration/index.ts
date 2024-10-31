// https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_key_access_key_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustKeyAccessKeyConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_key_access_key_configuration#account_id ZeroTrustKeyAccessKeyConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_key_access_key_configuration#id ZeroTrustKeyAccessKeyConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of days to trigger a rotation of the keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_key_access_key_configuration#key_rotation_interval_days ZeroTrustKeyAccessKeyConfiguration#key_rotation_interval_days}
  */
  readonly keyRotationIntervalDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_key_access_key_configuration cloudflare_zero_trust_key_access_key_configuration}
*/
export class ZeroTrustKeyAccessKeyConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_key_access_key_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustKeyAccessKeyConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustKeyAccessKeyConfiguration to import
  * @param importFromId The id of the existing ZeroTrustKeyAccessKeyConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_key_access_key_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustKeyAccessKeyConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_key_access_key_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_key_access_key_configuration cloudflare_zero_trust_key_access_key_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustKeyAccessKeyConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustKeyAccessKeyConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_key_access_key_configuration',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.45.0',
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_rotation_interval_days: {
        value: cdktf.numberToHclTerraform(this._keyRotationIntervalDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
