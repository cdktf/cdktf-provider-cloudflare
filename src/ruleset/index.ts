// https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#account_id Ruleset#account_id}
  */
  readonly accountId?: string;
  /**
  * Brief summary of the ruleset and its intended use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#description Ruleset#description}
  */
  readonly description?: string;
  /**
  * Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `zone`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#kind Ruleset#kind}
  */
  readonly kind: string;
  /**
  * Name of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#name Ruleset#name}
  */
  readonly name: string;
  /**
  * Point in the request/response lifecycle where the ruleset will be created. Available values: `ddos_l4`, `ddos_l7`, `http_config_settings`, `http_custom_errors`, `http_log_custom_fields`, `http_ratelimit`, `http_request_cache_settings`, `http_request_dynamic_redirect`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_origin`, `http_request_redirect`, `http_request_sanitize`, `http_request_sbfm`, `http_request_transform`, `http_response_compression`, `http_response_firewall_managed`, `http_response_headers_transform`, `magic_transit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#phase Ruleset#phase}
  */
  readonly phase: string;
  /**
  * The zone identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#zone_id Ruleset#zone_id}
  */
  readonly zoneId?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#rules Ruleset#rules}
  */
  readonly rules?: RulesetRules[] | cdktf.IResolvable;
}
export interface RulesetRulesActionParametersAlgorithms {
  /**
  * Name of the compression algorithm to use. Available values: `zstd`, `gzip`, `brotli`, `auto`, `default`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#name Ruleset#name}
  */
  readonly name: string;
}

export function rulesetRulesActionParametersAlgorithmsToTerraform(struct?: RulesetRulesActionParametersAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function rulesetRulesActionParametersAlgorithmsToHclTerraform(struct?: RulesetRulesActionParametersAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersAlgorithmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersAlgorithms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersAlgorithms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class RulesetRulesActionParametersAlgorithmsList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersAlgorithms[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersAlgorithmsOutputReference {
    return new RulesetRulesActionParametersAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersAutominify {
  /**
  * CSS minification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#css Ruleset#css}
  */
  readonly css?: boolean | cdktf.IResolvable;
  /**
  * HTML minification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#html Ruleset#html}
  */
  readonly html?: boolean | cdktf.IResolvable;
  /**
  * JS minification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#js Ruleset#js}
  */
  readonly js?: boolean | cdktf.IResolvable;
}

export function rulesetRulesActionParametersAutominifyToTerraform(struct?: RulesetRulesActionParametersAutominify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    css: cdktf.booleanToTerraform(struct!.css),
    html: cdktf.booleanToTerraform(struct!.html),
    js: cdktf.booleanToTerraform(struct!.js),
  }
}


export function rulesetRulesActionParametersAutominifyToHclTerraform(struct?: RulesetRulesActionParametersAutominify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    css: {
      value: cdktf.booleanToHclTerraform(struct!.css),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    html: {
      value: cdktf.booleanToHclTerraform(struct!.html),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    js: {
      value: cdktf.booleanToHclTerraform(struct!.js),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersAutominifyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersAutominify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._css !== undefined) {
      hasAnyValues = true;
      internalValueResult.css = this._css;
    }
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    if (this._js !== undefined) {
      hasAnyValues = true;
      internalValueResult.js = this._js;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersAutominify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._css = undefined;
      this._html = undefined;
      this._js = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._css = value.css;
      this._html = value.html;
      this._js = value.js;
    }
  }

  // css - computed: false, optional: true, required: false
  private _css?: boolean | cdktf.IResolvable; 
  public get css() {
    return this.getBooleanAttribute('css');
  }
  public set css(value: boolean | cdktf.IResolvable) {
    this._css = value;
  }
  public resetCss() {
    this._css = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssInput() {
    return this._css;
  }

  // html - computed: false, optional: true, required: false
  private _html?: boolean | cdktf.IResolvable; 
  public get html() {
    return this.getBooleanAttribute('html');
  }
  public set html(value: boolean | cdktf.IResolvable) {
    this._html = value;
  }
  public resetHtml() {
    this._html = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }

  // js - computed: false, optional: true, required: false
  private _js?: boolean | cdktf.IResolvable; 
  public get js() {
    return this.getBooleanAttribute('js');
  }
  public set js(value: boolean | cdktf.IResolvable) {
    this._js = value;
  }
  public resetJs() {
    this._js = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInput() {
    return this._js;
  }
}

export class RulesetRulesActionParametersAutominifyList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersAutominify[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersAutominifyOutputReference {
    return new RulesetRulesActionParametersAutominifyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersBrowserTtl {
  /**
  * Default browser TTL. This value is required when override_origin is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#default Ruleset#default}
  */
  readonly default?: number;
  /**
  * Mode of the browser TTL. Available values: `override_origin`, `respect_origin`, `bypass`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#mode Ruleset#mode}
  */
  readonly mode: string;
}

export function rulesetRulesActionParametersBrowserTtlToTerraform(struct?: RulesetRulesActionParametersBrowserTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function rulesetRulesActionParametersBrowserTtlToHclTerraform(struct?: RulesetRulesActionParametersBrowserTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.numberToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersBrowserTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersBrowserTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersBrowserTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._mode = value.mode;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class RulesetRulesActionParametersBrowserTtlList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersBrowserTtl[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersBrowserTtlOutputReference {
    return new RulesetRulesActionParametersBrowserTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyCookie {
  /**
  * List of cookies to check for presence in the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#check_presence Ruleset#check_presence}
  */
  readonly checkPresence?: string[];
  /**
  * List of cookies to include in the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#include Ruleset#include}
  */
  readonly include?: string[];
}

export function rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkPresence),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function rulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_presence: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.checkPresence),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkPresence !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresence = this._checkPresence;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkPresence = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkPresence = value.checkPresence;
      this._include = value.include;
    }
  }

  // check_presence - computed: false, optional: true, required: false
  private _checkPresence?: string[]; 
  public get checkPresence() {
    return cdktf.Fn.tolist(this.getListAttribute('check_presence'));
  }
  public set checkPresence(value: string[]) {
    this._checkPresence = value;
  }
  public resetCheckPresence() {
    this._checkPresence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresenceInput() {
    return this._checkPresence;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyCookieList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersCacheKeyCustomKeyCookie[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference {
    return new RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyHeader {
  /**
  * List of headers to check for presence in the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#check_presence Ruleset#check_presence}
  */
  readonly checkPresence?: string[];
  /**
  * Dictionary of headers mapping to lists of values to check for presence in the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#contains Ruleset#contains}
  */
  readonly contains?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Exclude the origin header from the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#exclude_origin Ruleset#exclude_origin}
  */
  readonly excludeOrigin?: boolean | cdktf.IResolvable;
  /**
  * List of headers to include in the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#include Ruleset#include}
  */
  readonly include?: string[];
}

export function rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkPresence),
    contains: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.contains),
    exclude_origin: cdktf.booleanToTerraform(struct!.excludeOrigin),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function rulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_presence: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.checkPresence),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    contains: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.contains),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    exclude_origin: {
      value: cdktf.booleanToHclTerraform(struct!.excludeOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkPresence !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresence = this._checkPresence;
    }
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._excludeOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeOrigin = this._excludeOrigin;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkPresence = undefined;
      this._contains = undefined;
      this._excludeOrigin = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkPresence = value.checkPresence;
      this._contains = value.contains;
      this._excludeOrigin = value.excludeOrigin;
      this._include = value.include;
    }
  }

  // check_presence - computed: false, optional: true, required: false
  private _checkPresence?: string[]; 
  public get checkPresence() {
    return cdktf.Fn.tolist(this.getListAttribute('check_presence'));
  }
  public set checkPresence(value: string[]) {
    this._checkPresence = value;
  }
  public resetCheckPresence() {
    this._checkPresence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresenceInput() {
    return this._checkPresence;
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get contains() {
    return this.interpolationForAttribute('contains');
  }
  public set contains(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exclude_origin - computed: true, optional: true, required: false
  private _excludeOrigin?: boolean | cdktf.IResolvable; 
  public get excludeOrigin() {
    return this.getBooleanAttribute('exclude_origin');
  }
  public set excludeOrigin(value: boolean | cdktf.IResolvable) {
    this._excludeOrigin = value;
  }
  public resetExcludeOrigin() {
    this._excludeOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeOriginInput() {
    return this._excludeOrigin;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyHeaderList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersCacheKeyCustomKeyHeader[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference {
    return new RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyHost {
  /**
  * Resolve hostname to IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#resolved Ruleset#resolved}
  */
  readonly resolved?: boolean | cdktf.IResolvable;
}

export function rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolved: cdktf.booleanToTerraform(struct!.resolved),
  }
}


export function rulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resolved: {
      value: cdktf.booleanToHclTerraform(struct!.resolved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolved = this._resolved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resolved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resolved = value.resolved;
    }
  }

  // resolved - computed: false, optional: true, required: false
  private _resolved?: boolean | cdktf.IResolvable; 
  public get resolved() {
    return this.getBooleanAttribute('resolved');
  }
  public set resolved(value: boolean | cdktf.IResolvable) {
    this._resolved = value;
  }
  public resetResolved() {
    this._resolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedInput() {
    return this._resolved;
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyHostList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersCacheKeyCustomKeyHost[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference {
    return new RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyQueryString {
  /**
  * List of query string parameters to exclude from the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#exclude Ruleset#exclude}
  */
  readonly exclude?: string[];
  /**
  * List of query string parameters to include in the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#include Ruleset#include}
  */
  readonly include?: string[];
}

export function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyQueryString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyQueryStringList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersCacheKeyCustomKeyQueryString[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference {
    return new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyUser {
  /**
  * Add device type to the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#device_type Ruleset#device_type}
  */
  readonly deviceType?: boolean | cdktf.IResolvable;
  /**
  * Add geo data to the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#geo Ruleset#geo}
  */
  readonly geo?: boolean | cdktf.IResolvable;
  /**
  * Add language data to the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#lang Ruleset#lang}
  */
  readonly lang?: boolean | cdktf.IResolvable;
}

export function rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type: cdktf.booleanToTerraform(struct!.deviceType),
    geo: cdktf.booleanToTerraform(struct!.geo),
    lang: cdktf.booleanToTerraform(struct!.lang),
  }
}


export function rulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_type: {
      value: cdktf.booleanToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geo: {
      value: cdktf.booleanToHclTerraform(struct!.geo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lang: {
      value: cdktf.booleanToHclTerraform(struct!.lang),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._geo !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo;
    }
    if (this._lang !== undefined) {
      hasAnyValues = true;
      internalValueResult.lang = this._lang;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceType = undefined;
      this._geo = undefined;
      this._lang = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceType = value.deviceType;
      this._geo = value.geo;
      this._lang = value.lang;
    }
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: boolean | cdktf.IResolvable; 
  public get deviceType() {
    return this.getBooleanAttribute('device_type');
  }
  public set deviceType(value: boolean | cdktf.IResolvable) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // geo - computed: false, optional: true, required: false
  private _geo?: boolean | cdktf.IResolvable; 
  public get geo() {
    return this.getBooleanAttribute('geo');
  }
  public set geo(value: boolean | cdktf.IResolvable) {
    this._geo = value;
  }
  public resetGeo() {
    this._geo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: boolean | cdktf.IResolvable; 
  public get lang() {
    return this.getBooleanAttribute('lang');
  }
  public set lang(value: boolean | cdktf.IResolvable) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyUserList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersCacheKeyCustomKeyUser[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference {
    return new RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersCacheKeyCustomKey {
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#cookie Ruleset#cookie}
  */
  readonly cookie?: RulesetRulesActionParametersCacheKeyCustomKeyCookie[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#header Ruleset#header}
  */
  readonly header?: RulesetRulesActionParametersCacheKeyCustomKeyHeader[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#host Ruleset#host}
  */
  readonly host?: RulesetRulesActionParametersCacheKeyCustomKeyHost[] | cdktf.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#query_string Ruleset#query_string}
  */
  readonly queryString?: RulesetRulesActionParametersCacheKeyCustomKeyQueryString[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#user Ruleset#user}
  */
  readonly user?: RulesetRulesActionParametersCacheKeyCustomKeyUser[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.listMapper(rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform, true)(struct!.cookie),
    header: cdktf.listMapper(rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform, true)(struct!.header),
    host: cdktf.listMapper(rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform, true)(struct!.host),
    query_string: cdktf.listMapper(rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform, true)(struct!.queryString),
    user: cdktf.listMapper(rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform, true)(struct!.user),
  }
}


export function rulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyCookieList",
    },
    header: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyHeaderList",
    },
    host: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyHostList",
    },
    query_string: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyQueryStringList",
    },
    user: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersCacheKeyCustomKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie.internalValue = undefined;
      this._header.internalValue = undefined;
      this._host.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie.internalValue = value.cookie;
      this._header.internalValue = value.header;
      this._host.internalValue = value.host;
      this._queryString.internalValue = value.queryString;
      this._user.internalValue = value.user;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new RulesetRulesActionParametersCacheKeyCustomKeyCookieList(this, "cookie", false);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: RulesetRulesActionParametersCacheKeyCustomKeyCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new RulesetRulesActionParametersCacheKeyCustomKeyHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: RulesetRulesActionParametersCacheKeyCustomKeyHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new RulesetRulesActionParametersCacheKeyCustomKeyHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: RulesetRulesActionParametersCacheKeyCustomKeyHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryString[] | cdktf.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new RulesetRulesActionParametersCacheKeyCustomKeyUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: RulesetRulesActionParametersCacheKeyCustomKeyUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersCacheKeyCustomKey[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersCacheKeyCustomKeyOutputReference {
    return new RulesetRulesActionParametersCacheKeyCustomKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersCacheKey {
  /**
  * Cache by device type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#cache_by_device_type Ruleset#cache_by_device_type}
  */
  readonly cacheByDeviceType?: boolean | cdktf.IResolvable;
  /**
  * Cache deception armor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#cache_deception_armor Ruleset#cache_deception_armor}
  */
  readonly cacheDeceptionArmor?: boolean | cdktf.IResolvable;
  /**
  * Ignore query strings order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#ignore_query_strings_order Ruleset#ignore_query_strings_order}
  */
  readonly ignoreQueryStringsOrder?: boolean | cdktf.IResolvable;
  /**
  * custom_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#custom_key Ruleset#custom_key}
  */
  readonly customKey?: RulesetRulesActionParametersCacheKeyCustomKey[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersCacheKeyToTerraform(struct?: RulesetRulesActionParametersCacheKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_by_device_type: cdktf.booleanToTerraform(struct!.cacheByDeviceType),
    cache_deception_armor: cdktf.booleanToTerraform(struct!.cacheDeceptionArmor),
    ignore_query_strings_order: cdktf.booleanToTerraform(struct!.ignoreQueryStringsOrder),
    custom_key: cdktf.listMapper(rulesetRulesActionParametersCacheKeyCustomKeyToTerraform, true)(struct!.customKey),
  }
}


export function rulesetRulesActionParametersCacheKeyToHclTerraform(struct?: RulesetRulesActionParametersCacheKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_by_device_type: {
      value: cdktf.booleanToHclTerraform(struct!.cacheByDeviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_deception_armor: {
      value: cdktf.booleanToHclTerraform(struct!.cacheDeceptionArmor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_query_strings_order: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreQueryStringsOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_key: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform, true)(struct!.customKey),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersCacheKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersCacheKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheByDeviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheByDeviceType = this._cacheByDeviceType;
    }
    if (this._cacheDeceptionArmor !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDeceptionArmor = this._cacheDeceptionArmor;
    }
    if (this._ignoreQueryStringsOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreQueryStringsOrder = this._ignoreQueryStringsOrder;
    }
    if (this._customKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKey = this._customKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersCacheKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheByDeviceType = undefined;
      this._cacheDeceptionArmor = undefined;
      this._ignoreQueryStringsOrder = undefined;
      this._customKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheByDeviceType = value.cacheByDeviceType;
      this._cacheDeceptionArmor = value.cacheDeceptionArmor;
      this._ignoreQueryStringsOrder = value.ignoreQueryStringsOrder;
      this._customKey.internalValue = value.customKey;
    }
  }

  // cache_by_device_type - computed: false, optional: true, required: false
  private _cacheByDeviceType?: boolean | cdktf.IResolvable; 
  public get cacheByDeviceType() {
    return this.getBooleanAttribute('cache_by_device_type');
  }
  public set cacheByDeviceType(value: boolean | cdktf.IResolvable) {
    this._cacheByDeviceType = value;
  }
  public resetCacheByDeviceType() {
    this._cacheByDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheByDeviceTypeInput() {
    return this._cacheByDeviceType;
  }

  // cache_deception_armor - computed: false, optional: true, required: false
  private _cacheDeceptionArmor?: boolean | cdktf.IResolvable; 
  public get cacheDeceptionArmor() {
    return this.getBooleanAttribute('cache_deception_armor');
  }
  public set cacheDeceptionArmor(value: boolean | cdktf.IResolvable) {
    this._cacheDeceptionArmor = value;
  }
  public resetCacheDeceptionArmor() {
    this._cacheDeceptionArmor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDeceptionArmorInput() {
    return this._cacheDeceptionArmor;
  }

  // ignore_query_strings_order - computed: false, optional: true, required: false
  private _ignoreQueryStringsOrder?: boolean | cdktf.IResolvable; 
  public get ignoreQueryStringsOrder() {
    return this.getBooleanAttribute('ignore_query_strings_order');
  }
  public set ignoreQueryStringsOrder(value: boolean | cdktf.IResolvable) {
    this._ignoreQueryStringsOrder = value;
  }
  public resetIgnoreQueryStringsOrder() {
    this._ignoreQueryStringsOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreQueryStringsOrderInput() {
    return this._ignoreQueryStringsOrder;
  }

  // custom_key - computed: false, optional: true, required: false
  private _customKey = new RulesetRulesActionParametersCacheKeyCustomKeyList(this, "custom_key", false);
  public get customKey() {
    return this._customKey;
  }
  public putCustomKey(value: RulesetRulesActionParametersCacheKeyCustomKey[] | cdktf.IResolvable) {
    this._customKey.internalValue = value;
  }
  public resetCustomKey() {
    this._customKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyInput() {
    return this._customKey.internalValue;
  }
}

export class RulesetRulesActionParametersCacheKeyList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersCacheKey[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersCacheKeyOutputReference {
    return new RulesetRulesActionParametersCacheKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersCacheReserve {
  /**
  * Determines whether Cloudflare will write the eligible resource to cache reserve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#eligible Ruleset#eligible}
  */
  readonly eligible: boolean | cdktf.IResolvable;
  /**
  * The minimum file size, in bytes, eligible for storage in cache reserve. If omitted and "eligible" is true, Cloudflare will use 0 bytes by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#minimum_file_size Ruleset#minimum_file_size}
  */
  readonly minimumFileSize?: number;
}

export function rulesetRulesActionParametersCacheReserveToTerraform(struct?: RulesetRulesActionParametersCacheReserve | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eligible: cdktf.booleanToTerraform(struct!.eligible),
    minimum_file_size: cdktf.numberToTerraform(struct!.minimumFileSize),
  }
}


export function rulesetRulesActionParametersCacheReserveToHclTerraform(struct?: RulesetRulesActionParametersCacheReserve | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eligible: {
      value: cdktf.booleanToHclTerraform(struct!.eligible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_file_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersCacheReserveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersCacheReserve | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eligible !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligible = this._eligible;
    }
    if (this._minimumFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumFileSize = this._minimumFileSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersCacheReserve | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eligible = undefined;
      this._minimumFileSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eligible = value.eligible;
      this._minimumFileSize = value.minimumFileSize;
    }
  }

  // eligible - computed: false, optional: false, required: true
  private _eligible?: boolean | cdktf.IResolvable; 
  public get eligible() {
    return this.getBooleanAttribute('eligible');
  }
  public set eligible(value: boolean | cdktf.IResolvable) {
    this._eligible = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleInput() {
    return this._eligible;
  }

  // minimum_file_size - computed: false, optional: true, required: false
  private _minimumFileSize?: number; 
  public get minimumFileSize() {
    return this.getNumberAttribute('minimum_file_size');
  }
  public set minimumFileSize(value: number) {
    this._minimumFileSize = value;
  }
  public resetMinimumFileSize() {
    this._minimumFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumFileSizeInput() {
    return this._minimumFileSize;
  }
}

export class RulesetRulesActionParametersCacheReserveList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersCacheReserve[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersCacheReserveOutputReference {
    return new RulesetRulesActionParametersCacheReserveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {
  /**
  * From status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#from Ruleset#from}
  */
  readonly from?: number;
  /**
  * To status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#to Ruleset#to}
  */
  readonly to?: number;
}

export function rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct?: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct?: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference {
    return new RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersEdgeTtlStatusCodeTtl {
  /**
  * Status code for which the edge TTL is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#status_code Ruleset#status_code}
  */
  readonly statusCode?: number;
  /**
  * Status code edge TTL value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#value Ruleset#value}
  */
  readonly value?: number;
  /**
  * status_code_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#status_code_range Ruleset#status_code_range}
  */
  readonly statusCodeRange?: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform(struct?: RulesetRulesActionParametersEdgeTtlStatusCodeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    value: cdktf.numberToTerraform(struct!.value),
    status_code_range: cdktf.listMapper(rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform, true)(struct!.statusCodeRange),
  }
}


export function rulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform(struct?: RulesetRulesActionParametersEdgeTtlStatusCodeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_code_range: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform, true)(struct!.statusCodeRange),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersEdgeTtlStatusCodeTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._statusCodeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeRange = this._statusCodeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersEdgeTtlStatusCodeTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._value = undefined;
      this._statusCodeRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._value = value.value;
      this._statusCodeRange.internalValue = value.statusCodeRange;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // status_code_range - computed: false, optional: true, required: false
  private _statusCodeRange = new RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList(this, "status_code_range", false);
  public get statusCodeRange() {
    return this._statusCodeRange;
  }
  public putStatusCodeRange(value: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange[] | cdktf.IResolvable) {
    this._statusCodeRange.internalValue = value;
  }
  public resetStatusCodeRange() {
    this._statusCodeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeRangeInput() {
    return this._statusCodeRange.internalValue;
  }
}

export class RulesetRulesActionParametersEdgeTtlStatusCodeTtlList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersEdgeTtlStatusCodeTtl[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference {
    return new RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersEdgeTtl {
  /**
  * Default edge TTL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#default Ruleset#default}
  */
  readonly default?: number;
  /**
  * Mode of the edge TTL. Available values: `override_origin`, `respect_origin`, `bypass_by_default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#mode Ruleset#mode}
  */
  readonly mode: string;
  /**
  * status_code_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#status_code_ttl Ruleset#status_code_ttl}
  */
  readonly statusCodeTtl?: RulesetRulesActionParametersEdgeTtlStatusCodeTtl[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersEdgeTtlToTerraform(struct?: RulesetRulesActionParametersEdgeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    mode: cdktf.stringToTerraform(struct!.mode),
    status_code_ttl: cdktf.listMapper(rulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform, true)(struct!.statusCodeTtl),
  }
}


export function rulesetRulesActionParametersEdgeTtlToHclTerraform(struct?: RulesetRulesActionParametersEdgeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.numberToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code_ttl: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform, true)(struct!.statusCodeTtl),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersEdgeTtlStatusCodeTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersEdgeTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersEdgeTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._statusCodeTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeTtl = this._statusCodeTtl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersEdgeTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._mode = undefined;
      this._statusCodeTtl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._mode = value.mode;
      this._statusCodeTtl.internalValue = value.statusCodeTtl;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // status_code_ttl - computed: false, optional: true, required: false
  private _statusCodeTtl = new RulesetRulesActionParametersEdgeTtlStatusCodeTtlList(this, "status_code_ttl", false);
  public get statusCodeTtl() {
    return this._statusCodeTtl;
  }
  public putStatusCodeTtl(value: RulesetRulesActionParametersEdgeTtlStatusCodeTtl[] | cdktf.IResolvable) {
    this._statusCodeTtl.internalValue = value;
  }
  public resetStatusCodeTtl() {
    this._statusCodeTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeTtlInput() {
    return this._statusCodeTtl.internalValue;
  }
}

export class RulesetRulesActionParametersEdgeTtlList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersEdgeTtl[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersEdgeTtlOutputReference {
    return new RulesetRulesActionParametersEdgeTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersFromListStruct {
  /**
  * Expression to use for the list lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#key Ruleset#key}
  */
  readonly key?: string;
  /**
  * Name of the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#name Ruleset#name}
  */
  readonly name?: string;
}

export function rulesetRulesActionParametersFromListStructToTerraform(struct?: RulesetRulesActionParametersFromListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function rulesetRulesActionParametersFromListStructToHclTerraform(struct?: RulesetRulesActionParametersFromListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersFromListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersFromListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersFromListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class RulesetRulesActionParametersFromListStructList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersFromListStruct[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersFromListStructOutputReference {
    return new RulesetRulesActionParametersFromListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersFromValueTargetUrl {
  /**
  * Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Static value to provide as the HTTP request header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#value Ruleset#value}
  */
  readonly value?: string;
}

export function rulesetRulesActionParametersFromValueTargetUrlToTerraform(struct?: RulesetRulesActionParametersFromValueTargetUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rulesetRulesActionParametersFromValueTargetUrlToHclTerraform(struct?: RulesetRulesActionParametersFromValueTargetUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersFromValueTargetUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersFromValueTargetUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: RulesetRulesActionParametersFromValueTargetUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class RulesetRulesActionParametersFromValueTargetUrlList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersFromValueTargetUrl[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersFromValueTargetUrlOutputReference {
    return new RulesetRulesActionParametersFromValueTargetUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersFromValue {
  /**
  * Preserve query string for redirect URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#preserve_query_string Ruleset#preserve_query_string}
  */
  readonly preserveQueryString?: boolean | cdktf.IResolvable;
  /**
  * Status code for redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#status_code Ruleset#status_code}
  */
  readonly statusCode?: number;
  /**
  * target_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#target_url Ruleset#target_url}
  */
  readonly targetUrl?: RulesetRulesActionParametersFromValueTargetUrl[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersFromValueToTerraform(struct?: RulesetRulesActionParametersFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_query_string: cdktf.booleanToTerraform(struct!.preserveQueryString),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    target_url: cdktf.listMapper(rulesetRulesActionParametersFromValueTargetUrlToTerraform, true)(struct!.targetUrl),
  }
}


export function rulesetRulesActionParametersFromValueToHclTerraform(struct?: RulesetRulesActionParametersFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.preserveQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_url: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersFromValueTargetUrlToHclTerraform, true)(struct!.targetUrl),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersFromValueTargetUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersFromValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersFromValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveQueryString = this._preserveQueryString;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._targetUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersFromValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preserveQueryString = undefined;
      this._statusCode = undefined;
      this._targetUrl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preserveQueryString = value.preserveQueryString;
      this._statusCode = value.statusCode;
      this._targetUrl.internalValue = value.targetUrl;
    }
  }

  // preserve_query_string - computed: false, optional: true, required: false
  private _preserveQueryString?: boolean | cdktf.IResolvable; 
  public get preserveQueryString() {
    return this.getBooleanAttribute('preserve_query_string');
  }
  public set preserveQueryString(value: boolean | cdktf.IResolvable) {
    this._preserveQueryString = value;
  }
  public resetPreserveQueryString() {
    this._preserveQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveQueryStringInput() {
    return this._preserveQueryString;
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

  // target_url - computed: false, optional: true, required: false
  private _targetUrl = new RulesetRulesActionParametersFromValueTargetUrlList(this, "target_url", false);
  public get targetUrl() {
    return this._targetUrl;
  }
  public putTargetUrl(value: RulesetRulesActionParametersFromValueTargetUrl[] | cdktf.IResolvable) {
    this._targetUrl.internalValue = value;
  }
  public resetTargetUrl() {
    this._targetUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl.internalValue;
  }
}

export class RulesetRulesActionParametersFromValueList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersFromValue[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersFromValueOutputReference {
    return new RulesetRulesActionParametersFromValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersHeaders {
  /**
  * Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Name of the HTTP request header to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#name Ruleset#name}
  */
  readonly name?: string;
  /**
  * Action to perform on the HTTP request header. Available values: `remove`, `set`, `add`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#operation Ruleset#operation}
  */
  readonly operation?: string;
  /**
  * Static value to provide as the HTTP request header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#value Ruleset#value}
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


export function rulesetRulesActionParametersHeadersToHclTerraform(struct?: RulesetRulesActionParametersHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
      this._operation = value.operation;
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

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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

export class RulesetRulesActionParametersHeadersList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersHeaders[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersHeadersOutputReference {
    return new RulesetRulesActionParametersHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersMatchedData {
  /**
  * Public key to use within WAF Ruleset payload logging to view the HTTP request parameters. You can generate a public key [using the `matched-data-cli` command-line tool](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/command-line/generate-key-pair) or [in the Cloudflare dashboard](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/configure).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#public_key Ruleset#public_key}
  */
  readonly publicKey?: string;
}

export function rulesetRulesActionParametersMatchedDataToTerraform(struct?: RulesetRulesActionParametersMatchedData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function rulesetRulesActionParametersMatchedDataToHclTerraform(struct?: RulesetRulesActionParametersMatchedData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersMatchedDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersMatchedData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersMatchedData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class RulesetRulesActionParametersMatchedDataList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersMatchedData[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersMatchedDataOutputReference {
    return new RulesetRulesActionParametersMatchedDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersOrigin {
  /**
  * Origin Hostname where request is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#host Ruleset#host}
  */
  readonly host?: string;
  /**
  * Origin Port where request is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#port Ruleset#port}
  */
  readonly port?: number;
}

export function rulesetRulesActionParametersOriginToTerraform(struct?: RulesetRulesActionParametersOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function rulesetRulesActionParametersOriginToHclTerraform(struct?: RulesetRulesActionParametersOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
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
}

export class RulesetRulesActionParametersOriginList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersOrigin[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersOriginOutputReference {
    return new RulesetRulesActionParametersOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersOverridesCategories {
  /**
  * Action to perform in the tag-level override. Available values: `block`, `challenge`, `compress_response`, `ddos_dynamic`, `ddos_mitigation`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `serve_error`, `set_cache_settings`, `set_config`, `skip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Tag name to apply the ruleset rule override to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#category Ruleset#category}
  */
  readonly category?: string;
  /**
  * Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#enabled Ruleset#enabled}
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


export function rulesetRulesActionParametersOverridesCategoriesToHclTerraform(struct?: RulesetRulesActionParametersOverridesCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersOverridesCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersOverridesCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersOverridesCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category = value.category;
      this._enabled = value.enabled;
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

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

export class RulesetRulesActionParametersOverridesCategoriesList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersOverridesCategories[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersOverridesCategoriesOutputReference {
    return new RulesetRulesActionParametersOverridesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersOverridesRules {
  /**
  * Action to perform in the rule-level override. Available values: `block`, `challenge`, `compress_response`, `ddos_dynamic`, `ddos_mitigation`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `serve_error`, `set_cache_settings`, `set_config`, `skip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Defines if the current rule-level override enables or disables the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Rule ID to apply the override to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#id Ruleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#score_threshold Ruleset#score_threshold}
  */
  readonly scoreThreshold?: number;
  /**
  * Sensitivity level for a ruleset rule override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#sensitivity_level Ruleset#sensitivity_level}
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


export function rulesetRulesActionParametersOverridesRulesToHclTerraform(struct?: RulesetRulesActionParametersOverridesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score_threshold: {
      value: cdktf.numberToHclTerraform(struct!.scoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sensitivity_level: {
      value: cdktf.stringToHclTerraform(struct!.sensitivityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersOverridesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersOverridesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreThreshold = this._scoreThreshold;
    }
    if (this._sensitivityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityLevel = this._sensitivityLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersOverridesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._scoreThreshold = undefined;
      this._sensitivityLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._id = value.id;
      this._scoreThreshold = value.scoreThreshold;
      this._sensitivityLevel = value.sensitivityLevel;
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

  // score_threshold - computed: false, optional: true, required: false
  private _scoreThreshold?: number; 
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
  public set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  public resetScoreThreshold() {
    this._scoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdInput() {
    return this._scoreThreshold;
  }

  // sensitivity_level - computed: false, optional: true, required: false
  private _sensitivityLevel?: string; 
  public get sensitivityLevel() {
    return this.getStringAttribute('sensitivity_level');
  }
  public set sensitivityLevel(value: string) {
    this._sensitivityLevel = value;
  }
  public resetSensitivityLevel() {
    this._sensitivityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityLevelInput() {
    return this._sensitivityLevel;
  }
}

export class RulesetRulesActionParametersOverridesRulesList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersOverridesRules[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersOverridesRulesOutputReference {
    return new RulesetRulesActionParametersOverridesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersOverrides {
  /**
  * Action to perform in the rule-level override. Available values: `block`, `challenge`, `compress_response`, `ddos_dynamic`, `ddos_mitigation`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `serve_error`, `set_cache_settings`, `set_config`, `skip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Defines if the current ruleset-level override enables or disables the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#sensitivity_level Ruleset#sensitivity_level}
  */
  readonly sensitivityLevel?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#categories Ruleset#categories}
  */
  readonly categories?: RulesetRulesActionParametersOverridesCategories[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#rules Ruleset#rules}
  */
  readonly rules?: RulesetRulesActionParametersOverridesRules[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersOverridesToTerraform(struct?: RulesetRulesActionParametersOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sensitivity_level: cdktf.stringToTerraform(struct!.sensitivityLevel),
    categories: cdktf.listMapper(rulesetRulesActionParametersOverridesCategoriesToTerraform, true)(struct!.categories),
    rules: cdktf.listMapper(rulesetRulesActionParametersOverridesRulesToTerraform, true)(struct!.rules),
  }
}


export function rulesetRulesActionParametersOverridesToHclTerraform(struct?: RulesetRulesActionParametersOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    sensitivity_level: {
      value: cdktf.stringToHclTerraform(struct!.sensitivityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    categories: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersOverridesCategoriesToHclTerraform, true)(struct!.categories),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersOverridesCategoriesList",
    },
    rules: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersOverridesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersOverridesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._sensitivityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityLevel = this._sensitivityLevel;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._sensitivityLevel = undefined;
      this._categories.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._sensitivityLevel = value.sensitivityLevel;
      this._categories.internalValue = value.categories;
      this._rules.internalValue = value.rules;
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

  // sensitivity_level - computed: false, optional: true, required: false
  private _sensitivityLevel?: string; 
  public get sensitivityLevel() {
    return this.getStringAttribute('sensitivity_level');
  }
  public set sensitivityLevel(value: string) {
    this._sensitivityLevel = value;
  }
  public resetSensitivityLevel() {
    this._sensitivityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityLevelInput() {
    return this._sensitivityLevel;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new RulesetRulesActionParametersOverridesCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: RulesetRulesActionParametersOverridesCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new RulesetRulesActionParametersOverridesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RulesetRulesActionParametersOverridesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class RulesetRulesActionParametersOverridesList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersOverrides[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersOverridesOutputReference {
    return new RulesetRulesActionParametersOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersResponse {
  /**
  * Body content to include in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#content Ruleset#content}
  */
  readonly content?: string;
  /**
  * HTTP content type to send in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#content_type Ruleset#content_type}
  */
  readonly contentType?: string;
  /**
  * HTTP status code to send in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#status_code Ruleset#status_code}
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


export function rulesetRulesActionParametersResponseToHclTerraform(struct?: RulesetRulesActionParametersResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
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

export class RulesetRulesActionParametersResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._statusCode = value.statusCode;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

export class RulesetRulesActionParametersResponseList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersResponse[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersResponseOutputReference {
    return new RulesetRulesActionParametersResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersServeStale {
  /**
  * Disable stale while updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#disable_stale_while_updating Ruleset#disable_stale_while_updating}
  */
  readonly disableStaleWhileUpdating?: boolean | cdktf.IResolvable;
}

export function rulesetRulesActionParametersServeStaleToTerraform(struct?: RulesetRulesActionParametersServeStale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_stale_while_updating: cdktf.booleanToTerraform(struct!.disableStaleWhileUpdating),
  }
}


export function rulesetRulesActionParametersServeStaleToHclTerraform(struct?: RulesetRulesActionParametersServeStale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_stale_while_updating: {
      value: cdktf.booleanToHclTerraform(struct!.disableStaleWhileUpdating),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersServeStaleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersServeStale | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableStaleWhileUpdating !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStaleWhileUpdating = this._disableStaleWhileUpdating;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersServeStale | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableStaleWhileUpdating = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableStaleWhileUpdating = value.disableStaleWhileUpdating;
    }
  }

  // disable_stale_while_updating - computed: false, optional: true, required: false
  private _disableStaleWhileUpdating?: boolean | cdktf.IResolvable; 
  public get disableStaleWhileUpdating() {
    return this.getBooleanAttribute('disable_stale_while_updating');
  }
  public set disableStaleWhileUpdating(value: boolean | cdktf.IResolvable) {
    this._disableStaleWhileUpdating = value;
  }
  public resetDisableStaleWhileUpdating() {
    this._disableStaleWhileUpdating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStaleWhileUpdatingInput() {
    return this._disableStaleWhileUpdating;
  }
}

export class RulesetRulesActionParametersServeStaleList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersServeStale[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersServeStaleOutputReference {
    return new RulesetRulesActionParametersServeStaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersSni {
  /**
  * Value to define for SNI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#value Ruleset#value}
  */
  readonly value?: string;
}

export function rulesetRulesActionParametersSniToTerraform(struct?: RulesetRulesActionParametersSni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rulesetRulesActionParametersSniToHclTerraform(struct?: RulesetRulesActionParametersSni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersSniOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersSni | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersSni | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class RulesetRulesActionParametersSniList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersSni[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersSniOutputReference {
    return new RulesetRulesActionParametersSniOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersUriPath {
  /**
  * Expression that defines the updated (dynamic) value of the URI path or query string component. Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Static string value of the updated URI path or query string component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#value Ruleset#value}
  */
  readonly value?: string;
}

export function rulesetRulesActionParametersUriPathToTerraform(struct?: RulesetRulesActionParametersUriPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rulesetRulesActionParametersUriPathToHclTerraform(struct?: RulesetRulesActionParametersUriPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersUriPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersUriPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: RulesetRulesActionParametersUriPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class RulesetRulesActionParametersUriPathList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersUriPath[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersUriPathOutputReference {
    return new RulesetRulesActionParametersUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersUriQuery {
  /**
  * Expression that defines the updated (dynamic) value of the URI path or query string component. Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Static string value of the updated URI path or query string component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#value Ruleset#value}
  */
  readonly value?: string;
}

export function rulesetRulesActionParametersUriQueryToTerraform(struct?: RulesetRulesActionParametersUriQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rulesetRulesActionParametersUriQueryToHclTerraform(struct?: RulesetRulesActionParametersUriQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersUriQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersUriQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: RulesetRulesActionParametersUriQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class RulesetRulesActionParametersUriQueryList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersUriQuery[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersUriQueryOutputReference {
    return new RulesetRulesActionParametersUriQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParametersUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#origin Ruleset#origin}
  */
  readonly origin?: boolean | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#path Ruleset#path}
  */
  readonly path?: RulesetRulesActionParametersUriPath[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#query Ruleset#query}
  */
  readonly query?: RulesetRulesActionParametersUriQuery[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersUriToTerraform(struct?: RulesetRulesActionParametersUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin: cdktf.booleanToTerraform(struct!.origin),
    path: cdktf.listMapper(rulesetRulesActionParametersUriPathToTerraform, true)(struct!.path),
    query: cdktf.listMapper(rulesetRulesActionParametersUriQueryToTerraform, true)(struct!.query),
  }
}


export function rulesetRulesActionParametersUriToHclTerraform(struct?: RulesetRulesActionParametersUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin: {
      value: cdktf.booleanToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersUriPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersUriPathList",
    },
    query: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersUriQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersUriQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParametersUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: RulesetRulesActionParametersUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._origin = undefined;
      this._path.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _path = new RulesetRulesActionParametersUriPathList(this, "path", false);
  public get path() {
    return this._path;
  }
  public putPath(value: RulesetRulesActionParametersUriPath[] | cdktf.IResolvable) {
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
  private _query = new RulesetRulesActionParametersUriQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: RulesetRulesActionParametersUriQuery[] | cdktf.IResolvable) {
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

export class RulesetRulesActionParametersUriList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParametersUri[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersUriOutputReference {
    return new RulesetRulesActionParametersUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesActionParameters {
  /**
  * Specifies uncommon ports to allow cacheable assets to be served from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#additional_cacheable_ports Ruleset#additional_cacheable_ports}
  */
  readonly additionalCacheablePorts?: number[];
  /**
  * Turn on or off Cloudflare Automatic HTTPS rewrites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#automatic_https_rewrites Ruleset#automatic_https_rewrites}
  */
  readonly automaticHttpsRewrites?: boolean | cdktf.IResolvable;
  /**
  * Inspect the visitor's browser for headers commonly associated with spammers and certain bots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#bic Ruleset#bic}
  */
  readonly bic?: boolean | cdktf.IResolvable;
  /**
  * Whether to cache if expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#cache Ruleset#cache}
  */
  readonly cache?: boolean | cdktf.IResolvable;
  /**
  * Content of the custom error response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#content Ruleset#content}
  */
  readonly content?: string;
  /**
  * Content-Type of the custom error response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#content_type Ruleset#content_type}
  */
  readonly contentType?: string;
  /**
  * List of cookie values to include as part of custom fields logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#cookie_fields Ruleset#cookie_fields}
  */
  readonly cookieFields?: string[];
  /**
  * Turn off all active Cloudflare Apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#disable_apps Ruleset#disable_apps}
  */
  readonly disableApps?: boolean | cdktf.IResolvable;
  /**
  * Turn off railgun feature of the Cloudflare Speed app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#disable_railgun Ruleset#disable_railgun}
  */
  readonly disableRailgun?: boolean | cdktf.IResolvable;
  /**
  * Turn off RUM feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#disable_rum Ruleset#disable_rum}
  */
  readonly disableRum?: boolean | cdktf.IResolvable;
  /**
  * Turn off zaraz feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#disable_zaraz Ruleset#disable_zaraz}
  */
  readonly disableZaraz?: boolean | cdktf.IResolvable;
  /**
  * Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#email_obfuscation Ruleset#email_obfuscation}
  */
  readonly emailObfuscation?: boolean | cdktf.IResolvable;
  /**
  * Toggle fonts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#fonts Ruleset#fonts}
  */
  readonly fonts?: boolean | cdktf.IResolvable;
  /**
  * Host Header that request origin receives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#host_header Ruleset#host_header}
  */
  readonly hostHeader?: string;
  /**
  * Turn on or off the hotlink protection feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#hotlink_protection Ruleset#hotlink_protection}
  */
  readonly hotlinkProtection?: boolean | cdktf.IResolvable;
  /**
  * Identifier of the action parameter to modify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#id Ruleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#increment Ruleset#increment}
  */
  readonly increment?: number;
  /**
  * Turn on or off Cloudflare Mirage of the Cloudflare Speed app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#mirage Ruleset#mirage}
  */
  readonly mirage?: boolean | cdktf.IResolvable;
  /**
  * Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#opportunistic_encryption Ruleset#opportunistic_encryption}
  */
  readonly opportunisticEncryption?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the use of a more compliant Cache Control parsing mechanism, enabled by default for most zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#origin_cache_control Ruleset#origin_cache_control}
  */
  readonly originCacheControl?: boolean | cdktf.IResolvable;
  /**
  * Pass-through error page for origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#origin_error_page_passthru Ruleset#origin_error_page_passthru}
  */
  readonly originErrorPagePassthru?: boolean | cdktf.IResolvable;
  /**
  * Point in the request/response lifecycle where the ruleset will be created. Available values: `ddos_l4`, `ddos_l7`, `http_config_settings`, `http_custom_errors`, `http_log_custom_fields`, `http_ratelimit`, `http_request_cache_settings`, `http_request_dynamic_redirect`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_origin`, `http_request_redirect`, `http_request_sanitize`, `http_request_sbfm`, `http_request_transform`, `http_response_compression`, `http_response_firewall_managed`, `http_response_headers_transform`, `magic_transit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#phases Ruleset#phases}
  */
  readonly phases?: string[];
  /**
  * Apply options from the Polish feature of the Cloudflare Speed app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#polish Ruleset#polish}
  */
  readonly polish?: string;
  /**
  * Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#products Ruleset#products}
  */
  readonly products?: string[];
  /**
  * Specifies a maximum timeout for reading content from an origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#read_timeout Ruleset#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * List of request headers to include as part of custom fields logging, in lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#request_fields Ruleset#request_fields}
  */
  readonly requestFields?: string[];
  /**
  * Respect strong ETags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#respect_strong_etags Ruleset#respect_strong_etags}
  */
  readonly respectStrongEtags?: boolean | cdktf.IResolvable;
  /**
  * List of response headers to include as part of custom fields logging, in lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#response_fields Ruleset#response_fields}
  */
  readonly responseFields?: string[];
  /**
  * Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#rocket_loader Ruleset#rocket_loader}
  */
  readonly rocketLoader?: boolean | cdktf.IResolvable;
  /**
  * Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs. Example: `rules = { "efb7b8c949ac4650a09736fc376e9aee" = "5de7edfa648c4d6891dc3e7f84534ffa,e3a567afc347477d9702d9047e97d760" }`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#rules Ruleset#rules}
  */
  readonly rules?: { [key: string]: string };
  /**
  * Which ruleset ID to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#ruleset Ruleset#ruleset}
  */
  readonly ruleset?: string;
  /**
  * List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#rulesets Ruleset#rulesets}
  */
  readonly rulesets?: string[];
  /**
  * Control options for the Security Level feature from the Security app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#security_level Ruleset#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#server_side_excludes Ruleset#server_side_excludes}
  */
  readonly serverSideExcludes?: boolean | cdktf.IResolvable;
  /**
  * Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#ssl Ruleset#ssl}
  */
  readonly ssl?: string;
  /**
  * HTTP status code of the custom error response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#status_code Ruleset#status_code}
  */
  readonly statusCode?: number;
  /**
  * Turn on or off the SXG feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#sxg Ruleset#sxg}
  */
  readonly sxg?: boolean | cdktf.IResolvable;
  /**
  * algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#algorithms Ruleset#algorithms}
  */
  readonly algorithms?: RulesetRulesActionParametersAlgorithms[] | cdktf.IResolvable;
  /**
  * autominify block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#autominify Ruleset#autominify}
  */
  readonly autominify?: RulesetRulesActionParametersAutominify[] | cdktf.IResolvable;
  /**
  * browser_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#browser_ttl Ruleset#browser_ttl}
  */
  readonly browserTtl?: RulesetRulesActionParametersBrowserTtl[] | cdktf.IResolvable;
  /**
  * cache_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#cache_key Ruleset#cache_key}
  */
  readonly cacheKey?: RulesetRulesActionParametersCacheKey[] | cdktf.IResolvable;
  /**
  * cache_reserve block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#cache_reserve Ruleset#cache_reserve}
  */
  readonly cacheReserve?: RulesetRulesActionParametersCacheReserve[] | cdktf.IResolvable;
  /**
  * edge_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#edge_ttl Ruleset#edge_ttl}
  */
  readonly edgeTtl?: RulesetRulesActionParametersEdgeTtl[] | cdktf.IResolvable;
  /**
  * from_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#from_list Ruleset#from_list}
  */
  readonly fromList?: RulesetRulesActionParametersFromListStruct[] | cdktf.IResolvable;
  /**
  * from_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#from_value Ruleset#from_value}
  */
  readonly fromValue?: RulesetRulesActionParametersFromValue[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#headers Ruleset#headers}
  */
  readonly headers?: RulesetRulesActionParametersHeaders[] | cdktf.IResolvable;
  /**
  * matched_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#matched_data Ruleset#matched_data}
  */
  readonly matchedData?: RulesetRulesActionParametersMatchedData[] | cdktf.IResolvable;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#origin Ruleset#origin}
  */
  readonly origin?: RulesetRulesActionParametersOrigin[] | cdktf.IResolvable;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#overrides Ruleset#overrides}
  */
  readonly overrides?: RulesetRulesActionParametersOverrides[] | cdktf.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#response Ruleset#response}
  */
  readonly response?: RulesetRulesActionParametersResponse[] | cdktf.IResolvable;
  /**
  * serve_stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#serve_stale Ruleset#serve_stale}
  */
  readonly serveStale?: RulesetRulesActionParametersServeStale[] | cdktf.IResolvable;
  /**
  * sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#sni Ruleset#sni}
  */
  readonly sni?: RulesetRulesActionParametersSni[] | cdktf.IResolvable;
  /**
  * uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#uri Ruleset#uri}
  */
  readonly uri?: RulesetRulesActionParametersUri[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersToTerraform(struct?: RulesetRulesActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_cacheable_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.additionalCacheablePorts),
    automatic_https_rewrites: cdktf.booleanToTerraform(struct!.automaticHttpsRewrites),
    bic: cdktf.booleanToTerraform(struct!.bic),
    cache: cdktf.booleanToTerraform(struct!.cache),
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    cookie_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cookieFields),
    disable_apps: cdktf.booleanToTerraform(struct!.disableApps),
    disable_railgun: cdktf.booleanToTerraform(struct!.disableRailgun),
    disable_rum: cdktf.booleanToTerraform(struct!.disableRum),
    disable_zaraz: cdktf.booleanToTerraform(struct!.disableZaraz),
    email_obfuscation: cdktf.booleanToTerraform(struct!.emailObfuscation),
    fonts: cdktf.booleanToTerraform(struct!.fonts),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    hotlink_protection: cdktf.booleanToTerraform(struct!.hotlinkProtection),
    id: cdktf.stringToTerraform(struct!.id),
    increment: cdktf.numberToTerraform(struct!.increment),
    mirage: cdktf.booleanToTerraform(struct!.mirage),
    opportunistic_encryption: cdktf.booleanToTerraform(struct!.opportunisticEncryption),
    origin_cache_control: cdktf.booleanToTerraform(struct!.originCacheControl),
    origin_error_page_passthru: cdktf.booleanToTerraform(struct!.originErrorPagePassthru),
    phases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phases),
    polish: cdktf.stringToTerraform(struct!.polish),
    products: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.products),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    request_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestFields),
    respect_strong_etags: cdktf.booleanToTerraform(struct!.respectStrongEtags),
    response_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseFields),
    rocket_loader: cdktf.booleanToTerraform(struct!.rocketLoader),
    rules: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.rules),
    ruleset: cdktf.stringToTerraform(struct!.ruleset),
    rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulesets),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    server_side_excludes: cdktf.booleanToTerraform(struct!.serverSideExcludes),
    ssl: cdktf.stringToTerraform(struct!.ssl),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    sxg: cdktf.booleanToTerraform(struct!.sxg),
    algorithms: cdktf.listMapper(rulesetRulesActionParametersAlgorithmsToTerraform, true)(struct!.algorithms),
    autominify: cdktf.listMapper(rulesetRulesActionParametersAutominifyToTerraform, true)(struct!.autominify),
    browser_ttl: cdktf.listMapper(rulesetRulesActionParametersBrowserTtlToTerraform, true)(struct!.browserTtl),
    cache_key: cdktf.listMapper(rulesetRulesActionParametersCacheKeyToTerraform, true)(struct!.cacheKey),
    cache_reserve: cdktf.listMapper(rulesetRulesActionParametersCacheReserveToTerraform, true)(struct!.cacheReserve),
    edge_ttl: cdktf.listMapper(rulesetRulesActionParametersEdgeTtlToTerraform, true)(struct!.edgeTtl),
    from_list: cdktf.listMapper(rulesetRulesActionParametersFromListStructToTerraform, true)(struct!.fromList),
    from_value: cdktf.listMapper(rulesetRulesActionParametersFromValueToTerraform, true)(struct!.fromValue),
    headers: cdktf.listMapper(rulesetRulesActionParametersHeadersToTerraform, true)(struct!.headers),
    matched_data: cdktf.listMapper(rulesetRulesActionParametersMatchedDataToTerraform, true)(struct!.matchedData),
    origin: cdktf.listMapper(rulesetRulesActionParametersOriginToTerraform, true)(struct!.origin),
    overrides: cdktf.listMapper(rulesetRulesActionParametersOverridesToTerraform, true)(struct!.overrides),
    response: cdktf.listMapper(rulesetRulesActionParametersResponseToTerraform, true)(struct!.response),
    serve_stale: cdktf.listMapper(rulesetRulesActionParametersServeStaleToTerraform, true)(struct!.serveStale),
    sni: cdktf.listMapper(rulesetRulesActionParametersSniToTerraform, true)(struct!.sni),
    uri: cdktf.listMapper(rulesetRulesActionParametersUriToTerraform, true)(struct!.uri),
  }
}


export function rulesetRulesActionParametersToHclTerraform(struct?: RulesetRulesActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_cacheable_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.additionalCacheablePorts),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    automatic_https_rewrites: {
      value: cdktf.booleanToHclTerraform(struct!.automaticHttpsRewrites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bic: {
      value: cdktf.booleanToHclTerraform(struct!.bic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache: {
      value: cdktf.booleanToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cookieFields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    disable_apps: {
      value: cdktf.booleanToHclTerraform(struct!.disableApps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_railgun: {
      value: cdktf.booleanToHclTerraform(struct!.disableRailgun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_rum: {
      value: cdktf.booleanToHclTerraform(struct!.disableRum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_zaraz: {
      value: cdktf.booleanToHclTerraform(struct!.disableZaraz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_obfuscation: {
      value: cdktf.booleanToHclTerraform(struct!.emailObfuscation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fonts: {
      value: cdktf.booleanToHclTerraform(struct!.fonts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hotlink_protection: {
      value: cdktf.booleanToHclTerraform(struct!.hotlinkProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    increment: {
      value: cdktf.numberToHclTerraform(struct!.increment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mirage: {
      value: cdktf.booleanToHclTerraform(struct!.mirage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opportunistic_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.opportunisticEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_cache_control: {
      value: cdktf.booleanToHclTerraform(struct!.originCacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_error_page_passthru: {
      value: cdktf.booleanToHclTerraform(struct!.originErrorPagePassthru),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    phases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.phases),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    polish: {
      value: cdktf.stringToHclTerraform(struct!.polish),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    products: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.products),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestFields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    respect_strong_etags: {
      value: cdktf.booleanToHclTerraform(struct!.respectStrongEtags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseFields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rocket_loader: {
      value: cdktf.booleanToHclTerraform(struct!.rocketLoader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.rules),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ruleset: {
      value: cdktf.stringToHclTerraform(struct!.ruleset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulesets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_side_excludes: {
      value: cdktf.booleanToHclTerraform(struct!.serverSideExcludes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl: {
      value: cdktf.stringToHclTerraform(struct!.ssl),
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
    sxg: {
      value: cdktf.booleanToHclTerraform(struct!.sxg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    algorithms: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersAlgorithmsToHclTerraform, true)(struct!.algorithms),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersAlgorithmsList",
    },
    autominify: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersAutominifyToHclTerraform, true)(struct!.autominify),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersAutominifyList",
    },
    browser_ttl: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersBrowserTtlToHclTerraform, true)(struct!.browserTtl),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersBrowserTtlList",
    },
    cache_key: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersCacheKeyToHclTerraform, true)(struct!.cacheKey),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersCacheKeyList",
    },
    cache_reserve: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersCacheReserveToHclTerraform, true)(struct!.cacheReserve),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersCacheReserveList",
    },
    edge_ttl: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersEdgeTtlToHclTerraform, true)(struct!.edgeTtl),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersEdgeTtlList",
    },
    from_list: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersFromListStructToHclTerraform, true)(struct!.fromList),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersFromListStructList",
    },
    from_value: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersFromValueToHclTerraform, true)(struct!.fromValue),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersFromValueList",
    },
    headers: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersHeadersList",
    },
    matched_data: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersMatchedDataToHclTerraform, true)(struct!.matchedData),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersMatchedDataList",
    },
    origin: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersOriginToHclTerraform, true)(struct!.origin),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersOriginList",
    },
    overrides: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersOverridesToHclTerraform, true)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersOverridesList",
    },
    response: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersResponseList",
    },
    serve_stale: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersServeStaleToHclTerraform, true)(struct!.serveStale),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersServeStaleList",
    },
    sni: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersSniToHclTerraform, true)(struct!.sni),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersSniList",
    },
    uri: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersUriToHclTerraform, true)(struct!.uri),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesActionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesActionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalCacheablePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalCacheablePorts = this._additionalCacheablePorts;
    }
    if (this._automaticHttpsRewrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticHttpsRewrites = this._automaticHttpsRewrites;
    }
    if (this._bic !== undefined) {
      hasAnyValues = true;
      internalValueResult.bic = this._bic;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._cookieFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieFields = this._cookieFields;
    }
    if (this._disableApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApps = this._disableApps;
    }
    if (this._disableRailgun !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRailgun = this._disableRailgun;
    }
    if (this._disableRum !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRum = this._disableRum;
    }
    if (this._disableZaraz !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableZaraz = this._disableZaraz;
    }
    if (this._emailObfuscation !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailObfuscation = this._emailObfuscation;
    }
    if (this._fonts !== undefined) {
      hasAnyValues = true;
      internalValueResult.fonts = this._fonts;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._hotlinkProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotlinkProtection = this._hotlinkProtection;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._increment !== undefined) {
      hasAnyValues = true;
      internalValueResult.increment = this._increment;
    }
    if (this._mirage !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirage = this._mirage;
    }
    if (this._opportunisticEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.opportunisticEncryption = this._opportunisticEncryption;
    }
    if (this._originCacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.originCacheControl = this._originCacheControl;
    }
    if (this._originErrorPagePassthru !== undefined) {
      hasAnyValues = true;
      internalValueResult.originErrorPagePassthru = this._originErrorPagePassthru;
    }
    if (this._phases !== undefined) {
      hasAnyValues = true;
      internalValueResult.phases = this._phases;
    }
    if (this._polish !== undefined) {
      hasAnyValues = true;
      internalValueResult.polish = this._polish;
    }
    if (this._products !== undefined) {
      hasAnyValues = true;
      internalValueResult.products = this._products;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._requestFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestFields = this._requestFields;
    }
    if (this._respectStrongEtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectStrongEtags = this._respectStrongEtags;
    }
    if (this._responseFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFields = this._responseFields;
    }
    if (this._rocketLoader !== undefined) {
      hasAnyValues = true;
      internalValueResult.rocketLoader = this._rocketLoader;
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
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._serverSideExcludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideExcludes = this._serverSideExcludes;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._sxg !== undefined) {
      hasAnyValues = true;
      internalValueResult.sxg = this._sxg;
    }
    if (this._algorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithms = this._algorithms?.internalValue;
    }
    if (this._autominify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autominify = this._autominify?.internalValue;
    }
    if (this._browserTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserTtl = this._browserTtl?.internalValue;
    }
    if (this._cacheKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKey = this._cacheKey?.internalValue;
    }
    if (this._cacheReserve?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheReserve = this._cacheReserve?.internalValue;
    }
    if (this._edgeTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeTtl = this._edgeTtl?.internalValue;
    }
    if (this._fromList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromList = this._fromList?.internalValue;
    }
    if (this._fromValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromValue = this._fromValue?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._matchedData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchedData = this._matchedData?.internalValue;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    if (this._serveStale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveStale = this._serveStale?.internalValue;
    }
    if (this._sni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni?.internalValue;
    }
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalCacheablePorts = undefined;
      this._automaticHttpsRewrites = undefined;
      this._bic = undefined;
      this._cache = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._cookieFields = undefined;
      this._disableApps = undefined;
      this._disableRailgun = undefined;
      this._disableRum = undefined;
      this._disableZaraz = undefined;
      this._emailObfuscation = undefined;
      this._fonts = undefined;
      this._hostHeader = undefined;
      this._hotlinkProtection = undefined;
      this._id = undefined;
      this._increment = undefined;
      this._mirage = undefined;
      this._opportunisticEncryption = undefined;
      this._originCacheControl = undefined;
      this._originErrorPagePassthru = undefined;
      this._phases = undefined;
      this._polish = undefined;
      this._products = undefined;
      this._readTimeout = undefined;
      this._requestFields = undefined;
      this._respectStrongEtags = undefined;
      this._responseFields = undefined;
      this._rocketLoader = undefined;
      this._rules = undefined;
      this._ruleset = undefined;
      this._rulesets = undefined;
      this._securityLevel = undefined;
      this._serverSideExcludes = undefined;
      this._ssl = undefined;
      this._statusCode = undefined;
      this._sxg = undefined;
      this._algorithms.internalValue = undefined;
      this._autominify.internalValue = undefined;
      this._browserTtl.internalValue = undefined;
      this._cacheKey.internalValue = undefined;
      this._cacheReserve.internalValue = undefined;
      this._edgeTtl.internalValue = undefined;
      this._fromList.internalValue = undefined;
      this._fromValue.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._matchedData.internalValue = undefined;
      this._origin.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._response.internalValue = undefined;
      this._serveStale.internalValue = undefined;
      this._sni.internalValue = undefined;
      this._uri.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalCacheablePorts = value.additionalCacheablePorts;
      this._automaticHttpsRewrites = value.automaticHttpsRewrites;
      this._bic = value.bic;
      this._cache = value.cache;
      this._content = value.content;
      this._contentType = value.contentType;
      this._cookieFields = value.cookieFields;
      this._disableApps = value.disableApps;
      this._disableRailgun = value.disableRailgun;
      this._disableRum = value.disableRum;
      this._disableZaraz = value.disableZaraz;
      this._emailObfuscation = value.emailObfuscation;
      this._fonts = value.fonts;
      this._hostHeader = value.hostHeader;
      this._hotlinkProtection = value.hotlinkProtection;
      this._id = value.id;
      this._increment = value.increment;
      this._mirage = value.mirage;
      this._opportunisticEncryption = value.opportunisticEncryption;
      this._originCacheControl = value.originCacheControl;
      this._originErrorPagePassthru = value.originErrorPagePassthru;
      this._phases = value.phases;
      this._polish = value.polish;
      this._products = value.products;
      this._readTimeout = value.readTimeout;
      this._requestFields = value.requestFields;
      this._respectStrongEtags = value.respectStrongEtags;
      this._responseFields = value.responseFields;
      this._rocketLoader = value.rocketLoader;
      this._rules = value.rules;
      this._ruleset = value.ruleset;
      this._rulesets = value.rulesets;
      this._securityLevel = value.securityLevel;
      this._serverSideExcludes = value.serverSideExcludes;
      this._ssl = value.ssl;
      this._statusCode = value.statusCode;
      this._sxg = value.sxg;
      this._algorithms.internalValue = value.algorithms;
      this._autominify.internalValue = value.autominify;
      this._browserTtl.internalValue = value.browserTtl;
      this._cacheKey.internalValue = value.cacheKey;
      this._cacheReserve.internalValue = value.cacheReserve;
      this._edgeTtl.internalValue = value.edgeTtl;
      this._fromList.internalValue = value.fromList;
      this._fromValue.internalValue = value.fromValue;
      this._headers.internalValue = value.headers;
      this._matchedData.internalValue = value.matchedData;
      this._origin.internalValue = value.origin;
      this._overrides.internalValue = value.overrides;
      this._response.internalValue = value.response;
      this._serveStale.internalValue = value.serveStale;
      this._sni.internalValue = value.sni;
      this._uri.internalValue = value.uri;
    }
  }

  // additional_cacheable_ports - computed: false, optional: true, required: false
  private _additionalCacheablePorts?: number[]; 
  public get additionalCacheablePorts() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('additional_cacheable_ports')));
  }
  public set additionalCacheablePorts(value: number[]) {
    this._additionalCacheablePorts = value;
  }
  public resetAdditionalCacheablePorts() {
    this._additionalCacheablePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCacheablePortsInput() {
    return this._additionalCacheablePorts;
  }

  // automatic_https_rewrites - computed: false, optional: true, required: false
  private _automaticHttpsRewrites?: boolean | cdktf.IResolvable; 
  public get automaticHttpsRewrites() {
    return this.getBooleanAttribute('automatic_https_rewrites');
  }
  public set automaticHttpsRewrites(value: boolean | cdktf.IResolvable) {
    this._automaticHttpsRewrites = value;
  }
  public resetAutomaticHttpsRewrites() {
    this._automaticHttpsRewrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticHttpsRewritesInput() {
    return this._automaticHttpsRewrites;
  }

  // bic - computed: false, optional: true, required: false
  private _bic?: boolean | cdktf.IResolvable; 
  public get bic() {
    return this.getBooleanAttribute('bic');
  }
  public set bic(value: boolean | cdktf.IResolvable) {
    this._bic = value;
  }
  public resetBic() {
    this._bic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bicInput() {
    return this._bic;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: boolean | cdktf.IResolvable; 
  public get cache() {
    return this.getBooleanAttribute('cache');
  }
  public set cache(value: boolean | cdktf.IResolvable) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // cookie_fields - computed: false, optional: true, required: false
  private _cookieFields?: string[]; 
  public get cookieFields() {
    return cdktf.Fn.tolist(this.getListAttribute('cookie_fields'));
  }
  public set cookieFields(value: string[]) {
    this._cookieFields = value;
  }
  public resetCookieFields() {
    this._cookieFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieFieldsInput() {
    return this._cookieFields;
  }

  // disable_apps - computed: false, optional: true, required: false
  private _disableApps?: boolean | cdktf.IResolvable; 
  public get disableApps() {
    return this.getBooleanAttribute('disable_apps');
  }
  public set disableApps(value: boolean | cdktf.IResolvable) {
    this._disableApps = value;
  }
  public resetDisableApps() {
    this._disableApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAppsInput() {
    return this._disableApps;
  }

  // disable_railgun - computed: false, optional: true, required: false
  private _disableRailgun?: boolean | cdktf.IResolvable; 
  public get disableRailgun() {
    return this.getBooleanAttribute('disable_railgun');
  }
  public set disableRailgun(value: boolean | cdktf.IResolvable) {
    this._disableRailgun = value;
  }
  public resetDisableRailgun() {
    this._disableRailgun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRailgunInput() {
    return this._disableRailgun;
  }

  // disable_rum - computed: false, optional: true, required: false
  private _disableRum?: boolean | cdktf.IResolvable; 
  public get disableRum() {
    return this.getBooleanAttribute('disable_rum');
  }
  public set disableRum(value: boolean | cdktf.IResolvable) {
    this._disableRum = value;
  }
  public resetDisableRum() {
    this._disableRum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRumInput() {
    return this._disableRum;
  }

  // disable_zaraz - computed: false, optional: true, required: false
  private _disableZaraz?: boolean | cdktf.IResolvable; 
  public get disableZaraz() {
    return this.getBooleanAttribute('disable_zaraz');
  }
  public set disableZaraz(value: boolean | cdktf.IResolvable) {
    this._disableZaraz = value;
  }
  public resetDisableZaraz() {
    this._disableZaraz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableZarazInput() {
    return this._disableZaraz;
  }

  // email_obfuscation - computed: false, optional: true, required: false
  private _emailObfuscation?: boolean | cdktf.IResolvable; 
  public get emailObfuscation() {
    return this.getBooleanAttribute('email_obfuscation');
  }
  public set emailObfuscation(value: boolean | cdktf.IResolvable) {
    this._emailObfuscation = value;
  }
  public resetEmailObfuscation() {
    this._emailObfuscation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailObfuscationInput() {
    return this._emailObfuscation;
  }

  // fonts - computed: false, optional: true, required: false
  private _fonts?: boolean | cdktf.IResolvable; 
  public get fonts() {
    return this.getBooleanAttribute('fonts');
  }
  public set fonts(value: boolean | cdktf.IResolvable) {
    this._fonts = value;
  }
  public resetFonts() {
    this._fonts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontsInput() {
    return this._fonts;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // hotlink_protection - computed: false, optional: true, required: false
  private _hotlinkProtection?: boolean | cdktf.IResolvable; 
  public get hotlinkProtection() {
    return this.getBooleanAttribute('hotlink_protection');
  }
  public set hotlinkProtection(value: boolean | cdktf.IResolvable) {
    this._hotlinkProtection = value;
  }
  public resetHotlinkProtection() {
    this._hotlinkProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotlinkProtectionInput() {
    return this._hotlinkProtection;
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

  // mirage - computed: false, optional: true, required: false
  private _mirage?: boolean | cdktf.IResolvable; 
  public get mirage() {
    return this.getBooleanAttribute('mirage');
  }
  public set mirage(value: boolean | cdktf.IResolvable) {
    this._mirage = value;
  }
  public resetMirage() {
    this._mirage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirageInput() {
    return this._mirage;
  }

  // opportunistic_encryption - computed: false, optional: true, required: false
  private _opportunisticEncryption?: boolean | cdktf.IResolvable; 
  public get opportunisticEncryption() {
    return this.getBooleanAttribute('opportunistic_encryption');
  }
  public set opportunisticEncryption(value: boolean | cdktf.IResolvable) {
    this._opportunisticEncryption = value;
  }
  public resetOpportunisticEncryption() {
    this._opportunisticEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opportunisticEncryptionInput() {
    return this._opportunisticEncryption;
  }

  // origin_cache_control - computed: false, optional: true, required: false
  private _originCacheControl?: boolean | cdktf.IResolvable; 
  public get originCacheControl() {
    return this.getBooleanAttribute('origin_cache_control');
  }
  public set originCacheControl(value: boolean | cdktf.IResolvable) {
    this._originCacheControl = value;
  }
  public resetOriginCacheControl() {
    this._originCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originCacheControlInput() {
    return this._originCacheControl;
  }

  // origin_error_page_passthru - computed: false, optional: true, required: false
  private _originErrorPagePassthru?: boolean | cdktf.IResolvable; 
  public get originErrorPagePassthru() {
    return this.getBooleanAttribute('origin_error_page_passthru');
  }
  public set originErrorPagePassthru(value: boolean | cdktf.IResolvable) {
    this._originErrorPagePassthru = value;
  }
  public resetOriginErrorPagePassthru() {
    this._originErrorPagePassthru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originErrorPagePassthruInput() {
    return this._originErrorPagePassthru;
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

  // polish - computed: false, optional: true, required: false
  private _polish?: string; 
  public get polish() {
    return this.getStringAttribute('polish');
  }
  public set polish(value: string) {
    this._polish = value;
  }
  public resetPolish() {
    this._polish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polishInput() {
    return this._polish;
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

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // request_fields - computed: false, optional: true, required: false
  private _requestFields?: string[]; 
  public get requestFields() {
    return cdktf.Fn.tolist(this.getListAttribute('request_fields'));
  }
  public set requestFields(value: string[]) {
    this._requestFields = value;
  }
  public resetRequestFields() {
    this._requestFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFieldsInput() {
    return this._requestFields;
  }

  // respect_strong_etags - computed: false, optional: true, required: false
  private _respectStrongEtags?: boolean | cdktf.IResolvable; 
  public get respectStrongEtags() {
    return this.getBooleanAttribute('respect_strong_etags');
  }
  public set respectStrongEtags(value: boolean | cdktf.IResolvable) {
    this._respectStrongEtags = value;
  }
  public resetRespectStrongEtags() {
    this._respectStrongEtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectStrongEtagsInput() {
    return this._respectStrongEtags;
  }

  // response_fields - computed: false, optional: true, required: false
  private _responseFields?: string[]; 
  public get responseFields() {
    return cdktf.Fn.tolist(this.getListAttribute('response_fields'));
  }
  public set responseFields(value: string[]) {
    this._responseFields = value;
  }
  public resetResponseFields() {
    this._responseFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFieldsInput() {
    return this._responseFields;
  }

  // rocket_loader - computed: false, optional: true, required: false
  private _rocketLoader?: boolean | cdktf.IResolvable; 
  public get rocketLoader() {
    return this.getBooleanAttribute('rocket_loader');
  }
  public set rocketLoader(value: boolean | cdktf.IResolvable) {
    this._rocketLoader = value;
  }
  public resetRocketLoader() {
    this._rocketLoader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rocketLoaderInput() {
    return this._rocketLoader;
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

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // server_side_excludes - computed: false, optional: true, required: false
  private _serverSideExcludes?: boolean | cdktf.IResolvable; 
  public get serverSideExcludes() {
    return this.getBooleanAttribute('server_side_excludes');
  }
  public set serverSideExcludes(value: boolean | cdktf.IResolvable) {
    this._serverSideExcludes = value;
  }
  public resetServerSideExcludes() {
    this._serverSideExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideExcludesInput() {
    return this._serverSideExcludes;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
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

  // sxg - computed: false, optional: true, required: false
  private _sxg?: boolean | cdktf.IResolvable; 
  public get sxg() {
    return this.getBooleanAttribute('sxg');
  }
  public set sxg(value: boolean | cdktf.IResolvable) {
    this._sxg = value;
  }
  public resetSxg() {
    this._sxg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxgInput() {
    return this._sxg;
  }

  // algorithms - computed: false, optional: true, required: false
  private _algorithms = new RulesetRulesActionParametersAlgorithmsList(this, "algorithms", false);
  public get algorithms() {
    return this._algorithms;
  }
  public putAlgorithms(value: RulesetRulesActionParametersAlgorithms[] | cdktf.IResolvable) {
    this._algorithms.internalValue = value;
  }
  public resetAlgorithms() {
    this._algorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmsInput() {
    return this._algorithms.internalValue;
  }

  // autominify - computed: false, optional: true, required: false
  private _autominify = new RulesetRulesActionParametersAutominifyList(this, "autominify", false);
  public get autominify() {
    return this._autominify;
  }
  public putAutominify(value: RulesetRulesActionParametersAutominify[] | cdktf.IResolvable) {
    this._autominify.internalValue = value;
  }
  public resetAutominify() {
    this._autominify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autominifyInput() {
    return this._autominify.internalValue;
  }

  // browser_ttl - computed: false, optional: true, required: false
  private _browserTtl = new RulesetRulesActionParametersBrowserTtlList(this, "browser_ttl", false);
  public get browserTtl() {
    return this._browserTtl;
  }
  public putBrowserTtl(value: RulesetRulesActionParametersBrowserTtl[] | cdktf.IResolvable) {
    this._browserTtl.internalValue = value;
  }
  public resetBrowserTtl() {
    this._browserTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserTtlInput() {
    return this._browserTtl.internalValue;
  }

  // cache_key - computed: false, optional: true, required: false
  private _cacheKey = new RulesetRulesActionParametersCacheKeyList(this, "cache_key", false);
  public get cacheKey() {
    return this._cacheKey;
  }
  public putCacheKey(value: RulesetRulesActionParametersCacheKey[] | cdktf.IResolvable) {
    this._cacheKey.internalValue = value;
  }
  public resetCacheKey() {
    this._cacheKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyInput() {
    return this._cacheKey.internalValue;
  }

  // cache_reserve - computed: false, optional: true, required: false
  private _cacheReserve = new RulesetRulesActionParametersCacheReserveList(this, "cache_reserve", false);
  public get cacheReserve() {
    return this._cacheReserve;
  }
  public putCacheReserve(value: RulesetRulesActionParametersCacheReserve[] | cdktf.IResolvable) {
    this._cacheReserve.internalValue = value;
  }
  public resetCacheReserve() {
    this._cacheReserve.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheReserveInput() {
    return this._cacheReserve.internalValue;
  }

  // edge_ttl - computed: false, optional: true, required: false
  private _edgeTtl = new RulesetRulesActionParametersEdgeTtlList(this, "edge_ttl", false);
  public get edgeTtl() {
    return this._edgeTtl;
  }
  public putEdgeTtl(value: RulesetRulesActionParametersEdgeTtl[] | cdktf.IResolvable) {
    this._edgeTtl.internalValue = value;
  }
  public resetEdgeTtl() {
    this._edgeTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTtlInput() {
    return this._edgeTtl.internalValue;
  }

  // from_list - computed: false, optional: true, required: false
  private _fromList = new RulesetRulesActionParametersFromListStructList(this, "from_list", false);
  public get fromList() {
    return this._fromList;
  }
  public putFromList(value: RulesetRulesActionParametersFromListStruct[] | cdktf.IResolvable) {
    this._fromList.internalValue = value;
  }
  public resetFromList() {
    this._fromList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromListInput() {
    return this._fromList.internalValue;
  }

  // from_value - computed: false, optional: true, required: false
  private _fromValue = new RulesetRulesActionParametersFromValueList(this, "from_value", false);
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: RulesetRulesActionParametersFromValue[] | cdktf.IResolvable) {
    this._fromValue.internalValue = value;
  }
  public resetFromValue() {
    this._fromValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromValueInput() {
    return this._fromValue.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new RulesetRulesActionParametersHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: RulesetRulesActionParametersHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // matched_data - computed: false, optional: true, required: false
  private _matchedData = new RulesetRulesActionParametersMatchedDataList(this, "matched_data", false);
  public get matchedData() {
    return this._matchedData;
  }
  public putMatchedData(value: RulesetRulesActionParametersMatchedData[] | cdktf.IResolvable) {
    this._matchedData.internalValue = value;
  }
  public resetMatchedData() {
    this._matchedData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedDataInput() {
    return this._matchedData.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new RulesetRulesActionParametersOriginList(this, "origin", false);
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: RulesetRulesActionParametersOrigin[] | cdktf.IResolvable) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new RulesetRulesActionParametersOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: RulesetRulesActionParametersOverrides[] | cdktf.IResolvable) {
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
  private _response = new RulesetRulesActionParametersResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: RulesetRulesActionParametersResponse[] | cdktf.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }

  // serve_stale - computed: false, optional: true, required: false
  private _serveStale = new RulesetRulesActionParametersServeStaleList(this, "serve_stale", false);
  public get serveStale() {
    return this._serveStale;
  }
  public putServeStale(value: RulesetRulesActionParametersServeStale[] | cdktf.IResolvable) {
    this._serveStale.internalValue = value;
  }
  public resetServeStale() {
    this._serveStale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveStaleInput() {
    return this._serveStale.internalValue;
  }

  // sni - computed: false, optional: true, required: false
  private _sni = new RulesetRulesActionParametersSniList(this, "sni", false);
  public get sni() {
    return this._sni;
  }
  public putSni(value: RulesetRulesActionParametersSni[] | cdktf.IResolvable) {
    this._sni.internalValue = value;
  }
  public resetSni() {
    this._sni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni.internalValue;
  }

  // uri - computed: false, optional: true, required: false
  private _uri = new RulesetRulesActionParametersUriList(this, "uri", false);
  public get uri() {
    return this._uri;
  }
  public putUri(value: RulesetRulesActionParametersUri[] | cdktf.IResolvable) {
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

export class RulesetRulesActionParametersList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesActionParameters[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesActionParametersOutputReference {
    return new RulesetRulesActionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesExposedCredentialCheck {
  /**
  * Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#password_expression Ruleset#password_expression}
  */
  readonly passwordExpression?: string;
  /**
  * Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#username_expression Ruleset#username_expression}
  */
  readonly usernameExpression?: string;
}

export function rulesetRulesExposedCredentialCheckToTerraform(struct?: RulesetRulesExposedCredentialCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_expression: cdktf.stringToTerraform(struct!.passwordExpression),
    username_expression: cdktf.stringToTerraform(struct!.usernameExpression),
  }
}


export function rulesetRulesExposedCredentialCheckToHclTerraform(struct?: RulesetRulesExposedCredentialCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_expression: {
      value: cdktf.stringToHclTerraform(struct!.passwordExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_expression: {
      value: cdktf.stringToHclTerraform(struct!.usernameExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesExposedCredentialCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesExposedCredentialCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: RulesetRulesExposedCredentialCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordExpression = undefined;
      this._usernameExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class RulesetRulesExposedCredentialCheckList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesExposedCredentialCheck[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesExposedCredentialCheckOutputReference {
    return new RulesetRulesExposedCredentialCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesLogging {
  /**
  * Override the default logging behavior when a rule is matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function rulesetRulesLoggingToTerraform(struct?: RulesetRulesLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function rulesetRulesLoggingToHclTerraform(struct?: RulesetRulesLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class RulesetRulesLoggingList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesLogging[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesLoggingOutputReference {
    return new RulesetRulesLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRulesRatelimit {
  /**
  * List of parameters that define how Cloudflare tracks the request rate for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#characteristics Ruleset#characteristics}
  */
  readonly characteristics?: string[];
  /**
  * Criteria for counting HTTP requests to trigger the Rate Limiting action. Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#counting_expression Ruleset#counting_expression}
  */
  readonly countingExpression?: string;
  /**
  * Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#mitigation_timeout Ruleset#mitigation_timeout}
  */
  readonly mitigationTimeout?: number;
  /**
  * The period of time to consider (in seconds) when evaluating the request rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#period Ruleset#period}
  */
  readonly period?: number;
  /**
  * The number of requests over the period of time that will trigger the Rate Limiting rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#requests_per_period Ruleset#requests_per_period}
  */
  readonly requestsPerPeriod?: number;
  /**
  * Whether to include requests to origin within the Rate Limiting count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#requests_to_origin Ruleset#requests_to_origin}
  */
  readonly requestsToOrigin?: boolean | cdktf.IResolvable;
  /**
  * The maximum aggregate score over the period of time that will trigger Rate Limiting rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#score_per_period Ruleset#score_per_period}
  */
  readonly scorePerPeriod?: number;
  /**
  * Name of HTTP header in the response, set by the origin server, with the score for the current request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#score_response_header_name Ruleset#score_response_header_name}
  */
  readonly scoreResponseHeaderName?: string;
}

export function rulesetRulesRatelimitToTerraform(struct?: RulesetRulesRatelimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    characteristics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.characteristics),
    counting_expression: cdktf.stringToTerraform(struct!.countingExpression),
    mitigation_timeout: cdktf.numberToTerraform(struct!.mitigationTimeout),
    period: cdktf.numberToTerraform(struct!.period),
    requests_per_period: cdktf.numberToTerraform(struct!.requestsPerPeriod),
    requests_to_origin: cdktf.booleanToTerraform(struct!.requestsToOrigin),
    score_per_period: cdktf.numberToTerraform(struct!.scorePerPeriod),
    score_response_header_name: cdktf.stringToTerraform(struct!.scoreResponseHeaderName),
  }
}


export function rulesetRulesRatelimitToHclTerraform(struct?: RulesetRulesRatelimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    characteristics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.characteristics),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    counting_expression: {
      value: cdktf.stringToHclTerraform(struct!.countingExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mitigation_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mitigationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requests_per_period: {
      value: cdktf.numberToHclTerraform(struct!.requestsPerPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requests_to_origin: {
      value: cdktf.booleanToHclTerraform(struct!.requestsToOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    score_per_period: {
      value: cdktf.numberToHclTerraform(struct!.scorePerPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    score_response_header_name: {
      value: cdktf.stringToHclTerraform(struct!.scoreResponseHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesRatelimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRulesRatelimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._scorePerPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.scorePerPeriod = this._scorePerPeriod;
    }
    if (this._scoreResponseHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreResponseHeaderName = this._scoreResponseHeaderName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesRatelimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._characteristics = undefined;
      this._countingExpression = undefined;
      this._mitigationTimeout = undefined;
      this._period = undefined;
      this._requestsPerPeriod = undefined;
      this._requestsToOrigin = undefined;
      this._scorePerPeriod = undefined;
      this._scoreResponseHeaderName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._characteristics = value.characteristics;
      this._countingExpression = value.countingExpression;
      this._mitigationTimeout = value.mitigationTimeout;
      this._period = value.period;
      this._requestsPerPeriod = value.requestsPerPeriod;
      this._requestsToOrigin = value.requestsToOrigin;
      this._scorePerPeriod = value.scorePerPeriod;
      this._scoreResponseHeaderName = value.scoreResponseHeaderName;
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

  // requests_to_origin - computed: true, optional: true, required: false
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

  // score_per_period - computed: false, optional: true, required: false
  private _scorePerPeriod?: number; 
  public get scorePerPeriod() {
    return this.getNumberAttribute('score_per_period');
  }
  public set scorePerPeriod(value: number) {
    this._scorePerPeriod = value;
  }
  public resetScorePerPeriod() {
    this._scorePerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scorePerPeriodInput() {
    return this._scorePerPeriod;
  }

  // score_response_header_name - computed: false, optional: true, required: false
  private _scoreResponseHeaderName?: string; 
  public get scoreResponseHeaderName() {
    return this.getStringAttribute('score_response_header_name');
  }
  public set scoreResponseHeaderName(value: string) {
    this._scoreResponseHeaderName = value;
  }
  public resetScoreResponseHeaderName() {
    this._scoreResponseHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreResponseHeaderNameInput() {
    return this._scoreResponseHeaderName;
  }
}

export class RulesetRulesRatelimitList extends cdktf.ComplexList {
  public internalValue? : RulesetRulesRatelimit[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesRatelimitOutputReference {
    return new RulesetRulesRatelimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRules {
  /**
  * Action to perform in the ruleset rule. Available values: `block`, `challenge`, `compress_response`, `ddos_dynamic`, `ddos_mitigation`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `serve_error`, `set_cache_settings`, `set_config`, `skip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Brief summary of the ruleset rule and its intended use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#description Ruleset#description}
  */
  readonly description?: string;
  /**
  * Whether the rule is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Criteria for an HTTP request to trigger the ruleset rule action. Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#expression Ruleset#expression}
  */
  readonly expression: string;
  /**
  * Rule reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#ref Ruleset#ref}
  */
  readonly ref?: string;
  /**
  * action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#action_parameters Ruleset#action_parameters}
  */
  readonly actionParameters?: RulesetRulesActionParameters[] | cdktf.IResolvable;
  /**
  * exposed_credential_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#exposed_credential_check Ruleset#exposed_credential_check}
  */
  readonly exposedCredentialCheck?: RulesetRulesExposedCredentialCheck[] | cdktf.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#logging Ruleset#logging}
  */
  readonly logging?: RulesetRulesLogging[] | cdktf.IResolvable;
  /**
  * ratelimit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#ratelimit Ruleset#ratelimit}
  */
  readonly ratelimit?: RulesetRulesRatelimit[] | cdktf.IResolvable;
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
    ref: cdktf.stringToTerraform(struct!.ref),
    action_parameters: cdktf.listMapper(rulesetRulesActionParametersToTerraform, true)(struct!.actionParameters),
    exposed_credential_check: cdktf.listMapper(rulesetRulesExposedCredentialCheckToTerraform, true)(struct!.exposedCredentialCheck),
    logging: cdktf.listMapper(rulesetRulesLoggingToTerraform, true)(struct!.logging),
    ratelimit: cdktf.listMapper(rulesetRulesRatelimitToTerraform, true)(struct!.ratelimit),
  }
}


export function rulesetRulesToHclTerraform(struct?: RulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_parameters: {
      value: cdktf.listMapperHcl(rulesetRulesActionParametersToHclTerraform, true)(struct!.actionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesActionParametersList",
    },
    exposed_credential_check: {
      value: cdktf.listMapperHcl(rulesetRulesExposedCredentialCheckToHclTerraform, true)(struct!.exposedCredentialCheck),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesExposedCredentialCheckList",
    },
    logging: {
      value: cdktf.listMapperHcl(rulesetRulesLoggingToHclTerraform, true)(struct!.logging),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesLoggingList",
    },
    ratelimit: {
      value: cdktf.listMapperHcl(rulesetRulesRatelimitToHclTerraform, true)(struct!.ratelimit),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRulesRatelimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._actionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionParameters = this._actionParameters?.internalValue;
    }
    if (this._exposedCredentialCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedCredentialCheck = this._exposedCredentialCheck?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._ratelimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimit = this._ratelimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._expression = undefined;
      this._ref = undefined;
      this._actionParameters.internalValue = undefined;
      this._exposedCredentialCheck.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._ratelimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._enabled = value.enabled;
      this._expression = value.expression;
      this._ref = value.ref;
      this._actionParameters.internalValue = value.actionParameters;
      this._exposedCredentialCheck.internalValue = value.exposedCredentialCheck;
      this._logging.internalValue = value.logging;
      this._ratelimit.internalValue = value.ratelimit;
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

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // action_parameters - computed: false, optional: true, required: false
  private _actionParameters = new RulesetRulesActionParametersList(this, "action_parameters", false);
  public get actionParameters() {
    return this._actionParameters;
  }
  public putActionParameters(value: RulesetRulesActionParameters[] | cdktf.IResolvable) {
    this._actionParameters.internalValue = value;
  }
  public resetActionParameters() {
    this._actionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionParametersInput() {
    return this._actionParameters.internalValue;
  }

  // exposed_credential_check - computed: false, optional: true, required: false
  private _exposedCredentialCheck = new RulesetRulesExposedCredentialCheckList(this, "exposed_credential_check", false);
  public get exposedCredentialCheck() {
    return this._exposedCredentialCheck;
  }
  public putExposedCredentialCheck(value: RulesetRulesExposedCredentialCheck[] | cdktf.IResolvable) {
    this._exposedCredentialCheck.internalValue = value;
  }
  public resetExposedCredentialCheck() {
    this._exposedCredentialCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedCredentialCheckInput() {
    return this._exposedCredentialCheck.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new RulesetRulesLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }
  public putLogging(value: RulesetRulesLogging[] | cdktf.IResolvable) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // ratelimit - computed: false, optional: true, required: false
  private _ratelimit = new RulesetRulesRatelimitList(this, "ratelimit", false);
  public get ratelimit() {
    return this._ratelimit;
  }
  public putRatelimit(value: RulesetRulesRatelimit[] | cdktf.IResolvable) {
    this._ratelimit.internalValue = value;
  }
  public resetRatelimit() {
    this._ratelimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitInput() {
    return this._ratelimit.internalValue;
  }
}

export class RulesetRulesList extends cdktf.ComplexList {
  public internalValue? : RulesetRules[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesOutputReference {
    return new RulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset cloudflare_ruleset}
*/
export class Ruleset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ruleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ruleset to import
  * @param importFromId The id of the existing Ruleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ruleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/ruleset cloudflare_ruleset} Resource
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
        providerVersion: '4.49.1',
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
    this._accountId = config.accountId;
    this._description = config.description;
    this._kind = config.kind;
    this._name = config.name;
    this._phase = config.phase;
    this._zoneId = config.zoneId;
    this._rules.internalValue = config.rules;
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
  private _rules = new RulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RulesetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
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
      zone_id: cdktf.stringToTerraform(this._zoneId),
      rules: cdktf.listMapper(rulesetRulesToTerraform, true)(this._rules.internalValue),
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
      phase: {
        value: cdktf.stringToHclTerraform(this._phase),
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
      rules: {
        value: cdktf.listMapperHcl(rulesetRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RulesetRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
