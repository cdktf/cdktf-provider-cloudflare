/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustAccessApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications#account_id DataCloudflareZeroTrustAccessApplications#account_id}
  */
  readonly accountId?: string;
  /**
  * The aud of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications#aud DataCloudflareZeroTrustAccessApplications#aud}
  */
  readonly aud?: string;
  /**
  * The domain of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications#domain DataCloudflareZeroTrustAccessApplications#domain}
  */
  readonly domain?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications#max_items DataCloudflareZeroTrustAccessApplications#max_items}
  */
  readonly maxItems?: number;
  /**
  * The name of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications#name DataCloudflareZeroTrustAccessApplications#name}
  */
  readonly name?: string;
  /**
  * Search for apps by other listed query parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications#search DataCloudflareZeroTrustAccessApplications#search}
  */
  readonly search?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications#zone_id DataCloudflareZeroTrustAccessApplications#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders {
}

export function dataCloudflareZeroTrustAccessApplicationsResultCorsHeadersToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultCorsHeadersToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultCorsHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_all_headers - computed: true, optional: false, required: false
  public get allowAllHeaders() {
    return this.getBooleanAttribute('allow_all_headers');
  }

  // allow_all_methods - computed: true, optional: false, required: false
  public get allowAllMethods() {
    return this.getBooleanAttribute('allow_all_methods');
  }

  // allow_all_origins - computed: true, optional: false, required: false
  public get allowAllOrigins() {
    return this.getBooleanAttribute('allow_all_origins');
  }

  // allow_credentials - computed: true, optional: false, required: false
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }

  // allowed_headers - computed: true, optional: false, required: false
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: false
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultDestinations {
}

export function dataCloudflareZeroTrustAccessApplicationsResultDestinationsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultDestinationsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // l4_protocol - computed: true, optional: false, required: false
  public get l4Protocol() {
    return this.getStringAttribute('l4_protocol');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.getStringAttribute('port_range');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // vnet_id - computed: true, optional: false, required: false
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultDestinationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultDestinationsOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultFooterLinks {
}

export function dataCloudflareZeroTrustAccessApplicationsResultFooterLinksToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultFooterLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultFooterLinksToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultFooterLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultFooterLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultFooterLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultFooterLinks | undefined) {
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultFooterLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultFooterLinksOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultFooterLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign {
}

export function dataCloudflareZeroTrustAccessApplicationsResultLandingPageDesignToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultLandingPageDesignToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_color - computed: true, optional: false, required: false
  public get buttonColor() {
    return this.getStringAttribute('button_color');
  }

  // button_text_color - computed: true, optional: false, required: false
  public get buttonTextColor() {
    return this.getStringAttribute('button_text_color');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approvals_needed - computed: true, optional: false, required: false
  public get approvalsNeeded() {
    return this.getNumberAttribute('approvals_needed');
  }

  // email_addresses - computed: true, optional: false, required: false
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }

  // email_list_uuid - computed: true, optional: false, required: false
  public get emailListUuid() {
    return this.getStringAttribute('email_list_uuid');
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSshToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSshToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_email_alias - computed: true, optional: false, required: false
  public get allowEmailAlias() {
    return this.getBooleanAttribute('allow_email_alias');
  }

  // usernames - computed: true, optional: false, required: false
  public get usernames() {
    return this.getListAttribute('usernames');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssh - computed: true, optional: false, required: false
  private _ssh = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ac_id - computed: true, optional: false, required: false
  public get acId() {
    return this.getStringAttribute('ac_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd | undefined) {
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

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration_uid - computed: true, optional: false, required: false
  public get integrationUid() {
    return this.getStringAttribute('integration_uid');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate_url - computed: true, optional: false, required: false
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }

  // keys_url - computed: true, optional: false, required: false
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any_valid_service_token - computed: true, optional: false, required: false
  private _anyValidServiceToken = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
  public get anyValidServiceToken() {
    return this._anyValidServiceToken;
  }

  // auth_context - computed: true, optional: false, required: false
  private _authContext = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContextOutputReference(this, "auth_context");
  public get authContext() {
    return this._authContext;
  }

  // auth_method - computed: true, optional: false, required: false
  private _authMethod = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }

  // azure_ad - computed: true, optional: false, required: false
  private _azureAd = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAdOutputReference(this, "azure_ad");
  public get azureAd() {
    return this._azureAd;
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }

  // common_name - computed: true, optional: false, required: false
  private _commonName = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }

  // device_posture - computed: true, optional: false, required: false
  private _devicePosture = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePostureOutputReference(this, "device_posture");
  public get devicePosture() {
    return this._devicePosture;
  }

  // email - computed: true, optional: false, required: false
  private _email = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }

  // email_domain - computed: true, optional: false, required: false
  private _emailDomain = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomainOutputReference(this, "email_domain");
  public get emailDomain() {
    return this._emailDomain;
  }

  // email_list - computed: true, optional: false, required: false
  private _emailList = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStructOutputReference(this, "email_list");
  public get emailList() {
    return this._emailList;
  }

  // everyone - computed: true, optional: false, required: false
  private _everyone = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryoneOutputReference(this, "everyone");
  public get everyone() {
    return this._everyone;
  }

  // external_evaluation - computed: true, optional: false, required: false
  private _externalEvaluation = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }

  // geo - computed: true, optional: false, required: false
  private _geo = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }

  // github_organization - computed: true, optional: false, required: false
  private _githubOrganization = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganizationOutputReference(this, "github_organization");
  public get githubOrganization() {
    return this._githubOrganization;
  }

  // group - computed: true, optional: false, required: false
  private _group = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }

  // gsuite - computed: true, optional: false, required: false
  private _gsuite = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuiteOutputReference(this, "gsuite");
  public get gsuite() {
    return this._gsuite;
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }

  // ip_list - computed: true, optional: false, required: false
  private _ipList = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }

  // login_method - computed: true, optional: false, required: false
  private _loginMethod = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethodOutputReference(this, "login_method");
  public get loginMethod() {
    return this._loginMethod;
  }

  // okta - computed: true, optional: false, required: false
  private _okta = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }

  // saml - computed: true, optional: false, required: false
  private _saml = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }

  // service_token - computed: true, optional: false, required: false
  private _serviceToken = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ac_id - computed: true, optional: false, required: false
  public get acId() {
    return this.getStringAttribute('ac_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd | undefined) {
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

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration_uid - computed: true, optional: false, required: false
  public get integrationUid() {
    return this.getStringAttribute('integration_uid');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate_url - computed: true, optional: false, required: false
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }

  // keys_url - computed: true, optional: false, required: false
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any_valid_service_token - computed: true, optional: false, required: false
  private _anyValidServiceToken = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
  public get anyValidServiceToken() {
    return this._anyValidServiceToken;
  }

  // auth_context - computed: true, optional: false, required: false
  private _authContext = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContextOutputReference(this, "auth_context");
  public get authContext() {
    return this._authContext;
  }

  // auth_method - computed: true, optional: false, required: false
  private _authMethod = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }

  // azure_ad - computed: true, optional: false, required: false
  private _azureAd = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAdOutputReference(this, "azure_ad");
  public get azureAd() {
    return this._azureAd;
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }

  // common_name - computed: true, optional: false, required: false
  private _commonName = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }

  // device_posture - computed: true, optional: false, required: false
  private _devicePosture = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePostureOutputReference(this, "device_posture");
  public get devicePosture() {
    return this._devicePosture;
  }

  // email - computed: true, optional: false, required: false
  private _email = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }

  // email_domain - computed: true, optional: false, required: false
  private _emailDomain = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomainOutputReference(this, "email_domain");
  public get emailDomain() {
    return this._emailDomain;
  }

  // email_list - computed: true, optional: false, required: false
  private _emailList = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStructOutputReference(this, "email_list");
  public get emailList() {
    return this._emailList;
  }

  // everyone - computed: true, optional: false, required: false
  private _everyone = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryoneOutputReference(this, "everyone");
  public get everyone() {
    return this._everyone;
  }

  // external_evaluation - computed: true, optional: false, required: false
  private _externalEvaluation = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }

  // geo - computed: true, optional: false, required: false
  private _geo = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }

  // github_organization - computed: true, optional: false, required: false
  private _githubOrganization = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganizationOutputReference(this, "github_organization");
  public get githubOrganization() {
    return this._githubOrganization;
  }

  // group - computed: true, optional: false, required: false
  private _group = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }

  // gsuite - computed: true, optional: false, required: false
  private _gsuite = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuiteOutputReference(this, "gsuite");
  public get gsuite() {
    return this._gsuite;
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }

  // ip_list - computed: true, optional: false, required: false
  private _ipList = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }

  // login_method - computed: true, optional: false, required: false
  private _loginMethod = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethodOutputReference(this, "login_method");
  public get loginMethod() {
    return this._loginMethod;
  }

  // okta - computed: true, optional: false, required: false
  private _okta = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }

  // saml - computed: true, optional: false, required: false
  private _saml = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }

  // service_token - computed: true, optional: false, required: false
  private _serviceToken = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ac_id - computed: true, optional: false, required: false
  public get acId() {
    return this.getStringAttribute('ac_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd | undefined) {
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

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePostureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration_uid - computed: true, optional: false, required: false
  public get integrationUid() {
    return this.getStringAttribute('integration_uid');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate_url - computed: true, optional: false, required: false
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }

  // keys_url - computed: true, optional: false, required: false
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeoToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroupToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod | undefined) {
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
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOktaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSamlToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any_valid_service_token - computed: true, optional: false, required: false
  private _anyValidServiceToken = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
  public get anyValidServiceToken() {
    return this._anyValidServiceToken;
  }

  // auth_context - computed: true, optional: false, required: false
  private _authContext = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContextOutputReference(this, "auth_context");
  public get authContext() {
    return this._authContext;
  }

  // auth_method - computed: true, optional: false, required: false
  private _authMethod = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }

  // azure_ad - computed: true, optional: false, required: false
  private _azureAd = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAdOutputReference(this, "azure_ad");
  public get azureAd() {
    return this._azureAd;
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }

  // common_name - computed: true, optional: false, required: false
  private _commonName = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }

  // device_posture - computed: true, optional: false, required: false
  private _devicePosture = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePostureOutputReference(this, "device_posture");
  public get devicePosture() {
    return this._devicePosture;
  }

  // email - computed: true, optional: false, required: false
  private _email = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }

  // email_domain - computed: true, optional: false, required: false
  private _emailDomain = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomainOutputReference(this, "email_domain");
  public get emailDomain() {
    return this._emailDomain;
  }

  // email_list - computed: true, optional: false, required: false
  private _emailList = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStructOutputReference(this, "email_list");
  public get emailList() {
    return this._emailList;
  }

  // everyone - computed: true, optional: false, required: false
  private _everyone = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryoneOutputReference(this, "everyone");
  public get everyone() {
    return this._everyone;
  }

  // external_evaluation - computed: true, optional: false, required: false
  private _externalEvaluation = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }

  // geo - computed: true, optional: false, required: false
  private _geo = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }

  // github_organization - computed: true, optional: false, required: false
  private _githubOrganization = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganizationOutputReference(this, "github_organization");
  public get githubOrganization() {
    return this._githubOrganization;
  }

  // group - computed: true, optional: false, required: false
  private _group = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }

  // gsuite - computed: true, optional: false, required: false
  private _gsuite = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuiteOutputReference(this, "gsuite");
  public get gsuite() {
    return this._gsuite;
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }

  // ip_list - computed: true, optional: false, required: false
  private _ipList = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }

  // login_method - computed: true, optional: false, required: false
  private _loginMethod = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethodOutputReference(this, "login_method");
  public get loginMethod() {
    return this._loginMethod;
  }

  // okta - computed: true, optional: false, required: false
  private _okta = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }

  // saml - computed: true, optional: false, required: false
  private _saml = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }

  // service_token - computed: true, optional: false, required: false
  private _serviceToken = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPolicies {
}

export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultPoliciesToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approval_groups - computed: true, optional: false, required: false
  private _approvalGroups = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsList(this, "approval_groups", false);
  public get approvalGroups() {
    return this._approvalGroups;
  }

  // approval_required - computed: true, optional: false, required: false
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }

  // connection_rules - computed: true, optional: false, required: false
  private _connectionRules = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesOutputReference(this, "connection_rules");
  public get connectionRules() {
    return this._connectionRules;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // decision - computed: true, optional: false, required: false
  public get decision() {
    return this.getStringAttribute('decision');
  }

  // exclude - computed: true, optional: false, required: false
  private _exclude = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include - computed: true, optional: false, required: false
  private _include = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }

  // isolation_required - computed: true, optional: false, required: false
  public get isolationRequired() {
    return this.getBooleanAttribute('isolation_required');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // precedence - computed: true, optional: false, required: false
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }

  // purpose_justification_prompt - computed: true, optional: false, required: false
  public get purposeJustificationPrompt() {
    return this.getStringAttribute('purpose_justification_prompt');
  }

  // purpose_justification_required - computed: true, optional: false, required: false
  public get purposeJustificationRequired() {
    return this.getBooleanAttribute('purpose_justification_required');
  }

  // require - computed: true, optional: false, required: false
  private _require = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireList(this, "require", false);
  public get require() {
    return this._require;
  }

  // session_duration - computed: true, optional: false, required: false
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp {
}

export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idp_id - computed: true, optional: false, required: false
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource {
}

export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource | undefined) {
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

  // name_by_idp - computed: true, optional: false, required: false
  private _nameByIdp = new DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpList(this, "name_by_idp", false);
  public get nameByIdp() {
    return this._nameByIdp;
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes {
}

export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_format - computed: true, optional: false, required: false
  public get nameFormat() {
    return this.getStringAttribute('name_format');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource {
}

export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSourceToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSourceToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource | undefined) {
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

  // name_by_idp - computed: true, optional: false, required: false
  private _nameByIdp = new cdktf.StringMap(this, "name_by_idp");
  public get nameByIdp() {
    return this._nameByIdp;
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims {
}

export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims | undefined) {
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

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions {
}

export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptionsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptionsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // return_access_token_from_authorization_endpoint - computed: true, optional: false, required: false
  public get returnAccessTokenFromAuthorizationEndpoint() {
    return this.getBooleanAttribute('return_access_token_from_authorization_endpoint');
  }

  // return_id_token_from_authorization_endpoint - computed: true, optional: false, required: false
  public get returnIdTokenFromAuthorizationEndpoint() {
    return this.getBooleanAttribute('return_id_token_from_authorization_endpoint');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions {
}

export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptionsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptionsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasApp {
}

export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultSaasAppToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultSaasAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token_lifetime - computed: true, optional: false, required: false
  public get accessTokenLifetime() {
    return this.getStringAttribute('access_token_lifetime');
  }

  // allow_pkce_without_client_secret - computed: true, optional: false, required: false
  public get allowPkceWithoutClientSecret() {
    return this.getBooleanAttribute('allow_pkce_without_client_secret');
  }

  // app_launcher_url - computed: true, optional: false, required: false
  public get appLauncherUrl() {
    return this.getStringAttribute('app_launcher_url');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // consumer_service_url - computed: true, optional: false, required: false
  public get consumerServiceUrl() {
    return this.getStringAttribute('consumer_service_url');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_attributes - computed: true, optional: false, required: false
  private _customAttributes = new DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }

  // custom_claims - computed: true, optional: false, required: false
  private _customClaims = new DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsList(this, "custom_claims", false);
  public get customClaims() {
    return this._customClaims;
  }

  // default_relay_state - computed: true, optional: false, required: false
  public get defaultRelayState() {
    return this.getStringAttribute('default_relay_state');
  }

  // grant_types - computed: true, optional: false, required: false
  public get grantTypes() {
    return this.getListAttribute('grant_types');
  }

  // group_filter_regex - computed: true, optional: false, required: false
  public get groupFilterRegex() {
    return this.getStringAttribute('group_filter_regex');
  }

  // hybrid_and_implicit_options - computed: true, optional: false, required: false
  private _hybridAndImplicitOptions = new DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptionsOutputReference(this, "hybrid_and_implicit_options");
  public get hybridAndImplicitOptions() {
    return this._hybridAndImplicitOptions;
  }

  // idp_entity_id - computed: true, optional: false, required: false
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }

  // name_id_format - computed: true, optional: false, required: false
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }

  // name_id_transform_jsonata - computed: true, optional: false, required: false
  public get nameIdTransformJsonata() {
    return this.getStringAttribute('name_id_transform_jsonata');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }

  // refresh_token_options - computed: true, optional: false, required: false
  private _refreshTokenOptions = new DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptionsOutputReference(this, "refresh_token_options");
  public get refreshTokenOptions() {
    return this._refreshTokenOptions;
  }

  // saml_attribute_transform_jsonata - computed: true, optional: false, required: false
  public get samlAttributeTransformJsonata() {
    return this.getStringAttribute('saml_attribute_transform_jsonata');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // sp_entity_id - computed: true, optional: false, required: false
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }

  // sso_endpoint - computed: true, optional: false, required: false
  public get ssoEndpoint() {
    return this.getStringAttribute('sso_endpoint');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication {
}

export function dataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthenticationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthenticationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_url - computed: true, optional: false, required: false
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations {
}

export function dataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperationsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperationsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create - computed: true, optional: false, required: false
  public get create() {
    return this.getBooleanAttribute('create');
  }

  // delete - computed: true, optional: false, required: false
  public get delete() {
    return this.getBooleanAttribute('delete');
  }

  // update - computed: true, optional: false, required: false
  public get update() {
    return this.getBooleanAttribute('update');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings {
}

export function dataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings | undefined) {
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

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // operations - computed: true, optional: false, required: false
  private _operations = new DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperationsOutputReference(this, "operations");
  public get operations() {
    return this._operations;
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // strictness - computed: true, optional: false, required: false
  public get strictness() {
    return this.getStringAttribute('strictness');
  }

  // transform_jsonata - computed: true, optional: false, required: false
  public get transformJsonata() {
    return this.getStringAttribute('transform_jsonata');
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultScimConfig {
}

export function dataCloudflareZeroTrustAccessApplicationsResultScimConfigToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultScimConfigToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultScimConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultScimConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultScimConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }

  // deactivate_on_delete - computed: true, optional: false, required: false
  public get deactivateOnDelete() {
    return this.getBooleanAttribute('deactivate_on_delete');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // idp_uid - computed: true, optional: false, required: false
  public get idpUid() {
    return this.getStringAttribute('idp_uid');
  }

  // mappings - computed: true, optional: false, required: false
  private _mappings = new DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }

  // remote_uri - computed: true, optional: false, required: false
  public get remoteUri() {
    return this.getStringAttribute('remote_uri');
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria {
}

export function dataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // target_attributes - computed: true, optional: false, required: false
  private _targetAttributes = new cdktf.StringListMap(this, "target_attributes");
  public get targetAttributes() {
    return this._targetAttributes;
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessApplicationsResult {
}

export function dataCloudflareZeroTrustAccessApplicationsResultToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessApplicationsResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessApplicationsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessApplicationsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_authenticate_via_warp - computed: true, optional: false, required: false
  public get allowAuthenticateViaWarp() {
    return this.getBooleanAttribute('allow_authenticate_via_warp');
  }

  // allowed_idps - computed: true, optional: false, required: false
  public get allowedIdps() {
    return this.getListAttribute('allowed_idps');
  }

  // app_launcher_logo_url - computed: true, optional: false, required: false
  public get appLauncherLogoUrl() {
    return this.getStringAttribute('app_launcher_logo_url');
  }

  // app_launcher_visible - computed: true, optional: false, required: false
  public get appLauncherVisible() {
    return this.getBooleanAttribute('app_launcher_visible');
  }

  // aud - computed: true, optional: false, required: false
  public get aud() {
    return this.getStringAttribute('aud');
  }

  // auto_redirect_to_identity - computed: true, optional: false, required: false
  public get autoRedirectToIdentity() {
    return this.getBooleanAttribute('auto_redirect_to_identity');
  }

  // bg_color - computed: true, optional: false, required: false
  public get bgColor() {
    return this.getStringAttribute('bg_color');
  }

  // cors_headers - computed: true, optional: false, required: false
  private _corsHeaders = new DataCloudflareZeroTrustAccessApplicationsResultCorsHeadersOutputReference(this, "cors_headers");
  public get corsHeaders() {
    return this._corsHeaders;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_deny_message - computed: true, optional: false, required: false
  public get customDenyMessage() {
    return this.getStringAttribute('custom_deny_message');
  }

  // custom_deny_url - computed: true, optional: false, required: false
  public get customDenyUrl() {
    return this.getStringAttribute('custom_deny_url');
  }

  // custom_non_identity_deny_url - computed: true, optional: false, required: false
  public get customNonIdentityDenyUrl() {
    return this.getStringAttribute('custom_non_identity_deny_url');
  }

  // custom_pages - computed: true, optional: false, required: false
  public get customPages() {
    return this.getListAttribute('custom_pages');
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataCloudflareZeroTrustAccessApplicationsResultDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // enable_binding_cookie - computed: true, optional: false, required: false
  public get enableBindingCookie() {
    return this.getBooleanAttribute('enable_binding_cookie');
  }

  // footer_links - computed: true, optional: false, required: false
  private _footerLinks = new DataCloudflareZeroTrustAccessApplicationsResultFooterLinksList(this, "footer_links", false);
  public get footerLinks() {
    return this._footerLinks;
  }

  // header_bg_color - computed: true, optional: false, required: false
  public get headerBgColor() {
    return this.getStringAttribute('header_bg_color');
  }

  // http_only_cookie_attribute - computed: true, optional: false, required: false
  public get httpOnlyCookieAttribute() {
    return this.getBooleanAttribute('http_only_cookie_attribute');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // landing_page_design - computed: true, optional: false, required: false
  private _landingPageDesign = new DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesignOutputReference(this, "landing_page_design");
  public get landingPageDesign() {
    return this._landingPageDesign;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options_preflight_bypass - computed: true, optional: false, required: false
  public get optionsPreflightBypass() {
    return this.getBooleanAttribute('options_preflight_bypass');
  }

  // path_cookie_attribute - computed: true, optional: false, required: false
  public get pathCookieAttribute() {
    return this.getBooleanAttribute('path_cookie_attribute');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataCloudflareZeroTrustAccessApplicationsResultPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // saas_app - computed: true, optional: false, required: false
  private _saasApp = new DataCloudflareZeroTrustAccessApplicationsResultSaasAppOutputReference(this, "saas_app");
  public get saasApp() {
    return this._saasApp;
  }

  // same_site_cookie_attribute - computed: true, optional: false, required: false
  public get sameSiteCookieAttribute() {
    return this.getStringAttribute('same_site_cookie_attribute');
  }

  // scim_config - computed: true, optional: false, required: false
  private _scimConfig = new DataCloudflareZeroTrustAccessApplicationsResultScimConfigOutputReference(this, "scim_config");
  public get scimConfig() {
    return this._scimConfig;
  }

  // self_hosted_domains - computed: true, optional: false, required: false
  public get selfHostedDomains() {
    return this.getListAttribute('self_hosted_domains');
  }

  // service_auth_401_redirect - computed: true, optional: false, required: false
  public get serviceAuth401Redirect() {
    return this.getBooleanAttribute('service_auth_401_redirect');
  }

  // session_duration - computed: true, optional: false, required: false
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }

  // skip_app_launcher_login_page - computed: true, optional: false, required: false
  public get skipAppLauncherLoginPage() {
    return this.getBooleanAttribute('skip_app_launcher_login_page');
  }

  // skip_interstitial - computed: true, optional: false, required: false
  public get skipInterstitial() {
    return this.getBooleanAttribute('skip_interstitial');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // target_criteria - computed: true, optional: false, required: false
  private _targetCriteria = new DataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaList(this, "target_criteria", false);
  public get targetCriteria() {
    return this._targetCriteria;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataCloudflareZeroTrustAccessApplicationsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessApplicationsResultOutputReference {
    return new DataCloudflareZeroTrustAccessApplicationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications cloudflare_zero_trust_access_applications}
*/
export class DataCloudflareZeroTrustAccessApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessApplications to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustAccessApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_applications cloudflare_zero_trust_access_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustAccessApplicationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessApplicationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_applications',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.2.0',
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
    this._aud = config.aud;
    this._domain = config.domain;
    this._maxItems = config.maxItems;
    this._name = config.name;
    this._search = config.search;
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

  // aud - computed: false, optional: true, required: false
  private _aud?: string; 
  public get aud() {
    return this.getStringAttribute('aud');
  }
  public set aud(value: string) {
    this._aud = value;
  }
  public resetAud() {
    this._aud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audInput() {
    return this._aud;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZeroTrustAccessApplicationsResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
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
      aud: cdktf.stringToTerraform(this._aud),
      domain: cdktf.stringToTerraform(this._domain),
      max_items: cdktf.numberToTerraform(this._maxItems),
      name: cdktf.stringToTerraform(this._name),
      search: cdktf.stringToTerraform(this._search),
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
      aud: {
        value: cdktf.stringToHclTerraform(this._aud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
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
