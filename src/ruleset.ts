// https://www.terraform.io/docs/providers/cloudflare/r/ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#account_id Ruleset#account_id}
  */
  readonly accountId?: string;
  /**
  * Brief summary of the ruleset and its intended use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#kind Ruleset#kind}
  */
  readonly kind: string;
  /**
  * Name of the ruleset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}
  */
  readonly name: string;
  /**
  * Point in the request/response lifecycle where the ruleset will be created. Available values: `ddos_l4`, `ddos_l7`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phase Ruleset#phase}
  */
  readonly phase: string;
  /**
  * Name of entitlement that is shareable between entities.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#shareable_entitlement_name Ruleset#shareable_entitlement_name}
  */
  readonly shareableEntitlementName?: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  * 
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
export interface RulesetRulesActionParametersBrowserTtl {
  /**
  * Default browser TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}
  */
  readonly default?: number;
  /**
  * Mode of the browser TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}
  */
  readonly mode: string;
}

export function rulesetRulesActionParametersBrowserTtlToTerraform(struct?: RulesetRulesActionParametersBrowserTtlOutputReference | RulesetRulesActionParametersBrowserTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class RulesetRulesActionParametersBrowserTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersBrowserTtl | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersBrowserTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface RulesetRulesActionParametersCacheKeyCustomKeyCookie {
  /**
  * List of cookies to check for presence in the custom key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}
  */
  readonly checkPresence?: string[];
  /**
  * List of cookies to include in the custom key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}
  */
  readonly include?: string[];
}

export function rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference | RulesetRulesActionParametersCacheKeyCustomKeyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkPresence),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyCookie | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkPresence = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkPresence = value.checkPresence;
      this._include = value.include;
    }
  }

  // check_presence - computed: false, optional: true, required: false
  private _checkPresence?: string[]; 
  public get checkPresence() {
    return this.getListAttribute('check_presence');
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
    return this.getListAttribute('include');
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
export interface RulesetRulesActionParametersCacheKeyCustomKeyHeader {
  /**
  * List of headers to check for presence in the custom key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}
  */
  readonly checkPresence?: string[];
  /**
  * Exclude the origin header from the custom key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude_origin Ruleset#exclude_origin}
  */
  readonly excludeOrigin?: boolean | cdktf.IResolvable;
  /**
  * List of headers to include in the custom key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}
  */
  readonly include?: string[];
}

export function rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference | RulesetRulesActionParametersCacheKeyCustomKeyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkPresence),
    exclude_origin: cdktf.booleanToTerraform(struct!.excludeOrigin),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkPresence !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresence = this._checkPresence;
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

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkPresence = undefined;
      this._excludeOrigin = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkPresence = value.checkPresence;
      this._excludeOrigin = value.excludeOrigin;
      this._include = value.include;
    }
  }

  // check_presence - computed: false, optional: true, required: false
  private _checkPresence?: string[]; 
  public get checkPresence() {
    return this.getListAttribute('check_presence');
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

  // exclude_origin - computed: false, optional: true, required: false
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
    return this.getListAttribute('include');
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
export interface RulesetRulesActionParametersCacheKeyCustomKeyHost {
  /**
  * Resolve hostname to IP address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#resolved Ruleset#resolved}
  */
  readonly resolved?: boolean | cdktf.IResolvable;
}

export function rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference | RulesetRulesActionParametersCacheKeyCustomKeyHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolved: cdktf.booleanToTerraform(struct!.resolved),
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolved = this._resolved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resolved = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface RulesetRulesActionParametersCacheKeyCustomKeyQueryString {
  /**
  * List of query string parameters to exclude from the custom key. Conflicts with "include".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude Ruleset#exclude}
  */
  readonly exclude?: string[];
  /**
  * List of query string parameters to include in the custom key. Conflicts with "exclude".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}
  */
  readonly include?: string[];
}

export function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference | RulesetRulesActionParametersCacheKeyCustomKeyQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyQueryString | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
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
    return this.getListAttribute('include');
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
export interface RulesetRulesActionParametersCacheKeyCustomKeyUser {
  /**
  * Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#device_type Ruleset#device_type}
  */
  readonly deviceType?: boolean | cdktf.IResolvable;
  /**
  * Add geo data to the custom key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#geo Ruleset#geo}
  */
  readonly geo?: boolean | cdktf.IResolvable;
  /**
  * Add language data to the custom key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#lang Ruleset#lang}
  */
  readonly lang?: boolean | cdktf.IResolvable;
}

export function rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference | RulesetRulesActionParametersCacheKeyCustomKeyUser): any {
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

export class RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyUser | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceType = undefined;
      this._geo = undefined;
      this._lang = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface RulesetRulesActionParametersCacheKeyCustomKey {
  /**
  * cookie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie Ruleset#cookie}
  */
  readonly cookie?: RulesetRulesActionParametersCacheKeyCustomKeyCookie;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#header Ruleset#header}
  */
  readonly header?: RulesetRulesActionParametersCacheKeyCustomKeyHeader;
  /**
  * host block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}
  */
  readonly host?: RulesetRulesActionParametersCacheKeyCustomKeyHost;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query_string Ruleset#query_string}
  */
  readonly queryString?: RulesetRulesActionParametersCacheKeyCustomKeyQueryString;
  /**
  * user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#user Ruleset#user}
  */
  readonly user?: RulesetRulesActionParametersCacheKeyCustomKeyUser;
}

export function rulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyOutputReference | RulesetRulesActionParametersCacheKeyCustomKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct!.cookie),
    header: rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct!.header),
    host: rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct!.host),
    query_string: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct!.queryString),
    user: rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct!.user),
  }
}

export class RulesetRulesActionParametersCacheKeyCustomKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersCacheKeyCustomKey | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookie.internalValue = undefined;
      this._header.internalValue = undefined;
      this._host.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookie.internalValue = value.cookie;
      this._header.internalValue = value.header;
      this._host.internalValue = value.host;
      this._queryString.internalValue = value.queryString;
      this._user.internalValue = value.user;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: RulesetRulesActionParametersCacheKeyCustomKeyCookie) {
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
  private _header = new RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: RulesetRulesActionParametersCacheKeyCustomKeyHeader) {
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
  private _host = new RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: RulesetRulesActionParametersCacheKeyCustomKeyHost) {
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
  private _queryString = new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryString) {
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
  private _user = new RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: RulesetRulesActionParametersCacheKeyCustomKeyUser) {
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
export interface RulesetRulesActionParametersCacheKey {
  /**
  * Cache by device type. Conflicts with "custom_key.user.device_type".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_by_device_type Ruleset#cache_by_device_type}
  */
  readonly cacheByDeviceType?: boolean | cdktf.IResolvable;
  /**
  * Cache deception armor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_deception_armor Ruleset#cache_deception_armor}
  */
  readonly cacheDeceptionArmor?: boolean | cdktf.IResolvable;
  /**
  * Ignore query strings order.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ignore_query_strings_order Ruleset#ignore_query_strings_order}
  */
  readonly ignoreQueryStringsOrder?: boolean | cdktf.IResolvable;
  /**
  * custom_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#custom_key Ruleset#custom_key}
  */
  readonly customKey?: RulesetRulesActionParametersCacheKeyCustomKey;
}

export function rulesetRulesActionParametersCacheKeyToTerraform(struct?: RulesetRulesActionParametersCacheKeyOutputReference | RulesetRulesActionParametersCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_by_device_type: cdktf.booleanToTerraform(struct!.cacheByDeviceType),
    cache_deception_armor: cdktf.booleanToTerraform(struct!.cacheDeceptionArmor),
    ignore_query_strings_order: cdktf.booleanToTerraform(struct!.ignoreQueryStringsOrder),
    custom_key: rulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct!.customKey),
  }
}

export class RulesetRulesActionParametersCacheKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersCacheKey | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersCacheKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheByDeviceType = undefined;
      this._cacheDeceptionArmor = undefined;
      this._ignoreQueryStringsOrder = undefined;
      this._customKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _customKey = new RulesetRulesActionParametersCacheKeyCustomKeyOutputReference(this, "custom_key");
  public get customKey() {
    return this._customKey;
  }
  public putCustomKey(value: RulesetRulesActionParametersCacheKeyCustomKey) {
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
export interface RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {
  /**
  * From status code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from Ruleset#from}
  */
  readonly from?: number;
  /**
  * To status code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#to Ruleset#to}
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
  * Status code for which the edge TTL is applied. Conflicts with "status_code_range".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}
  */
  readonly statusCode?: number;
  /**
  * Status code edge TTL value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}
  */
  readonly value: number;
  /**
  * status_code_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_range Ruleset#status_code_range}
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}
  */
  readonly default: number;
  /**
  * Mode of the edge TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}
  */
  readonly mode: string;
  /**
  * status_code_ttl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_ttl Ruleset#status_code_ttl}
  */
  readonly statusCodeTtl?: RulesetRulesActionParametersEdgeTtlStatusCodeTtl[] | cdktf.IResolvable;
}

export function rulesetRulesActionParametersEdgeTtlToTerraform(struct?: RulesetRulesActionParametersEdgeTtlOutputReference | RulesetRulesActionParametersEdgeTtl): any {
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

export class RulesetRulesActionParametersEdgeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersEdgeTtl | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersEdgeTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._mode = undefined;
      this._statusCodeTtl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._mode = value.mode;
      this._statusCodeTtl.internalValue = value.statusCodeTtl;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
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
export interface RulesetRulesActionParametersFromList {
  /**
  * Expression to use for the list lookup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#key Ruleset#key}
  */
  readonly key: string;
  /**
  * Name of the list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}
  */
  readonly name: string;
}

export function rulesetRulesActionParametersFromListToTerraform(struct?: RulesetRulesActionParametersFromListOutputReference | RulesetRulesActionParametersFromList): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class RulesetRulesActionParametersFromListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersFromList | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersFromList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface RulesetRulesActionParametersFromValueTargetUrl {
  /**
  * Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Static value to provide as the HTTP request header value. Conflicts with `"expression"`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}
  */
  readonly value?: string;
}

export function rulesetRulesActionParametersFromValueTargetUrlToTerraform(struct?: RulesetRulesActionParametersFromValueTargetUrlOutputReference | RulesetRulesActionParametersFromValueTargetUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class RulesetRulesActionParametersFromValueTargetUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersFromValueTargetUrl | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersFromValueTargetUrl | undefined) {
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
export interface RulesetRulesActionParametersFromValue {
  /**
  * Preserve query string for redirect URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#preserve_query_string Ruleset#preserve_query_string}
  */
  readonly preserveQueryString?: boolean | cdktf.IResolvable;
  /**
  * Status code for redirect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}
  */
  readonly statusCode?: number;
  /**
  * target_url block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#target_url Ruleset#target_url}
  */
  readonly targetUrl?: RulesetRulesActionParametersFromValueTargetUrl;
}

export function rulesetRulesActionParametersFromValueToTerraform(struct?: RulesetRulesActionParametersFromValueOutputReference | RulesetRulesActionParametersFromValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_query_string: cdktf.booleanToTerraform(struct!.preserveQueryString),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    target_url: rulesetRulesActionParametersFromValueTargetUrlToTerraform(struct!.targetUrl),
  }
}

export class RulesetRulesActionParametersFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersFromValue | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersFromValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preserveQueryString = undefined;
      this._statusCode = undefined;
      this._targetUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _targetUrl = new RulesetRulesActionParametersFromValueTargetUrlOutputReference(this, "target_url");
  public get targetUrl() {
    return this._targetUrl;
  }
  public putTargetUrl(value: RulesetRulesActionParametersFromValueTargetUrl) {
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
export interface RulesetRulesActionParametersHeaders {
  /**
  * Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Name of the HTTP request header to target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}
  */
  readonly name?: string;
  /**
  * Action to perform on the HTTP request header. Available values: `remove`, `set`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#operation Ruleset#operation}
  */
  readonly operation?: string;
  /**
  * Static value to provide as the HTTP request header value. Conflicts with `"expression"`.
  * 
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
export interface RulesetRulesActionParametersOrigin {
  /**
  * Origin Hostname where request is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}
  */
  readonly host?: string;
  /**
  * Origin Port where request is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#port Ruleset#port}
  */
  readonly port?: number;
}

export function rulesetRulesActionParametersOriginToTerraform(struct?: RulesetRulesActionParametersOriginOutputReference | RulesetRulesActionParametersOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class RulesetRulesActionParametersOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersOrigin | undefined {
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

  public set internalValue(value: RulesetRulesActionParametersOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface RulesetRulesActionParametersOverridesCategories {
  /**
  * Action to perform in the tag-level override. Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `skip`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Tag name to apply the ruleset rule override to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#category Ruleset#category}
  */
  readonly category?: string;
  /**
  * Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Defines if the current tag-level override enables or disables the ruleset rules with the specified tag. Available values: `enabled`, `disabled`. Defaults to `""`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}
  */
  readonly status?: string;
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
    status: cdktf.stringToTerraform(struct!.status),
  }
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
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
      this._status = undefined;
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
      this._status = value.status;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
  * Action to perform in the rule-level override. Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `skip`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Defines if the current rule-level override enables or disables the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Rule ID to apply the override to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_threshold Ruleset#score_threshold}
  */
  readonly scoreThreshold?: number;
  /**
  * Sensitivity level for a ruleset rule override.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}
  */
  readonly sensitivityLevel?: string;
  /**
  * Defines if the current rule-level override enables or disables the rule. Available values: `enabled`, `disabled`. Defaults to `""`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}
  */
  readonly status?: string;
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
    status: cdktf.stringToTerraform(struct!.status),
  }
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
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
      this._status = undefined;
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
      this._status = value.status;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
  * Action to perform in the rule-level override. Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `skip`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Defines if the current ruleset-level override enables or disables the ruleset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}
  */
  readonly status?: string;
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
    status: cdktf.stringToTerraform(struct!.status),
    categories: cdktf.listMapper(rulesetRulesActionParametersOverridesCategoriesToTerraform, true)(struct!.categories),
    rules: cdktf.listMapper(rulesetRulesActionParametersOverridesRulesToTerraform, true)(struct!.rules),
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
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

  public set internalValue(value: RulesetRulesActionParametersOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._enabled = undefined;
      this._status = undefined;
      this._categories.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._enabled = value.enabled;
      this._status = value.status;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
export interface RulesetRulesActionParametersResponse {
  /**
  * Body content to include in the response.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}
  */
  readonly content?: string;
  /**
  * HTTP content type to send in the response.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}
  */
  readonly contentType?: string;
  /**
  * HTTP status code to send in the response.
  * 
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_stale_while_updating Ruleset#disable_stale_while_updating}
  */
  readonly disableStaleWhileUpdating?: boolean | cdktf.IResolvable;
}

export function rulesetRulesActionParametersServeStaleToTerraform(struct?: RulesetRulesActionParametersServeStaleOutputReference | RulesetRulesActionParametersServeStale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_stale_while_updating: cdktf.booleanToTerraform(struct!.disableStaleWhileUpdating),
  }
}

export class RulesetRulesActionParametersServeStaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRulesActionParametersServeStale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableStaleWhileUpdating !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStaleWhileUpdating = this._disableStaleWhileUpdating;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParametersServeStale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableStaleWhileUpdating = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface RulesetRulesActionParametersUriPath {
  /**
  * Expression that defines the updated (dynamic) value of the URI path or query string component. Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Static string value of the updated URI path or query string component.
  * 
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
  * Expression that defines the updated (dynamic) value of the URI path or query string component. Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}
  */
  readonly expression?: string;
  /**
  * Static string value of the updated URI path or query string component.
  * 
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
  * Whether to cache if expression matches.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache Ruleset#cache}
  */
  readonly cache?: boolean | cdktf.IResolvable;
  /**
  * List of cookie values to include as part of custom fields logging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie_fields Ruleset#cookie_fields}
  */
  readonly cookieFields?: string[];
  /**
  * Host Header that request origin receives.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host_header Ruleset#host_header}
  */
  readonly hostHeader?: string;
  /**
  * Identifier of the action parameter to modify.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}
  */
  readonly increment?: number;
  /**
  * Pass-through error page for origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin_error_page_passthru Ruleset#origin_error_page_passthru}
  */
  readonly originErrorPagePassthru?: boolean | cdktf.IResolvable;
  /**
  * Point in the request/response lifecycle where the ruleset will be created. Available values: `ddos_l4`, `ddos_l7`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phases Ruleset#phases}
  */
  readonly phases?: string[];
  /**
  * Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#products Ruleset#products}
  */
  readonly products?: string[];
  /**
  * List of request headers to include as part of custom fields logging, in lowercase.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#request_fields Ruleset#request_fields}
  */
  readonly requestFields?: string[];
  /**
  * Respect strong ETags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#respect_strong_etags Ruleset#respect_strong_etags}
  */
  readonly respectStrongEtags?: boolean | cdktf.IResolvable;
  /**
  * List of response headers to include as part of custom fields logging, in lowercase.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response_fields Ruleset#response_fields}
  */
  readonly responseFields?: string[];
  /**
  * Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs. Example: `rules = { "efb7b8c949ac4650a09736fc376e9aee" = "5de7edfa648c4d6891dc3e7f84534ffa,e3a567afc347477d9702d9047e97d760" }`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}
  */
  readonly rules?: { [key: string]: string };
  /**
  * Which ruleset ID to target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ruleset Ruleset#ruleset}
  */
  readonly ruleset?: string;
  /**
  * List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rulesets Ruleset#rulesets}
  */
  readonly rulesets?: string[];
  /**
  * Version of the ruleset to deploy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#version Ruleset#version}
  */
  readonly version?: string;
  /**
  * browser_ttl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#browser_ttl Ruleset#browser_ttl}
  */
  readonly browserTtl?: RulesetRulesActionParametersBrowserTtl;
  /**
  * cache_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_key Ruleset#cache_key}
  */
  readonly cacheKey?: RulesetRulesActionParametersCacheKey;
  /**
  * edge_ttl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#edge_ttl Ruleset#edge_ttl}
  */
  readonly edgeTtl?: RulesetRulesActionParametersEdgeTtl;
  /**
  * from_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_list Ruleset#from_list}
  */
  readonly fromList?: RulesetRulesActionParametersFromList;
  /**
  * from_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_value Ruleset#from_value}
  */
  readonly fromValue?: RulesetRulesActionParametersFromValue;
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
  * origin block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}
  */
  readonly origin?: RulesetRulesActionParametersOrigin;
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
  * serve_stale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#serve_stale Ruleset#serve_stale}
  */
  readonly serveStale?: RulesetRulesActionParametersServeStale;
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
    cache: cdktf.booleanToTerraform(struct!.cache),
    cookie_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cookieFields),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    id: cdktf.stringToTerraform(struct!.id),
    increment: cdktf.numberToTerraform(struct!.increment),
    origin_error_page_passthru: cdktf.booleanToTerraform(struct!.originErrorPagePassthru),
    phases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phases),
    products: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.products),
    request_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestFields),
    respect_strong_etags: cdktf.booleanToTerraform(struct!.respectStrongEtags),
    response_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseFields),
    rules: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.rules),
    ruleset: cdktf.stringToTerraform(struct!.ruleset),
    rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulesets),
    version: cdktf.stringToTerraform(struct!.version),
    browser_ttl: rulesetRulesActionParametersBrowserTtlToTerraform(struct!.browserTtl),
    cache_key: rulesetRulesActionParametersCacheKeyToTerraform(struct!.cacheKey),
    edge_ttl: rulesetRulesActionParametersEdgeTtlToTerraform(struct!.edgeTtl),
    from_list: rulesetRulesActionParametersFromListToTerraform(struct!.fromList),
    from_value: rulesetRulesActionParametersFromValueToTerraform(struct!.fromValue),
    headers: cdktf.listMapper(rulesetRulesActionParametersHeadersToTerraform, true)(struct!.headers),
    matched_data: rulesetRulesActionParametersMatchedDataToTerraform(struct!.matchedData),
    origin: rulesetRulesActionParametersOriginToTerraform(struct!.origin),
    overrides: rulesetRulesActionParametersOverridesToTerraform(struct!.overrides),
    response: cdktf.listMapper(rulesetRulesActionParametersResponseToTerraform, true)(struct!.response),
    serve_stale: rulesetRulesActionParametersServeStaleToTerraform(struct!.serveStale),
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
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._cookieFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieFields = this._cookieFields;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._increment !== undefined) {
      hasAnyValues = true;
      internalValueResult.increment = this._increment;
    }
    if (this._originErrorPagePassthru !== undefined) {
      hasAnyValues = true;
      internalValueResult.originErrorPagePassthru = this._originErrorPagePassthru;
    }
    if (this._phases !== undefined) {
      hasAnyValues = true;
      internalValueResult.phases = this._phases;
    }
    if (this._products !== undefined) {
      hasAnyValues = true;
      internalValueResult.products = this._products;
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
    if (this._browserTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserTtl = this._browserTtl?.internalValue;
    }
    if (this._cacheKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKey = this._cacheKey?.internalValue;
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
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cache = undefined;
      this._cookieFields = undefined;
      this._hostHeader = undefined;
      this._id = undefined;
      this._increment = undefined;
      this._originErrorPagePassthru = undefined;
      this._phases = undefined;
      this._products = undefined;
      this._requestFields = undefined;
      this._respectStrongEtags = undefined;
      this._responseFields = undefined;
      this._rules = undefined;
      this._ruleset = undefined;
      this._rulesets = undefined;
      this._version = undefined;
      this._browserTtl.internalValue = undefined;
      this._cacheKey.internalValue = undefined;
      this._edgeTtl.internalValue = undefined;
      this._fromList.internalValue = undefined;
      this._fromValue.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._matchedData.internalValue = undefined;
      this._origin.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._response.internalValue = undefined;
      this._serveStale.internalValue = undefined;
      this._uri.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cache = value.cache;
      this._cookieFields = value.cookieFields;
      this._hostHeader = value.hostHeader;
      this._id = value.id;
      this._increment = value.increment;
      this._originErrorPagePassthru = value.originErrorPagePassthru;
      this._phases = value.phases;
      this._products = value.products;
      this._requestFields = value.requestFields;
      this._respectStrongEtags = value.respectStrongEtags;
      this._responseFields = value.responseFields;
      this._rules = value.rules;
      this._ruleset = value.ruleset;
      this._rulesets = value.rulesets;
      this._version = value.version;
      this._browserTtl.internalValue = value.browserTtl;
      this._cacheKey.internalValue = value.cacheKey;
      this._edgeTtl.internalValue = value.edgeTtl;
      this._fromList.internalValue = value.fromList;
      this._fromValue.internalValue = value.fromValue;
      this._headers.internalValue = value.headers;
      this._matchedData.internalValue = value.matchedData;
      this._origin.internalValue = value.origin;
      this._overrides.internalValue = value.overrides;
      this._response.internalValue = value.response;
      this._serveStale.internalValue = value.serveStale;
      this._uri.internalValue = value.uri;
    }
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

  // browser_ttl - computed: false, optional: true, required: false
  private _browserTtl = new RulesetRulesActionParametersBrowserTtlOutputReference(this, "browser_ttl");
  public get browserTtl() {
    return this._browserTtl;
  }
  public putBrowserTtl(value: RulesetRulesActionParametersBrowserTtl) {
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
  private _cacheKey = new RulesetRulesActionParametersCacheKeyOutputReference(this, "cache_key");
  public get cacheKey() {
    return this._cacheKey;
  }
  public putCacheKey(value: RulesetRulesActionParametersCacheKey) {
    this._cacheKey.internalValue = value;
  }
  public resetCacheKey() {
    this._cacheKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyInput() {
    return this._cacheKey.internalValue;
  }

  // edge_ttl - computed: false, optional: true, required: false
  private _edgeTtl = new RulesetRulesActionParametersEdgeTtlOutputReference(this, "edge_ttl");
  public get edgeTtl() {
    return this._edgeTtl;
  }
  public putEdgeTtl(value: RulesetRulesActionParametersEdgeTtl) {
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
  private _fromList = new RulesetRulesActionParametersFromListOutputReference(this, "from_list");
  public get fromList() {
    return this._fromList;
  }
  public putFromList(value: RulesetRulesActionParametersFromList) {
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
  private _fromValue = new RulesetRulesActionParametersFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: RulesetRulesActionParametersFromValue) {
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

  // origin - computed: false, optional: true, required: false
  private _origin = new RulesetRulesActionParametersOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: RulesetRulesActionParametersOrigin) {
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
  private _serveStale = new RulesetRulesActionParametersServeStaleOutputReference(this, "serve_stale");
  public get serveStale() {
    return this._serveStale;
  }
  public putServeStale(value: RulesetRulesActionParametersServeStale) {
    this._serveStale.internalValue = value;
  }
  public resetServeStale() {
    this._serveStale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveStaleInput() {
    return this._serveStale.internalValue;
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
  * Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#password_expression Ruleset#password_expression}
  */
  readonly passwordExpression?: string;
  /**
  * Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).
  * 
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
  * Override the default logging behavior when a rule is matched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}
  */
  readonly status?: string;
}

export function rulesetRulesLoggingToTerraform(struct?: RulesetRulesLoggingOutputReference | RulesetRulesLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    status: cdktf.stringToTerraform(struct!.status),
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRulesLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._status = value.status;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface RulesetRulesRatelimit {
  /**
  * List of parameters that define how Cloudflare tracks the request rate for this rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#characteristics Ruleset#characteristics}
  */
  readonly characteristics?: string[];
  /**
  * Criteria for counting HTTP requests to trigger the Rate Limiting action. Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#counting_expression Ruleset#counting_expression}
  */
  readonly countingExpression?: string;
  /**
  * Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mitigation_timeout Ruleset#mitigation_timeout}
  */
  readonly mitigationTimeout?: number;
  /**
  * The period of time to consider (in seconds) when evaluating the request rate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#period Ruleset#period}
  */
  readonly period?: number;
  /**
  * The number of requests over the period of time that will trigger the Rate Limiting rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_per_period Ruleset#requests_per_period}
  */
  readonly requestsPerPeriod?: number;
  /**
  * Whether to include requests to origin within the Rate Limiting count.
  * 
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
    characteristics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.characteristics),
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
  * Action to perform in the ruleset rule. Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `skip`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}
  */
  readonly action?: string;
  /**
  * Brief summary of the ruleset rule and its intended use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}
  */
  readonly description?: string;
  /**
  * Whether the rule is active.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Criteria for an HTTP request to trigger the ruleset rule action. Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.
  * 
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // action_parameters - computed: false, optional: true, required: false
  private _actionParameters = new RulesetRulesActionParametersOutputReference(this, "action_parameters");
  public get actionParameters() {
    return this._actionParameters;
  }
  public putActionParameters(value: RulesetRulesActionParameters) {
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
  private _exposedCredentialCheck = new RulesetRulesExposedCredentialCheckOutputReference(this, "exposed_credential_check");
  public get exposedCredentialCheck() {
    return this._exposedCredentialCheck;
  }
  public putExposedCredentialCheck(value: RulesetRulesExposedCredentialCheck) {
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
  private _logging = new RulesetRulesLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: RulesetRulesLogging) {
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
  private _ratelimit = new RulesetRulesRatelimitOutputReference(this, "ratelimit");
  public get ratelimit() {
    return this._ratelimit;
  }
  public putRatelimit(value: RulesetRulesRatelimit) {
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
        providerVersion: '3.20.0',
        providerVersionConstraint: '~> 3.14'
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
    this._id = config.id;
    this._kind = config.kind;
    this._name = config.name;
    this._phase = config.phase;
    this._shareableEntitlementName = config.shareableEntitlementName;
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
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      phase: cdktf.stringToTerraform(this._phase),
      shareable_entitlement_name: cdktf.stringToTerraform(this._shareableEntitlementName),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      rules: cdktf.listMapper(rulesetRulesToTerraform, true)(this._rules.internalValue),
    };
  }
}
