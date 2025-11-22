/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TokenValidationRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to take on requests that match operations included in `selector` and fail `expression`.
  * Available values: "log", "block".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#action TokenValidationRules#action}
  */
  readonly action: string;
  /**
  * A human-readable description that gives more details than `title`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#description TokenValidationRules#description}
  */
  readonly description: string;
  /**
  * Toggle rule on or off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#enabled TokenValidationRules#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Rule expression. Requests that fail to match this expression will be subject to `action`.
  * 
  * For details on expressions, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#expression TokenValidationRules#expression}
  */
  readonly expression: string;
  /**
  * Update rule order among zone rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#position TokenValidationRules#position}
  */
  readonly position?: TokenValidationRulesPosition;
  /**
  * Select operations covered by this rule.
  * 
  * For details on selectors, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#selector TokenValidationRules#selector}
  */
  readonly selector: TokenValidationRulesSelector;
  /**
  * A human-readable name for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#title TokenValidationRules#title}
  */
  readonly title: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#zone_id TokenValidationRules#zone_id}
  */
  readonly zoneId: string;
}
export interface TokenValidationRulesPosition {
  /**
  * Move rule to after rule with this ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#after TokenValidationRules#after}
  */
  readonly after?: string;
  /**
  * Move rule to before rule with this ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#before TokenValidationRules#before}
  */
  readonly before?: string;
  /**
  * Move rule to this position
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#index TokenValidationRules#index}
  */
  readonly index?: number;
}

export function tokenValidationRulesPositionToTerraform(struct?: TokenValidationRulesPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: cdktf.stringToTerraform(struct!.after),
    before: cdktf.stringToTerraform(struct!.before),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function tokenValidationRulesPositionToHclTerraform(struct?: TokenValidationRulesPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: cdktf.stringToHclTerraform(struct!.after),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    before: {
      value: cdktf.stringToHclTerraform(struct!.before),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TokenValidationRulesPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TokenValidationRulesPosition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after;
    }
    if (this._before !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenValidationRulesPosition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after = undefined;
      this._before = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after = value.after;
      this._before = value.before;
      this._index = value.index;
    }
  }

  // after - computed: false, optional: true, required: false
  private _after?: string; 
  public get after() {
    return this.getStringAttribute('after');
  }
  public set after(value: string) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // before - computed: false, optional: true, required: false
  private _before?: string; 
  public get before() {
    return this.getStringAttribute('before');
  }
  public set before(value: string) {
    this._before = value;
  }
  public resetBefore() {
    this._before = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}
export interface TokenValidationRulesSelectorExclude {
  /**
  * Excluded operation IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#operation_ids TokenValidationRules#operation_ids}
  */
  readonly operationIds?: string[];
}

export function tokenValidationRulesSelectorExcludeToTerraform(struct?: TokenValidationRulesSelectorExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operationIds),
  }
}


export function tokenValidationRulesSelectorExcludeToHclTerraform(struct?: TokenValidationRulesSelectorExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operationIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TokenValidationRulesSelectorExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TokenValidationRulesSelectorExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationIds = this._operationIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenValidationRulesSelectorExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operationIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operationIds = value.operationIds;
    }
  }

  // operation_ids - computed: false, optional: true, required: false
  private _operationIds?: string[]; 
  public get operationIds() {
    return this.getListAttribute('operation_ids');
  }
  public set operationIds(value: string[]) {
    this._operationIds = value;
  }
  public resetOperationIds() {
    this._operationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationIdsInput() {
    return this._operationIds;
  }
}

export class TokenValidationRulesSelectorExcludeList extends cdktf.ComplexList {
  public internalValue? : TokenValidationRulesSelectorExclude[] | cdktf.IResolvable

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
  public get(index: number): TokenValidationRulesSelectorExcludeOutputReference {
    return new TokenValidationRulesSelectorExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TokenValidationRulesSelectorInclude {
  /**
  * Included hostnames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#host TokenValidationRules#host}
  */
  readonly host?: string[];
}

export function tokenValidationRulesSelectorIncludeToTerraform(struct?: TokenValidationRulesSelectorInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.host),
  }
}


export function tokenValidationRulesSelectorIncludeToHclTerraform(struct?: TokenValidationRulesSelectorInclude | cdktf.IResolvable): any {
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

export class TokenValidationRulesSelectorIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TokenValidationRulesSelectorInclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TokenValidationRulesSelectorInclude | cdktf.IResolvable | undefined) {
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

export class TokenValidationRulesSelectorIncludeList extends cdktf.ComplexList {
  public internalValue? : TokenValidationRulesSelectorInclude[] | cdktf.IResolvable

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
  public get(index: number): TokenValidationRulesSelectorIncludeOutputReference {
    return new TokenValidationRulesSelectorIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TokenValidationRulesSelector {
  /**
  * Ignore operations that were otherwise included by `include`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#exclude TokenValidationRules#exclude}
  */
  readonly exclude?: TokenValidationRulesSelectorExclude[] | cdktf.IResolvable;
  /**
  * Select all matching operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#include TokenValidationRules#include}
  */
  readonly include?: TokenValidationRulesSelectorInclude[] | cdktf.IResolvable;
}

export function tokenValidationRulesSelectorToTerraform(struct?: TokenValidationRulesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(tokenValidationRulesSelectorExcludeToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(tokenValidationRulesSelectorIncludeToTerraform, false)(struct!.include),
  }
}


export function tokenValidationRulesSelectorToHclTerraform(struct?: TokenValidationRulesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(tokenValidationRulesSelectorExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "TokenValidationRulesSelectorExcludeList",
    },
    include: {
      value: cdktf.listMapperHcl(tokenValidationRulesSelectorIncludeToHclTerraform, false)(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "TokenValidationRulesSelectorIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TokenValidationRulesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TokenValidationRulesSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenValidationRulesSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude.internalValue = value.exclude;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new TokenValidationRulesSelectorExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: TokenValidationRulesSelectorExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new TokenValidationRulesSelectorIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: TokenValidationRulesSelectorInclude[] | cdktf.IResolvable) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules cloudflare_token_validation_rules}
*/
export class TokenValidationRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_token_validation_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TokenValidationRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TokenValidationRules to import
  * @param importFromId The id of the existing TokenValidationRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TokenValidationRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_token_validation_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules cloudflare_token_validation_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TokenValidationRulesConfig
  */
  public constructor(scope: Construct, id: string, config: TokenValidationRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_token_validation_rules',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.13.0',
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
    this._action = config.action;
    this._description = config.description;
    this._enabled = config.enabled;
    this._expression = config.expression;
    this._position.internalValue = config.position;
    this._selector.internalValue = config.selector;
    this._title = config.title;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // position - computed: false, optional: true, required: false
  private _position = new TokenValidationRulesPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: TokenValidationRulesPosition) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new TokenValidationRulesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: TokenValidationRulesSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expression: cdktf.stringToTerraform(this._expression),
      position: tokenValidationRulesPositionToTerraform(this._position.internalValue),
      selector: tokenValidationRulesSelectorToTerraform(this._selector.internalValue),
      title: cdktf.stringToTerraform(this._title),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: tokenValidationRulesPositionToHclTerraform(this._position.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TokenValidationRulesPosition",
      },
      selector: {
        value: tokenValidationRulesSelectorToHclTerraform(this._selector.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TokenValidationRulesSelector",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
