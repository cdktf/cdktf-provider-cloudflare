/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareRulesetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Must provide only one of `zone_id`, `account_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#account_id DataCloudflareRulesets#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include rule data in response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#include_rules DataCloudflareRulesets#include_rules}
  */
  readonly includeRules?: boolean | cdktf.IResolvable;
  /**
  * The zone identifier to target for the resource. Must provide only one of `zone_id`, `account_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#zone_id DataCloudflareRulesets#zone_id}
  */
  readonly zoneId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#filter DataCloudflareRulesets#filter}
  */
  readonly filter?: DataCloudflareRulesetsFilter;
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersAutominify {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersAutominifyToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersAutominify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersAutominifyToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersAutominify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersAutominify | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersAutominify | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader | undefined) {
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

  // exclude_origin - computed: true, optional: false, required: false
  public get excludeOrigin() {
    return this.getBooleanAttribute('exclude_origin');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getListAttribute('include');
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getListAttribute('exclude');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getListAttribute('include');
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  private _cookie = new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList(this, "cookie", false);
  public get cookie() {
    return this._cookie;
  }

  // header - computed: true, optional: false, required: false
  private _header = new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList(this, "host", false);
  public get host() {
    return this._host;
  }

  // query_string - computed: true, optional: false, required: false
  private _queryString = new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList(this, "user", false);
  public get user() {
    return this._user;
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey | undefined) {
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
  private _customKey = new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList(this, "custom_key", false);
  public get customKey() {
    return this._customKey;
  }

  // ignore_query_strings_order - computed: true, optional: false, required: false
  public get ignoreQueryStringsOrder() {
    return this.getBooleanAttribute('ignore_query_strings_order');
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // status_code_range - computed: true, optional: false, required: false
  private _statusCodeRange = new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList(this, "status_code_range", false);
  public get statusCodeRange() {
    return this._statusCodeRange;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl | undefined) {
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
  private _statusCodeTtl = new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList(this, "status_code_ttl", false);
  public get statusCodeTtl() {
    return this._statusCodeTtl;
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersFromListStructToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersFromListStructToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersFromValue {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersFromValueToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersFromValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersFromValueToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersFromValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersFromValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersFromValue | undefined) {
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
  private _targetUrl = new DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList(this, "target_url", false);
  public get targetUrl() {
    return this._targetUrl;
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersHeaders {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersHeadersToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersHeadersToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersHeaders | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersOrigin {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersOriginToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersOriginToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersOrigin | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersOriginList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories | undefined) {
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules | undefined) {
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersOverrides {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersOverridesToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersOverridesToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersOverrides | undefined) {
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
  private _categories = new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // sensitivity_level - computed: true, optional: false, required: false
  public get sensitivityLevel() {
    return this.getStringAttribute('sensitivity_level');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersResponse {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersResponseToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersResponseToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersResponse | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersServeStale {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersServeStaleToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersServeStale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersServeStaleToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersServeStale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersServeStale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersServeStale | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersSni {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersSniToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersSniToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersSni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersSni | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersSniList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersUriPath {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersUriPathToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersUriPathToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersUriPath | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersUriQueryToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersUriQueryToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParametersUri {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersUriToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersUriToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParametersUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParametersUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParametersUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getBooleanAttribute('origin');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersUriList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesActionParameters {
}

export function dataCloudflareRulesetsRulesetsRulesActionParametersToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesActionParametersToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_cacheable_ports - computed: true, optional: false, required: false
  public get additionalCacheablePorts() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('additional_cacheable_ports')));
  }

  // automatic_https_rewrites - computed: true, optional: false, required: false
  public get automaticHttpsRewrites() {
    return this.getBooleanAttribute('automatic_https_rewrites');
  }

  // autominify - computed: true, optional: false, required: false
  private _autominify = new DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList(this, "autominify", false);
  public get autominify() {
    return this._autominify;
  }

  // bic - computed: true, optional: false, required: false
  public get bic() {
    return this.getBooleanAttribute('bic');
  }

  // browser_ttl - computed: true, optional: false, required: false
  private _browserTtl = new DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList(this, "browser_ttl", false);
  public get browserTtl() {
    return this._browserTtl;
  }

  // cache - computed: true, optional: false, required: false
  public get cache() {
    return this.getBooleanAttribute('cache');
  }

  // cache_key - computed: true, optional: false, required: false
  private _cacheKey = new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList(this, "cache_key", false);
  public get cacheKey() {
    return this._cacheKey;
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
  public get cookieFields() {
    return cdktf.Fn.tolist(this.getListAttribute('cookie_fields'));
  }

  // disable_apps - computed: true, optional: false, required: false
  public get disableApps() {
    return this.getBooleanAttribute('disable_apps');
  }

  // disable_railgun - computed: true, optional: false, required: false
  public get disableRailgun() {
    return this.getBooleanAttribute('disable_railgun');
  }

  // disable_zaraz - computed: true, optional: false, required: false
  public get disableZaraz() {
    return this.getBooleanAttribute('disable_zaraz');
  }

  // edge_ttl - computed: true, optional: false, required: false
  private _edgeTtl = new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList(this, "edge_ttl", false);
  public get edgeTtl() {
    return this._edgeTtl;
  }

  // email_obfuscation - computed: true, optional: false, required: false
  public get emailObfuscation() {
    return this.getBooleanAttribute('email_obfuscation');
  }

  // from_list - computed: true, optional: false, required: false
  private _fromList = new DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList(this, "from_list", false);
  public get fromList() {
    return this._fromList;
  }

  // from_value - computed: true, optional: false, required: false
  private _fromValue = new DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList(this, "from_value", false);
  public get fromValue() {
    return this._fromValue;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList(this, "headers", false);
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
  private _matchedData = new DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList(this, "matched_data", false);
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
  private _origin = new DataCloudflareRulesetsRulesetsRulesActionParametersOriginList(this, "origin", false);
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
  private _overrides = new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // phases - computed: true, optional: false, required: false
  public get phases() {
    return cdktf.Fn.tolist(this.getListAttribute('phases'));
  }

  // polish - computed: true, optional: false, required: false
  public get polish() {
    return this.getStringAttribute('polish');
  }

  // products - computed: true, optional: false, required: false
  public get products() {
    return cdktf.Fn.tolist(this.getListAttribute('products'));
  }

  // read_timeout - computed: true, optional: false, required: false
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }

  // request_fields - computed: true, optional: false, required: false
  public get requestFields() {
    return cdktf.Fn.tolist(this.getListAttribute('request_fields'));
  }

  // respect_strong_etags - computed: true, optional: false, required: false
  public get respectStrongEtags() {
    return this.getBooleanAttribute('respect_strong_etags');
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataCloudflareRulesetsRulesetsRulesActionParametersResponseList(this, "response", false);
  public get response() {
    return this._response;
  }

  // response_fields - computed: true, optional: false, required: false
  public get responseFields() {
    return cdktf.Fn.tolist(this.getListAttribute('response_fields'));
  }

  // rocket_loader - computed: true, optional: false, required: false
  public get rocketLoader() {
    return this.getBooleanAttribute('rocket_loader');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new cdktf.StringMap(this, "rules");
  public get rules() {
    return this._rules;
  }

  // ruleset - computed: true, optional: false, required: false
  public get ruleset() {
    return this.getStringAttribute('ruleset');
  }

  // rulesets - computed: true, optional: false, required: false
  public get rulesets() {
    return cdktf.Fn.tolist(this.getListAttribute('rulesets'));
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // serve_stale - computed: true, optional: false, required: false
  private _serveStale = new DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList(this, "serve_stale", false);
  public get serveStale() {
    return this._serveStale;
  }

  // server_side_excludes - computed: true, optional: false, required: false
  public get serverSideExcludes() {
    return this.getBooleanAttribute('server_side_excludes');
  }

  // sni - computed: true, optional: false, required: false
  private _sni = new DataCloudflareRulesetsRulesetsRulesActionParametersSniList(this, "sni", false);
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

  // uri - computed: true, optional: false, required: false
  private _uri = new DataCloudflareRulesetsRulesetsRulesActionParametersUriList(this, "uri", false);
  public get uri() {
    return this._uri;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataCloudflareRulesetsRulesetsRulesActionParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck {
}

export function dataCloudflareRulesetsRulesetsRulesExposedCredentialCheckToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesExposedCredentialCheckToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck | undefined) {
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

export class DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesLogging {
}

export function dataCloudflareRulesetsRulesetsRulesLoggingToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesLoggingToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesLogging | undefined) {
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCloudflareRulesetsRulesetsRulesLoggingList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesLoggingOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRulesRatelimit {
}

export function dataCloudflareRulesetsRulesetsRulesRatelimitToTerraform(struct?: DataCloudflareRulesetsRulesetsRulesRatelimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesRatelimitToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRulesRatelimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRulesRatelimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRulesRatelimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // characteristics - computed: true, optional: false, required: false
  public get characteristics() {
    return cdktf.Fn.tolist(this.getListAttribute('characteristics'));
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

export class DataCloudflareRulesetsRulesetsRulesRatelimitList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesetsRules {
}

export function dataCloudflareRulesetsRulesetsRulesToTerraform(struct?: DataCloudflareRulesetsRulesetsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsRulesToHclTerraform(struct?: DataCloudflareRulesetsRulesetsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesetsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesetsRules | undefined) {
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
  private _actionParameters = new DataCloudflareRulesetsRulesetsRulesActionParametersList(this, "action_parameters", false);
  public get actionParameters() {
    return this._actionParameters;
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
  private _exposedCredentialCheck = new DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList(this, "exposed_credential_check", false);
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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // logging - computed: true, optional: false, required: false
  private _logging = new DataCloudflareRulesetsRulesetsRulesLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }

  // ratelimit - computed: true, optional: false, required: false
  private _ratelimit = new DataCloudflareRulesetsRulesetsRulesRatelimitList(this, "ratelimit", false);
  public get ratelimit() {
    return this._ratelimit;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataCloudflareRulesetsRulesetsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsRulesOutputReference {
    return new DataCloudflareRulesetsRulesetsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsRulesets {
}

export function dataCloudflareRulesetsRulesetsToTerraform(struct?: DataCloudflareRulesetsRulesets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareRulesetsRulesetsToHclTerraform(struct?: DataCloudflareRulesetsRulesets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareRulesetsRulesetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareRulesetsRulesets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsRulesets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
  private _rules = new DataCloudflareRulesetsRulesetsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataCloudflareRulesetsRulesetsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareRulesetsRulesetsOutputReference {
    return new DataCloudflareRulesetsRulesetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareRulesetsFilter {
  /**
  * The ID of the Ruleset to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `zone`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#kind DataCloudflareRulesets#kind}
  */
  readonly kind?: string;
  /**
  * Name of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#name DataCloudflareRulesets#name}
  */
  readonly name?: string;
  /**
  * Point in the request/response lifecycle where the ruleset will be created. Available values: `ddos_l4`, `ddos_l7`, `http_config_settings`, `http_custom_errors`, `http_log_custom_fields`, `http_ratelimit`, `http_request_cache_settings`, `http_request_dynamic_redirect`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_origin`, `http_request_redirect`, `http_request_sanitize`, `http_request_sbfm`, `http_request_transform`, `http_response_compression`, `http_response_firewall_managed`, `http_response_headers_transform`, `magic_transit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#phase DataCloudflareRulesets#phase}
  */
  readonly phase?: string;
  /**
  * Version of the ruleset to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#version DataCloudflareRulesets#version}
  */
  readonly version?: string;
}

export function dataCloudflareRulesetsFilterToTerraform(struct?: DataCloudflareRulesetsFilterOutputReference | DataCloudflareRulesetsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    phase: cdktf.stringToTerraform(struct!.phase),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataCloudflareRulesetsFilterToHclTerraform(struct?: DataCloudflareRulesetsFilterOutputReference | DataCloudflareRulesetsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareRulesetsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCloudflareRulesetsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareRulesetsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._phase = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._kind = value.kind;
      this._name = value.name;
      this._phase = value.phase;
      this._version = value.version;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // version - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets cloudflare_rulesets}
*/
export class DataCloudflareRulesets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_rulesets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareRulesets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareRulesets to import
  * @param importFromId The id of the existing DataCloudflareRulesets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareRulesets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_rulesets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/data-sources/rulesets cloudflare_rulesets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareRulesetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareRulesetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_rulesets',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.27.0',
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
    this._id = config.id;
    this._includeRules = config.includeRules;
    this._zoneId = config.zoneId;
    this._filter.internalValue = config.filter;
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

  // include_rules - computed: false, optional: true, required: false
  private _includeRules?: boolean | cdktf.IResolvable; 
  public get includeRules() {
    return this.getBooleanAttribute('include_rules');
  }
  public set includeRules(value: boolean | cdktf.IResolvable) {
    this._includeRules = value;
  }
  public resetIncludeRules() {
    this._includeRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRulesInput() {
    return this._includeRules;
  }

  // rulesets - computed: true, optional: false, required: false
  private _rulesets = new DataCloudflareRulesetsRulesetsList(this, "rulesets", false);
  public get rulesets() {
    return this._rulesets;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareRulesetsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareRulesetsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      include_rules: cdktf.booleanToTerraform(this._includeRules),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      filter: dataCloudflareRulesetsFilterToTerraform(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_rules: {
        value: cdktf.booleanToHclTerraform(this._includeRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataCloudflareRulesetsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCloudflareRulesetsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
