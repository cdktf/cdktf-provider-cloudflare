// https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#check_regions LoadBalancerPool#check_regions}
  */
  readonly checkRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#description LoadBalancerPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#enabled LoadBalancerPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#latitude LoadBalancerPool#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#longitude LoadBalancerPool#longitude}
  */
  readonly longitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}
  */
  readonly minimumOrigins?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#monitor LoadBalancerPool#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#name LoadBalancerPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#notification_email LoadBalancerPool#notification_email}
  */
  readonly notificationEmail?: string;
  /**
  * load_shedding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}
  */
  readonly loadShedding?: LoadBalancerPoolLoadShedding[] | cdktf.IResolvable;
  /**
  * origin_steering block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}
  */
  readonly originSteering?: LoadBalancerPoolOriginSteering[] | cdktf.IResolvable;
  /**
  * origins block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#origins LoadBalancerPool#origins}
  */
  readonly origins: LoadBalancerPoolOrigins[] | cdktf.IResolvable;
}
export interface LoadBalancerPoolLoadShedding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#default_percent LoadBalancerPool#default_percent}
  */
  readonly defaultPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#default_policy LoadBalancerPool#default_policy}
  */
  readonly defaultPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#session_percent LoadBalancerPool#session_percent}
  */
  readonly sessionPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#session_policy LoadBalancerPool#session_policy}
  */
  readonly sessionPolicy?: string;
}

export function loadBalancerPoolLoadSheddingToTerraform(struct?: LoadBalancerPoolLoadShedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_percent: cdktf.numberToTerraform(struct!.defaultPercent),
    default_policy: cdktf.stringToTerraform(struct!.defaultPolicy),
    session_percent: cdktf.numberToTerraform(struct!.sessionPercent),
    session_policy: cdktf.stringToTerraform(struct!.sessionPolicy),
  }
}

export interface LoadBalancerPoolOriginSteering {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#policy LoadBalancerPool#policy}
  */
  readonly policy?: string;
}

export function loadBalancerPoolOriginSteeringToTerraform(struct?: LoadBalancerPoolOriginSteering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}

export interface LoadBalancerPoolOriginsHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#header LoadBalancerPool#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#values LoadBalancerPool#values}
  */
  readonly values: string[];
}

export function loadBalancerPoolOriginsHeaderToTerraform(struct?: LoadBalancerPoolOriginsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LoadBalancerPoolOrigins {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#address LoadBalancerPool#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#enabled LoadBalancerPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#name LoadBalancerPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#weight LoadBalancerPool#weight}
  */
  readonly weight?: number;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#header LoadBalancerPool#header}
  */
  readonly header?: LoadBalancerPoolOriginsHeader[] | cdktf.IResolvable;
}

export function loadBalancerPoolOriginsToTerraform(struct?: LoadBalancerPoolOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
    header: cdktf.listMapper(loadBalancerPoolOriginsHeaderToTerraform)(struct!.header),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool cloudflare_load_balancer_pool}
*/
export class LoadBalancerPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool cloudflare_load_balancer_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerPoolConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer_pool',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._checkRegions = config.checkRegions;
    this._description = config.description;
    this._enabled = config.enabled;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._minimumOrigins = config.minimumOrigins;
    this._monitor = config.monitor;
    this._name = config.name;
    this._notificationEmail = config.notificationEmail;
    this._loadShedding = config.loadShedding;
    this._originSteering = config.originSteering;
    this._origins = config.origins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_regions - computed: true, optional: true, required: false
  private _checkRegions?: string[]; 
  public get checkRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('check_regions'));
  }
  public set checkRegions(value: string[]) {
    this._checkRegions = value;
  }
  public resetCheckRegions() {
    this._checkRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRegionsInput() {
    return this._checkRegions;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // minimum_origins - computed: false, optional: true, required: false
  private _minimumOrigins?: number; 
  public get minimumOrigins() {
    return this.getNumberAttribute('minimum_origins');
  }
  public set minimumOrigins(value: number) {
    this._minimumOrigins = value;
  }
  public resetMinimumOrigins() {
    this._minimumOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumOriginsInput() {
    return this._minimumOrigins;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notification_email - computed: false, optional: true, required: false
  private _notificationEmail?: string; 
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }
  public set notificationEmail(value: string) {
    this._notificationEmail = value;
  }
  public resetNotificationEmail() {
    this._notificationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailInput() {
    return this._notificationEmail;
  }

  // load_shedding - computed: false, optional: true, required: false
  private _loadShedding?: LoadBalancerPoolLoadShedding[] | cdktf.IResolvable; 
  public get loadShedding() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('load_shedding')));
  }
  public set loadShedding(value: LoadBalancerPoolLoadShedding[] | cdktf.IResolvable) {
    this._loadShedding = value;
  }
  public resetLoadShedding() {
    this._loadShedding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadSheddingInput() {
    return this._loadShedding;
  }

  // origin_steering - computed: false, optional: true, required: false
  private _originSteering?: LoadBalancerPoolOriginSteering[] | cdktf.IResolvable; 
  public get originSteering() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('origin_steering')));
  }
  public set originSteering(value: LoadBalancerPoolOriginSteering[] | cdktf.IResolvable) {
    this._originSteering = value;
  }
  public resetOriginSteering() {
    this._originSteering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSteeringInput() {
    return this._originSteering;
  }

  // origins - computed: false, optional: false, required: true
  private _origins?: LoadBalancerPoolOrigins[] | cdktf.IResolvable; 
  public get origins() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('origins')));
  }
  public set origins(value: LoadBalancerPoolOrigins[] | cdktf.IResolvable) {
    this._origins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._checkRegions),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      minimum_origins: cdktf.numberToTerraform(this._minimumOrigins),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      load_shedding: cdktf.listMapper(loadBalancerPoolLoadSheddingToTerraform)(this._loadShedding),
      origin_steering: cdktf.listMapper(loadBalancerPoolOriginSteeringToTerraform)(this._originSteering),
      origins: cdktf.listMapper(loadBalancerPoolOriginsToTerraform)(this._origins),
    };
  }
}
