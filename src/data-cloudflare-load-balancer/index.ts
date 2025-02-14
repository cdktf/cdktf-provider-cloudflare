// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#country_pools DataCloudflareLoadBalancer#country_pools}
  */
  readonly countryPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#load_balancer_id DataCloudflareLoadBalancer#load_balancer_id}
  */
  readonly loadBalancerId?: string;
  /**
  * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#pop_pools DataCloudflareLoadBalancer#pop_pools}
  */
  readonly popPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#region_pools DataCloudflareLoadBalancer#region_pools}
  */
  readonly regionPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are:
  * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800].
  * - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#session_affinity_ttl DataCloudflareLoadBalancer#session_affinity_ttl}
  */
  readonly sessionAffinityTtl?: number;
  /**
  * Steering Policy for this load balancer.
  * - `"off"`: Use `default_pools`.
  * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
  * - `"random"`: Select a pool randomly.
  * - `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
  * - `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
  * - `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
  * - `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
  * - `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#steering_policy DataCloudflareLoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#ttl DataCloudflareLoadBalancer#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#zone_id DataCloudflareLoadBalancer#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareLoadBalancerAdaptiveRouting {
}

export function dataCloudflareLoadBalancerAdaptiveRoutingToTerraform(struct?: DataCloudflareLoadBalancerAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerAdaptiveRoutingToHclTerraform(struct?: DataCloudflareLoadBalancerAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerAdaptiveRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerAdaptiveRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failover_across_pools - computed: true, optional: false, required: false
  public get failoverAcrossPools() {
    return this.getBooleanAttribute('failover_across_pools');
  }
}
export interface DataCloudflareLoadBalancerLocationStrategy {
}

export function dataCloudflareLoadBalancerLocationStrategyToTerraform(struct?: DataCloudflareLoadBalancerLocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerLocationStrategyToHclTerraform(struct?: DataCloudflareLoadBalancerLocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerLocationStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerLocationStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerLocationStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // prefer_ecs - computed: true, optional: false, required: false
  public get preferEcs() {
    return this.getStringAttribute('prefer_ecs');
  }
}
export interface DataCloudflareLoadBalancerRandomSteering {
}

export function dataCloudflareLoadBalancerRandomSteeringToTerraform(struct?: DataCloudflareLoadBalancerRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerRandomSteeringToHclTerraform(struct?: DataCloudflareLoadBalancerRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerRandomSteeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerRandomSteering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerRandomSteering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_weight - computed: true, optional: false, required: false
  public get defaultWeight() {
    return this.getNumberAttribute('default_weight');
  }

  // pool_weights - computed: true, optional: false, required: false
  private _poolWeights = new cdktf.NumberMap(this, "pool_weights");
  public get poolWeights() {
    return this._poolWeights;
  }
}
export interface DataCloudflareLoadBalancerRulesFixedResponse {
}

export function dataCloudflareLoadBalancerRulesFixedResponseToTerraform(struct?: DataCloudflareLoadBalancerRulesFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerRulesFixedResponseToHclTerraform(struct?: DataCloudflareLoadBalancerRulesFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerRulesFixedResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerRulesFixedResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerRulesFixedResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // message_body - computed: true, optional: false, required: false
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
}
export interface DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting {
}

export function dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failover_across_pools - computed: true, optional: false, required: false
  public get failoverAcrossPools() {
    return this.getBooleanAttribute('failover_across_pools');
  }
}
export interface DataCloudflareLoadBalancerRulesOverridesLocationStrategy {
}

export function dataCloudflareLoadBalancerRulesOverridesLocationStrategyToTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesLocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerRulesOverridesLocationStrategyToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesLocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerRulesOverridesLocationStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerRulesOverridesLocationStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // prefer_ecs - computed: true, optional: false, required: false
  public get preferEcs() {
    return this.getStringAttribute('prefer_ecs');
  }
}
export interface DataCloudflareLoadBalancerRulesOverridesRandomSteering {
}

export function dataCloudflareLoadBalancerRulesOverridesRandomSteeringToTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerRulesOverridesRandomSteeringToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerRulesOverridesRandomSteering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerRulesOverridesRandomSteering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_weight - computed: true, optional: false, required: false
  public get defaultWeight() {
    return this.getNumberAttribute('default_weight');
  }

  // pool_weights - computed: true, optional: false, required: false
  private _poolWeights = new cdktf.NumberMap(this, "pool_weights");
  public get poolWeights() {
    return this._poolWeights;
  }
}
export interface DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes {
  /**
  * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#drain_duration DataCloudflareLoadBalancer#drain_duration}
  */
  readonly drainDuration?: number;
}

export function dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_duration: cdktf.numberToTerraform(struct!.drainDuration),
  }
}


export function dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain_duration: {
      value: cdktf.numberToHclTerraform(struct!.drainDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainDuration = this._drainDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainDuration = value.drainDuration;
    }
  }

  // drain_duration - computed: true, optional: true, required: false
  private _drainDuration?: number; 
  public get drainDuration() {
    return this.getNumberAttribute('drain_duration');
  }
  public set drainDuration(value: number) {
    this._drainDuration = value;
  }
  public resetDrainDuration() {
    this._drainDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainDurationInput() {
    return this._drainDuration;
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }

  // require_all_headers - computed: true, optional: false, required: false
  public get requireAllHeaders() {
    return this.getBooleanAttribute('require_all_headers');
  }

  // samesite - computed: true, optional: false, required: false
  public get samesite() {
    return this.getStringAttribute('samesite');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getStringAttribute('secure');
  }

  // zero_downtime_failover - computed: true, optional: false, required: false
  public get zeroDowntimeFailover() {
    return this.getStringAttribute('zero_downtime_failover');
  }
}
export interface DataCloudflareLoadBalancerRulesOverrides {
  /**
  * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#country_pools DataCloudflareLoadBalancer#country_pools}
  */
  readonly countryPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#pop_pools DataCloudflareLoadBalancer#pop_pools}
  */
  readonly popPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#region_pools DataCloudflareLoadBalancer#region_pools}
  */
  readonly regionPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are:
  * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800].
  * - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#session_affinity_ttl DataCloudflareLoadBalancer#session_affinity_ttl}
  */
  readonly sessionAffinityTtl?: number;
  /**
  * Steering Policy for this load balancer.
  * - `"off"`: Use `default_pools`.
  * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
  * - `"random"`: Select a pool randomly.
  * - `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
  * - `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
  * - `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
  * - `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
  * - `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#steering_policy DataCloudflareLoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#ttl DataCloudflareLoadBalancer#ttl}
  */
  readonly ttl?: number;
}

export function dataCloudflareLoadBalancerRulesOverridesToTerraform(struct?: DataCloudflareLoadBalancerRulesOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.countryPools),
    pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.popPools),
    region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.regionPools),
    session_affinity_ttl: cdktf.numberToTerraform(struct!.sessionAffinityTtl),
    steering_policy: cdktf.stringToTerraform(struct!.steeringPolicy),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dataCloudflareLoadBalancerRulesOverridesToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_pools: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.countryPools),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    pop_pools: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.popPools),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    region_pools: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.regionPools),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    session_affinity_ttl: {
      value: cdktf.numberToHclTerraform(struct!.sessionAffinityTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    steering_policy: {
      value: cdktf.stringToHclTerraform(struct!.steeringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareLoadBalancerRulesOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerRulesOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryPools = this._countryPools;
    }
    if (this._popPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.popPools = this._popPools;
    }
    if (this._regionPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionPools = this._regionPools;
    }
    if (this._sessionAffinityTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityTtl = this._sessionAffinityTtl;
    }
    if (this._steeringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.steeringPolicy = this._steeringPolicy;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerRulesOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryPools = undefined;
      this._popPools = undefined;
      this._regionPools = undefined;
      this._sessionAffinityTtl = undefined;
      this._steeringPolicy = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryPools = value.countryPools;
      this._popPools = value.popPools;
      this._regionPools = value.regionPools;
      this._sessionAffinityTtl = value.sessionAffinityTtl;
      this._steeringPolicy = value.steeringPolicy;
      this._ttl = value.ttl;
    }
  }

  // adaptive_routing - computed: true, optional: false, required: false
  private _adaptiveRouting = new DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference(this, "adaptive_routing");
  public get adaptiveRouting() {
    return this._adaptiveRouting;
  }

  // country_pools - computed: true, optional: true, required: false
  private _countryPools?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get countryPools() {
    return this.interpolationForAttribute('country_pools');
  }
  public set countryPools(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._countryPools = value;
  }
  public resetCountryPools() {
    this._countryPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryPoolsInput() {
    return this._countryPools;
  }

  // default_pools - computed: true, optional: false, required: false
  public get defaultPools() {
    return this.getListAttribute('default_pools');
  }

  // fallback_pool - computed: true, optional: false, required: false
  public get fallbackPool() {
    return this.getStringAttribute('fallback_pool');
  }

  // location_strategy - computed: true, optional: false, required: false
  private _locationStrategy = new DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference(this, "location_strategy");
  public get locationStrategy() {
    return this._locationStrategy;
  }

  // pop_pools - computed: true, optional: true, required: false
  private _popPools?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get popPools() {
    return this.interpolationForAttribute('pop_pools');
  }
  public set popPools(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._popPools = value;
  }
  public resetPopPools() {
    this._popPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popPoolsInput() {
    return this._popPools;
  }

  // random_steering - computed: true, optional: false, required: false
  private _randomSteering = new DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference(this, "random_steering");
  public get randomSteering() {
    return this._randomSteering;
  }

  // region_pools - computed: true, optional: true, required: false
  private _regionPools?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get regionPools() {
    return this.interpolationForAttribute('region_pools');
  }
  public set regionPools(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._regionPools = value;
  }
  public resetRegionPools() {
    this._regionPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPoolsInput() {
    return this._regionPools;
  }

  // session_affinity - computed: true, optional: false, required: false
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }

  // session_affinity_attributes - computed: true, optional: false, required: false
  private _sessionAffinityAttributes = new DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
  public get sessionAffinityAttributes() {
    return this._sessionAffinityAttributes;
  }

  // session_affinity_ttl - computed: true, optional: true, required: false
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
}
export interface DataCloudflareLoadBalancerRules {
}

export function dataCloudflareLoadBalancerRulesToTerraform(struct?: DataCloudflareLoadBalancerRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerRulesToHclTerraform(struct?: DataCloudflareLoadBalancerRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareLoadBalancerRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // fixed_response - computed: true, optional: false, required: false
  private _fixedResponse = new DataCloudflareLoadBalancerRulesFixedResponseOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataCloudflareLoadBalancerRulesOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // terminates - computed: true, optional: false, required: false
  public get terminates() {
    return this.getBooleanAttribute('terminates');
  }
}

export class DataCloudflareLoadBalancerRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareLoadBalancerRulesOutputReference {
    return new DataCloudflareLoadBalancerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareLoadBalancerSessionAffinityAttributes {
  /**
  * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#drain_duration DataCloudflareLoadBalancer#drain_duration}
  */
  readonly drainDuration?: number;
}

export function dataCloudflareLoadBalancerSessionAffinityAttributesToTerraform(struct?: DataCloudflareLoadBalancerSessionAffinityAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_duration: cdktf.numberToTerraform(struct!.drainDuration),
  }
}


export function dataCloudflareLoadBalancerSessionAffinityAttributesToHclTerraform(struct?: DataCloudflareLoadBalancerSessionAffinityAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain_duration: {
      value: cdktf.numberToHclTerraform(struct!.drainDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancerSessionAffinityAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainDuration = this._drainDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerSessionAffinityAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainDuration = value.drainDuration;
    }
  }

  // drain_duration - computed: true, optional: true, required: false
  private _drainDuration?: number; 
  public get drainDuration() {
    return this.getNumberAttribute('drain_duration');
  }
  public set drainDuration(value: number) {
    this._drainDuration = value;
  }
  public resetDrainDuration() {
    this._drainDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainDurationInput() {
    return this._drainDuration;
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }

  // require_all_headers - computed: true, optional: false, required: false
  public get requireAllHeaders() {
    return this.getBooleanAttribute('require_all_headers');
  }

  // samesite - computed: true, optional: false, required: false
  public get samesite() {
    return this.getStringAttribute('samesite');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getStringAttribute('secure');
  }

  // zero_downtime_failover - computed: true, optional: false, required: false
  public get zeroDowntimeFailover() {
    return this.getStringAttribute('zero_downtime_failover');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer cloudflare_load_balancer}
*/
export class DataCloudflareLoadBalancer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancer to import
  * @param importFromId The id of the existing DataCloudflareLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/load_balancer cloudflare_load_balancer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
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
    this._countryPools = config.countryPools;
    this._loadBalancerId = config.loadBalancerId;
    this._popPools = config.popPools;
    this._regionPools = config.regionPools;
    this._sessionAffinityTtl = config.sessionAffinityTtl;
    this._steeringPolicy = config.steeringPolicy;
    this._ttl = config.ttl;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adaptive_routing - computed: true, optional: false, required: false
  private _adaptiveRouting = new DataCloudflareLoadBalancerAdaptiveRoutingOutputReference(this, "adaptive_routing");
  public get adaptiveRouting() {
    return this._adaptiveRouting;
  }

  // country_pools - computed: true, optional: true, required: false
  private _countryPools?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get countryPools() {
    return this.interpolationForAttribute('country_pools');
  }
  public set countryPools(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._countryPools = value;
  }
  public resetCountryPools() {
    this._countryPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryPoolsInput() {
    return this._countryPools;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // default_pools - computed: true, optional: false, required: false
  public get defaultPools() {
    return this.getListAttribute('default_pools');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fallback_pool - computed: true, optional: false, required: false
  public get fallbackPool() {
    return this.getStringAttribute('fallback_pool');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_id - computed: false, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // location_strategy - computed: true, optional: false, required: false
  private _locationStrategy = new DataCloudflareLoadBalancerLocationStrategyOutputReference(this, "location_strategy");
  public get locationStrategy() {
    return this._locationStrategy;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return this.getListAttribute('networks');
  }

  // pop_pools - computed: true, optional: true, required: false
  private _popPools?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get popPools() {
    return this.interpolationForAttribute('pop_pools');
  }
  public set popPools(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._popPools = value;
  }
  public resetPopPools() {
    this._popPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popPoolsInput() {
    return this._popPools;
  }

  // proxied - computed: true, optional: false, required: false
  public get proxied() {
    return this.getBooleanAttribute('proxied');
  }

  // random_steering - computed: true, optional: false, required: false
  private _randomSteering = new DataCloudflareLoadBalancerRandomSteeringOutputReference(this, "random_steering");
  public get randomSteering() {
    return this._randomSteering;
  }

  // region_pools - computed: true, optional: true, required: false
  private _regionPools?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get regionPools() {
    return this.interpolationForAttribute('region_pools');
  }
  public set regionPools(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._regionPools = value;
  }
  public resetRegionPools() {
    this._regionPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPoolsInput() {
    return this._regionPools;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCloudflareLoadBalancerRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // session_affinity - computed: true, optional: false, required: false
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }

  // session_affinity_attributes - computed: true, optional: false, required: false
  private _sessionAffinityAttributes = new DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
  public get sessionAffinityAttributes() {
    return this._sessionAffinityAttributes;
  }

  // session_affinity_ttl - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._countryPools),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._popPools),
      region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._regionPools),
      session_affinity_ttl: cdktf.numberToTerraform(this._sessionAffinityTtl),
      steering_policy: cdktf.stringToTerraform(this._steeringPolicy),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      country_pools: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._countryPools),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop_pools: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._popPools),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      region_pools: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._regionPools),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      session_affinity_ttl: {
        value: cdktf.numberToHclTerraform(this._sessionAffinityTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      steering_policy: {
        value: cdktf.stringToHclTerraform(this._steeringPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
