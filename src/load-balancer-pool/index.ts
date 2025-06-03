/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#account_id LoadBalancerPool#account_id}
  */
  readonly accountId: string;
  /**
  * A list of regions from which to run health checks. Null means every Cloudflare data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#check_regions LoadBalancerPool#check_regions}
  */
  readonly checkRegions?: string[];
  /**
  * A human-readable description of the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#description LoadBalancerPool#description}
  */
  readonly description?: string;
  /**
  * Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#latitude LoadBalancerPool#latitude}
  */
  readonly latitude?: number;
  /**
  * Configures load shedding policies and percentages for the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}
  */
  readonly loadShedding?: LoadBalancerPoolLoadShedding;
  /**
  * The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#longitude LoadBalancerPool#longitude}
  */
  readonly longitude?: number;
  /**
  * The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the next available pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}
  */
  readonly minimumOrigins?: number;
  /**
  * The ID of the Monitor to use for checking the health of origins within this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#monitor LoadBalancerPool#monitor}
  */
  readonly monitor?: string;
  /**
  * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}
  */
  readonly name: string;
  /**
  * This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#notification_email LoadBalancerPool#notification_email}
  */
  readonly notificationEmail?: string;
  /**
  * Filter pool and origin health notifications by resource type or health status. Use null to reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#notification_filter LoadBalancerPool#notification_filter}
  */
  readonly notificationFilter?: LoadBalancerPoolNotificationFilter;
  /**
  * Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}
  */
  readonly originSteering?: LoadBalancerPoolOriginSteering;
  /**
  * The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#origins LoadBalancerPool#origins}
  */
  readonly origins: LoadBalancerPoolOrigins[] | cdktf.IResolvable;
}
export interface LoadBalancerPoolLoadShedding {
  /**
  * The percent of traffic to shed from the pool, according to the default policy. Applies to new sessions and traffic without session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#default_percent LoadBalancerPool#default_percent}
  */
  readonly defaultPercent?: number;
  /**
  * The default policy to use when load shedding. A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests originating from a percent of IPs.
  * Available values: "random", "hash".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#default_policy LoadBalancerPool#default_policy}
  */
  readonly defaultPolicy?: string;
  /**
  * The percent of existing sessions to shed from the pool, according to the session policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#session_percent LoadBalancerPool#session_percent}
  */
  readonly sessionPercent?: number;
  /**
  * Only the hash policy is supported for existing sessions (to avoid exponential decay).
  * Available values: "hash".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#session_policy LoadBalancerPool#session_policy}
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


export function loadBalancerPoolLoadSheddingToHclTerraform(struct?: LoadBalancerPoolLoadShedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_percent: {
      value: cdktf.numberToHclTerraform(struct!.defaultPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_policy: {
      value: cdktf.stringToHclTerraform(struct!.defaultPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_percent: {
      value: cdktf.numberToHclTerraform(struct!.sessionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_policy: {
      value: cdktf.stringToHclTerraform(struct!.sessionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPoolLoadSheddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerPoolLoadShedding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPercent = this._defaultPercent;
    }
    if (this._defaultPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPolicy = this._defaultPolicy;
    }
    if (this._sessionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPercent = this._sessionPercent;
    }
    if (this._sessionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPolicy = this._sessionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolLoadShedding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPercent = undefined;
      this._defaultPolicy = undefined;
      this._sessionPercent = undefined;
      this._sessionPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPercent = value.defaultPercent;
      this._defaultPolicy = value.defaultPolicy;
      this._sessionPercent = value.sessionPercent;
      this._sessionPolicy = value.sessionPolicy;
    }
  }

  // default_percent - computed: true, optional: true, required: false
  private _defaultPercent?: number; 
  public get defaultPercent() {
    return this.getNumberAttribute('default_percent');
  }
  public set defaultPercent(value: number) {
    this._defaultPercent = value;
  }
  public resetDefaultPercent() {
    this._defaultPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPercentInput() {
    return this._defaultPercent;
  }

  // default_policy - computed: true, optional: true, required: false
  private _defaultPolicy?: string; 
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }
  public set defaultPolicy(value: string) {
    this._defaultPolicy = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy;
  }

  // session_percent - computed: true, optional: true, required: false
  private _sessionPercent?: number; 
  public get sessionPercent() {
    return this.getNumberAttribute('session_percent');
  }
  public set sessionPercent(value: number) {
    this._sessionPercent = value;
  }
  public resetSessionPercent() {
    this._sessionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPercentInput() {
    return this._sessionPercent;
  }

  // session_policy - computed: true, optional: true, required: false
  private _sessionPolicy?: string; 
  public get sessionPolicy() {
    return this.getStringAttribute('session_policy');
  }
  public set sessionPolicy(value: string) {
    this._sessionPolicy = value;
  }
  public resetSessionPolicy() {
    this._sessionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPolicyInput() {
    return this._sessionPolicy;
  }
}
export interface LoadBalancerPoolNotificationFilterOrigin {
  /**
  * If set true, disable notifications for this type of resource (pool or origin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}
  */
  readonly healthy?: boolean | cdktf.IResolvable;
}

export function loadBalancerPoolNotificationFilterOriginToTerraform(struct?: LoadBalancerPoolNotificationFilterOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    healthy: cdktf.booleanToTerraform(struct!.healthy),
  }
}


export function loadBalancerPoolNotificationFilterOriginToHclTerraform(struct?: LoadBalancerPoolNotificationFilterOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    healthy: {
      value: cdktf.booleanToHclTerraform(struct!.healthy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPoolNotificationFilterOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerPoolNotificationFilterOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._healthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolNotificationFilterOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._healthy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._healthy = value.healthy;
    }
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // healthy - computed: true, optional: true, required: false
  private _healthy?: boolean | cdktf.IResolvable; 
  public get healthy() {
    return this.getBooleanAttribute('healthy');
  }
  public set healthy(value: boolean | cdktf.IResolvable) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
  }
}
export interface LoadBalancerPoolNotificationFilterPool {
  /**
  * If set true, disable notifications for this type of resource (pool or origin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}
  */
  readonly healthy?: boolean | cdktf.IResolvable;
}

export function loadBalancerPoolNotificationFilterPoolToTerraform(struct?: LoadBalancerPoolNotificationFilterPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    healthy: cdktf.booleanToTerraform(struct!.healthy),
  }
}


export function loadBalancerPoolNotificationFilterPoolToHclTerraform(struct?: LoadBalancerPoolNotificationFilterPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    healthy: {
      value: cdktf.booleanToHclTerraform(struct!.healthy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPoolNotificationFilterPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerPoolNotificationFilterPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._healthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolNotificationFilterPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._healthy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._healthy = value.healthy;
    }
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // healthy - computed: true, optional: true, required: false
  private _healthy?: boolean | cdktf.IResolvable; 
  public get healthy() {
    return this.getBooleanAttribute('healthy');
  }
  public set healthy(value: boolean | cdktf.IResolvable) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
  }
}
export interface LoadBalancerPoolNotificationFilter {
  /**
  * Filter options for a particular resource type (pool or origin). Use null to reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#origin LoadBalancerPool#origin}
  */
  readonly origin?: LoadBalancerPoolNotificationFilterOrigin;
  /**
  * Filter options for a particular resource type (pool or origin). Use null to reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#pool LoadBalancerPool#pool}
  */
  readonly pool?: LoadBalancerPoolNotificationFilterPool;
}

export function loadBalancerPoolNotificationFilterToTerraform(struct?: LoadBalancerPoolNotificationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin: loadBalancerPoolNotificationFilterOriginToTerraform(struct!.origin),
    pool: loadBalancerPoolNotificationFilterPoolToTerraform(struct!.pool),
  }
}


export function loadBalancerPoolNotificationFilterToHclTerraform(struct?: LoadBalancerPoolNotificationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin: {
      value: loadBalancerPoolNotificationFilterOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadBalancerPoolNotificationFilterOrigin",
    },
    pool: {
      value: loadBalancerPoolNotificationFilterPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadBalancerPoolNotificationFilterPool",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPoolNotificationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerPoolNotificationFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolNotificationFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._origin.internalValue = undefined;
      this._pool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._origin.internalValue = value.origin;
      this._pool.internalValue = value.pool;
    }
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new LoadBalancerPoolNotificationFilterOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: LoadBalancerPoolNotificationFilterOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // pool - computed: true, optional: true, required: false
  private _pool = new LoadBalancerPoolNotificationFilterPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: LoadBalancerPoolNotificationFilterPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }
}
export interface LoadBalancerPoolOriginSteering {
  /**
  * The type of origin steering policy to use.
  * - `"random"`: Select an origin randomly.
  * - `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP address.
  * - `"least_outstanding_requests"`: Select an origin by taking into consideration origin weights, as well as each origin's number of outstanding requests. Origins with more pending requests are weighted proportionately less relative to others.
  * - `"least_connections"`: Select an origin by taking into consideration origin weights, as well as each origin's number of open connections. Origins with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
  * Available values: "random", "hash", "least_outstanding_requests", "least_connections".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#policy LoadBalancerPool#policy}
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


export function loadBalancerPoolOriginSteeringToHclTerraform(struct?: LoadBalancerPoolOriginSteering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPoolOriginSteeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerPoolOriginSteering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolOriginSteering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface LoadBalancerPoolOriginsHeader {
  /**
  * The 'Host' header allows to override the hostname set in the HTTP request. Current support is 1 'Host' header override per origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#host LoadBalancerPool#host}
  */
  readonly host?: string[];
}

export function loadBalancerPoolOriginsHeaderToTerraform(struct?: LoadBalancerPoolOriginsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.host),
  }
}


export function loadBalancerPoolOriginsHeaderToHclTerraform(struct?: LoadBalancerPoolOriginsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.host),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPoolOriginsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerPoolOriginsHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolOriginsHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string[]; 
  public get host() {
    return this.getListAttribute('host');
  }
  public set host(value: string[]) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}
export interface LoadBalancerPoolOrigins {
  /**
  * The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname. Hostnames entered here should resolve directly to the origin, and not be a hostname proxied by Cloudflare. To set an internal/reserved address, virtual_network_id must also be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#address LoadBalancerPool#address}
  */
  readonly address?: string;
  /**
  * Whether to enable (the default) this origin within the pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#header LoadBalancerPool#header}
  */
  readonly header?: LoadBalancerPoolOriginsHeader;
  /**
  * A human-identifiable name for the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}
  */
  readonly name?: string;
  /**
  * The port for upstream connections. A value of 0 means the default port for the protocol will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#port LoadBalancerPool#port}
  */
  readonly port?: number;
  /**
  * The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#virtual_network_id LoadBalancerPool#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * The weight of this origin relative to other origins in the pool. Based on the configured weight the total traffic is distributed among origins within the pool.
  * - `origin_steering.policy="least_outstanding_requests"`: Use weight to scale the origin's outstanding requests.
  * - `origin_steering.policy="least_connections"`: Use weight to scale the origin's open connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#weight LoadBalancerPool#weight}
  */
  readonly weight?: number;
}

export function loadBalancerPoolOriginsToTerraform(struct?: LoadBalancerPoolOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    header: loadBalancerPoolOriginsHeaderToTerraform(struct!.header),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function loadBalancerPoolOriginsToHclTerraform(struct?: LoadBalancerPoolOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: loadBalancerPoolOriginsHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadBalancerPoolOriginsHeader",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPoolOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerPoolOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._enabled = undefined;
      this._header.internalValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._virtualNetworkId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._enabled = value.enabled;
      this._header.internalValue = value.header;
      this._name = value.name;
      this._port = value.port;
      this._virtualNetworkId = value.virtualNetworkId;
      this._weight = value.weight;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // disabled_at - computed: true, optional: false, required: false
  public get disabledAt() {
    return this.getStringAttribute('disabled_at');
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

  // header - computed: false, optional: true, required: false
  private _header = new LoadBalancerPoolOriginsHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: LoadBalancerPoolOriginsHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // name - computed: false, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class LoadBalancerPoolOriginsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerPoolOrigins[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerPoolOriginsOutputReference {
    return new LoadBalancerPoolOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool}
*/
export class LoadBalancerPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerPool to import
  * @param importFromId The id of the existing LoadBalancerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool} Resource
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
        providerVersion: '5.5.0',
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
    this._accountId = config.accountId;
    this._checkRegions = config.checkRegions;
    this._description = config.description;
    this._enabled = config.enabled;
    this._latitude = config.latitude;
    this._loadShedding.internalValue = config.loadShedding;
    this._longitude = config.longitude;
    this._minimumOrigins = config.minimumOrigins;
    this._monitor = config.monitor;
    this._name = config.name;
    this._notificationEmail = config.notificationEmail;
    this._notificationFilter.internalValue = config.notificationFilter;
    this._originSteering.internalValue = config.originSteering;
    this._origins.internalValue = config.origins;
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

  // check_regions - computed: false, optional: true, required: false
  private _checkRegions?: string[]; 
  public get checkRegions() {
    return this.getListAttribute('check_regions');
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

  // description - computed: true, optional: true, required: false
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

  // disabled_at - computed: true, optional: false, required: false
  public get disabledAt() {
    return this.getStringAttribute('disabled_at');
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

  // id - computed: true, optional: false, required: false
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

  // load_shedding - computed: true, optional: true, required: false
  private _loadShedding = new LoadBalancerPoolLoadSheddingOutputReference(this, "load_shedding");
  public get loadShedding() {
    return this._loadShedding;
  }
  public putLoadShedding(value: LoadBalancerPoolLoadShedding) {
    this._loadShedding.internalValue = value;
  }
  public resetLoadShedding() {
    this._loadShedding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadSheddingInput() {
    return this._loadShedding.internalValue;
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

  // minimum_origins - computed: true, optional: true, required: false
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

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return this.getListAttribute('networks');
  }

  // notification_email - computed: true, optional: true, required: false
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

  // notification_filter - computed: true, optional: true, required: false
  private _notificationFilter = new LoadBalancerPoolNotificationFilterOutputReference(this, "notification_filter");
  public get notificationFilter() {
    return this._notificationFilter;
  }
  public putNotificationFilter(value: LoadBalancerPoolNotificationFilter) {
    this._notificationFilter.internalValue = value;
  }
  public resetNotificationFilter() {
    this._notificationFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationFilterInput() {
    return this._notificationFilter.internalValue;
  }

  // origin_steering - computed: true, optional: true, required: false
  private _originSteering = new LoadBalancerPoolOriginSteeringOutputReference(this, "origin_steering");
  public get originSteering() {
    return this._originSteering;
  }
  public putOriginSteering(value: LoadBalancerPoolOriginSteering) {
    this._originSteering.internalValue = value;
  }
  public resetOriginSteering() {
    this._originSteering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSteeringInput() {
    return this._originSteering.internalValue;
  }

  // origins - computed: false, optional: false, required: true
  private _origins = new LoadBalancerPoolOriginsList(this, "origins", false);
  public get origins() {
    return this._origins;
  }
  public putOrigins(value: LoadBalancerPoolOrigins[] | cdktf.IResolvable) {
    this._origins.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      check_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._checkRegions),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      latitude: cdktf.numberToTerraform(this._latitude),
      load_shedding: loadBalancerPoolLoadSheddingToTerraform(this._loadShedding.internalValue),
      longitude: cdktf.numberToTerraform(this._longitude),
      minimum_origins: cdktf.numberToTerraform(this._minimumOrigins),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      notification_filter: loadBalancerPoolNotificationFilterToTerraform(this._notificationFilter.internalValue),
      origin_steering: loadBalancerPoolOriginSteeringToTerraform(this._originSteering.internalValue),
      origins: cdktf.listMapper(loadBalancerPoolOriginsToTerraform, false)(this._origins.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._checkRegions),
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
      latitude: {
        value: cdktf.numberToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_shedding: {
        value: loadBalancerPoolLoadSheddingToHclTerraform(this._loadShedding.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerPoolLoadShedding",
      },
      longitude: {
        value: cdktf.numberToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_origins: {
        value: cdktf.numberToHclTerraform(this._minimumOrigins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
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
      notification_email: {
        value: cdktf.stringToHclTerraform(this._notificationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_filter: {
        value: loadBalancerPoolNotificationFilterToHclTerraform(this._notificationFilter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerPoolNotificationFilter",
      },
      origin_steering: {
        value: loadBalancerPoolOriginSteeringToHclTerraform(this._originSteering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerPoolOriginSteering",
      },
      origins: {
        value: cdktf.listMapperHcl(loadBalancerPoolOriginsToHclTerraform, false)(this._origins.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerPoolOriginsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
