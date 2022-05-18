// https://www.terraform.io/docs/providers/cloudflare/r/ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#account_id Ruleset#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#kind Ruleset#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phase Ruleset#phase}
  */
  readonly phase: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#shareable_entitlement_name Ruleset#shareable_entitlement_name}
  */
  readonly shareableEntitlementName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#zone_id Ruleset#zone_id}
  */
  readonly zoneId?: string;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}
  */
  readonly rules?: RulesetRules[] | cdktf.IResolvable;
}
export interface RulesetRulesActionParametersHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#operation Ruleset#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}
  */
  readonly value?: string;
}

export function rulesetRulesActionParametersHeadersToTerraform(struct?: RulesetRulesActionParametersHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRulesActionParametersMatchedData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#public_key Ruleset#public_key}
  */
  readonly publicKey?: string;
}

export function rulesetRulesActionParametersMatchedDataToTerraform(struct?: RulesetRulesActionParametersMatchedDataOutputReference | RulesetRulesActionParametersMatchedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}

export class RulesetRulesActionParametersMatchedDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersMatchedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersMatchedData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKey = value.publicKey;
    }
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}
export interface RulesetRulesActionParametersOverridesCategories {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#category Ruleset#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function rulesetRulesActionParametersOverridesCategoriesToTerraform(struct?: RulesetRulesActionParametersOverridesCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: cdktf.stringToTerraform(struct!.category),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface RulesetRulesActionParametersOverridesRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_threshold Ruleset#score_threshold}
  */
  readonly scoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}
  */
  readonly sensitivityLevel?: string;
}

export function rulesetRulesActionParametersOverridesRulesToTerraform(struct?: RulesetRulesActionParametersOverridesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    score_threshold: cdktf.numberToTerraform(struct!.scoreThreshold),
    sensitivity_level: cdktf.stringToTerraform(struct!.sensitivityLevel),
  }
}

export interface RulesetRulesActionParametersOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * categories block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#categories Ruleset#categories}
  */
  readonly categories?: RulesetRulesActionParametersOverridesCategories[] | cdktf.IResolvable;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}
  */
  readonly rules?: RulesetRulesActionParametersOverridesRules[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersOverridesToTerraform(struct?: RulesetRulesActionParametersOverridesOutputReference | RulesetRulesActionParametersOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    categories: cdktf.listMapper(rulesetRulesActionParametersOverridesCategoriesToTerraform)(struct!.categories),
    rules: cdktf.listMapper(rulesetRulesActionParametersOverridesRulesToTerraform)(struct!.rules),
  }
}

export class RulesetRulesActionParametersOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._enabled = undefined;
      this._categories = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._enabled = value.enabled;
      this._categories = value.categories;
      this._rules = value.rules;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // categories - computed: false, optional: true, required: false
  private _categories?: RulesetRulesActionParametersOverridesCategories[] | cdktf.IResolvable; 
  public get categories() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('categories');
  }
  public set categories(value: RulesetRulesActionParametersOverridesCategories[] | cdktf.IResolvable) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: RulesetRulesActionParametersOverridesRules[] | cdktf.IResolvable; 
  public get rules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rules');
  }
  public set rules(value: RulesetRulesActionParametersOverridesRules[] | cdktf.IResolvable) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface RulesetRulesActionParametersResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}
  */
  readonly statusCode?: number;
}

export function rulesetRulesActionParametersResponseToTerraform(struct?: RulesetRulesActionParametersResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}

export interface RulesetRulesActionParametersUriPath {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}
  */
  readonly value?: string;
}

export function rulesetRulesActionParametersUriPathToTerraform(struct?: RulesetRulesActionParametersUriPathOutputReference | RulesetRulesActionParametersUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class RulesetRulesActionParametersUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._value = value.value;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RulesetRulesActionParametersUriQuery {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}
  */
  readonly value?: string;
}

export function rulesetRulesActionParametersUriQueryToTerraform(struct?: RulesetRulesActionParametersUriQueryOutputReference | RulesetRulesActionParametersUriQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class RulesetRulesActionParametersUriQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersUriQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersUriQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._value = value.value;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RulesetRulesActionParametersUri {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}
  */
  readonly origin?: boolean | cdktf.IResolvable;
  /**
  * path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#path Ruleset#path}
  */
  readonly path?: RulesetRulesActionParametersUriPath;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query Ruleset#query}
  */
  readonly query?: RulesetRulesActionParametersUriQuery;
}

export function rulesetRulesActionParametersUriToTerraform(struct?: RulesetRulesActionParametersUriOutputReference | RulesetRulesActionParametersUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin: cdktf.booleanToTerraform(struct!.origin),
    path: rulesetRulesActionParametersUriPathToTerraform(struct!.path),
    query: rulesetRulesActionParametersUriQueryToTerraform(struct!.query),
  }
}

export class RulesetRulesActionParametersUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._origin = undefined;
      this._path.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._origin = value.origin;
      this._path.internalValue = value.path;
      this._query.internalValue = value.query;
    }
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: boolean | cdktf.IResolvable; 
  public get origin() {
    return this.getBooleanAttribute('origin');
  }
  public set origin(value: boolean | cdktf.IResolvable) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // path - computed: false, optional: true, required: false
  private _path = new RulesetRulesActionParametersUriPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: RulesetRulesActionParametersUriPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new RulesetRulesActionParametersUriQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: RulesetRulesActionParametersUriQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface RulesetRulesActionParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}
  */
  readonly increment?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phases Ruleset#phases}
  */
  readonly phases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#products Ruleset#products}
  */
  readonly products?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}
  */
  readonly rules?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ruleset Ruleset#ruleset}
  */
  readonly ruleset?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rulesets Ruleset#rulesets}
  */
  readonly rulesets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#version Ruleset#version}
  */
  readonly version?: string;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#headers Ruleset#headers}
  */
  readonly headers?: RulesetRulesActionParametersHeaders[] | cdktf.IResolvable;
  /**
  * matched_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#matched_data Ruleset#matched_data}
  */
  readonly matchedData?: RulesetRulesActionParametersMatchedData;
  /**
  * overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#overrides Ruleset#overrides}
  */
  readonly overrides?: RulesetRulesActionParametersOverrides;
  /**
  * response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response Ruleset#response}
  */
  readonly response?: RulesetRulesActionParametersResponse[] | cdktf.IResolvable;
  /**
  * uri block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#uri Ruleset#uri}
  */
  readonly uri?: RulesetRulesActionParametersUri;
}

export function rulesetRulesActionParametersToTerraform(struct?: RulesetRulesActionParametersOutputReference | RulesetRulesActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    increment: cdktf.numberToTerraform(struct!.increment),
    phases: cdktf.listMapper(cdktf.stringToTerraform)(struct!.phases),
    products: cdktf.listMapper(cdktf.stringToTerraform)(struct!.products),
    rules: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.rules),
    ruleset: cdktf.stringToTerraform(struct!.ruleset),
    rulesets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.rulesets),
    version: cdktf.stringToTerraform(struct!.version),
    headers: cdktf.listMapper(rulesetRulesActionParametersHeadersToTerraform)(struct!.headers),
    matched_data: rulesetRulesActionParametersMatchedDataToTerraform(struct!.matchedData),
    overrides: rulesetRulesActionParametersOverridesToTerraform(struct!.overrides),
    response: cdktf.listMapper(rulesetRulesActionParametersResponseToTerraform)(struct!.response),
    uri: rulesetRulesActionParametersUriToTerraform(struct!.uri),
  }
}

export class RulesetRulesActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._increment !== undefined) {
      hasAnyValues = true;
      internalValueResult.increment = this._increment;
    }
    if (this._phases !== undefined) {
      hasAnyValues = true;
      internalValueResult.phases = this._phases;
    }
    if (this._products !== undefined) {
      hasAnyValues = true;
      internalValueResult.products = this._products;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    if (this._ruleset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleset = this._ruleset;
    }
    if (this._rulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesets = this._rulesets;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._matchedData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchedData = this._matchedData?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._increment = undefined;
      this._phases = undefined;
      this._products = undefined;
      this._rules = undefined;
      this._ruleset = undefined;
      this._rulesets = undefined;
      this._version = undefined;
      this._headers = undefined;
      this._matchedData.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._response = undefined;
      this._uri.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._increment = value.increment;
      this._phases = value.phases;
      this._products = value.products;
      this._rules = value.rules;
      this._ruleset = value.ruleset;
      this._rulesets = value.rulesets;
      this._version = value.version;
      this._headers = value.headers;
      this._matchedData.internalValue = value.matchedData;
      this._overrides.internalValue = value.overrides;
      this._response = value.response;
      this._uri.internalValue = value.uri;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // increment - computed: false, optional: true, required: false
  private _increment?: number; 
  public get increment() {
    return this.getNumberAttribute('increment');
  }
  public set increment(value: number) {
    this._increment = value;
  }
  public resetIncrement() {
    this._increment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementInput() {
    return this._increment;
  }

  // phases - computed: false, optional: true, required: false
  private _phases?: string[]; 
  public get phases() {
    return cdktf.Fn.tolist(this.getListAttribute('phases'));
  }
  public set phases(value: string[]) {
    this._phases = value;
  }
  public resetPhases() {
    this._phases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phasesInput() {
    return this._phases;
  }

  // products - computed: false, optional: true, required: false
  private _products?: string[]; 
  public get products() {
    return cdktf.Fn.tolist(this.getListAttribute('products'));
  }
  public set products(value: string[]) {
    this._products = value;
  }
  public resetProducts() {
    this._products = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: { [key: string]: string }; 
  public get rules() {
    return this.getStringMapAttribute('rules');
  }
  public set rules(value: { [key: string]: string }) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // ruleset - computed: false, optional: true, required: false
  private _ruleset?: string; 
  public get ruleset() {
    return this.getStringAttribute('ruleset');
  }
  public set ruleset(value: string) {
    this._ruleset = value;
  }
  public resetRuleset() {
    this._ruleset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetInput() {
    return this._ruleset;
  }

  // rulesets - computed: false, optional: true, required: false
  private _rulesets?: string[]; 
  public get rulesets() {
    return cdktf.Fn.tolist(this.getListAttribute('rulesets'));
  }
  public set rulesets(value: string[]) {
    this._rulesets = value;
  }
  public resetRulesets() {
    this._rulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetsInput() {
    return this._rulesets;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: RulesetRulesActionParametersHeaders[] | cdktf.IResolvable; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers');
  }
  public set headers(value: RulesetRulesActionParametersHeaders[] | cdktf.IResolvable) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // matched_data - computed: false, optional: true, required: false
  private _matchedData = new RulesetRulesActionParametersMatchedDataOutputReference(this, "matched_data");
  public get matchedData() {
    return this._matchedData;
  }
  public putMatchedData(value: RulesetRulesActionParametersMatchedData) {
    this._matchedData.internalValue = value;
  }
  public resetMatchedData() {
    this._matchedData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedDataInput() {
    return this._matchedData.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new RulesetRulesActionParametersOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: RulesetRulesActionParametersOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response?: RulesetRulesActionParametersResponse[] | cdktf.IResolvable; 
  public get response() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response');
  }
  public set response(value: RulesetRulesActionParametersResponse[] | cdktf.IResolvable) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // uri - computed: false, optional: true, required: false
  private _uri = new RulesetRulesActionParametersUriOutputReference(this, "uri");
  public get uri() {
    return this._uri;
  }
  public putUri(value: RulesetRulesActionParametersUri) {
    this._uri.internalValue = value;
  }
  public resetUri() {
    this._uri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri.internalValue;
  }
}
export interface RulesetRulesExposedCredentialCheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#password_expression Ruleset#password_expression}
  */
  readonly passwordExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#username_expression Ruleset#username_expression}
  */
  readonly usernameExpression?: string;
}

export function rulesetRulesExposedCredentialCheckToTerraform(struct?: RulesetRulesExposedCredentialCheckOutputReference | RulesetRulesExposedCredentialCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_expression: cdktf.stringToTerraform(struct!.passwordExpression),
    username_expression: cdktf.stringToTerraform(struct!.usernameExpression),
  }
}

export class RulesetRulesExposedCredentialCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesExposedCredentialCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordExpression = this._passwordExpression;
    }
    if (this._usernameExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameExpression = this._usernameExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesExposedCredentialCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordExpression = undefined;
      this._usernameExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordExpression = value.passwordExpression;
      this._usernameExpression = value.usernameExpression;
    }
  }

  // password_expression - computed: false, optional: true, required: false
  private _passwordExpression?: string; 
  public get passwordExpression() {
    return this.getStringAttribute('password_expression');
  }
  public set passwordExpression(value: string) {
    this._passwordExpression = value;
  }
  public resetPasswordExpression() {
    this._passwordExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpressionInput() {
    return this._passwordExpression;
  }

  // username_expression - computed: false, optional: true, required: false
  private _usernameExpression?: string; 
  public get usernameExpression() {
    return this.getStringAttribute('username_expression');
  }
  public set usernameExpression(value: string) {
    this._usernameExpression = value;
  }
  public resetUsernameExpression() {
    this._usernameExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameExpressionInput() {
    return this._usernameExpression;
  }
}
export interface RulesetRulesLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function rulesetRulesLoggingToTerraform(struct?: RulesetRulesLoggingOutputReference | RulesetRulesLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class RulesetRulesLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface RulesetRulesRatelimit {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#characteristics Ruleset#characteristics}
  */
  readonly characteristics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#counting_expression Ruleset#counting_expression}
  */
  readonly countingExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mitigation_timeout Ruleset#mitigation_timeout}
  */
  readonly mitigationTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#period Ruleset#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_per_period Ruleset#requests_per_period}
  */
  readonly requestsPerPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_to_origin Ruleset#requests_to_origin}
  */
  readonly requestsToOrigin?: boolean | cdktf.IResolvable;
}

export function rulesetRulesRatelimitToTerraform(struct?: RulesetRulesRatelimitOutputReference | RulesetRulesRatelimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    characteristics: cdktf.listMapper(cdktf.stringToTerraform)(struct!.characteristics),
    counting_expression: cdktf.stringToTerraform(struct!.countingExpression),
    mitigation_timeout: cdktf.numberToTerraform(struct!.mitigationTimeout),
    period: cdktf.numberToTerraform(struct!.period),
    requests_per_period: cdktf.numberToTerraform(struct!.requestsPerPeriod),
    requests_to_origin: cdktf.booleanToTerraform(struct!.requestsToOrigin),
  }
}

export class RulesetRulesRatelimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesRatelimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characteristics !== undefined) {
      hasAnyValues = true;
      internalValueResult.characteristics = this._characteristics;
    }
    if (this._countingExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.countingExpression = this._countingExpression;
    }
    if (this._mitigationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigationTimeout = this._mitigationTimeout;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._requestsPerPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerPeriod = this._requestsPerPeriod;
    }
    if (this._requestsToOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsToOrigin = this._requestsToOrigin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesRatelimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._characteristics = undefined;
      this._countingExpression = undefined;
      this._mitigationTimeout = undefined;
      this._period = undefined;
      this._requestsPerPeriod = undefined;
      this._requestsToOrigin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._characteristics = value.characteristics;
      this._countingExpression = value.countingExpression;
      this._mitigationTimeout = value.mitigationTimeout;
      this._period = value.period;
      this._requestsPerPeriod = value.requestsPerPeriod;
      this._requestsToOrigin = value.requestsToOrigin;
    }
  }

  // characteristics - computed: false, optional: true, required: false
  private _characteristics?: string[]; 
  public get characteristics() {
    return cdktf.Fn.tolist(this.getListAttribute('characteristics'));
  }
  public set characteristics(value: string[]) {
    this._characteristics = value;
  }
  public resetCharacteristics() {
    this._characteristics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characteristicsInput() {
    return this._characteristics;
  }

  // counting_expression - computed: false, optional: true, required: false
  private _countingExpression?: string; 
  public get countingExpression() {
    return this.getStringAttribute('counting_expression');
  }
  public set countingExpression(value: string) {
    this._countingExpression = value;
  }
  public resetCountingExpression() {
    this._countingExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countingExpressionInput() {
    return this._countingExpression;
  }

  // mitigation_timeout - computed: false, optional: true, required: false
  private _mitigationTimeout?: number; 
  public get mitigationTimeout() {
    return this.getNumberAttribute('mitigation_timeout');
  }
  public set mitigationTimeout(value: number) {
    this._mitigationTimeout = value;
  }
  public resetMitigationTimeout() {
    this._mitigationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationTimeoutInput() {
    return this._mitigationTimeout;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // requests_per_period - computed: false, optional: true, required: false
  private _requestsPerPeriod?: number; 
  public get requestsPerPeriod() {
    return this.getNumberAttribute('requests_per_period');
  }
  public set requestsPerPeriod(value: number) {
    this._requestsPerPeriod = value;
  }
  public resetRequestsPerPeriod() {
    this._requestsPerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerPeriodInput() {
    return this._requestsPerPeriod;
  }

  // requests_to_origin - computed: false, optional: true, required: false
  private _requestsToOrigin?: boolean | cdktf.IResolvable; 
  public get requestsToOrigin() {
    return this.getBooleanAttribute('requests_to_origin');
  }
  public set requestsToOrigin(value: boolean | cdktf.IResolvable) {
    this._requestsToOrigin = value;
  }
  public resetRequestsToOrigin() {
    this._requestsToOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsToOriginInput() {
    return this._requestsToOrigin;
  }
}
export interface RulesetRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}
  */
  readonly expression: string;
  /**
  * action_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action_parameters Ruleset#action_parameters}
  */
  readonly actionParameters?: RulesetRulesActionParameters;
  /**
  * exposed_credential_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exposed_credential_check Ruleset#exposed_credential_check}
  */
  readonly exposedCredentialCheck?: RulesetRulesExposedCredentialCheck;
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#logging Ruleset#logging}
  */
  readonly logging?: RulesetRulesLogging;
  /**
  * ratelimit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ratelimit Ruleset#ratelimit}
  */
  readonly ratelimit?: RulesetRulesRatelimit;
}

export function rulesetRulesToTerraform(struct?: RulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expression: cdktf.stringToTerraform(struct!.expression),
    action_parameters: rulesetRulesActionParametersToTerraform(struct!.actionParameters),
    exposed_credential_check: rulesetRulesExposedCredentialCheckToTerraform(struct!.exposedCredentialCheck),
    logging: rulesetRulesLoggingToTerraform(struct!.logging),
    ratelimit: rulesetRulesRatelimitToTerraform(struct!.ratelimit),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset cloudflare_ruleset}
*/
export class Ruleset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ruleset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset cloudflare_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulesetConfig
  */
  public constructor(scope: Construct, id: string, config: RulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ruleset',
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
    this._accountId = config.accountId;
    this._description = config.description;
    this._kind = config.kind;
    this._name = config.name;
    this._phase = config.phase;
    this._shareableEntitlementName = config.shareableEntitlementName;
    this._zoneId = config.zoneId;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // phase - computed: false, optional: false, required: true
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // shareable_entitlement_name - computed: false, optional: true, required: false
  private _shareableEntitlementName?: string; 
  public get shareableEntitlementName() {
    return this.getStringAttribute('shareable_entitlement_name');
  }
  public set shareableEntitlementName(value: string) {
    this._shareableEntitlementName = value;
  }
  public resetShareableEntitlementName() {
    this._shareableEntitlementName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareableEntitlementNameInput() {
    return this._shareableEntitlementName;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: RulesetRules[] | cdktf.IResolvable; 
  public get rules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rules');
  }
  public set rules(value: RulesetRules[] | cdktf.IResolvable) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      phase: cdktf.stringToTerraform(this._phase),
      shareable_entitlement_name: cdktf.stringToTerraform(this._shareableEntitlementName),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      rules: cdktf.listMapper(rulesetRulesToTerraform)(this._rules),
    };
  }
}
