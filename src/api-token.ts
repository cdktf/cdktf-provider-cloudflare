// https://www.terraform.io/docs/providers/cloudflare/r/api_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token#name ApiToken#name}
  */
  readonly name: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token#condition ApiToken#condition}
  */
  readonly condition?: ApiTokenCondition;
  /**
  * policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token#policy ApiToken#policy}
  */
  readonly policy: ApiTokenPolicy[] | cdktf.IResolvable;
}
export interface ApiTokenConditionRequestIp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token#in ApiToken#in}
  */
  readonly in?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token#not_in ApiToken#not_in}
  */
  readonly notIn?: string[];
}

export function apiTokenConditionRequestIpToTerraform(struct?: ApiTokenConditionRequestIpOutputReference | ApiTokenConditionRequestIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in: cdktf.listMapper(cdktf.stringToTerraform)(struct!.in),
    not_in: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notIn),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token#request_ip ApiToken#request_ip}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token#effect ApiToken#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token#permission_groups ApiToken#permission_groups}
  */
  readonly permissionGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token#resources ApiToken#resources}
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
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissionGroups),
    resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resources),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token cloudflare_api_token}
*/
export class ApiToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_api_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/api_token cloudflare_api_token} Resource
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._condition.internalValue = config.condition;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _policy?: ApiTokenPolicy[] | cdktf.IResolvable; 
  public get policy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('policy')));
  }
  public set policy(value: ApiTokenPolicy[] | cdktf.IResolvable) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      condition: apiTokenConditionToTerraform(this._condition.internalValue),
      policy: cdktf.listMapper(apiTokenPolicyToTerraform)(this._policy),
    };
  }
}
