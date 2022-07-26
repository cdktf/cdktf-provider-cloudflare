// https://www.terraform.io/docs/providers/cloudflare/r/waf_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `challenge`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#action_mode WafPackage#action_mode}
  */
  readonly actionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#id WafPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#package_id WafPackage#package_id}
  */
  readonly packageId: string;
  /**
  * Defaults to `high`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#sensitivity WafPackage#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * The zone identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#zone_id WafPackage#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package cloudflare_waf_package}
*/
export class WafPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waf_package";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package cloudflare_waf_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafPackageConfig
  */
  public constructor(scope: Construct, id: string, config: WafPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_package',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.19.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionMode = config.actionMode;
    this._id = config.id;
    this._packageId = config.packageId;
    this._sensitivity = config.sensitivity;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_mode - computed: false, optional: true, required: false
  private _actionMode?: string; 
  public get actionMode() {
    return this.getStringAttribute('action_mode');
  }
  public set actionMode(value: string) {
    this._actionMode = value;
  }
  public resetActionMode() {
    this._actionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionModeInput() {
    return this._actionMode;
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

  // package_id - computed: false, optional: false, required: true
  private _packageId?: string; 
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
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
      action_mode: cdktf.stringToTerraform(this._actionMode),
      id: cdktf.stringToTerraform(this._id),
      package_id: cdktf.stringToTerraform(this._packageId),
      sensitivity: cdktf.stringToTerraform(this._sensitivity),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
