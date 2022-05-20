// https://www.terraform.io/docs/providers/cloudflare/r/load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#default_pool_ids LoadBalancer#default_pool_ids}
  */
  readonly defaultPoolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#description LoadBalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#enabled LoadBalancer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#fallback_pool_id LoadBalancer#fallback_pool_id}
  */
  readonly fallbackPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#name LoadBalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#proxied LoadBalancer#proxied}
  */
  readonly proxied?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity LoadBalancer#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
  */
  readonly sessionAffinityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
  */
  readonly sessionAffinityTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#steering_policy LoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#ttl LoadBalancer#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#zone_id LoadBalancer#zone_id}
  */
  readonly zoneId: string;
  /**
  * pop_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pop_pools LoadBalancer#pop_pools}
  */
  readonly popPools?: LoadBalancerPopPools[] | cdktf.IResolvable;
  /**
  * region_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#region_pools LoadBalancer#region_pools}
  */
  readonly regionPools?: LoadBalancerRegionPools[] | cdktf.IResolvable;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#rules LoadBalancer#rules}
  */
  readonly rules?: LoadBalancerRules[] | cdktf.IResolvable;
}
export interface LoadBalancerPopPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pop LoadBalancer#pop}
  */
  readonly pop: string;
}

export function loadBalancerPopPoolsToTerraform(struct?: LoadBalancerPopPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.poolIds),
    pop: cdktf.stringToTerraform(struct!.pop),
  }
}

export interface LoadBalancerRegionPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#region LoadBalancer#region}
  */
  readonly region: string;
}

export function loadBalancerRegionPoolsToTerraform(struct?: LoadBalancerRegionPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.poolIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export interface LoadBalancerRulesFixedResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#content_type LoadBalancer#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#location LoadBalancer#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#message_body LoadBalancer#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#status_code LoadBalancer#status_code}
  */
  readonly statusCode?: number;
}

export function loadBalancerRulesFixedResponseToTerraform(struct?: LoadBalancerRulesFixedResponseOutputReference | LoadBalancerRulesFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    location: cdktf.stringToTerraform(struct!.location),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}

export class LoadBalancerRulesFixedResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerRulesFixedResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesFixedResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._location = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._location = value.location;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // message_body - computed: false, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface LoadBalancerRulesOverridesPopPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pop LoadBalancer#pop}
  */
  readonly pop: string;
}

export function loadBalancerRulesOverridesPopPoolsToTerraform(struct?: LoadBalancerRulesOverridesPopPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.poolIds),
    pop: cdktf.stringToTerraform(struct!.pop),
  }
}

export interface LoadBalancerRulesOverridesRegionPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#region LoadBalancer#region}
  */
  readonly region: string;
}

export function loadBalancerRulesOverridesRegionPoolsToTerraform(struct?: LoadBalancerRulesOverridesRegionPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.poolIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export interface LoadBalancerRulesOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#default_pools LoadBalancer#default_pools}
  */
  readonly defaultPools?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#fallback_pool LoadBalancer#fallback_pool}
  */
  readonly fallbackPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity LoadBalancer#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
  */
  readonly sessionAffinityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
  */
  readonly sessionAffinityTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#steering_policy LoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#ttl LoadBalancer#ttl}
  */
  readonly ttl?: number;
  /**
  * pop_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pop_pools LoadBalancer#pop_pools}
  */
  readonly popPools?: LoadBalancerRulesOverridesPopPools[] | cdktf.IResolvable;
  /**
  * region_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#region_pools LoadBalancer#region_pools}
  */
  readonly regionPools?: LoadBalancerRulesOverridesRegionPools[] | cdktf.IResolvable;
}

export function loadBalancerRulesOverridesToTerraform(struct?: LoadBalancerRulesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_pools: cdktf.listMapper(cdktf.stringToTerraform)(struct!.defaultPools),
    fallback_pool: cdktf.stringToTerraform(struct!.fallbackPool),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sessionAffinityAttributes),
    session_affinity_ttl: cdktf.numberToTerraform(struct!.sessionAffinityTtl),
    steering_policy: cdktf.stringToTerraform(struct!.steeringPolicy),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    pop_pools: cdktf.listMapper(loadBalancerRulesOverridesPopPoolsToTerraform)(struct!.popPools),
    region_pools: cdktf.listMapper(loadBalancerRulesOverridesRegionPoolsToTerraform)(struct!.regionPools),
  }
}

export interface LoadBalancerRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#condition LoadBalancer#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#disabled LoadBalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#name LoadBalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#priority LoadBalancer#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#terminates LoadBalancer#terminates}
  */
  readonly terminates?: boolean | cdktf.IResolvable;
  /**
  * fixed_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#fixed_response LoadBalancer#fixed_response}
  */
  readonly fixedResponse?: LoadBalancerRulesFixedResponse;
  /**
  * overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#overrides LoadBalancer#overrides}
  */
  readonly overrides?: LoadBalancerRulesOverrides[] | cdktf.IResolvable;
}

export function loadBalancerRulesToTerraform(struct?: LoadBalancerRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    terminates: cdktf.booleanToTerraform(struct!.terminates),
    fixed_response: loadBalancerRulesFixedResponseToTerraform(struct!.fixedResponse),
    overrides: cdktf.listMapper(loadBalancerRulesOverridesToTerraform)(struct!.overrides),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer cloudflare_load_balancer}
*/
export class LoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer cloudflare_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer',
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
    this._defaultPoolIds = config.defaultPoolIds;
    this._description = config.description;
    this._enabled = config.enabled;
    this._fallbackPoolId = config.fallbackPoolId;
    this._name = config.name;
    this._proxied = config.proxied;
    this._sessionAffinity = config.sessionAffinity;
    this._sessionAffinityAttributes = config.sessionAffinityAttributes;
    this._sessionAffinityTtl = config.sessionAffinityTtl;
    this._steeringPolicy = config.steeringPolicy;
    this._ttl = config.ttl;
    this._zoneId = config.zoneId;
    this._popPools = config.popPools;
    this._regionPools = config.regionPools;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // default_pool_ids - computed: false, optional: false, required: true
  private _defaultPoolIds?: string[]; 
  public get defaultPoolIds() {
    return this.getListAttribute('default_pool_ids');
  }
  public set defaultPoolIds(value: string[]) {
    this._defaultPoolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolIdsInput() {
    return this._defaultPoolIds;
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

  // fallback_pool_id - computed: false, optional: false, required: true
  private _fallbackPoolId?: string; 
  public get fallbackPoolId() {
    return this.getStringAttribute('fallback_pool_id');
  }
  public set fallbackPoolId(value: string) {
    this._fallbackPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPoolIdInput() {
    return this._fallbackPoolId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // proxied - computed: false, optional: true, required: false
  private _proxied?: boolean | cdktf.IResolvable; 
  public get proxied() {
    return this.getBooleanAttribute('proxied');
  }
  public set proxied(value: boolean | cdktf.IResolvable) {
    this._proxied = value;
  }
  public resetProxied() {
    this._proxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiedInput() {
    return this._proxied;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // session_affinity_attributes - computed: false, optional: true, required: false
  private _sessionAffinityAttributes?: { [key: string]: string }; 
  public get sessionAffinityAttributes() {
    return this.getStringMapAttribute('session_affinity_attributes');
  }
  public set sessionAffinityAttributes(value: { [key: string]: string }) {
    this._sessionAffinityAttributes = value;
  }
  public resetSessionAffinityAttributes() {
    this._sessionAffinityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityAttributesInput() {
    return this._sessionAffinityAttributes;
  }

  // session_affinity_ttl - computed: false, optional: true, required: false
  private _sessionAffinityTtl?: number; 
  public get sessionAffinityTtl() {
    return this.getNumberAttribute('session_affinity_ttl');
  }
  public set sessionAffinityTtl(value: number) {
    this._sessionAffinityTtl = value;
  }
  public resetSessionAffinityTtl() {
    this._sessionAffinityTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityTtlInput() {
    return this._sessionAffinityTtl;
  }

  // steering_policy - computed: true, optional: true, required: false
  private _steeringPolicy?: string; 
  public get steeringPolicy() {
    return this.getStringAttribute('steering_policy');
  }
  public set steeringPolicy(value: string) {
    this._steeringPolicy = value;
  }
  public resetSteeringPolicy() {
    this._steeringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get steeringPolicyInput() {
    return this._steeringPolicy;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // pop_pools - computed: false, optional: true, required: false
  private _popPools?: LoadBalancerPopPools[] | cdktf.IResolvable; 
  public get popPools() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('pop_pools')));
  }
  public set popPools(value: LoadBalancerPopPools[] | cdktf.IResolvable) {
    this._popPools = value;
  }
  public resetPopPools() {
    this._popPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popPoolsInput() {
    return this._popPools;
  }

  // region_pools - computed: false, optional: true, required: false
  private _regionPools?: LoadBalancerRegionPools[] | cdktf.IResolvable; 
  public get regionPools() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('region_pools')));
  }
  public set regionPools(value: LoadBalancerRegionPools[] | cdktf.IResolvable) {
    this._regionPools = value;
  }
  public resetRegionPools() {
    this._regionPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPoolsInput() {
    return this._regionPools;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: LoadBalancerRules[] | cdktf.IResolvable; 
  public get rules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rules');
  }
  public set rules(value: LoadBalancerRules[] | cdktf.IResolvable) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._defaultPoolIds),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fallback_pool_id: cdktf.stringToTerraform(this._fallbackPoolId),
      name: cdktf.stringToTerraform(this._name),
      proxied: cdktf.booleanToTerraform(this._proxied),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      session_affinity_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._sessionAffinityAttributes),
      session_affinity_ttl: cdktf.numberToTerraform(this._sessionAffinityTtl),
      steering_policy: cdktf.stringToTerraform(this._steeringPolicy),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      pop_pools: cdktf.listMapper(loadBalancerPopPoolsToTerraform)(this._popPools),
      region_pools: cdktf.listMapper(loadBalancerRegionPoolsToTerraform)(this._regionPools),
      rules: cdktf.listMapper(loadBalancerRulesToTerraform)(this._rules),
    };
  }
}
