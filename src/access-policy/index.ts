/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#account_id AccessPolicy#account_id}
  */
  readonly accountId?: string;
  /**
  * The ID of the application the policy is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#application_id AccessPolicy#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}
  */
  readonly approvalRequired?: boolean | cdktf.IResolvable;
  /**
  * Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#decision AccessPolicy#decision}
  */
  readonly decision: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#id AccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Require this application to be served in an isolated browser for users matching this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#isolation_required AccessPolicy#isolation_required}
  */
  readonly isolationRequired?: boolean | cdktf.IResolvable;
  /**
  * Friendly name of the Access Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#name AccessPolicy#name}
  */
  readonly name: string;
  /**
  * The unique precedence for policies on a single application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#precedence AccessPolicy#precedence}
  */
  readonly precedence: number;
  /**
  * The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#purpose_justification_prompt AccessPolicy#purpose_justification_prompt}
  */
  readonly purposeJustificationPrompt?: string;
  /**
  * Whether to prompt the user for a justification for accessing the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#purpose_justification_required AccessPolicy#purpose_justification_required}
  */
  readonly purposeJustificationRequired?: boolean | cdktf.IResolvable;
  /**
  * How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#session_duration AccessPolicy#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#zone_id AccessPolicy#zone_id}
  */
  readonly zoneId?: string;
  /**
  * approval_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#approval_group AccessPolicy#approval_group}
  */
  readonly approvalGroup?: AccessPolicyApprovalGroup[] | cdktf.IResolvable;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#exclude AccessPolicy#exclude}
  */
  readonly exclude?: AccessPolicyExclude[] | cdktf.IResolvable;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#include AccessPolicy#include}
  */
  readonly include: AccessPolicyInclude[] | cdktf.IResolvable;
  /**
  * require block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#require AccessPolicy#require}
  */
  readonly require?: AccessPolicyRequire[] | cdktf.IResolvable;
}
export interface AccessPolicyApprovalGroup {
  /**
  * Number of approvals needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#approvals_needed AccessPolicy#approvals_needed}
  */
  readonly approvalsNeeded: number;
  /**
  * List of emails to request approval from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email_addresses AccessPolicy#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email_list_uuid AccessPolicy#email_list_uuid}
  */
  readonly emailListUuid?: string;
}

export function accessPolicyApprovalGroupToTerraform(struct?: AccessPolicyApprovalGroup | cdktf.IResolvable): any {
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


export function accessPolicyApprovalGroupToHclTerraform(struct?: AccessPolicyApprovalGroup | cdktf.IResolvable): any {
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

export class AccessPolicyApprovalGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyApprovalGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyApprovalGroup | cdktf.IResolvable | undefined) {
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

export class AccessPolicyApprovalGroupList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyApprovalGroup[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyApprovalGroupOutputReference {
    return new AccessPolicyApprovalGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyExcludeAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#ac_id AccessPolicy#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#id AccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function accessPolicyExcludeAuthContextToTerraform(struct?: AccessPolicyExcludeAuthContext | cdktf.IResolvable): any {
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


export function accessPolicyExcludeAuthContextToHclTerraform(struct?: AccessPolicyExcludeAuthContext | cdktf.IResolvable): any {
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

export class AccessPolicyExcludeAuthContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyExcludeAuthContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyExcludeAuthContext | cdktf.IResolvable | undefined) {
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

export class AccessPolicyExcludeAuthContextList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyExcludeAuthContext[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyExcludeAuthContextOutputReference {
    return new AccessPolicyExcludeAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyExcludeAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#id AccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyExcludeAzureToTerraform(struct?: AccessPolicyExcludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessPolicyExcludeAzureToHclTerraform(struct?: AccessPolicyExcludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class AccessPolicyExcludeAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyExcludeAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyExcludeAzure | cdktf.IResolvable | undefined) {
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

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class AccessPolicyExcludeAzureList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyExcludeAzure[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyExcludeAzureOutputReference {
    return new AccessPolicyExcludeAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyExcludeExternalEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}
  */
  readonly keysUrl?: string;
}

export function accessPolicyExcludeExternalEvaluationToTerraform(struct?: AccessPolicyExcludeExternalEvaluationOutputReference | AccessPolicyExcludeExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function accessPolicyExcludeExternalEvaluationToHclTerraform(struct?: AccessPolicyExcludeExternalEvaluationOutputReference | AccessPolicyExcludeExternalEvaluation): any {
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

export class AccessPolicyExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPolicyExcludeExternalEvaluation | undefined {
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

  public set internalValue(value: AccessPolicyExcludeExternalEvaluation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluateUrl = undefined;
      this._keysUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluateUrl = value.evaluateUrl;
      this._keysUrl = value.keysUrl;
    }
  }

  // evaluate_url - computed: false, optional: true, required: false
  private _evaluateUrl?: string; 
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }
  public set evaluateUrl(value: string) {
    this._evaluateUrl = value;
  }
  public resetEvaluateUrl() {
    this._evaluateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateUrlInput() {
    return this._evaluateUrl;
  }

  // keys_url - computed: false, optional: true, required: false
  private _keysUrl?: string; 
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
  public set keysUrl(value: string) {
    this._keysUrl = value;
  }
  public resetKeysUrl() {
    this._keysUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysUrlInput() {
    return this._keysUrl;
  }
}
export interface AccessPolicyExcludeGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#name AccessPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#teams AccessPolicy#teams}
  */
  readonly teams?: string[];
}

export function accessPolicyExcludeGithubToTerraform(struct?: AccessPolicyExcludeGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
  }
}


export function accessPolicyExcludeGithubToHclTerraform(struct?: AccessPolicyExcludeGithub | cdktf.IResolvable): any {
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
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPolicyExcludeGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyExcludeGithub | cdktf.IResolvable | undefined {
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
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPolicyExcludeGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
      this._teams = undefined;
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
      this._teams = value.teams;
    }
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }
}

export class AccessPolicyExcludeGithubList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyExcludeGithub[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyExcludeGithubOutputReference {
    return new AccessPolicyExcludeGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyExcludeGsuite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyExcludeGsuiteToTerraform(struct?: AccessPolicyExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessPolicyExcludeGsuiteToHclTerraform(struct?: AccessPolicyExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class AccessPolicyExcludeGsuiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyExcludeGsuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyExcludeGsuite | cdktf.IResolvable | undefined) {
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

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class AccessPolicyExcludeGsuiteList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyExcludeGsuite[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyExcludeGsuiteOutputReference {
    return new AccessPolicyExcludeGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyExcludeOkta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#name AccessPolicy#name}
  */
  readonly name?: string[];
}

export function accessPolicyExcludeOktaToTerraform(struct?: AccessPolicyExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function accessPolicyExcludeOktaToHclTerraform(struct?: AccessPolicyExcludeOkta | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPolicyExcludeOktaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyExcludeOkta | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyExcludeOkta | cdktf.IResolvable | undefined) {
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

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
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

export class AccessPolicyExcludeOktaList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyExcludeOkta[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyExcludeOktaOutputReference {
    return new AccessPolicyExcludeOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyExcludeSaml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyExcludeSamlToTerraform(struct?: AccessPolicyExcludeSaml | cdktf.IResolvable): any {
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


export function accessPolicyExcludeSamlToHclTerraform(struct?: AccessPolicyExcludeSaml | cdktf.IResolvable): any {
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

export class AccessPolicyExcludeSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyExcludeSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyExcludeSaml | cdktf.IResolvable | undefined) {
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

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class AccessPolicyExcludeSamlList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyExcludeSaml[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyExcludeSamlOutputReference {
    return new AccessPolicyExcludeSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#certificate AccessPolicy#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#common_name AccessPolicy#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#everyone AccessPolicy#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#geo AccessPolicy#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#group AccessPolicy#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#ip AccessPolicy#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of an existing IP list to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}
  */
  readonly ipList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#login_method AccessPolicy#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#service_token AccessPolicy#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#auth_context AccessPolicy#auth_context}
  */
  readonly authContext?: AccessPolicyExcludeAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#azure AccessPolicy#azure}
  */
  readonly azure?: AccessPolicyExcludeAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}
  */
  readonly externalEvaluation?: AccessPolicyExcludeExternalEvaluation;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#github AccessPolicy#github}
  */
  readonly github?: AccessPolicyExcludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}
  */
  readonly gsuite?: AccessPolicyExcludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#okta AccessPolicy#okta}
  */
  readonly okta?: AccessPolicyExcludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#saml AccessPolicy#saml}
  */
  readonly saml?: AccessPolicyExcludeSaml[] | cdktf.IResolvable;
}

export function accessPolicyExcludeToTerraform(struct?: AccessPolicyExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    device_posture: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devicePosture),
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailDomain),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
    login_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceToken),
    auth_context: cdktf.listMapper(accessPolicyExcludeAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(accessPolicyExcludeAzureToTerraform, true)(struct!.azure),
    external_evaluation: accessPolicyExcludeExternalEvaluationToTerraform(struct!.externalEvaluation),
    github: cdktf.listMapper(accessPolicyExcludeGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(accessPolicyExcludeGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(accessPolicyExcludeOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(accessPolicyExcludeSamlToTerraform, true)(struct!.saml),
  }
}


export function accessPolicyExcludeToHclTerraform(struct?: AccessPolicyExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_valid_service_token: {
      value: cdktf.booleanToHclTerraform(struct!.anyValidServiceToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.booleanToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_posture: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devicePosture),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailDomain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    everyone: {
      value: cdktf.booleanToHclTerraform(struct!.everyone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginMethod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_token: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceToken),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_context: {
      value: cdktf.listMapperHcl(accessPolicyExcludeAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyExcludeAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(accessPolicyExcludeAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyExcludeAzureList",
    },
    external_evaluation: {
      value: accessPolicyExcludeExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyExcludeExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(accessPolicyExcludeGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyExcludeGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(accessPolicyExcludeGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyExcludeGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(accessPolicyExcludeOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyExcludeOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(accessPolicyExcludeSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyExcludeSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPolicyExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyValidServiceToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyValidServiceToken = this._anyValidServiceToken;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._devicePosture !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePosture = this._devicePosture;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._emailDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailDomain = this._emailDomain;
    }
    if (this._everyone !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyone = this._everyone;
    }
    if (this._geo !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList;
    }
    if (this._loginMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethod = this._loginMethod;
    }
    if (this._serviceToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken;
    }
    if (this._authContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContext = this._authContext?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._externalEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._gsuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsuite = this._gsuite?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPolicyExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken = undefined;
      this._authMethod = undefined;
      this._certificate = undefined;
      this._commonName = undefined;
      this._devicePosture = undefined;
      this._email = undefined;
      this._emailDomain = undefined;
      this._everyone = undefined;
      this._geo = undefined;
      this._group = undefined;
      this._ip = undefined;
      this._ipList = undefined;
      this._loginMethod = undefined;
      this._serviceToken = undefined;
      this._authContext.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._externalEvaluation.internalValue = undefined;
      this._github.internalValue = undefined;
      this._gsuite.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._saml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyValidServiceToken = value.anyValidServiceToken;
      this._authMethod = value.authMethod;
      this._certificate = value.certificate;
      this._commonName = value.commonName;
      this._devicePosture = value.devicePosture;
      this._email = value.email;
      this._emailDomain = value.emailDomain;
      this._everyone = value.everyone;
      this._geo = value.geo;
      this._group = value.group;
      this._ip = value.ip;
      this._ipList = value.ipList;
      this._loginMethod = value.loginMethod;
      this._serviceToken = value.serviceToken;
      this._authContext.internalValue = value.authContext;
      this._azure.internalValue = value.azure;
      this._externalEvaluation.internalValue = value.externalEvaluation;
      this._github.internalValue = value.github;
      this._gsuite.internalValue = value.gsuite;
      this._okta.internalValue = value.okta;
      this._saml.internalValue = value.saml;
    }
  }

  // any_valid_service_token - computed: false, optional: true, required: false
  private _anyValidServiceToken?: boolean | cdktf.IResolvable; 
  public get anyValidServiceToken() {
    return this.getBooleanAttribute('any_valid_service_token');
  }
  public set anyValidServiceToken(value: boolean | cdktf.IResolvable) {
    this._anyValidServiceToken = value;
  }
  public resetAnyValidServiceToken() {
    this._anyValidServiceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyValidServiceTokenInput() {
    return this._anyValidServiceToken;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: boolean | cdktf.IResolvable; 
  public get certificate() {
    return this.getBooleanAttribute('certificate');
  }
  public set certificate(value: boolean | cdktf.IResolvable) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture?: string[]; 
  public get devicePosture() {
    return this.getListAttribute('device_posture');
  }
  public set devicePosture(value: string[]) {
    this._devicePosture = value;
  }
  public resetDevicePosture() {
    this._devicePosture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_domain - computed: false, optional: true, required: false
  private _emailDomain?: string[]; 
  public get emailDomain() {
    return this.getListAttribute('email_domain');
  }
  public set emailDomain(value: string[]) {
    this._emailDomain = value;
  }
  public resetEmailDomain() {
    this._emailDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain;
  }

  // everyone - computed: false, optional: true, required: false
  private _everyone?: boolean | cdktf.IResolvable; 
  public get everyone() {
    return this.getBooleanAttribute('everyone');
  }
  public set everyone(value: boolean | cdktf.IResolvable) {
    this._everyone = value;
  }
  public resetEveryone() {
    this._everyone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneInput() {
    return this._everyone;
  }

  // geo - computed: false, optional: true, required: false
  private _geo?: string[]; 
  public get geo() {
    return this.getListAttribute('geo');
  }
  public set geo(value: string[]) {
    this._geo = value;
  }
  public resetGeo() {
    this._geo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return this.getListAttribute('group');
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList?: string[]; 
  public get ipList() {
    return this.getListAttribute('ip_list');
  }
  public set ipList(value: string[]) {
    this._ipList = value;
  }
  public resetIpList() {
    this._ipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // login_method - computed: false, optional: true, required: false
  private _loginMethod?: string[]; 
  public get loginMethod() {
    return this.getListAttribute('login_method');
  }
  public set loginMethod(value: string[]) {
    this._loginMethod = value;
  }
  public resetLoginMethod() {
    this._loginMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken?: string[]; 
  public get serviceToken() {
    return this.getListAttribute('service_token');
  }
  public set serviceToken(value: string[]) {
    this._serviceToken = value;
  }
  public resetServiceToken() {
    this._serviceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken;
  }

  // auth_context - computed: false, optional: true, required: false
  private _authContext = new AccessPolicyExcludeAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: AccessPolicyExcludeAuthContext[] | cdktf.IResolvable) {
    this._authContext.internalValue = value;
  }
  public resetAuthContext() {
    this._authContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextInput() {
    return this._authContext.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new AccessPolicyExcludeAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: AccessPolicyExcludeAzure[] | cdktf.IResolvable) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // external_evaluation - computed: false, optional: true, required: false
  private _externalEvaluation = new AccessPolicyExcludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: AccessPolicyExcludeExternalEvaluation) {
    this._externalEvaluation.internalValue = value;
  }
  public resetExternalEvaluation() {
    this._externalEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEvaluationInput() {
    return this._externalEvaluation.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new AccessPolicyExcludeGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: AccessPolicyExcludeGithub[] | cdktf.IResolvable) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // gsuite - computed: false, optional: true, required: false
  private _gsuite = new AccessPolicyExcludeGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: AccessPolicyExcludeGsuite[] | cdktf.IResolvable) {
    this._gsuite.internalValue = value;
  }
  public resetGsuite() {
    this._gsuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteInput() {
    return this._gsuite.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new AccessPolicyExcludeOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: AccessPolicyExcludeOkta[] | cdktf.IResolvable) {
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
  private _saml = new AccessPolicyExcludeSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: AccessPolicyExcludeSaml[] | cdktf.IResolvable) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }
}

export class AccessPolicyExcludeList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyExclude[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyExcludeOutputReference {
    return new AccessPolicyExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyIncludeAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#ac_id AccessPolicy#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#id AccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function accessPolicyIncludeAuthContextToTerraform(struct?: AccessPolicyIncludeAuthContext | cdktf.IResolvable): any {
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


export function accessPolicyIncludeAuthContextToHclTerraform(struct?: AccessPolicyIncludeAuthContext | cdktf.IResolvable): any {
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

export class AccessPolicyIncludeAuthContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyIncludeAuthContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyIncludeAuthContext | cdktf.IResolvable | undefined) {
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

export class AccessPolicyIncludeAuthContextList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyIncludeAuthContext[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyIncludeAuthContextOutputReference {
    return new AccessPolicyIncludeAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyIncludeAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#id AccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyIncludeAzureToTerraform(struct?: AccessPolicyIncludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessPolicyIncludeAzureToHclTerraform(struct?: AccessPolicyIncludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class AccessPolicyIncludeAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyIncludeAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyIncludeAzure | cdktf.IResolvable | undefined) {
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

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class AccessPolicyIncludeAzureList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyIncludeAzure[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyIncludeAzureOutputReference {
    return new AccessPolicyIncludeAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyIncludeExternalEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}
  */
  readonly keysUrl?: string;
}

export function accessPolicyIncludeExternalEvaluationToTerraform(struct?: AccessPolicyIncludeExternalEvaluationOutputReference | AccessPolicyIncludeExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function accessPolicyIncludeExternalEvaluationToHclTerraform(struct?: AccessPolicyIncludeExternalEvaluationOutputReference | AccessPolicyIncludeExternalEvaluation): any {
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

export class AccessPolicyIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPolicyIncludeExternalEvaluation | undefined {
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

  public set internalValue(value: AccessPolicyIncludeExternalEvaluation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluateUrl = undefined;
      this._keysUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluateUrl = value.evaluateUrl;
      this._keysUrl = value.keysUrl;
    }
  }

  // evaluate_url - computed: false, optional: true, required: false
  private _evaluateUrl?: string; 
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }
  public set evaluateUrl(value: string) {
    this._evaluateUrl = value;
  }
  public resetEvaluateUrl() {
    this._evaluateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateUrlInput() {
    return this._evaluateUrl;
  }

  // keys_url - computed: false, optional: true, required: false
  private _keysUrl?: string; 
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
  public set keysUrl(value: string) {
    this._keysUrl = value;
  }
  public resetKeysUrl() {
    this._keysUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysUrlInput() {
    return this._keysUrl;
  }
}
export interface AccessPolicyIncludeGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#name AccessPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#teams AccessPolicy#teams}
  */
  readonly teams?: string[];
}

export function accessPolicyIncludeGithubToTerraform(struct?: AccessPolicyIncludeGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
  }
}


export function accessPolicyIncludeGithubToHclTerraform(struct?: AccessPolicyIncludeGithub | cdktf.IResolvable): any {
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
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPolicyIncludeGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyIncludeGithub | cdktf.IResolvable | undefined {
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
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPolicyIncludeGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
      this._teams = undefined;
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
      this._teams = value.teams;
    }
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }
}

export class AccessPolicyIncludeGithubList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyIncludeGithub[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyIncludeGithubOutputReference {
    return new AccessPolicyIncludeGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyIncludeGsuite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyIncludeGsuiteToTerraform(struct?: AccessPolicyIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessPolicyIncludeGsuiteToHclTerraform(struct?: AccessPolicyIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class AccessPolicyIncludeGsuiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyIncludeGsuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyIncludeGsuite | cdktf.IResolvable | undefined) {
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

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class AccessPolicyIncludeGsuiteList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyIncludeGsuite[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyIncludeGsuiteOutputReference {
    return new AccessPolicyIncludeGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyIncludeOkta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#name AccessPolicy#name}
  */
  readonly name?: string[];
}

export function accessPolicyIncludeOktaToTerraform(struct?: AccessPolicyIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function accessPolicyIncludeOktaToHclTerraform(struct?: AccessPolicyIncludeOkta | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPolicyIncludeOktaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyIncludeOkta | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyIncludeOkta | cdktf.IResolvable | undefined) {
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

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
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

export class AccessPolicyIncludeOktaList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyIncludeOkta[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyIncludeOktaOutputReference {
    return new AccessPolicyIncludeOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyIncludeSaml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyIncludeSamlToTerraform(struct?: AccessPolicyIncludeSaml | cdktf.IResolvable): any {
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


export function accessPolicyIncludeSamlToHclTerraform(struct?: AccessPolicyIncludeSaml | cdktf.IResolvable): any {
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

export class AccessPolicyIncludeSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyIncludeSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyIncludeSaml | cdktf.IResolvable | undefined) {
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

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class AccessPolicyIncludeSamlList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyIncludeSaml[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyIncludeSamlOutputReference {
    return new AccessPolicyIncludeSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#certificate AccessPolicy#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#common_name AccessPolicy#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#everyone AccessPolicy#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#geo AccessPolicy#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#group AccessPolicy#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#ip AccessPolicy#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of an existing IP list to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}
  */
  readonly ipList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#login_method AccessPolicy#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#service_token AccessPolicy#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#auth_context AccessPolicy#auth_context}
  */
  readonly authContext?: AccessPolicyIncludeAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#azure AccessPolicy#azure}
  */
  readonly azure?: AccessPolicyIncludeAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}
  */
  readonly externalEvaluation?: AccessPolicyIncludeExternalEvaluation;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#github AccessPolicy#github}
  */
  readonly github?: AccessPolicyIncludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}
  */
  readonly gsuite?: AccessPolicyIncludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#okta AccessPolicy#okta}
  */
  readonly okta?: AccessPolicyIncludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#saml AccessPolicy#saml}
  */
  readonly saml?: AccessPolicyIncludeSaml[] | cdktf.IResolvable;
}

export function accessPolicyIncludeToTerraform(struct?: AccessPolicyInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    device_posture: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devicePosture),
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailDomain),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
    login_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceToken),
    auth_context: cdktf.listMapper(accessPolicyIncludeAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(accessPolicyIncludeAzureToTerraform, true)(struct!.azure),
    external_evaluation: accessPolicyIncludeExternalEvaluationToTerraform(struct!.externalEvaluation),
    github: cdktf.listMapper(accessPolicyIncludeGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(accessPolicyIncludeGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(accessPolicyIncludeOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(accessPolicyIncludeSamlToTerraform, true)(struct!.saml),
  }
}


export function accessPolicyIncludeToHclTerraform(struct?: AccessPolicyInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_valid_service_token: {
      value: cdktf.booleanToHclTerraform(struct!.anyValidServiceToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.booleanToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_posture: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devicePosture),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailDomain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    everyone: {
      value: cdktf.booleanToHclTerraform(struct!.everyone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginMethod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_token: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceToken),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_context: {
      value: cdktf.listMapperHcl(accessPolicyIncludeAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyIncludeAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(accessPolicyIncludeAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyIncludeAzureList",
    },
    external_evaluation: {
      value: accessPolicyIncludeExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyIncludeExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(accessPolicyIncludeGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyIncludeGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(accessPolicyIncludeGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyIncludeGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(accessPolicyIncludeOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyIncludeOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(accessPolicyIncludeSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyIncludeSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPolicyIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyValidServiceToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyValidServiceToken = this._anyValidServiceToken;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._devicePosture !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePosture = this._devicePosture;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._emailDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailDomain = this._emailDomain;
    }
    if (this._everyone !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyone = this._everyone;
    }
    if (this._geo !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList;
    }
    if (this._loginMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethod = this._loginMethod;
    }
    if (this._serviceToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken;
    }
    if (this._authContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContext = this._authContext?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._externalEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._gsuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsuite = this._gsuite?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPolicyInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken = undefined;
      this._authMethod = undefined;
      this._certificate = undefined;
      this._commonName = undefined;
      this._devicePosture = undefined;
      this._email = undefined;
      this._emailDomain = undefined;
      this._everyone = undefined;
      this._geo = undefined;
      this._group = undefined;
      this._ip = undefined;
      this._ipList = undefined;
      this._loginMethod = undefined;
      this._serviceToken = undefined;
      this._authContext.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._externalEvaluation.internalValue = undefined;
      this._github.internalValue = undefined;
      this._gsuite.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._saml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyValidServiceToken = value.anyValidServiceToken;
      this._authMethod = value.authMethod;
      this._certificate = value.certificate;
      this._commonName = value.commonName;
      this._devicePosture = value.devicePosture;
      this._email = value.email;
      this._emailDomain = value.emailDomain;
      this._everyone = value.everyone;
      this._geo = value.geo;
      this._group = value.group;
      this._ip = value.ip;
      this._ipList = value.ipList;
      this._loginMethod = value.loginMethod;
      this._serviceToken = value.serviceToken;
      this._authContext.internalValue = value.authContext;
      this._azure.internalValue = value.azure;
      this._externalEvaluation.internalValue = value.externalEvaluation;
      this._github.internalValue = value.github;
      this._gsuite.internalValue = value.gsuite;
      this._okta.internalValue = value.okta;
      this._saml.internalValue = value.saml;
    }
  }

  // any_valid_service_token - computed: false, optional: true, required: false
  private _anyValidServiceToken?: boolean | cdktf.IResolvable; 
  public get anyValidServiceToken() {
    return this.getBooleanAttribute('any_valid_service_token');
  }
  public set anyValidServiceToken(value: boolean | cdktf.IResolvable) {
    this._anyValidServiceToken = value;
  }
  public resetAnyValidServiceToken() {
    this._anyValidServiceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyValidServiceTokenInput() {
    return this._anyValidServiceToken;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: boolean | cdktf.IResolvable; 
  public get certificate() {
    return this.getBooleanAttribute('certificate');
  }
  public set certificate(value: boolean | cdktf.IResolvable) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture?: string[]; 
  public get devicePosture() {
    return this.getListAttribute('device_posture');
  }
  public set devicePosture(value: string[]) {
    this._devicePosture = value;
  }
  public resetDevicePosture() {
    this._devicePosture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_domain - computed: false, optional: true, required: false
  private _emailDomain?: string[]; 
  public get emailDomain() {
    return this.getListAttribute('email_domain');
  }
  public set emailDomain(value: string[]) {
    this._emailDomain = value;
  }
  public resetEmailDomain() {
    this._emailDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain;
  }

  // everyone - computed: false, optional: true, required: false
  private _everyone?: boolean | cdktf.IResolvable; 
  public get everyone() {
    return this.getBooleanAttribute('everyone');
  }
  public set everyone(value: boolean | cdktf.IResolvable) {
    this._everyone = value;
  }
  public resetEveryone() {
    this._everyone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneInput() {
    return this._everyone;
  }

  // geo - computed: false, optional: true, required: false
  private _geo?: string[]; 
  public get geo() {
    return this.getListAttribute('geo');
  }
  public set geo(value: string[]) {
    this._geo = value;
  }
  public resetGeo() {
    this._geo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return this.getListAttribute('group');
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList?: string[]; 
  public get ipList() {
    return this.getListAttribute('ip_list');
  }
  public set ipList(value: string[]) {
    this._ipList = value;
  }
  public resetIpList() {
    this._ipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // login_method - computed: false, optional: true, required: false
  private _loginMethod?: string[]; 
  public get loginMethod() {
    return this.getListAttribute('login_method');
  }
  public set loginMethod(value: string[]) {
    this._loginMethod = value;
  }
  public resetLoginMethod() {
    this._loginMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken?: string[]; 
  public get serviceToken() {
    return this.getListAttribute('service_token');
  }
  public set serviceToken(value: string[]) {
    this._serviceToken = value;
  }
  public resetServiceToken() {
    this._serviceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken;
  }

  // auth_context - computed: false, optional: true, required: false
  private _authContext = new AccessPolicyIncludeAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: AccessPolicyIncludeAuthContext[] | cdktf.IResolvable) {
    this._authContext.internalValue = value;
  }
  public resetAuthContext() {
    this._authContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextInput() {
    return this._authContext.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new AccessPolicyIncludeAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: AccessPolicyIncludeAzure[] | cdktf.IResolvable) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // external_evaluation - computed: false, optional: true, required: false
  private _externalEvaluation = new AccessPolicyIncludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: AccessPolicyIncludeExternalEvaluation) {
    this._externalEvaluation.internalValue = value;
  }
  public resetExternalEvaluation() {
    this._externalEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEvaluationInput() {
    return this._externalEvaluation.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new AccessPolicyIncludeGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: AccessPolicyIncludeGithub[] | cdktf.IResolvable) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // gsuite - computed: false, optional: true, required: false
  private _gsuite = new AccessPolicyIncludeGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: AccessPolicyIncludeGsuite[] | cdktf.IResolvable) {
    this._gsuite.internalValue = value;
  }
  public resetGsuite() {
    this._gsuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteInput() {
    return this._gsuite.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new AccessPolicyIncludeOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: AccessPolicyIncludeOkta[] | cdktf.IResolvable) {
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
  private _saml = new AccessPolicyIncludeSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: AccessPolicyIncludeSaml[] | cdktf.IResolvable) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }
}

export class AccessPolicyIncludeList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyInclude[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyIncludeOutputReference {
    return new AccessPolicyIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyRequireAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#ac_id AccessPolicy#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#id AccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function accessPolicyRequireAuthContextToTerraform(struct?: AccessPolicyRequireAuthContext | cdktf.IResolvable): any {
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


export function accessPolicyRequireAuthContextToHclTerraform(struct?: AccessPolicyRequireAuthContext | cdktf.IResolvable): any {
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

export class AccessPolicyRequireAuthContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyRequireAuthContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyRequireAuthContext | cdktf.IResolvable | undefined) {
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

export class AccessPolicyRequireAuthContextList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyRequireAuthContext[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyRequireAuthContextOutputReference {
    return new AccessPolicyRequireAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyRequireAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#id AccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyRequireAzureToTerraform(struct?: AccessPolicyRequireAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessPolicyRequireAzureToHclTerraform(struct?: AccessPolicyRequireAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class AccessPolicyRequireAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyRequireAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyRequireAzure | cdktf.IResolvable | undefined) {
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

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class AccessPolicyRequireAzureList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyRequireAzure[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyRequireAzureOutputReference {
    return new AccessPolicyRequireAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyRequireExternalEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}
  */
  readonly keysUrl?: string;
}

export function accessPolicyRequireExternalEvaluationToTerraform(struct?: AccessPolicyRequireExternalEvaluationOutputReference | AccessPolicyRequireExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function accessPolicyRequireExternalEvaluationToHclTerraform(struct?: AccessPolicyRequireExternalEvaluationOutputReference | AccessPolicyRequireExternalEvaluation): any {
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

export class AccessPolicyRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPolicyRequireExternalEvaluation | undefined {
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

  public set internalValue(value: AccessPolicyRequireExternalEvaluation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluateUrl = undefined;
      this._keysUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluateUrl = value.evaluateUrl;
      this._keysUrl = value.keysUrl;
    }
  }

  // evaluate_url - computed: false, optional: true, required: false
  private _evaluateUrl?: string; 
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }
  public set evaluateUrl(value: string) {
    this._evaluateUrl = value;
  }
  public resetEvaluateUrl() {
    this._evaluateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateUrlInput() {
    return this._evaluateUrl;
  }

  // keys_url - computed: false, optional: true, required: false
  private _keysUrl?: string; 
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
  public set keysUrl(value: string) {
    this._keysUrl = value;
  }
  public resetKeysUrl() {
    this._keysUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysUrlInput() {
    return this._keysUrl;
  }
}
export interface AccessPolicyRequireGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#name AccessPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#teams AccessPolicy#teams}
  */
  readonly teams?: string[];
}

export function accessPolicyRequireGithubToTerraform(struct?: AccessPolicyRequireGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
  }
}


export function accessPolicyRequireGithubToHclTerraform(struct?: AccessPolicyRequireGithub | cdktf.IResolvable): any {
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
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPolicyRequireGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyRequireGithub | cdktf.IResolvable | undefined {
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
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPolicyRequireGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
      this._teams = undefined;
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
      this._teams = value.teams;
    }
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }
}

export class AccessPolicyRequireGithubList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyRequireGithub[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyRequireGithubOutputReference {
    return new AccessPolicyRequireGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyRequireGsuite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyRequireGsuiteToTerraform(struct?: AccessPolicyRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessPolicyRequireGsuiteToHclTerraform(struct?: AccessPolicyRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class AccessPolicyRequireGsuiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyRequireGsuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyRequireGsuite | cdktf.IResolvable | undefined) {
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

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class AccessPolicyRequireGsuiteList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyRequireGsuite[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyRequireGsuiteOutputReference {
    return new AccessPolicyRequireGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyRequireOkta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#name AccessPolicy#name}
  */
  readonly name?: string[];
}

export function accessPolicyRequireOktaToTerraform(struct?: AccessPolicyRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function accessPolicyRequireOktaToHclTerraform(struct?: AccessPolicyRequireOkta | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPolicyRequireOktaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyRequireOkta | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyRequireOkta | cdktf.IResolvable | undefined) {
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

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
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

export class AccessPolicyRequireOktaList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyRequireOkta[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyRequireOktaOutputReference {
    return new AccessPolicyRequireOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyRequireSaml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyRequireSamlToTerraform(struct?: AccessPolicyRequireSaml | cdktf.IResolvable): any {
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


export function accessPolicyRequireSamlToHclTerraform(struct?: AccessPolicyRequireSaml | cdktf.IResolvable): any {
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

export class AccessPolicyRequireSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyRequireSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPolicyRequireSaml | cdktf.IResolvable | undefined) {
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

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class AccessPolicyRequireSamlList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyRequireSaml[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyRequireSamlOutputReference {
    return new AccessPolicyRequireSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPolicyRequire {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#certificate AccessPolicy#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#common_name AccessPolicy#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#everyone AccessPolicy#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#geo AccessPolicy#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#group AccessPolicy#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#ip AccessPolicy#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of an existing IP list to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}
  */
  readonly ipList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#login_method AccessPolicy#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#service_token AccessPolicy#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#auth_context AccessPolicy#auth_context}
  */
  readonly authContext?: AccessPolicyRequireAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#azure AccessPolicy#azure}
  */
  readonly azure?: AccessPolicyRequireAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}
  */
  readonly externalEvaluation?: AccessPolicyRequireExternalEvaluation;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#github AccessPolicy#github}
  */
  readonly github?: AccessPolicyRequireGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}
  */
  readonly gsuite?: AccessPolicyRequireGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#okta AccessPolicy#okta}
  */
  readonly okta?: AccessPolicyRequireOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#saml AccessPolicy#saml}
  */
  readonly saml?: AccessPolicyRequireSaml[] | cdktf.IResolvable;
}

export function accessPolicyRequireToTerraform(struct?: AccessPolicyRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    device_posture: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devicePosture),
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailDomain),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
    login_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceToken),
    auth_context: cdktf.listMapper(accessPolicyRequireAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(accessPolicyRequireAzureToTerraform, true)(struct!.azure),
    external_evaluation: accessPolicyRequireExternalEvaluationToTerraform(struct!.externalEvaluation),
    github: cdktf.listMapper(accessPolicyRequireGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(accessPolicyRequireGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(accessPolicyRequireOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(accessPolicyRequireSamlToTerraform, true)(struct!.saml),
  }
}


export function accessPolicyRequireToHclTerraform(struct?: AccessPolicyRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_valid_service_token: {
      value: cdktf.booleanToHclTerraform(struct!.anyValidServiceToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.booleanToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_posture: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devicePosture),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailDomain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    everyone: {
      value: cdktf.booleanToHclTerraform(struct!.everyone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginMethod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_token: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceToken),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_context: {
      value: cdktf.listMapperHcl(accessPolicyRequireAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyRequireAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(accessPolicyRequireAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyRequireAzureList",
    },
    external_evaluation: {
      value: accessPolicyRequireExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyRequireExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(accessPolicyRequireGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyRequireGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(accessPolicyRequireGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyRequireGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(accessPolicyRequireOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyRequireOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(accessPolicyRequireSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPolicyRequireSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPolicyRequireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPolicyRequire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyValidServiceToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyValidServiceToken = this._anyValidServiceToken;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._devicePosture !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePosture = this._devicePosture;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._emailDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailDomain = this._emailDomain;
    }
    if (this._everyone !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyone = this._everyone;
    }
    if (this._geo !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList;
    }
    if (this._loginMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethod = this._loginMethod;
    }
    if (this._serviceToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken;
    }
    if (this._authContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContext = this._authContext?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._externalEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._gsuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsuite = this._gsuite?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPolicyRequire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken = undefined;
      this._authMethod = undefined;
      this._certificate = undefined;
      this._commonName = undefined;
      this._devicePosture = undefined;
      this._email = undefined;
      this._emailDomain = undefined;
      this._everyone = undefined;
      this._geo = undefined;
      this._group = undefined;
      this._ip = undefined;
      this._ipList = undefined;
      this._loginMethod = undefined;
      this._serviceToken = undefined;
      this._authContext.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._externalEvaluation.internalValue = undefined;
      this._github.internalValue = undefined;
      this._gsuite.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._saml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyValidServiceToken = value.anyValidServiceToken;
      this._authMethod = value.authMethod;
      this._certificate = value.certificate;
      this._commonName = value.commonName;
      this._devicePosture = value.devicePosture;
      this._email = value.email;
      this._emailDomain = value.emailDomain;
      this._everyone = value.everyone;
      this._geo = value.geo;
      this._group = value.group;
      this._ip = value.ip;
      this._ipList = value.ipList;
      this._loginMethod = value.loginMethod;
      this._serviceToken = value.serviceToken;
      this._authContext.internalValue = value.authContext;
      this._azure.internalValue = value.azure;
      this._externalEvaluation.internalValue = value.externalEvaluation;
      this._github.internalValue = value.github;
      this._gsuite.internalValue = value.gsuite;
      this._okta.internalValue = value.okta;
      this._saml.internalValue = value.saml;
    }
  }

  // any_valid_service_token - computed: false, optional: true, required: false
  private _anyValidServiceToken?: boolean | cdktf.IResolvable; 
  public get anyValidServiceToken() {
    return this.getBooleanAttribute('any_valid_service_token');
  }
  public set anyValidServiceToken(value: boolean | cdktf.IResolvable) {
    this._anyValidServiceToken = value;
  }
  public resetAnyValidServiceToken() {
    this._anyValidServiceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyValidServiceTokenInput() {
    return this._anyValidServiceToken;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: boolean | cdktf.IResolvable; 
  public get certificate() {
    return this.getBooleanAttribute('certificate');
  }
  public set certificate(value: boolean | cdktf.IResolvable) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture?: string[]; 
  public get devicePosture() {
    return this.getListAttribute('device_posture');
  }
  public set devicePosture(value: string[]) {
    this._devicePosture = value;
  }
  public resetDevicePosture() {
    this._devicePosture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_domain - computed: false, optional: true, required: false
  private _emailDomain?: string[]; 
  public get emailDomain() {
    return this.getListAttribute('email_domain');
  }
  public set emailDomain(value: string[]) {
    this._emailDomain = value;
  }
  public resetEmailDomain() {
    this._emailDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain;
  }

  // everyone - computed: false, optional: true, required: false
  private _everyone?: boolean | cdktf.IResolvable; 
  public get everyone() {
    return this.getBooleanAttribute('everyone');
  }
  public set everyone(value: boolean | cdktf.IResolvable) {
    this._everyone = value;
  }
  public resetEveryone() {
    this._everyone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneInput() {
    return this._everyone;
  }

  // geo - computed: false, optional: true, required: false
  private _geo?: string[]; 
  public get geo() {
    return this.getListAttribute('geo');
  }
  public set geo(value: string[]) {
    this._geo = value;
  }
  public resetGeo() {
    this._geo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return this.getListAttribute('group');
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList?: string[]; 
  public get ipList() {
    return this.getListAttribute('ip_list');
  }
  public set ipList(value: string[]) {
    this._ipList = value;
  }
  public resetIpList() {
    this._ipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // login_method - computed: false, optional: true, required: false
  private _loginMethod?: string[]; 
  public get loginMethod() {
    return this.getListAttribute('login_method');
  }
  public set loginMethod(value: string[]) {
    this._loginMethod = value;
  }
  public resetLoginMethod() {
    this._loginMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken?: string[]; 
  public get serviceToken() {
    return this.getListAttribute('service_token');
  }
  public set serviceToken(value: string[]) {
    this._serviceToken = value;
  }
  public resetServiceToken() {
    this._serviceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken;
  }

  // auth_context - computed: false, optional: true, required: false
  private _authContext = new AccessPolicyRequireAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: AccessPolicyRequireAuthContext[] | cdktf.IResolvable) {
    this._authContext.internalValue = value;
  }
  public resetAuthContext() {
    this._authContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextInput() {
    return this._authContext.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new AccessPolicyRequireAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: AccessPolicyRequireAzure[] | cdktf.IResolvable) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // external_evaluation - computed: false, optional: true, required: false
  private _externalEvaluation = new AccessPolicyRequireExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: AccessPolicyRequireExternalEvaluation) {
    this._externalEvaluation.internalValue = value;
  }
  public resetExternalEvaluation() {
    this._externalEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEvaluationInput() {
    return this._externalEvaluation.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new AccessPolicyRequireGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: AccessPolicyRequireGithub[] | cdktf.IResolvable) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // gsuite - computed: false, optional: true, required: false
  private _gsuite = new AccessPolicyRequireGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: AccessPolicyRequireGsuite[] | cdktf.IResolvable) {
    this._gsuite.internalValue = value;
  }
  public resetGsuite() {
    this._gsuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteInput() {
    return this._gsuite.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new AccessPolicyRequireOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: AccessPolicyRequireOkta[] | cdktf.IResolvable) {
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
  private _saml = new AccessPolicyRequireSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: AccessPolicyRequireSaml[] | cdktf.IResolvable) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }
}

export class AccessPolicyRequireList extends cdktf.ComplexList {
  public internalValue? : AccessPolicyRequire[] | cdktf.IResolvable

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
  public get(index: number): AccessPolicyRequireOutputReference {
    return new AccessPolicyRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy cloudflare_access_policy}
*/
export class AccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessPolicy to import
  * @param importFromId The id of the existing AccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/access_policy cloudflare_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.23.0',
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
    this._applicationId = config.applicationId;
    this._approvalRequired = config.approvalRequired;
    this._decision = config.decision;
    this._id = config.id;
    this._isolationRequired = config.isolationRequired;
    this._name = config.name;
    this._precedence = config.precedence;
    this._purposeJustificationPrompt = config.purposeJustificationPrompt;
    this._purposeJustificationRequired = config.purposeJustificationRequired;
    this._sessionDuration = config.sessionDuration;
    this._zoneId = config.zoneId;
    this._approvalGroup.internalValue = config.approvalGroup;
    this._exclude.internalValue = config.exclude;
    this._include.internalValue = config.include;
    this._require.internalValue = config.require;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
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

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // precedence - computed: false, optional: false, required: true
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
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

  // session_duration - computed: false, optional: true, required: false
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

  // zone_id - computed: true, optional: true, required: false
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

  // approval_group - computed: false, optional: true, required: false
  private _approvalGroup = new AccessPolicyApprovalGroupList(this, "approval_group", false);
  public get approvalGroup() {
    return this._approvalGroup;
  }
  public putApprovalGroup(value: AccessPolicyApprovalGroup[] | cdktf.IResolvable) {
    this._approvalGroup.internalValue = value;
  }
  public resetApprovalGroup() {
    this._approvalGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalGroupInput() {
    return this._approvalGroup.internalValue;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new AccessPolicyExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: AccessPolicyExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: false, required: true
  private _include = new AccessPolicyIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: AccessPolicyInclude[] | cdktf.IResolvable) {
    this._include.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }

  // require - computed: false, optional: true, required: false
  private _require = new AccessPolicyRequireList(this, "require", false);
  public get require() {
    return this._require;
  }
  public putRequire(value: AccessPolicyRequire[] | cdktf.IResolvable) {
    this._require.internalValue = value;
  }
  public resetRequire() {
    this._require.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      application_id: cdktf.stringToTerraform(this._applicationId),
      approval_required: cdktf.booleanToTerraform(this._approvalRequired),
      decision: cdktf.stringToTerraform(this._decision),
      id: cdktf.stringToTerraform(this._id),
      isolation_required: cdktf.booleanToTerraform(this._isolationRequired),
      name: cdktf.stringToTerraform(this._name),
      precedence: cdktf.numberToTerraform(this._precedence),
      purpose_justification_prompt: cdktf.stringToTerraform(this._purposeJustificationPrompt),
      purpose_justification_required: cdktf.booleanToTerraform(this._purposeJustificationRequired),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      approval_group: cdktf.listMapper(accessPolicyApprovalGroupToTerraform, true)(this._approvalGroup.internalValue),
      exclude: cdktf.listMapper(accessPolicyExcludeToTerraform, true)(this._exclude.internalValue),
      include: cdktf.listMapper(accessPolicyIncludeToTerraform, true)(this._include.internalValue),
      require: cdktf.listMapper(accessPolicyRequireToTerraform, true)(this._require.internalValue),
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
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      precedence: {
        value: cdktf.numberToHclTerraform(this._precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      session_duration: {
        value: cdktf.stringToHclTerraform(this._sessionDuration),
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
      approval_group: {
        value: cdktf.listMapperHcl(accessPolicyApprovalGroupToHclTerraform, true)(this._approvalGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPolicyApprovalGroupList",
      },
      exclude: {
        value: cdktf.listMapperHcl(accessPolicyExcludeToHclTerraform, true)(this._exclude.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPolicyExcludeList",
      },
      include: {
        value: cdktf.listMapperHcl(accessPolicyIncludeToHclTerraform, true)(this._include.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPolicyIncludeList",
      },
      require: {
        value: cdktf.listMapperHcl(accessPolicyRequireToHclTerraform, true)(this._require.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPolicyRequireList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
