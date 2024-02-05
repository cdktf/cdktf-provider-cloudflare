// https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/data-sources/load_balancer_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareLoadBalancerPoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the datasource lookups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/data-sources/load_balancer_pools#account_id DataCloudflareLoadBalancerPools#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/data-sources/load_balancer_pools#id DataCloudflareLoadBalancerPools#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/data-sources/load_balancer_pools#filter DataCloudflareLoadBalancerPools#filter}
  */
  readonly filter?: DataCloudflareLoadBalancerPoolsFilter;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/data-sources/load_balancer_pools#pools DataCloudflareLoadBalancerPools#pools}
  */
  readonly pools?: DataCloudflareLoadBalancerPoolsPools[] | cdktf.IResolvable;
}
export interface DataCloudflareLoadBalancerPoolsFilter {
  /**
  * A regular expression matching the name of the Load Balancer pool to lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/data-sources/load_balancer_pools#name DataCloudflareLoadBalancerPools#name}
  */
  readonly name?: string;
}

export function dataCloudflareLoadBalancerPoolsFilterToTerraform(struct?: DataCloudflareLoadBalancerPoolsFilterOutputReference | DataCloudflareLoadBalancerPoolsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataCloudflareLoadBalancerPoolsFilterToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsFilterOutputReference | DataCloudflareLoadBalancerPoolsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataCloudflareLoadBalancerPoolsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCloudflareLoadBalancerPoolsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerPoolsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface DataCloudflareLoadBalancerPoolsPoolsLoadShedding {
}

export function dataCloudflareLoadBalancerPoolsPoolsLoadSheddingToTerraform(struct?: DataCloudflareLoadBalancerPoolsPoolsLoadShedding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerPoolsPoolsLoadSheddingToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsPoolsLoadShedding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareLoadBalancerPoolsPoolsLoadShedding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerPoolsPoolsLoadShedding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_percent - computed: true, optional: false, required: false
  public get defaultPercent() {
    return this.getNumberAttribute('default_percent');
  }

  // default_policy - computed: true, optional: false, required: false
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }

  // session_percent - computed: true, optional: false, required: false
  public get sessionPercent() {
    return this.getNumberAttribute('session_percent');
  }

  // session_policy - computed: true, optional: false, required: false
  public get sessionPolicy() {
    return this.getStringAttribute('session_policy');
  }
}

export class DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference {
    return new DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareLoadBalancerPoolsPoolsOriginsHeader {
}

export function dataCloudflareLoadBalancerPoolsPoolsOriginsHeaderToTerraform(struct?: DataCloudflareLoadBalancerPoolsPoolsOriginsHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerPoolsPoolsOriginsHeaderToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsPoolsOriginsHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareLoadBalancerPoolsPoolsOriginsHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerPoolsPoolsOriginsHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference {
    return new DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareLoadBalancerPoolsPoolsOrigins {
}

export function dataCloudflareLoadBalancerPoolsPoolsOriginsToTerraform(struct?: DataCloudflareLoadBalancerPoolsPoolsOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerPoolsPoolsOriginsToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsPoolsOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareLoadBalancerPoolsPoolsOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerPoolsPoolsOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // header - computed: true, optional: false, required: false
  private _header = new DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataCloudflareLoadBalancerPoolsPoolsOriginsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference {
    return new DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareLoadBalancerPoolsPools {
}

export function dataCloudflareLoadBalancerPoolsPoolsToTerraform(struct?: DataCloudflareLoadBalancerPoolsPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareLoadBalancerPoolsPoolsToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareLoadBalancerPoolsPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareLoadBalancerPoolsPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareLoadBalancerPoolsPools | cdktf.IResolvable | undefined) {
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

  // check_regions - computed: true, optional: false, required: false
  public get checkRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('check_regions'));
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // load_shedding - computed: true, optional: false, required: false
  private _loadShedding = new DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList(this, "load_shedding", true);
  public get loadShedding() {
    return this._loadShedding;
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // minimum_origins - computed: true, optional: false, required: false
  public get minimumOrigins() {
    return this.getNumberAttribute('minimum_origins');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getStringAttribute('monitor');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_email - computed: true, optional: false, required: false
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }

  // origins - computed: true, optional: false, required: false
  private _origins = new DataCloudflareLoadBalancerPoolsPoolsOriginsList(this, "origins", true);
  public get origins() {
    return this._origins;
  }
}

export class DataCloudflareLoadBalancerPoolsPoolsList extends cdktf.ComplexList {
  public internalValue? : DataCloudflareLoadBalancerPoolsPools[] | cdktf.IResolvable

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
  public get(index: number): DataCloudflareLoadBalancerPoolsPoolsOutputReference {
    return new DataCloudflareLoadBalancerPoolsPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/data-sources/load_balancer_pools cloudflare_load_balancer_pools}
*/
export class DataCloudflareLoadBalancerPools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareLoadBalancerPools resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerPools to import
  * @param importFromId The id of the existing DataCloudflareLoadBalancerPools that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/data-sources/load_balancer_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerPools to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/data-sources/load_balancer_pools cloudflare_load_balancer_pools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareLoadBalancerPoolsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareLoadBalancerPoolsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer_pools',
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
    this._id = config.id;
    this._filter.internalValue = config.filter;
    this._pools.internalValue = config.pools;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareLoadBalancerPoolsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareLoadBalancerPoolsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new DataCloudflareLoadBalancerPoolsPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: DataCloudflareLoadBalancerPoolsPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      filter: dataCloudflareLoadBalancerPoolsFilterToTerraform(this._filter.internalValue),
      pools: cdktf.listMapper(dataCloudflareLoadBalancerPoolsPoolsToTerraform, true)(this._pools.internalValue),
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
      filter: {
        value: dataCloudflareLoadBalancerPoolsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCloudflareLoadBalancerPoolsFilterList",
      },
      pools: {
        value: cdktf.listMapperHcl(dataCloudflareLoadBalancerPoolsPoolsToHclTerraform, true)(this._pools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCloudflareLoadBalancerPoolsPoolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
