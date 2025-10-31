/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareOrganizationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}
  */
  readonly containing?: DataCloudflareOrganizationsContaining;
  /**
  * Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements
  * by repeating the query value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#id DataCloudflareOrganizations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#max_items DataCloudflareOrganizations#max_items}
  */
  readonly maxItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}
  */
  readonly name?: DataCloudflareOrganizationsName;
  /**
  * The amount of items to return. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#page_size DataCloudflareOrganizations#page_size}
  */
  readonly pageSize?: number;
  /**
  * An opaque token returned from the last list response that when
  * provided will retrieve the next page.
  * 
  * Parameters used to filter the retrieved list must remain in subsequent
  * requests with a page token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#page_token DataCloudflareOrganizations#page_token}
  */
  readonly pageToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}
  */
  readonly parent?: DataCloudflareOrganizationsParent;
}
export interface DataCloudflareOrganizationsContaining {
  /**
  * Filter the list of organizations to the ones that contain this particular
  * account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#account DataCloudflareOrganizations#account}
  */
  readonly account?: string;
  /**
  * Filter the list of organizations to the ones that contain this particular
  * organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#organization DataCloudflareOrganizations#organization}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#user DataCloudflareOrganizations#user}
  */
  readonly user?: string;
}

export function dataCloudflareOrganizationsContainingToTerraform(struct?: DataCloudflareOrganizationsContaining | cdktf.IResolvable): any {
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


export function dataCloudflareOrganizationsContainingToHclTerraform(struct?: DataCloudflareOrganizationsContaining | cdktf.IResolvable): any {
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

export class DataCloudflareOrganizationsContainingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationsContaining | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataCloudflareOrganizationsContaining | cdktf.IResolvable | undefined) {
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
export interface DataCloudflareOrganizationsName {
  /**
  * (case-insensitive) Filter the list of organizations to where the name contains a particular
  * string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#contains DataCloudflareOrganizations#contains}
  */
  readonly contains?: string;
  /**
  * (case-insensitive) Filter the list of organizations to where the name ends with a particular
  * string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#ends_with DataCloudflareOrganizations#ends_with}
  */
  readonly endsWith?: string;
  /**
  * (case-insensitive) Filter the list of organizations to where the name starts with a
  * particular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#starts_with DataCloudflareOrganizations#starts_with}
  */
  readonly startsWith?: string;
}

export function dataCloudflareOrganizationsNameToTerraform(struct?: DataCloudflareOrganizationsName | cdktf.IResolvable): any {
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


export function dataCloudflareOrganizationsNameToHclTerraform(struct?: DataCloudflareOrganizationsName | cdktf.IResolvable): any {
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

export class DataCloudflareOrganizationsNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationsName | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataCloudflareOrganizationsName | cdktf.IResolvable | undefined) {
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
export interface DataCloudflareOrganizationsParent {
}

export function dataCloudflareOrganizationsParentToTerraform(struct?: DataCloudflareOrganizationsParent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationsParentToHclTerraform(struct?: DataCloudflareOrganizationsParent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationsParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationsParent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationsParent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataCloudflareOrganizationsResultMetaFlags {
}

export function dataCloudflareOrganizationsResultMetaFlagsToTerraform(struct?: DataCloudflareOrganizationsResultMetaFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationsResultMetaFlagsToHclTerraform(struct?: DataCloudflareOrganizationsResultMetaFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationsResultMetaFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationsResultMetaFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationsResultMetaFlags | undefined) {
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
export interface DataCloudflareOrganizationsResultMeta {
}

export function dataCloudflareOrganizationsResultMetaToTerraform(struct?: DataCloudflareOrganizationsResultMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationsResultMetaToHclTerraform(struct?: DataCloudflareOrganizationsResultMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationsResultMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationsResultMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationsResultMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flags - computed: true, optional: false, required: false
  private _flags = new DataCloudflareOrganizationsResultMetaFlagsOutputReference(this, "flags");
  public get flags() {
    return this._flags;
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }
}
export interface DataCloudflareOrganizationsResultParent {
}

export function dataCloudflareOrganizationsResultParentToTerraform(struct?: DataCloudflareOrganizationsResultParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationsResultParentToHclTerraform(struct?: DataCloudflareOrganizationsResultParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationsResultParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationsResultParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationsResultParent | undefined) {
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
export interface DataCloudflareOrganizationsResultProfile {
}

export function dataCloudflareOrganizationsResultProfileToTerraform(struct?: DataCloudflareOrganizationsResultProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationsResultProfileToHclTerraform(struct?: DataCloudflareOrganizationsResultProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationsResultProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareOrganizationsResultProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationsResultProfile | undefined) {
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
export interface DataCloudflareOrganizationsResult {
}

export function dataCloudflareOrganizationsResultToTerraform(struct?: DataCloudflareOrganizationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareOrganizationsResultToHclTerraform(struct?: DataCloudflareOrganizationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareOrganizationsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareOrganizationsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareOrganizationsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataCloudflareOrganizationsResultMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataCloudflareOrganizationsResultParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }

  // profile - computed: true, optional: false, required: false
  private _profile = new DataCloudflareOrganizationsResultProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
}

export class DataCloudflareOrganizationsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareOrganizationsResultOutputReference {
    return new DataCloudflareOrganizationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations cloudflare_organizations}
*/
export class DataCloudflareOrganizations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_organizations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareOrganizations to import
  * @param importFromId The id of the existing DataCloudflareOrganizations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareOrganizations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organizations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/organizations cloudflare_organizations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareOrganizationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareOrganizationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_organizations',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.12.0',
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
    this._containing.internalValue = config.containing;
    this._id = config.id;
    this._maxItems = config.maxItems;
    this._name.internalValue = config.name;
    this._pageSize = config.pageSize;
    this._pageToken = config.pageToken;
    this._parent.internalValue = config.parent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // containing - computed: false, optional: true, required: false
  private _containing = new DataCloudflareOrganizationsContainingOutputReference(this, "containing");
  public get containing() {
    return this._containing;
  }
  public putContaining(value: DataCloudflareOrganizationsContaining) {
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

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataCloudflareOrganizationsNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataCloudflareOrganizationsName) {
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
  private _parent = new DataCloudflareOrganizationsParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataCloudflareOrganizationsParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareOrganizationsResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      containing: dataCloudflareOrganizationsContainingToTerraform(this._containing.internalValue),
      id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._id),
      max_items: cdktf.numberToTerraform(this._maxItems),
      name: dataCloudflareOrganizationsNameToTerraform(this._name.internalValue),
      page_size: cdktf.numberToTerraform(this._pageSize),
      page_token: cdktf.stringToTerraform(this._pageToken),
      parent: dataCloudflareOrganizationsParentToTerraform(this._parent.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      containing: {
        value: dataCloudflareOrganizationsContainingToHclTerraform(this._containing.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareOrganizationsContaining",
      },
      id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._id),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: dataCloudflareOrganizationsNameToHclTerraform(this._name.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareOrganizationsName",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_token: {
        value: cdktf.stringToHclTerraform(this._pageToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: dataCloudflareOrganizationsParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareOrganizationsParent",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
