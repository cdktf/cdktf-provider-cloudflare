/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#account_id ZeroTrustAccessPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * Administrators who can approve a temporary authentication request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#approval_groups ZeroTrustAccessPolicy#approval_groups}
  */
  readonly approvalGroups?: ZeroTrustAccessPolicyApprovalGroups[] | cdktf.IResolvable;
  /**
  * Requires the user to request access from an administrator at the start of each session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#approval_required ZeroTrustAccessPolicy#approval_required}
  */
  readonly approvalRequired?: boolean | cdktf.IResolvable;
  /**
  * The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.
  * Available values: "allow", "deny", "non_identity", "bypass".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#decision ZeroTrustAccessPolicy#decision}
  */
  readonly decision: string;
  /**
  * Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#exclude ZeroTrustAccessPolicy#exclude}
  */
  readonly exclude?: ZeroTrustAccessPolicyExclude[] | cdktf.IResolvable;
  /**
  * Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#include ZeroTrustAccessPolicy#include}
  */
  readonly include: ZeroTrustAccessPolicyInclude[] | cdktf.IResolvable;
  /**
  * Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#isolation_required ZeroTrustAccessPolicy#isolation_required}
  */
  readonly isolationRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of the Access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name: string;
  /**
  * A custom message that will appear on the purpose justification screen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#purpose_justification_prompt ZeroTrustAccessPolicy#purpose_justification_prompt}
  */
  readonly purposeJustificationPrompt?: string;
  /**
  * Require users to enter a justification when they log in to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#purpose_justification_required ZeroTrustAccessPolicy#purpose_justification_required}
  */
  readonly purposeJustificationRequired?: boolean | cdktf.IResolvable;
  /**
  * Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#require ZeroTrustAccessPolicy#require}
  */
  readonly require?: ZeroTrustAccessPolicyRequire[] | cdktf.IResolvable;
  /**
  * The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#session_duration ZeroTrustAccessPolicy#session_duration}
  */
  readonly sessionDuration?: string;
}
export interface ZeroTrustAccessPolicyApprovalGroups {
  /**
  * The number of approvals needed to obtain access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#approvals_needed ZeroTrustAccessPolicy#approvals_needed}
  */
  readonly approvalsNeeded: number;
  /**
  * A list of emails that can approve the access request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email_addresses ZeroTrustAccessPolicy#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * The UUID of an re-usable email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email_list_uuid ZeroTrustAccessPolicy#email_list_uuid}
  */
  readonly emailListUuid?: string;
}

export function zeroTrustAccessPolicyApprovalGroupsToTerraform(struct?: ZeroTrustAccessPolicyApprovalGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approvals_needed: cdktf.numberToTerraform(struct!.approvalsNeeded),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
    email_list_uuid: cdktf.stringToTerraform(struct!.emailListUuid),
  }
}


export function zeroTrustAccessPolicyApprovalGroupsToHclTerraform(struct?: ZeroTrustAccessPolicyApprovalGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approvals_needed: {
      value: cdktf.numberToHclTerraform(struct!.approvalsNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_list_uuid: {
      value: cdktf.stringToHclTerraform(struct!.emailListUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyApprovalGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyApprovalGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalsNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalsNeeded = this._approvalsNeeded;
    }
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._emailListUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailListUuid = this._emailListUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyApprovalGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalsNeeded = undefined;
      this._emailAddresses = undefined;
      this._emailListUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvalsNeeded = value.approvalsNeeded;
      this._emailAddresses = value.emailAddresses;
      this._emailListUuid = value.emailListUuid;
    }
  }

  // approvals_needed - computed: false, optional: false, required: true
  private _approvalsNeeded?: number; 
  public get approvalsNeeded() {
    return this.getNumberAttribute('approvals_needed');
  }
  public set approvalsNeeded(value: number) {
    this._approvalsNeeded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalsNeededInput() {
    return this._approvalsNeeded;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // email_list_uuid - computed: false, optional: true, required: false
  private _emailListUuid?: string; 
  public get emailListUuid() {
    return this.getStringAttribute('email_list_uuid');
  }
  public set emailListUuid(value: string) {
    this._emailListUuid = value;
  }
  public resetEmailListUuid() {
    this._emailListUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListUuidInput() {
    return this._emailListUuid;
  }
}

export class ZeroTrustAccessPolicyApprovalGroupsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyApprovalGroups[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyApprovalGroupsOutputReference {
    return new ZeroTrustAccessPolicyApprovalGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyExcludeAnyValidServiceToken {
}

export function zeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyExcludeAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeAnyValidServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeAnyValidServiceToken | cdktf.IResolvable | undefined) {
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
}
export interface ZeroTrustAccessPolicyExcludeAuthContext {
  /**
  * The ACID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyExcludeAuthContextToTerraform(struct?: ZeroTrustAccessPolicyExcludeAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_id: cdktf.stringToTerraform(struct!.acId),
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyExcludeAuthContextToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_id: {
      value: cdktf.stringToHclTerraform(struct!.acId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeAuthContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeAuthContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acId = this._acId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeAuthContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acId = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acId = value.acId;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // ac_id - computed: false, optional: false, required: true
  private _acId?: string; 
  public get acId() {
    return this.getStringAttribute('ac_id');
  }
  public set acId(value: string) {
    this._acId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acIdInput() {
    return this._acId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyExcludeAuthMethod {
  /**
  * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
  */
  readonly authMethod: string;
}

export function zeroTrustAccessPolicyExcludeAuthMethodToTerraform(struct?: ZeroTrustAccessPolicyExcludeAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
  }
}


export function zeroTrustAccessPolicyExcludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeAuthMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeAuthMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
    }
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }
}
export interface ZeroTrustAccessPolicyExcludeAzureAd {
  /**
  * The ID of an Azure group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyExcludeAzureAdToTerraform(struct?: ZeroTrustAccessPolicyExcludeAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyExcludeAzureAdToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeAzureAd | cdktf.IResolvable): any {
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
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeAzureAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeAzureAd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeAzureAd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyExcludeCertificate {
}

export function zeroTrustAccessPolicyExcludeCertificateToTerraform(struct?: ZeroTrustAccessPolicyExcludeCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessPolicyExcludeCertificateToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessPolicyExcludeCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeCertificate | cdktf.IResolvable | undefined) {
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
}
export interface ZeroTrustAccessPolicyExcludeCommonName {
  /**
  * The common name to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
  */
  readonly commonName: string;
}

export function zeroTrustAccessPolicyExcludeCommonNameToTerraform(struct?: ZeroTrustAccessPolicyExcludeCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
  }
}


export function zeroTrustAccessPolicyExcludeCommonNameToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeCommonName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeCommonName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }
}
export interface ZeroTrustAccessPolicyExcludeDevicePosture {
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#integration_uid ZeroTrustAccessPolicy#integration_uid}
  */
  readonly integrationUid: string;
}

export function zeroTrustAccessPolicyExcludeDevicePostureToTerraform(struct?: ZeroTrustAccessPolicyExcludeDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_uid: cdktf.stringToTerraform(struct!.integrationUid),
  }
}


export function zeroTrustAccessPolicyExcludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_uid: {
      value: cdktf.stringToHclTerraform(struct!.integrationUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeDevicePosture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationUid = this._integrationUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeDevicePosture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationUid = value.integrationUid;
    }
  }

  // integration_uid - computed: false, optional: false, required: true
  private _integrationUid?: string; 
  public get integrationUid() {
    return this.getStringAttribute('integration_uid');
  }
  public set integrationUid(value: string) {
    this._integrationUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUidInput() {
    return this._integrationUid;
  }
}
export interface ZeroTrustAccessPolicyExcludeEmail {
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email: string;
}

export function zeroTrustAccessPolicyExcludeEmailToTerraform(struct?: ZeroTrustAccessPolicyExcludeEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function zeroTrustAccessPolicyExcludeEmailToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface ZeroTrustAccessPolicyExcludeEmailDomain {
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#domain ZeroTrustAccessPolicy#domain}
  */
  readonly domain: string;
}

export function zeroTrustAccessPolicyExcludeEmailDomainToTerraform(struct?: ZeroTrustAccessPolicyExcludeEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function zeroTrustAccessPolicyExcludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeEmailDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeEmailDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface ZeroTrustAccessPolicyExcludeEmailListStruct {
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyExcludeEmailListStructToTerraform(struct?: ZeroTrustAccessPolicyExcludeEmailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyExcludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeEmailListStruct | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeEmailListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyExcludeEmailListStruct | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyExcludeEveryone {
}

export function zeroTrustAccessPolicyExcludeEveryoneToTerraform(struct?: ZeroTrustAccessPolicyExcludeEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessPolicyExcludeEveryoneToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessPolicyExcludeEveryoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeEveryone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeEveryone | cdktf.IResolvable | undefined) {
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
}
export interface ZeroTrustAccessPolicyExcludeExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}
  */
  readonly evaluateUrl: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}
  */
  readonly keysUrl: string;
}

export function zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessPolicyExcludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluate_url: {
      value: cdktf.stringToHclTerraform(struct!.evaluateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys_url: {
      value: cdktf.stringToHclTerraform(struct!.keysUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeExternalEvaluation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateUrl = this._evaluateUrl;
    }
    if (this._keysUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keysUrl = this._keysUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeExternalEvaluation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluateUrl = undefined;
      this._keysUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluateUrl = value.evaluateUrl;
      this._keysUrl = value.keysUrl;
    }
  }

  // evaluate_url - computed: false, optional: false, required: true
  private _evaluateUrl?: string; 
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }
  public set evaluateUrl(value: string) {
    this._evaluateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateUrlInput() {
    return this._evaluateUrl;
  }

  // keys_url - computed: false, optional: false, required: true
  private _keysUrl?: string; 
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
  public set keysUrl(value: string) {
    this._keysUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysUrlInput() {
    return this._keysUrl;
  }
}
export interface ZeroTrustAccessPolicyExcludeGeo {
  /**
  * The country code that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#country_code ZeroTrustAccessPolicy#country_code}
  */
  readonly countryCode: string;
}

export function zeroTrustAccessPolicyExcludeGeoToTerraform(struct?: ZeroTrustAccessPolicyExcludeGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
  }
}


export function zeroTrustAccessPolicyExcludeGeoToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeGeo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
    }
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }
}
export interface ZeroTrustAccessPolicyExcludeGithubOrganization {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name: string;
  /**
  * The name of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#team ZeroTrustAccessPolicy#team}
  */
  readonly team?: string;
}

export function zeroTrustAccessPolicyExcludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessPolicyExcludeGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function zeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
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
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeGithubOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeGithubOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
      this._team = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
      this._team = value.team;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface ZeroTrustAccessPolicyExcludeGroup {
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyExcludeGroupToTerraform(struct?: ZeroTrustAccessPolicyExcludeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyExcludeGroupToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeGroup | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyExcludeGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyExcludeGroup | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyExcludeGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email: string;
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyExcludeGsuiteToTerraform(struct?: ZeroTrustAccessPolicyExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyExcludeGsuiteToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeGsuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeGsuite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeGsuite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyExcludeIp {
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
  */
  readonly ip: string;
}

export function zeroTrustAccessPolicyExcludeIpToTerraform(struct?: ZeroTrustAccessPolicyExcludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function zeroTrustAccessPolicyExcludeIpToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface ZeroTrustAccessPolicyExcludeIpListStruct {
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyExcludeIpListStructToTerraform(struct?: ZeroTrustAccessPolicyExcludeIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyExcludeIpListStructToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeIpListStruct | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyExcludeIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeIpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyExcludeIpListStruct | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyExcludeLoginMethod {
  /**
  * The ID of an identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyExcludeLoginMethodToTerraform(struct?: ZeroTrustAccessPolicyExcludeLoginMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyExcludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeLoginMethod | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeLoginMethod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyExcludeLoginMethod | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyExcludeOidc {
  /**
  * The name of the OIDC claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#claim_name ZeroTrustAccessPolicy#claim_name}
  */
  readonly claimName: string;
  /**
  * The OIDC claim value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#claim_value ZeroTrustAccessPolicy#claim_value}
  */
  readonly claimValue: string;
  /**
  * The ID of your OIDC identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyExcludeOidcToTerraform(struct?: ZeroTrustAccessPolicyExcludeOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    claim_value: cdktf.stringToTerraform(struct!.claimValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyExcludeOidcToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_value: {
      value: cdktf.stringToHclTerraform(struct!.claimValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._claimValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimValue = this._claimValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._claimValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._claimValue = value.claimValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // claim_value - computed: false, optional: false, required: true
  private _claimValue?: string; 
  public get claimValue() {
    return this.getStringAttribute('claim_value');
  }
  public set claimValue(value: string) {
    this._claimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValueInput() {
    return this._claimValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyExcludeOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the Okta group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name: string;
}

export function zeroTrustAccessPolicyExcludeOktaToTerraform(struct?: ZeroTrustAccessPolicyExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessPolicyExcludeOktaToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
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

export class ZeroTrustAccessPolicyExcludeOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeOkta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeOkta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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
export interface ZeroTrustAccessPolicyExcludeSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}
  */
  readonly attributeValue: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyExcludeSamlToTerraform(struct?: ZeroTrustAccessPolicyExcludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyExcludeSamlToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyExcludeServiceToken {
  /**
  * The ID of a Service Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#token_id ZeroTrustAccessPolicy#token_id}
  */
  readonly tokenId: string;
}

export function zeroTrustAccessPolicyExcludeServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyExcludeServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_id: cdktf.stringToTerraform(struct!.tokenId),
  }
}


export function zeroTrustAccessPolicyExcludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyExcludeServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExcludeServiceToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenId = value.tokenId;
    }
  }

  // token_id - computed: false, optional: false, required: true
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }
}
export interface ZeroTrustAccessPolicyExclude {
  /**
  * An empty object which matches on all service tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: ZeroTrustAccessPolicyExcludeAnyValidServiceToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}
  */
  readonly authContext?: ZeroTrustAccessPolicyExcludeAuthContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
  */
  readonly authMethod?: ZeroTrustAccessPolicyExcludeAuthMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#azure_ad ZeroTrustAccessPolicy#azure_ad}
  */
  readonly azureAd?: ZeroTrustAccessPolicyExcludeAzureAd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}
  */
  readonly certificate?: ZeroTrustAccessPolicyExcludeCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
  */
  readonly commonName?: ZeroTrustAccessPolicyExcludeCommonName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}
  */
  readonly devicePosture?: ZeroTrustAccessPolicyExcludeDevicePosture;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email?: ZeroTrustAccessPolicyExcludeEmail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}
  */
  readonly emailDomain?: ZeroTrustAccessPolicyExcludeEmailDomain;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}
  */
  readonly emailList?: ZeroTrustAccessPolicyExcludeEmailListStruct;
  /**
  * An empty object which matches on all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}
  */
  readonly everyone?: ZeroTrustAccessPolicyExcludeEveryone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessPolicyExcludeExternalEvaluation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}
  */
  readonly geo?: ZeroTrustAccessPolicyExcludeGeo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#github_organization ZeroTrustAccessPolicy#github_organization}
  */
  readonly githubOrganization?: ZeroTrustAccessPolicyExcludeGithubOrganization;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}
  */
  readonly group?: ZeroTrustAccessPolicyExcludeGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessPolicyExcludeGsuite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
  */
  readonly ip?: ZeroTrustAccessPolicyExcludeIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}
  */
  readonly ipList?: ZeroTrustAccessPolicyExcludeIpListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}
  */
  readonly loginMethod?: ZeroTrustAccessPolicyExcludeLoginMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#oidc ZeroTrustAccessPolicy#oidc}
  */
  readonly oidc?: ZeroTrustAccessPolicyExcludeOidc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}
  */
  readonly okta?: ZeroTrustAccessPolicyExcludeOkta;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}
  */
  readonly saml?: ZeroTrustAccessPolicyExcludeSaml;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}
  */
  readonly serviceToken?: ZeroTrustAccessPolicyExcludeServiceToken;
}

export function zeroTrustAccessPolicyExcludeToTerraform(struct?: ZeroTrustAccessPolicyExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: zeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform(struct!.anyValidServiceToken),
    auth_context: zeroTrustAccessPolicyExcludeAuthContextToTerraform(struct!.authContext),
    auth_method: zeroTrustAccessPolicyExcludeAuthMethodToTerraform(struct!.authMethod),
    azure_ad: zeroTrustAccessPolicyExcludeAzureAdToTerraform(struct!.azureAd),
    certificate: zeroTrustAccessPolicyExcludeCertificateToTerraform(struct!.certificate),
    common_name: zeroTrustAccessPolicyExcludeCommonNameToTerraform(struct!.commonName),
    device_posture: zeroTrustAccessPolicyExcludeDevicePostureToTerraform(struct!.devicePosture),
    email: zeroTrustAccessPolicyExcludeEmailToTerraform(struct!.email),
    email_domain: zeroTrustAccessPolicyExcludeEmailDomainToTerraform(struct!.emailDomain),
    email_list: zeroTrustAccessPolicyExcludeEmailListStructToTerraform(struct!.emailList),
    everyone: zeroTrustAccessPolicyExcludeEveryoneToTerraform(struct!.everyone),
    external_evaluation: zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform(struct!.externalEvaluation),
    geo: zeroTrustAccessPolicyExcludeGeoToTerraform(struct!.geo),
    github_organization: zeroTrustAccessPolicyExcludeGithubOrganizationToTerraform(struct!.githubOrganization),
    group: zeroTrustAccessPolicyExcludeGroupToTerraform(struct!.group),
    gsuite: zeroTrustAccessPolicyExcludeGsuiteToTerraform(struct!.gsuite),
    ip: zeroTrustAccessPolicyExcludeIpToTerraform(struct!.ip),
    ip_list: zeroTrustAccessPolicyExcludeIpListStructToTerraform(struct!.ipList),
    login_method: zeroTrustAccessPolicyExcludeLoginMethodToTerraform(struct!.loginMethod),
    oidc: zeroTrustAccessPolicyExcludeOidcToTerraform(struct!.oidc),
    okta: zeroTrustAccessPolicyExcludeOktaToTerraform(struct!.okta),
    saml: zeroTrustAccessPolicyExcludeSamlToTerraform(struct!.saml),
    service_token: zeroTrustAccessPolicyExcludeServiceTokenToTerraform(struct!.serviceToken),
  }
}


export function zeroTrustAccessPolicyExcludeToHclTerraform(struct?: ZeroTrustAccessPolicyExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_valid_service_token: {
      value: zeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform(struct!.anyValidServiceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeAnyValidServiceToken",
    },
    auth_context: {
      value: zeroTrustAccessPolicyExcludeAuthContextToHclTerraform(struct!.authContext),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeAuthContext",
    },
    auth_method: {
      value: zeroTrustAccessPolicyExcludeAuthMethodToHclTerraform(struct!.authMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeAuthMethod",
    },
    azure_ad: {
      value: zeroTrustAccessPolicyExcludeAzureAdToHclTerraform(struct!.azureAd),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeAzureAd",
    },
    certificate: {
      value: zeroTrustAccessPolicyExcludeCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeCertificate",
    },
    common_name: {
      value: zeroTrustAccessPolicyExcludeCommonNameToHclTerraform(struct!.commonName),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeCommonName",
    },
    device_posture: {
      value: zeroTrustAccessPolicyExcludeDevicePostureToHclTerraform(struct!.devicePosture),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeDevicePosture",
    },
    email: {
      value: zeroTrustAccessPolicyExcludeEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeEmail",
    },
    email_domain: {
      value: zeroTrustAccessPolicyExcludeEmailDomainToHclTerraform(struct!.emailDomain),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeEmailDomain",
    },
    email_list: {
      value: zeroTrustAccessPolicyExcludeEmailListStructToHclTerraform(struct!.emailList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeEmailListStruct",
    },
    everyone: {
      value: zeroTrustAccessPolicyExcludeEveryoneToHclTerraform(struct!.everyone),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeEveryone",
    },
    external_evaluation: {
      value: zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeExternalEvaluation",
    },
    geo: {
      value: zeroTrustAccessPolicyExcludeGeoToHclTerraform(struct!.geo),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeGeo",
    },
    github_organization: {
      value: zeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform(struct!.githubOrganization),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeGithubOrganization",
    },
    group: {
      value: zeroTrustAccessPolicyExcludeGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeGroup",
    },
    gsuite: {
      value: zeroTrustAccessPolicyExcludeGsuiteToHclTerraform(struct!.gsuite),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeGsuite",
    },
    ip: {
      value: zeroTrustAccessPolicyExcludeIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeIp",
    },
    ip_list: {
      value: zeroTrustAccessPolicyExcludeIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeIpListStruct",
    },
    login_method: {
      value: zeroTrustAccessPolicyExcludeLoginMethodToHclTerraform(struct!.loginMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeLoginMethod",
    },
    oidc: {
      value: zeroTrustAccessPolicyExcludeOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeOidc",
    },
    okta: {
      value: zeroTrustAccessPolicyExcludeOktaToHclTerraform(struct!.okta),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeOkta",
    },
    saml: {
      value: zeroTrustAccessPolicyExcludeSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeSaml",
    },
    service_token: {
      value: zeroTrustAccessPolicyExcludeServiceTokenToHclTerraform(struct!.serviceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyExcludeServiceToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyValidServiceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
    }
    if (this._authContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContext = this._authContext?.internalValue;
    }
    if (this._authMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod?.internalValue;
    }
    if (this._azureAd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAd = this._azureAd?.internalValue;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._commonName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName?.internalValue;
    }
    if (this._devicePosture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePosture = this._devicePosture?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._emailDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailDomain = this._emailDomain?.internalValue;
    }
    if (this._emailList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList?.internalValue;
    }
    if (this._everyone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyone = this._everyone?.internalValue;
    }
    if (this._externalEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
    }
    if (this._geo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo?.internalValue;
    }
    if (this._githubOrganization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._gsuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsuite = this._gsuite?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._loginMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethod = this._loginMethod?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    if (this._serviceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = undefined;
      this._authContext.internalValue = undefined;
      this._authMethod.internalValue = undefined;
      this._azureAd.internalValue = undefined;
      this._certificate.internalValue = undefined;
      this._commonName.internalValue = undefined;
      this._devicePosture.internalValue = undefined;
      this._email.internalValue = undefined;
      this._emailDomain.internalValue = undefined;
      this._emailList.internalValue = undefined;
      this._everyone.internalValue = undefined;
      this._externalEvaluation.internalValue = undefined;
      this._geo.internalValue = undefined;
      this._githubOrganization.internalValue = undefined;
      this._group.internalValue = undefined;
      this._gsuite.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._loginMethod.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._saml.internalValue = undefined;
      this._serviceToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
      this._authContext.internalValue = value.authContext;
      this._authMethod.internalValue = value.authMethod;
      this._azureAd.internalValue = value.azureAd;
      this._certificate.internalValue = value.certificate;
      this._commonName.internalValue = value.commonName;
      this._devicePosture.internalValue = value.devicePosture;
      this._email.internalValue = value.email;
      this._emailDomain.internalValue = value.emailDomain;
      this._emailList.internalValue = value.emailList;
      this._everyone.internalValue = value.everyone;
      this._externalEvaluation.internalValue = value.externalEvaluation;
      this._geo.internalValue = value.geo;
      this._githubOrganization.internalValue = value.githubOrganization;
      this._group.internalValue = value.group;
      this._gsuite.internalValue = value.gsuite;
      this._ip.internalValue = value.ip;
      this._ipList.internalValue = value.ipList;
      this._loginMethod.internalValue = value.loginMethod;
      this._oidc.internalValue = value.oidc;
      this._okta.internalValue = value.okta;
      this._saml.internalValue = value.saml;
      this._serviceToken.internalValue = value.serviceToken;
    }
  }

  // any_valid_service_token - computed: false, optional: true, required: false
  private _anyValidServiceToken = new ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
  public get anyValidServiceToken() {
    return this._anyValidServiceToken;
  }
  public putAnyValidServiceToken(value: ZeroTrustAccessPolicyExcludeAnyValidServiceToken) {
    this._anyValidServiceToken.internalValue = value;
  }
  public resetAnyValidServiceToken() {
    this._anyValidServiceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyValidServiceTokenInput() {
    return this._anyValidServiceToken.internalValue;
  }

  // auth_context - computed: false, optional: true, required: false
  private _authContext = new ZeroTrustAccessPolicyExcludeAuthContextOutputReference(this, "auth_context");
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessPolicyExcludeAuthContext) {
    this._authContext.internalValue = value;
  }
  public resetAuthContext() {
    this._authContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextInput() {
    return this._authContext.internalValue;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod = new ZeroTrustAccessPolicyExcludeAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }
  public putAuthMethod(value: ZeroTrustAccessPolicyExcludeAuthMethod) {
    this._authMethod.internalValue = value;
  }
  public resetAuthMethod() {
    this._authMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod.internalValue;
  }

  // azure_ad - computed: false, optional: true, required: false
  private _azureAd = new ZeroTrustAccessPolicyExcludeAzureAdOutputReference(this, "azure_ad");
  public get azureAd() {
    return this._azureAd;
  }
  public putAzureAd(value: ZeroTrustAccessPolicyExcludeAzureAd) {
    this._azureAd.internalValue = value;
  }
  public resetAzureAd() {
    this._azureAd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdInput() {
    return this._azureAd.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ZeroTrustAccessPolicyExcludeCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ZeroTrustAccessPolicyExcludeCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName = new ZeroTrustAccessPolicyExcludeCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }
  public putCommonName(value: ZeroTrustAccessPolicyExcludeCommonName) {
    this._commonName.internalValue = value;
  }
  public resetCommonName() {
    this._commonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName.internalValue;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture = new ZeroTrustAccessPolicyExcludeDevicePostureOutputReference(this, "device_posture");
  public get devicePosture() {
    return this._devicePosture;
  }
  public putDevicePosture(value: ZeroTrustAccessPolicyExcludeDevicePosture) {
    this._devicePosture.internalValue = value;
  }
  public resetDevicePosture() {
    this._devicePosture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new ZeroTrustAccessPolicyExcludeEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: ZeroTrustAccessPolicyExcludeEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // email_domain - computed: false, optional: true, required: false
  private _emailDomain = new ZeroTrustAccessPolicyExcludeEmailDomainOutputReference(this, "email_domain");
  public get emailDomain() {
    return this._emailDomain;
  }
  public putEmailDomain(value: ZeroTrustAccessPolicyExcludeEmailDomain) {
    this._emailDomain.internalValue = value;
  }
  public resetEmailDomain() {
    this._emailDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain.internalValue;
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList = new ZeroTrustAccessPolicyExcludeEmailListStructOutputReference(this, "email_list");
  public get emailList() {
    return this._emailList;
  }
  public putEmailList(value: ZeroTrustAccessPolicyExcludeEmailListStruct) {
    this._emailList.internalValue = value;
  }
  public resetEmailList() {
    this._emailList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList.internalValue;
  }

  // everyone - computed: false, optional: true, required: false
  private _everyone = new ZeroTrustAccessPolicyExcludeEveryoneOutputReference(this, "everyone");
  public get everyone() {
    return this._everyone;
  }
  public putEveryone(value: ZeroTrustAccessPolicyExcludeEveryone) {
    this._everyone.internalValue = value;
  }
  public resetEveryone() {
    this._everyone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneInput() {
    return this._everyone.internalValue;
  }

  // external_evaluation - computed: false, optional: true, required: false
  private _externalEvaluation = new ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessPolicyExcludeExternalEvaluation) {
    this._externalEvaluation.internalValue = value;
  }
  public resetExternalEvaluation() {
    this._externalEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEvaluationInput() {
    return this._externalEvaluation.internalValue;
  }

  // geo - computed: false, optional: true, required: false
  private _geo = new ZeroTrustAccessPolicyExcludeGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }
  public putGeo(value: ZeroTrustAccessPolicyExcludeGeo) {
    this._geo.internalValue = value;
  }
  public resetGeo() {
    this._geo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo.internalValue;
  }

  // github_organization - computed: false, optional: true, required: false
  private _githubOrganization = new ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference(this, "github_organization");
  public get githubOrganization() {
    return this._githubOrganization;
  }
  public putGithubOrganization(value: ZeroTrustAccessPolicyExcludeGithubOrganization) {
    this._githubOrganization.internalValue = value;
  }
  public resetGithubOrganization() {
    this._githubOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganizationInput() {
    return this._githubOrganization.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new ZeroTrustAccessPolicyExcludeGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: ZeroTrustAccessPolicyExcludeGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // gsuite - computed: false, optional: true, required: false
  private _gsuite = new ZeroTrustAccessPolicyExcludeGsuiteOutputReference(this, "gsuite");
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessPolicyExcludeGsuite) {
    this._gsuite.internalValue = value;
  }
  public resetGsuite() {
    this._gsuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteInput() {
    return this._gsuite.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ZeroTrustAccessPolicyExcludeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: ZeroTrustAccessPolicyExcludeIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new ZeroTrustAccessPolicyExcludeIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: ZeroTrustAccessPolicyExcludeIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // login_method - computed: false, optional: true, required: false
  private _loginMethod = new ZeroTrustAccessPolicyExcludeLoginMethodOutputReference(this, "login_method");
  public get loginMethod() {
    return this._loginMethod;
  }
  public putLoginMethod(value: ZeroTrustAccessPolicyExcludeLoginMethod) {
    this._loginMethod.internalValue = value;
  }
  public resetLoginMethod() {
    this._loginMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new ZeroTrustAccessPolicyExcludeOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: ZeroTrustAccessPolicyExcludeOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new ZeroTrustAccessPolicyExcludeOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessPolicyExcludeOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new ZeroTrustAccessPolicyExcludeSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessPolicyExcludeSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken = new ZeroTrustAccessPolicyExcludeServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
  public putServiceToken(value: ZeroTrustAccessPolicyExcludeServiceToken) {
    this._serviceToken.internalValue = value;
  }
  public resetServiceToken() {
    this._serviceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken.internalValue;
  }
}

export class ZeroTrustAccessPolicyExcludeList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyExclude[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyExcludeOutputReference {
    return new ZeroTrustAccessPolicyExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyIncludeAnyValidServiceToken {
}

export function zeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyIncludeAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeAnyValidServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeAnyValidServiceToken | cdktf.IResolvable | undefined) {
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
}
export interface ZeroTrustAccessPolicyIncludeAuthContext {
  /**
  * The ACID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyIncludeAuthContextToTerraform(struct?: ZeroTrustAccessPolicyIncludeAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_id: cdktf.stringToTerraform(struct!.acId),
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyIncludeAuthContextToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_id: {
      value: cdktf.stringToHclTerraform(struct!.acId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeAuthContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeAuthContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acId = this._acId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeAuthContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acId = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acId = value.acId;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // ac_id - computed: false, optional: false, required: true
  private _acId?: string; 
  public get acId() {
    return this.getStringAttribute('ac_id');
  }
  public set acId(value: string) {
    this._acId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acIdInput() {
    return this._acId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyIncludeAuthMethod {
  /**
  * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
  */
  readonly authMethod: string;
}

export function zeroTrustAccessPolicyIncludeAuthMethodToTerraform(struct?: ZeroTrustAccessPolicyIncludeAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
  }
}


export function zeroTrustAccessPolicyIncludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeAuthMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeAuthMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
    }
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }
}
export interface ZeroTrustAccessPolicyIncludeAzureAd {
  /**
  * The ID of an Azure group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyIncludeAzureAdToTerraform(struct?: ZeroTrustAccessPolicyIncludeAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyIncludeAzureAdToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeAzureAd | cdktf.IResolvable): any {
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
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeAzureAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeAzureAd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeAzureAd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyIncludeCertificate {
}

export function zeroTrustAccessPolicyIncludeCertificateToTerraform(struct?: ZeroTrustAccessPolicyIncludeCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessPolicyIncludeCertificateToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessPolicyIncludeCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeCertificate | cdktf.IResolvable | undefined) {
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
}
export interface ZeroTrustAccessPolicyIncludeCommonName {
  /**
  * The common name to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
  */
  readonly commonName: string;
}

export function zeroTrustAccessPolicyIncludeCommonNameToTerraform(struct?: ZeroTrustAccessPolicyIncludeCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
  }
}


export function zeroTrustAccessPolicyIncludeCommonNameToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeCommonName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeCommonName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }
}
export interface ZeroTrustAccessPolicyIncludeDevicePosture {
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#integration_uid ZeroTrustAccessPolicy#integration_uid}
  */
  readonly integrationUid: string;
}

export function zeroTrustAccessPolicyIncludeDevicePostureToTerraform(struct?: ZeroTrustAccessPolicyIncludeDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_uid: cdktf.stringToTerraform(struct!.integrationUid),
  }
}


export function zeroTrustAccessPolicyIncludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_uid: {
      value: cdktf.stringToHclTerraform(struct!.integrationUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeDevicePosture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationUid = this._integrationUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeDevicePosture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationUid = value.integrationUid;
    }
  }

  // integration_uid - computed: false, optional: false, required: true
  private _integrationUid?: string; 
  public get integrationUid() {
    return this.getStringAttribute('integration_uid');
  }
  public set integrationUid(value: string) {
    this._integrationUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUidInput() {
    return this._integrationUid;
  }
}
export interface ZeroTrustAccessPolicyIncludeEmail {
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email: string;
}

export function zeroTrustAccessPolicyIncludeEmailToTerraform(struct?: ZeroTrustAccessPolicyIncludeEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function zeroTrustAccessPolicyIncludeEmailToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface ZeroTrustAccessPolicyIncludeEmailDomain {
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#domain ZeroTrustAccessPolicy#domain}
  */
  readonly domain: string;
}

export function zeroTrustAccessPolicyIncludeEmailDomainToTerraform(struct?: ZeroTrustAccessPolicyIncludeEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function zeroTrustAccessPolicyIncludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeEmailDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeEmailDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface ZeroTrustAccessPolicyIncludeEmailListStruct {
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyIncludeEmailListStructToTerraform(struct?: ZeroTrustAccessPolicyIncludeEmailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyIncludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeEmailListStruct | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeEmailListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyIncludeEmailListStruct | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyIncludeEveryone {
}

export function zeroTrustAccessPolicyIncludeEveryoneToTerraform(struct?: ZeroTrustAccessPolicyIncludeEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessPolicyIncludeEveryoneToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessPolicyIncludeEveryoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeEveryone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeEveryone | cdktf.IResolvable | undefined) {
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
}
export interface ZeroTrustAccessPolicyIncludeExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}
  */
  readonly evaluateUrl: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}
  */
  readonly keysUrl: string;
}

export function zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessPolicyIncludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluate_url: {
      value: cdktf.stringToHclTerraform(struct!.evaluateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys_url: {
      value: cdktf.stringToHclTerraform(struct!.keysUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeExternalEvaluation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateUrl = this._evaluateUrl;
    }
    if (this._keysUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keysUrl = this._keysUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeExternalEvaluation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluateUrl = undefined;
      this._keysUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluateUrl = value.evaluateUrl;
      this._keysUrl = value.keysUrl;
    }
  }

  // evaluate_url - computed: false, optional: false, required: true
  private _evaluateUrl?: string; 
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }
  public set evaluateUrl(value: string) {
    this._evaluateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateUrlInput() {
    return this._evaluateUrl;
  }

  // keys_url - computed: false, optional: false, required: true
  private _keysUrl?: string; 
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
  public set keysUrl(value: string) {
    this._keysUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysUrlInput() {
    return this._keysUrl;
  }
}
export interface ZeroTrustAccessPolicyIncludeGeo {
  /**
  * The country code that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#country_code ZeroTrustAccessPolicy#country_code}
  */
  readonly countryCode: string;
}

export function zeroTrustAccessPolicyIncludeGeoToTerraform(struct?: ZeroTrustAccessPolicyIncludeGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
  }
}


export function zeroTrustAccessPolicyIncludeGeoToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeGeo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
    }
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }
}
export interface ZeroTrustAccessPolicyIncludeGithubOrganization {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name: string;
  /**
  * The name of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#team ZeroTrustAccessPolicy#team}
  */
  readonly team?: string;
}

export function zeroTrustAccessPolicyIncludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessPolicyIncludeGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function zeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
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
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeGithubOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeGithubOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
      this._team = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
      this._team = value.team;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface ZeroTrustAccessPolicyIncludeGroup {
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyIncludeGroupToTerraform(struct?: ZeroTrustAccessPolicyIncludeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyIncludeGroupToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeGroup | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyIncludeGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyIncludeGroup | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyIncludeGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email: string;
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyIncludeGsuiteToTerraform(struct?: ZeroTrustAccessPolicyIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyIncludeGsuiteToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeGsuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeGsuite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeGsuite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyIncludeIp {
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
  */
  readonly ip: string;
}

export function zeroTrustAccessPolicyIncludeIpToTerraform(struct?: ZeroTrustAccessPolicyIncludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function zeroTrustAccessPolicyIncludeIpToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface ZeroTrustAccessPolicyIncludeIpListStruct {
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyIncludeIpListStructToTerraform(struct?: ZeroTrustAccessPolicyIncludeIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyIncludeIpListStructToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeIpListStruct | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyIncludeIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeIpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyIncludeIpListStruct | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyIncludeLoginMethod {
  /**
  * The ID of an identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyIncludeLoginMethodToTerraform(struct?: ZeroTrustAccessPolicyIncludeLoginMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyIncludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeLoginMethod | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeLoginMethod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyIncludeLoginMethod | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyIncludeOidc {
  /**
  * The name of the OIDC claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#claim_name ZeroTrustAccessPolicy#claim_name}
  */
  readonly claimName: string;
  /**
  * The OIDC claim value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#claim_value ZeroTrustAccessPolicy#claim_value}
  */
  readonly claimValue: string;
  /**
  * The ID of your OIDC identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyIncludeOidcToTerraform(struct?: ZeroTrustAccessPolicyIncludeOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    claim_value: cdktf.stringToTerraform(struct!.claimValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyIncludeOidcToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_value: {
      value: cdktf.stringToHclTerraform(struct!.claimValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._claimValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimValue = this._claimValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._claimValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._claimValue = value.claimValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // claim_value - computed: false, optional: false, required: true
  private _claimValue?: string; 
  public get claimValue() {
    return this.getStringAttribute('claim_value');
  }
  public set claimValue(value: string) {
    this._claimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValueInput() {
    return this._claimValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyIncludeOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the Okta group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name: string;
}

export function zeroTrustAccessPolicyIncludeOktaToTerraform(struct?: ZeroTrustAccessPolicyIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessPolicyIncludeOktaToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
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

export class ZeroTrustAccessPolicyIncludeOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeOkta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeOkta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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
export interface ZeroTrustAccessPolicyIncludeSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}
  */
  readonly attributeValue: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyIncludeSamlToTerraform(struct?: ZeroTrustAccessPolicyIncludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyIncludeSamlToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyIncludeServiceToken {
  /**
  * The ID of a Service Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#token_id ZeroTrustAccessPolicy#token_id}
  */
  readonly tokenId: string;
}

export function zeroTrustAccessPolicyIncludeServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyIncludeServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_id: cdktf.stringToTerraform(struct!.tokenId),
  }
}


export function zeroTrustAccessPolicyIncludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyIncludeServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyIncludeServiceToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenId = value.tokenId;
    }
  }

  // token_id - computed: false, optional: false, required: true
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }
}
export interface ZeroTrustAccessPolicyInclude {
  /**
  * An empty object which matches on all service tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: ZeroTrustAccessPolicyIncludeAnyValidServiceToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}
  */
  readonly authContext?: ZeroTrustAccessPolicyIncludeAuthContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
  */
  readonly authMethod?: ZeroTrustAccessPolicyIncludeAuthMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#azure_ad ZeroTrustAccessPolicy#azure_ad}
  */
  readonly azureAd?: ZeroTrustAccessPolicyIncludeAzureAd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}
  */
  readonly certificate?: ZeroTrustAccessPolicyIncludeCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
  */
  readonly commonName?: ZeroTrustAccessPolicyIncludeCommonName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}
  */
  readonly devicePosture?: ZeroTrustAccessPolicyIncludeDevicePosture;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email?: ZeroTrustAccessPolicyIncludeEmail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}
  */
  readonly emailDomain?: ZeroTrustAccessPolicyIncludeEmailDomain;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}
  */
  readonly emailList?: ZeroTrustAccessPolicyIncludeEmailListStruct;
  /**
  * An empty object which matches on all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}
  */
  readonly everyone?: ZeroTrustAccessPolicyIncludeEveryone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessPolicyIncludeExternalEvaluation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}
  */
  readonly geo?: ZeroTrustAccessPolicyIncludeGeo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#github_organization ZeroTrustAccessPolicy#github_organization}
  */
  readonly githubOrganization?: ZeroTrustAccessPolicyIncludeGithubOrganization;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}
  */
  readonly group?: ZeroTrustAccessPolicyIncludeGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessPolicyIncludeGsuite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
  */
  readonly ip?: ZeroTrustAccessPolicyIncludeIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}
  */
  readonly ipList?: ZeroTrustAccessPolicyIncludeIpListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}
  */
  readonly loginMethod?: ZeroTrustAccessPolicyIncludeLoginMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#oidc ZeroTrustAccessPolicy#oidc}
  */
  readonly oidc?: ZeroTrustAccessPolicyIncludeOidc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}
  */
  readonly okta?: ZeroTrustAccessPolicyIncludeOkta;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}
  */
  readonly saml?: ZeroTrustAccessPolicyIncludeSaml;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}
  */
  readonly serviceToken?: ZeroTrustAccessPolicyIncludeServiceToken;
}

export function zeroTrustAccessPolicyIncludeToTerraform(struct?: ZeroTrustAccessPolicyInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: zeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform(struct!.anyValidServiceToken),
    auth_context: zeroTrustAccessPolicyIncludeAuthContextToTerraform(struct!.authContext),
    auth_method: zeroTrustAccessPolicyIncludeAuthMethodToTerraform(struct!.authMethod),
    azure_ad: zeroTrustAccessPolicyIncludeAzureAdToTerraform(struct!.azureAd),
    certificate: zeroTrustAccessPolicyIncludeCertificateToTerraform(struct!.certificate),
    common_name: zeroTrustAccessPolicyIncludeCommonNameToTerraform(struct!.commonName),
    device_posture: zeroTrustAccessPolicyIncludeDevicePostureToTerraform(struct!.devicePosture),
    email: zeroTrustAccessPolicyIncludeEmailToTerraform(struct!.email),
    email_domain: zeroTrustAccessPolicyIncludeEmailDomainToTerraform(struct!.emailDomain),
    email_list: zeroTrustAccessPolicyIncludeEmailListStructToTerraform(struct!.emailList),
    everyone: zeroTrustAccessPolicyIncludeEveryoneToTerraform(struct!.everyone),
    external_evaluation: zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform(struct!.externalEvaluation),
    geo: zeroTrustAccessPolicyIncludeGeoToTerraform(struct!.geo),
    github_organization: zeroTrustAccessPolicyIncludeGithubOrganizationToTerraform(struct!.githubOrganization),
    group: zeroTrustAccessPolicyIncludeGroupToTerraform(struct!.group),
    gsuite: zeroTrustAccessPolicyIncludeGsuiteToTerraform(struct!.gsuite),
    ip: zeroTrustAccessPolicyIncludeIpToTerraform(struct!.ip),
    ip_list: zeroTrustAccessPolicyIncludeIpListStructToTerraform(struct!.ipList),
    login_method: zeroTrustAccessPolicyIncludeLoginMethodToTerraform(struct!.loginMethod),
    oidc: zeroTrustAccessPolicyIncludeOidcToTerraform(struct!.oidc),
    okta: zeroTrustAccessPolicyIncludeOktaToTerraform(struct!.okta),
    saml: zeroTrustAccessPolicyIncludeSamlToTerraform(struct!.saml),
    service_token: zeroTrustAccessPolicyIncludeServiceTokenToTerraform(struct!.serviceToken),
  }
}


export function zeroTrustAccessPolicyIncludeToHclTerraform(struct?: ZeroTrustAccessPolicyInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_valid_service_token: {
      value: zeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform(struct!.anyValidServiceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeAnyValidServiceToken",
    },
    auth_context: {
      value: zeroTrustAccessPolicyIncludeAuthContextToHclTerraform(struct!.authContext),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeAuthContext",
    },
    auth_method: {
      value: zeroTrustAccessPolicyIncludeAuthMethodToHclTerraform(struct!.authMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeAuthMethod",
    },
    azure_ad: {
      value: zeroTrustAccessPolicyIncludeAzureAdToHclTerraform(struct!.azureAd),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeAzureAd",
    },
    certificate: {
      value: zeroTrustAccessPolicyIncludeCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeCertificate",
    },
    common_name: {
      value: zeroTrustAccessPolicyIncludeCommonNameToHclTerraform(struct!.commonName),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeCommonName",
    },
    device_posture: {
      value: zeroTrustAccessPolicyIncludeDevicePostureToHclTerraform(struct!.devicePosture),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeDevicePosture",
    },
    email: {
      value: zeroTrustAccessPolicyIncludeEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeEmail",
    },
    email_domain: {
      value: zeroTrustAccessPolicyIncludeEmailDomainToHclTerraform(struct!.emailDomain),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeEmailDomain",
    },
    email_list: {
      value: zeroTrustAccessPolicyIncludeEmailListStructToHclTerraform(struct!.emailList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeEmailListStruct",
    },
    everyone: {
      value: zeroTrustAccessPolicyIncludeEveryoneToHclTerraform(struct!.everyone),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeEveryone",
    },
    external_evaluation: {
      value: zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeExternalEvaluation",
    },
    geo: {
      value: zeroTrustAccessPolicyIncludeGeoToHclTerraform(struct!.geo),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeGeo",
    },
    github_organization: {
      value: zeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform(struct!.githubOrganization),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeGithubOrganization",
    },
    group: {
      value: zeroTrustAccessPolicyIncludeGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeGroup",
    },
    gsuite: {
      value: zeroTrustAccessPolicyIncludeGsuiteToHclTerraform(struct!.gsuite),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeGsuite",
    },
    ip: {
      value: zeroTrustAccessPolicyIncludeIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeIp",
    },
    ip_list: {
      value: zeroTrustAccessPolicyIncludeIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeIpListStruct",
    },
    login_method: {
      value: zeroTrustAccessPolicyIncludeLoginMethodToHclTerraform(struct!.loginMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeLoginMethod",
    },
    oidc: {
      value: zeroTrustAccessPolicyIncludeOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeOidc",
    },
    okta: {
      value: zeroTrustAccessPolicyIncludeOktaToHclTerraform(struct!.okta),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeOkta",
    },
    saml: {
      value: zeroTrustAccessPolicyIncludeSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeSaml",
    },
    service_token: {
      value: zeroTrustAccessPolicyIncludeServiceTokenToHclTerraform(struct!.serviceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyIncludeServiceToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyValidServiceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
    }
    if (this._authContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContext = this._authContext?.internalValue;
    }
    if (this._authMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod?.internalValue;
    }
    if (this._azureAd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAd = this._azureAd?.internalValue;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._commonName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName?.internalValue;
    }
    if (this._devicePosture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePosture = this._devicePosture?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._emailDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailDomain = this._emailDomain?.internalValue;
    }
    if (this._emailList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList?.internalValue;
    }
    if (this._everyone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyone = this._everyone?.internalValue;
    }
    if (this._externalEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
    }
    if (this._geo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo?.internalValue;
    }
    if (this._githubOrganization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._gsuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsuite = this._gsuite?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._loginMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethod = this._loginMethod?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    if (this._serviceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = undefined;
      this._authContext.internalValue = undefined;
      this._authMethod.internalValue = undefined;
      this._azureAd.internalValue = undefined;
      this._certificate.internalValue = undefined;
      this._commonName.internalValue = undefined;
      this._devicePosture.internalValue = undefined;
      this._email.internalValue = undefined;
      this._emailDomain.internalValue = undefined;
      this._emailList.internalValue = undefined;
      this._everyone.internalValue = undefined;
      this._externalEvaluation.internalValue = undefined;
      this._geo.internalValue = undefined;
      this._githubOrganization.internalValue = undefined;
      this._group.internalValue = undefined;
      this._gsuite.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._loginMethod.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._saml.internalValue = undefined;
      this._serviceToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
      this._authContext.internalValue = value.authContext;
      this._authMethod.internalValue = value.authMethod;
      this._azureAd.internalValue = value.azureAd;
      this._certificate.internalValue = value.certificate;
      this._commonName.internalValue = value.commonName;
      this._devicePosture.internalValue = value.devicePosture;
      this._email.internalValue = value.email;
      this._emailDomain.internalValue = value.emailDomain;
      this._emailList.internalValue = value.emailList;
      this._everyone.internalValue = value.everyone;
      this._externalEvaluation.internalValue = value.externalEvaluation;
      this._geo.internalValue = value.geo;
      this._githubOrganization.internalValue = value.githubOrganization;
      this._group.internalValue = value.group;
      this._gsuite.internalValue = value.gsuite;
      this._ip.internalValue = value.ip;
      this._ipList.internalValue = value.ipList;
      this._loginMethod.internalValue = value.loginMethod;
      this._oidc.internalValue = value.oidc;
      this._okta.internalValue = value.okta;
      this._saml.internalValue = value.saml;
      this._serviceToken.internalValue = value.serviceToken;
    }
  }

  // any_valid_service_token - computed: false, optional: true, required: false
  private _anyValidServiceToken = new ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
  public get anyValidServiceToken() {
    return this._anyValidServiceToken;
  }
  public putAnyValidServiceToken(value: ZeroTrustAccessPolicyIncludeAnyValidServiceToken) {
    this._anyValidServiceToken.internalValue = value;
  }
  public resetAnyValidServiceToken() {
    this._anyValidServiceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyValidServiceTokenInput() {
    return this._anyValidServiceToken.internalValue;
  }

  // auth_context - computed: false, optional: true, required: false
  private _authContext = new ZeroTrustAccessPolicyIncludeAuthContextOutputReference(this, "auth_context");
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessPolicyIncludeAuthContext) {
    this._authContext.internalValue = value;
  }
  public resetAuthContext() {
    this._authContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextInput() {
    return this._authContext.internalValue;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod = new ZeroTrustAccessPolicyIncludeAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }
  public putAuthMethod(value: ZeroTrustAccessPolicyIncludeAuthMethod) {
    this._authMethod.internalValue = value;
  }
  public resetAuthMethod() {
    this._authMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod.internalValue;
  }

  // azure_ad - computed: false, optional: true, required: false
  private _azureAd = new ZeroTrustAccessPolicyIncludeAzureAdOutputReference(this, "azure_ad");
  public get azureAd() {
    return this._azureAd;
  }
  public putAzureAd(value: ZeroTrustAccessPolicyIncludeAzureAd) {
    this._azureAd.internalValue = value;
  }
  public resetAzureAd() {
    this._azureAd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdInput() {
    return this._azureAd.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ZeroTrustAccessPolicyIncludeCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ZeroTrustAccessPolicyIncludeCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName = new ZeroTrustAccessPolicyIncludeCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }
  public putCommonName(value: ZeroTrustAccessPolicyIncludeCommonName) {
    this._commonName.internalValue = value;
  }
  public resetCommonName() {
    this._commonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName.internalValue;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture = new ZeroTrustAccessPolicyIncludeDevicePostureOutputReference(this, "device_posture");
  public get devicePosture() {
    return this._devicePosture;
  }
  public putDevicePosture(value: ZeroTrustAccessPolicyIncludeDevicePosture) {
    this._devicePosture.internalValue = value;
  }
  public resetDevicePosture() {
    this._devicePosture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new ZeroTrustAccessPolicyIncludeEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: ZeroTrustAccessPolicyIncludeEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // email_domain - computed: false, optional: true, required: false
  private _emailDomain = new ZeroTrustAccessPolicyIncludeEmailDomainOutputReference(this, "email_domain");
  public get emailDomain() {
    return this._emailDomain;
  }
  public putEmailDomain(value: ZeroTrustAccessPolicyIncludeEmailDomain) {
    this._emailDomain.internalValue = value;
  }
  public resetEmailDomain() {
    this._emailDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain.internalValue;
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList = new ZeroTrustAccessPolicyIncludeEmailListStructOutputReference(this, "email_list");
  public get emailList() {
    return this._emailList;
  }
  public putEmailList(value: ZeroTrustAccessPolicyIncludeEmailListStruct) {
    this._emailList.internalValue = value;
  }
  public resetEmailList() {
    this._emailList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList.internalValue;
  }

  // everyone - computed: false, optional: true, required: false
  private _everyone = new ZeroTrustAccessPolicyIncludeEveryoneOutputReference(this, "everyone");
  public get everyone() {
    return this._everyone;
  }
  public putEveryone(value: ZeroTrustAccessPolicyIncludeEveryone) {
    this._everyone.internalValue = value;
  }
  public resetEveryone() {
    this._everyone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneInput() {
    return this._everyone.internalValue;
  }

  // external_evaluation - computed: false, optional: true, required: false
  private _externalEvaluation = new ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessPolicyIncludeExternalEvaluation) {
    this._externalEvaluation.internalValue = value;
  }
  public resetExternalEvaluation() {
    this._externalEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEvaluationInput() {
    return this._externalEvaluation.internalValue;
  }

  // geo - computed: false, optional: true, required: false
  private _geo = new ZeroTrustAccessPolicyIncludeGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }
  public putGeo(value: ZeroTrustAccessPolicyIncludeGeo) {
    this._geo.internalValue = value;
  }
  public resetGeo() {
    this._geo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo.internalValue;
  }

  // github_organization - computed: false, optional: true, required: false
  private _githubOrganization = new ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference(this, "github_organization");
  public get githubOrganization() {
    return this._githubOrganization;
  }
  public putGithubOrganization(value: ZeroTrustAccessPolicyIncludeGithubOrganization) {
    this._githubOrganization.internalValue = value;
  }
  public resetGithubOrganization() {
    this._githubOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganizationInput() {
    return this._githubOrganization.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new ZeroTrustAccessPolicyIncludeGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: ZeroTrustAccessPolicyIncludeGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // gsuite - computed: false, optional: true, required: false
  private _gsuite = new ZeroTrustAccessPolicyIncludeGsuiteOutputReference(this, "gsuite");
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessPolicyIncludeGsuite) {
    this._gsuite.internalValue = value;
  }
  public resetGsuite() {
    this._gsuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteInput() {
    return this._gsuite.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ZeroTrustAccessPolicyIncludeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: ZeroTrustAccessPolicyIncludeIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new ZeroTrustAccessPolicyIncludeIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: ZeroTrustAccessPolicyIncludeIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // login_method - computed: false, optional: true, required: false
  private _loginMethod = new ZeroTrustAccessPolicyIncludeLoginMethodOutputReference(this, "login_method");
  public get loginMethod() {
    return this._loginMethod;
  }
  public putLoginMethod(value: ZeroTrustAccessPolicyIncludeLoginMethod) {
    this._loginMethod.internalValue = value;
  }
  public resetLoginMethod() {
    this._loginMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new ZeroTrustAccessPolicyIncludeOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: ZeroTrustAccessPolicyIncludeOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new ZeroTrustAccessPolicyIncludeOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessPolicyIncludeOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new ZeroTrustAccessPolicyIncludeSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessPolicyIncludeSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken = new ZeroTrustAccessPolicyIncludeServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
  public putServiceToken(value: ZeroTrustAccessPolicyIncludeServiceToken) {
    this._serviceToken.internalValue = value;
  }
  public resetServiceToken() {
    this._serviceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken.internalValue;
  }
}

export class ZeroTrustAccessPolicyIncludeList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyInclude[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyIncludeOutputReference {
    return new ZeroTrustAccessPolicyIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyRequireAnyValidServiceToken {
}

export function zeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyRequireAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyRequireAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireAnyValidServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireAnyValidServiceToken | cdktf.IResolvable | undefined) {
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
}
export interface ZeroTrustAccessPolicyRequireAuthContext {
  /**
  * The ACID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyRequireAuthContextToTerraform(struct?: ZeroTrustAccessPolicyRequireAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_id: cdktf.stringToTerraform(struct!.acId),
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyRequireAuthContextToHclTerraform(struct?: ZeroTrustAccessPolicyRequireAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_id: {
      value: cdktf.stringToHclTerraform(struct!.acId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireAuthContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireAuthContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acId = this._acId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireAuthContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acId = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acId = value.acId;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // ac_id - computed: false, optional: false, required: true
  private _acId?: string; 
  public get acId() {
    return this.getStringAttribute('ac_id');
  }
  public set acId(value: string) {
    this._acId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acIdInput() {
    return this._acId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyRequireAuthMethod {
  /**
  * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
  */
  readonly authMethod: string;
}

export function zeroTrustAccessPolicyRequireAuthMethodToTerraform(struct?: ZeroTrustAccessPolicyRequireAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
  }
}


export function zeroTrustAccessPolicyRequireAuthMethodToHclTerraform(struct?: ZeroTrustAccessPolicyRequireAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireAuthMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireAuthMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
    }
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }
}
export interface ZeroTrustAccessPolicyRequireAzureAd {
  /**
  * The ID of an Azure group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyRequireAzureAdToTerraform(struct?: ZeroTrustAccessPolicyRequireAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyRequireAzureAdToHclTerraform(struct?: ZeroTrustAccessPolicyRequireAzureAd | cdktf.IResolvable): any {
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
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireAzureAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireAzureAd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireAzureAd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyRequireCertificate {
}

export function zeroTrustAccessPolicyRequireCertificateToTerraform(struct?: ZeroTrustAccessPolicyRequireCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessPolicyRequireCertificateToHclTerraform(struct?: ZeroTrustAccessPolicyRequireCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessPolicyRequireCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireCertificate | cdktf.IResolvable | undefined) {
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
}
export interface ZeroTrustAccessPolicyRequireCommonName {
  /**
  * The common name to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
  */
  readonly commonName: string;
}

export function zeroTrustAccessPolicyRequireCommonNameToTerraform(struct?: ZeroTrustAccessPolicyRequireCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
  }
}


export function zeroTrustAccessPolicyRequireCommonNameToHclTerraform(struct?: ZeroTrustAccessPolicyRequireCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireCommonName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireCommonName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }
}
export interface ZeroTrustAccessPolicyRequireDevicePosture {
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#integration_uid ZeroTrustAccessPolicy#integration_uid}
  */
  readonly integrationUid: string;
}

export function zeroTrustAccessPolicyRequireDevicePostureToTerraform(struct?: ZeroTrustAccessPolicyRequireDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_uid: cdktf.stringToTerraform(struct!.integrationUid),
  }
}


export function zeroTrustAccessPolicyRequireDevicePostureToHclTerraform(struct?: ZeroTrustAccessPolicyRequireDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_uid: {
      value: cdktf.stringToHclTerraform(struct!.integrationUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireDevicePostureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireDevicePosture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationUid = this._integrationUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireDevicePosture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationUid = value.integrationUid;
    }
  }

  // integration_uid - computed: false, optional: false, required: true
  private _integrationUid?: string; 
  public get integrationUid() {
    return this.getStringAttribute('integration_uid');
  }
  public set integrationUid(value: string) {
    this._integrationUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUidInput() {
    return this._integrationUid;
  }
}
export interface ZeroTrustAccessPolicyRequireEmail {
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email: string;
}

export function zeroTrustAccessPolicyRequireEmailToTerraform(struct?: ZeroTrustAccessPolicyRequireEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function zeroTrustAccessPolicyRequireEmailToHclTerraform(struct?: ZeroTrustAccessPolicyRequireEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface ZeroTrustAccessPolicyRequireEmailDomain {
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#domain ZeroTrustAccessPolicy#domain}
  */
  readonly domain: string;
}

export function zeroTrustAccessPolicyRequireEmailDomainToTerraform(struct?: ZeroTrustAccessPolicyRequireEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function zeroTrustAccessPolicyRequireEmailDomainToHclTerraform(struct?: ZeroTrustAccessPolicyRequireEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireEmailDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireEmailDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireEmailDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface ZeroTrustAccessPolicyRequireEmailListStruct {
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyRequireEmailListStructToTerraform(struct?: ZeroTrustAccessPolicyRequireEmailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyRequireEmailListStructToHclTerraform(struct?: ZeroTrustAccessPolicyRequireEmailListStruct | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyRequireEmailListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireEmailListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyRequireEmailListStruct | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyRequireEveryone {
}

export function zeroTrustAccessPolicyRequireEveryoneToTerraform(struct?: ZeroTrustAccessPolicyRequireEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessPolicyRequireEveryoneToHclTerraform(struct?: ZeroTrustAccessPolicyRequireEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessPolicyRequireEveryoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireEveryone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireEveryone | cdktf.IResolvable | undefined) {
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
}
export interface ZeroTrustAccessPolicyRequireExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}
  */
  readonly evaluateUrl: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}
  */
  readonly keysUrl: string;
}

export function zeroTrustAccessPolicyRequireExternalEvaluationToTerraform(struct?: ZeroTrustAccessPolicyRequireExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessPolicyRequireExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluate_url: {
      value: cdktf.stringToHclTerraform(struct!.evaluateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys_url: {
      value: cdktf.stringToHclTerraform(struct!.keysUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireExternalEvaluation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateUrl = this._evaluateUrl;
    }
    if (this._keysUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keysUrl = this._keysUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireExternalEvaluation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluateUrl = undefined;
      this._keysUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluateUrl = value.evaluateUrl;
      this._keysUrl = value.keysUrl;
    }
  }

  // evaluate_url - computed: false, optional: false, required: true
  private _evaluateUrl?: string; 
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }
  public set evaluateUrl(value: string) {
    this._evaluateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateUrlInput() {
    return this._evaluateUrl;
  }

  // keys_url - computed: false, optional: false, required: true
  private _keysUrl?: string; 
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
  public set keysUrl(value: string) {
    this._keysUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysUrlInput() {
    return this._keysUrl;
  }
}
export interface ZeroTrustAccessPolicyRequireGeo {
  /**
  * The country code that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#country_code ZeroTrustAccessPolicy#country_code}
  */
  readonly countryCode: string;
}

export function zeroTrustAccessPolicyRequireGeoToTerraform(struct?: ZeroTrustAccessPolicyRequireGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
  }
}


export function zeroTrustAccessPolicyRequireGeoToHclTerraform(struct?: ZeroTrustAccessPolicyRequireGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireGeo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
    }
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }
}
export interface ZeroTrustAccessPolicyRequireGithubOrganization {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name: string;
  /**
  * The name of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#team ZeroTrustAccessPolicy#team}
  */
  readonly team?: string;
}

export function zeroTrustAccessPolicyRequireGithubOrganizationToTerraform(struct?: ZeroTrustAccessPolicyRequireGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function zeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessPolicyRequireGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
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
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireGithubOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireGithubOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
      this._team = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
      this._team = value.team;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface ZeroTrustAccessPolicyRequireGroup {
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyRequireGroupToTerraform(struct?: ZeroTrustAccessPolicyRequireGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyRequireGroupToHclTerraform(struct?: ZeroTrustAccessPolicyRequireGroup | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyRequireGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyRequireGroup | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyRequireGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email: string;
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyRequireGsuiteToTerraform(struct?: ZeroTrustAccessPolicyRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyRequireGsuiteToHclTerraform(struct?: ZeroTrustAccessPolicyRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireGsuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireGsuite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireGsuite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyRequireIp {
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
  */
  readonly ip: string;
}

export function zeroTrustAccessPolicyRequireIpToTerraform(struct?: ZeroTrustAccessPolicyRequireIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function zeroTrustAccessPolicyRequireIpToHclTerraform(struct?: ZeroTrustAccessPolicyRequireIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface ZeroTrustAccessPolicyRequireIpListStruct {
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyRequireIpListStructToTerraform(struct?: ZeroTrustAccessPolicyRequireIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyRequireIpListStructToHclTerraform(struct?: ZeroTrustAccessPolicyRequireIpListStruct | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyRequireIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireIpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyRequireIpListStruct | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyRequireLoginMethod {
  /**
  * The ID of an identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessPolicyRequireLoginMethodToTerraform(struct?: ZeroTrustAccessPolicyRequireLoginMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessPolicyRequireLoginMethodToHclTerraform(struct?: ZeroTrustAccessPolicyRequireLoginMethod | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyRequireLoginMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireLoginMethod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyRequireLoginMethod | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessPolicyRequireOidc {
  /**
  * The name of the OIDC claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#claim_name ZeroTrustAccessPolicy#claim_name}
  */
  readonly claimName: string;
  /**
  * The OIDC claim value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#claim_value ZeroTrustAccessPolicy#claim_value}
  */
  readonly claimValue: string;
  /**
  * The ID of your OIDC identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyRequireOidcToTerraform(struct?: ZeroTrustAccessPolicyRequireOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    claim_value: cdktf.stringToTerraform(struct!.claimValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyRequireOidcToHclTerraform(struct?: ZeroTrustAccessPolicyRequireOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_value: {
      value: cdktf.stringToHclTerraform(struct!.claimValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._claimValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimValue = this._claimValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._claimValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._claimValue = value.claimValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // claim_value - computed: false, optional: false, required: true
  private _claimValue?: string; 
  public get claimValue() {
    return this.getStringAttribute('claim_value');
  }
  public set claimValue(value: string) {
    this._claimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValueInput() {
    return this._claimValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyRequireOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the Okta group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name: string;
}

export function zeroTrustAccessPolicyRequireOktaToTerraform(struct?: ZeroTrustAccessPolicyRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessPolicyRequireOktaToHclTerraform(struct?: ZeroTrustAccessPolicyRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
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

export class ZeroTrustAccessPolicyRequireOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireOkta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireOkta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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
export interface ZeroTrustAccessPolicyRequireSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}
  */
  readonly attributeValue: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyRequireSamlToTerraform(struct?: ZeroTrustAccessPolicyRequireSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyRequireSamlToHclTerraform(struct?: ZeroTrustAccessPolicyRequireSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessPolicyRequireServiceToken {
  /**
  * The ID of a Service Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#token_id ZeroTrustAccessPolicy#token_id}
  */
  readonly tokenId: string;
}

export function zeroTrustAccessPolicyRequireServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyRequireServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_id: cdktf.stringToTerraform(struct!.tokenId),
  }
}


export function zeroTrustAccessPolicyRequireServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyRequireServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessPolicyRequireServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequireServiceToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenId = value.tokenId;
    }
  }

  // token_id - computed: false, optional: false, required: true
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }
}
export interface ZeroTrustAccessPolicyRequire {
  /**
  * An empty object which matches on all service tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: ZeroTrustAccessPolicyRequireAnyValidServiceToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}
  */
  readonly authContext?: ZeroTrustAccessPolicyRequireAuthContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
  */
  readonly authMethod?: ZeroTrustAccessPolicyRequireAuthMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#azure_ad ZeroTrustAccessPolicy#azure_ad}
  */
  readonly azureAd?: ZeroTrustAccessPolicyRequireAzureAd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}
  */
  readonly certificate?: ZeroTrustAccessPolicyRequireCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
  */
  readonly commonName?: ZeroTrustAccessPolicyRequireCommonName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}
  */
  readonly devicePosture?: ZeroTrustAccessPolicyRequireDevicePosture;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email?: ZeroTrustAccessPolicyRequireEmail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}
  */
  readonly emailDomain?: ZeroTrustAccessPolicyRequireEmailDomain;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}
  */
  readonly emailList?: ZeroTrustAccessPolicyRequireEmailListStruct;
  /**
  * An empty object which matches on all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}
  */
  readonly everyone?: ZeroTrustAccessPolicyRequireEveryone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessPolicyRequireExternalEvaluation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}
  */
  readonly geo?: ZeroTrustAccessPolicyRequireGeo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#github_organization ZeroTrustAccessPolicy#github_organization}
  */
  readonly githubOrganization?: ZeroTrustAccessPolicyRequireGithubOrganization;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}
  */
  readonly group?: ZeroTrustAccessPolicyRequireGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessPolicyRequireGsuite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
  */
  readonly ip?: ZeroTrustAccessPolicyRequireIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}
  */
  readonly ipList?: ZeroTrustAccessPolicyRequireIpListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}
  */
  readonly loginMethod?: ZeroTrustAccessPolicyRequireLoginMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#oidc ZeroTrustAccessPolicy#oidc}
  */
  readonly oidc?: ZeroTrustAccessPolicyRequireOidc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}
  */
  readonly okta?: ZeroTrustAccessPolicyRequireOkta;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}
  */
  readonly saml?: ZeroTrustAccessPolicyRequireSaml;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}
  */
  readonly serviceToken?: ZeroTrustAccessPolicyRequireServiceToken;
}

export function zeroTrustAccessPolicyRequireToTerraform(struct?: ZeroTrustAccessPolicyRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: zeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform(struct!.anyValidServiceToken),
    auth_context: zeroTrustAccessPolicyRequireAuthContextToTerraform(struct!.authContext),
    auth_method: zeroTrustAccessPolicyRequireAuthMethodToTerraform(struct!.authMethod),
    azure_ad: zeroTrustAccessPolicyRequireAzureAdToTerraform(struct!.azureAd),
    certificate: zeroTrustAccessPolicyRequireCertificateToTerraform(struct!.certificate),
    common_name: zeroTrustAccessPolicyRequireCommonNameToTerraform(struct!.commonName),
    device_posture: zeroTrustAccessPolicyRequireDevicePostureToTerraform(struct!.devicePosture),
    email: zeroTrustAccessPolicyRequireEmailToTerraform(struct!.email),
    email_domain: zeroTrustAccessPolicyRequireEmailDomainToTerraform(struct!.emailDomain),
    email_list: zeroTrustAccessPolicyRequireEmailListStructToTerraform(struct!.emailList),
    everyone: zeroTrustAccessPolicyRequireEveryoneToTerraform(struct!.everyone),
    external_evaluation: zeroTrustAccessPolicyRequireExternalEvaluationToTerraform(struct!.externalEvaluation),
    geo: zeroTrustAccessPolicyRequireGeoToTerraform(struct!.geo),
    github_organization: zeroTrustAccessPolicyRequireGithubOrganizationToTerraform(struct!.githubOrganization),
    group: zeroTrustAccessPolicyRequireGroupToTerraform(struct!.group),
    gsuite: zeroTrustAccessPolicyRequireGsuiteToTerraform(struct!.gsuite),
    ip: zeroTrustAccessPolicyRequireIpToTerraform(struct!.ip),
    ip_list: zeroTrustAccessPolicyRequireIpListStructToTerraform(struct!.ipList),
    login_method: zeroTrustAccessPolicyRequireLoginMethodToTerraform(struct!.loginMethod),
    oidc: zeroTrustAccessPolicyRequireOidcToTerraform(struct!.oidc),
    okta: zeroTrustAccessPolicyRequireOktaToTerraform(struct!.okta),
    saml: zeroTrustAccessPolicyRequireSamlToTerraform(struct!.saml),
    service_token: zeroTrustAccessPolicyRequireServiceTokenToTerraform(struct!.serviceToken),
  }
}


export function zeroTrustAccessPolicyRequireToHclTerraform(struct?: ZeroTrustAccessPolicyRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_valid_service_token: {
      value: zeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform(struct!.anyValidServiceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireAnyValidServiceToken",
    },
    auth_context: {
      value: zeroTrustAccessPolicyRequireAuthContextToHclTerraform(struct!.authContext),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireAuthContext",
    },
    auth_method: {
      value: zeroTrustAccessPolicyRequireAuthMethodToHclTerraform(struct!.authMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireAuthMethod",
    },
    azure_ad: {
      value: zeroTrustAccessPolicyRequireAzureAdToHclTerraform(struct!.azureAd),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireAzureAd",
    },
    certificate: {
      value: zeroTrustAccessPolicyRequireCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireCertificate",
    },
    common_name: {
      value: zeroTrustAccessPolicyRequireCommonNameToHclTerraform(struct!.commonName),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireCommonName",
    },
    device_posture: {
      value: zeroTrustAccessPolicyRequireDevicePostureToHclTerraform(struct!.devicePosture),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireDevicePosture",
    },
    email: {
      value: zeroTrustAccessPolicyRequireEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireEmail",
    },
    email_domain: {
      value: zeroTrustAccessPolicyRequireEmailDomainToHclTerraform(struct!.emailDomain),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireEmailDomain",
    },
    email_list: {
      value: zeroTrustAccessPolicyRequireEmailListStructToHclTerraform(struct!.emailList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireEmailListStruct",
    },
    everyone: {
      value: zeroTrustAccessPolicyRequireEveryoneToHclTerraform(struct!.everyone),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireEveryone",
    },
    external_evaluation: {
      value: zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireExternalEvaluation",
    },
    geo: {
      value: zeroTrustAccessPolicyRequireGeoToHclTerraform(struct!.geo),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireGeo",
    },
    github_organization: {
      value: zeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform(struct!.githubOrganization),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireGithubOrganization",
    },
    group: {
      value: zeroTrustAccessPolicyRequireGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireGroup",
    },
    gsuite: {
      value: zeroTrustAccessPolicyRequireGsuiteToHclTerraform(struct!.gsuite),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireGsuite",
    },
    ip: {
      value: zeroTrustAccessPolicyRequireIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireIp",
    },
    ip_list: {
      value: zeroTrustAccessPolicyRequireIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireIpListStruct",
    },
    login_method: {
      value: zeroTrustAccessPolicyRequireLoginMethodToHclTerraform(struct!.loginMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireLoginMethod",
    },
    oidc: {
      value: zeroTrustAccessPolicyRequireOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireOidc",
    },
    okta: {
      value: zeroTrustAccessPolicyRequireOktaToHclTerraform(struct!.okta),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireOkta",
    },
    saml: {
      value: zeroTrustAccessPolicyRequireSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireSaml",
    },
    service_token: {
      value: zeroTrustAccessPolicyRequireServiceTokenToHclTerraform(struct!.serviceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessPolicyRequireServiceToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyRequireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyRequire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyValidServiceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
    }
    if (this._authContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContext = this._authContext?.internalValue;
    }
    if (this._authMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod?.internalValue;
    }
    if (this._azureAd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAd = this._azureAd?.internalValue;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._commonName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName?.internalValue;
    }
    if (this._devicePosture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePosture = this._devicePosture?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._emailDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailDomain = this._emailDomain?.internalValue;
    }
    if (this._emailList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList?.internalValue;
    }
    if (this._everyone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyone = this._everyone?.internalValue;
    }
    if (this._externalEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
    }
    if (this._geo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo?.internalValue;
    }
    if (this._githubOrganization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._gsuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsuite = this._gsuite?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._loginMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethod = this._loginMethod?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    if (this._serviceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyRequire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = undefined;
      this._authContext.internalValue = undefined;
      this._authMethod.internalValue = undefined;
      this._azureAd.internalValue = undefined;
      this._certificate.internalValue = undefined;
      this._commonName.internalValue = undefined;
      this._devicePosture.internalValue = undefined;
      this._email.internalValue = undefined;
      this._emailDomain.internalValue = undefined;
      this._emailList.internalValue = undefined;
      this._everyone.internalValue = undefined;
      this._externalEvaluation.internalValue = undefined;
      this._geo.internalValue = undefined;
      this._githubOrganization.internalValue = undefined;
      this._group.internalValue = undefined;
      this._gsuite.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._loginMethod.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._saml.internalValue = undefined;
      this._serviceToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
      this._authContext.internalValue = value.authContext;
      this._authMethod.internalValue = value.authMethod;
      this._azureAd.internalValue = value.azureAd;
      this._certificate.internalValue = value.certificate;
      this._commonName.internalValue = value.commonName;
      this._devicePosture.internalValue = value.devicePosture;
      this._email.internalValue = value.email;
      this._emailDomain.internalValue = value.emailDomain;
      this._emailList.internalValue = value.emailList;
      this._everyone.internalValue = value.everyone;
      this._externalEvaluation.internalValue = value.externalEvaluation;
      this._geo.internalValue = value.geo;
      this._githubOrganization.internalValue = value.githubOrganization;
      this._group.internalValue = value.group;
      this._gsuite.internalValue = value.gsuite;
      this._ip.internalValue = value.ip;
      this._ipList.internalValue = value.ipList;
      this._loginMethod.internalValue = value.loginMethod;
      this._oidc.internalValue = value.oidc;
      this._okta.internalValue = value.okta;
      this._saml.internalValue = value.saml;
      this._serviceToken.internalValue = value.serviceToken;
    }
  }

  // any_valid_service_token - computed: false, optional: true, required: false
  private _anyValidServiceToken = new ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
  public get anyValidServiceToken() {
    return this._anyValidServiceToken;
  }
  public putAnyValidServiceToken(value: ZeroTrustAccessPolicyRequireAnyValidServiceToken) {
    this._anyValidServiceToken.internalValue = value;
  }
  public resetAnyValidServiceToken() {
    this._anyValidServiceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyValidServiceTokenInput() {
    return this._anyValidServiceToken.internalValue;
  }

  // auth_context - computed: false, optional: true, required: false
  private _authContext = new ZeroTrustAccessPolicyRequireAuthContextOutputReference(this, "auth_context");
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessPolicyRequireAuthContext) {
    this._authContext.internalValue = value;
  }
  public resetAuthContext() {
    this._authContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextInput() {
    return this._authContext.internalValue;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod = new ZeroTrustAccessPolicyRequireAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }
  public putAuthMethod(value: ZeroTrustAccessPolicyRequireAuthMethod) {
    this._authMethod.internalValue = value;
  }
  public resetAuthMethod() {
    this._authMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod.internalValue;
  }

  // azure_ad - computed: false, optional: true, required: false
  private _azureAd = new ZeroTrustAccessPolicyRequireAzureAdOutputReference(this, "azure_ad");
  public get azureAd() {
    return this._azureAd;
  }
  public putAzureAd(value: ZeroTrustAccessPolicyRequireAzureAd) {
    this._azureAd.internalValue = value;
  }
  public resetAzureAd() {
    this._azureAd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdInput() {
    return this._azureAd.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ZeroTrustAccessPolicyRequireCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ZeroTrustAccessPolicyRequireCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName = new ZeroTrustAccessPolicyRequireCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }
  public putCommonName(value: ZeroTrustAccessPolicyRequireCommonName) {
    this._commonName.internalValue = value;
  }
  public resetCommonName() {
    this._commonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName.internalValue;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture = new ZeroTrustAccessPolicyRequireDevicePostureOutputReference(this, "device_posture");
  public get devicePosture() {
    return this._devicePosture;
  }
  public putDevicePosture(value: ZeroTrustAccessPolicyRequireDevicePosture) {
    this._devicePosture.internalValue = value;
  }
  public resetDevicePosture() {
    this._devicePosture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new ZeroTrustAccessPolicyRequireEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: ZeroTrustAccessPolicyRequireEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // email_domain - computed: false, optional: true, required: false
  private _emailDomain = new ZeroTrustAccessPolicyRequireEmailDomainOutputReference(this, "email_domain");
  public get emailDomain() {
    return this._emailDomain;
  }
  public putEmailDomain(value: ZeroTrustAccessPolicyRequireEmailDomain) {
    this._emailDomain.internalValue = value;
  }
  public resetEmailDomain() {
    this._emailDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain.internalValue;
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList = new ZeroTrustAccessPolicyRequireEmailListStructOutputReference(this, "email_list");
  public get emailList() {
    return this._emailList;
  }
  public putEmailList(value: ZeroTrustAccessPolicyRequireEmailListStruct) {
    this._emailList.internalValue = value;
  }
  public resetEmailList() {
    this._emailList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList.internalValue;
  }

  // everyone - computed: false, optional: true, required: false
  private _everyone = new ZeroTrustAccessPolicyRequireEveryoneOutputReference(this, "everyone");
  public get everyone() {
    return this._everyone;
  }
  public putEveryone(value: ZeroTrustAccessPolicyRequireEveryone) {
    this._everyone.internalValue = value;
  }
  public resetEveryone() {
    this._everyone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneInput() {
    return this._everyone.internalValue;
  }

  // external_evaluation - computed: false, optional: true, required: false
  private _externalEvaluation = new ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessPolicyRequireExternalEvaluation) {
    this._externalEvaluation.internalValue = value;
  }
  public resetExternalEvaluation() {
    this._externalEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEvaluationInput() {
    return this._externalEvaluation.internalValue;
  }

  // geo - computed: false, optional: true, required: false
  private _geo = new ZeroTrustAccessPolicyRequireGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }
  public putGeo(value: ZeroTrustAccessPolicyRequireGeo) {
    this._geo.internalValue = value;
  }
  public resetGeo() {
    this._geo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo.internalValue;
  }

  // github_organization - computed: false, optional: true, required: false
  private _githubOrganization = new ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference(this, "github_organization");
  public get githubOrganization() {
    return this._githubOrganization;
  }
  public putGithubOrganization(value: ZeroTrustAccessPolicyRequireGithubOrganization) {
    this._githubOrganization.internalValue = value;
  }
  public resetGithubOrganization() {
    this._githubOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganizationInput() {
    return this._githubOrganization.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new ZeroTrustAccessPolicyRequireGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: ZeroTrustAccessPolicyRequireGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // gsuite - computed: false, optional: true, required: false
  private _gsuite = new ZeroTrustAccessPolicyRequireGsuiteOutputReference(this, "gsuite");
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessPolicyRequireGsuite) {
    this._gsuite.internalValue = value;
  }
  public resetGsuite() {
    this._gsuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteInput() {
    return this._gsuite.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ZeroTrustAccessPolicyRequireIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: ZeroTrustAccessPolicyRequireIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new ZeroTrustAccessPolicyRequireIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: ZeroTrustAccessPolicyRequireIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // login_method - computed: false, optional: true, required: false
  private _loginMethod = new ZeroTrustAccessPolicyRequireLoginMethodOutputReference(this, "login_method");
  public get loginMethod() {
    return this._loginMethod;
  }
  public putLoginMethod(value: ZeroTrustAccessPolicyRequireLoginMethod) {
    this._loginMethod.internalValue = value;
  }
  public resetLoginMethod() {
    this._loginMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new ZeroTrustAccessPolicyRequireOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: ZeroTrustAccessPolicyRequireOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new ZeroTrustAccessPolicyRequireOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessPolicyRequireOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new ZeroTrustAccessPolicyRequireSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessPolicyRequireSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken = new ZeroTrustAccessPolicyRequireServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
  public putServiceToken(value: ZeroTrustAccessPolicyRequireServiceToken) {
    this._serviceToken.internalValue = value;
  }
  public resetServiceToken() {
    this._serviceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken.internalValue;
  }
}

export class ZeroTrustAccessPolicyRequireList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyRequire[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyRequireOutputReference {
    return new ZeroTrustAccessPolicyRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy}
*/
export class ZeroTrustAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessPolicy to import
  * @param importFromId The id of the existing ZeroTrustAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.0',
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
    this._approvalGroups.internalValue = config.approvalGroups;
    this._approvalRequired = config.approvalRequired;
    this._decision = config.decision;
    this._exclude.internalValue = config.exclude;
    this._include.internalValue = config.include;
    this._isolationRequired = config.isolationRequired;
    this._name = config.name;
    this._purposeJustificationPrompt = config.purposeJustificationPrompt;
    this._purposeJustificationRequired = config.purposeJustificationRequired;
    this._require.internalValue = config.require;
    this._sessionDuration = config.sessionDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // approval_groups - computed: false, optional: true, required: false
  private _approvalGroups = new ZeroTrustAccessPolicyApprovalGroupsList(this, "approval_groups", false);
  public get approvalGroups() {
    return this._approvalGroups;
  }
  public putApprovalGroups(value: ZeroTrustAccessPolicyApprovalGroups[] | cdktf.IResolvable) {
    this._approvalGroups.internalValue = value;
  }
  public resetApprovalGroups() {
    this._approvalGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalGroupsInput() {
    return this._approvalGroups.internalValue;
  }

  // approval_required - computed: false, optional: true, required: false
  private _approvalRequired?: boolean | cdktf.IResolvable; 
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }
  public set approvalRequired(value: boolean | cdktf.IResolvable) {
    this._approvalRequired = value;
  }
  public resetApprovalRequired() {
    this._approvalRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRequiredInput() {
    return this._approvalRequired;
  }

  // decision - computed: false, optional: false, required: true
  private _decision?: string; 
  public get decision() {
    return this.getStringAttribute('decision');
  }
  public set decision(value: string) {
    this._decision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionInput() {
    return this._decision;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new ZeroTrustAccessPolicyExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: ZeroTrustAccessPolicyExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include - computed: false, optional: false, required: true
  private _include = new ZeroTrustAccessPolicyIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: ZeroTrustAccessPolicyInclude[] | cdktf.IResolvable) {
    this._include.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }

  // isolation_required - computed: false, optional: true, required: false
  private _isolationRequired?: boolean | cdktf.IResolvable; 
  public get isolationRequired() {
    return this.getBooleanAttribute('isolation_required');
  }
  public set isolationRequired(value: boolean | cdktf.IResolvable) {
    this._isolationRequired = value;
  }
  public resetIsolationRequired() {
    this._isolationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationRequiredInput() {
    return this._isolationRequired;
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

  // purpose_justification_prompt - computed: false, optional: true, required: false
  private _purposeJustificationPrompt?: string; 
  public get purposeJustificationPrompt() {
    return this.getStringAttribute('purpose_justification_prompt');
  }
  public set purposeJustificationPrompt(value: string) {
    this._purposeJustificationPrompt = value;
  }
  public resetPurposeJustificationPrompt() {
    this._purposeJustificationPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeJustificationPromptInput() {
    return this._purposeJustificationPrompt;
  }

  // purpose_justification_required - computed: false, optional: true, required: false
  private _purposeJustificationRequired?: boolean | cdktf.IResolvable; 
  public get purposeJustificationRequired() {
    return this.getBooleanAttribute('purpose_justification_required');
  }
  public set purposeJustificationRequired(value: boolean | cdktf.IResolvable) {
    this._purposeJustificationRequired = value;
  }
  public resetPurposeJustificationRequired() {
    this._purposeJustificationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeJustificationRequiredInput() {
    return this._purposeJustificationRequired;
  }

  // require - computed: false, optional: true, required: false
  private _require = new ZeroTrustAccessPolicyRequireList(this, "require", false);
  public get require() {
    return this._require;
  }
  public putRequire(value: ZeroTrustAccessPolicyRequire[] | cdktf.IResolvable) {
    this._require.internalValue = value;
  }
  public resetRequire() {
    this._require.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require.internalValue;
  }

  // session_duration - computed: true, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      approval_groups: cdktf.listMapper(zeroTrustAccessPolicyApprovalGroupsToTerraform, false)(this._approvalGroups.internalValue),
      approval_required: cdktf.booleanToTerraform(this._approvalRequired),
      decision: cdktf.stringToTerraform(this._decision),
      exclude: cdktf.listMapper(zeroTrustAccessPolicyExcludeToTerraform, false)(this._exclude.internalValue),
      include: cdktf.listMapper(zeroTrustAccessPolicyIncludeToTerraform, false)(this._include.internalValue),
      isolation_required: cdktf.booleanToTerraform(this._isolationRequired),
      name: cdktf.stringToTerraform(this._name),
      purpose_justification_prompt: cdktf.stringToTerraform(this._purposeJustificationPrompt),
      purpose_justification_required: cdktf.booleanToTerraform(this._purposeJustificationRequired),
      require: cdktf.listMapper(zeroTrustAccessPolicyRequireToTerraform, false)(this._require.internalValue),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
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
      approval_groups: {
        value: cdktf.listMapperHcl(zeroTrustAccessPolicyApprovalGroupsToHclTerraform, false)(this._approvalGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessPolicyApprovalGroupsList",
      },
      approval_required: {
        value: cdktf.booleanToHclTerraform(this._approvalRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      decision: {
        value: cdktf.stringToHclTerraform(this._decision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude: {
        value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeToHclTerraform, false)(this._exclude.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessPolicyExcludeList",
      },
      include: {
        value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeToHclTerraform, false)(this._include.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessPolicyIncludeList",
      },
      isolation_required: {
        value: cdktf.booleanToHclTerraform(this._isolationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose_justification_prompt: {
        value: cdktf.stringToHclTerraform(this._purposeJustificationPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose_justification_required: {
        value: cdktf.booleanToHclTerraform(this._purposeJustificationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require: {
        value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireToHclTerraform, false)(this._require.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessPolicyRequireList",
      },
      session_duration: {
        value: cdktf.stringToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
