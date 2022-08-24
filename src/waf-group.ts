// https://www.terraform.io/docs/providers/cloudflare/r/waf_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#group_id WafGroup#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#id WafGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `on`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#mode WafGroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#package_id WafGroup#package_id}
  */
  readonly packageId?: string;
  /**
  * The zone identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#zone_id WafGroup#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group cloudflare_waf_group}
*/
export class WafGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waf_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group cloudflare_waf_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafGroupConfig
  */
  public constructor(scope: Construct, id: string, config: WafGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_group',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.22.0',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._mode = config.mode;
    this._packageId = config.packageId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // package_id - computed: true, optional: true, required: false
  private _packageId?: string; 
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  public resetPackageId() {
    this._packageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId;
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
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      package_id: cdktf.stringToTerraform(this._packageId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
