// https://www.terraform.io/docs/providers/cloudflare/r/load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#default_pool_ids LoadBalancer#default_pool_ids}
  */
  readonly defaultPoolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#description LoadBalancer#description}
  */
  readonly description?: string;
  /**
  * Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#enabled LoadBalancer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#fallback_pool_id LoadBalancer#fallback_pool_id}
  */
  readonly fallbackPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#id LoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#name LoadBalancer#name}
  */
  readonly name: string;
  /**
  * Defaults to `false`. Conflicts with `ttl`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#proxied LoadBalancer#proxied}
  */
  readonly proxied?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `none`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity LoadBalancer#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
  */
  readonly sessionAffinityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
  */
  readonly sessionAffinityTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#steering_policy LoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Conflicts with `proxied`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#ttl LoadBalancer#ttl}
  */
  readonly ttl?: number;
  /**
  * The zone identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#zone_id LoadBalancer#zone_id}
  */
  readonly zoneId: string;
  /**
  * country_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#country_pools LoadBalancer#country_pools}
  */
  readonly countryPools?: LoadBalancerCountryPools[] | cdktf.IResolvable;
  /**
  * pop_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pop_pools LoadBalancer#pop_pools}
  */
  readonly popPools?: LoadBalancerPopPools[] | cdktf.IResolvable;
  /**
  * region_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#region_pools LoadBalancer#region_pools}
  */
  readonly regionPools?: LoadBalancerRegionPools[] | cdktf.IResolvable;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#rules LoadBalancer#rules}
  */
  readonly rules?: LoadBalancerRules[] | cdktf.IResolvable;
}
export interface LoadBalancerCountryPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#country LoadBalancer#country}
  */
  readonly country: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
}

export function loadBalancerCountryPoolsToTerraform(struct?: LoadBalancerCountryPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
  }
}

export class LoadBalancerCountryPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerCountryPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerCountryPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._country = undefined;
      this._poolIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._country = value.country;
      this._poolIds = value.poolIds;
    }
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }
}

export class LoadBalancerCountryPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerCountryPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerCountryPoolsOutputReference {
    return new LoadBalancerCountryPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerPopPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pop LoadBalancer#pop}
  */
  readonly pop: string;
}

export function loadBalancerPopPoolsToTerraform(struct?: LoadBalancerPopPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
    pop: cdktf.stringToTerraform(struct!.pop),
  }
}

export class LoadBalancerPopPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerPopPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    if (this._pop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop = this._pop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPopPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolIds = undefined;
      this._pop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolIds = value.poolIds;
      this._pop = value.pop;
    }
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }
}

export class LoadBalancerPopPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerPopPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerPopPoolsOutputReference {
    return new LoadBalancerPopPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRegionPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#region LoadBalancer#region}
  */
  readonly region: string;
}

export function loadBalancerRegionPoolsToTerraform(struct?: LoadBalancerRegionPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class LoadBalancerRegionPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRegionPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRegionPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolIds = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolIds = value.poolIds;
      this._region = value.region;
    }
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class LoadBalancerRegionPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRegionPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRegionPoolsOutputReference {
    return new LoadBalancerRegionPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesFixedResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#content_type LoadBalancer#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#location LoadBalancer#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#message_body LoadBalancer#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#status_code LoadBalancer#status_code}
  */
  readonly statusCode?: number;
}

export function loadBalancerRulesFixedResponseToTerraform(struct?: LoadBalancerRulesFixedResponseOutputReference | LoadBalancerRulesFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    location: cdktf.stringToTerraform(struct!.location),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}

export class LoadBalancerRulesFixedResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerRulesFixedResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesFixedResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._location = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._location = value.location;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // message_body - computed: false, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface LoadBalancerRulesOverridesCountryPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#country LoadBalancer#country}
  */
  readonly country: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
}

export function loadBalancerRulesOverridesCountryPoolsToTerraform(struct?: LoadBalancerRulesOverridesCountryPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
  }
}

export class LoadBalancerRulesOverridesCountryPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRulesOverridesCountryPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesCountryPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._country = undefined;
      this._poolIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._country = value.country;
      this._poolIds = value.poolIds;
    }
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }
}

export class LoadBalancerRulesOverridesCountryPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesCountryPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesCountryPoolsOutputReference {
    return new LoadBalancerRulesOverridesCountryPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverridesPopPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pop LoadBalancer#pop}
  */
  readonly pop: string;
}

export function loadBalancerRulesOverridesPopPoolsToTerraform(struct?: LoadBalancerRulesOverridesPopPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
    pop: cdktf.stringToTerraform(struct!.pop),
  }
}

export class LoadBalancerRulesOverridesPopPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRulesOverridesPopPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    if (this._pop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop = this._pop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesPopPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolIds = undefined;
      this._pop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolIds = value.poolIds;
      this._pop = value.pop;
    }
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }
}

export class LoadBalancerRulesOverridesPopPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesPopPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesPopPoolsOutputReference {
    return new LoadBalancerRulesOverridesPopPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverridesRegionPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pool_ids LoadBalancer#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#region LoadBalancer#region}
  */
  readonly region: string;
}

export function loadBalancerRulesOverridesRegionPoolsToTerraform(struct?: LoadBalancerRulesOverridesRegionPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class LoadBalancerRulesOverridesRegionPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRulesOverridesRegionPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIds = this._poolIds;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverridesRegionPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolIds = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolIds = value.poolIds;
      this._region = value.region;
    }
  }

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return this.getListAttribute('pool_ids');
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class LoadBalancerRulesOverridesRegionPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverridesRegionPools[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesRegionPoolsOutputReference {
    return new LoadBalancerRulesOverridesRegionPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRulesOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#default_pools LoadBalancer#default_pools}
  */
  readonly defaultPools?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#fallback_pool LoadBalancer#fallback_pool}
  */
  readonly fallbackPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity LoadBalancer#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
  */
  readonly sessionAffinityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
  */
  readonly sessionAffinityTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#steering_policy LoadBalancer#steering_policy}
  */
  readonly steeringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#ttl LoadBalancer#ttl}
  */
  readonly ttl?: number;
  /**
  * country_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#country_pools LoadBalancer#country_pools}
  */
  readonly countryPools?: LoadBalancerRulesOverridesCountryPools[] | cdktf.IResolvable;
  /**
  * pop_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#pop_pools LoadBalancer#pop_pools}
  */
  readonly popPools?: LoadBalancerRulesOverridesPopPools[] | cdktf.IResolvable;
  /**
  * region_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#region_pools LoadBalancer#region_pools}
  */
  readonly regionPools?: LoadBalancerRulesOverridesRegionPools[] | cdktf.IResolvable;
}

export function loadBalancerRulesOverridesToTerraform(struct?: LoadBalancerRulesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultPools),
    fallback_pool: cdktf.stringToTerraform(struct!.fallbackPool),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sessionAffinityAttributes),
    session_affinity_ttl: cdktf.numberToTerraform(struct!.sessionAffinityTtl),
    steering_policy: cdktf.stringToTerraform(struct!.steeringPolicy),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    country_pools: cdktf.listMapper(loadBalancerRulesOverridesCountryPoolsToTerraform, true)(struct!.countryPools),
    pop_pools: cdktf.listMapper(loadBalancerRulesOverridesPopPoolsToTerraform, true)(struct!.popPools),
    region_pools: cdktf.listMapper(loadBalancerRulesOverridesRegionPoolsToTerraform, true)(struct!.regionPools),
  }
}

export class LoadBalancerRulesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRulesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPools = this._defaultPools;
    }
    if (this._fallbackPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackPool = this._fallbackPool;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._sessionAffinityAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityAttributes = this._sessionAffinityAttributes;
    }
    if (this._sessionAffinityTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityTtl = this._sessionAffinityTtl;
    }
    if (this._steeringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.steeringPolicy = this._steeringPolicy;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._countryPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryPools = this._countryPools?.internalValue;
    }
    if (this._popPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.popPools = this._popPools?.internalValue;
    }
    if (this._regionPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionPools = this._regionPools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRulesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPools = undefined;
      this._fallbackPool = undefined;
      this._sessionAffinity = undefined;
      this._sessionAffinityAttributes = undefined;
      this._sessionAffinityTtl = undefined;
      this._steeringPolicy = undefined;
      this._ttl = undefined;
      this._countryPools.internalValue = undefined;
      this._popPools.internalValue = undefined;
      this._regionPools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPools = value.defaultPools;
      this._fallbackPool = value.fallbackPool;
      this._sessionAffinity = value.sessionAffinity;
      this._sessionAffinityAttributes = value.sessionAffinityAttributes;
      this._sessionAffinityTtl = value.sessionAffinityTtl;
      this._steeringPolicy = value.steeringPolicy;
      this._ttl = value.ttl;
      this._countryPools.internalValue = value.countryPools;
      this._popPools.internalValue = value.popPools;
      this._regionPools.internalValue = value.regionPools;
    }
  }

  // default_pools - computed: false, optional: true, required: false
  private _defaultPools?: string[]; 
  public get defaultPools() {
    return this.getListAttribute('default_pools');
  }
  public set defaultPools(value: string[]) {
    this._defaultPools = value;
  }
  public resetDefaultPools() {
    this._defaultPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolsInput() {
    return this._defaultPools;
  }

  // fallback_pool - computed: false, optional: true, required: false
  private _fallbackPool?: string; 
  public get fallbackPool() {
    return this.getStringAttribute('fallback_pool');
  }
  public set fallbackPool(value: string) {
    this._fallbackPool = value;
  }
  public resetFallbackPool() {
    this._fallbackPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPoolInput() {
    return this._fallbackPool;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // session_affinity_attributes - computed: false, optional: true, required: false
  private _sessionAffinityAttributes?: { [key: string]: string }; 
  public get sessionAffinityAttributes() {
    return this.getStringMapAttribute('session_affinity_attributes');
  }
  public set sessionAffinityAttributes(value: { [key: string]: string }) {
    this._sessionAffinityAttributes = value;
  }
  public resetSessionAffinityAttributes() {
    this._sessionAffinityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityAttributesInput() {
    return this._sessionAffinityAttributes;
  }

  // session_affinity_ttl - computed: false, optional: true, required: false
  private _sessionAffinityTtl?: number; 
  public get sessionAffinityTtl() {
    return this.getNumberAttribute('session_affinity_ttl');
  }
  public set sessionAffinityTtl(value: number) {
    this._sessionAffinityTtl = value;
  }
  public resetSessionAffinityTtl() {
    this._sessionAffinityTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityTtlInput() {
    return this._sessionAffinityTtl;
  }

  // steering_policy - computed: false, optional: true, required: false
  private _steeringPolicy?: string; 
  public get steeringPolicy() {
    return this.getStringAttribute('steering_policy');
  }
  public set steeringPolicy(value: string) {
    this._steeringPolicy = value;
  }
  public resetSteeringPolicy() {
    this._steeringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get steeringPolicyInput() {
    return this._steeringPolicy;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // country_pools - computed: false, optional: true, required: false
  private _countryPools = new LoadBalancerRulesOverridesCountryPoolsList(this, "country_pools", true);
  public get countryPools() {
    return this._countryPools;
  }
  public putCountryPools(value: LoadBalancerRulesOverridesCountryPools[] | cdktf.IResolvable) {
    this._countryPools.internalValue = value;
  }
  public resetCountryPools() {
    this._countryPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryPoolsInput() {
    return this._countryPools.internalValue;
  }

  // pop_pools - computed: false, optional: true, required: false
  private _popPools = new LoadBalancerRulesOverridesPopPoolsList(this, "pop_pools", true);
  public get popPools() {
    return this._popPools;
  }
  public putPopPools(value: LoadBalancerRulesOverridesPopPools[] | cdktf.IResolvable) {
    this._popPools.internalValue = value;
  }
  public resetPopPools() {
    this._popPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popPoolsInput() {
    return this._popPools.internalValue;
  }

  // region_pools - computed: false, optional: true, required: false
  private _regionPools = new LoadBalancerRulesOverridesRegionPoolsList(this, "region_pools", true);
  public get regionPools() {
    return this._regionPools;
  }
  public putRegionPools(value: LoadBalancerRulesOverridesRegionPools[] | cdktf.IResolvable) {
    this._regionPools.internalValue = value;
  }
  public resetRegionPools() {
    this._regionPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPoolsInput() {
    return this._regionPools.internalValue;
  }
}

export class LoadBalancerRulesOverridesList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRulesOverrides[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOverridesOutputReference {
    return new LoadBalancerRulesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#condition LoadBalancer#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#disabled LoadBalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#name LoadBalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#priority LoadBalancer#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#terminates LoadBalancer#terminates}
  */
  readonly terminates?: boolean | cdktf.IResolvable;
  /**
  * fixed_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#fixed_response LoadBalancer#fixed_response}
  */
  readonly fixedResponse?: LoadBalancerRulesFixedResponse;
  /**
  * overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer#overrides LoadBalancer#overrides}
  */
  readonly overrides?: LoadBalancerRulesOverrides[] | cdktf.IResolvable;
}

export function loadBalancerRulesToTerraform(struct?: LoadBalancerRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    terminates: cdktf.booleanToTerraform(struct!.terminates),
    fixed_response: loadBalancerRulesFixedResponseToTerraform(struct!.fixedResponse),
    overrides: cdktf.listMapper(loadBalancerRulesOverridesToTerraform, true)(struct!.overrides),
  }
}

export class LoadBalancerRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._terminates !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminates = this._terminates;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._disabled = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._terminates = undefined;
      this._fixedResponse.internalValue = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._disabled = value.disabled;
      this._name = value.name;
      this._priority = value.priority;
      this._terminates = value.terminates;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._overrides.internalValue = value.overrides;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // terminates - computed: true, optional: true, required: false
  private _terminates?: boolean | cdktf.IResolvable; 
  public get terminates() {
    return this.getBooleanAttribute('terminates');
  }
  public set terminates(value: boolean | cdktf.IResolvable) {
    this._terminates = value;
  }
  public resetTerminates() {
    this._terminates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatesInput() {
    return this._terminates;
  }

  // fixed_response - computed: false, optional: true, required: false
  private _fixedResponse = new LoadBalancerRulesFixedResponseOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: LoadBalancerRulesFixedResponse) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new LoadBalancerRulesOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: LoadBalancerRulesOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}

export class LoadBalancerRulesList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerRules[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerRulesOutputReference {
    return new LoadBalancerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer cloudflare_load_balancer}
*/
export class LoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/load_balancer cloudflare_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.22.0',
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
    this._defaultPoolIds = config.defaultPoolIds;
    this._description = config.description;
    this._enabled = config.enabled;
    this._fallbackPoolId = config.fallbackPoolId;
    this._id = config.id;
    this._name = config.name;
    this._proxied = config.proxied;
    this._sessionAffinity = config.sessionAffinity;
    this._sessionAffinityAttributes = config.sessionAffinityAttributes;
    this._sessionAffinityTtl = config.sessionAffinityTtl;
    this._steeringPolicy = config.steeringPolicy;
    this._ttl = config.ttl;
    this._zoneId = config.zoneId;
    this._countryPools.internalValue = config.countryPools;
    this._popPools.internalValue = config.popPools;
    this._regionPools.internalValue = config.regionPools;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // default_pool_ids - computed: false, optional: false, required: true
  private _defaultPoolIds?: string[]; 
  public get defaultPoolIds() {
    return this.getListAttribute('default_pool_ids');
  }
  public set defaultPoolIds(value: string[]) {
    this._defaultPoolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolIdsInput() {
    return this._defaultPoolIds;
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

  // fallback_pool_id - computed: false, optional: false, required: true
  private _fallbackPoolId?: string; 
  public get fallbackPoolId() {
    return this.getStringAttribute('fallback_pool_id');
  }
  public set fallbackPoolId(value: string) {
    this._fallbackPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPoolIdInput() {
    return this._fallbackPoolId;
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

  // proxied - computed: false, optional: true, required: false
  private _proxied?: boolean | cdktf.IResolvable; 
  public get proxied() {
    return this.getBooleanAttribute('proxied');
  }
  public set proxied(value: boolean | cdktf.IResolvable) {
    this._proxied = value;
  }
  public resetProxied() {
    this._proxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiedInput() {
    return this._proxied;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // session_affinity_attributes - computed: false, optional: true, required: false
  private _sessionAffinityAttributes?: { [key: string]: string }; 
  public get sessionAffinityAttributes() {
    return this.getStringMapAttribute('session_affinity_attributes');
  }
  public set sessionAffinityAttributes(value: { [key: string]: string }) {
    this._sessionAffinityAttributes = value;
  }
  public resetSessionAffinityAttributes() {
    this._sessionAffinityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityAttributesInput() {
    return this._sessionAffinityAttributes;
  }

  // session_affinity_ttl - computed: false, optional: true, required: false
  private _sessionAffinityTtl?: number; 
  public get sessionAffinityTtl() {
    return this.getNumberAttribute('session_affinity_ttl');
  }
  public set sessionAffinityTtl(value: number) {
    this._sessionAffinityTtl = value;
  }
  public resetSessionAffinityTtl() {
    this._sessionAffinityTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityTtlInput() {
    return this._sessionAffinityTtl;
  }

  // steering_policy - computed: true, optional: true, required: false
  private _steeringPolicy?: string; 
  public get steeringPolicy() {
    return this.getStringAttribute('steering_policy');
  }
  public set steeringPolicy(value: string) {
    this._steeringPolicy = value;
  }
  public resetSteeringPolicy() {
    this._steeringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get steeringPolicyInput() {
    return this._steeringPolicy;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // country_pools - computed: false, optional: true, required: false
  private _countryPools = new LoadBalancerCountryPoolsList(this, "country_pools", true);
  public get countryPools() {
    return this._countryPools;
  }
  public putCountryPools(value: LoadBalancerCountryPools[] | cdktf.IResolvable) {
    this._countryPools.internalValue = value;
  }
  public resetCountryPools() {
    this._countryPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryPoolsInput() {
    return this._countryPools.internalValue;
  }

  // pop_pools - computed: false, optional: true, required: false
  private _popPools = new LoadBalancerPopPoolsList(this, "pop_pools", true);
  public get popPools() {
    return this._popPools;
  }
  public putPopPools(value: LoadBalancerPopPools[] | cdktf.IResolvable) {
    this._popPools.internalValue = value;
  }
  public resetPopPools() {
    this._popPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popPoolsInput() {
    return this._popPools.internalValue;
  }

  // region_pools - computed: false, optional: true, required: false
  private _regionPools = new LoadBalancerRegionPoolsList(this, "region_pools", true);
  public get regionPools() {
    return this._regionPools;
  }
  public putRegionPools(value: LoadBalancerRegionPools[] | cdktf.IResolvable) {
    this._regionPools.internalValue = value;
  }
  public resetRegionPools() {
    this._regionPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPoolsInput() {
    return this._regionPools.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new LoadBalancerRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: LoadBalancerRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultPoolIds),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fallback_pool_id: cdktf.stringToTerraform(this._fallbackPoolId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proxied: cdktf.booleanToTerraform(this._proxied),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      session_affinity_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._sessionAffinityAttributes),
      session_affinity_ttl: cdktf.numberToTerraform(this._sessionAffinityTtl),
      steering_policy: cdktf.stringToTerraform(this._steeringPolicy),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      country_pools: cdktf.listMapper(loadBalancerCountryPoolsToTerraform, true)(this._countryPools.internalValue),
      pop_pools: cdktf.listMapper(loadBalancerPopPoolsToTerraform, true)(this._popPools.internalValue),
      region_pools: cdktf.listMapper(loadBalancerRegionPoolsToTerraform, true)(this._regionPools.internalValue),
      rules: cdktf.listMapper(loadBalancerRulesToTerraform, true)(this._rules.internalValue),
    };
  }
}
