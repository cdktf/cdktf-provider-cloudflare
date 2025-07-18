/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PageRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#actions PageRule#actions}
  */
  readonly actions: PageRuleActions;
  /**
  * The priority of the rule, used to define which Page Rule is processed
  * over another. A higher number indicates a higher priority. For example,
  * if you have a catch-all Page Rule (rule A: `/images/*`) but want a more
  * specific Page Rule to take precedence (rule B: `/images/special/*`),
  * specify a higher priority for rule B so it overrides rule A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#priority PageRule#priority}
  */
  readonly priority?: number;
  /**
  * The status of the Page Rule.
  * Available values: "active", "disabled".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#status PageRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#target PageRule#target}
  */
  readonly target: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#zone_id PageRule#zone_id}
  */
  readonly zoneId: string;
}
export interface PageRuleActionsCacheKeyFieldsCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#check_presence PageRule#check_presence}
  */
  readonly checkPresence?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#include PageRule#include}
  */
  readonly include?: string[];
}

export function pageRuleActionsCacheKeyFieldsCookieToTerraform(struct?: PageRuleActionsCacheKeyFieldsCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkPresence),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function pageRuleActionsCacheKeyFieldsCookieToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_presence: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.checkPresence),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PageRuleActionsCacheKeyFieldsCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsCookie | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PageRuleActionsCacheKeyFieldsCookie | cdktf.IResolvable | undefined) {
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

  // check_presence - computed: true, optional: true, required: false
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

  // include - computed: true, optional: true, required: false
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
export interface PageRuleActionsCacheKeyFieldsHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#check_presence PageRule#check_presence}
  */
  readonly checkPresence?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#exclude PageRule#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#include PageRule#include}
  */
  readonly include?: string[];
}

export function pageRuleActionsCacheKeyFieldsHeaderToTerraform(struct?: PageRuleActionsCacheKeyFieldsHeader | cdktf.IResolvable): any {
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


export function pageRuleActionsCacheKeyFieldsHeaderToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_presence: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.checkPresence),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PageRuleActionsCacheKeyFieldsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: PageRuleActionsCacheKeyFieldsHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkPresence = undefined;
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
      this._checkPresence = value.checkPresence;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // check_presence - computed: true, optional: true, required: false
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

  // exclude - computed: true, optional: true, required: false
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

  // include - computed: true, optional: true, required: false
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
export interface PageRuleActionsCacheKeyFieldsHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#resolved PageRule#resolved}
  */
  readonly resolved?: boolean | cdktf.IResolvable;
}

export function pageRuleActionsCacheKeyFieldsHostToTerraform(struct?: PageRuleActionsCacheKeyFieldsHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolved: cdktf.booleanToTerraform(struct!.resolved),
  }
}


export function pageRuleActionsCacheKeyFieldsHostToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsHost | cdktf.IResolvable): any {
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

export class PageRuleActionsCacheKeyFieldsHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsHost | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PageRuleActionsCacheKeyFieldsHost | cdktf.IResolvable | undefined) {
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

  // resolved - computed: true, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#exclude PageRule#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#include PageRule#include}
  */
  readonly include?: string[];
}

export function pageRuleActionsCacheKeyFieldsQueryStringToTerraform(struct?: PageRuleActionsCacheKeyFieldsQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function pageRuleActionsCacheKeyFieldsQueryStringToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PageRuleActionsCacheKeyFieldsQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsQueryString | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PageRuleActionsCacheKeyFieldsQueryString | cdktf.IResolvable | undefined) {
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

  // exclude - computed: true, optional: true, required: false
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

  // include - computed: true, optional: true, required: false
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
export interface PageRuleActionsCacheKeyFieldsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#device_type PageRule#device_type}
  */
  readonly deviceType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#geo PageRule#geo}
  */
  readonly geo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#lang PageRule#lang}
  */
  readonly lang?: boolean | cdktf.IResolvable;
}

export function pageRuleActionsCacheKeyFieldsUserToTerraform(struct?: PageRuleActionsCacheKeyFieldsUser | cdktf.IResolvable): any {
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


export function pageRuleActionsCacheKeyFieldsUserToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsUser | cdktf.IResolvable): any {
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

export class PageRuleActionsCacheKeyFieldsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PageRuleActionsCacheKeyFieldsUser | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PageRuleActionsCacheKeyFieldsUser | cdktf.IResolvable | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#cookie PageRule#cookie}
  */
  readonly cookie?: PageRuleActionsCacheKeyFieldsCookie;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#header PageRule#header}
  */
  readonly header?: PageRuleActionsCacheKeyFieldsHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#host PageRule#host}
  */
  readonly host?: PageRuleActionsCacheKeyFieldsHost;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#query_string PageRule#query_string}
  */
  readonly queryString?: PageRuleActionsCacheKeyFieldsQueryString;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#user PageRule#user}
  */
  readonly user?: PageRuleActionsCacheKeyFieldsUser;
}

export function pageRuleActionsCacheKeyFieldsToTerraform(struct?: PageRuleActionsCacheKeyFields | cdktf.IResolvable): any {
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


export function pageRuleActionsCacheKeyFieldsToHclTerraform(struct?: PageRuleActionsCacheKeyFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: pageRuleActionsCacheKeyFieldsCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "PageRuleActionsCacheKeyFieldsCookie",
    },
    header: {
      value: pageRuleActionsCacheKeyFieldsHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "PageRuleActionsCacheKeyFieldsHeader",
    },
    host: {
      value: pageRuleActionsCacheKeyFieldsHostToHclTerraform(struct!.host),
      isBlock: true,
      type: "struct",
      storageClassType: "PageRuleActionsCacheKeyFieldsHost",
    },
    query_string: {
      value: pageRuleActionsCacheKeyFieldsQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "struct",
      storageClassType: "PageRuleActionsCacheKeyFieldsQueryString",
    },
    user: {
      value: pageRuleActionsCacheKeyFieldsUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "PageRuleActionsCacheKeyFieldsUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PageRuleActionsCacheKeyFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PageRuleActionsCacheKeyFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PageRuleActionsCacheKeyFields | cdktf.IResolvable | undefined) {
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

  // host - computed: true, optional: true, required: false
  private _host = new PageRuleActionsCacheKeyFieldsHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: PageRuleActionsCacheKeyFieldsHost) {
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
  private _queryString = new PageRuleActionsCacheKeyFieldsQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: PageRuleActionsCacheKeyFieldsQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new PageRuleActionsCacheKeyFieldsUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: PageRuleActionsCacheKeyFieldsUser) {
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
export interface PageRuleActionsForwardingUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#status_code PageRule#status_code}
  */
  readonly statusCode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#url PageRule#url}
  */
  readonly url: string;
}

export function pageRuleActionsForwardingUrlToTerraform(struct?: PageRuleActionsForwardingUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function pageRuleActionsForwardingUrlToHclTerraform(struct?: PageRuleActionsForwardingUrl | cdktf.IResolvable): any {
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PageRuleActionsForwardingUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PageRuleActionsForwardingUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: PageRuleActionsForwardingUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface PageRuleActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#always_use_https PageRule#always_use_https}
  */
  readonly alwaysUseHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}
  */
  readonly automaticHttpsRewrites?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}
  */
  readonly browserCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#browser_check PageRule#browser_check}
  */
  readonly browserCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}
  */
  readonly bypassCacheOnCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}
  */
  readonly cacheByDeviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}
  */
  readonly cacheDeceptionArmor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#cache_key_fields PageRule#cache_key_fields}
  */
  readonly cacheKeyFields?: PageRuleActionsCacheKeyFields;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#cache_level PageRule#cache_level}
  */
  readonly cacheLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}
  */
  readonly cacheOnCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#cache_ttl_by_status PageRule#cache_ttl_by_status}
  */
  readonly cacheTtlByStatus?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#disable_apps PageRule#disable_apps}
  */
  readonly disableApps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#disable_performance PageRule#disable_performance}
  */
  readonly disablePerformance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#disable_security PageRule#disable_security}
  */
  readonly disableSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#disable_zaraz PageRule#disable_zaraz}
  */
  readonly disableZaraz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}
  */
  readonly edgeCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}
  */
  readonly emailObfuscation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}
  */
  readonly explicitCacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#forwarding_url PageRule#forwarding_url}
  */
  readonly forwardingUrl?: PageRuleActionsForwardingUrl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#host_header_override PageRule#host_header_override}
  */
  readonly hostHeaderOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}
  */
  readonly ipGeolocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#mirage PageRule#mirage}
  */
  readonly mirage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}
  */
  readonly opportunisticEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}
  */
  readonly originErrorPagePassThru?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#polish PageRule#polish}
  */
  readonly polish?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#resolve_override PageRule#resolve_override}
  */
  readonly resolveOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}
  */
  readonly respectStrongEtag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#response_buffering PageRule#response_buffering}
  */
  readonly responseBuffering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}
  */
  readonly rocketLoader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#security_level PageRule#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}
  */
  readonly sortQueryStringForCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#ssl PageRule#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}
  */
  readonly trueClientIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#waf PageRule#waf}
  */
  readonly waf?: string;
}

export function pageRuleActionsToTerraform(struct?: PageRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_use_https: cdktf.booleanToTerraform(struct!.alwaysUseHttps),
    automatic_https_rewrites: cdktf.stringToTerraform(struct!.automaticHttpsRewrites),
    browser_cache_ttl: cdktf.numberToTerraform(struct!.browserCacheTtl),
    browser_check: cdktf.stringToTerraform(struct!.browserCheck),
    bypass_cache_on_cookie: cdktf.stringToTerraform(struct!.bypassCacheOnCookie),
    cache_by_device_type: cdktf.stringToTerraform(struct!.cacheByDeviceType),
    cache_deception_armor: cdktf.stringToTerraform(struct!.cacheDeceptionArmor),
    cache_key_fields: pageRuleActionsCacheKeyFieldsToTerraform(struct!.cacheKeyFields),
    cache_level: cdktf.stringToTerraform(struct!.cacheLevel),
    cache_on_cookie: cdktf.stringToTerraform(struct!.cacheOnCookie),
    cache_ttl_by_status: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cacheTtlByStatus),
    disable_apps: cdktf.booleanToTerraform(struct!.disableApps),
    disable_performance: cdktf.booleanToTerraform(struct!.disablePerformance),
    disable_security: cdktf.booleanToTerraform(struct!.disableSecurity),
    disable_zaraz: cdktf.booleanToTerraform(struct!.disableZaraz),
    edge_cache_ttl: cdktf.numberToTerraform(struct!.edgeCacheTtl),
    email_obfuscation: cdktf.stringToTerraform(struct!.emailObfuscation),
    explicit_cache_control: cdktf.stringToTerraform(struct!.explicitCacheControl),
    forwarding_url: pageRuleActionsForwardingUrlToTerraform(struct!.forwardingUrl),
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
    sort_query_string_for_cache: cdktf.stringToTerraform(struct!.sortQueryStringForCache),
    ssl: cdktf.stringToTerraform(struct!.ssl),
    true_client_ip_header: cdktf.stringToTerraform(struct!.trueClientIpHeader),
    waf: cdktf.stringToTerraform(struct!.waf),
  }
}


export function pageRuleActionsToHclTerraform(struct?: PageRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_use_https: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysUseHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_https_rewrites: {
      value: cdktf.stringToHclTerraform(struct!.automaticHttpsRewrites),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    browser_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.browserCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    browser_check: {
      value: cdktf.stringToHclTerraform(struct!.browserCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_cache_on_cookie: {
      value: cdktf.stringToHclTerraform(struct!.bypassCacheOnCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_by_device_type: {
      value: cdktf.stringToHclTerraform(struct!.cacheByDeviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_deception_armor: {
      value: cdktf.stringToHclTerraform(struct!.cacheDeceptionArmor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_key_fields: {
      value: pageRuleActionsCacheKeyFieldsToHclTerraform(struct!.cacheKeyFields),
      isBlock: true,
      type: "struct",
      storageClassType: "PageRuleActionsCacheKeyFields",
    },
    cache_level: {
      value: cdktf.stringToHclTerraform(struct!.cacheLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_on_cookie: {
      value: cdktf.stringToHclTerraform(struct!.cacheOnCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_ttl_by_status: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cacheTtlByStatus),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_apps: {
      value: cdktf.booleanToHclTerraform(struct!.disableApps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_performance: {
      value: cdktf.booleanToHclTerraform(struct!.disablePerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_security: {
      value: cdktf.booleanToHclTerraform(struct!.disableSecurity),
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
    edge_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.edgeCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    email_obfuscation: {
      value: cdktf.stringToHclTerraform(struct!.emailObfuscation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    explicit_cache_control: {
      value: cdktf.stringToHclTerraform(struct!.explicitCacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_url: {
      value: pageRuleActionsForwardingUrlToHclTerraform(struct!.forwardingUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "PageRuleActionsForwardingUrl",
    },
    host_header_override: {
      value: cdktf.stringToHclTerraform(struct!.hostHeaderOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_geolocation: {
      value: cdktf.stringToHclTerraform(struct!.ipGeolocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirage: {
      value: cdktf.stringToHclTerraform(struct!.mirage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opportunistic_encryption: {
      value: cdktf.stringToHclTerraform(struct!.opportunisticEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_error_page_pass_thru: {
      value: cdktf.stringToHclTerraform(struct!.originErrorPagePassThru),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polish: {
      value: cdktf.stringToHclTerraform(struct!.polish),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_override: {
      value: cdktf.stringToHclTerraform(struct!.resolveOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    respect_strong_etag: {
      value: cdktf.stringToHclTerraform(struct!.respectStrongEtag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_buffering: {
      value: cdktf.stringToHclTerraform(struct!.responseBuffering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rocket_loader: {
      value: cdktf.stringToHclTerraform(struct!.rocketLoader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_query_string_for_cache: {
      value: cdktf.stringToHclTerraform(struct!.sortQueryStringForCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.stringToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    true_client_ip_header: {
      value: cdktf.stringToHclTerraform(struct!.trueClientIpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf: {
      value: cdktf.stringToHclTerraform(struct!.waf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PageRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PageRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._cacheKeyFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyFields = this._cacheKeyFields?.internalValue;
    }
    if (this._cacheLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheLevel = this._cacheLevel;
    }
    if (this._cacheOnCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOnCookie = this._cacheOnCookie;
    }
    if (this._cacheTtlByStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlByStatus = this._cacheTtlByStatus;
    }
    if (this._disableApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApps = this._disableApps;
    }
    if (this._disablePerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePerformance = this._disablePerformance;
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
    if (this._forwardingUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingUrl = this._forwardingUrl?.internalValue;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PageRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysUseHttps = undefined;
      this._automaticHttpsRewrites = undefined;
      this._browserCacheTtl = undefined;
      this._browserCheck = undefined;
      this._bypassCacheOnCookie = undefined;
      this._cacheByDeviceType = undefined;
      this._cacheDeceptionArmor = undefined;
      this._cacheKeyFields.internalValue = undefined;
      this._cacheLevel = undefined;
      this._cacheOnCookie = undefined;
      this._cacheTtlByStatus = undefined;
      this._disableApps = undefined;
      this._disablePerformance = undefined;
      this._disableSecurity = undefined;
      this._disableZaraz = undefined;
      this._edgeCacheTtl = undefined;
      this._emailObfuscation = undefined;
      this._explicitCacheControl = undefined;
      this._forwardingUrl.internalValue = undefined;
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
      this._sortQueryStringForCache = undefined;
      this._ssl = undefined;
      this._trueClientIpHeader = undefined;
      this._waf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysUseHttps = value.alwaysUseHttps;
      this._automaticHttpsRewrites = value.automaticHttpsRewrites;
      this._browserCacheTtl = value.browserCacheTtl;
      this._browserCheck = value.browserCheck;
      this._bypassCacheOnCookie = value.bypassCacheOnCookie;
      this._cacheByDeviceType = value.cacheByDeviceType;
      this._cacheDeceptionArmor = value.cacheDeceptionArmor;
      this._cacheKeyFields.internalValue = value.cacheKeyFields;
      this._cacheLevel = value.cacheLevel;
      this._cacheOnCookie = value.cacheOnCookie;
      this._cacheTtlByStatus = value.cacheTtlByStatus;
      this._disableApps = value.disableApps;
      this._disablePerformance = value.disablePerformance;
      this._disableSecurity = value.disableSecurity;
      this._disableZaraz = value.disableZaraz;
      this._edgeCacheTtl = value.edgeCacheTtl;
      this._emailObfuscation = value.emailObfuscation;
      this._explicitCacheControl = value.explicitCacheControl;
      this._forwardingUrl.internalValue = value.forwardingUrl;
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
      this._sortQueryStringForCache = value.sortQueryStringForCache;
      this._ssl = value.ssl;
      this._trueClientIpHeader = value.trueClientIpHeader;
      this._waf = value.waf;
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
  private _browserCacheTtl?: number; 
  public get browserCacheTtl() {
    return this.getNumberAttribute('browser_cache_ttl');
  }
  public set browserCacheTtl(value: number) {
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

  // cache_ttl_by_status - computed: false, optional: true, required: false
  private _cacheTtlByStatus?: { [key: string]: string }; 
  public get cacheTtlByStatus() {
    return this.getStringMapAttribute('cache_ttl_by_status');
  }
  public set cacheTtlByStatus(value: { [key: string]: string }) {
    this._cacheTtlByStatus = value;
  }
  public resetCacheTtlByStatus() {
    this._cacheTtlByStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlByStatusInput() {
    return this._cacheTtlByStatus;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule cloudflare_page_rule}
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
  * @param importFromId The id of the existing PageRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PageRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/page_rule cloudflare_page_rule} Resource
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
        providerVersion: '5.7.1',
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
    this._actions.internalValue = config.actions;
    this._priority = config.priority;
    this._status = config.status;
    this._target = config.target;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // status - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: pageRuleActionsToTerraform(this._actions.internalValue),
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      target: cdktf.stringToTerraform(this._target),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: pageRuleActionsToHclTerraform(this._actions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PageRuleActions",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
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
