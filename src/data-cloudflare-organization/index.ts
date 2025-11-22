/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}
  */
  readonly filter?: DataCloudflareOrganizationFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}
  */
  readonly organizationId?: string;
}
export interface DataCloudflareOrganizationFilterContaining {
  /**
  * Filter the list of organizations to the ones that contain this particular
  * account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#account DataCloudflareOrganization#account}
  */
  readonly account?: string;
  /**
  * Filter the list of organizations to the ones that contain this particular
  * organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization DataCloudflareOrganization#organization}
  */
  readonly organization?: string;
  /**
  * Filter the list of organizations to the ones that contain this particular
  * user.
  * 
  * IMPORTANT: Just because an organization "contains" a user is not a
  * representation of any authorization or privilege to manage any resources
  * therein. An organization "containing" a user simply means the user is managed by
  * that organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#user DataCloudflareOrganization#user}
  */
  readonly user?: string;
}

export function dataCloudflareOrganizationFilterContainingToTerraform(struct?: DataCloudflareOrganizationFilterContaining | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    organization: cdktf.stringToTerraform(struct!.organization),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataCloudflareOrganizationFilterContainingToHclTerraform(struct?: DataCloudflareOrganizationFilterContaining | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareOrganizationFilterContainingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationFilterContaining | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationFilterContaining | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._organization = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._organization = value.organization;
      this._user = value.user;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataCloudflareOrganizationFilterName {
  /**
  * (case-insensitive) Filter the list of organizations to where the name contains a particular
  * string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#contains DataCloudflareOrganization#contains}
  */
  readonly contains?: string;
  /**
  * (case-insensitive) Filter the list of organizations to where the name ends with a particular
  * string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#ends_with DataCloudflareOrganization#ends_with}
  */
  readonly endsWith?: string;
  /**
  * (case-insensitive) Filter the list of organizations to where the name starts with a
  * particular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#starts_with DataCloudflareOrganization#starts_with}
  */
  readonly startsWith?: string;
}

export function dataCloudflareOrganizationFilterNameToTerraform(struct?: DataCloudflareOrganizationFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    ends_with: cdktf.stringToTerraform(struct!.endsWith),
    starts_with: cdktf.stringToTerraform(struct!.startsWith),
  }
}


export function dataCloudflareOrganizationFilterNameToHclTerraform(struct?: DataCloudflareOrganizationFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ends_with: {
      value: cdktf.stringToHclTerraform(struct!.endsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starts_with: {
      value: cdktf.stringToHclTerraform(struct!.startsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareOrganizationFilterNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationFilterName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._endsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsWith = this._endsWith;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationFilterName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._endsWith = undefined;
      this._startsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._endsWith = value.endsWith;
      this._startsWith = value.startsWith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // ends_with - computed: false, optional: true, required: false
  private _endsWith?: string; 
  public get endsWith() {
    return this.getStringAttribute('ends_with');
  }
  public set endsWith(value: string) {
    this._endsWith = value;
  }
  public resetEndsWith() {
    this._endsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithInput() {
    return this._endsWith;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }
}
export interface DataCloudflareOrganizationFilterParent {
  /**
  * Filter the list of organizations to the ones that are a sub-organization
  * of the specified organization.
  * 
  * "null" is a valid value to provide for this parameter. It means "where
  * an organization has no parent (i.e. it is a 'root' organization)."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataCloudflareOrganizationFilterParentToTerraform(struct?: DataCloudflareOrganizationFilterParent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataCloudflareOrganizationFilterParentToHclTerraform(struct?: DataCloudflareOrganizationFilterParent | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareOrganizationFilterParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationFilterParent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationFilterParent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}
export interface DataCloudflareOrganizationFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#containing DataCloudflareOrganization#containing}
  */
  readonly containing?: DataCloudflareOrganizationFilterContaining;
  /**
  * Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements
  * by repeating the query value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#name DataCloudflareOrganization#name}
  */
  readonly name?: DataCloudflareOrganizationFilterName;
  /**
  * The amount of items to return. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_size DataCloudflareOrganization#page_size}
  */
  readonly pageSize?: number;
  /**
  * An opaque token returned from the last list response that when
  * provided will retrieve the next page.
  * 
  * Parameters used to filter the retrieved list must remain in subsequent
  * requests with a page token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_token DataCloudflareOrganization#page_token}
  */
  readonly pageToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#parent DataCloudflareOrganization#parent}
  */
  readonly parent?: DataCloudflareOrganizationFilterParent;
}

export function dataCloudflareOrganizationFilterToTerraform(struct?: DataCloudflareOrganizationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containing: dataCloudflareOrganizationFilterContainingToTerraform(struct!.containing),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    name: dataCloudflareOrganizationFilterNameToTerraform(struct!.name),
    page_size: cdktf.numberToTerraform(struct!.pageSize),
    page_token: cdktf.stringToTerraform(struct!.pageToken),
    parent: dataCloudflareOrganizationFilterParentToTerraform(struct!.parent),
  }
}


export function dataCloudflareOrganizationFilterToHclTerraform(struct?: DataCloudflareOrganizationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containing: {
      value: dataCloudflareOrganizationFilterContainingToHclTerraform(struct!.containing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareOrganizationFilterContaining",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: dataCloudflareOrganizationFilterNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareOrganizationFilterName",
    },
    page_size: {
      value: cdktf.numberToHclTerraform(struct!.pageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_token: {
      value: cdktf.stringToHclTerraform(struct!.pageToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent: {
      value: dataCloudflareOrganizationFilterParentToHclTerraform(struct!.parent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareOrganizationFilterParent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareOrganizationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containing = this._containing?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._pageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSize = this._pageSize;
    }
    if (this._pageToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageToken = this._pageToken;
    }
    if (this._parent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containing.internalValue = undefined;
      this._id = undefined;
      this._name.internalValue = undefined;
      this._pageSize = undefined;
      this._pageToken = undefined;
      this._parent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containing.internalValue = value.containing;
      this._id = value.id;
      this._name.internalValue = value.name;
      this._pageSize = value.pageSize;
      this._pageToken = value.pageToken;
      this._parent.internalValue = value.parent;
    }
  }

  // containing - computed: false, optional: true, required: false
  private _containing = new DataCloudflareOrganizationFilterContainingOutputReference(this, "containing");
  public get containing() {
    return this._containing;
  }
  public putContaining(value: DataCloudflareOrganizationFilterContaining) {
    this._containing.internalValue = value;
  }
  public resetContaining() {
    this._containing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containingInput() {
    return this._containing.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return this.getListAttribute('id');
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataCloudflareOrganizationFilterNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataCloudflareOrganizationFilterName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // page_token - computed: false, optional: true, required: false
  private _pageToken?: string; 
  public get pageToken() {
    return this.getStringAttribute('page_token');
  }
  public set pageToken(value: string) {
    this._pageToken = value;
  }
  public resetPageToken() {
    this._pageToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageTokenInput() {
    return this._pageToken;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataCloudflareOrganizationFilterParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataCloudflareOrganizationFilterParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }
}
export interface DataCloudflareOrganizationMetaFlags {
}

export function dataCloudflareOrganizationMetaFlagsToTerraform(struct?: DataCloudflareOrganizationMetaFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationMetaFlagsToHclTerraform(struct?: DataCloudflareOrganizationMetaFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationMetaFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationMetaFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationMetaFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_creation - computed: true, optional: false, required: false
  public get accountCreation() {
    return this.getStringAttribute('account_creation');
  }

  // account_deletion - computed: true, optional: false, required: false
  public get accountDeletion() {
    return this.getStringAttribute('account_deletion');
  }

  // account_migration - computed: true, optional: false, required: false
  public get accountMigration() {
    return this.getStringAttribute('account_migration');
  }

  // account_mobility - computed: true, optional: false, required: false
  public get accountMobility() {
    return this.getStringAttribute('account_mobility');
  }

  // sub_org_creation - computed: true, optional: false, required: false
  public get subOrgCreation() {
    return this.getStringAttribute('sub_org_creation');
  }
}
export interface DataCloudflareOrganizationMeta {
}

export function dataCloudflareOrganizationMetaToTerraform(struct?: DataCloudflareOrganizationMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationMetaToHclTerraform(struct?: DataCloudflareOrganizationMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flags - computed: true, optional: false, required: false
  private _flags = new DataCloudflareOrganizationMetaFlagsOutputReference(this, "flags");
  public get flags() {
    return this._flags;
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }
}
export interface DataCloudflareOrganizationParent {
}

export function dataCloudflareOrganizationParentToTerraform(struct?: DataCloudflareOrganizationParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationParentToHclTerraform(struct?: DataCloudflareOrganizationParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCloudflareOrganizationProfile {
}

export function dataCloudflareOrganizationProfileToTerraform(struct?: DataCloudflareOrganizationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationProfileToHclTerraform(struct?: DataCloudflareOrganizationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // business_address - computed: true, optional: false, required: false
  public get businessAddress() {
    return this.getStringAttribute('business_address');
  }

  // business_email - computed: true, optional: false, required: false
  public get businessEmail() {
    return this.getStringAttribute('business_email');
  }

  // business_name - computed: true, optional: false, required: false
  public get businessName() {
    return this.getStringAttribute('business_name');
  }

  // business_phone - computed: true, optional: false, required: false
  public get businessPhone() {
    return this.getStringAttribute('business_phone');
  }

  // external_metadata - computed: true, optional: false, required: false
  public get externalMetadata() {
    return this.getStringAttribute('external_metadata');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization cloudflare_organization}
*/
export class DataCloudflareOrganization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareOrganization to import
  * @param importFromId The id of the existing DataCloudflareOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization cloudflare_organization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareOrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareOrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_organization',
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
    this._filter.internalValue = config.filter;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareOrganizationFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareOrganizationFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataCloudflareOrganizationMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataCloudflareOrganizationParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }

  // profile - computed: true, optional: false, required: false
  private _profile = new DataCloudflareOrganizationProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataCloudflareOrganizationFilterToTerraform(this._filter.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataCloudflareOrganizationFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareOrganizationFilter",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
