// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}
  */
  readonly adaptiveRouting?: LoadBalancerAdaptiveRouting;
  /**
  * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}
  */
  readonly countryPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}
  */
  readonly defaultPools: string[];
  /**
  * Object description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#description LoadBalancer#description}
  */
  readonly description?: string;
  /**
  * Whether to enable (the default) this load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#enabled LoadBalancer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The pool ID to use when all other pools are detected as unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}
  */
  readonly fallbackPool: string;
  /**
  * Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}
  */
  readonly locationStrategy?: LoadBalancerLocationStrategy;
  /**
  * The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#name LoadBalancer#name}
  */
  readonly name: string;
  /**
  * List of networks where Load Balancer or Pool is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#networks LoadBalancer#networks}
  */
  readonly networks?: string[];
  /**
  * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}
  */
  readonly popPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Whether the hostname should be gray clouded (false) or orange clouded (true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#proxied LoadBalancer#proxied}
  */
  readonly proxied?: boolean | cdktf.IResolvable;
  /**
  * Configures pool weights.
  * - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
  * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
  * - `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}
  */
  readonly randomSteering?: LoadBalancerRandomSteering;
  /**
  * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}
  */
  readonly regionPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * BETA Field Not General Access: A list of rules for this load balancer to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#rules LoadBalancer#rules}
  */
  readonly rules?: LoadBalancerRules[] | cdktf.IResolvable;
  /**
  * Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are:
  * - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used.
  * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address.
  * - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
  * Available values: "none", "cookie", "ip_cookie", "header".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Configures attributes for session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
  */
  readonly sessionAffinityAttributes?: LoadBalancerSessionAffinityAttributes;
  /**
  * Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are:
  * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800].
  * - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
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
  * Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}
  */
  readonly zoneId: string;
}
export interface LoadBalancerAdaptiveRouting {
  /**
  * Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}
  */
  readonly failoverAcrossPools?: boolean | cdktf.IResolvable;
}

export function loadBalancerAdaptiveRoutingToTerraform(struct?: LoadBalancerAdaptiveRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_across_pools: cdktf.booleanToTerraform(struct!.failoverAcrossPools),
  }
}


export function loadBalancerAdaptiveRoutingToHclTerraform(struct?: LoadBalancerAdaptiveRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_across_pools: {
      value: cdktf.booleanToHclTerraform(struct!.failoverAcrossPools),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerAdaptiveRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverAcrossPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverAcrossPools = this._failoverAcrossPools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerAdaptiveRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverAcrossPools = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverAcrossPools = value.failoverAcrossPools;
    }
  }

  // failover_across_pools - computed: true, optional: true, required: false
  private _failoverAcrossPools?: boolean | cdktf.IResolvable; 
  public get failoverAcrossPools() {
    return this.getBooleanAttribute('failover_across_pools');
  }
  public set failoverAcrossPools(value: boolean | cdktf.IResolvable) {
    this._failoverAcrossPools = value;
  }
  public resetFailoverAcrossPools() {
    this._failoverAcrossPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAcrossPoolsInput() {
    return this._failoverAcrossPools;
  }
}
export interface LoadBalancerLocationStrategy {
  /**
  * Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.
  * - `"pop"`: Use the Cloudflare PoP location.
  * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
  * Available values: "pop", "resolver_ip".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#mode LoadBalancer#mode}
  */
  readonly mode?: string;
  /**
  * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.
  * - `"always"`: Always prefer ECS.
  * - `"never"`: Never prefer ECS.
  * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
  * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
  * Available values: "always", "never", "proximity", "geo".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}
  */
  readonly preferEcs?: string;
}

export function loadBalancerLocationStrategyToTerraform(struct?: LoadBalancerLocationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    prefer_ecs: cdktf.stringToTerraform(struct!.preferEcs),
  }
}


export function loadBalancerLocationStrategyToHclTerraform(struct?: LoadBalancerLocationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefer_ecs: {
      value: cdktf.stringToHclTerraform(struct!.preferEcs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerLocationStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerLocationStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._preferEcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferEcs = this._preferEcs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerLocationStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._preferEcs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._preferEcs = value.preferEcs;
    }
  }

  // mode - computed: true, optional: true, required: false
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

  // prefer_ecs - computed: true, optional: true, required: false
  private _preferEcs?: string; 
  public get preferEcs() {
    return this.getStringAttribute('prefer_ecs');
  }
  public set preferEcs(value: string) {
    this._preferEcs = value;
  }
  public resetPreferEcs() {
    this._preferEcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferEcsInput() {
    return this._preferEcs;
  }
}
export interface LoadBalancerRandomSteering {
  /**
  * The default weight for pools in the load balancer that are not specified in the pool_weights map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}
  */
  readonly defaultWeight?: number;
  /**
  * A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}
  */
  readonly poolWeights?: { [key: string]: number };
}

export function loadBalancerRandomSteeringToTerraform(struct?: LoadBalancerRandomSteering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_weight: cdktf.numberToTerraform(struct!.defaultWeight),
    pool_weights: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.poolWeights),
  }
}


export function loadBalancerRandomSteeringToHclTerraform(struct?: LoadBalancerRandomSteering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_weight: {
      value: cdktf.numberToHclTerraform(struct!.defaultWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_weights: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.poolWeights),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRandomSteeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerRandomSteering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultWeight = this._defaultWeight;
    }
    if (this._poolWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolWeights = this._poolWeights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRandomSteering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultWeight = undefined;
      this._poolWeights = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultWeight = value.defaultWeight;
      this._poolWeights = value.poolWeights;
    }
  }

  // default_weight - computed: true, optional: true, required: false
  private _defaultWeight?: number; 
  public get defaultWeight() {
    return this.getNumberAttribute('default_weight');
  }
  public set defaultWeight(value: number) {
    this._defaultWeight = value;
  }
  public resetDefaultWeight() {
    this._defaultWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWeightInput() {
    return this._defaultWeight;
  }

  // pool_weights - computed: true, optional: true, required: false
  private _poolWeights?: { [key: string]: number }; 
  public get poolWeights() {
    return this.getNumberMapAttribute('pool_weights');
  }
  public set poolWeights(value: { [key: string]: number }) {
    this._poolWeights = value;
  }
  public resetPoolWeights() {
    this._poolWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolWeightsInput() {
    return this._poolWeights;
  }
}
export interface LoadBalancerRulesFixedResponse {
  /**
  * The http 'Content-Type' header to include in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#content_type LoadBalancer#content_type}
  */
  readonly contentType?: string;
  /**
  * The http 'Location' header to include in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#location LoadBalancer#location}
  */
  readonly location?: string;
  /**
  * Text to include as the http body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#message_body LoadBalancer#message_body}
  */
  readonly messageBody?: string;
  /**
  * The http status code to respond with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#status_code LoadBalancer#status_code}
  */
  readonly statusCode?: number;
}

export function loadBalancerRulesFixedResponseToTerraform(struct?: LoadBalancerRulesFixedResponse | cdktf.IResolvable): any {
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


export function loadBalancerRulesFixedResponseToHclTerraform(struct?: LoadBalancerRulesFixedResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_body: {
      value: cdktf.stringToHclTerraform(struct!.messageBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRulesFixedResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerRulesFixedResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: LoadBalancerRulesFixedResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._location = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._location = value.location;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: true, optional: true, required: false
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

  // location - computed: true, optional: true, required: false
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

  // message_body - computed: true, optional: true, required: false
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

  // status_code - computed: true, optional: true, required: false
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
export interface LoadBalancerRulesOverridesAdaptiveRouting {
  /**
  * Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}
  */
  readonly failoverAcrossPools?: boolean | cdktf.IResolvable;
}

export function loadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct?: LoadBalancerRulesOverridesAdaptiveRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_across_pools: cdktf.booleanToTerraform(struct!.failoverAcrossPools),
  }
}


export function loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct?: LoadBalancerRulesOverridesAdaptiveRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_across_pools: {
      value: cdktf.booleanToHclTerraform(struct!.failoverAcrossPools),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRulesOverridesAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerRulesOverridesAdaptiveRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverAcrossPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverAcrossPools = this._failoverAcrossPools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesAdaptiveRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverAcrossPools = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverAcrossPools = value.failoverAcrossPools;
    }
  }

  // failover_across_pools - computed: true, optional: true, required: false
  private _failoverAcrossPools?: boolean | cdktf.IResolvable; 
  public get failoverAcrossPools() {
    return this.getBooleanAttribute('failover_across_pools');
  }
  public set failoverAcrossPools(value: boolean | cdktf.IResolvable) {
    this._failoverAcrossPools = value;
  }
  public resetFailoverAcrossPools() {
    this._failoverAcrossPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAcrossPoolsInput() {
    return this._failoverAcrossPools;
  }
}
export interface LoadBalancerRulesOverridesLocationStrategy {
  /**
  * Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.
  * - `"pop"`: Use the Cloudflare PoP location.
  * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
  * Available values: "pop", "resolver_ip".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#mode LoadBalancer#mode}
  */
  readonly mode?: string;
  /**
  * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.
  * - `"always"`: Always prefer ECS.
  * - `"never"`: Never prefer ECS.
  * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
  * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
  * Available values: "always", "never", "proximity", "geo".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}
  */
  readonly preferEcs?: string;
}

export function loadBalancerRulesOverridesLocationStrategyToTerraform(struct?: LoadBalancerRulesOverridesLocationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    prefer_ecs: cdktf.stringToTerraform(struct!.preferEcs),
  }
}


export function loadBalancerRulesOverridesLocationStrategyToHclTerraform(struct?: LoadBalancerRulesOverridesLocationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefer_ecs: {
      value: cdktf.stringToHclTerraform(struct!.preferEcs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRulesOverridesLocationStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerRulesOverridesLocationStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._preferEcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferEcs = this._preferEcs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesLocationStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._preferEcs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._preferEcs = value.preferEcs;
    }
  }

  // mode - computed: true, optional: true, required: false
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

  // prefer_ecs - computed: true, optional: true, required: false
  private _preferEcs?: string; 
  public get preferEcs() {
    return this.getStringAttribute('prefer_ecs');
  }
  public set preferEcs(value: string) {
    this._preferEcs = value;
  }
  public resetPreferEcs() {
    this._preferEcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferEcsInput() {
    return this._preferEcs;
  }
}
export interface LoadBalancerRulesOverridesRandomSteering {
  /**
  * The default weight for pools in the load balancer that are not specified in the pool_weights map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}
  */
  readonly defaultWeight?: number;
  /**
  * A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}
  */
  readonly poolWeights?: { [key: string]: number };
}

export function loadBalancerRulesOverridesRandomSteeringToTerraform(struct?: LoadBalancerRulesOverridesRandomSteering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_weight: cdktf.numberToTerraform(struct!.defaultWeight),
    pool_weights: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.poolWeights),
  }
}


export function loadBalancerRulesOverridesRandomSteeringToHclTerraform(struct?: LoadBalancerRulesOverridesRandomSteering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_weight: {
      value: cdktf.numberToHclTerraform(struct!.defaultWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_weights: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.poolWeights),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRulesOverridesRandomSteeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerRulesOverridesRandomSteering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultWeight = this._defaultWeight;
    }
    if (this._poolWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolWeights = this._poolWeights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesRandomSteering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultWeight = undefined;
      this._poolWeights = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultWeight = value.defaultWeight;
      this._poolWeights = value.poolWeights;
    }
  }

  // default_weight - computed: true, optional: true, required: false
  private _defaultWeight?: number; 
  public get defaultWeight() {
    return this.getNumberAttribute('default_weight');
  }
  public set defaultWeight(value: number) {
    this._defaultWeight = value;
  }
  public resetDefaultWeight() {
    this._defaultWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWeightInput() {
    return this._defaultWeight;
  }

  // pool_weights - computed: true, optional: true, required: false
  private _poolWeights?: { [key: string]: number }; 
  public get poolWeights() {
    return this.getNumberMapAttribute('pool_weights');
  }
  public set poolWeights(value: { [key: string]: number }) {
    this._poolWeights = value;
  }
  public resetPoolWeights() {
    this._poolWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolWeightsInput() {
    return this._poolWeights;
  }
}
export interface LoadBalancerRulesOverridesSessionAffinityAttributes {
  /**
  * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}
  */
  readonly drainDuration?: number;
  /**
  * Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#headers LoadBalancer#headers}
  */
  readonly headers?: string[];
  /**
  * When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. The supported values are:
  * - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.
  * - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}
  */
  readonly requireAllHeaders?: boolean | cdktf.IResolvable;
  /**
  * Configures the SameSite attribute on session affinity cookie. Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
  * Available values: "Auto", "Lax", "None", "Strict".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}
  */
  readonly samesite?: string;
  /**
  * Configures the Secure attribute on session affinity cookie. Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
  * Available values: "Auto", "Always", "Never".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#secure LoadBalancer#secure}
  */
  readonly secure?: string;
  /**
  * Configures the zero-downtime failover between origins within a pool when session affinity is enabled. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are:
  * - `"none"`: No failover takes place for sessions pinned to the origin (default).
  * - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping.
  * - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
  * Available values: "none", "temporary", "sticky".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}
  */
  readonly zeroDowntimeFailover?: string;
}

export function loadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct?: LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_duration: cdktf.numberToTerraform(struct!.drainDuration),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    require_all_headers: cdktf.booleanToTerraform(struct!.requireAllHeaders),
    samesite: cdktf.stringToTerraform(struct!.samesite),
    secure: cdktf.stringToTerraform(struct!.secure),
    zero_downtime_failover: cdktf.stringToTerraform(struct!.zeroDowntimeFailover),
  }
}


export function loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct?: LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable): any {
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
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    require_all_headers: {
      value: cdktf.booleanToHclTerraform(struct!.requireAllHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite: {
      value: cdktf.stringToHclTerraform(struct!.samesite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.stringToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_downtime_failover: {
      value: cdktf.stringToHclTerraform(struct!.zeroDowntimeFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainDuration = this._drainDuration;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._requireAllHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAllHeaders = this._requireAllHeaders;
    }
    if (this._samesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesite = this._samesite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    if (this._zeroDowntimeFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroDowntimeFailover = this._zeroDowntimeFailover;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drainDuration = undefined;
      this._headers = undefined;
      this._requireAllHeaders = undefined;
      this._samesite = undefined;
      this._secure = undefined;
      this._zeroDowntimeFailover = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drainDuration = value.drainDuration;
      this._headers = value.headers;
      this._requireAllHeaders = value.requireAllHeaders;
      this._samesite = value.samesite;
      this._secure = value.secure;
      this._zeroDowntimeFailover = value.zeroDowntimeFailover;
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

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // require_all_headers - computed: true, optional: true, required: false
  private _requireAllHeaders?: boolean | cdktf.IResolvable; 
  public get requireAllHeaders() {
    return this.getBooleanAttribute('require_all_headers');
  }
  public set requireAllHeaders(value: boolean | cdktf.IResolvable) {
    this._requireAllHeaders = value;
  }
  public resetRequireAllHeaders() {
    this._requireAllHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAllHeadersInput() {
    return this._requireAllHeaders;
  }

  // samesite - computed: true, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // zero_downtime_failover - computed: true, optional: true, required: false
  private _zeroDowntimeFailover?: string; 
  public get zeroDowntimeFailover() {
    return this.getStringAttribute('zero_downtime_failover');
  }
  public set zeroDowntimeFailover(value: string) {
    this._zeroDowntimeFailover = value;
  }
  public resetZeroDowntimeFailover() {
    this._zeroDowntimeFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroDowntimeFailoverInput() {
    return this._zeroDowntimeFailover;
  }
}
export interface LoadBalancerRulesOverrides {
  /**
  * Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}
  */
  readonly adaptiveRouting?: LoadBalancerRulesOverridesAdaptiveRouting;
  /**
  * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}
  */
  readonly countryPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}
  */
  readonly defaultPools?: string[];
  /**
  * The pool ID to use when all other pools are detected as unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}
  */
  readonly fallbackPool?: string;
  /**
  * Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}
  */
  readonly locationStrategy?: LoadBalancerRulesOverridesLocationStrategy;
  /**
  * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}
  */
  readonly popPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Configures pool weights.
  * - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
  * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
  * - `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}
  */
  readonly randomSteering?: LoadBalancerRulesOverridesRandomSteering;
  /**
  * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}
  */
  readonly regionPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are:
  * - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used.
  * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address.
  * - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
  * Available values: "none", "cookie", "ip_cookie", "header".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Configures attributes for session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
  */
  readonly sessionAffinityAttributes?: LoadBalancerRulesOverridesSessionAffinityAttributes;
  /**
  * Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are:
  * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800].
  * - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
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
  * Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}
  */
  readonly ttl?: number;
}

export function loadBalancerRulesOverridesToTerraform(struct?: LoadBalancerRulesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_routing: loadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct!.adaptiveRouting),
    country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.countryPools),
    default_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultPools),
    fallback_pool: cdktf.stringToTerraform(struct!.fallbackPool),
    location_strategy: loadBalancerRulesOverridesLocationStrategyToTerraform(struct!.locationStrategy),
    pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.popPools),
    random_steering: loadBalancerRulesOverridesRandomSteeringToTerraform(struct!.randomSteering),
    region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.regionPools),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_attributes: loadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct!.sessionAffinityAttributes),
    session_affinity_ttl: cdktf.numberToTerraform(struct!.sessionAffinityTtl),
    steering_policy: cdktf.stringToTerraform(struct!.steeringPolicy),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function loadBalancerRulesOverridesToHclTerraform(struct?: LoadBalancerRulesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_routing: {
      value: loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct!.adaptiveRouting),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadBalancerRulesOverridesAdaptiveRouting",
    },
    country_pools: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.countryPools),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    default_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultPools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fallback_pool: {
      value: cdktf.stringToHclTerraform(struct!.fallbackPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_strategy: {
      value: loadBalancerRulesOverridesLocationStrategyToHclTerraform(struct!.locationStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadBalancerRulesOverridesLocationStrategy",
    },
    pop_pools: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.popPools),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    random_steering: {
      value: loadBalancerRulesOverridesRandomSteeringToHclTerraform(struct!.randomSteering),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadBalancerRulesOverridesRandomSteering",
    },
    region_pools: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.regionPools),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_affinity_attributes: {
      value: loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct!.sessionAffinityAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadBalancerRulesOverridesSessionAffinityAttributes",
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

export class LoadBalancerRulesOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerRulesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveRouting = this._adaptiveRouting?.internalValue;
    }
    if (this._countryPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryPools = this._countryPools;
    }
    if (this._defaultPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPools = this._defaultPools;
    }
    if (this._fallbackPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackPool = this._fallbackPool;
    }
    if (this._locationStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationStrategy = this._locationStrategy?.internalValue;
    }
    if (this._popPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.popPools = this._popPools;
    }
    if (this._randomSteering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomSteering = this._randomSteering?.internalValue;
    }
    if (this._regionPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionPools = this._regionPools;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._sessionAffinityAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityAttributes = this._sessionAffinityAttributes?.internalValue;
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

  public set internalValue(value: LoadBalancerRulesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adaptiveRouting.internalValue = undefined;
      this._countryPools = undefined;
      this._defaultPools = undefined;
      this._fallbackPool = undefined;
      this._locationStrategy.internalValue = undefined;
      this._popPools = undefined;
      this._randomSteering.internalValue = undefined;
      this._regionPools = undefined;
      this._sessionAffinity = undefined;
      this._sessionAffinityAttributes.internalValue = undefined;
      this._sessionAffinityTtl = undefined;
      this._steeringPolicy = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adaptiveRouting.internalValue = value.adaptiveRouting;
      this._countryPools = value.countryPools;
      this._defaultPools = value.defaultPools;
      this._fallbackPool = value.fallbackPool;
      this._locationStrategy.internalValue = value.locationStrategy;
      this._popPools = value.popPools;
      this._randomSteering.internalValue = value.randomSteering;
      this._regionPools = value.regionPools;
      this._sessionAffinity = value.sessionAffinity;
      this._sessionAffinityAttributes.internalValue = value.sessionAffinityAttributes;
      this._sessionAffinityTtl = value.sessionAffinityTtl;
      this._steeringPolicy = value.steeringPolicy;
      this._ttl = value.ttl;
    }
  }

  // adaptive_routing - computed: true, optional: true, required: false
  private _adaptiveRouting = new LoadBalancerRulesOverridesAdaptiveRoutingOutputReference(this, "adaptive_routing");
  public get adaptiveRouting() {
    return this._adaptiveRouting;
  }
  public putAdaptiveRouting(value: LoadBalancerRulesOverridesAdaptiveRouting) {
    this._adaptiveRouting.internalValue = value;
  }
  public resetAdaptiveRouting() {
    this._adaptiveRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveRoutingInput() {
    return this._adaptiveRouting.internalValue;
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

  // default_pools - computed: true, optional: true, required: false
  private _defaultPools?: string[]; 
  public get defaultPools() {
    return this.getListAttribute('default_pools');
  }
  public set defaultPools(value: string[]) {
    this._defaultPools = value;
  }
  public resetDefaultPools() {
    this._defaultPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolsInput() {
    return this._defaultPools;
  }

  // fallback_pool - computed: true, optional: true, required: false
  private _fallbackPool?: string; 
  public get fallbackPool() {
    return this.getStringAttribute('fallback_pool');
  }
  public set fallbackPool(value: string) {
    this._fallbackPool = value;
  }
  public resetFallbackPool() {
    this._fallbackPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPoolInput() {
    return this._fallbackPool;
  }

  // location_strategy - computed: true, optional: true, required: false
  private _locationStrategy = new LoadBalancerRulesOverridesLocationStrategyOutputReference(this, "location_strategy");
  public get locationStrategy() {
    return this._locationStrategy;
  }
  public putLocationStrategy(value: LoadBalancerRulesOverridesLocationStrategy) {
    this._locationStrategy.internalValue = value;
  }
  public resetLocationStrategy() {
    this._locationStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationStrategyInput() {
    return this._locationStrategy.internalValue;
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

  // random_steering - computed: true, optional: true, required: false
  private _randomSteering = new LoadBalancerRulesOverridesRandomSteeringOutputReference(this, "random_steering");
  public get randomSteering() {
    return this._randomSteering;
  }
  public putRandomSteering(value: LoadBalancerRulesOverridesRandomSteering) {
    this._randomSteering.internalValue = value;
  }
  public resetRandomSteering() {
    this._randomSteering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSteeringInput() {
    return this._randomSteering.internalValue;
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

  // session_affinity - computed: true, optional: true, required: false
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

  // session_affinity_attributes - computed: true, optional: true, required: false
  private _sessionAffinityAttributes = new LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
  public get sessionAffinityAttributes() {
    return this._sessionAffinityAttributes;
  }
  public putSessionAffinityAttributes(value: LoadBalancerRulesOverridesSessionAffinityAttributes) {
    this._sessionAffinityAttributes.internalValue = value;
  }
  public resetSessionAffinityAttributes() {
    this._sessionAffinityAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityAttributesInput() {
    return this._sessionAffinityAttributes.internalValue;
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
export interface LoadBalancerRules {
  /**
  * The condition expressions to evaluate. If the condition evaluates to true, the overrides or fixed_response in this rule will be applied. An empty condition is always true. For more details on condition expressions, please see https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#condition LoadBalancer#condition}
  */
  readonly condition?: string;
  /**
  * Disable this specific rule. It will no longer be evaluated by this load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#disabled LoadBalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A collection of fields used to directly respond to the eyeball instead of routing to a pool. If a fixed_response is supplied the rule will be marked as terminates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#fixed_response LoadBalancer#fixed_response}
  */
  readonly fixedResponse?: LoadBalancerRulesFixedResponse;
  /**
  * Name of this rule. Only used for human readability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#name LoadBalancer#name}
  */
  readonly name?: string;
  /**
  * A collection of overrides to apply to the load balancer when this rule's condition is true. All fields are optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#overrides LoadBalancer#overrides}
  */
  readonly overrides?: LoadBalancerRulesOverrides;
  /**
  * The order in which rules should be executed in relation to each other. Lower values are executed first. Values do not need to be sequential. If no value is provided for any rule the array order of the rules field will be used to assign a priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#priority LoadBalancer#priority}
  */
  readonly priority?: number;
  /**
  * If this rule's condition is true, this causes rule evaluation to stop after processing this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#terminates LoadBalancer#terminates}
  */
  readonly terminates?: boolean | cdktf.IResolvable;
}

export function loadBalancerRulesToTerraform(struct?: LoadBalancerRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    fixed_response: loadBalancerRulesFixedResponseToTerraform(struct!.fixedResponse),
    name: cdktf.stringToTerraform(struct!.name),
    overrides: loadBalancerRulesOverridesToTerraform(struct!.overrides),
    priority: cdktf.numberToTerraform(struct!.priority),
    terminates: cdktf.booleanToTerraform(struct!.terminates),
  }
}


export function loadBalancerRulesToHclTerraform(struct?: LoadBalancerRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_response: {
      value: loadBalancerRulesFixedResponseToHclTerraform(struct!.fixedResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadBalancerRulesFixedResponse",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overrides: {
      value: loadBalancerRulesOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadBalancerRulesOverrides",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    terminates: {
      value: cdktf.booleanToHclTerraform(struct!.terminates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LoadBalancerRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._terminates !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminates = this._terminates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._disabled = undefined;
      this._fixedResponse.internalValue = undefined;
      this._name = undefined;
      this._overrides.internalValue = undefined;
      this._priority = undefined;
      this._terminates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._disabled = value.disabled;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._name = value.name;
      this._overrides.internalValue = value.overrides;
      this._priority = value.priority;
      this._terminates = value.terminates;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // fixed_response - computed: true, optional: true, required: false
  private _fixedResponse = new LoadBalancerRulesFixedResponseOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: LoadBalancerRulesFixedResponse) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overrides - computed: true, optional: true, required: false
  private _overrides = new LoadBalancerRulesOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: LoadBalancerRulesOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // terminates - computed: true, optional: true, required: false
  private _terminates?: boolean | cdktf.IResolvable; 
  public get terminates() {
    return this.getBooleanAttribute('terminates');
  }
  public set terminates(value: boolean | cdktf.IResolvable) {
    this._terminates = value;
  }
  public resetTerminates() {
    this._terminates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatesInput() {
    return this._terminates;
  }
}

export class LoadBalancerRulesList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRules[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOutputReference {
    return new LoadBalancerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerSessionAffinityAttributes {
  /**
  * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}
  */
  readonly drainDuration?: number;
  /**
  * Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#headers LoadBalancer#headers}
  */
  readonly headers?: string[];
  /**
  * When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. The supported values are:
  * - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.
  * - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}
  */
  readonly requireAllHeaders?: boolean | cdktf.IResolvable;
  /**
  * Configures the SameSite attribute on session affinity cookie. Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
  * Available values: "Auto", "Lax", "None", "Strict".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}
  */
  readonly samesite?: string;
  /**
  * Configures the Secure attribute on session affinity cookie. Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
  * Available values: "Auto", "Always", "Never".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#secure LoadBalancer#secure}
  */
  readonly secure?: string;
  /**
  * Configures the zero-downtime failover between origins within a pool when session affinity is enabled. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are:
  * - `"none"`: No failover takes place for sessions pinned to the origin (default).
  * - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping.
  * - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
  * Available values: "none", "temporary", "sticky".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}
  */
  readonly zeroDowntimeFailover?: string;
}

export function loadBalancerSessionAffinityAttributesToTerraform(struct?: LoadBalancerSessionAffinityAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_duration: cdktf.numberToTerraform(struct!.drainDuration),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    require_all_headers: cdktf.booleanToTerraform(struct!.requireAllHeaders),
    samesite: cdktf.stringToTerraform(struct!.samesite),
    secure: cdktf.stringToTerraform(struct!.secure),
    zero_downtime_failover: cdktf.stringToTerraform(struct!.zeroDowntimeFailover),
  }
}


export function loadBalancerSessionAffinityAttributesToHclTerraform(struct?: LoadBalancerSessionAffinityAttributes | cdktf.IResolvable): any {
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
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    require_all_headers: {
      value: cdktf.booleanToHclTerraform(struct!.requireAllHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite: {
      value: cdktf.stringToHclTerraform(struct!.samesite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.stringToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_downtime_failover: {
      value: cdktf.stringToHclTerraform(struct!.zeroDowntimeFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerSessionAffinityAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainDuration = this._drainDuration;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._requireAllHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAllHeaders = this._requireAllHeaders;
    }
    if (this._samesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesite = this._samesite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    if (this._zeroDowntimeFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroDowntimeFailover = this._zeroDowntimeFailover;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerSessionAffinityAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drainDuration = undefined;
      this._headers = undefined;
      this._requireAllHeaders = undefined;
      this._samesite = undefined;
      this._secure = undefined;
      this._zeroDowntimeFailover = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drainDuration = value.drainDuration;
      this._headers = value.headers;
      this._requireAllHeaders = value.requireAllHeaders;
      this._samesite = value.samesite;
      this._secure = value.secure;
      this._zeroDowntimeFailover = value.zeroDowntimeFailover;
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

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // require_all_headers - computed: true, optional: true, required: false
  private _requireAllHeaders?: boolean | cdktf.IResolvable; 
  public get requireAllHeaders() {
    return this.getBooleanAttribute('require_all_headers');
  }
  public set requireAllHeaders(value: boolean | cdktf.IResolvable) {
    this._requireAllHeaders = value;
  }
  public resetRequireAllHeaders() {
    this._requireAllHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAllHeadersInput() {
    return this._requireAllHeaders;
  }

  // samesite - computed: true, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // zero_downtime_failover - computed: true, optional: true, required: false
  private _zeroDowntimeFailover?: string; 
  public get zeroDowntimeFailover() {
    return this.getStringAttribute('zero_downtime_failover');
  }
  public set zeroDowntimeFailover(value: string) {
    this._zeroDowntimeFailover = value;
  }
  public resetZeroDowntimeFailover() {
    this._zeroDowntimeFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroDowntimeFailoverInput() {
    return this._zeroDowntimeFailover;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer cloudflare_load_balancer}
*/
export class LoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancer to import
  * @param importFromId The id of the existing LoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/load_balancer cloudflare_load_balancer} Resource
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
        providerVersion: '5.3.0',
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
    this._adaptiveRouting.internalValue = config.adaptiveRouting;
    this._countryPools = config.countryPools;
    this._defaultPools = config.defaultPools;
    this._description = config.description;
    this._enabled = config.enabled;
    this._fallbackPool = config.fallbackPool;
    this._locationStrategy.internalValue = config.locationStrategy;
    this._name = config.name;
    this._networks = config.networks;
    this._popPools = config.popPools;
    this._proxied = config.proxied;
    this._randomSteering.internalValue = config.randomSteering;
    this._regionPools = config.regionPools;
    this._rules.internalValue = config.rules;
    this._sessionAffinity = config.sessionAffinity;
    this._sessionAffinityAttributes.internalValue = config.sessionAffinityAttributes;
    this._sessionAffinityTtl = config.sessionAffinityTtl;
    this._steeringPolicy = config.steeringPolicy;
    this._ttl = config.ttl;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adaptive_routing - computed: true, optional: true, required: false
  private _adaptiveRouting = new LoadBalancerAdaptiveRoutingOutputReference(this, "adaptive_routing");
  public get adaptiveRouting() {
    return this._adaptiveRouting;
  }
  public putAdaptiveRouting(value: LoadBalancerAdaptiveRouting) {
    this._adaptiveRouting.internalValue = value;
  }
  public resetAdaptiveRouting() {
    this._adaptiveRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveRoutingInput() {
    return this._adaptiveRouting.internalValue;
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

  // default_pools - computed: false, optional: false, required: true
  private _defaultPools?: string[]; 
  public get defaultPools() {
    return this.getListAttribute('default_pools');
  }
  public set defaultPools(value: string[]) {
    this._defaultPools = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolsInput() {
    return this._defaultPools;
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

  // enabled - computed: true, optional: true, required: false
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

  // fallback_pool - computed: false, optional: false, required: true
  private _fallbackPool?: string; 
  public get fallbackPool() {
    return this.getStringAttribute('fallback_pool');
  }
  public set fallbackPool(value: string) {
    this._fallbackPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPoolInput() {
    return this._fallbackPool;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_strategy - computed: true, optional: true, required: false
  private _locationStrategy = new LoadBalancerLocationStrategyOutputReference(this, "location_strategy");
  public get locationStrategy() {
    return this._locationStrategy;
  }
  public putLocationStrategy(value: LoadBalancerLocationStrategy) {
    this._locationStrategy.internalValue = value;
  }
  public resetLocationStrategy() {
    this._locationStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationStrategyInput() {
    return this._locationStrategy.internalValue;
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

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
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

  // proxied - computed: true, optional: true, required: false
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

  // random_steering - computed: true, optional: true, required: false
  private _randomSteering = new LoadBalancerRandomSteeringOutputReference(this, "random_steering");
  public get randomSteering() {
    return this._randomSteering;
  }
  public putRandomSteering(value: LoadBalancerRandomSteering) {
    this._randomSteering.internalValue = value;
  }
  public resetRandomSteering() {
    this._randomSteering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSteeringInput() {
    return this._randomSteering.internalValue;
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

  // rules - computed: true, optional: true, required: false
  private _rules = new LoadBalancerRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: LoadBalancerRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // session_affinity - computed: true, optional: true, required: false
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

  // session_affinity_attributes - computed: true, optional: true, required: false
  private _sessionAffinityAttributes = new LoadBalancerSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
  public get sessionAffinityAttributes() {
    return this._sessionAffinityAttributes;
  }
  public putSessionAffinityAttributes(value: LoadBalancerSessionAffinityAttributes) {
    this._sessionAffinityAttributes.internalValue = value;
  }
  public resetSessionAffinityAttributes() {
    this._sessionAffinityAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityAttributesInput() {
    return this._sessionAffinityAttributes.internalValue;
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

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adaptive_routing: loadBalancerAdaptiveRoutingToTerraform(this._adaptiveRouting.internalValue),
      country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._countryPools),
      default_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultPools),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fallback_pool: cdktf.stringToTerraform(this._fallbackPool),
      location_strategy: loadBalancerLocationStrategyToTerraform(this._locationStrategy.internalValue),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
      pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._popPools),
      proxied: cdktf.booleanToTerraform(this._proxied),
      random_steering: loadBalancerRandomSteeringToTerraform(this._randomSteering.internalValue),
      region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._regionPools),
      rules: cdktf.listMapper(loadBalancerRulesToTerraform, false)(this._rules.internalValue),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      session_affinity_attributes: loadBalancerSessionAffinityAttributesToTerraform(this._sessionAffinityAttributes.internalValue),
      session_affinity_ttl: cdktf.numberToTerraform(this._sessionAffinityTtl),
      steering_policy: cdktf.stringToTerraform(this._steeringPolicy),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adaptive_routing: {
        value: loadBalancerAdaptiveRoutingToHclTerraform(this._adaptiveRouting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerAdaptiveRouting",
      },
      country_pools: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._countryPools),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      default_pools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultPools),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallback_pool: {
        value: cdktf.stringToHclTerraform(this._fallbackPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_strategy: {
        value: loadBalancerLocationStrategyToHclTerraform(this._locationStrategy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerLocationStrategy",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pop_pools: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._popPools),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      proxied: {
        value: cdktf.booleanToHclTerraform(this._proxied),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      random_steering: {
        value: loadBalancerRandomSteeringToHclTerraform(this._randomSteering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerRandomSteering",
      },
      region_pools: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._regionPools),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      rules: {
        value: cdktf.listMapperHcl(loadBalancerRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerRulesList",
      },
      session_affinity: {
        value: cdktf.stringToHclTerraform(this._sessionAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_affinity_attributes: {
        value: loadBalancerSessionAffinityAttributesToHclTerraform(this._sessionAffinityAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerSessionAffinityAttributes",
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
