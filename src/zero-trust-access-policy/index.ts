// https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#account_id ZeroTrustAccessPolicy#account_id}
  */
  readonly accountId?: string;
  /**
  * The ID of the application the policy is associated with. Required when using `precedence`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#application_id ZeroTrustAccessPolicy#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#approval_required ZeroTrustAccessPolicy#approval_required}
  */
  readonly approvalRequired?: boolean | cdktf.IResolvable;
  /**
  * Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#decision ZeroTrustAccessPolicy#decision}
  */
  readonly decision: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Require this application to be served in an isolated browser for users matching this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#isolation_required ZeroTrustAccessPolicy#isolation_required}
  */
  readonly isolationRequired?: boolean | cdktf.IResolvable;
  /**
  * Friendly name of the Access Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name: string;
  /**
  * The unique precedence for policies on a single application. Required when using `application_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#precedence ZeroTrustAccessPolicy#precedence}
  */
  readonly precedence?: number;
  /**
  * The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#purpose_justification_prompt ZeroTrustAccessPolicy#purpose_justification_prompt}
  */
  readonly purposeJustificationPrompt?: string;
  /**
  * Whether to prompt the user for a justification for accessing the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#purpose_justification_required ZeroTrustAccessPolicy#purpose_justification_required}
  */
  readonly purposeJustificationRequired?: boolean | cdktf.IResolvable;
  /**
  * How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#session_duration ZeroTrustAccessPolicy#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#zone_id ZeroTrustAccessPolicy#zone_id}
  */
  readonly zoneId?: string;
  /**
  * approval_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#approval_group ZeroTrustAccessPolicy#approval_group}
  */
  readonly approvalGroup?: ZeroTrustAccessPolicyApprovalGroup[] | cdktf.IResolvable;
  /**
  * connection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#connection_rules ZeroTrustAccessPolicy#connection_rules}
  */
  readonly connectionRules?: ZeroTrustAccessPolicyConnectionRules;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#exclude ZeroTrustAccessPolicy#exclude}
  */
  readonly exclude?: ZeroTrustAccessPolicyExclude[] | cdktf.IResolvable;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#include ZeroTrustAccessPolicy#include}
  */
  readonly include: ZeroTrustAccessPolicyInclude[] | cdktf.IResolvable;
  /**
  * require block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#require ZeroTrustAccessPolicy#require}
  */
  readonly require?: ZeroTrustAccessPolicyRequire[] | cdktf.IResolvable;
}
export interface ZeroTrustAccessPolicyApprovalGroup {
  /**
  * Number of approvals needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#approvals_needed ZeroTrustAccessPolicy#approvals_needed}
  */
  readonly approvalsNeeded: number;
  /**
  * List of emails to request approval from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email_addresses ZeroTrustAccessPolicy#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email_list_uuid ZeroTrustAccessPolicy#email_list_uuid}
  */
  readonly emailListUuid?: string;
}

export function zeroTrustAccessPolicyApprovalGroupToTerraform(struct?: ZeroTrustAccessPolicyApprovalGroup | cdktf.IResolvable): any {
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


export function zeroTrustAccessPolicyApprovalGroupToHclTerraform(struct?: ZeroTrustAccessPolicyApprovalGroup | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyApprovalGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyApprovalGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyApprovalGroup | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessPolicyApprovalGroupList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyApprovalGroup[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyApprovalGroupOutputReference {
    return new ZeroTrustAccessPolicyApprovalGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyConnectionRulesSsh {
  /**
  * Allows connecting to Unix username that matches the authenticating email prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#allow_email_alias ZeroTrustAccessPolicy#allow_email_alias}
  */
  readonly allowEmailAlias?: boolean | cdktf.IResolvable;
  /**
  * Contains the Unix usernames that may be used when connecting over SSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#usernames ZeroTrustAccessPolicy#usernames}
  */
  readonly usernames: string[];
}

export function zeroTrustAccessPolicyConnectionRulesSshToTerraform(struct?: ZeroTrustAccessPolicyConnectionRulesSshOutputReference | ZeroTrustAccessPolicyConnectionRulesSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_email_alias: cdktf.booleanToTerraform(struct!.allowEmailAlias),
    usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usernames),
  }
}


export function zeroTrustAccessPolicyConnectionRulesSshToHclTerraform(struct?: ZeroTrustAccessPolicyConnectionRulesSshOutputReference | ZeroTrustAccessPolicyConnectionRulesSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_email_alias: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmailAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usernames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usernames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyConnectionRulesSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessPolicyConnectionRulesSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmailAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmailAlias = this._allowEmailAlias;
    }
    if (this._usernames !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernames = this._usernames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyConnectionRulesSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmailAlias = undefined;
      this._usernames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEmailAlias = value.allowEmailAlias;
      this._usernames = value.usernames;
    }
  }

  // allow_email_alias - computed: false, optional: true, required: false
  private _allowEmailAlias?: boolean | cdktf.IResolvable; 
  public get allowEmailAlias() {
    return this.getBooleanAttribute('allow_email_alias');
  }
  public set allowEmailAlias(value: boolean | cdktf.IResolvable) {
    this._allowEmailAlias = value;
  }
  public resetAllowEmailAlias() {
    this._allowEmailAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmailAliasInput() {
    return this._allowEmailAlias;
  }

  // usernames - computed: false, optional: false, required: true
  private _usernames?: string[]; 
  public get usernames() {
    return this.getListAttribute('usernames');
  }
  public set usernames(value: string[]) {
    this._usernames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamesInput() {
    return this._usernames;
  }
}
export interface ZeroTrustAccessPolicyConnectionRules {
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ssh ZeroTrustAccessPolicy#ssh}
  */
  readonly ssh: ZeroTrustAccessPolicyConnectionRulesSsh;
}

export function zeroTrustAccessPolicyConnectionRulesToTerraform(struct?: ZeroTrustAccessPolicyConnectionRulesOutputReference | ZeroTrustAccessPolicyConnectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh: zeroTrustAccessPolicyConnectionRulesSshToTerraform(struct!.ssh),
  }
}


export function zeroTrustAccessPolicyConnectionRulesToHclTerraform(struct?: ZeroTrustAccessPolicyConnectionRulesOutputReference | ZeroTrustAccessPolicyConnectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh: {
      value: zeroTrustAccessPolicyConnectionRulesSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyConnectionRulesSshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessPolicyConnectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessPolicyConnectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessPolicyConnectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ssh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ssh.internalValue = value.ssh;
    }
  }

  // ssh - computed: false, optional: false, required: true
  private _ssh = new ZeroTrustAccessPolicyConnectionRulesSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: ZeroTrustAccessPolicyConnectionRulesSsh) {
    this._ssh.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }
}
export interface ZeroTrustAccessPolicyExcludeAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyExcludeAuthContextList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyExcludeAuthContext[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyExcludeAuthContextOutputReference {
    return new ZeroTrustAccessPolicyExcludeAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyExcludeAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessPolicyExcludeAzureToTerraform(struct?: ZeroTrustAccessPolicyExcludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyExcludeAzureToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeAzure | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyExcludeAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyExcludeAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyExcludeAzure | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessPolicyExcludeAzureList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyExcludeAzure[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyExcludeAzureOutputReference {
    return new ZeroTrustAccessPolicyExcludeAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyExcludeExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}
  */
  readonly keysUrl?: string;
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyExcludeExternalEvaluationList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyExcludeExternalEvaluation[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference {
    return new ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyExcludeGithub {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name?: string;
  /**
  * The teams that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#teams ZeroTrustAccessPolicy#teams}
  */
  readonly teams?: string[];
}

export function zeroTrustAccessPolicyExcludeGithubToTerraform(struct?: ZeroTrustAccessPolicyExcludeGithub | cdktf.IResolvable): any {
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


export function zeroTrustAccessPolicyExcludeGithubToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeGithub | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyExcludeGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyExcludeGithub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyExcludeGithub | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessPolicyExcludeGithubList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyExcludeGithub[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyExcludeGithubOutputReference {
    return new ZeroTrustAccessPolicyExcludeGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyExcludeGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email: string[];
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyExcludeGsuiteToTerraform(struct?: ZeroTrustAccessPolicyExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
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

export class ZeroTrustAccessPolicyExcludeGsuiteOutputReference extends cdktf.ComplexObject {
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
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
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

export class ZeroTrustAccessPolicyExcludeGsuiteList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyExcludeGsuite[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyExcludeGsuiteOutputReference {
    return new ZeroTrustAccessPolicyExcludeGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyExcludeOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the Okta Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name?: string[];
}

export function zeroTrustAccessPolicyExcludeOktaToTerraform(struct?: ZeroTrustAccessPolicyExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyExcludeOktaList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyExcludeOkta[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyExcludeOktaOutputReference {
    return new ZeroTrustAccessPolicyExcludeOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyExcludeSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyExcludeSamlList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyExcludeSaml[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyExcludeSamlOutputReference {
    return new ZeroTrustAccessPolicyExcludeSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyExclude {
  /**
  * Matches any valid Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Matches any valid client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Matches a valid client certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
  */
  readonly commonName?: string;
  /**
  * Overflow field if you need to have multiple common_name rules in a single policy.  Use in place of the singular common_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#common_names ZeroTrustAccessPolicy#common_names}
  */
  readonly commonNames?: string[];
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}
  */
  readonly emailList?: string[];
  /**
  * Matches everyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Matches a specific country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}
  */
  readonly geo?: string[];
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}
  */
  readonly ipList?: string[];
  /**
  * The ID of a configured identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * The ID of an Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}
  */
  readonly authContext?: ZeroTrustAccessPolicyExcludeAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#azure ZeroTrustAccessPolicy#azure}
  */
  readonly azure?: ZeroTrustAccessPolicyExcludeAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessPolicyExcludeExternalEvaluation[] | cdktf.IResolvable;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#github ZeroTrustAccessPolicy#github}
  */
  readonly github?: ZeroTrustAccessPolicyExcludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessPolicyExcludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}
  */
  readonly okta?: ZeroTrustAccessPolicyExcludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}
  */
  readonly saml?: ZeroTrustAccessPolicyExcludeSaml[] | cdktf.IResolvable;
}

export function zeroTrustAccessPolicyExcludeToTerraform(struct?: ZeroTrustAccessPolicyExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    common_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commonNames),
    device_posture: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devicePosture),
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailDomain),
    email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailList),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
    login_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceToken),
    auth_context: cdktf.listMapper(zeroTrustAccessPolicyExcludeAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(zeroTrustAccessPolicyExcludeAzureToTerraform, true)(struct!.azure),
    external_evaluation: cdktf.listMapper(zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform, true)(struct!.externalEvaluation),
    github: cdktf.listMapper(zeroTrustAccessPolicyExcludeGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(zeroTrustAccessPolicyExcludeGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(zeroTrustAccessPolicyExcludeOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(zeroTrustAccessPolicyExcludeSamlToTerraform, true)(struct!.saml),
  }
}


export function zeroTrustAccessPolicyExcludeToHclTerraform(struct?: ZeroTrustAccessPolicyExclude | cdktf.IResolvable): any {
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
    common_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commonNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    email_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailList),
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
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyExcludeAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyExcludeAzureList",
    },
    external_evaluation: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform, true)(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyExcludeExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyExcludeGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyExcludeGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyExcludeOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyExcludeSamlList",
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
    if (this._commonNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonNames = this._commonNames;
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
    if (this._emailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList;
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

  public set internalValue(value: ZeroTrustAccessPolicyExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken = undefined;
      this._authMethod = undefined;
      this._certificate = undefined;
      this._commonName = undefined;
      this._commonNames = undefined;
      this._devicePosture = undefined;
      this._email = undefined;
      this._emailDomain = undefined;
      this._emailList = undefined;
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
      this._commonNames = value.commonNames;
      this._devicePosture = value.devicePosture;
      this._email = value.email;
      this._emailDomain = value.emailDomain;
      this._emailList = value.emailList;
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

  // common_names - computed: false, optional: true, required: false
  private _commonNames?: string[]; 
  public get commonNames() {
    return this.getListAttribute('common_names');
  }
  public set commonNames(value: string[]) {
    this._commonNames = value;
  }
  public resetCommonNames() {
    this._commonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNamesInput() {
    return this._commonNames;
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

  // email_list - computed: false, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return this.getListAttribute('email_list');
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
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
  private _authContext = new ZeroTrustAccessPolicyExcludeAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessPolicyExcludeAuthContext[] | cdktf.IResolvable) {
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
  private _azure = new ZeroTrustAccessPolicyExcludeAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ZeroTrustAccessPolicyExcludeAzure[] | cdktf.IResolvable) {
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
  private _externalEvaluation = new ZeroTrustAccessPolicyExcludeExternalEvaluationList(this, "external_evaluation", false);
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessPolicyExcludeExternalEvaluation[] | cdktf.IResolvable) {
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
  private _github = new ZeroTrustAccessPolicyExcludeGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: ZeroTrustAccessPolicyExcludeGithub[] | cdktf.IResolvable) {
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
  private _gsuite = new ZeroTrustAccessPolicyExcludeGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessPolicyExcludeGsuite[] | cdktf.IResolvable) {
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
  private _okta = new ZeroTrustAccessPolicyExcludeOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessPolicyExcludeOkta[] | cdktf.IResolvable) {
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
  private _saml = new ZeroTrustAccessPolicyExcludeSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessPolicyExcludeSaml[] | cdktf.IResolvable) {
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
export interface ZeroTrustAccessPolicyIncludeAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyIncludeAuthContextList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyIncludeAuthContext[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyIncludeAuthContextOutputReference {
    return new ZeroTrustAccessPolicyIncludeAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyIncludeAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessPolicyIncludeAzureToTerraform(struct?: ZeroTrustAccessPolicyIncludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyIncludeAzureToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeAzure | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyIncludeAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyIncludeAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyIncludeAzure | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessPolicyIncludeAzureList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyIncludeAzure[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyIncludeAzureOutputReference {
    return new ZeroTrustAccessPolicyIncludeAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyIncludeExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}
  */
  readonly keysUrl?: string;
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyIncludeExternalEvaluationList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyIncludeExternalEvaluation[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference {
    return new ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyIncludeGithub {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name?: string;
  /**
  * The teams that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#teams ZeroTrustAccessPolicy#teams}
  */
  readonly teams?: string[];
}

export function zeroTrustAccessPolicyIncludeGithubToTerraform(struct?: ZeroTrustAccessPolicyIncludeGithub | cdktf.IResolvable): any {
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


export function zeroTrustAccessPolicyIncludeGithubToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeGithub | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyIncludeGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyIncludeGithub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyIncludeGithub | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessPolicyIncludeGithubList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyIncludeGithub[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyIncludeGithubOutputReference {
    return new ZeroTrustAccessPolicyIncludeGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyIncludeGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email: string[];
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyIncludeGsuiteToTerraform(struct?: ZeroTrustAccessPolicyIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
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

export class ZeroTrustAccessPolicyIncludeGsuiteOutputReference extends cdktf.ComplexObject {
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
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
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

export class ZeroTrustAccessPolicyIncludeGsuiteList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyIncludeGsuite[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyIncludeGsuiteOutputReference {
    return new ZeroTrustAccessPolicyIncludeGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyIncludeOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the Okta Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name?: string[];
}

export function zeroTrustAccessPolicyIncludeOktaToTerraform(struct?: ZeroTrustAccessPolicyIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyIncludeOktaList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyIncludeOkta[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyIncludeOktaOutputReference {
    return new ZeroTrustAccessPolicyIncludeOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyIncludeSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyIncludeSamlList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyIncludeSaml[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyIncludeSamlOutputReference {
    return new ZeroTrustAccessPolicyIncludeSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyInclude {
  /**
  * Matches any valid Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Matches any valid client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Matches a valid client certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
  */
  readonly commonName?: string;
  /**
  * Overflow field if you need to have multiple common_name rules in a single policy.  Use in place of the singular common_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#common_names ZeroTrustAccessPolicy#common_names}
  */
  readonly commonNames?: string[];
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}
  */
  readonly emailList?: string[];
  /**
  * Matches everyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Matches a specific country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}
  */
  readonly geo?: string[];
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}
  */
  readonly ipList?: string[];
  /**
  * The ID of a configured identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * The ID of an Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}
  */
  readonly authContext?: ZeroTrustAccessPolicyIncludeAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#azure ZeroTrustAccessPolicy#azure}
  */
  readonly azure?: ZeroTrustAccessPolicyIncludeAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessPolicyIncludeExternalEvaluation[] | cdktf.IResolvable;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#github ZeroTrustAccessPolicy#github}
  */
  readonly github?: ZeroTrustAccessPolicyIncludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessPolicyIncludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}
  */
  readonly okta?: ZeroTrustAccessPolicyIncludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}
  */
  readonly saml?: ZeroTrustAccessPolicyIncludeSaml[] | cdktf.IResolvable;
}

export function zeroTrustAccessPolicyIncludeToTerraform(struct?: ZeroTrustAccessPolicyInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    common_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commonNames),
    device_posture: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devicePosture),
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailDomain),
    email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailList),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
    login_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceToken),
    auth_context: cdktf.listMapper(zeroTrustAccessPolicyIncludeAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(zeroTrustAccessPolicyIncludeAzureToTerraform, true)(struct!.azure),
    external_evaluation: cdktf.listMapper(zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform, true)(struct!.externalEvaluation),
    github: cdktf.listMapper(zeroTrustAccessPolicyIncludeGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(zeroTrustAccessPolicyIncludeGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(zeroTrustAccessPolicyIncludeOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(zeroTrustAccessPolicyIncludeSamlToTerraform, true)(struct!.saml),
  }
}


export function zeroTrustAccessPolicyIncludeToHclTerraform(struct?: ZeroTrustAccessPolicyInclude | cdktf.IResolvable): any {
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
    common_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commonNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    email_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailList),
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
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyIncludeAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyIncludeAzureList",
    },
    external_evaluation: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform, true)(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyIncludeExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyIncludeGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyIncludeGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyIncludeOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyIncludeSamlList",
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
    if (this._commonNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonNames = this._commonNames;
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
    if (this._emailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList;
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

  public set internalValue(value: ZeroTrustAccessPolicyInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken = undefined;
      this._authMethod = undefined;
      this._certificate = undefined;
      this._commonName = undefined;
      this._commonNames = undefined;
      this._devicePosture = undefined;
      this._email = undefined;
      this._emailDomain = undefined;
      this._emailList = undefined;
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
      this._commonNames = value.commonNames;
      this._devicePosture = value.devicePosture;
      this._email = value.email;
      this._emailDomain = value.emailDomain;
      this._emailList = value.emailList;
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

  // common_names - computed: false, optional: true, required: false
  private _commonNames?: string[]; 
  public get commonNames() {
    return this.getListAttribute('common_names');
  }
  public set commonNames(value: string[]) {
    this._commonNames = value;
  }
  public resetCommonNames() {
    this._commonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNamesInput() {
    return this._commonNames;
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

  // email_list - computed: false, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return this.getListAttribute('email_list');
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
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
  private _authContext = new ZeroTrustAccessPolicyIncludeAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessPolicyIncludeAuthContext[] | cdktf.IResolvable) {
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
  private _azure = new ZeroTrustAccessPolicyIncludeAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ZeroTrustAccessPolicyIncludeAzure[] | cdktf.IResolvable) {
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
  private _externalEvaluation = new ZeroTrustAccessPolicyIncludeExternalEvaluationList(this, "external_evaluation", false);
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessPolicyIncludeExternalEvaluation[] | cdktf.IResolvable) {
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
  private _github = new ZeroTrustAccessPolicyIncludeGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: ZeroTrustAccessPolicyIncludeGithub[] | cdktf.IResolvable) {
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
  private _gsuite = new ZeroTrustAccessPolicyIncludeGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessPolicyIncludeGsuite[] | cdktf.IResolvable) {
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
  private _okta = new ZeroTrustAccessPolicyIncludeOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessPolicyIncludeOkta[] | cdktf.IResolvable) {
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
  private _saml = new ZeroTrustAccessPolicyIncludeSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessPolicyIncludeSaml[] | cdktf.IResolvable) {
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
export interface ZeroTrustAccessPolicyRequireAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyRequireAuthContextList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyRequireAuthContext[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyRequireAuthContextOutputReference {
    return new ZeroTrustAccessPolicyRequireAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyRequireAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessPolicyRequireAzureToTerraform(struct?: ZeroTrustAccessPolicyRequireAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessPolicyRequireAzureToHclTerraform(struct?: ZeroTrustAccessPolicyRequireAzure | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyRequireAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyRequireAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyRequireAzure | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessPolicyRequireAzureList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyRequireAzure[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyRequireAzureOutputReference {
    return new ZeroTrustAccessPolicyRequireAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyRequireExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}
  */
  readonly keysUrl?: string;
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyRequireExternalEvaluationList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyRequireExternalEvaluation[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference {
    return new ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyRequireGithub {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name?: string;
  /**
  * The teams that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#teams ZeroTrustAccessPolicy#teams}
  */
  readonly teams?: string[];
}

export function zeroTrustAccessPolicyRequireGithubToTerraform(struct?: ZeroTrustAccessPolicyRequireGithub | cdktf.IResolvable): any {
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


export function zeroTrustAccessPolicyRequireGithubToHclTerraform(struct?: ZeroTrustAccessPolicyRequireGithub | cdktf.IResolvable): any {
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

export class ZeroTrustAccessPolicyRequireGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessPolicyRequireGithub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessPolicyRequireGithub | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessPolicyRequireGithubList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyRequireGithub[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyRequireGithubOutputReference {
    return new ZeroTrustAccessPolicyRequireGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyRequireGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email: string[];
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessPolicyRequireGsuiteToTerraform(struct?: ZeroTrustAccessPolicyRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
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

export class ZeroTrustAccessPolicyRequireGsuiteOutputReference extends cdktf.ComplexObject {
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
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
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

export class ZeroTrustAccessPolicyRequireGsuiteList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyRequireGsuite[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyRequireGsuiteOutputReference {
    return new ZeroTrustAccessPolicyRequireGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyRequireOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the Okta Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
  */
  readonly name?: string[];
}

export function zeroTrustAccessPolicyRequireOktaToTerraform(struct?: ZeroTrustAccessPolicyRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyRequireOktaList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyRequireOkta[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyRequireOktaOutputReference {
    return new ZeroTrustAccessPolicyRequireOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyRequireSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessPolicyRequireSamlList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessPolicyRequireSaml[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessPolicyRequireSamlOutputReference {
    return new ZeroTrustAccessPolicyRequireSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessPolicyRequire {
  /**
  * Matches any valid Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Matches any valid client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Matches a valid client certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
  */
  readonly commonName?: string;
  /**
  * Overflow field if you need to have multiple common_name rules in a single policy.  Use in place of the singular common_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#common_names ZeroTrustAccessPolicy#common_names}
  */
  readonly commonNames?: string[];
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}
  */
  readonly emailList?: string[];
  /**
  * Matches everyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Matches a specific country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}
  */
  readonly geo?: string[];
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}
  */
  readonly ipList?: string[];
  /**
  * The ID of a configured identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * The ID of an Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}
  */
  readonly authContext?: ZeroTrustAccessPolicyRequireAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#azure ZeroTrustAccessPolicy#azure}
  */
  readonly azure?: ZeroTrustAccessPolicyRequireAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessPolicyRequireExternalEvaluation[] | cdktf.IResolvable;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#github ZeroTrustAccessPolicy#github}
  */
  readonly github?: ZeroTrustAccessPolicyRequireGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessPolicyRequireGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}
  */
  readonly okta?: ZeroTrustAccessPolicyRequireOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}
  */
  readonly saml?: ZeroTrustAccessPolicyRequireSaml[] | cdktf.IResolvable;
}

export function zeroTrustAccessPolicyRequireToTerraform(struct?: ZeroTrustAccessPolicyRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    common_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commonNames),
    device_posture: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devicePosture),
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailDomain),
    email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailList),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
    login_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceToken),
    auth_context: cdktf.listMapper(zeroTrustAccessPolicyRequireAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(zeroTrustAccessPolicyRequireAzureToTerraform, true)(struct!.azure),
    external_evaluation: cdktf.listMapper(zeroTrustAccessPolicyRequireExternalEvaluationToTerraform, true)(struct!.externalEvaluation),
    github: cdktf.listMapper(zeroTrustAccessPolicyRequireGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(zeroTrustAccessPolicyRequireGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(zeroTrustAccessPolicyRequireOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(zeroTrustAccessPolicyRequireSamlToTerraform, true)(struct!.saml),
  }
}


export function zeroTrustAccessPolicyRequireToHclTerraform(struct?: ZeroTrustAccessPolicyRequire | cdktf.IResolvable): any {
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
    common_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commonNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    email_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailList),
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
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyRequireAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyRequireAzureList",
    },
    external_evaluation: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform, true)(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyRequireExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyRequireGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyRequireGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyRequireOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessPolicyRequireSamlList",
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
    if (this._commonNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonNames = this._commonNames;
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
    if (this._emailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList;
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

  public set internalValue(value: ZeroTrustAccessPolicyRequire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken = undefined;
      this._authMethod = undefined;
      this._certificate = undefined;
      this._commonName = undefined;
      this._commonNames = undefined;
      this._devicePosture = undefined;
      this._email = undefined;
      this._emailDomain = undefined;
      this._emailList = undefined;
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
      this._commonNames = value.commonNames;
      this._devicePosture = value.devicePosture;
      this._email = value.email;
      this._emailDomain = value.emailDomain;
      this._emailList = value.emailList;
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

  // common_names - computed: false, optional: true, required: false
  private _commonNames?: string[]; 
  public get commonNames() {
    return this.getListAttribute('common_names');
  }
  public set commonNames(value: string[]) {
    this._commonNames = value;
  }
  public resetCommonNames() {
    this._commonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNamesInput() {
    return this._commonNames;
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

  // email_list - computed: false, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return this.getListAttribute('email_list');
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
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
  private _authContext = new ZeroTrustAccessPolicyRequireAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessPolicyRequireAuthContext[] | cdktf.IResolvable) {
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
  private _azure = new ZeroTrustAccessPolicyRequireAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ZeroTrustAccessPolicyRequireAzure[] | cdktf.IResolvable) {
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
  private _externalEvaluation = new ZeroTrustAccessPolicyRequireExternalEvaluationList(this, "external_evaluation", false);
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessPolicyRequireExternalEvaluation[] | cdktf.IResolvable) {
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
  private _github = new ZeroTrustAccessPolicyRequireGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: ZeroTrustAccessPolicyRequireGithub[] | cdktf.IResolvable) {
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
  private _gsuite = new ZeroTrustAccessPolicyRequireGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessPolicyRequireGsuite[] | cdktf.IResolvable) {
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
  private _okta = new ZeroTrustAccessPolicyRequireOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessPolicyRequireOkta[] | cdktf.IResolvable) {
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
  private _saml = new ZeroTrustAccessPolicyRequireSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessPolicyRequireSaml[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy}
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
  * @param importFromId The id of the existing ZeroTrustAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy} Resource
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
        providerVersion: '4.49.1',
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
    this._connectionRules.internalValue = config.connectionRules;
    this._exclude.internalValue = config.exclude;
    this._include.internalValue = config.include;
    this._require.internalValue = config.require;
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

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
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

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
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

  // approval_group - computed: false, optional: true, required: false
  private _approvalGroup = new ZeroTrustAccessPolicyApprovalGroupList(this, "approval_group", false);
  public get approvalGroup() {
    return this._approvalGroup;
  }
  public putApprovalGroup(value: ZeroTrustAccessPolicyApprovalGroup[] | cdktf.IResolvable) {
    this._approvalGroup.internalValue = value;
  }
  public resetApprovalGroup() {
    this._approvalGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalGroupInput() {
    return this._approvalGroup.internalValue;
  }

  // connection_rules - computed: false, optional: true, required: false
  private _connectionRules = new ZeroTrustAccessPolicyConnectionRulesOutputReference(this, "connection_rules");
  public get connectionRules() {
    return this._connectionRules;
  }
  public putConnectionRules(value: ZeroTrustAccessPolicyConnectionRules) {
    this._connectionRules.internalValue = value;
  }
  public resetConnectionRules() {
    this._connectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRulesInput() {
    return this._connectionRules.internalValue;
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
      approval_group: cdktf.listMapper(zeroTrustAccessPolicyApprovalGroupToTerraform, true)(this._approvalGroup.internalValue),
      connection_rules: zeroTrustAccessPolicyConnectionRulesToTerraform(this._connectionRules.internalValue),
      exclude: cdktf.listMapper(zeroTrustAccessPolicyExcludeToTerraform, true)(this._exclude.internalValue),
      include: cdktf.listMapper(zeroTrustAccessPolicyIncludeToTerraform, true)(this._include.internalValue),
      require: cdktf.listMapper(zeroTrustAccessPolicyRequireToTerraform, true)(this._require.internalValue),
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
        value: cdktf.listMapperHcl(zeroTrustAccessPolicyApprovalGroupToHclTerraform, true)(this._approvalGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessPolicyApprovalGroupList",
      },
      connection_rules: {
        value: zeroTrustAccessPolicyConnectionRulesToHclTerraform(this._connectionRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessPolicyConnectionRulesList",
      },
      exclude: {
        value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeToHclTerraform, true)(this._exclude.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessPolicyExcludeList",
      },
      include: {
        value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeToHclTerraform, true)(this._include.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessPolicyIncludeList",
      },
      require: {
        value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireToHclTerraform, true)(this._require.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessPolicyRequireList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
