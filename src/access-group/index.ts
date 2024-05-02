/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#account_id AccessGroup#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#id AccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#name AccessGroup#name}
  */
  readonly name: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#zone_id AccessGroup#zone_id}
  */
  readonly zoneId?: string;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#exclude AccessGroup#exclude}
  */
  readonly exclude?: AccessGroupExclude[] | cdktf.IResolvable;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#include AccessGroup#include}
  */
  readonly include: AccessGroupInclude[] | cdktf.IResolvable;
  /**
  * require block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#require AccessGroup#require}
  */
  readonly require?: AccessGroupRequire[] | cdktf.IResolvable;
}
export interface AccessGroupExcludeAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#ac_id AccessGroup#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#id AccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function accessGroupExcludeAuthContextToTerraform(struct?: AccessGroupExcludeAuthContext | cdktf.IResolvable): any {
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


export function accessGroupExcludeAuthContextToHclTerraform(struct?: AccessGroupExcludeAuthContext | cdktf.IResolvable): any {
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

export class AccessGroupExcludeAuthContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupExcludeAuthContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupExcludeAuthContext | cdktf.IResolvable | undefined) {
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

export class AccessGroupExcludeAuthContextList extends cdktf.ComplexList {
  public internalValue? : AccessGroupExcludeAuthContext[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupExcludeAuthContextOutputReference {
    return new AccessGroupExcludeAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupExcludeAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#id AccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupExcludeAzureToTerraform(struct?: AccessGroupExcludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessGroupExcludeAzureToHclTerraform(struct?: AccessGroupExcludeAzure | cdktf.IResolvable): any {
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

export class AccessGroupExcludeAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupExcludeAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupExcludeAzure | cdktf.IResolvable | undefined) {
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

export class AccessGroupExcludeAzureList extends cdktf.ComplexList {
  public internalValue? : AccessGroupExcludeAzure[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupExcludeAzureOutputReference {
    return new AccessGroupExcludeAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupExcludeExternalEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#evaluate_url AccessGroup#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#keys_url AccessGroup#keys_url}
  */
  readonly keysUrl?: string;
}

export function accessGroupExcludeExternalEvaluationToTerraform(struct?: AccessGroupExcludeExternalEvaluationOutputReference | AccessGroupExcludeExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function accessGroupExcludeExternalEvaluationToHclTerraform(struct?: AccessGroupExcludeExternalEvaluationOutputReference | AccessGroupExcludeExternalEvaluation): any {
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

export class AccessGroupExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessGroupExcludeExternalEvaluation | undefined {
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

  public set internalValue(value: AccessGroupExcludeExternalEvaluation | undefined) {
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
export interface AccessGroupExcludeGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#name AccessGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#teams AccessGroup#teams}
  */
  readonly teams?: string[];
}

export function accessGroupExcludeGithubToTerraform(struct?: AccessGroupExcludeGithub | cdktf.IResolvable): any {
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


export function accessGroupExcludeGithubToHclTerraform(struct?: AccessGroupExcludeGithub | cdktf.IResolvable): any {
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

export class AccessGroupExcludeGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupExcludeGithub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupExcludeGithub | cdktf.IResolvable | undefined) {
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

export class AccessGroupExcludeGithubList extends cdktf.ComplexList {
  public internalValue? : AccessGroupExcludeGithub[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupExcludeGithubOutputReference {
    return new AccessGroupExcludeGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupExcludeGsuite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupExcludeGsuiteToTerraform(struct?: AccessGroupExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessGroupExcludeGsuiteToHclTerraform(struct?: AccessGroupExcludeGsuite | cdktf.IResolvable): any {
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

export class AccessGroupExcludeGsuiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupExcludeGsuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupExcludeGsuite | cdktf.IResolvable | undefined) {
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

export class AccessGroupExcludeGsuiteList extends cdktf.ComplexList {
  public internalValue? : AccessGroupExcludeGsuite[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupExcludeGsuiteOutputReference {
    return new AccessGroupExcludeGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupExcludeOkta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#name AccessGroup#name}
  */
  readonly name?: string[];
}

export function accessGroupExcludeOktaToTerraform(struct?: AccessGroupExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function accessGroupExcludeOktaToHclTerraform(struct?: AccessGroupExcludeOkta | cdktf.IResolvable): any {
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

export class AccessGroupExcludeOktaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupExcludeOkta | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupExcludeOkta | cdktf.IResolvable | undefined) {
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

export class AccessGroupExcludeOktaList extends cdktf.ComplexList {
  public internalValue? : AccessGroupExcludeOkta[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupExcludeOktaOutputReference {
    return new AccessGroupExcludeOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupExcludeSaml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#attribute_name AccessGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#attribute_value AccessGroup#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupExcludeSamlToTerraform(struct?: AccessGroupExcludeSaml | cdktf.IResolvable): any {
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


export function accessGroupExcludeSamlToHclTerraform(struct?: AccessGroupExcludeSaml | cdktf.IResolvable): any {
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

export class AccessGroupExcludeSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupExcludeSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupExcludeSaml | cdktf.IResolvable | undefined) {
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

export class AccessGroupExcludeSamlList extends cdktf.ComplexList {
  public internalValue? : AccessGroupExcludeSaml[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupExcludeSamlOutputReference {
    return new AccessGroupExcludeSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#any_valid_service_token AccessGroup#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#auth_method AccessGroup#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#certificate AccessGroup#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#common_name AccessGroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Overflow field if you need to have multiple common_name rules in a single policy.  Use in place of the singular common_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#common_names AccessGroup#common_names}
  */
  readonly commonNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#device_posture AccessGroup#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#email_domain AccessGroup#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#everyone AccessGroup#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#geo AccessGroup#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#group AccessGroup#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#ip AccessGroup#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of an existing IP list to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#ip_list AccessGroup#ip_list}
  */
  readonly ipList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#login_method AccessGroup#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#service_token AccessGroup#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#auth_context AccessGroup#auth_context}
  */
  readonly authContext?: AccessGroupExcludeAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#azure AccessGroup#azure}
  */
  readonly azure?: AccessGroupExcludeAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#external_evaluation AccessGroup#external_evaluation}
  */
  readonly externalEvaluation?: AccessGroupExcludeExternalEvaluation;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#github AccessGroup#github}
  */
  readonly github?: AccessGroupExcludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#gsuite AccessGroup#gsuite}
  */
  readonly gsuite?: AccessGroupExcludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#okta AccessGroup#okta}
  */
  readonly okta?: AccessGroupExcludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#saml AccessGroup#saml}
  */
  readonly saml?: AccessGroupExcludeSaml[] | cdktf.IResolvable;
}

export function accessGroupExcludeToTerraform(struct?: AccessGroupExclude | cdktf.IResolvable): any {
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
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
    login_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceToken),
    auth_context: cdktf.listMapper(accessGroupExcludeAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(accessGroupExcludeAzureToTerraform, true)(struct!.azure),
    external_evaluation: accessGroupExcludeExternalEvaluationToTerraform(struct!.externalEvaluation),
    github: cdktf.listMapper(accessGroupExcludeGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(accessGroupExcludeGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(accessGroupExcludeOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(accessGroupExcludeSamlToTerraform, true)(struct!.saml),
  }
}


export function accessGroupExcludeToHclTerraform(struct?: AccessGroupExclude | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(accessGroupExcludeAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupExcludeAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(accessGroupExcludeAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupExcludeAzureList",
    },
    external_evaluation: {
      value: accessGroupExcludeExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupExcludeExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(accessGroupExcludeGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupExcludeGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(accessGroupExcludeGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupExcludeGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(accessGroupExcludeOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupExcludeOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(accessGroupExcludeSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupExcludeSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessGroupExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupExclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupExclude | cdktf.IResolvable | undefined) {
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
  private _authContext = new AccessGroupExcludeAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: AccessGroupExcludeAuthContext[] | cdktf.IResolvable) {
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
  private _azure = new AccessGroupExcludeAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: AccessGroupExcludeAzure[] | cdktf.IResolvable) {
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
  private _externalEvaluation = new AccessGroupExcludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: AccessGroupExcludeExternalEvaluation) {
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
  private _github = new AccessGroupExcludeGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: AccessGroupExcludeGithub[] | cdktf.IResolvable) {
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
  private _gsuite = new AccessGroupExcludeGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: AccessGroupExcludeGsuite[] | cdktf.IResolvable) {
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
  private _okta = new AccessGroupExcludeOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: AccessGroupExcludeOkta[] | cdktf.IResolvable) {
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
  private _saml = new AccessGroupExcludeSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: AccessGroupExcludeSaml[] | cdktf.IResolvable) {
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

export class AccessGroupExcludeList extends cdktf.ComplexList {
  public internalValue? : AccessGroupExclude[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupExcludeOutputReference {
    return new AccessGroupExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupIncludeAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#ac_id AccessGroup#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#id AccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function accessGroupIncludeAuthContextToTerraform(struct?: AccessGroupIncludeAuthContext | cdktf.IResolvable): any {
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


export function accessGroupIncludeAuthContextToHclTerraform(struct?: AccessGroupIncludeAuthContext | cdktf.IResolvable): any {
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

export class AccessGroupIncludeAuthContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupIncludeAuthContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupIncludeAuthContext | cdktf.IResolvable | undefined) {
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

export class AccessGroupIncludeAuthContextList extends cdktf.ComplexList {
  public internalValue? : AccessGroupIncludeAuthContext[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupIncludeAuthContextOutputReference {
    return new AccessGroupIncludeAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupIncludeAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#id AccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupIncludeAzureToTerraform(struct?: AccessGroupIncludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessGroupIncludeAzureToHclTerraform(struct?: AccessGroupIncludeAzure | cdktf.IResolvable): any {
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

export class AccessGroupIncludeAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupIncludeAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupIncludeAzure | cdktf.IResolvable | undefined) {
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

export class AccessGroupIncludeAzureList extends cdktf.ComplexList {
  public internalValue? : AccessGroupIncludeAzure[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupIncludeAzureOutputReference {
    return new AccessGroupIncludeAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupIncludeExternalEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#evaluate_url AccessGroup#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#keys_url AccessGroup#keys_url}
  */
  readonly keysUrl?: string;
}

export function accessGroupIncludeExternalEvaluationToTerraform(struct?: AccessGroupIncludeExternalEvaluationOutputReference | AccessGroupIncludeExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function accessGroupIncludeExternalEvaluationToHclTerraform(struct?: AccessGroupIncludeExternalEvaluationOutputReference | AccessGroupIncludeExternalEvaluation): any {
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

export class AccessGroupIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessGroupIncludeExternalEvaluation | undefined {
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

  public set internalValue(value: AccessGroupIncludeExternalEvaluation | undefined) {
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
export interface AccessGroupIncludeGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#name AccessGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#teams AccessGroup#teams}
  */
  readonly teams?: string[];
}

export function accessGroupIncludeGithubToTerraform(struct?: AccessGroupIncludeGithub | cdktf.IResolvable): any {
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


export function accessGroupIncludeGithubToHclTerraform(struct?: AccessGroupIncludeGithub | cdktf.IResolvable): any {
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

export class AccessGroupIncludeGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupIncludeGithub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupIncludeGithub | cdktf.IResolvable | undefined) {
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

export class AccessGroupIncludeGithubList extends cdktf.ComplexList {
  public internalValue? : AccessGroupIncludeGithub[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupIncludeGithubOutputReference {
    return new AccessGroupIncludeGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupIncludeGsuite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupIncludeGsuiteToTerraform(struct?: AccessGroupIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessGroupIncludeGsuiteToHclTerraform(struct?: AccessGroupIncludeGsuite | cdktf.IResolvable): any {
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

export class AccessGroupIncludeGsuiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupIncludeGsuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupIncludeGsuite | cdktf.IResolvable | undefined) {
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

export class AccessGroupIncludeGsuiteList extends cdktf.ComplexList {
  public internalValue? : AccessGroupIncludeGsuite[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupIncludeGsuiteOutputReference {
    return new AccessGroupIncludeGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupIncludeOkta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#name AccessGroup#name}
  */
  readonly name?: string[];
}

export function accessGroupIncludeOktaToTerraform(struct?: AccessGroupIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function accessGroupIncludeOktaToHclTerraform(struct?: AccessGroupIncludeOkta | cdktf.IResolvable): any {
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

export class AccessGroupIncludeOktaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupIncludeOkta | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupIncludeOkta | cdktf.IResolvable | undefined) {
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

export class AccessGroupIncludeOktaList extends cdktf.ComplexList {
  public internalValue? : AccessGroupIncludeOkta[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupIncludeOktaOutputReference {
    return new AccessGroupIncludeOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupIncludeSaml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#attribute_name AccessGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#attribute_value AccessGroup#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupIncludeSamlToTerraform(struct?: AccessGroupIncludeSaml | cdktf.IResolvable): any {
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


export function accessGroupIncludeSamlToHclTerraform(struct?: AccessGroupIncludeSaml | cdktf.IResolvable): any {
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

export class AccessGroupIncludeSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupIncludeSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupIncludeSaml | cdktf.IResolvable | undefined) {
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

export class AccessGroupIncludeSamlList extends cdktf.ComplexList {
  public internalValue? : AccessGroupIncludeSaml[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupIncludeSamlOutputReference {
    return new AccessGroupIncludeSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#any_valid_service_token AccessGroup#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#auth_method AccessGroup#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#certificate AccessGroup#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#common_name AccessGroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Overflow field if you need to have multiple common_name rules in a single policy.  Use in place of the singular common_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#common_names AccessGroup#common_names}
  */
  readonly commonNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#device_posture AccessGroup#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#email_domain AccessGroup#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#everyone AccessGroup#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#geo AccessGroup#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#group AccessGroup#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#ip AccessGroup#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of an existing IP list to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#ip_list AccessGroup#ip_list}
  */
  readonly ipList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#login_method AccessGroup#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#service_token AccessGroup#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#auth_context AccessGroup#auth_context}
  */
  readonly authContext?: AccessGroupIncludeAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#azure AccessGroup#azure}
  */
  readonly azure?: AccessGroupIncludeAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#external_evaluation AccessGroup#external_evaluation}
  */
  readonly externalEvaluation?: AccessGroupIncludeExternalEvaluation;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#github AccessGroup#github}
  */
  readonly github?: AccessGroupIncludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#gsuite AccessGroup#gsuite}
  */
  readonly gsuite?: AccessGroupIncludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#okta AccessGroup#okta}
  */
  readonly okta?: AccessGroupIncludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#saml AccessGroup#saml}
  */
  readonly saml?: AccessGroupIncludeSaml[] | cdktf.IResolvable;
}

export function accessGroupIncludeToTerraform(struct?: AccessGroupInclude | cdktf.IResolvable): any {
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
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
    login_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceToken),
    auth_context: cdktf.listMapper(accessGroupIncludeAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(accessGroupIncludeAzureToTerraform, true)(struct!.azure),
    external_evaluation: accessGroupIncludeExternalEvaluationToTerraform(struct!.externalEvaluation),
    github: cdktf.listMapper(accessGroupIncludeGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(accessGroupIncludeGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(accessGroupIncludeOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(accessGroupIncludeSamlToTerraform, true)(struct!.saml),
  }
}


export function accessGroupIncludeToHclTerraform(struct?: AccessGroupInclude | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(accessGroupIncludeAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupIncludeAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(accessGroupIncludeAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupIncludeAzureList",
    },
    external_evaluation: {
      value: accessGroupIncludeExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupIncludeExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(accessGroupIncludeGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupIncludeGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(accessGroupIncludeGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupIncludeGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(accessGroupIncludeOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupIncludeOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(accessGroupIncludeSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupIncludeSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessGroupIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupInclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupInclude | cdktf.IResolvable | undefined) {
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
  private _authContext = new AccessGroupIncludeAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: AccessGroupIncludeAuthContext[] | cdktf.IResolvable) {
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
  private _azure = new AccessGroupIncludeAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: AccessGroupIncludeAzure[] | cdktf.IResolvable) {
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
  private _externalEvaluation = new AccessGroupIncludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: AccessGroupIncludeExternalEvaluation) {
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
  private _github = new AccessGroupIncludeGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: AccessGroupIncludeGithub[] | cdktf.IResolvable) {
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
  private _gsuite = new AccessGroupIncludeGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: AccessGroupIncludeGsuite[] | cdktf.IResolvable) {
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
  private _okta = new AccessGroupIncludeOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: AccessGroupIncludeOkta[] | cdktf.IResolvable) {
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
  private _saml = new AccessGroupIncludeSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: AccessGroupIncludeSaml[] | cdktf.IResolvable) {
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

export class AccessGroupIncludeList extends cdktf.ComplexList {
  public internalValue? : AccessGroupInclude[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupIncludeOutputReference {
    return new AccessGroupIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupRequireAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#ac_id AccessGroup#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#id AccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function accessGroupRequireAuthContextToTerraform(struct?: AccessGroupRequireAuthContext | cdktf.IResolvable): any {
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


export function accessGroupRequireAuthContextToHclTerraform(struct?: AccessGroupRequireAuthContext | cdktf.IResolvable): any {
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

export class AccessGroupRequireAuthContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupRequireAuthContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupRequireAuthContext | cdktf.IResolvable | undefined) {
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

export class AccessGroupRequireAuthContextList extends cdktf.ComplexList {
  public internalValue? : AccessGroupRequireAuthContext[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupRequireAuthContextOutputReference {
    return new AccessGroupRequireAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupRequireAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#id AccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure Identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupRequireAzureToTerraform(struct?: AccessGroupRequireAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessGroupRequireAzureToHclTerraform(struct?: AccessGroupRequireAzure | cdktf.IResolvable): any {
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

export class AccessGroupRequireAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupRequireAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupRequireAzure | cdktf.IResolvable | undefined) {
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

export class AccessGroupRequireAzureList extends cdktf.ComplexList {
  public internalValue? : AccessGroupRequireAzure[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupRequireAzureOutputReference {
    return new AccessGroupRequireAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupRequireExternalEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#evaluate_url AccessGroup#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#keys_url AccessGroup#keys_url}
  */
  readonly keysUrl?: string;
}

export function accessGroupRequireExternalEvaluationToTerraform(struct?: AccessGroupRequireExternalEvaluationOutputReference | AccessGroupRequireExternalEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function accessGroupRequireExternalEvaluationToHclTerraform(struct?: AccessGroupRequireExternalEvaluationOutputReference | AccessGroupRequireExternalEvaluation): any {
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

export class AccessGroupRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessGroupRequireExternalEvaluation | undefined {
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

  public set internalValue(value: AccessGroupRequireExternalEvaluation | undefined) {
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
export interface AccessGroupRequireGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#name AccessGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#teams AccessGroup#teams}
  */
  readonly teams?: string[];
}

export function accessGroupRequireGithubToTerraform(struct?: AccessGroupRequireGithub | cdktf.IResolvable): any {
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


export function accessGroupRequireGithubToHclTerraform(struct?: AccessGroupRequireGithub | cdktf.IResolvable): any {
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

export class AccessGroupRequireGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupRequireGithub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupRequireGithub | cdktf.IResolvable | undefined) {
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

export class AccessGroupRequireGithubList extends cdktf.ComplexList {
  public internalValue? : AccessGroupRequireGithub[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupRequireGithubOutputReference {
    return new AccessGroupRequireGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupRequireGsuite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupRequireGsuiteToTerraform(struct?: AccessGroupRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function accessGroupRequireGsuiteToHclTerraform(struct?: AccessGroupRequireGsuite | cdktf.IResolvable): any {
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

export class AccessGroupRequireGsuiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupRequireGsuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupRequireGsuite | cdktf.IResolvable | undefined) {
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

export class AccessGroupRequireGsuiteList extends cdktf.ComplexList {
  public internalValue? : AccessGroupRequireGsuite[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupRequireGsuiteOutputReference {
    return new AccessGroupRequireGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupRequireOkta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#name AccessGroup#name}
  */
  readonly name?: string[];
}

export function accessGroupRequireOktaToTerraform(struct?: AccessGroupRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function accessGroupRequireOktaToHclTerraform(struct?: AccessGroupRequireOkta | cdktf.IResolvable): any {
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

export class AccessGroupRequireOktaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupRequireOkta | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupRequireOkta | cdktf.IResolvable | undefined) {
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

export class AccessGroupRequireOktaList extends cdktf.ComplexList {
  public internalValue? : AccessGroupRequireOkta[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupRequireOktaOutputReference {
    return new AccessGroupRequireOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupRequireSaml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#attribute_name AccessGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#attribute_value AccessGroup#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupRequireSamlToTerraform(struct?: AccessGroupRequireSaml | cdktf.IResolvable): any {
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


export function accessGroupRequireSamlToHclTerraform(struct?: AccessGroupRequireSaml | cdktf.IResolvable): any {
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

export class AccessGroupRequireSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupRequireSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupRequireSaml | cdktf.IResolvable | undefined) {
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

export class AccessGroupRequireSamlList extends cdktf.ComplexList {
  public internalValue? : AccessGroupRequireSaml[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupRequireSamlOutputReference {
    return new AccessGroupRequireSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessGroupRequire {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#any_valid_service_token AccessGroup#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#auth_method AccessGroup#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#certificate AccessGroup#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#common_name AccessGroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Overflow field if you need to have multiple common_name rules in a single policy.  Use in place of the singular common_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#common_names AccessGroup#common_names}
  */
  readonly commonNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#device_posture AccessGroup#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#email_domain AccessGroup#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#everyone AccessGroup#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#geo AccessGroup#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#group AccessGroup#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#ip AccessGroup#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of an existing IP list to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#ip_list AccessGroup#ip_list}
  */
  readonly ipList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#login_method AccessGroup#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#service_token AccessGroup#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#auth_context AccessGroup#auth_context}
  */
  readonly authContext?: AccessGroupRequireAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#azure AccessGroup#azure}
  */
  readonly azure?: AccessGroupRequireAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#external_evaluation AccessGroup#external_evaluation}
  */
  readonly externalEvaluation?: AccessGroupRequireExternalEvaluation;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#github AccessGroup#github}
  */
  readonly github?: AccessGroupRequireGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#gsuite AccessGroup#gsuite}
  */
  readonly gsuite?: AccessGroupRequireGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#okta AccessGroup#okta}
  */
  readonly okta?: AccessGroupRequireOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#saml AccessGroup#saml}
  */
  readonly saml?: AccessGroupRequireSaml[] | cdktf.IResolvable;
}

export function accessGroupRequireToTerraform(struct?: AccessGroupRequire | cdktf.IResolvable): any {
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
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
    login_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceToken),
    auth_context: cdktf.listMapper(accessGroupRequireAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(accessGroupRequireAzureToTerraform, true)(struct!.azure),
    external_evaluation: accessGroupRequireExternalEvaluationToTerraform(struct!.externalEvaluation),
    github: cdktf.listMapper(accessGroupRequireGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(accessGroupRequireGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(accessGroupRequireOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(accessGroupRequireSamlToTerraform, true)(struct!.saml),
  }
}


export function accessGroupRequireToHclTerraform(struct?: AccessGroupRequire | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(accessGroupRequireAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupRequireAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(accessGroupRequireAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupRequireAzureList",
    },
    external_evaluation: {
      value: accessGroupRequireExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupRequireExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(accessGroupRequireGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupRequireGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(accessGroupRequireGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupRequireGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(accessGroupRequireOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupRequireOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(accessGroupRequireSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "AccessGroupRequireSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessGroupRequireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessGroupRequire | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessGroupRequire | cdktf.IResolvable | undefined) {
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
  private _authContext = new AccessGroupRequireAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: AccessGroupRequireAuthContext[] | cdktf.IResolvable) {
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
  private _azure = new AccessGroupRequireAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: AccessGroupRequireAzure[] | cdktf.IResolvable) {
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
  private _externalEvaluation = new AccessGroupRequireExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: AccessGroupRequireExternalEvaluation) {
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
  private _github = new AccessGroupRequireGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: AccessGroupRequireGithub[] | cdktf.IResolvable) {
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
  private _gsuite = new AccessGroupRequireGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: AccessGroupRequireGsuite[] | cdktf.IResolvable) {
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
  private _okta = new AccessGroupRequireOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: AccessGroupRequireOkta[] | cdktf.IResolvable) {
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
  private _saml = new AccessGroupRequireSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: AccessGroupRequireSaml[] | cdktf.IResolvable) {
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

export class AccessGroupRequireList extends cdktf.ComplexList {
  public internalValue? : AccessGroupRequire[] | cdktf.IResolvable

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
  public get(index: number): AccessGroupRequireOutputReference {
    return new AccessGroupRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group cloudflare_access_group}
*/
export class AccessGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessGroup to import
  * @param importFromId The id of the existing AccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_access_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/access_group cloudflare_access_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_group',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.30.0',
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
    this._name = config.name;
    this._zoneId = config.zoneId;
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

  // exclude - computed: false, optional: true, required: false
  private _exclude = new AccessGroupExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: AccessGroupExclude[] | cdktf.IResolvable) {
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
  private _include = new AccessGroupIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: AccessGroupInclude[] | cdktf.IResolvable) {
    this._include.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }

  // require - computed: false, optional: true, required: false
  private _require = new AccessGroupRequireList(this, "require", false);
  public get require() {
    return this._require;
  }
  public putRequire(value: AccessGroupRequire[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      exclude: cdktf.listMapper(accessGroupExcludeToTerraform, true)(this._exclude.internalValue),
      include: cdktf.listMapper(accessGroupIncludeToTerraform, true)(this._include.internalValue),
      require: cdktf.listMapper(accessGroupRequireToTerraform, true)(this._require.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      exclude: {
        value: cdktf.listMapperHcl(accessGroupExcludeToHclTerraform, true)(this._exclude.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessGroupExcludeList",
      },
      include: {
        value: cdktf.listMapperHcl(accessGroupIncludeToHclTerraform, true)(this._include.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessGroupIncludeList",
      },
      require: {
        value: cdktf.listMapperHcl(accessGroupRequireToHclTerraform, true)(this._require.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessGroupRequireList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
