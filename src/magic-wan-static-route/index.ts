/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicWanStaticRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#account_id MagicWanStaticRoute#account_id}
  */
  readonly accountId: string;
  /**
  * An optional human provided description of the static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}
  */
  readonly description?: string;
  /**
  * The next-hop IP Address for the static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}
  */
  readonly nexthop: string;
  /**
  * IP Prefix in Classless Inter-Domain Routing format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}
  */
  readonly prefix: string;
  /**
  * Priority of the static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#route MagicWanStaticRoute#route}
  */
  readonly route?: MagicWanStaticRouteRoute;
  /**
  * Used only for ECMP routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}
  */
  readonly scope?: MagicWanStaticRouteScope;
  /**
  * Optional weight of the ECMP scope - if provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}
  */
  readonly weight?: number;
}
export interface MagicWanStaticRouteModifiedRouteScope {
}

export function magicWanStaticRouteModifiedRouteScopeToTerraform(struct?: MagicWanStaticRouteModifiedRouteScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanStaticRouteModifiedRouteScopeToHclTerraform(struct?: MagicWanStaticRouteModifiedRouteScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanStaticRouteModifiedRouteScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanStaticRouteModifiedRouteScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanStaticRouteModifiedRouteScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // colo_names - computed: true, optional: false, required: false
  public get coloNames() {
    return this.getListAttribute('colo_names');
  }

  // colo_regions - computed: true, optional: false, required: false
  public get coloRegions() {
    return this.getListAttribute('colo_regions');
  }
}
export interface MagicWanStaticRouteModifiedRoute {
}

export function magicWanStaticRouteModifiedRouteToTerraform(struct?: MagicWanStaticRouteModifiedRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanStaticRouteModifiedRouteToHclTerraform(struct?: MagicWanStaticRouteModifiedRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanStaticRouteModifiedRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanStaticRouteModifiedRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanStaticRouteModifiedRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // scope - computed: true, optional: false, required: false
  private _scope = new MagicWanStaticRouteModifiedRouteScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface MagicWanStaticRouteRouteScope {
  /**
  * List of colo names for the ECMP scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}
  */
  readonly coloNames?: string[];
  /**
  * List of colo regions for the ECMP scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}
  */
  readonly coloRegions?: string[];
}

export function magicWanStaticRouteRouteScopeToTerraform(struct?: MagicWanStaticRouteRouteScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colo_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.coloNames),
    colo_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.coloRegions),
  }
}


export function magicWanStaticRouteRouteScopeToHclTerraform(struct?: MagicWanStaticRouteRouteScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colo_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.coloNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    colo_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.coloRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicWanStaticRouteRouteScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanStaticRouteRouteScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coloNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.coloNames = this._coloNames;
    }
    if (this._coloRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.coloRegions = this._coloRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanStaticRouteRouteScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coloNames = undefined;
      this._coloRegions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coloNames = value.coloNames;
      this._coloRegions = value.coloRegions;
    }
  }

  // colo_names - computed: true, optional: true, required: false
  private _coloNames?: string[]; 
  public get coloNames() {
    return this.getListAttribute('colo_names');
  }
  public set coloNames(value: string[]) {
    this._coloNames = value;
  }
  public resetColoNames() {
    this._coloNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coloNamesInput() {
    return this._coloNames;
  }

  // colo_regions - computed: true, optional: true, required: false
  private _coloRegions?: string[]; 
  public get coloRegions() {
    return this.getListAttribute('colo_regions');
  }
  public set coloRegions(value: string[]) {
    this._coloRegions = value;
  }
  public resetColoRegions() {
    this._coloRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coloRegionsInput() {
    return this._coloRegions;
  }
}
export interface MagicWanStaticRouteRoute {
  /**
  * An optional human provided description of the static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}
  */
  readonly description?: string;
  /**
  * The next-hop IP Address for the static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}
  */
  readonly nexthop?: string;
  /**
  * IP Prefix in Classless Inter-Domain Routing format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Priority of the static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}
  */
  readonly priority?: number;
  /**
  * Used only for ECMP routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}
  */
  readonly scope?: MagicWanStaticRouteRouteScope;
  /**
  * Optional weight of the ECMP scope - if provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}
  */
  readonly weight?: number;
}

export function magicWanStaticRouteRouteToTerraform(struct?: MagicWanStaticRouteRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    nexthop: cdktf.stringToTerraform(struct!.nexthop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    priority: cdktf.numberToTerraform(struct!.priority),
    scope: magicWanStaticRouteRouteScopeToTerraform(struct!.scope),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function magicWanStaticRouteRouteToHclTerraform(struct?: MagicWanStaticRouteRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop: {
      value: cdktf.stringToHclTerraform(struct!.nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
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
    scope: {
      value: magicWanStaticRouteRouteScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "MagicWanStaticRouteRouteScope",
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

export class MagicWanStaticRouteRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanStaticRouteRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanStaticRouteRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nexthop = undefined;
      this._prefix = undefined;
      this._priority = undefined;
      this._scope.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nexthop = value.nexthop;
      this._prefix = value.prefix;
      this._priority = value.priority;
      this._scope.internalValue = value.scope;
      this._weight = value.weight;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // nexthop - computed: true, optional: true, required: false
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  public resetNexthop() {
    this._nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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

  // scope - computed: true, optional: true, required: false
  private _scope = new MagicWanStaticRouteRouteScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: MagicWanStaticRouteRouteScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
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
export interface MagicWanStaticRouteScope {
  /**
  * List of colo names for the ECMP scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}
  */
  readonly coloNames?: string[];
  /**
  * List of colo regions for the ECMP scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}
  */
  readonly coloRegions?: string[];
}

export function magicWanStaticRouteScopeToTerraform(struct?: MagicWanStaticRouteScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colo_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.coloNames),
    colo_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.coloRegions),
  }
}


export function magicWanStaticRouteScopeToHclTerraform(struct?: MagicWanStaticRouteScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colo_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.coloNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    colo_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.coloRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicWanStaticRouteScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanStaticRouteScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coloNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.coloNames = this._coloNames;
    }
    if (this._coloRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.coloRegions = this._coloRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanStaticRouteScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coloNames = undefined;
      this._coloRegions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coloNames = value.coloNames;
      this._coloRegions = value.coloRegions;
    }
  }

  // colo_names - computed: false, optional: true, required: false
  private _coloNames?: string[]; 
  public get coloNames() {
    return this.getListAttribute('colo_names');
  }
  public set coloNames(value: string[]) {
    this._coloNames = value;
  }
  public resetColoNames() {
    this._coloNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coloNamesInput() {
    return this._coloNames;
  }

  // colo_regions - computed: false, optional: true, required: false
  private _coloRegions?: string[]; 
  public get coloRegions() {
    return this.getListAttribute('colo_regions');
  }
  public set coloRegions(value: string[]) {
    this._coloRegions = value;
  }
  public resetColoRegions() {
    this._coloRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coloRegionsInput() {
    return this._coloRegions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route}
*/
export class MagicWanStaticRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_wan_static_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicWanStaticRoute to import
  * @param importFromId The id of the existing MagicWanStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicWanStaticRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_static_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicWanStaticRouteConfig
  */
  public constructor(scope: Construct, id: string, config: MagicWanStaticRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_wan_static_route',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.4.0',
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
    this._description = config.description;
    this._nexthop = config.nexthop;
    this._prefix = config.prefix;
    this._priority = config.priority;
    this._route.internalValue = config.route;
    this._scope.internalValue = config.scope;
    this._weight = config.weight;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getBooleanAttribute('modified');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // modified_route - computed: true, optional: false, required: false
  private _modifiedRoute = new MagicWanStaticRouteModifiedRouteOutputReference(this, "modified_route");
  public get modifiedRoute() {
    return this._modifiedRoute;
  }

  // nexthop - computed: false, optional: false, required: true
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route - computed: true, optional: true, required: false
  private _route = new MagicWanStaticRouteRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: MagicWanStaticRouteRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new MagicWanStaticRouteScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: MagicWanStaticRouteScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // weight - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      nexthop: cdktf.stringToTerraform(this._nexthop),
      prefix: cdktf.stringToTerraform(this._prefix),
      priority: cdktf.numberToTerraform(this._priority),
      route: magicWanStaticRouteRouteToTerraform(this._route.internalValue),
      scope: magicWanStaticRouteScopeToTerraform(this._scope.internalValue),
      weight: cdktf.numberToTerraform(this._weight),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop: {
        value: cdktf.stringToHclTerraform(this._nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route: {
        value: magicWanStaticRouteRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicWanStaticRouteRoute",
      },
      scope: {
        value: magicWanStaticRouteScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicWanStaticRouteScope",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
