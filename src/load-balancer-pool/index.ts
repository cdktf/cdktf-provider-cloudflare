// https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#account_id LoadBalancerPool#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#check_regions LoadBalancerPool#check_regions}
  */
  readonly checkRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#description LoadBalancerPool#description}
  */
  readonly description?: string;
  /**
  * Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#enabled LoadBalancerPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#id LoadBalancerPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#latitude LoadBalancerPool#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#longitude LoadBalancerPool#longitude}
  */
  readonly longitude?: number;
  /**
  * Defaults to `1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}
  */
  readonly minimumOrigins?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#monitor LoadBalancerPool#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#name LoadBalancerPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#notification_email LoadBalancerPool#notification_email}
  */
  readonly notificationEmail?: string;
  /**
  * load_shedding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}
  */
  readonly loadShedding?: LoadBalancerPoolLoadShedding[] | cdktf.IResolvable;
  /**
  * origin_steering block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}
  */
  readonly originSteering?: LoadBalancerPoolOriginSteering[] | cdktf.IResolvable;
  /**
  * origins block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#origins LoadBalancerPool#origins}
  */
  readonly origins: LoadBalancerPoolOrigins[] | cdktf.IResolvable;
}
export interface LoadBalancerPoolLoadShedding {
  /**
  * Defaults to `0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#default_percent LoadBalancerPool#default_percent}
  */
  readonly defaultPercent?: number;
  /**
  * Defaults to `""`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#default_policy LoadBalancerPool#default_policy}
  */
  readonly defaultPolicy?: string;
  /**
  * Defaults to `0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#session_percent LoadBalancerPool#session_percent}
  */
  readonly sessionPercent?: number;
  /**
  * Defaults to `""`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#session_policy LoadBalancerPool#session_policy}
  */
  readonly sessionPolicy?: string;
}

export function loadBalancerPoolLoadSheddingToTerraform(struct?: LoadBalancerPoolLoadShedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_percent: cdktf.numberToTerraform(struct!.defaultPercent),
    default_policy: cdktf.stringToTerraform(struct!.defaultPolicy),
    session_percent: cdktf.numberToTerraform(struct!.sessionPercent),
    session_policy: cdktf.stringToTerraform(struct!.sessionPolicy),
  }
}

export class LoadBalancerPoolLoadSheddingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerPoolLoadShedding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPercent = this._defaultPercent;
    }
    if (this._defaultPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPolicy = this._defaultPolicy;
    }
    if (this._sessionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPercent = this._sessionPercent;
    }
    if (this._sessionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPolicy = this._sessionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolLoadShedding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPercent = undefined;
      this._defaultPolicy = undefined;
      this._sessionPercent = undefined;
      this._sessionPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPercent = value.defaultPercent;
      this._defaultPolicy = value.defaultPolicy;
      this._sessionPercent = value.sessionPercent;
      this._sessionPolicy = value.sessionPolicy;
    }
  }

  // default_percent - computed: false, optional: true, required: false
  private _defaultPercent?: number; 
  public get defaultPercent() {
    return this.getNumberAttribute('default_percent');
  }
  public set defaultPercent(value: number) {
    this._defaultPercent = value;
  }
  public resetDefaultPercent() {
    this._defaultPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPercentInput() {
    return this._defaultPercent;
  }

  // default_policy - computed: false, optional: true, required: false
  private _defaultPolicy?: string; 
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }
  public set defaultPolicy(value: string) {
    this._defaultPolicy = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy;
  }

  // session_percent - computed: false, optional: true, required: false
  private _sessionPercent?: number; 
  public get sessionPercent() {
    return this.getNumberAttribute('session_percent');
  }
  public set sessionPercent(value: number) {
    this._sessionPercent = value;
  }
  public resetSessionPercent() {
    this._sessionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPercentInput() {
    return this._sessionPercent;
  }

  // session_policy - computed: false, optional: true, required: false
  private _sessionPolicy?: string; 
  public get sessionPolicy() {
    return this.getStringAttribute('session_policy');
  }
  public set sessionPolicy(value: string) {
    this._sessionPolicy = value;
  }
  public resetSessionPolicy() {
    this._sessionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPolicyInput() {
    return this._sessionPolicy;
  }
}

export class LoadBalancerPoolLoadSheddingList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerPoolLoadShedding[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerPoolLoadSheddingOutputReference {
    return new LoadBalancerPoolLoadSheddingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerPoolOriginSteering {
  /**
  * Defaults to `random`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#policy LoadBalancerPool#policy}
  */
  readonly policy?: string;
}

export function loadBalancerPoolOriginSteeringToTerraform(struct?: LoadBalancerPoolOriginSteering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}

export class LoadBalancerPoolOriginSteeringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerPoolOriginSteering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolOriginSteering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}

export class LoadBalancerPoolOriginSteeringList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerPoolOriginSteering[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerPoolOriginSteeringOutputReference {
    return new LoadBalancerPoolOriginSteeringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerPoolOriginsHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#header LoadBalancerPool#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#values LoadBalancerPool#values}
  */
  readonly values: string[];
}

export function loadBalancerPoolOriginsHeaderToTerraform(struct?: LoadBalancerPoolOriginsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class LoadBalancerPoolOriginsHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerPoolOriginsHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolOriginsHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._values = value.values;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class LoadBalancerPoolOriginsHeaderList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerPoolOriginsHeader[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerPoolOriginsHeaderOutputReference {
    return new LoadBalancerPoolOriginsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerPoolOrigins {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#address LoadBalancerPool#address}
  */
  readonly address: string;
  /**
  * Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#enabled LoadBalancerPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#name LoadBalancerPool#name}
  */
  readonly name: string;
  /**
  * Defaults to `1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#weight LoadBalancerPool#weight}
  */
  readonly weight?: number;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool#header LoadBalancerPool#header}
  */
  readonly header?: LoadBalancerPoolOriginsHeader[] | cdktf.IResolvable;
}

export function loadBalancerPoolOriginsToTerraform(struct?: LoadBalancerPoolOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
    header: cdktf.listMapper(loadBalancerPoolOriginsHeaderToTerraform, true)(struct!.header),
  }
}

export class LoadBalancerPoolOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerPoolOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPoolOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._weight = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._enabled = value.enabled;
      this._name = value.name;
      this._weight = value.weight;
      this._header.internalValue = value.header;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header - computed: false, optional: true, required: false
  private _header = new LoadBalancerPoolOriginsHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: LoadBalancerPoolOriginsHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class LoadBalancerPoolOriginsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerPoolOrigins[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerPoolOriginsOutputReference {
    return new LoadBalancerPoolOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool cloudflare_load_balancer_pool}
*/
export class LoadBalancerPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool cloudflare_load_balancer_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerPoolConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer_pool',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.28.0',
        providerVersionConstraint: '~> 3.14'
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
    this._checkRegions = config.checkRegions;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._minimumOrigins = config.minimumOrigins;
    this._monitor = config.monitor;
    this._name = config.name;
    this._notificationEmail = config.notificationEmail;
    this._loadShedding.internalValue = config.loadShedding;
    this._originSteering.internalValue = config.originSteering;
    this._origins.internalValue = config.origins;
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

  // check_regions - computed: true, optional: true, required: false
  private _checkRegions?: string[]; 
  public get checkRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('check_regions'));
  }
  public set checkRegions(value: string[]) {
    this._checkRegions = value;
  }
  public resetCheckRegions() {
    this._checkRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRegionsInput() {
    return this._checkRegions;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // minimum_origins - computed: false, optional: true, required: false
  private _minimumOrigins?: number; 
  public get minimumOrigins() {
    return this.getNumberAttribute('minimum_origins');
  }
  public set minimumOrigins(value: number) {
    this._minimumOrigins = value;
  }
  public resetMinimumOrigins() {
    this._minimumOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumOriginsInput() {
    return this._minimumOrigins;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
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

  // notification_email - computed: false, optional: true, required: false
  private _notificationEmail?: string; 
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }
  public set notificationEmail(value: string) {
    this._notificationEmail = value;
  }
  public resetNotificationEmail() {
    this._notificationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailInput() {
    return this._notificationEmail;
  }

  // load_shedding - computed: false, optional: true, required: false
  private _loadShedding = new LoadBalancerPoolLoadSheddingList(this, "load_shedding", true);
  public get loadShedding() {
    return this._loadShedding;
  }
  public putLoadShedding(value: LoadBalancerPoolLoadShedding[] | cdktf.IResolvable) {
    this._loadShedding.internalValue = value;
  }
  public resetLoadShedding() {
    this._loadShedding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadSheddingInput() {
    return this._loadShedding.internalValue;
  }

  // origin_steering - computed: false, optional: true, required: false
  private _originSteering = new LoadBalancerPoolOriginSteeringList(this, "origin_steering", true);
  public get originSteering() {
    return this._originSteering;
  }
  public putOriginSteering(value: LoadBalancerPoolOriginSteering[] | cdktf.IResolvable) {
    this._originSteering.internalValue = value;
  }
  public resetOriginSteering() {
    this._originSteering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSteeringInput() {
    return this._originSteering.internalValue;
  }

  // origins - computed: false, optional: false, required: true
  private _origins = new LoadBalancerPoolOriginsList(this, "origins", true);
  public get origins() {
    return this._origins;
  }
  public putOrigins(value: LoadBalancerPoolOrigins[] | cdktf.IResolvable) {
    this._origins.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      check_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._checkRegions),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      minimum_origins: cdktf.numberToTerraform(this._minimumOrigins),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      load_shedding: cdktf.listMapper(loadBalancerPoolLoadSheddingToTerraform, true)(this._loadShedding.internalValue),
      origin_steering: cdktf.listMapper(loadBalancerPoolOriginSteeringToTerraform, true)(this._originSteering.internalValue),
      origins: cdktf.listMapper(loadBalancerPoolOriginsToTerraform, true)(this._origins.internalValue),
    };
  }
}
