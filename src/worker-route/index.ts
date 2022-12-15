// https://www.terraform.io/docs/providers/cloudflare/r/worker_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_route#id WorkerRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_route#pattern WorkerRoute#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_route#script_name WorkerRoute#script_name}
  */
  readonly scriptName?: string;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_route#zone_id WorkerRoute#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_route cloudflare_worker_route}
*/
export class WorkerRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_worker_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_route cloudflare_worker_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkerRouteConfig
  */
  public constructor(scope: Construct, id: string, config: WorkerRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_worker_route',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.30.0',
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
    this._id = config.id;
    this._pattern = config.pattern;
    this._scriptName = config.scriptName;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // script_name - computed: false, optional: true, required: false
  private _scriptName?: string; 
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  public resetScriptName() {
    this._scriptName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName;
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
      pattern: cdktf.stringToTerraform(this._pattern),
      script_name: cdktf.stringToTerraform(this._scriptName),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
