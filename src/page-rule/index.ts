/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PageRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#id PageRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#priority PageRule#priority}
  */
  readonly priority?: number;
  /**
  * Defaults to `active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#status PageRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#target PageRule#target}
  */
  readonly target: string;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#zone_id PageRule#zone_id}
  */
  readonly zoneId: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#actions PageRule#actions}
  */
  readonly actions: PageRuleActions;
}
export interface PageRuleActionsCacheKeyFieldsCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#check_presence PageRule#check_presence}
  */
  readonly checkPresence?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#include PageRule#include}
  */
  readonly include?: string[];
}

export function pageRuleActionsCacheKeyFieldsCookieToTerraform(struct?: PageRuleActionsCacheKeyFieldsCookieOutputReference | PageRuleActionsCacheKeyFieldsCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkPresence),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}

export class PageRuleActionsCacheKeyFieldsCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsCookie | undefined {
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

  public set internalValue(value: PageRuleActionsCacheKeyFieldsCookie | undefined) {
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

  // check_presence - computed: true, optional: true, required: false
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

  // include - computed: true, optional: true, required: false
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
export interface PageRuleActionsCacheKeyFieldsHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#check_presence PageRule#check_presence}
  */
  readonly checkPresence?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#exclude PageRule#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#include PageRule#include}
  */
  readonly include?: string[];
}

export function pageRuleActionsCacheKeyFieldsHeaderToTerraform(struct?: PageRuleActionsCacheKeyFieldsHeaderOutputReference | PageRuleActionsCacheKeyFieldsHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkPresence),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}

export class PageRuleActionsCacheKeyFieldsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkPresence !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresence = this._checkPresence;
    }
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

  public set internalValue(value: PageRuleActionsCacheKeyFieldsHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkPresence = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkPresence = value.checkPresence;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // check_presence - computed: true, optional: true, required: false
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

  // exclude - computed: true, optional: true, required: false
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

  // include - computed: true, optional: true, required: false
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
export interface PageRuleActionsCacheKeyFieldsHost {
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#resolved PageRule#resolved}
  */
  readonly resolved?: boolean | cdktf.IResolvable;
}

export function pageRuleActionsCacheKeyFieldsHostToTerraform(struct?: PageRuleActionsCacheKeyFieldsHostOutputReference | PageRuleActionsCacheKeyFieldsHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolved: cdktf.booleanToTerraform(struct!.resolved),
  }
}

export class PageRuleActionsCacheKeyFieldsHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolved = this._resolved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PageRuleActionsCacheKeyFieldsHost | undefined) {
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
export interface PageRuleActionsCacheKeyFieldsQueryString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#exclude PageRule#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#ignore PageRule#ignore}
  */
  readonly ignore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#include PageRule#include}
  */
  readonly include?: string[];
}

export function pageRuleActionsCacheKeyFieldsQueryStringToTerraform(struct?: PageRuleActionsCacheKeyFieldsQueryStringOutputReference | PageRuleActionsCacheKeyFieldsQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    ignore: cdktf.booleanToTerraform(struct!.ignore),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}

export class PageRuleActionsCacheKeyFieldsQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PageRuleActionsCacheKeyFieldsQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._ignore = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._ignore = value.ignore;
      this._include = value.include;
    }
  }

  // exclude - computed: true, optional: true, required: false
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

  // ignore - computed: true, optional: true, required: false
  private _ignore?: boolean | cdktf.IResolvable; 
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }
  public set ignore(value: boolean | cdktf.IResolvable) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // include - computed: true, optional: true, required: false
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
export interface PageRuleActionsCacheKeyFieldsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#device_type PageRule#device_type}
  */
  readonly deviceType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#geo PageRule#geo}
  */
  readonly geo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#lang PageRule#lang}
  */
  readonly lang?: boolean | cdktf.IResolvable;
}

export function pageRuleActionsCacheKeyFieldsUserToTerraform(struct?: PageRuleActionsCacheKeyFieldsUserOutputReference | PageRuleActionsCacheKeyFieldsUser): any {
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

export class PageRuleActionsCacheKeyFieldsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsUser | undefined {
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

  public set internalValue(value: PageRuleActionsCacheKeyFieldsUser | undefined) {
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

  // device_type - computed: true, optional: true, required: false
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

  // geo - computed: true, optional: true, required: false
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

  // lang - computed: true, optional: true, required: false
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
export interface PageRuleActionsCacheKeyFields {
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#cookie PageRule#cookie}
  */
  readonly cookie?: PageRuleActionsCacheKeyFieldsCookie;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#header PageRule#header}
  */
  readonly header?: PageRuleActionsCacheKeyFieldsHeader;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#host PageRule#host}
  */
  readonly host: PageRuleActionsCacheKeyFieldsHost;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#query_string PageRule#query_string}
  */
  readonly queryString: PageRuleActionsCacheKeyFieldsQueryString;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#user PageRule#user}
  */
  readonly user: PageRuleActionsCacheKeyFieldsUser;
}

export function pageRuleActionsCacheKeyFieldsToTerraform(struct?: PageRuleActionsCacheKeyFieldsOutputReference | PageRuleActionsCacheKeyFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: pageRuleActionsCacheKeyFieldsCookieToTerraform(struct!.cookie),
    header: pageRuleActionsCacheKeyFieldsHeaderToTerraform(struct!.header),
    host: pageRuleActionsCacheKeyFieldsHostToTerraform(struct!.host),
    query_string: pageRuleActionsCacheKeyFieldsQueryStringToTerraform(struct!.queryString),
    user: pageRuleActionsCacheKeyFieldsUserToTerraform(struct!.user),
  }
}

export class PageRuleActionsCacheKeyFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PageRuleActionsCacheKeyFields | undefined {
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

  public set internalValue(value: PageRuleActionsCacheKeyFields | undefined) {
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
  private _cookie = new PageRuleActionsCacheKeyFieldsCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: PageRuleActionsCacheKeyFieldsCookie) {
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
  private _header = new PageRuleActionsCacheKeyFieldsHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: PageRuleActionsCacheKeyFieldsHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host = new PageRuleActionsCacheKeyFieldsHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: PageRuleActionsCacheKeyFieldsHost) {
    this._host.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString = new PageRuleActionsCacheKeyFieldsQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: PageRuleActionsCacheKeyFieldsQueryString) {
    this._queryString.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // user - computed: false, optional: false, required: true
  private _user = new PageRuleActionsCacheKeyFieldsUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: PageRuleActionsCacheKeyFieldsUser) {
    this._user.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface PageRuleActionsCacheTtlByStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#codes PageRule#codes}
  */
  readonly codes: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#ttl PageRule#ttl}
  */
  readonly ttl: number;
}

export function pageRuleActionsCacheTtlByStatusToTerraform(struct?: PageRuleActionsCacheTtlByStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codes: cdktf.stringToTerraform(struct!.codes),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class PageRuleActionsCacheTtlByStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PageRuleActionsCacheTtlByStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codes !== undefined) {
      hasAnyValues = true;
      internalValueResult.codes = this._codes;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PageRuleActionsCacheTtlByStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codes = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codes = value.codes;
      this._ttl = value.ttl;
    }
  }

  // codes - computed: false, optional: false, required: true
  private _codes?: string; 
  public get codes() {
    return this.getStringAttribute('codes');
  }
  public set codes(value: string) {
    this._codes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codesInput() {
    return this._codes;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class PageRuleActionsCacheTtlByStatusList extends cdktf.ComplexList {
  public internalValue? : PageRuleActionsCacheTtlByStatus[] | cdktf.IResolvable

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
  public get(index: number): PageRuleActionsCacheTtlByStatusOutputReference {
    return new PageRuleActionsCacheTtlByStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PageRuleActionsForwardingUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#status_code PageRule#status_code}
  */
  readonly statusCode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#url PageRule#url}
  */
  readonly url: string;
}

export function pageRuleActionsForwardingUrlToTerraform(struct?: PageRuleActionsForwardingUrlOutputReference | PageRuleActionsForwardingUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class PageRuleActionsForwardingUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PageRuleActionsForwardingUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PageRuleActionsForwardingUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statusCode = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statusCode = value.statusCode;
      this._url = value.url;
    }
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface PageRuleActionsMinify {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#css PageRule#css}
  */
  readonly css: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#html PageRule#html}
  */
  readonly html: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#js PageRule#js}
  */
  readonly js: string;
}

export function pageRuleActionsMinifyToTerraform(struct?: PageRuleActionsMinify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    css: cdktf.stringToTerraform(struct!.css),
    html: cdktf.stringToTerraform(struct!.html),
    js: cdktf.stringToTerraform(struct!.js),
  }
}

export class PageRuleActionsMinifyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PageRuleActionsMinify | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PageRuleActionsMinify | cdktf.IResolvable | undefined) {
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

  // css - computed: false, optional: false, required: true
  private _css?: string; 
  public get css() {
    return this.getStringAttribute('css');
  }
  public set css(value: string) {
    this._css = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cssInput() {
    return this._css;
  }

  // html - computed: false, optional: false, required: true
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }

  // js - computed: false, optional: false, required: true
  private _js?: string; 
  public get js() {
    return this.getStringAttribute('js');
  }
  public set js(value: string) {
    this._js = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInput() {
    return this._js;
  }
}

export class PageRuleActionsMinifyList extends cdktf.ComplexList {
  public internalValue? : PageRuleActionsMinify[] | cdktf.IResolvable

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
  public get(index: number): PageRuleActionsMinifyOutputReference {
    return new PageRuleActionsMinifyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PageRuleActions {
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#always_use_https PageRule#always_use_https}
  */
  readonly alwaysUseHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}
  */
  readonly automaticHttpsRewrites?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}
  */
  readonly browserCacheTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#browser_check PageRule#browser_check}
  */
  readonly browserCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}
  */
  readonly bypassCacheOnCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}
  */
  readonly cacheByDeviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}
  */
  readonly cacheDeceptionArmor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#cache_level PageRule#cache_level}
  */
  readonly cacheLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}
  */
  readonly cacheOnCookie?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#disable_apps PageRule#disable_apps}
  */
  readonly disableApps?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#disable_performance PageRule#disable_performance}
  */
  readonly disablePerformance?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#disable_railgun PageRule#disable_railgun}
  */
  readonly disableRailgun?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#disable_security PageRule#disable_security}
  */
  readonly disableSecurity?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#disable_zaraz PageRule#disable_zaraz}
  */
  readonly disableZaraz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}
  */
  readonly edgeCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}
  */
  readonly emailObfuscation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}
  */
  readonly explicitCacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#host_header_override PageRule#host_header_override}
  */
  readonly hostHeaderOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}
  */
  readonly ipGeolocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#mirage PageRule#mirage}
  */
  readonly mirage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}
  */
  readonly opportunisticEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}
  */
  readonly originErrorPagePassThru?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#polish PageRule#polish}
  */
  readonly polish?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#resolve_override PageRule#resolve_override}
  */
  readonly resolveOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}
  */
  readonly respectStrongEtag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#response_buffering PageRule#response_buffering}
  */
  readonly responseBuffering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}
  */
  readonly rocketLoader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#security_level PageRule#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#server_side_exclude PageRule#server_side_exclude}
  */
  readonly serverSideExclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}
  */
  readonly sortQueryStringForCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#ssl PageRule#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}
  */
  readonly trueClientIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#waf PageRule#waf}
  */
  readonly waf?: string;
  /**
  * cache_key_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#cache_key_fields PageRule#cache_key_fields}
  */
  readonly cacheKeyFields?: PageRuleActionsCacheKeyFields;
  /**
  * cache_ttl_by_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#cache_ttl_by_status PageRule#cache_ttl_by_status}
  */
  readonly cacheTtlByStatus?: PageRuleActionsCacheTtlByStatus[] | cdktf.IResolvable;
  /**
  * forwarding_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#forwarding_url PageRule#forwarding_url}
  */
  readonly forwardingUrl?: PageRuleActionsForwardingUrl;
  /**
  * minify block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#minify PageRule#minify}
  */
  readonly minify?: PageRuleActionsMinify[] | cdktf.IResolvable;
}

export function pageRuleActionsToTerraform(struct?: PageRuleActionsOutputReference | PageRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_use_https: cdktf.booleanToTerraform(struct!.alwaysUseHttps),
    automatic_https_rewrites: cdktf.stringToTerraform(struct!.automaticHttpsRewrites),
    browser_cache_ttl: cdktf.stringToTerraform(struct!.browserCacheTtl),
    browser_check: cdktf.stringToTerraform(struct!.browserCheck),
    bypass_cache_on_cookie: cdktf.stringToTerraform(struct!.bypassCacheOnCookie),
    cache_by_device_type: cdktf.stringToTerraform(struct!.cacheByDeviceType),
    cache_deception_armor: cdktf.stringToTerraform(struct!.cacheDeceptionArmor),
    cache_level: cdktf.stringToTerraform(struct!.cacheLevel),
    cache_on_cookie: cdktf.stringToTerraform(struct!.cacheOnCookie),
    disable_apps: cdktf.booleanToTerraform(struct!.disableApps),
    disable_performance: cdktf.booleanToTerraform(struct!.disablePerformance),
    disable_railgun: cdktf.booleanToTerraform(struct!.disableRailgun),
    disable_security: cdktf.booleanToTerraform(struct!.disableSecurity),
    disable_zaraz: cdktf.booleanToTerraform(struct!.disableZaraz),
    edge_cache_ttl: cdktf.numberToTerraform(struct!.edgeCacheTtl),
    email_obfuscation: cdktf.stringToTerraform(struct!.emailObfuscation),
    explicit_cache_control: cdktf.stringToTerraform(struct!.explicitCacheControl),
    host_header_override: cdktf.stringToTerraform(struct!.hostHeaderOverride),
    ip_geolocation: cdktf.stringToTerraform(struct!.ipGeolocation),
    mirage: cdktf.stringToTerraform(struct!.mirage),
    opportunistic_encryption: cdktf.stringToTerraform(struct!.opportunisticEncryption),
    origin_error_page_pass_thru: cdktf.stringToTerraform(struct!.originErrorPagePassThru),
    polish: cdktf.stringToTerraform(struct!.polish),
    resolve_override: cdktf.stringToTerraform(struct!.resolveOverride),
    respect_strong_etag: cdktf.stringToTerraform(struct!.respectStrongEtag),
    response_buffering: cdktf.stringToTerraform(struct!.responseBuffering),
    rocket_loader: cdktf.stringToTerraform(struct!.rocketLoader),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    server_side_exclude: cdktf.stringToTerraform(struct!.serverSideExclude),
    sort_query_string_for_cache: cdktf.stringToTerraform(struct!.sortQueryStringForCache),
    ssl: cdktf.stringToTerraform(struct!.ssl),
    true_client_ip_header: cdktf.stringToTerraform(struct!.trueClientIpHeader),
    waf: cdktf.stringToTerraform(struct!.waf),
    cache_key_fields: pageRuleActionsCacheKeyFieldsToTerraform(struct!.cacheKeyFields),
    cache_ttl_by_status: cdktf.listMapper(pageRuleActionsCacheTtlByStatusToTerraform, true)(struct!.cacheTtlByStatus),
    forwarding_url: pageRuleActionsForwardingUrlToTerraform(struct!.forwardingUrl),
    minify: cdktf.listMapper(pageRuleActionsMinifyToTerraform, true)(struct!.minify),
  }
}

export class PageRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PageRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysUseHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysUseHttps = this._alwaysUseHttps;
    }
    if (this._automaticHttpsRewrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticHttpsRewrites = this._automaticHttpsRewrites;
    }
    if (this._browserCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserCacheTtl = this._browserCacheTtl;
    }
    if (this._browserCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserCheck = this._browserCheck;
    }
    if (this._bypassCacheOnCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCacheOnCookie = this._bypassCacheOnCookie;
    }
    if (this._cacheByDeviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheByDeviceType = this._cacheByDeviceType;
    }
    if (this._cacheDeceptionArmor !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDeceptionArmor = this._cacheDeceptionArmor;
    }
    if (this._cacheLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheLevel = this._cacheLevel;
    }
    if (this._cacheOnCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOnCookie = this._cacheOnCookie;
    }
    if (this._disableApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApps = this._disableApps;
    }
    if (this._disablePerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePerformance = this._disablePerformance;
    }
    if (this._disableRailgun !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRailgun = this._disableRailgun;
    }
    if (this._disableSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSecurity = this._disableSecurity;
    }
    if (this._disableZaraz !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableZaraz = this._disableZaraz;
    }
    if (this._edgeCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeCacheTtl = this._edgeCacheTtl;
    }
    if (this._emailObfuscation !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailObfuscation = this._emailObfuscation;
    }
    if (this._explicitCacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitCacheControl = this._explicitCacheControl;
    }
    if (this._hostHeaderOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeaderOverride = this._hostHeaderOverride;
    }
    if (this._ipGeolocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGeolocation = this._ipGeolocation;
    }
    if (this._mirage !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirage = this._mirage;
    }
    if (this._opportunisticEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.opportunisticEncryption = this._opportunisticEncryption;
    }
    if (this._originErrorPagePassThru !== undefined) {
      hasAnyValues = true;
      internalValueResult.originErrorPagePassThru = this._originErrorPagePassThru;
    }
    if (this._polish !== undefined) {
      hasAnyValues = true;
      internalValueResult.polish = this._polish;
    }
    if (this._resolveOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveOverride = this._resolveOverride;
    }
    if (this._respectStrongEtag !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectStrongEtag = this._respectStrongEtag;
    }
    if (this._responseBuffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBuffering = this._responseBuffering;
    }
    if (this._rocketLoader !== undefined) {
      hasAnyValues = true;
      internalValueResult.rocketLoader = this._rocketLoader;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._serverSideExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideExclude = this._serverSideExclude;
    }
    if (this._sortQueryStringForCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQueryStringForCache = this._sortQueryStringForCache;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._trueClientIpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.trueClientIpHeader = this._trueClientIpHeader;
    }
    if (this._waf !== undefined) {
      hasAnyValues = true;
      internalValueResult.waf = this._waf;
    }
    if (this._cacheKeyFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyFields = this._cacheKeyFields?.internalValue;
    }
    if (this._cacheTtlByStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlByStatus = this._cacheTtlByStatus?.internalValue;
    }
    if (this._forwardingUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingUrl = this._forwardingUrl?.internalValue;
    }
    if (this._minify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minify = this._minify?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PageRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysUseHttps = undefined;
      this._automaticHttpsRewrites = undefined;
      this._browserCacheTtl = undefined;
      this._browserCheck = undefined;
      this._bypassCacheOnCookie = undefined;
      this._cacheByDeviceType = undefined;
      this._cacheDeceptionArmor = undefined;
      this._cacheLevel = undefined;
      this._cacheOnCookie = undefined;
      this._disableApps = undefined;
      this._disablePerformance = undefined;
      this._disableRailgun = undefined;
      this._disableSecurity = undefined;
      this._disableZaraz = undefined;
      this._edgeCacheTtl = undefined;
      this._emailObfuscation = undefined;
      this._explicitCacheControl = undefined;
      this._hostHeaderOverride = undefined;
      this._ipGeolocation = undefined;
      this._mirage = undefined;
      this._opportunisticEncryption = undefined;
      this._originErrorPagePassThru = undefined;
      this._polish = undefined;
      this._resolveOverride = undefined;
      this._respectStrongEtag = undefined;
      this._responseBuffering = undefined;
      this._rocketLoader = undefined;
      this._securityLevel = undefined;
      this._serverSideExclude = undefined;
      this._sortQueryStringForCache = undefined;
      this._ssl = undefined;
      this._trueClientIpHeader = undefined;
      this._waf = undefined;
      this._cacheKeyFields.internalValue = undefined;
      this._cacheTtlByStatus.internalValue = undefined;
      this._forwardingUrl.internalValue = undefined;
      this._minify.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysUseHttps = value.alwaysUseHttps;
      this._automaticHttpsRewrites = value.automaticHttpsRewrites;
      this._browserCacheTtl = value.browserCacheTtl;
      this._browserCheck = value.browserCheck;
      this._bypassCacheOnCookie = value.bypassCacheOnCookie;
      this._cacheByDeviceType = value.cacheByDeviceType;
      this._cacheDeceptionArmor = value.cacheDeceptionArmor;
      this._cacheLevel = value.cacheLevel;
      this._cacheOnCookie = value.cacheOnCookie;
      this._disableApps = value.disableApps;
      this._disablePerformance = value.disablePerformance;
      this._disableRailgun = value.disableRailgun;
      this._disableSecurity = value.disableSecurity;
      this._disableZaraz = value.disableZaraz;
      this._edgeCacheTtl = value.edgeCacheTtl;
      this._emailObfuscation = value.emailObfuscation;
      this._explicitCacheControl = value.explicitCacheControl;
      this._hostHeaderOverride = value.hostHeaderOverride;
      this._ipGeolocation = value.ipGeolocation;
      this._mirage = value.mirage;
      this._opportunisticEncryption = value.opportunisticEncryption;
      this._originErrorPagePassThru = value.originErrorPagePassThru;
      this._polish = value.polish;
      this._resolveOverride = value.resolveOverride;
      this._respectStrongEtag = value.respectStrongEtag;
      this._responseBuffering = value.responseBuffering;
      this._rocketLoader = value.rocketLoader;
      this._securityLevel = value.securityLevel;
      this._serverSideExclude = value.serverSideExclude;
      this._sortQueryStringForCache = value.sortQueryStringForCache;
      this._ssl = value.ssl;
      this._trueClientIpHeader = value.trueClientIpHeader;
      this._waf = value.waf;
      this._cacheKeyFields.internalValue = value.cacheKeyFields;
      this._cacheTtlByStatus.internalValue = value.cacheTtlByStatus;
      this._forwardingUrl.internalValue = value.forwardingUrl;
      this._minify.internalValue = value.minify;
    }
  }

  // always_use_https - computed: false, optional: true, required: false
  private _alwaysUseHttps?: boolean | cdktf.IResolvable; 
  public get alwaysUseHttps() {
    return this.getBooleanAttribute('always_use_https');
  }
  public set alwaysUseHttps(value: boolean | cdktf.IResolvable) {
    this._alwaysUseHttps = value;
  }
  public resetAlwaysUseHttps() {
    this._alwaysUseHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUseHttpsInput() {
    return this._alwaysUseHttps;
  }

  // automatic_https_rewrites - computed: false, optional: true, required: false
  private _automaticHttpsRewrites?: string; 
  public get automaticHttpsRewrites() {
    return this.getStringAttribute('automatic_https_rewrites');
  }
  public set automaticHttpsRewrites(value: string) {
    this._automaticHttpsRewrites = value;
  }
  public resetAutomaticHttpsRewrites() {
    this._automaticHttpsRewrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticHttpsRewritesInput() {
    return this._automaticHttpsRewrites;
  }

  // browser_cache_ttl - computed: false, optional: true, required: false
  private _browserCacheTtl?: string; 
  public get browserCacheTtl() {
    return this.getStringAttribute('browser_cache_ttl');
  }
  public set browserCacheTtl(value: string) {
    this._browserCacheTtl = value;
  }
  public resetBrowserCacheTtl() {
    this._browserCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCacheTtlInput() {
    return this._browserCacheTtl;
  }

  // browser_check - computed: false, optional: true, required: false
  private _browserCheck?: string; 
  public get browserCheck() {
    return this.getStringAttribute('browser_check');
  }
  public set browserCheck(value: string) {
    this._browserCheck = value;
  }
  public resetBrowserCheck() {
    this._browserCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCheckInput() {
    return this._browserCheck;
  }

  // bypass_cache_on_cookie - computed: false, optional: true, required: false
  private _bypassCacheOnCookie?: string; 
  public get bypassCacheOnCookie() {
    return this.getStringAttribute('bypass_cache_on_cookie');
  }
  public set bypassCacheOnCookie(value: string) {
    this._bypassCacheOnCookie = value;
  }
  public resetBypassCacheOnCookie() {
    this._bypassCacheOnCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCacheOnCookieInput() {
    return this._bypassCacheOnCookie;
  }

  // cache_by_device_type - computed: false, optional: true, required: false
  private _cacheByDeviceType?: string; 
  public get cacheByDeviceType() {
    return this.getStringAttribute('cache_by_device_type');
  }
  public set cacheByDeviceType(value: string) {
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
  private _cacheDeceptionArmor?: string; 
  public get cacheDeceptionArmor() {
    return this.getStringAttribute('cache_deception_armor');
  }
  public set cacheDeceptionArmor(value: string) {
    this._cacheDeceptionArmor = value;
  }
  public resetCacheDeceptionArmor() {
    this._cacheDeceptionArmor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDeceptionArmorInput() {
    return this._cacheDeceptionArmor;
  }

  // cache_level - computed: false, optional: true, required: false
  private _cacheLevel?: string; 
  public get cacheLevel() {
    return this.getStringAttribute('cache_level');
  }
  public set cacheLevel(value: string) {
    this._cacheLevel = value;
  }
  public resetCacheLevel() {
    this._cacheLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheLevelInput() {
    return this._cacheLevel;
  }

  // cache_on_cookie - computed: false, optional: true, required: false
  private _cacheOnCookie?: string; 
  public get cacheOnCookie() {
    return this.getStringAttribute('cache_on_cookie');
  }
  public set cacheOnCookie(value: string) {
    this._cacheOnCookie = value;
  }
  public resetCacheOnCookie() {
    this._cacheOnCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOnCookieInput() {
    return this._cacheOnCookie;
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

  // disable_performance - computed: false, optional: true, required: false
  private _disablePerformance?: boolean | cdktf.IResolvable; 
  public get disablePerformance() {
    return this.getBooleanAttribute('disable_performance');
  }
  public set disablePerformance(value: boolean | cdktf.IResolvable) {
    this._disablePerformance = value;
  }
  public resetDisablePerformance() {
    this._disablePerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePerformanceInput() {
    return this._disablePerformance;
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

  // disable_security - computed: false, optional: true, required: false
  private _disableSecurity?: boolean | cdktf.IResolvable; 
  public get disableSecurity() {
    return this.getBooleanAttribute('disable_security');
  }
  public set disableSecurity(value: boolean | cdktf.IResolvable) {
    this._disableSecurity = value;
  }
  public resetDisableSecurity() {
    this._disableSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecurityInput() {
    return this._disableSecurity;
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

  // edge_cache_ttl - computed: false, optional: true, required: false
  private _edgeCacheTtl?: number; 
  public get edgeCacheTtl() {
    return this.getNumberAttribute('edge_cache_ttl');
  }
  public set edgeCacheTtl(value: number) {
    this._edgeCacheTtl = value;
  }
  public resetEdgeCacheTtl() {
    this._edgeCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCacheTtlInput() {
    return this._edgeCacheTtl;
  }

  // email_obfuscation - computed: false, optional: true, required: false
  private _emailObfuscation?: string; 
  public get emailObfuscation() {
    return this.getStringAttribute('email_obfuscation');
  }
  public set emailObfuscation(value: string) {
    this._emailObfuscation = value;
  }
  public resetEmailObfuscation() {
    this._emailObfuscation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailObfuscationInput() {
    return this._emailObfuscation;
  }

  // explicit_cache_control - computed: false, optional: true, required: false
  private _explicitCacheControl?: string; 
  public get explicitCacheControl() {
    return this.getStringAttribute('explicit_cache_control');
  }
  public set explicitCacheControl(value: string) {
    this._explicitCacheControl = value;
  }
  public resetExplicitCacheControl() {
    this._explicitCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitCacheControlInput() {
    return this._explicitCacheControl;
  }

  // host_header_override - computed: false, optional: true, required: false
  private _hostHeaderOverride?: string; 
  public get hostHeaderOverride() {
    return this.getStringAttribute('host_header_override');
  }
  public set hostHeaderOverride(value: string) {
    this._hostHeaderOverride = value;
  }
  public resetHostHeaderOverride() {
    this._hostHeaderOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderOverrideInput() {
    return this._hostHeaderOverride;
  }

  // ip_geolocation - computed: false, optional: true, required: false
  private _ipGeolocation?: string; 
  public get ipGeolocation() {
    return this.getStringAttribute('ip_geolocation');
  }
  public set ipGeolocation(value: string) {
    this._ipGeolocation = value;
  }
  public resetIpGeolocation() {
    this._ipGeolocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGeolocationInput() {
    return this._ipGeolocation;
  }

  // mirage - computed: false, optional: true, required: false
  private _mirage?: string; 
  public get mirage() {
    return this.getStringAttribute('mirage');
  }
  public set mirage(value: string) {
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
  private _opportunisticEncryption?: string; 
  public get opportunisticEncryption() {
    return this.getStringAttribute('opportunistic_encryption');
  }
  public set opportunisticEncryption(value: string) {
    this._opportunisticEncryption = value;
  }
  public resetOpportunisticEncryption() {
    this._opportunisticEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opportunisticEncryptionInput() {
    return this._opportunisticEncryption;
  }

  // origin_error_page_pass_thru - computed: false, optional: true, required: false
  private _originErrorPagePassThru?: string; 
  public get originErrorPagePassThru() {
    return this.getStringAttribute('origin_error_page_pass_thru');
  }
  public set originErrorPagePassThru(value: string) {
    this._originErrorPagePassThru = value;
  }
  public resetOriginErrorPagePassThru() {
    this._originErrorPagePassThru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originErrorPagePassThruInput() {
    return this._originErrorPagePassThru;
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

  // resolve_override - computed: false, optional: true, required: false
  private _resolveOverride?: string; 
  public get resolveOverride() {
    return this.getStringAttribute('resolve_override');
  }
  public set resolveOverride(value: string) {
    this._resolveOverride = value;
  }
  public resetResolveOverride() {
    this._resolveOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveOverrideInput() {
    return this._resolveOverride;
  }

  // respect_strong_etag - computed: false, optional: true, required: false
  private _respectStrongEtag?: string; 
  public get respectStrongEtag() {
    return this.getStringAttribute('respect_strong_etag');
  }
  public set respectStrongEtag(value: string) {
    this._respectStrongEtag = value;
  }
  public resetRespectStrongEtag() {
    this._respectStrongEtag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectStrongEtagInput() {
    return this._respectStrongEtag;
  }

  // response_buffering - computed: false, optional: true, required: false
  private _responseBuffering?: string; 
  public get responseBuffering() {
    return this.getStringAttribute('response_buffering');
  }
  public set responseBuffering(value: string) {
    this._responseBuffering = value;
  }
  public resetResponseBuffering() {
    this._responseBuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBufferingInput() {
    return this._responseBuffering;
  }

  // rocket_loader - computed: false, optional: true, required: false
  private _rocketLoader?: string; 
  public get rocketLoader() {
    return this.getStringAttribute('rocket_loader');
  }
  public set rocketLoader(value: string) {
    this._rocketLoader = value;
  }
  public resetRocketLoader() {
    this._rocketLoader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rocketLoaderInput() {
    return this._rocketLoader;
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

  // server_side_exclude - computed: false, optional: true, required: false
  private _serverSideExclude?: string; 
  public get serverSideExclude() {
    return this.getStringAttribute('server_side_exclude');
  }
  public set serverSideExclude(value: string) {
    this._serverSideExclude = value;
  }
  public resetServerSideExclude() {
    this._serverSideExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideExcludeInput() {
    return this._serverSideExclude;
  }

  // sort_query_string_for_cache - computed: false, optional: true, required: false
  private _sortQueryStringForCache?: string; 
  public get sortQueryStringForCache() {
    return this.getStringAttribute('sort_query_string_for_cache');
  }
  public set sortQueryStringForCache(value: string) {
    this._sortQueryStringForCache = value;
  }
  public resetSortQueryStringForCache() {
    this._sortQueryStringForCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryStringForCacheInput() {
    return this._sortQueryStringForCache;
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

  // true_client_ip_header - computed: false, optional: true, required: false
  private _trueClientIpHeader?: string; 
  public get trueClientIpHeader() {
    return this.getStringAttribute('true_client_ip_header');
  }
  public set trueClientIpHeader(value: string) {
    this._trueClientIpHeader = value;
  }
  public resetTrueClientIpHeader() {
    this._trueClientIpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trueClientIpHeaderInput() {
    return this._trueClientIpHeader;
  }

  // waf - computed: false, optional: true, required: false
  private _waf?: string; 
  public get waf() {
    return this.getStringAttribute('waf');
  }
  public set waf(value: string) {
    this._waf = value;
  }
  public resetWaf() {
    this._waf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf;
  }

  // cache_key_fields - computed: false, optional: true, required: false
  private _cacheKeyFields = new PageRuleActionsCacheKeyFieldsOutputReference(this, "cache_key_fields");
  public get cacheKeyFields() {
    return this._cacheKeyFields;
  }
  public putCacheKeyFields(value: PageRuleActionsCacheKeyFields) {
    this._cacheKeyFields.internalValue = value;
  }
  public resetCacheKeyFields() {
    this._cacheKeyFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyFieldsInput() {
    return this._cacheKeyFields.internalValue;
  }

  // cache_ttl_by_status - computed: false, optional: true, required: false
  private _cacheTtlByStatus = new PageRuleActionsCacheTtlByStatusList(this, "cache_ttl_by_status", true);
  public get cacheTtlByStatus() {
    return this._cacheTtlByStatus;
  }
  public putCacheTtlByStatus(value: PageRuleActionsCacheTtlByStatus[] | cdktf.IResolvable) {
    this._cacheTtlByStatus.internalValue = value;
  }
  public resetCacheTtlByStatus() {
    this._cacheTtlByStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlByStatusInput() {
    return this._cacheTtlByStatus.internalValue;
  }

  // forwarding_url - computed: false, optional: true, required: false
  private _forwardingUrl = new PageRuleActionsForwardingUrlOutputReference(this, "forwarding_url");
  public get forwardingUrl() {
    return this._forwardingUrl;
  }
  public putForwardingUrl(value: PageRuleActionsForwardingUrl) {
    this._forwardingUrl.internalValue = value;
  }
  public resetForwardingUrl() {
    this._forwardingUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingUrlInput() {
    return this._forwardingUrl.internalValue;
  }

  // minify - computed: false, optional: true, required: false
  private _minify = new PageRuleActionsMinifyList(this, "minify", false);
  public get minify() {
    return this._minify;
  }
  public putMinify(value: PageRuleActionsMinify[] | cdktf.IResolvable) {
    this._minify.internalValue = value;
  }
  public resetMinify() {
    this._minify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minifyInput() {
    return this._minify.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule cloudflare_page_rule}
*/
export class PageRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_page_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PageRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PageRule to import
  * @param importFromId The id of the existing PageRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PageRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/page_rule cloudflare_page_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PageRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PageRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_page_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.18.0',
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
    this._id = config.id;
    this._priority = config.priority;
    this._status = config.status;
    this._target = config.target;
    this._zoneId = config.zoneId;
    this._actions.internalValue = config.actions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // priority - computed: false, optional: true, required: false
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

  // actions - computed: false, optional: false, required: true
  private _actions = new PageRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: PageRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      target: cdktf.stringToTerraform(this._target),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      actions: pageRuleActionsToTerraform(this._actions.internalValue),
    };
  }
}
