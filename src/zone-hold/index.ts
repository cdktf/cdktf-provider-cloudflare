// https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/zone_hold
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneHoldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enablement status of the zone hold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/zone_hold#hold ZoneHold#hold}
  */
  readonly hold: boolean | cdktf.IResolvable;
  /**
  * The RFC3339 compatible timestamp when to automatically re-enable the zone hold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/zone_hold#hold_after ZoneHold#hold_after}
  */
  readonly holdAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/zone_hold#id ZoneHold#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to extend to block any subdomain of the given zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/zone_hold#include_subdomains ZoneHold#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * The zone identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/zone_hold#zone_id ZoneHold#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/zone_hold cloudflare_zone_hold}
*/
export class ZoneHold extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_hold";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneHold resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneHold to import
  * @param importFromId The id of the existing ZoneHold that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/zone_hold#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneHold to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_hold", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/zone_hold cloudflare_zone_hold} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneHoldConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneHoldConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_hold',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.18.0',
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
    this._hold = config.hold;
    this._holdAfter = config.holdAfter;
    this._id = config.id;
    this._includeSubdomains = config.includeSubdomains;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hold - computed: false, optional: false, required: true
  private _hold?: boolean | cdktf.IResolvable; 
  public get hold() {
    return this.getBooleanAttribute('hold');
  }
  public set hold(value: boolean | cdktf.IResolvable) {
    this._hold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get holdInput() {
    return this._hold;
  }

  // hold_after - computed: true, optional: true, required: false
  private _holdAfter?: string; 
  public get holdAfter() {
    return this.getStringAttribute('hold_after');
  }
  public set holdAfter(value: string) {
    this._holdAfter = value;
  }
  public resetHoldAfter() {
    this._holdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdAfterInput() {
    return this._holdAfter;
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

  // include_subdomains - computed: false, optional: true, required: false
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
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
      hold: cdktf.booleanToTerraform(this._hold),
      hold_after: cdktf.stringToTerraform(this._holdAfter),
      id: cdktf.stringToTerraform(this._id),
      include_subdomains: cdktf.booleanToTerraform(this._includeSubdomains),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
