/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#account_id AccountToken#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#condition AccountToken#condition}
  */
  readonly condition?: AccountTokenCondition;
  /**
  * The expiration time on or after which the JWT MUST NOT be accepted for processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#expires_on AccountToken#expires_on}
  */
  readonly expiresOn?: string;
  /**
  * Token name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#name AccountToken#name}
  */
  readonly name: string;
  /**
  * The time before which the token MUST NOT be accepted for processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#not_before AccountToken#not_before}
  */
  readonly notBefore?: string;
  /**
  * List of access policies assigned to the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#policies AccountToken#policies}
  */
  readonly policies: AccountTokenPolicies[] | cdktf.IResolvable;
  /**
  * Status of the token.
  * Available values: "active", "disabled", "expired".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#status AccountToken#status}
  */
  readonly status?: string;
}
export interface AccountTokenConditionRequestIp {
  /**
  * List of IPv4/IPv6 CIDR addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#in AccountToken#in}
  */
  readonly in?: string[];
  /**
  * List of IPv4/IPv6 CIDR addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#not_in AccountToken#not_in}
  */
  readonly notIn?: string[];
}

export function accountTokenConditionRequestIpToTerraform(struct?: AccountTokenConditionRequestIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.in),
    not_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notIn),
  }
}


export function accountTokenConditionRequestIpToHclTerraform(struct?: AccountTokenConditionRequestIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.in),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notIn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountTokenConditionRequestIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountTokenConditionRequestIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._notIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notIn = this._notIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountTokenConditionRequestIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._in = undefined;
      this._notIn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._in = value.in;
      this._notIn = value.notIn;
    }
  }

  // in - computed: false, optional: true, required: false
  private _in?: string[]; 
  public get in() {
    return this.getListAttribute('in');
  }
  public set in(value: string[]) {
    this._in = value;
  }
  public resetIn() {
    this._in = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
  }

  // not_in - computed: false, optional: true, required: false
  private _notIn?: string[]; 
  public get notIn() {
    return this.getListAttribute('not_in');
  }
  public set notIn(value: string[]) {
    this._notIn = value;
  }
  public resetNotIn() {
    this._notIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInInput() {
    return this._notIn;
  }
}
export interface AccountTokenCondition {
  /**
  * Client IP restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#request_ip AccountToken#request_ip}
  */
  readonly requestIp?: AccountTokenConditionRequestIp;
}

export function accountTokenConditionToTerraform(struct?: AccountTokenCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_ip: accountTokenConditionRequestIpToTerraform(struct!.requestIp),
  }
}


export function accountTokenConditionToHclTerraform(struct?: AccountTokenCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_ip: {
      value: accountTokenConditionRequestIpToHclTerraform(struct!.requestIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountTokenConditionRequestIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountTokenConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountTokenCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIp = this._requestIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountTokenCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestIp.internalValue = value.requestIp;
    }
  }

  // request_ip - computed: false, optional: true, required: false
  private _requestIp = new AccountTokenConditionRequestIpOutputReference(this, "request_ip");
  public get requestIp() {
    return this._requestIp;
  }
  public putRequestIp(value: AccountTokenConditionRequestIp) {
    this._requestIp.internalValue = value;
  }
  public resetRequestIp() {
    this._requestIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIpInput() {
    return this._requestIp.internalValue;
  }
}
export interface AccountTokenPoliciesPermissionGroupsMeta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#key AccountToken#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#value AccountToken#value}
  */
  readonly value?: string;
}

export function accountTokenPoliciesPermissionGroupsMetaToTerraform(struct?: AccountTokenPoliciesPermissionGroupsMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function accountTokenPoliciesPermissionGroupsMetaToHclTerraform(struct?: AccountTokenPoliciesPermissionGroupsMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountTokenPoliciesPermissionGroupsMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountTokenPoliciesPermissionGroupsMeta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountTokenPoliciesPermissionGroupsMeta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountTokenPoliciesPermissionGroups {
  /**
  * Identifier of the permission group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#id AccountToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Attributes associated to the permission group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#meta AccountToken#meta}
  */
  readonly meta?: AccountTokenPoliciesPermissionGroupsMeta;
}

export function accountTokenPoliciesPermissionGroupsToTerraform(struct?: AccountTokenPoliciesPermissionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    meta: accountTokenPoliciesPermissionGroupsMetaToTerraform(struct!.meta),
  }
}


export function accountTokenPoliciesPermissionGroupsToHclTerraform(struct?: AccountTokenPoliciesPermissionGroups | cdktf.IResolvable): any {
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
    meta: {
      value: accountTokenPoliciesPermissionGroupsMetaToHclTerraform(struct!.meta),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountTokenPoliciesPermissionGroupsMeta",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountTokenPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccountTokenPoliciesPermissionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountTokenPoliciesPermissionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._meta.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._meta.internalValue = value.meta;
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

  // meta - computed: true, optional: true, required: false
  private _meta = new AccountTokenPoliciesPermissionGroupsMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: AccountTokenPoliciesPermissionGroupsMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class AccountTokenPoliciesPermissionGroupsList extends cdktf.ComplexList {
  public internalValue? : AccountTokenPoliciesPermissionGroups[] | cdktf.IResolvable

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
  public get(index: number): AccountTokenPoliciesPermissionGroupsOutputReference {
    return new AccountTokenPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountTokenPolicies {
  /**
  * Allow or deny operations against the resources.
  * Available values: "allow", "deny".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#effect AccountToken#effect}
  */
  readonly effect: string;
  /**
  * A set of permission groups that are specified to the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#permission_groups AccountToken#permission_groups}
  */
  readonly permissionGroups: AccountTokenPoliciesPermissionGroups[] | cdktf.IResolvable;
  /**
  * A list of resource names that the policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#resources AccountToken#resources}
  */
  readonly resources: { [key: string]: string };
}

export function accountTokenPoliciesToTerraform(struct?: AccountTokenPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    permission_groups: cdktf.listMapper(accountTokenPoliciesPermissionGroupsToTerraform, false)(struct!.permissionGroups),
    resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resources),
  }
}


export function accountTokenPoliciesToHclTerraform(struct?: AccountTokenPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_groups: {
      value: cdktf.listMapperHcl(accountTokenPoliciesPermissionGroupsToHclTerraform, false)(struct!.permissionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AccountTokenPoliciesPermissionGroupsList",
    },
    resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountTokenPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccountTokenPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._permissionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups?.internalValue;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountTokenPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._permissionGroups.internalValue = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._permissionGroups.internalValue = value.permissionGroups;
      this._resources = value.resources;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permission_groups - computed: false, optional: false, required: true
  private _permissionGroups = new AccountTokenPoliciesPermissionGroupsList(this, "permission_groups", false);
  public get permissionGroups() {
    return this._permissionGroups;
  }
  public putPermissionGroups(value: AccountTokenPoliciesPermissionGroups[] | cdktf.IResolvable) {
    this._permissionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: { [key: string]: string }; 
  public get resources() {
    return this.getStringMapAttribute('resources');
  }
  public set resources(value: { [key: string]: string }) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class AccountTokenPoliciesList extends cdktf.ComplexList {
  public internalValue? : AccountTokenPolicies[] | cdktf.IResolvable

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
  public get(index: number): AccountTokenPoliciesOutputReference {
    return new AccountTokenPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token cloudflare_account_token}
*/
export class AccountToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_account_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountToken to import
  * @param importFromId The id of the existing AccountToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/account_token cloudflare_account_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountTokenConfig
  */
  public constructor(scope: Construct, id: string, config: AccountTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_account_token',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._condition.internalValue = config.condition;
    this._expiresOn = config.expiresOn;
    this._name = config.name;
    this._notBefore = config.notBefore;
    this._policies.internalValue = config.policies;
    this._status = config.status;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new AccountTokenConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AccountTokenCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // expires_on - computed: false, optional: true, required: false
  private _expiresOn?: string; 
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }
  public set expiresOn(value: string) {
    this._expiresOn = value;
  }
  public resetExpiresOn() {
    this._expiresOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresOnInput() {
    return this._expiresOn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_on - computed: true, optional: false, required: false
  public get issuedOn() {
    return this.getStringAttribute('issued_on');
  }

  // last_used_on - computed: true, optional: false, required: false
  public get lastUsedOn() {
    return this.getStringAttribute('last_used_on');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // not_before - computed: false, optional: true, required: false
  private _notBefore?: string; 
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
  public set notBefore(value: string) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new AccountTokenPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: AccountTokenPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      condition: accountTokenConditionToTerraform(this._condition.internalValue),
      expires_on: cdktf.stringToTerraform(this._expiresOn),
      name: cdktf.stringToTerraform(this._name),
      not_before: cdktf.stringToTerraform(this._notBefore),
      policies: cdktf.listMapper(accountTokenPoliciesToTerraform, false)(this._policies.internalValue),
      status: cdktf.stringToTerraform(this._status),
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
      condition: {
        value: accountTokenConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountTokenCondition",
      },
      expires_on: {
        value: cdktf.stringToHclTerraform(this._expiresOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      not_before: {
        value: cdktf.stringToHclTerraform(this._notBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktf.listMapperHcl(accountTokenPoliciesToHclTerraform, false)(this._policies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccountTokenPoliciesList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
