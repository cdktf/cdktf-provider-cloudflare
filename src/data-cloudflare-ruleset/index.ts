/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareRulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/ruleset#account_id DataCloudflareRuleset#account_id}
  */
  readonly accountId?: string;
  /**
  * The unique ID of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/ruleset#ruleset_id DataCloudflareRuleset#ruleset_id}
  */
  readonly rulesetId?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/ruleset#zone_id DataCloudflareRuleset#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareRulesetRulesActionParametersAlgorithms {
}

export function dataCloudflareRulesetRulesActionParametersAlgorithmsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersAlgorithmsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRulesActionParametersAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflareRulesetRulesActionParametersAlgorithmsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference {
    return new DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetRulesActionParametersAutominify {
}

export function dataCloudflareRulesetRulesActionParametersAutominifyToTerraform(struct?: DataCloudflareRulesetRulesActionParametersAutominify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersAutominifyToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersAutominify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersAutominifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersAutominify | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersAutominify | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // css - computed: true, optional: false, required: false
  public get css() {
    return this.getBooleanAttribute('css');
  }

  // html - computed: true, optional: false, required: false
  public get html() {
    return this.getBooleanAttribute('html');
  }

  // js - computed: true, optional: false, required: false
  public get js() {
    return this.getBooleanAttribute('js');
  }
}
export interface DataCloudflareRulesetRulesActionParametersBrowserTtl {
}

export function dataCloudflareRulesetRulesActionParametersBrowserTtlToTerraform(struct?: DataCloudflareRulesetRulesActionParametersBrowserTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersBrowserTtlToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersBrowserTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersBrowserTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersBrowserTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getNumberAttribute('default');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie {
}

export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_presence - computed: true, optional: false, required: false
  public get checkPresence() {
    return this.getListAttribute('check_presence');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getListAttribute('include');
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader {
}

export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_presence - computed: true, optional: false, required: false
  public get checkPresence() {
    return this.getListAttribute('check_presence');
  }

  // contains - computed: true, optional: false, required: false
  private _contains = new cdktf.StringListMap(this, "contains");
  public get contains() {
    return this._contains;
  }

  // exclude_origin - computed: true, optional: false, required: false
  public get excludeOrigin() {
    return this.getBooleanAttribute('exclude_origin');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getListAttribute('include');
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost {
}

export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resolved - computed: true, optional: false, required: false
  public get resolved() {
    return this.getBooleanAttribute('resolved');
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude {
}

export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getListAttribute('list');
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude {
}

export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getListAttribute('list');
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString {
}

export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  private _exclude = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }

  // include - computed: true, optional: false, required: false
  private _include = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser {
}

export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getBooleanAttribute('device_type');
  }

  // geo - computed: true, optional: false, required: false
  public get geo() {
    return this.getBooleanAttribute('geo');
  }

  // lang - computed: true, optional: false, required: false
  public get lang() {
    return this.getBooleanAttribute('lang');
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey {
}

export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  private _cookie = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }

  // header - computed: true, optional: false, required: false
  private _header = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }

  // query_string - computed: true, optional: false, required: false
  private _queryString = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheKey {
}

export function dataCloudflareRulesetRulesActionParametersCacheKeyToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheKeyToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_by_device_type - computed: true, optional: false, required: false
  public get cacheByDeviceType() {
    return this.getBooleanAttribute('cache_by_device_type');
  }

  // cache_deception_armor - computed: true, optional: false, required: false
  public get cacheDeceptionArmor() {
    return this.getBooleanAttribute('cache_deception_armor');
  }

  // custom_key - computed: true, optional: false, required: false
  private _customKey = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference(this, "custom_key");
  public get customKey() {
    return this._customKey;
  }

  // ignore_query_strings_order - computed: true, optional: false, required: false
  public get ignoreQueryStringsOrder() {
    return this.getBooleanAttribute('ignore_query_strings_order');
  }
}
export interface DataCloudflareRulesetRulesActionParametersCacheReserve {
}

export function dataCloudflareRulesetRulesActionParametersCacheReserveToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheReserve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCacheReserveToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheReserve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCacheReserve | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheReserve | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eligible - computed: true, optional: false, required: false
  public get eligible() {
    return this.getBooleanAttribute('eligible');
  }

  // minimum_file_size - computed: true, optional: false, required: false
  public get minimumFileSize() {
    return this.getNumberAttribute('minimum_file_size');
  }
}
export interface DataCloudflareRulesetRulesActionParametersCookieFields {
}

export function dataCloudflareRulesetRulesActionParametersCookieFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCookieFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersCookieFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCookieFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRulesActionParametersCookieFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersCookieFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflareRulesetRulesActionParametersCookieFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference {
    return new DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {
}

export function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}
export interface DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl {
}

export function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status_code_range - computed: true, optional: false, required: false
  private _statusCodeRange = new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(this, "status_code_range");
  public get statusCodeRange() {
    return this._statusCodeRange;
  }

  // status_code_value - computed: true, optional: false, required: false
  public get statusCodeValue() {
    return this.getNumberAttribute('status_code_value');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference {
    return new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetRulesActionParametersEdgeTtl {
}

export function dataCloudflareRulesetRulesActionParametersEdgeTtlToTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersEdgeTtlToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersEdgeTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersEdgeTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getNumberAttribute('default');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // status_code_ttl - computed: true, optional: false, required: false
  private _statusCodeTtl = new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList(this, "status_code_ttl", false);
  public get statusCodeTtl() {
    return this._statusCodeTtl;
  }
}
export interface DataCloudflareRulesetRulesActionParametersFromListStruct {
}

export function dataCloudflareRulesetRulesActionParametersFromListStructToTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersFromListStructToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersFromListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersFromListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersFromListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCloudflareRulesetRulesActionParametersFromValueTargetUrl {
}

export function dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromValueTargetUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromValueTargetUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersFromValueTargetUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersFromValueTargetUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCloudflareRulesetRulesActionParametersFromValue {
}

export function dataCloudflareRulesetRulesActionParametersFromValueToTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersFromValueToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersFromValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersFromValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preserve_query_string - computed: true, optional: false, required: false
  public get preserveQueryString() {
    return this.getBooleanAttribute('preserve_query_string');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // target_url - computed: true, optional: false, required: false
  private _targetUrl = new DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference(this, "target_url");
  public get targetUrl() {
    return this._targetUrl;
  }
}
export interface DataCloudflareRulesetRulesActionParametersHeaders {
}

export function dataCloudflareRulesetRulesActionParametersHeadersToTerraform(struct?: DataCloudflareRulesetRulesActionParametersHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersHeadersToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCloudflareRulesetRulesActionParametersHeadersMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflareRulesetRulesActionParametersHeadersOutputReference {
    return new DataCloudflareRulesetRulesActionParametersHeadersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflareRulesetRulesActionParametersMatchedData {
}

export function dataCloudflareRulesetRulesActionParametersMatchedDataToTerraform(struct?: DataCloudflareRulesetRulesActionParametersMatchedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersMatchedDataToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersMatchedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersMatchedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersMatchedData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
}
export interface DataCloudflareRulesetRulesActionParametersOrigin {
}

export function dataCloudflareRulesetRulesActionParametersOriginToTerraform(struct?: DataCloudflareRulesetRulesActionParametersOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersOriginToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataCloudflareRulesetRulesActionParametersOverridesCategories {
}

export function dataCloudflareRulesetRulesActionParametersOverridesCategoriesToTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverridesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersOverridesCategoriesToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverridesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRulesActionParametersOverridesCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersOverridesCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // sensitivity_level - computed: true, optional: false, required: false
  public get sensitivityLevel() {
    return this.getStringAttribute('sensitivity_level');
  }
}

export class DataCloudflareRulesetRulesActionParametersOverridesCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference {
    return new DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetRulesActionParametersOverridesRules {
}

export function dataCloudflareRulesetRulesActionParametersOverridesRulesToTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverridesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersOverridesRulesToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverridesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRulesActionParametersOverridesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersOverridesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // score_threshold - computed: true, optional: false, required: false
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }

  // sensitivity_level - computed: true, optional: false, required: false
  public get sensitivityLevel() {
    return this.getStringAttribute('sensitivity_level');
  }
}

export class DataCloudflareRulesetRulesActionParametersOverridesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference {
    return new DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetRulesActionParametersOverrides {
}

export function dataCloudflareRulesetRulesActionParametersOverridesToTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersOverridesToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataCloudflareRulesetRulesActionParametersOverridesCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCloudflareRulesetRulesActionParametersOverridesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // sensitivity_level - computed: true, optional: false, required: false
  public get sensitivityLevel() {
    return this.getStringAttribute('sensitivity_level');
  }
}
export interface DataCloudflareRulesetRulesActionParametersRawResponseFields {
}

export function dataCloudflareRulesetRulesActionParametersRawResponseFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersRawResponseFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersRawResponseFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersRawResponseFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRulesActionParametersRawResponseFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersRawResponseFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // preserve_duplicates - computed: true, optional: false, required: false
  public get preserveDuplicates() {
    return this.getBooleanAttribute('preserve_duplicates');
  }
}

export class DataCloudflareRulesetRulesActionParametersRawResponseFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference {
    return new DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetRulesActionParametersRequestFields {
}

export function dataCloudflareRulesetRulesActionParametersRequestFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersRequestFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersRequestFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersRequestFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRulesActionParametersRequestFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersRequestFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflareRulesetRulesActionParametersRequestFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference {
    return new DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetRulesActionParametersResponse {
}

export function dataCloudflareRulesetRulesActionParametersResponseToTerraform(struct?: DataCloudflareRulesetRulesActionParametersResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersResponseToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
}
export interface DataCloudflareRulesetRulesActionParametersResponseFields {
}

export function dataCloudflareRulesetRulesActionParametersResponseFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersResponseFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersResponseFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersResponseFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRulesActionParametersResponseFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersResponseFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // preserve_duplicates - computed: true, optional: false, required: false
  public get preserveDuplicates() {
    return this.getBooleanAttribute('preserve_duplicates');
  }
}

export class DataCloudflareRulesetRulesActionParametersResponseFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference {
    return new DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetRulesActionParametersServeStale {
}

export function dataCloudflareRulesetRulesActionParametersServeStaleToTerraform(struct?: DataCloudflareRulesetRulesActionParametersServeStale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersServeStaleToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersServeStale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersServeStaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersServeStale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersServeStale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_stale_while_updating - computed: true, optional: false, required: false
  public get disableStaleWhileUpdating() {
    return this.getBooleanAttribute('disable_stale_while_updating');
  }
}
export interface DataCloudflareRulesetRulesActionParametersSni {
}

export function dataCloudflareRulesetRulesActionParametersSniToTerraform(struct?: DataCloudflareRulesetRulesActionParametersSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersSniToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersSni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersSni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCloudflareRulesetRulesActionParametersTransformedRequestFields {
}

export function dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersTransformedRequestFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersTransformedRequestFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRulesActionParametersTransformedRequestFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersTransformedRequestFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference {
    return new DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetRulesActionParametersUriPath {
}

export function dataCloudflareRulesetRulesActionParametersUriPathToTerraform(struct?: DataCloudflareRulesetRulesActionParametersUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersUriPathToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCloudflareRulesetRulesActionParametersUriQuery {
}

export function dataCloudflareRulesetRulesActionParametersUriQueryToTerraform(struct?: DataCloudflareRulesetRulesActionParametersUriQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersUriQueryToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersUriQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersUriQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersUriQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersUriQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCloudflareRulesetRulesActionParametersUri {
}

export function dataCloudflareRulesetRulesActionParametersUriToTerraform(struct?: DataCloudflareRulesetRulesActionParametersUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersUriToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParametersUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParametersUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataCloudflareRulesetRulesActionParametersUriPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCloudflareRulesetRulesActionParametersUriQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
}
export interface DataCloudflareRulesetRulesActionParameters {
}

export function dataCloudflareRulesetRulesActionParametersToTerraform(struct?: DataCloudflareRulesetRulesActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesActionParametersToHclTerraform(struct?: DataCloudflareRulesetRulesActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_cacheable_ports - computed: true, optional: false, required: false
  public get additionalCacheablePorts() {
    return this.getNumberListAttribute('additional_cacheable_ports');
  }

  // algorithms - computed: true, optional: false, required: false
  private _algorithms = new DataCloudflareRulesetRulesActionParametersAlgorithmsList(this, "algorithms", false);
  public get algorithms() {
    return this._algorithms;
  }

  // automatic_https_rewrites - computed: true, optional: false, required: false
  public get automaticHttpsRewrites() {
    return this.getBooleanAttribute('automatic_https_rewrites');
  }

  // autominify - computed: true, optional: false, required: false
  private _autominify = new DataCloudflareRulesetRulesActionParametersAutominifyOutputReference(this, "autominify");
  public get autominify() {
    return this._autominify;
  }

  // bic - computed: true, optional: false, required: false
  public get bic() {
    return this.getBooleanAttribute('bic');
  }

  // browser_ttl - computed: true, optional: false, required: false
  private _browserTtl = new DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference(this, "browser_ttl");
  public get browserTtl() {
    return this._browserTtl;
  }

  // cache - computed: true, optional: false, required: false
  public get cache() {
    return this.getBooleanAttribute('cache');
  }

  // cache_key - computed: true, optional: false, required: false
  private _cacheKey = new DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference(this, "cache_key");
  public get cacheKey() {
    return this._cacheKey;
  }

  // cache_reserve - computed: true, optional: false, required: false
  private _cacheReserve = new DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference(this, "cache_reserve");
  public get cacheReserve() {
    return this._cacheReserve;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // cookie_fields - computed: true, optional: false, required: false
  private _cookieFields = new DataCloudflareRulesetRulesActionParametersCookieFieldsList(this, "cookie_fields", false);
  public get cookieFields() {
    return this._cookieFields;
  }

  // disable_apps - computed: true, optional: false, required: false
  public get disableApps() {
    return this.getBooleanAttribute('disable_apps');
  }

  // disable_rum - computed: true, optional: false, required: false
  public get disableRum() {
    return this.getBooleanAttribute('disable_rum');
  }

  // disable_zaraz - computed: true, optional: false, required: false
  public get disableZaraz() {
    return this.getBooleanAttribute('disable_zaraz');
  }

  // edge_ttl - computed: true, optional: false, required: false
  private _edgeTtl = new DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference(this, "edge_ttl");
  public get edgeTtl() {
    return this._edgeTtl;
  }

  // email_obfuscation - computed: true, optional: false, required: false
  public get emailObfuscation() {
    return this.getBooleanAttribute('email_obfuscation');
  }

  // fonts - computed: true, optional: false, required: false
  public get fonts() {
    return this.getBooleanAttribute('fonts');
  }

  // from_list - computed: true, optional: false, required: false
  private _fromList = new DataCloudflareRulesetRulesActionParametersFromListStructOutputReference(this, "from_list");
  public get fromList() {
    return this._fromList;
  }

  // from_value - computed: true, optional: false, required: false
  private _fromValue = new DataCloudflareRulesetRulesActionParametersFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataCloudflareRulesetRulesActionParametersHeadersMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // host_header - computed: true, optional: false, required: false
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }

  // hotlink_protection - computed: true, optional: false, required: false
  public get hotlinkProtection() {
    return this.getBooleanAttribute('hotlink_protection');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // increment - computed: true, optional: false, required: false
  public get increment() {
    return this.getNumberAttribute('increment');
  }

  // matched_data - computed: true, optional: false, required: false
  private _matchedData = new DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference(this, "matched_data");
  public get matchedData() {
    return this._matchedData;
  }

  // mirage - computed: true, optional: false, required: false
  public get mirage() {
    return this.getBooleanAttribute('mirage');
  }

  // opportunistic_encryption - computed: true, optional: false, required: false
  public get opportunisticEncryption() {
    return this.getBooleanAttribute('opportunistic_encryption');
  }

  // origin - computed: true, optional: false, required: false
  private _origin = new DataCloudflareRulesetRulesActionParametersOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }

  // origin_cache_control - computed: true, optional: false, required: false
  public get originCacheControl() {
    return this.getBooleanAttribute('origin_cache_control');
  }

  // origin_error_page_passthru - computed: true, optional: false, required: false
  public get originErrorPagePassthru() {
    return this.getBooleanAttribute('origin_error_page_passthru');
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataCloudflareRulesetRulesActionParametersOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }

  // phases - computed: true, optional: false, required: false
  public get phases() {
    return this.getListAttribute('phases');
  }

  // polish - computed: true, optional: false, required: false
  public get polish() {
    return this.getStringAttribute('polish');
  }

  // products - computed: true, optional: false, required: false
  public get products() {
    return this.getListAttribute('products');
  }

  // raw_response_fields - computed: true, optional: false, required: false
  private _rawResponseFields = new DataCloudflareRulesetRulesActionParametersRawResponseFieldsList(this, "raw_response_fields", false);
  public get rawResponseFields() {
    return this._rawResponseFields;
  }

  // read_timeout - computed: true, optional: false, required: false
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }

  // request_fields - computed: true, optional: false, required: false
  private _requestFields = new DataCloudflareRulesetRulesActionParametersRequestFieldsList(this, "request_fields", false);
  public get requestFields() {
    return this._requestFields;
  }

  // respect_strong_etags - computed: true, optional: false, required: false
  public get respectStrongEtags() {
    return this.getBooleanAttribute('respect_strong_etags');
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataCloudflareRulesetRulesActionParametersResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }

  // response_fields - computed: true, optional: false, required: false
  private _responseFields = new DataCloudflareRulesetRulesActionParametersResponseFieldsList(this, "response_fields", false);
  public get responseFields() {
    return this._responseFields;
  }

  // rocket_loader - computed: true, optional: false, required: false
  public get rocketLoader() {
    return this.getBooleanAttribute('rocket_loader');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new cdktf.StringListMap(this, "rules");
  public get rules() {
    return this._rules;
  }

  // ruleset - computed: true, optional: false, required: false
  public get ruleset() {
    return this.getStringAttribute('ruleset');
  }

  // rulesets - computed: true, optional: false, required: false
  public get rulesets() {
    return this.getListAttribute('rulesets');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // serve_stale - computed: true, optional: false, required: false
  private _serveStale = new DataCloudflareRulesetRulesActionParametersServeStaleOutputReference(this, "serve_stale");
  public get serveStale() {
    return this._serveStale;
  }

  // server_side_excludes - computed: true, optional: false, required: false
  public get serverSideExcludes() {
    return this.getBooleanAttribute('server_side_excludes');
  }

  // sni - computed: true, optional: false, required: false
  private _sni = new DataCloudflareRulesetRulesActionParametersSniOutputReference(this, "sni");
  public get sni() {
    return this._sni;
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getStringAttribute('ssl');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // sxg - computed: true, optional: false, required: false
  public get sxg() {
    return this.getBooleanAttribute('sxg');
  }

  // transformed_request_fields - computed: true, optional: false, required: false
  private _transformedRequestFields = new DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList(this, "transformed_request_fields", false);
  public get transformedRequestFields() {
    return this._transformedRequestFields;
  }

  // uri - computed: true, optional: false, required: false
  private _uri = new DataCloudflareRulesetRulesActionParametersUriOutputReference(this, "uri");
  public get uri() {
    return this._uri;
  }
}
export interface DataCloudflareRulesetRulesExposedCredentialCheck {
}

export function dataCloudflareRulesetRulesExposedCredentialCheckToTerraform(struct?: DataCloudflareRulesetRulesExposedCredentialCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesExposedCredentialCheckToHclTerraform(struct?: DataCloudflareRulesetRulesExposedCredentialCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesExposedCredentialCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesExposedCredentialCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesExposedCredentialCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password_expression - computed: true, optional: false, required: false
  public get passwordExpression() {
    return this.getStringAttribute('password_expression');
  }

  // username_expression - computed: true, optional: false, required: false
  public get usernameExpression() {
    return this.getStringAttribute('username_expression');
  }
}
export interface DataCloudflareRulesetRulesLogging {
}

export function dataCloudflareRulesetRulesLoggingToTerraform(struct?: DataCloudflareRulesetRulesLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesLoggingToHclTerraform(struct?: DataCloudflareRulesetRulesLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataCloudflareRulesetRulesRatelimit {
}

export function dataCloudflareRulesetRulesRatelimitToTerraform(struct?: DataCloudflareRulesetRulesRatelimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesRatelimitToHclTerraform(struct?: DataCloudflareRulesetRulesRatelimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesRatelimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareRulesetRulesRatelimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRulesRatelimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // characteristics - computed: true, optional: false, required: false
  public get characteristics() {
    return this.getListAttribute('characteristics');
  }

  // counting_expression - computed: true, optional: false, required: false
  public get countingExpression() {
    return this.getStringAttribute('counting_expression');
  }

  // mitigation_timeout - computed: true, optional: false, required: false
  public get mitigationTimeout() {
    return this.getNumberAttribute('mitigation_timeout');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // requests_per_period - computed: true, optional: false, required: false
  public get requestsPerPeriod() {
    return this.getNumberAttribute('requests_per_period');
  }

  // requests_to_origin - computed: true, optional: false, required: false
  public get requestsToOrigin() {
    return this.getBooleanAttribute('requests_to_origin');
  }

  // score_per_period - computed: true, optional: false, required: false
  public get scorePerPeriod() {
    return this.getNumberAttribute('score_per_period');
  }

  // score_response_header_name - computed: true, optional: false, required: false
  public get scoreResponseHeaderName() {
    return this.getStringAttribute('score_response_header_name');
  }
}
export interface DataCloudflareRulesetRules {
}

export function dataCloudflareRulesetRulesToTerraform(struct?: DataCloudflareRulesetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetRulesToHclTerraform(struct?: DataCloudflareRulesetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // action_parameters - computed: true, optional: false, required: false
  private _actionParameters = new DataCloudflareRulesetRulesActionParametersOutputReference(this, "action_parameters");
  public get actionParameters() {
    return this._actionParameters;
  }

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exposed_credential_check - computed: true, optional: false, required: false
  private _exposedCredentialCheck = new DataCloudflareRulesetRulesExposedCredentialCheckOutputReference(this, "exposed_credential_check");
  public get exposedCredentialCheck() {
    return this._exposedCredentialCheck;
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging - computed: true, optional: false, required: false
  private _logging = new DataCloudflareRulesetRulesLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }

  // ratelimit - computed: true, optional: false, required: false
  private _ratelimit = new DataCloudflareRulesetRulesRatelimitOutputReference(this, "ratelimit");
  public get ratelimit() {
    return this._ratelimit;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }
}

export class DataCloudflareRulesetRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetRulesOutputReference {
    return new DataCloudflareRulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/ruleset cloudflare_ruleset}
*/
export class DataCloudflareRuleset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareRuleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareRuleset to import
  * @param importFromId The id of the existing DataCloudflareRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/ruleset cloudflare_ruleset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareRulesetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareRulesetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ruleset',
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
    this._accountId = config.accountId;
    this._rulesetId = config.rulesetId;
    this._zoneId = config.zoneId;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCloudflareRulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // ruleset_id - computed: false, optional: true, required: false
  private _rulesetId?: string; 
  public get rulesetId() {
    return this.getStringAttribute('ruleset_id');
  }
  public set rulesetId(value: string) {
    this._rulesetId = value;
  }
  public resetRulesetId() {
    this._rulesetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetIdInput() {
    return this._rulesetId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      ruleset_id: cdktf.stringToTerraform(this._rulesetId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      ruleset_id: {
        value: cdktf.stringToHclTerraform(this._rulesetId),
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
