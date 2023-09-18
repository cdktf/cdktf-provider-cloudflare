// https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID to manage the zone resource in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone#account_id Zone#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone#id Zone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to scan for DNS records on creation. Ignored after zone is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone#jump_start Zone#jump_start}
  */
  readonly jumpStart?: boolean | cdktf.IResolvable;
  /**
  * Whether this zone is paused (traffic bypasses Cloudflare). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone#paused Zone#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The name of the commercial plan to apply to the zone. Available values: `free`, `lite`, `pro`, `pro_plus`, `business`, `enterprise`, `partners_free`, `partners_pro`, `partners_business`, `partners_enterprise`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone#plan Zone#plan}
  */
  readonly plan?: string;
  /**
  * A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. Available values: `full`, `partial`. Defaults to `full`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone#type Zone#type}
  */
  readonly type?: string;
  /**
  * The DNS zone name which will be added. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone#zone Zone#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone cloudflare_zone}
*/
export class Zone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/zone cloudflare_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.14.0',
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
    this._jumpStart = config.jumpStart;
    this._paused = config.paused;
    this._plan = config.plan;
    this._type = config.type;
    this._zone = config.zone;
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

  // jump_start - computed: false, optional: true, required: false
  private _jumpStart?: boolean | cdktf.IResolvable; 
  public get jumpStart() {
    return this.getBooleanAttribute('jump_start');
  }
  public set jumpStart(value: boolean | cdktf.IResolvable) {
    this._jumpStart = value;
  }
  public resetJumpStart() {
    this._jumpStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumpStartInput() {
    return this._jumpStart;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.BooleanMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // plan - computed: true, optional: true, required: false
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // vanity_name_servers - computed: true, optional: false, required: false
  public get vanityNameServers() {
    return this.getListAttribute('vanity_name_servers');
  }

  // verification_key - computed: true, optional: false, required: false
  public get verificationKey() {
    return this.getStringAttribute('verification_key');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      jump_start: cdktf.booleanToTerraform(this._jumpStart),
      paused: cdktf.booleanToTerraform(this._paused),
      plan: cdktf.stringToTerraform(this._plan),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }
}
