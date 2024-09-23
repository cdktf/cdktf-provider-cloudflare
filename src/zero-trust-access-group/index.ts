// https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#account_id ZeroTrustAccessGroup#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
  */
  readonly name: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#zone_id ZeroTrustAccessGroup#zone_id}
  */
  readonly zoneId?: string;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#exclude ZeroTrustAccessGroup#exclude}
  */
  readonly exclude?: ZeroTrustAccessGroupExclude[] | cdktf.IResolvable;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#include ZeroTrustAccessGroup#include}
  */
  readonly include: ZeroTrustAccessGroupInclude[] | cdktf.IResolvable;
  /**
  * require block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#require ZeroTrustAccessGroup#require}
  */
  readonly require?: ZeroTrustAccessGroupRequire[] | cdktf.IResolvable;
}
export interface ZeroTrustAccessGroupExcludeAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessGroupExcludeAuthContextToTerraform(struct?: ZeroTrustAccessGroupExcludeAuthContext | cdktf.IResolvable): any {
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


export function zeroTrustAccessGroupExcludeAuthContextToHclTerraform(struct?: ZeroTrustAccessGroupExcludeAuthContext | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupExcludeAuthContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupExcludeAuthContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupExcludeAuthContext | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupExcludeAuthContextList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupExcludeAuthContext[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupExcludeAuthContextOutputReference {
    return new ZeroTrustAccessGroupExcludeAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupExcludeAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessGroupExcludeAzureToTerraform(struct?: ZeroTrustAccessGroupExcludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessGroupExcludeAzureToHclTerraform(struct?: ZeroTrustAccessGroupExcludeAzure | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupExcludeAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupExcludeAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupExcludeAzure | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupExcludeAzureList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupExcludeAzure[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupExcludeAzureOutputReference {
    return new ZeroTrustAccessGroupExcludeAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupExcludeExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}
  */
  readonly keysUrl?: string;
}

export function zeroTrustAccessGroupExcludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessGroupExcludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function zeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessGroupExcludeExternalEvaluation | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupExcludeExternalEvaluation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupExcludeExternalEvaluation | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupExcludeExternalEvaluationList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupExcludeExternalEvaluation[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference {
    return new ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupExcludeGithub {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
  */
  readonly name?: string;
  /**
  * The teams that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}
  */
  readonly teams?: string[];
}

export function zeroTrustAccessGroupExcludeGithubToTerraform(struct?: ZeroTrustAccessGroupExcludeGithub | cdktf.IResolvable): any {
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


export function zeroTrustAccessGroupExcludeGithubToHclTerraform(struct?: ZeroTrustAccessGroupExcludeGithub | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupExcludeGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupExcludeGithub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupExcludeGithub | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupExcludeGithubList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupExcludeGithub[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupExcludeGithubOutputReference {
    return new ZeroTrustAccessGroupExcludeGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupExcludeGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
  */
  readonly email?: string[];
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessGroupExcludeGsuiteToTerraform(struct?: ZeroTrustAccessGroupExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessGroupExcludeGsuiteToHclTerraform(struct?: ZeroTrustAccessGroupExcludeGsuite | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupExcludeGsuiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupExcludeGsuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupExcludeGsuite | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupExcludeGsuiteList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupExcludeGsuite[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupExcludeGsuiteOutputReference {
    return new ZeroTrustAccessGroupExcludeGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupExcludeOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the Okta Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
  */
  readonly name?: string[];
}

export function zeroTrustAccessGroupExcludeOktaToTerraform(struct?: ZeroTrustAccessGroupExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function zeroTrustAccessGroupExcludeOktaToHclTerraform(struct?: ZeroTrustAccessGroupExcludeOkta | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupExcludeOktaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupExcludeOkta | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupExcludeOkta | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupExcludeOktaList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupExcludeOkta[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupExcludeOktaOutputReference {
    return new ZeroTrustAccessGroupExcludeOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupExcludeSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessGroupExcludeSamlToTerraform(struct?: ZeroTrustAccessGroupExcludeSaml | cdktf.IResolvable): any {
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


export function zeroTrustAccessGroupExcludeSamlToHclTerraform(struct?: ZeroTrustAccessGroupExcludeSaml | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupExcludeSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupExcludeSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupExcludeSaml | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupExcludeSamlList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupExcludeSaml[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupExcludeSamlOutputReference {
    return new ZeroTrustAccessGroupExcludeSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupExclude {
  /**
  * Matches any valid Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Matches any valid client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Matches a valid client certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Overflow field if you need to have multiple common_name rules in a single policy.  Use in place of the singular common_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}
  */
  readonly commonNames?: string[];
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
  */
  readonly email?: string[];
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}
  */
  readonly emailList?: string[];
  /**
  * Matches everyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Matches a specific country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}
  */
  readonly geo?: string[];
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}
  */
  readonly ipList?: string[];
  /**
  * The ID of a configured identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * The ID of an Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}
  */
  readonly authContext?: ZeroTrustAccessGroupExcludeAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}
  */
  readonly azure?: ZeroTrustAccessGroupExcludeAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessGroupExcludeExternalEvaluation[] | cdktf.IResolvable;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}
  */
  readonly github?: ZeroTrustAccessGroupExcludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessGroupExcludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}
  */
  readonly okta?: ZeroTrustAccessGroupExcludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}
  */
  readonly saml?: ZeroTrustAccessGroupExcludeSaml[] | cdktf.IResolvable;
}

export function zeroTrustAccessGroupExcludeToTerraform(struct?: ZeroTrustAccessGroupExclude | cdktf.IResolvable): any {
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
    auth_context: cdktf.listMapper(zeroTrustAccessGroupExcludeAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(zeroTrustAccessGroupExcludeAzureToTerraform, true)(struct!.azure),
    external_evaluation: cdktf.listMapper(zeroTrustAccessGroupExcludeExternalEvaluationToTerraform, true)(struct!.externalEvaluation),
    github: cdktf.listMapper(zeroTrustAccessGroupExcludeGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(zeroTrustAccessGroupExcludeGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(zeroTrustAccessGroupExcludeOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(zeroTrustAccessGroupExcludeSamlToTerraform, true)(struct!.saml),
  }
}


export function zeroTrustAccessGroupExcludeToHclTerraform(struct?: ZeroTrustAccessGroupExclude | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupExcludeAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupExcludeAzureList",
    },
    external_evaluation: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform, true)(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupExcludeExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupExcludeGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupExcludeGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupExcludeOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupExcludeSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessGroupExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupExclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupExclude | cdktf.IResolvable | undefined) {
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
  private _authContext = new ZeroTrustAccessGroupExcludeAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessGroupExcludeAuthContext[] | cdktf.IResolvable) {
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
  private _azure = new ZeroTrustAccessGroupExcludeAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ZeroTrustAccessGroupExcludeAzure[] | cdktf.IResolvable) {
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
  private _externalEvaluation = new ZeroTrustAccessGroupExcludeExternalEvaluationList(this, "external_evaluation", false);
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessGroupExcludeExternalEvaluation[] | cdktf.IResolvable) {
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
  private _github = new ZeroTrustAccessGroupExcludeGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: ZeroTrustAccessGroupExcludeGithub[] | cdktf.IResolvable) {
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
  private _gsuite = new ZeroTrustAccessGroupExcludeGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessGroupExcludeGsuite[] | cdktf.IResolvable) {
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
  private _okta = new ZeroTrustAccessGroupExcludeOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessGroupExcludeOkta[] | cdktf.IResolvable) {
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
  private _saml = new ZeroTrustAccessGroupExcludeSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessGroupExcludeSaml[] | cdktf.IResolvable) {
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

export class ZeroTrustAccessGroupExcludeList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupExclude[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupExcludeOutputReference {
    return new ZeroTrustAccessGroupExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupIncludeAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessGroupIncludeAuthContextToTerraform(struct?: ZeroTrustAccessGroupIncludeAuthContext | cdktf.IResolvable): any {
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


export function zeroTrustAccessGroupIncludeAuthContextToHclTerraform(struct?: ZeroTrustAccessGroupIncludeAuthContext | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupIncludeAuthContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupIncludeAuthContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupIncludeAuthContext | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupIncludeAuthContextList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupIncludeAuthContext[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupIncludeAuthContextOutputReference {
    return new ZeroTrustAccessGroupIncludeAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupIncludeAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessGroupIncludeAzureToTerraform(struct?: ZeroTrustAccessGroupIncludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessGroupIncludeAzureToHclTerraform(struct?: ZeroTrustAccessGroupIncludeAzure | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupIncludeAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupIncludeAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupIncludeAzure | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupIncludeAzureList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupIncludeAzure[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupIncludeAzureOutputReference {
    return new ZeroTrustAccessGroupIncludeAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupIncludeExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}
  */
  readonly keysUrl?: string;
}

export function zeroTrustAccessGroupIncludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessGroupIncludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function zeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessGroupIncludeExternalEvaluation | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupIncludeExternalEvaluation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupIncludeExternalEvaluation | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupIncludeExternalEvaluationList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupIncludeExternalEvaluation[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference {
    return new ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupIncludeGithub {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
  */
  readonly name?: string;
  /**
  * The teams that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}
  */
  readonly teams?: string[];
}

export function zeroTrustAccessGroupIncludeGithubToTerraform(struct?: ZeroTrustAccessGroupIncludeGithub | cdktf.IResolvable): any {
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


export function zeroTrustAccessGroupIncludeGithubToHclTerraform(struct?: ZeroTrustAccessGroupIncludeGithub | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupIncludeGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupIncludeGithub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupIncludeGithub | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupIncludeGithubList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupIncludeGithub[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupIncludeGithubOutputReference {
    return new ZeroTrustAccessGroupIncludeGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupIncludeGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
  */
  readonly email?: string[];
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessGroupIncludeGsuiteToTerraform(struct?: ZeroTrustAccessGroupIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessGroupIncludeGsuiteToHclTerraform(struct?: ZeroTrustAccessGroupIncludeGsuite | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupIncludeGsuiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupIncludeGsuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupIncludeGsuite | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupIncludeGsuiteList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupIncludeGsuite[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupIncludeGsuiteOutputReference {
    return new ZeroTrustAccessGroupIncludeGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupIncludeOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the Okta Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
  */
  readonly name?: string[];
}

export function zeroTrustAccessGroupIncludeOktaToTerraform(struct?: ZeroTrustAccessGroupIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function zeroTrustAccessGroupIncludeOktaToHclTerraform(struct?: ZeroTrustAccessGroupIncludeOkta | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupIncludeOktaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupIncludeOkta | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupIncludeOkta | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupIncludeOktaList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupIncludeOkta[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupIncludeOktaOutputReference {
    return new ZeroTrustAccessGroupIncludeOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupIncludeSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessGroupIncludeSamlToTerraform(struct?: ZeroTrustAccessGroupIncludeSaml | cdktf.IResolvable): any {
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


export function zeroTrustAccessGroupIncludeSamlToHclTerraform(struct?: ZeroTrustAccessGroupIncludeSaml | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupIncludeSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupIncludeSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupIncludeSaml | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupIncludeSamlList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupIncludeSaml[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupIncludeSamlOutputReference {
    return new ZeroTrustAccessGroupIncludeSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupInclude {
  /**
  * Matches any valid Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Matches any valid client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Matches a valid client certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Overflow field if you need to have multiple common_name rules in a single policy.  Use in place of the singular common_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}
  */
  readonly commonNames?: string[];
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
  */
  readonly email?: string[];
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}
  */
  readonly emailList?: string[];
  /**
  * Matches everyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Matches a specific country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}
  */
  readonly geo?: string[];
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}
  */
  readonly ipList?: string[];
  /**
  * The ID of a configured identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * The ID of an Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}
  */
  readonly authContext?: ZeroTrustAccessGroupIncludeAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}
  */
  readonly azure?: ZeroTrustAccessGroupIncludeAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessGroupIncludeExternalEvaluation[] | cdktf.IResolvable;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}
  */
  readonly github?: ZeroTrustAccessGroupIncludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessGroupIncludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}
  */
  readonly okta?: ZeroTrustAccessGroupIncludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}
  */
  readonly saml?: ZeroTrustAccessGroupIncludeSaml[] | cdktf.IResolvable;
}

export function zeroTrustAccessGroupIncludeToTerraform(struct?: ZeroTrustAccessGroupInclude | cdktf.IResolvable): any {
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
    auth_context: cdktf.listMapper(zeroTrustAccessGroupIncludeAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(zeroTrustAccessGroupIncludeAzureToTerraform, true)(struct!.azure),
    external_evaluation: cdktf.listMapper(zeroTrustAccessGroupIncludeExternalEvaluationToTerraform, true)(struct!.externalEvaluation),
    github: cdktf.listMapper(zeroTrustAccessGroupIncludeGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(zeroTrustAccessGroupIncludeGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(zeroTrustAccessGroupIncludeOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(zeroTrustAccessGroupIncludeSamlToTerraform, true)(struct!.saml),
  }
}


export function zeroTrustAccessGroupIncludeToHclTerraform(struct?: ZeroTrustAccessGroupInclude | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupIncludeAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupIncludeAzureList",
    },
    external_evaluation: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform, true)(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupIncludeExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupIncludeGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupIncludeGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupIncludeOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupIncludeSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessGroupIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupInclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupInclude | cdktf.IResolvable | undefined) {
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
  private _authContext = new ZeroTrustAccessGroupIncludeAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessGroupIncludeAuthContext[] | cdktf.IResolvable) {
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
  private _azure = new ZeroTrustAccessGroupIncludeAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ZeroTrustAccessGroupIncludeAzure[] | cdktf.IResolvable) {
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
  private _externalEvaluation = new ZeroTrustAccessGroupIncludeExternalEvaluationList(this, "external_evaluation", false);
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessGroupIncludeExternalEvaluation[] | cdktf.IResolvable) {
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
  private _github = new ZeroTrustAccessGroupIncludeGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: ZeroTrustAccessGroupIncludeGithub[] | cdktf.IResolvable) {
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
  private _gsuite = new ZeroTrustAccessGroupIncludeGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessGroupIncludeGsuite[] | cdktf.IResolvable) {
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
  private _okta = new ZeroTrustAccessGroupIncludeOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessGroupIncludeOkta[] | cdktf.IResolvable) {
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
  private _saml = new ZeroTrustAccessGroupIncludeSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessGroupIncludeSaml[] | cdktf.IResolvable) {
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

export class ZeroTrustAccessGroupIncludeList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupInclude[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupIncludeOutputReference {
    return new ZeroTrustAccessGroupIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupRequireAuthContext {
  /**
  * The ACID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of the Authentication Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessGroupRequireAuthContextToTerraform(struct?: ZeroTrustAccessGroupRequireAuthContext | cdktf.IResolvable): any {
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


export function zeroTrustAccessGroupRequireAuthContextToHclTerraform(struct?: ZeroTrustAccessGroupRequireAuthContext | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupRequireAuthContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupRequireAuthContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupRequireAuthContext | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupRequireAuthContextList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupRequireAuthContext[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupRequireAuthContextOutputReference {
    return new ZeroTrustAccessGroupRequireAuthContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupRequireAzure {
  /**
  * The ID of the Azure group or user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The ID of the Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessGroupRequireAzureToTerraform(struct?: ZeroTrustAccessGroupRequireAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessGroupRequireAzureToHclTerraform(struct?: ZeroTrustAccessGroupRequireAzure | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupRequireAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupRequireAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupRequireAzure | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupRequireAzureList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupRequireAzure[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupRequireAzureOutputReference {
    return new ZeroTrustAccessGroupRequireAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupRequireExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}
  */
  readonly evaluateUrl?: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}
  */
  readonly keysUrl?: string;
}

export function zeroTrustAccessGroupRequireExternalEvaluationToTerraform(struct?: ZeroTrustAccessGroupRequireExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function zeroTrustAccessGroupRequireExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessGroupRequireExternalEvaluation | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupRequireExternalEvaluation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupRequireExternalEvaluation | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupRequireExternalEvaluationList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupRequireExternalEvaluation[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupRequireExternalEvaluationOutputReference {
    return new ZeroTrustAccessGroupRequireExternalEvaluationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupRequireGithub {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
  */
  readonly name?: string;
  /**
  * The teams that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}
  */
  readonly teams?: string[];
}

export function zeroTrustAccessGroupRequireGithubToTerraform(struct?: ZeroTrustAccessGroupRequireGithub | cdktf.IResolvable): any {
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


export function zeroTrustAccessGroupRequireGithubToHclTerraform(struct?: ZeroTrustAccessGroupRequireGithub | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupRequireGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupRequireGithub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupRequireGithub | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupRequireGithubList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupRequireGithub[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupRequireGithubOutputReference {
    return new ZeroTrustAccessGroupRequireGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupRequireGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
  */
  readonly email?: string[];
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessGroupRequireGsuiteToTerraform(struct?: ZeroTrustAccessGroupRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessGroupRequireGsuiteToHclTerraform(struct?: ZeroTrustAccessGroupRequireGsuite | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupRequireGsuiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupRequireGsuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupRequireGsuite | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupRequireGsuiteList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupRequireGsuite[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupRequireGsuiteOutputReference {
    return new ZeroTrustAccessGroupRequireGsuiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupRequireOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The name of the Okta Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
  */
  readonly name?: string[];
}

export function zeroTrustAccessGroupRequireOktaToTerraform(struct?: ZeroTrustAccessGroupRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function zeroTrustAccessGroupRequireOktaToHclTerraform(struct?: ZeroTrustAccessGroupRequireOkta | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupRequireOktaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupRequireOkta | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupRequireOkta | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupRequireOktaList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupRequireOkta[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupRequireOktaOutputReference {
    return new ZeroTrustAccessGroupRequireOktaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupRequireSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function zeroTrustAccessGroupRequireSamlToTerraform(struct?: ZeroTrustAccessGroupRequireSaml | cdktf.IResolvable): any {
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


export function zeroTrustAccessGroupRequireSamlToHclTerraform(struct?: ZeroTrustAccessGroupRequireSaml | cdktf.IResolvable): any {
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

export class ZeroTrustAccessGroupRequireSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupRequireSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupRequireSaml | cdktf.IResolvable | undefined) {
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

export class ZeroTrustAccessGroupRequireSamlList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupRequireSaml[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupRequireSamlOutputReference {
    return new ZeroTrustAccessGroupRequireSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessGroupRequire {
  /**
  * Matches any valid Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Matches any valid client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Matches a valid client certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Overflow field if you need to have multiple common_name rules in a single policy.  Use in place of the singular common_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}
  */
  readonly commonNames?: string[];
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
  */
  readonly email?: string[];
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}
  */
  readonly emailList?: string[];
  /**
  * Matches everyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Matches a specific country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}
  */
  readonly geo?: string[];
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}
  */
  readonly group?: string[];
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}
  */
  readonly ip?: string[];
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}
  */
  readonly ipList?: string[];
  /**
  * The ID of a configured identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * The ID of an Access service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * auth_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}
  */
  readonly authContext?: ZeroTrustAccessGroupRequireAuthContext[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}
  */
  readonly azure?: ZeroTrustAccessGroupRequireAzure[] | cdktf.IResolvable;
  /**
  * external_evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessGroupRequireExternalEvaluation[] | cdktf.IResolvable;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}
  */
  readonly github?: ZeroTrustAccessGroupRequireGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessGroupRequireGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}
  */
  readonly okta?: ZeroTrustAccessGroupRequireOkta[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}
  */
  readonly saml?: ZeroTrustAccessGroupRequireSaml[] | cdktf.IResolvable;
}

export function zeroTrustAccessGroupRequireToTerraform(struct?: ZeroTrustAccessGroupRequire | cdktf.IResolvable): any {
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
    auth_context: cdktf.listMapper(zeroTrustAccessGroupRequireAuthContextToTerraform, true)(struct!.authContext),
    azure: cdktf.listMapper(zeroTrustAccessGroupRequireAzureToTerraform, true)(struct!.azure),
    external_evaluation: cdktf.listMapper(zeroTrustAccessGroupRequireExternalEvaluationToTerraform, true)(struct!.externalEvaluation),
    github: cdktf.listMapper(zeroTrustAccessGroupRequireGithubToTerraform, true)(struct!.github),
    gsuite: cdktf.listMapper(zeroTrustAccessGroupRequireGsuiteToTerraform, true)(struct!.gsuite),
    okta: cdktf.listMapper(zeroTrustAccessGroupRequireOktaToTerraform, true)(struct!.okta),
    saml: cdktf.listMapper(zeroTrustAccessGroupRequireSamlToTerraform, true)(struct!.saml),
  }
}


export function zeroTrustAccessGroupRequireToHclTerraform(struct?: ZeroTrustAccessGroupRequire | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireAuthContextToHclTerraform, true)(struct!.authContext),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupRequireAuthContextList",
    },
    azure: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireAzureToHclTerraform, true)(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupRequireAzureList",
    },
    external_evaluation: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireExternalEvaluationToHclTerraform, true)(struct!.externalEvaluation),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupRequireExternalEvaluationList",
    },
    github: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireGithubToHclTerraform, true)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupRequireGithubList",
    },
    gsuite: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireGsuiteToHclTerraform, true)(struct!.gsuite),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupRequireGsuiteList",
    },
    okta: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireOktaToHclTerraform, true)(struct!.okta),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupRequireOktaList",
    },
    saml: {
      value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessGroupRequireSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessGroupRequireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessGroupRequire | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessGroupRequire | cdktf.IResolvable | undefined) {
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
  private _authContext = new ZeroTrustAccessGroupRequireAuthContextList(this, "auth_context", false);
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessGroupRequireAuthContext[] | cdktf.IResolvable) {
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
  private _azure = new ZeroTrustAccessGroupRequireAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ZeroTrustAccessGroupRequireAzure[] | cdktf.IResolvable) {
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
  private _externalEvaluation = new ZeroTrustAccessGroupRequireExternalEvaluationList(this, "external_evaluation", false);
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessGroupRequireExternalEvaluation[] | cdktf.IResolvable) {
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
  private _github = new ZeroTrustAccessGroupRequireGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: ZeroTrustAccessGroupRequireGithub[] | cdktf.IResolvable) {
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
  private _gsuite = new ZeroTrustAccessGroupRequireGsuiteList(this, "gsuite", false);
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessGroupRequireGsuite[] | cdktf.IResolvable) {
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
  private _okta = new ZeroTrustAccessGroupRequireOktaList(this, "okta", false);
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessGroupRequireOkta[] | cdktf.IResolvable) {
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
  private _saml = new ZeroTrustAccessGroupRequireSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessGroupRequireSaml[] | cdktf.IResolvable) {
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

export class ZeroTrustAccessGroupRequireList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessGroupRequire[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessGroupRequireOutputReference {
    return new ZeroTrustAccessGroupRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group}
*/
export class ZeroTrustAccessGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessGroup to import
  * @param importFromId The id of the existing ZeroTrustAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_group',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.42.0',
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
  private _exclude = new ZeroTrustAccessGroupExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: ZeroTrustAccessGroupExclude[] | cdktf.IResolvable) {
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
  private _include = new ZeroTrustAccessGroupIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: ZeroTrustAccessGroupInclude[] | cdktf.IResolvable) {
    this._include.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }

  // require - computed: false, optional: true, required: false
  private _require = new ZeroTrustAccessGroupRequireList(this, "require", false);
  public get require() {
    return this._require;
  }
  public putRequire(value: ZeroTrustAccessGroupRequire[] | cdktf.IResolvable) {
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
      exclude: cdktf.listMapper(zeroTrustAccessGroupExcludeToTerraform, true)(this._exclude.internalValue),
      include: cdktf.listMapper(zeroTrustAccessGroupIncludeToTerraform, true)(this._include.internalValue),
      require: cdktf.listMapper(zeroTrustAccessGroupRequireToTerraform, true)(this._require.internalValue),
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
        value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeToHclTerraform, true)(this._exclude.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessGroupExcludeList",
      },
      include: {
        value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeToHclTerraform, true)(this._include.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessGroupIncludeList",
      },
      require: {
        value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireToHclTerraform, true)(this._require.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessGroupRequireList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
