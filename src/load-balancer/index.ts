/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of pool IDs ordered by their failover priority. Used whenever [`pop_pools`](#pop_pools)/[`country_pools`](#country_pools)/[`region_pools`](#region_pools) are not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#default_pool_ids LoadBalancer#default_pool_ids}
  */
  readonly defaultPoolIds: string[];
  /**
  * Free text description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#description LoadBalancer#description}
  */
  readonly description?: string;
  /**
  * Enable or disable the load balancer. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#enabled LoadBalancer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The pool ID to use when all other pools are detected as unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#fallback_pool_id LoadBalancer#fallback_pool_id}
  */
  readonly fallbackPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#id LoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The DNS hostname to associate with your load balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the load balancer will take precedence and the DNS record will not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#name LoadBalancer#name}
  */
  readonly name: string;
  /**
  * Whether the hostname gets Cloudflare's origin protection. Defaults to `false`. Conflicts with `ttl`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#proxied LoadBalancer#proxied}
  */
  readonly proxied?: boolean | cdktf.IResolvable;
  /**
  * Specifies the type of session affinity the load balancer should use unless specified as `none` or `""` (default). With value `cookie`, on the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy then a new origin server is calculated and used. Value `ip_cookie` behaves the same as `cookie` except the initial origin selection is stable and based on the client's IP address. Available values: `""`, `none`, `cookie`, `ip_cookie`, `header`. Defaults to `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Time, in seconds, until this load balancer's session affinity cookie expires after being created. This parameter is ignored unless a supported session affinity policy is set. The current default of `82800` (23 hours) will be used unless [`session_affinity_ttl`](#session_affinity_ttl) is explicitly set. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. Valid values are between `1800` and `604800`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
  */
  readonly sessionAffinityTtl?: number;
  /**
  * The method the load balancer uses to determine the route to your origin. Value `off` uses [`default_pool_ids`](#default_pool_ids). Value `geo` uses [`pop_pools`](#pop_pools)/[`country_pools`](#country_pools)/[`region_pools`](#region_pools). For non-proxied requests, the [`country`](#country) for [`country_pools`](#country_pools) is determined by [`location_strategy`](#location_strategy). Value `random` selects a pool randomly. Value `dynamic_latency` uses round trip time to select the closest pool in [`default_pool_ids`](#default_pool_ids) (requires pool health checks). Value `proximity` uses the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by [`location_strategy`](#location_strategy) for non-proxied requests. Value `least_outstanding_requests` selects a pool by taking into consideration [`random_steering`](#random_steering) weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others. Value `least_connections` selects a pool by taking into consideration [`random_steering`](#random_steering) weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections. Value `""` maps to `geo` if you use [`pop_pools`](#pop_pools)/[`country_pools`](#country_pools)/[`region_pools`](#region_pools) otherwise `off`. Available values: `off`, `geo`, `dynamic_latency`, `random`, `proximity`, `least_outstanding_requests`, `least_connections`, `""` Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This cannot be set for proxied load balancers. Defaults to `30`. Conflicts with `proxied`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}
  */
  readonly ttl?: number;
  /**
  * The zone ID to add the load balancer to. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}
  */
  readonly zoneId: string;
  /**
  * adaptive_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}
  */
  readonly adaptiveRouting?: LoadBalancerAdaptiveRouting[] | cdktf.IResolvable;
  /**
  * country_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}
  */
  readonly countryPools?: LoadBalancerCountryPools[] | cdktf.IResolvable;
  /**
  * location_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}
  */
  readonly locationStrategy?: LoadBalancerLocationStrategy[] | cdktf.IResolvable;
  /**
  * pop_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}
  */
  readonly popPools?: LoadBalancerPopPools[] | cdktf.IResolvable;
  /**
  * random_steering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}
  */
  readonly randomSteering?: LoadBalancerRandomSteering[] | cdktf.IResolvable;
  /**
  * region_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}
  */
  readonly regionPools?: LoadBalancerRegionPools[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#rules LoadBalancer#rules}
  */
  readonly rules?: LoadBalancerRules[] | cdktf.IResolvable;
  /**
  * session_affinity_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
  */
  readonly sessionAffinityAttributes?: LoadBalancerSessionAffinityAttributes[] | cdktf.IResolvable;
}
export interface LoadBalancerAdaptiveRouting {
  /**
  * Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. When set `false`, zero-downtime failover will only occur between origins within the same pool. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

  // failover_across_pools - computed: false, optional: true, required: false
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

export class LoadBalancerAdaptiveRoutingList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerAdaptiveRouting[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerAdaptiveRoutingOutputReference {
    return new LoadBalancerAdaptiveRoutingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerCountryPools {
  /**
  * A country code which can be determined with the Load Balancing Regions API described [here](https://developers.cloudflare.com/load-balancing/reference/region-mapping-api/). Multiple entries should not be specified with the same country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#country LoadBalancer#country}
  */
  readonly country: string;
  /**
  * A list of pool IDs in failover priority to use in the given country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
}

export function loadBalancerCountryPoolsToTerraform(struct?: LoadBalancerCountryPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
  }
}


export function loadBalancerCountryPoolsToHclTerraform(struct?: LoadBalancerCountryPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerCountryPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerCountryPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerCountryPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._country = undefined;
      this._poolIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._country = value.country;
      this._poolIds = value.poolIds;
    }
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }
}

export class LoadBalancerCountryPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerCountryPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerCountryPoolsOutputReference {
    return new LoadBalancerCountryPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerLocationStrategy {
  /**
  * Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. Value `pop` will use the Cloudflare PoP location. Value `resolver_ip` will use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, it will use the Cloudflare PoP location. Available values: `pop`, `resolver_ip`. Defaults to `pop`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#mode LoadBalancer#mode}
  */
  readonly mode?: string;
  /**
  * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. Value `always` will always prefer ECS, `never` will never prefer ECS, `proximity` will prefer ECS only when [`steering_policy="proximity"`](#steering_policy), and `geo` will prefer ECS only when [`steering_policy="geo"`](#steering_policy). Available values: `always`, `never`, `proximity`, `geo`. Defaults to `proximity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

  // prefer_ecs - computed: false, optional: true, required: false
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

export class LoadBalancerLocationStrategyList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerLocationStrategy[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerLocationStrategyOutputReference {
    return new LoadBalancerLocationStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerPopPools {
  /**
  * A list of pool IDs in failover priority to use for traffic reaching the given PoP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * A 3-letter code for the Point-of-Presence. Allowed values can be found in the list of datacenters on the [status page](https://www.cloudflarestatus.com/). Multiple entries should not be specified with the same PoP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pop LoadBalancer#pop}
  */
  readonly pop: string;
}

export function loadBalancerPopPoolsToTerraform(struct?: LoadBalancerPopPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
    pop: cdktf.stringToTerraform(struct!.pop),
  }
}


export function loadBalancerPopPoolsToHclTerraform(struct?: LoadBalancerPopPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pop: {
      value: cdktf.stringToHclTerraform(struct!.pop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPopPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerPopPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    if (this._pop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop = this._pop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPopPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolIds = undefined;
      this._pop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolIds = value.poolIds;
      this._pop = value.pop;
    }
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }
}

export class LoadBalancerPopPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerPopPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerPopPoolsOutputReference {
    return new LoadBalancerPopPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRandomSteering {
  /**
  * The default weight for pools in the load balancer that are not specified in the [`pool_weights`](#pool_weights) map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}
  */
  readonly defaultWeight?: number;
  /**
  * A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

  // default_weight - computed: false, optional: true, required: false
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

  // pool_weights - computed: false, optional: true, required: false
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

export class LoadBalancerRandomSteeringList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRandomSteering[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRandomSteeringOutputReference {
    return new LoadBalancerRandomSteeringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRegionPools {
  /**
  * A list of pool IDs in failover priority to use in the given region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * A region code which must be in the list defined [here](https://developers.cloudflare.com/load-balancing/reference/region-mapping-api/#list-of-load-balancer-regions). Multiple entries should not be specified with the same region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#region LoadBalancer#region}
  */
  readonly region: string;
}

export function loadBalancerRegionPoolsToTerraform(struct?: LoadBalancerRegionPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function loadBalancerRegionPoolsToHclTerraform(struct?: LoadBalancerRegionPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRegionPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRegionPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRegionPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolIds = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolIds = value.poolIds;
      this._region = value.region;
    }
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class LoadBalancerRegionPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRegionPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRegionPoolsOutputReference {
    return new LoadBalancerRegionPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesFixedResponse {
  /**
  * The value of the HTTP context-type header for this fixed response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#content_type LoadBalancer#content_type}
  */
  readonly contentType?: string;
  /**
  * The value of the HTTP location header for this fixed response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#location LoadBalancer#location}
  */
  readonly location?: string;
  /**
  * The text used as the html body for this fixed response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#message_body LoadBalancer#message_body}
  */
  readonly messageBody?: string;
  /**
  * The HTTP status code used for this fixed response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#status_code LoadBalancer#status_code}
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


export function loadBalancerRulesFixedResponseToHclTerraform(struct?: LoadBalancerRulesFixedResponseOutputReference | LoadBalancerRulesFixedResponse): any {
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
export interface LoadBalancerRulesOverridesAdaptiveRouting {
  /**
  * Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. When set `false`, zero-downtime failover will only occur between origins within the same pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

  // failover_across_pools - computed: false, optional: true, required: false
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

export class LoadBalancerRulesOverridesAdaptiveRoutingList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesAdaptiveRouting[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesAdaptiveRoutingOutputReference {
    return new LoadBalancerRulesOverridesAdaptiveRoutingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverridesCountryPools {
  /**
  * A country code which can be determined with the Load Balancing Regions API described [here](https://developers.cloudflare.com/load-balancing/reference/region-mapping-api/). Multiple entries should not be specified with the same country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#country LoadBalancer#country}
  */
  readonly country: string;
  /**
  * A list of pool IDs in failover priority to use in the given country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
}

export function loadBalancerRulesOverridesCountryPoolsToTerraform(struct?: LoadBalancerRulesOverridesCountryPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
  }
}


export function loadBalancerRulesOverridesCountryPoolsToHclTerraform(struct?: LoadBalancerRulesOverridesCountryPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRulesOverridesCountryPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRulesOverridesCountryPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesCountryPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._country = undefined;
      this._poolIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._country = value.country;
      this._poolIds = value.poolIds;
    }
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }
}

export class LoadBalancerRulesOverridesCountryPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesCountryPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesCountryPoolsOutputReference {
    return new LoadBalancerRulesOverridesCountryPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverridesLocationStrategy {
  /**
  * Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. Value `pop` will use the Cloudflare PoP location. Value `resolver_ip` will use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, it will use the Cloudflare PoP location. Available values: `pop`, `resolver_ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#mode LoadBalancer#mode}
  */
  readonly mode?: string;
  /**
  * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. Value `always` will always prefer ECS, `never` will never prefer ECS, `proximity` will prefer ECS only when [`steering_policy="proximity"`](#steering_policy), and `geo` will prefer ECS only when [`steering_policy="geo"`](#steering_policy). Available values: `always`, `never`, `proximity`, `geo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

  // prefer_ecs - computed: false, optional: true, required: false
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

export class LoadBalancerRulesOverridesLocationStrategyList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesLocationStrategy[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesLocationStrategyOutputReference {
    return new LoadBalancerRulesOverridesLocationStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverridesPopPools {
  /**
  * A list of pool IDs in failover priority to use for traffic reaching the given PoP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * A 3-letter code for the Point-of-Presence. Allowed values can be found in the list of datacenters on the [status page](https://www.cloudflarestatus.com/). Multiple entries should not be specified with the same PoP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pop LoadBalancer#pop}
  */
  readonly pop: string;
}

export function loadBalancerRulesOverridesPopPoolsToTerraform(struct?: LoadBalancerRulesOverridesPopPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
    pop: cdktf.stringToTerraform(struct!.pop),
  }
}


export function loadBalancerRulesOverridesPopPoolsToHclTerraform(struct?: LoadBalancerRulesOverridesPopPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pop: {
      value: cdktf.stringToHclTerraform(struct!.pop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRulesOverridesPopPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRulesOverridesPopPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    if (this._pop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop = this._pop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesPopPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolIds = undefined;
      this._pop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolIds = value.poolIds;
      this._pop = value.pop;
    }
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }
}

export class LoadBalancerRulesOverridesPopPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesPopPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesPopPoolsOutputReference {
    return new LoadBalancerRulesOverridesPopPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverridesRandomSteering {
  /**
  * The default weight for pools in the load balancer that are not specified in the [`pool_weights`](#pool_weights) map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}
  */
  readonly defaultWeight?: number;
  /**
  * A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

  // default_weight - computed: false, optional: true, required: false
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

  // pool_weights - computed: false, optional: true, required: false
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

export class LoadBalancerRulesOverridesRandomSteeringList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesRandomSteering[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesRandomSteeringOutputReference {
    return new LoadBalancerRulesOverridesRandomSteeringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverridesRegionPools {
  /**
  * A list of pool IDs in failover priority to use in the given region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * A region code which must be in the list defined [here](https://developers.cloudflare.com/load-balancing/reference/region-mapping-api/#list-of-load-balancer-regions). Multiple entries should not be specified with the same region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#region LoadBalancer#region}
  */
  readonly region: string;
}

export function loadBalancerRulesOverridesRegionPoolsToTerraform(struct?: LoadBalancerRulesOverridesRegionPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function loadBalancerRulesOverridesRegionPoolsToHclTerraform(struct?: LoadBalancerRulesOverridesRegionPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerRulesOverridesRegionPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRulesOverridesRegionPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesRegionPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolIds = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolIds = value.poolIds;
      this._region = value.region;
    }
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class LoadBalancerRulesOverridesRegionPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesRegionPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesRegionPoolsOutputReference {
    return new LoadBalancerRulesOverridesRegionPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverridesSessionAffinityAttributes {
  /**
  * Configures the HTTP header names to use when header session affinity is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#headers LoadBalancer#headers}
  */
  readonly headers?: string[];
  /**
  * Configures how headers are used when header session affinity is enabled. Set to true to require all headers to be present on requests in order for sessions to be created or false to require at least one header to be present. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}
  */
  readonly requireAllHeaders?: boolean | cdktf.IResolvable;
  /**
  * Configures the SameSite attribute on session affinity cookie. Value `Auto` will be translated to `Lax` or `None` depending if Always Use HTTPS is enabled. Note: when using value `None`, then you can not set [`secure="Never"`](#secure). Available values: `Auto`, `Lax`, `None`, `Strict`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}
  */
  readonly samesite?: string;
  /**
  * Configures the Secure attribute on session affinity cookie. Value `Always` indicates the Secure attribute will be set in the Set-Cookie header, `Never` indicates the Secure attribute will not be set, and `Auto` will set the Secure attribute depending if Always Use HTTPS is enabled. Available values: `Auto`, `Always`, `Never`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#secure LoadBalancer#secure}
  */
  readonly secure?: string;
  /**
  * Configures the zero-downtime failover between origins within a pool when session affinity is enabled. Value `none` means no failover takes place for sessions pinned to the origin. Value `temporary` means traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. Value `sticky` means the session affinity cookie is updated and subsequent requests are sent to the new origin. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. Available values: `none`, `temporary`, `sticky`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}
  */
  readonly zeroDowntimeFailover?: string;
}

export function loadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct?: LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
      this._headers = value.headers;
      this._requireAllHeaders = value.requireAllHeaders;
      this._samesite = value.samesite;
      this._secure = value.secure;
      this._zeroDowntimeFailover = value.zeroDowntimeFailover;
    }
  }

  // headers - computed: false, optional: true, required: false
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

  // require_all_headers - computed: false, optional: true, required: false
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

  // samesite - computed: false, optional: true, required: false
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

  // secure - computed: false, optional: true, required: false
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

  // zero_downtime_failover - computed: false, optional: true, required: false
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

export class LoadBalancerRulesOverridesSessionAffinityAttributesList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesSessionAffinityAttributes[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference {
    return new LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverrides {
  /**
  * A list of pool IDs ordered by their failover priority. Used whenever [`pop_pools`](#pop_pools)/[`country_pools`](#country_pools)/[`region_pools`](#region_pools) are not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}
  */
  readonly defaultPools?: string[];
  /**
  * The pool ID to use when all other pools are detected as unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}
  */
  readonly fallbackPool?: string;
  /**
  * Configure attributes for session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Time, in seconds, until this load balancer's session affinity cookie expires after being created. This parameter is ignored unless a supported session affinity policy is set. The current default of `82800` (23 hours) will be used unless [`session_affinity_ttl`](#session_affinity_ttl) is explicitly set. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. Valid values are between `1800` and `604800`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
  */
  readonly sessionAffinityTtl?: number;
  /**
  * The method the load balancer uses to determine the route to your origin. Value `off` uses [`default_pool_ids`](#default_pool_ids). Value `geo` uses [`pop_pools`](#pop_pools)/[`country_pools`](#country_pools)/[`region_pools`](#region_pools). For non-proxied requests, the [`country`](#country) for [`country_pools`](#country_pools) is determined by [`location_strategy`](#location_strategy). Value `random` selects a pool randomly. Value `dynamic_latency` uses round trip time to select the closest pool in [`default_pool_ids`](#default_pool_ids) (requires pool health checks). Value `proximity` uses the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by [`location_strategy`](#location_strategy) for non-proxied requests. Value `least_outstanding_requests` selects a pool by taking into consideration [`random_steering`](#random_steering) weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others. Value `least_connections` selects a pool by taking into consideration [`random_steering`](#random_steering) weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections. Value `""` maps to `geo` if you use [`pop_pools`](#pop_pools)/[`country_pools`](#country_pools)/[`region_pools`](#region_pools) otherwise `off`. Available values: `off`, `geo`, `dynamic_latency`, `random`, `proximity`, `least_outstanding_requests`, `least_connections`, `""` Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This cannot be set for proxied load balancers. Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}
  */
  readonly ttl?: number;
  /**
  * adaptive_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}
  */
  readonly adaptiveRouting?: LoadBalancerRulesOverridesAdaptiveRouting[] | cdktf.IResolvable;
  /**
  * country_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}
  */
  readonly countryPools?: LoadBalancerRulesOverridesCountryPools[] | cdktf.IResolvable;
  /**
  * location_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}
  */
  readonly locationStrategy?: LoadBalancerRulesOverridesLocationStrategy[] | cdktf.IResolvable;
  /**
  * pop_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}
  */
  readonly popPools?: LoadBalancerRulesOverridesPopPools[] | cdktf.IResolvable;
  /**
  * random_steering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}
  */
  readonly randomSteering?: LoadBalancerRulesOverridesRandomSteering[] | cdktf.IResolvable;
  /**
  * region_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}
  */
  readonly regionPools?: LoadBalancerRulesOverridesRegionPools[] | cdktf.IResolvable;
  /**
  * session_affinity_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
  */
  readonly sessionAffinityAttributes?: LoadBalancerRulesOverridesSessionAffinityAttributes[] | cdktf.IResolvable;
}

export function loadBalancerRulesOverridesToTerraform(struct?: LoadBalancerRulesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultPools),
    fallback_pool: cdktf.stringToTerraform(struct!.fallbackPool),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_ttl: cdktf.numberToTerraform(struct!.sessionAffinityTtl),
    steering_policy: cdktf.stringToTerraform(struct!.steeringPolicy),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    adaptive_routing: cdktf.listMapper(loadBalancerRulesOverridesAdaptiveRoutingToTerraform, true)(struct!.adaptiveRouting),
    country_pools: cdktf.listMapper(loadBalancerRulesOverridesCountryPoolsToTerraform, true)(struct!.countryPools),
    location_strategy: cdktf.listMapper(loadBalancerRulesOverridesLocationStrategyToTerraform, true)(struct!.locationStrategy),
    pop_pools: cdktf.listMapper(loadBalancerRulesOverridesPopPoolsToTerraform, true)(struct!.popPools),
    random_steering: cdktf.listMapper(loadBalancerRulesOverridesRandomSteeringToTerraform, true)(struct!.randomSteering),
    region_pools: cdktf.listMapper(loadBalancerRulesOverridesRegionPoolsToTerraform, true)(struct!.regionPools),
    session_affinity_attributes: cdktf.listMapper(loadBalancerRulesOverridesSessionAffinityAttributesToTerraform, true)(struct!.sessionAffinityAttributes),
  }
}


export function loadBalancerRulesOverridesToHclTerraform(struct?: LoadBalancerRulesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    adaptive_routing: {
      value: cdktf.listMapperHcl(loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform, true)(struct!.adaptiveRouting),
      isBlock: true,
      type: "set",
      storageClassType: "LoadBalancerRulesOverridesAdaptiveRoutingList",
    },
    country_pools: {
      value: cdktf.listMapperHcl(loadBalancerRulesOverridesCountryPoolsToHclTerraform, true)(struct!.countryPools),
      isBlock: true,
      type: "set",
      storageClassType: "LoadBalancerRulesOverridesCountryPoolsList",
    },
    location_strategy: {
      value: cdktf.listMapperHcl(loadBalancerRulesOverridesLocationStrategyToHclTerraform, true)(struct!.locationStrategy),
      isBlock: true,
      type: "set",
      storageClassType: "LoadBalancerRulesOverridesLocationStrategyList",
    },
    pop_pools: {
      value: cdktf.listMapperHcl(loadBalancerRulesOverridesPopPoolsToHclTerraform, true)(struct!.popPools),
      isBlock: true,
      type: "set",
      storageClassType: "LoadBalancerRulesOverridesPopPoolsList",
    },
    random_steering: {
      value: cdktf.listMapperHcl(loadBalancerRulesOverridesRandomSteeringToHclTerraform, true)(struct!.randomSteering),
      isBlock: true,
      type: "set",
      storageClassType: "LoadBalancerRulesOverridesRandomSteeringList",
    },
    region_pools: {
      value: cdktf.listMapperHcl(loadBalancerRulesOverridesRegionPoolsToHclTerraform, true)(struct!.regionPools),
      isBlock: true,
      type: "set",
      storageClassType: "LoadBalancerRulesOverridesRegionPoolsList",
    },
    session_affinity_attributes: {
      value: cdktf.listMapperHcl(loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform, true)(struct!.sessionAffinityAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "LoadBalancerRulesOverridesSessionAffinityAttributesList",
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LoadBalancerRulesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPools = this._defaultPools;
    }
    if (this._fallbackPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackPool = this._fallbackPool;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
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
    if (this._adaptiveRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveRouting = this._adaptiveRouting?.internalValue;
    }
    if (this._countryPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryPools = this._countryPools?.internalValue;
    }
    if (this._locationStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationStrategy = this._locationStrategy?.internalValue;
    }
    if (this._popPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.popPools = this._popPools?.internalValue;
    }
    if (this._randomSteering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomSteering = this._randomSteering?.internalValue;
    }
    if (this._regionPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionPools = this._regionPools?.internalValue;
    }
    if (this._sessionAffinityAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityAttributes = this._sessionAffinityAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPools = undefined;
      this._fallbackPool = undefined;
      this._sessionAffinity = undefined;
      this._sessionAffinityTtl = undefined;
      this._steeringPolicy = undefined;
      this._ttl = undefined;
      this._adaptiveRouting.internalValue = undefined;
      this._countryPools.internalValue = undefined;
      this._locationStrategy.internalValue = undefined;
      this._popPools.internalValue = undefined;
      this._randomSteering.internalValue = undefined;
      this._regionPools.internalValue = undefined;
      this._sessionAffinityAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPools = value.defaultPools;
      this._fallbackPool = value.fallbackPool;
      this._sessionAffinity = value.sessionAffinity;
      this._sessionAffinityTtl = value.sessionAffinityTtl;
      this._steeringPolicy = value.steeringPolicy;
      this._ttl = value.ttl;
      this._adaptiveRouting.internalValue = value.adaptiveRouting;
      this._countryPools.internalValue = value.countryPools;
      this._locationStrategy.internalValue = value.locationStrategy;
      this._popPools.internalValue = value.popPools;
      this._randomSteering.internalValue = value.randomSteering;
      this._regionPools.internalValue = value.regionPools;
      this._sessionAffinityAttributes.internalValue = value.sessionAffinityAttributes;
    }
  }

  // default_pools - computed: false, optional: true, required: false
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

  // fallback_pool - computed: false, optional: true, required: false
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

  // steering_policy - computed: false, optional: true, required: false
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

  // ttl - computed: false, optional: true, required: false
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

  // adaptive_routing - computed: false, optional: true, required: false
  private _adaptiveRouting = new LoadBalancerRulesOverridesAdaptiveRoutingList(this, "adaptive_routing", true);
  public get adaptiveRouting() {
    return this._adaptiveRouting;
  }
  public putAdaptiveRouting(value: LoadBalancerRulesOverridesAdaptiveRouting[] | cdktf.IResolvable) {
    this._adaptiveRouting.internalValue = value;
  }
  public resetAdaptiveRouting() {
    this._adaptiveRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveRoutingInput() {
    return this._adaptiveRouting.internalValue;
  }

  // country_pools - computed: false, optional: true, required: false
  private _countryPools = new LoadBalancerRulesOverridesCountryPoolsList(this, "country_pools", true);
  public get countryPools() {
    return this._countryPools;
  }
  public putCountryPools(value: LoadBalancerRulesOverridesCountryPools[] | cdktf.IResolvable) {
    this._countryPools.internalValue = value;
  }
  public resetCountryPools() {
    this._countryPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryPoolsInput() {
    return this._countryPools.internalValue;
  }

  // location_strategy - computed: false, optional: true, required: false
  private _locationStrategy = new LoadBalancerRulesOverridesLocationStrategyList(this, "location_strategy", true);
  public get locationStrategy() {
    return this._locationStrategy;
  }
  public putLocationStrategy(value: LoadBalancerRulesOverridesLocationStrategy[] | cdktf.IResolvable) {
    this._locationStrategy.internalValue = value;
  }
  public resetLocationStrategy() {
    this._locationStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationStrategyInput() {
    return this._locationStrategy.internalValue;
  }

  // pop_pools - computed: false, optional: true, required: false
  private _popPools = new LoadBalancerRulesOverridesPopPoolsList(this, "pop_pools", true);
  public get popPools() {
    return this._popPools;
  }
  public putPopPools(value: LoadBalancerRulesOverridesPopPools[] | cdktf.IResolvable) {
    this._popPools.internalValue = value;
  }
  public resetPopPools() {
    this._popPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popPoolsInput() {
    return this._popPools.internalValue;
  }

  // random_steering - computed: false, optional: true, required: false
  private _randomSteering = new LoadBalancerRulesOverridesRandomSteeringList(this, "random_steering", true);
  public get randomSteering() {
    return this._randomSteering;
  }
  public putRandomSteering(value: LoadBalancerRulesOverridesRandomSteering[] | cdktf.IResolvable) {
    this._randomSteering.internalValue = value;
  }
  public resetRandomSteering() {
    this._randomSteering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSteeringInput() {
    return this._randomSteering.internalValue;
  }

  // region_pools - computed: false, optional: true, required: false
  private _regionPools = new LoadBalancerRulesOverridesRegionPoolsList(this, "region_pools", true);
  public get regionPools() {
    return this._regionPools;
  }
  public putRegionPools(value: LoadBalancerRulesOverridesRegionPools[] | cdktf.IResolvable) {
    this._regionPools.internalValue = value;
  }
  public resetRegionPools() {
    this._regionPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPoolsInput() {
    return this._regionPools.internalValue;
  }

  // session_affinity_attributes - computed: false, optional: true, required: false
  private _sessionAffinityAttributes = new LoadBalancerRulesOverridesSessionAffinityAttributesList(this, "session_affinity_attributes", true);
  public get sessionAffinityAttributes() {
    return this._sessionAffinityAttributes;
  }
  public putSessionAffinityAttributes(value: LoadBalancerRulesOverridesSessionAffinityAttributes[] | cdktf.IResolvable) {
    this._sessionAffinityAttributes.internalValue = value;
  }
  public resetSessionAffinityAttributes() {
    this._sessionAffinityAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityAttributesInput() {
    return this._sessionAffinityAttributes.internalValue;
  }
}

export class LoadBalancerRulesOverridesList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverrides[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesOutputReference {
    return new LoadBalancerRulesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRules {
  /**
  * The statement to evaluate to determine if this rule's effects should be applied. An empty condition is always true. See [load balancing rules](https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#condition LoadBalancer#condition}
  */
  readonly condition?: string;
  /**
  * A disabled rule will not be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#disabled LoadBalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Human readable name for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#name LoadBalancer#name}
  */
  readonly name: string;
  /**
  * Priority used when determining the order of rule execution. Lower values are executed first. If not provided, the list order will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#priority LoadBalancer#priority}
  */
  readonly priority?: number;
  /**
  * Terminates indicates that if this rule is true no further rules should be executed. Note: setting a [`fixed_response`](#fixed_response) forces this field to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#terminates LoadBalancer#terminates}
  */
  readonly terminates?: boolean | cdktf.IResolvable;
  /**
  * fixed_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#fixed_response LoadBalancer#fixed_response}
  */
  readonly fixedResponse?: LoadBalancerRulesFixedResponse;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#overrides LoadBalancer#overrides}
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
    overrides: cdktf.listMapper(loadBalancerRulesOverridesToTerraform, true)(struct!.overrides),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    fixed_response: {
      value: loadBalancerRulesFixedResponseToHclTerraform(struct!.fixedResponse),
      isBlock: true,
      type: "list",
      storageClassType: "LoadBalancerRulesFixedResponseList",
    },
    overrides: {
      value: cdktf.listMapperHcl(loadBalancerRulesOverridesToHclTerraform, true)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "LoadBalancerRulesOverridesList",
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._terminates !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminates = this._terminates;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._disabled = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._terminates = undefined;
      this._fixedResponse.internalValue = undefined;
      this._overrides.internalValue = undefined;
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
      this._name = value.name;
      this._priority = value.priority;
      this._terminates = value.terminates;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._overrides.internalValue = value.overrides;
    }
  }

  // condition - computed: false, optional: true, required: false
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

  // disabled - computed: false, optional: true, required: false
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

  // fixed_response - computed: false, optional: true, required: false
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

  // overrides - computed: false, optional: true, required: false
  private _overrides = new LoadBalancerRulesOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: LoadBalancerRulesOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
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
  * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}
  */
  readonly drainDuration?: number;
  /**
  * Configures the HTTP header names to use when header session affinity is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#headers LoadBalancer#headers}
  */
  readonly headers?: string[];
  /**
  * Configures how headers are used when header session affinity is enabled. Set to true to require all headers to be present on requests in order for sessions to be created or false to require at least one header to be present. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}
  */
  readonly requireAllHeaders?: boolean | cdktf.IResolvable;
  /**
  * Configures the SameSite attribute on session affinity cookie. Value `Auto` will be translated to `Lax` or `None` depending if Always Use HTTPS is enabled. Note: when using value `None`, then you can not set [`secure="Never"`](#secure). Available values: `Auto`, `Lax`, `None`, `Strict`. Defaults to `Auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}
  */
  readonly samesite?: string;
  /**
  * Configures the Secure attribute on session affinity cookie. Value `Always` indicates the Secure attribute will be set in the Set-Cookie header, `Never` indicates the Secure attribute will not be set, and `Auto` will set the Secure attribute depending if Always Use HTTPS is enabled. Available values: `Auto`, `Always`, `Never`. Defaults to `Auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#secure LoadBalancer#secure}
  */
  readonly secure?: string;
  /**
  * Configures the zero-downtime failover between origins within a pool when session affinity is enabled. Value `none` means no failover takes place for sessions pinned to the origin. Value `temporary` means traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. Value `sticky` means the session affinity cookie is updated and subsequent requests are sent to the new origin. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. Available values: `none`, `temporary`, `sticky`. Defaults to `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

  // drain_duration - computed: false, optional: true, required: false
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

  // headers - computed: false, optional: true, required: false
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

  // require_all_headers - computed: false, optional: true, required: false
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

  // samesite - computed: false, optional: true, required: false
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

  // secure - computed: false, optional: true, required: false
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

  // zero_downtime_failover - computed: false, optional: true, required: false
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

export class LoadBalancerSessionAffinityAttributesList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerSessionAffinityAttributes[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerSessionAffinityAttributesOutputReference {
    return new LoadBalancerSessionAffinityAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer cloudflare_load_balancer}
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
  * @param importFromId The id of the existing LoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/load_balancer cloudflare_load_balancer} Resource
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
        providerVersion: '4.47.0',
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
    this._defaultPoolIds = config.defaultPoolIds;
    this._description = config.description;
    this._enabled = config.enabled;
    this._fallbackPoolId = config.fallbackPoolId;
    this._id = config.id;
    this._name = config.name;
    this._proxied = config.proxied;
    this._sessionAffinity = config.sessionAffinity;
    this._sessionAffinityTtl = config.sessionAffinityTtl;
    this._steeringPolicy = config.steeringPolicy;
    this._ttl = config.ttl;
    this._zoneId = config.zoneId;
    this._adaptiveRouting.internalValue = config.adaptiveRouting;
    this._countryPools.internalValue = config.countryPools;
    this._locationStrategy.internalValue = config.locationStrategy;
    this._popPools.internalValue = config.popPools;
    this._randomSteering.internalValue = config.randomSteering;
    this._regionPools.internalValue = config.regionPools;
    this._rules.internalValue = config.rules;
    this._sessionAffinityAttributes.internalValue = config.sessionAffinityAttributes;
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

  // adaptive_routing - computed: false, optional: true, required: false
  private _adaptiveRouting = new LoadBalancerAdaptiveRoutingList(this, "adaptive_routing", true);
  public get adaptiveRouting() {
    return this._adaptiveRouting;
  }
  public putAdaptiveRouting(value: LoadBalancerAdaptiveRouting[] | cdktf.IResolvable) {
    this._adaptiveRouting.internalValue = value;
  }
  public resetAdaptiveRouting() {
    this._adaptiveRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveRoutingInput() {
    return this._adaptiveRouting.internalValue;
  }

  // country_pools - computed: false, optional: true, required: false
  private _countryPools = new LoadBalancerCountryPoolsList(this, "country_pools", true);
  public get countryPools() {
    return this._countryPools;
  }
  public putCountryPools(value: LoadBalancerCountryPools[] | cdktf.IResolvable) {
    this._countryPools.internalValue = value;
  }
  public resetCountryPools() {
    this._countryPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryPoolsInput() {
    return this._countryPools.internalValue;
  }

  // location_strategy - computed: false, optional: true, required: false
  private _locationStrategy = new LoadBalancerLocationStrategyList(this, "location_strategy", true);
  public get locationStrategy() {
    return this._locationStrategy;
  }
  public putLocationStrategy(value: LoadBalancerLocationStrategy[] | cdktf.IResolvable) {
    this._locationStrategy.internalValue = value;
  }
  public resetLocationStrategy() {
    this._locationStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationStrategyInput() {
    return this._locationStrategy.internalValue;
  }

  // pop_pools - computed: false, optional: true, required: false
  private _popPools = new LoadBalancerPopPoolsList(this, "pop_pools", true);
  public get popPools() {
    return this._popPools;
  }
  public putPopPools(value: LoadBalancerPopPools[] | cdktf.IResolvable) {
    this._popPools.internalValue = value;
  }
  public resetPopPools() {
    this._popPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popPoolsInput() {
    return this._popPools.internalValue;
  }

  // random_steering - computed: false, optional: true, required: false
  private _randomSteering = new LoadBalancerRandomSteeringList(this, "random_steering", true);
  public get randomSteering() {
    return this._randomSteering;
  }
  public putRandomSteering(value: LoadBalancerRandomSteering[] | cdktf.IResolvable) {
    this._randomSteering.internalValue = value;
  }
  public resetRandomSteering() {
    this._randomSteering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSteeringInput() {
    return this._randomSteering.internalValue;
  }

  // region_pools - computed: false, optional: true, required: false
  private _regionPools = new LoadBalancerRegionPoolsList(this, "region_pools", true);
  public get regionPools() {
    return this._regionPools;
  }
  public putRegionPools(value: LoadBalancerRegionPools[] | cdktf.IResolvable) {
    this._regionPools.internalValue = value;
  }
  public resetRegionPools() {
    this._regionPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPoolsInput() {
    return this._regionPools.internalValue;
  }

  // rules - computed: false, optional: true, required: false
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

  // session_affinity_attributes - computed: false, optional: true, required: false
  private _sessionAffinityAttributes = new LoadBalancerSessionAffinityAttributesList(this, "session_affinity_attributes", true);
  public get sessionAffinityAttributes() {
    return this._sessionAffinityAttributes;
  }
  public putSessionAffinityAttributes(value: LoadBalancerSessionAffinityAttributes[] | cdktf.IResolvable) {
    this._sessionAffinityAttributes.internalValue = value;
  }
  public resetSessionAffinityAttributes() {
    this._sessionAffinityAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityAttributesInput() {
    return this._sessionAffinityAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultPoolIds),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fallback_pool_id: cdktf.stringToTerraform(this._fallbackPoolId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proxied: cdktf.booleanToTerraform(this._proxied),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      session_affinity_ttl: cdktf.numberToTerraform(this._sessionAffinityTtl),
      steering_policy: cdktf.stringToTerraform(this._steeringPolicy),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      adaptive_routing: cdktf.listMapper(loadBalancerAdaptiveRoutingToTerraform, true)(this._adaptiveRouting.internalValue),
      country_pools: cdktf.listMapper(loadBalancerCountryPoolsToTerraform, true)(this._countryPools.internalValue),
      location_strategy: cdktf.listMapper(loadBalancerLocationStrategyToTerraform, true)(this._locationStrategy.internalValue),
      pop_pools: cdktf.listMapper(loadBalancerPopPoolsToTerraform, true)(this._popPools.internalValue),
      random_steering: cdktf.listMapper(loadBalancerRandomSteeringToTerraform, true)(this._randomSteering.internalValue),
      region_pools: cdktf.listMapper(loadBalancerRegionPoolsToTerraform, true)(this._regionPools.internalValue),
      rules: cdktf.listMapper(loadBalancerRulesToTerraform, true)(this._rules.internalValue),
      session_affinity_attributes: cdktf.listMapper(loadBalancerSessionAffinityAttributesToTerraform, true)(this._sessionAffinityAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_pool_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultPoolIds),
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
      fallback_pool_id: {
        value: cdktf.stringToHclTerraform(this._fallbackPoolId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxied: {
        value: cdktf.booleanToHclTerraform(this._proxied),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_affinity: {
        value: cdktf.stringToHclTerraform(this._sessionAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      adaptive_routing: {
        value: cdktf.listMapperHcl(loadBalancerAdaptiveRoutingToHclTerraform, true)(this._adaptiveRouting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadBalancerAdaptiveRoutingList",
      },
      country_pools: {
        value: cdktf.listMapperHcl(loadBalancerCountryPoolsToHclTerraform, true)(this._countryPools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadBalancerCountryPoolsList",
      },
      location_strategy: {
        value: cdktf.listMapperHcl(loadBalancerLocationStrategyToHclTerraform, true)(this._locationStrategy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadBalancerLocationStrategyList",
      },
      pop_pools: {
        value: cdktf.listMapperHcl(loadBalancerPopPoolsToHclTerraform, true)(this._popPools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadBalancerPopPoolsList",
      },
      random_steering: {
        value: cdktf.listMapperHcl(loadBalancerRandomSteeringToHclTerraform, true)(this._randomSteering.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadBalancerRandomSteeringList",
      },
      region_pools: {
        value: cdktf.listMapperHcl(loadBalancerRegionPoolsToHclTerraform, true)(this._regionPools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadBalancerRegionPoolsList",
      },
      rules: {
        value: cdktf.listMapperHcl(loadBalancerRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerRulesList",
      },
      session_affinity_attributes: {
        value: cdktf.listMapperHcl(loadBalancerSessionAffinityAttributesToHclTerraform, true)(this._sessionAffinityAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadBalancerSessionAffinityAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
