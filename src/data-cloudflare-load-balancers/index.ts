/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareLoadBalancersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#max_items DataCloudflareLoadBalancers#max_items}
  */
  readonly maxItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#zone_id DataCloudflareLoadBalancers#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareLoadBalancersResultAdaptiveRouting {
}

export function dataCloudflareLoadBalancersResultAdaptiveRoutingToTerraform(struct?: DataCloudflareLoadBalancersResultAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancersResultAdaptiveRoutingToHclTerraform(struct?: DataCloudflareLoadBalancersResultAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultAdaptiveRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultAdaptiveRouting | undefined) {
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
export interface DataCloudflareLoadBalancersResultLocationStrategy {
}

export function dataCloudflareLoadBalancersResultLocationStrategyToTerraform(struct?: DataCloudflareLoadBalancersResultLocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancersResultLocationStrategyToHclTerraform(struct?: DataCloudflareLoadBalancersResultLocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancersResultLocationStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultLocationStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultLocationStrategy | undefined) {
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
export interface DataCloudflareLoadBalancersResultRandomSteering {
}

export function dataCloudflareLoadBalancersResultRandomSteeringToTerraform(struct?: DataCloudflareLoadBalancersResultRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancersResultRandomSteeringToHclTerraform(struct?: DataCloudflareLoadBalancersResultRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancersResultRandomSteeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultRandomSteering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultRandomSteering | undefined) {
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
export interface DataCloudflareLoadBalancersResultRulesFixedResponse {
}

export function dataCloudflareLoadBalancersResultRulesFixedResponseToTerraform(struct?: DataCloudflareLoadBalancersResultRulesFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancersResultRulesFixedResponseToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultRulesFixedResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultRulesFixedResponse | undefined) {
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
export interface DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting {
}

export function dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting | undefined) {
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
export interface DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy {
}

export function dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy | undefined) {
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
export interface DataCloudflareLoadBalancersResultRulesOverridesRandomSteering {
}

export function dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultRulesOverridesRandomSteering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultRulesOverridesRandomSteering | undefined) {
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
export interface DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes {
  /**
  * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}
  */
  readonly drainDuration?: number;
}

export function dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_duration: cdktf.numberToTerraform(struct!.drainDuration),
  }
}


export function dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes): any {
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

export class DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainDuration = this._drainDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes | undefined) {
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
export interface DataCloudflareLoadBalancersResultRulesOverrides {
  /**
  * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}
  */
  readonly countryPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}
  */
  readonly popPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}
  */
  readonly regionPools?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataCloudflareLoadBalancersResultRulesOverridesToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.countryPools),
    pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.popPools),
    region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.regionPools),
  }
}


export function dataCloudflareLoadBalancersResultRulesOverridesToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverrides): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareLoadBalancersResultRulesOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultRulesOverrides | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultRulesOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryPools = undefined;
      this._popPools = undefined;
      this._regionPools = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryPools = value.countryPools;
      this._popPools = value.popPools;
      this._regionPools = value.regionPools;
    }
  }

  // adaptive_routing - computed: true, optional: false, required: false
  private _adaptiveRouting = new DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference(this, "adaptive_routing");
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
  private _locationStrategy = new DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference(this, "location_strategy");
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
  private _randomSteering = new DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference(this, "random_steering");
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
  private _sessionAffinityAttributes = new DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
  public get sessionAffinityAttributes() {
    return this._sessionAffinityAttributes;
  }

  // session_affinity_ttl - computed: true, optional: false, required: false
  public get sessionAffinityTtl() {
    return this.getNumberAttribute('session_affinity_ttl');
  }

  // steering_policy - computed: true, optional: false, required: false
  public get steeringPolicy() {
    return this.getStringAttribute('steering_policy');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}
export interface DataCloudflareLoadBalancersResultRules {
}

export function dataCloudflareLoadBalancersResultRulesToTerraform(struct?: DataCloudflareLoadBalancersResultRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancersResultRulesToHclTerraform(struct?: DataCloudflareLoadBalancersResultRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancersResultRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareLoadBalancersResultRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultRules | undefined) {
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
  private _fixedResponse = new DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataCloudflareLoadBalancersResultRulesOverridesOutputReference(this, "overrides");
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

export class DataCloudflareLoadBalancersResultRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareLoadBalancersResultRulesOutputReference {
    return new DataCloudflareLoadBalancersResultRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareLoadBalancersResultSessionAffinityAttributes {
  /**
  * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}
  */
  readonly drainDuration?: number;
}

export function dataCloudflareLoadBalancersResultSessionAffinityAttributesToTerraform(struct?: DataCloudflareLoadBalancersResultSessionAffinityAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_duration: cdktf.numberToTerraform(struct!.drainDuration),
  }
}


export function dataCloudflareLoadBalancersResultSessionAffinityAttributesToHclTerraform(struct?: DataCloudflareLoadBalancersResultSessionAffinityAttributes): any {
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

export class DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareLoadBalancersResultSessionAffinityAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainDuration = this._drainDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResultSessionAffinityAttributes | undefined) {
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
export interface DataCloudflareLoadBalancersResult {
  /**
  * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}
  */
  readonly countryPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}
  */
  readonly popPools?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}
  */
  readonly regionPools?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataCloudflareLoadBalancersResultToTerraform(struct?: DataCloudflareLoadBalancersResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.countryPools),
    pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.popPools),
    region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.regionPools),
  }
}


export function dataCloudflareLoadBalancersResultToHclTerraform(struct?: DataCloudflareLoadBalancersResult): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareLoadBalancersResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareLoadBalancersResult | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancersResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryPools = undefined;
      this._popPools = undefined;
      this._regionPools = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryPools = value.countryPools;
      this._popPools = value.popPools;
      this._regionPools = value.regionPools;
    }
  }

  // adaptive_routing - computed: true, optional: false, required: false
  private _adaptiveRouting = new DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference(this, "adaptive_routing");
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

  // location_strategy - computed: true, optional: false, required: false
  private _locationStrategy = new DataCloudflareLoadBalancersResultLocationStrategyOutputReference(this, "location_strategy");
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
  private _randomSteering = new DataCloudflareLoadBalancersResultRandomSteeringOutputReference(this, "random_steering");
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
  private _rules = new DataCloudflareLoadBalancersResultRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // session_affinity - computed: true, optional: false, required: false
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }

  // session_affinity_attributes - computed: true, optional: false, required: false
  private _sessionAffinityAttributes = new DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
  public get sessionAffinityAttributes() {
    return this._sessionAffinityAttributes;
  }

  // session_affinity_ttl - computed: true, optional: false, required: false
  public get sessionAffinityTtl() {
    return this.getNumberAttribute('session_affinity_ttl');
  }

  // steering_policy - computed: true, optional: false, required: false
  public get steeringPolicy() {
    return this.getStringAttribute('steering_policy');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
}

export class DataCloudflareLoadBalancersResultList extends cdktf.ComplexList {
  public internalValue? : DataCloudflareLoadBalancersResult[] | cdktf.IResolvable

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
  public get(index: number): DataCloudflareLoadBalancersResultOutputReference {
    return new DataCloudflareLoadBalancersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers cloudflare_load_balancers}
*/
export class DataCloudflareLoadBalancers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareLoadBalancers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancers to import
  * @param importFromId The id of the existing DataCloudflareLoadBalancers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/load_balancers cloudflare_load_balancers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareLoadBalancersConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareLoadBalancersConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancers',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
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
    this._maxItems = config.maxItems;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareLoadBalancersResultList(this, "result", false);
  public get result() {
    return this._result;
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
      max_items: cdktf.numberToTerraform(this._maxItems),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
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
