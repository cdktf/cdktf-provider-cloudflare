/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The expiration time on or after which the token MUST NOT be accepted for processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#expires_on ApiToken#expires_on}
  */
  readonly expiresOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#id ApiToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the API Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#name ApiToken#name}
  */
  readonly name: string;
  /**
  * The time before which the token MUST NOT be accepted for processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#not_before ApiToken#not_before}
  */
  readonly notBefore?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#condition ApiToken#condition}
  */
  readonly condition?: ApiTokenCondition;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#policy ApiToken#policy}
  */
  readonly policy: ApiTokenPolicy[] | cdktf.IResolvable;
}
export interface ApiTokenConditionRequestIp {
  /**
  * List of IP addresses or CIDR notation where the token may be used from. If not specified, the token will be valid for all IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#in ApiToken#in}
  */
  readonly in?: string[];
  /**
  * List of IP addresses or CIDR notation where the token should not be used from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#not_in ApiToken#not_in}
  */
  readonly notIn?: string[];
}

export function apiTokenConditionRequestIpToTerraform(struct?: ApiTokenConditionRequestIpOutputReference | ApiTokenConditionRequestIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.in),
    not_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notIn),
  }
}


export function apiTokenConditionRequestIpToHclTerraform(struct?: ApiTokenConditionRequestIpOutputReference | ApiTokenConditionRequestIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.in),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    not_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiTokenConditionRequestIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiTokenConditionRequestIp | undefined {
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

  public set internalValue(value: ApiTokenConditionRequestIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._in = undefined;
      this._notIn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._in = value.in;
      this._notIn = value.notIn;
    }
  }

  // in - computed: false, optional: true, required: false
  private _in?: string[]; 
  public get in() {
    return cdktf.Fn.tolist(this.getListAttribute('in'));
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
    return cdktf.Fn.tolist(this.getListAttribute('not_in'));
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
export interface ApiTokenCondition {
  /**
  * request_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#request_ip ApiToken#request_ip}
  */
  readonly requestIp?: ApiTokenConditionRequestIp;
}

export function apiTokenConditionToTerraform(struct?: ApiTokenConditionOutputReference | ApiTokenCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_ip: apiTokenConditionRequestIpToTerraform(struct!.requestIp),
  }
}


export function apiTokenConditionToHclTerraform(struct?: ApiTokenConditionOutputReference | ApiTokenCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_ip: {
      value: apiTokenConditionRequestIpToHclTerraform(struct!.requestIp),
      isBlock: true,
      type: "list",
      storageClassType: "ApiTokenConditionRequestIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiTokenConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiTokenCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIp = this._requestIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiTokenCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestIp.internalValue = value.requestIp;
    }
  }

  // request_ip - computed: false, optional: true, required: false
  private _requestIp = new ApiTokenConditionRequestIpOutputReference(this, "request_ip");
  public get requestIp() {
    return this._requestIp;
  }
  public putRequestIp(value: ApiTokenConditionRequestIp) {
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
export interface ApiTokenPolicy {
  /**
  * Effect of the policy. Available values: `allow`, `deny`. Defaults to `allow`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#effect ApiToken#effect}
  */
  readonly effect?: string;
  /**
  * List of permissions groups IDs. See [documentation](https://developers.cloudflare.com/api/tokens/create/permissions) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#permission_groups ApiToken#permission_groups}
  */
  readonly permissionGroups: string[];
  /**
  * Describes what operations against which resources are allowed or denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#resources ApiToken#resources}
  */
  readonly resources: { [key: string]: string };
}

export function apiTokenPolicyToTerraform(struct?: ApiTokenPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resources),
  }
}


export function apiTokenPolicyToHclTerraform(struct?: ApiTokenPolicy | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApiTokenPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiTokenPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiTokenPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._permissionGroups = undefined;
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
      this._permissionGroups = value.permissionGroups;
      this._resources = value.resources;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // permission_groups - computed: false, optional: false, required: true
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
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

export class ApiTokenPolicyList extends cdktf.ComplexList {
  public internalValue? : ApiTokenPolicy[] | cdktf.IResolvable

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
  public get(index: number): ApiTokenPolicyOutputReference {
    return new ApiTokenPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token cloudflare_api_token}
*/
export class ApiToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_api_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiToken to import
  * @param importFromId The id of the existing ApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/api_token cloudflare_api_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ApiTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_api_token',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.52.0',
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
    this._expiresOn = config.expiresOn;
    this._id = config.id;
    this._name = config.name;
    this._notBefore = config.notBefore;
    this._condition.internalValue = config.condition;
    this._policy.internalValue = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // issued_on - computed: true, optional: false, required: false
  public get issuedOn() {
    return this.getStringAttribute('issued_on');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ApiTokenConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ApiTokenCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new ApiTokenPolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ApiTokenPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expires_on: cdktf.stringToTerraform(this._expiresOn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      not_before: cdktf.stringToTerraform(this._notBefore),
      condition: apiTokenConditionToTerraform(this._condition.internalValue),
      policy: cdktf.listMapper(apiTokenPolicyToTerraform, true)(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expires_on: {
        value: cdktf.stringToHclTerraform(this._expiresOn),
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
      not_before: {
        value: cdktf.stringToHclTerraform(this._notBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: apiTokenConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiTokenConditionList",
      },
      policy: {
        value: cdktf.listMapperHcl(apiTokenPolicyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiTokenPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
