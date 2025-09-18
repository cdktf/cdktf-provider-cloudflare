/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZoneLockdownsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The timestamp of when the rule was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#created_on DataCloudflareZoneLockdowns#created_on}
  */
  readonly createdOn?: string;
  /**
  * A string to search for in the description of existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#description DataCloudflareZoneLockdowns#description}
  */
  readonly description?: string;
  /**
  * A string to search for in the description of existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#description_search DataCloudflareZoneLockdowns#description_search}
  */
  readonly descriptionSearch?: string;
  /**
  * A single IP address to search for in existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#ip DataCloudflareZoneLockdowns#ip}
  */
  readonly ip?: string;
  /**
  * A single IP address range to search for in existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#ip_range_search DataCloudflareZoneLockdowns#ip_range_search}
  */
  readonly ipRangeSearch?: string;
  /**
  * A single IP address to search for in existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#ip_search DataCloudflareZoneLockdowns#ip_search}
  */
  readonly ipSearch?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#max_items DataCloudflareZoneLockdowns#max_items}
  */
  readonly maxItems?: number;
  /**
  * The timestamp of when the rule was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#modified_on DataCloudflareZoneLockdowns#modified_on}
  */
  readonly modifiedOn?: string;
  /**
  * The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#priority DataCloudflareZoneLockdowns#priority}
  */
  readonly priority?: number;
  /**
  * A single URI to search for in the list of URLs of existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#uri_search DataCloudflareZoneLockdowns#uri_search}
  */
  readonly uriSearch?: string;
  /**
  * Defines an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#zone_id DataCloudflareZoneLockdowns#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareZoneLockdownsResultConfigurations {
}

export function dataCloudflareZoneLockdownsResultConfigurationsToTerraform(struct?: DataCloudflareZoneLockdownsResultConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZoneLockdownsResultConfigurationsToHclTerraform(struct?: DataCloudflareZoneLockdownsResultConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZoneLockdownsResultConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZoneLockdownsResultConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZoneLockdownsResultConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCloudflareZoneLockdownsResultConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZoneLockdownsResultConfigurationsOutputReference {
    return new DataCloudflareZoneLockdownsResultConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZoneLockdownsResult {
}

export function dataCloudflareZoneLockdownsResultToTerraform(struct?: DataCloudflareZoneLockdownsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZoneLockdownsResultToHclTerraform(struct?: DataCloudflareZoneLockdownsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZoneLockdownsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZoneLockdownsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZoneLockdownsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataCloudflareZoneLockdownsResultConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }
}

export class DataCloudflareZoneLockdownsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZoneLockdownsResultOutputReference {
    return new DataCloudflareZoneLockdownsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns}
*/
export class DataCloudflareZoneLockdowns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_lockdowns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZoneLockdowns to import
  * @param importFromId The id of the existing DataCloudflareZoneLockdowns that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZoneLockdowns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_lockdowns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZoneLockdownsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZoneLockdownsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_lockdowns',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.10.1',
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
    this._createdOn = config.createdOn;
    this._description = config.description;
    this._descriptionSearch = config.descriptionSearch;
    this._ip = config.ip;
    this._ipRangeSearch = config.ipRangeSearch;
    this._ipSearch = config.ipSearch;
    this._maxItems = config.maxItems;
    this._modifiedOn = config.modifiedOn;
    this._priority = config.priority;
    this._uriSearch = config.uriSearch;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: false, optional: true, required: false
  private _createdOn?: string; 
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }
  public set createdOn(value: string) {
    this._createdOn = value;
  }
  public resetCreatedOn() {
    this._createdOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdOnInput() {
    return this._createdOn;
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

  // description_search - computed: false, optional: true, required: false
  private _descriptionSearch?: string; 
  public get descriptionSearch() {
    return this.getStringAttribute('description_search');
  }
  public set descriptionSearch(value: string) {
    this._descriptionSearch = value;
  }
  public resetDescriptionSearch() {
    this._descriptionSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionSearchInput() {
    return this._descriptionSearch;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_range_search - computed: false, optional: true, required: false
  private _ipRangeSearch?: string; 
  public get ipRangeSearch() {
    return this.getStringAttribute('ip_range_search');
  }
  public set ipRangeSearch(value: string) {
    this._ipRangeSearch = value;
  }
  public resetIpRangeSearch() {
    this._ipRangeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeSearchInput() {
    return this._ipRangeSearch;
  }

  // ip_search - computed: false, optional: true, required: false
  private _ipSearch?: string; 
  public get ipSearch() {
    return this.getStringAttribute('ip_search');
  }
  public set ipSearch(value: string) {
    this._ipSearch = value;
  }
  public resetIpSearch() {
    this._ipSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSearchInput() {
    return this._ipSearch;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // modified_on - computed: false, optional: true, required: false
  private _modifiedOn?: string; 
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }
  public set modifiedOn(value: string) {
    this._modifiedOn = value;
  }
  public resetModifiedOn() {
    this._modifiedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedOnInput() {
    return this._modifiedOn;
  }

  // priority - computed: false, optional: true, required: false
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZoneLockdownsResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // uri_search - computed: false, optional: true, required: false
  private _uriSearch?: string; 
  public get uriSearch() {
    return this.getStringAttribute('uri_search');
  }
  public set uriSearch(value: string) {
    this._uriSearch = value;
  }
  public resetUriSearch() {
    this._uriSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriSearchInput() {
    return this._uriSearch;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_on: cdktf.stringToTerraform(this._createdOn),
      description: cdktf.stringToTerraform(this._description),
      description_search: cdktf.stringToTerraform(this._descriptionSearch),
      ip: cdktf.stringToTerraform(this._ip),
      ip_range_search: cdktf.stringToTerraform(this._ipRangeSearch),
      ip_search: cdktf.stringToTerraform(this._ipSearch),
      max_items: cdktf.numberToTerraform(this._maxItems),
      modified_on: cdktf.stringToTerraform(this._modifiedOn),
      priority: cdktf.numberToTerraform(this._priority),
      uri_search: cdktf.stringToTerraform(this._uriSearch),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_on: {
        value: cdktf.stringToHclTerraform(this._createdOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_search: {
        value: cdktf.stringToHclTerraform(this._descriptionSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_range_search: {
        value: cdktf.stringToHclTerraform(this._ipRangeSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_search: {
        value: cdktf.stringToHclTerraform(this._ipSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      modified_on: {
        value: cdktf.stringToHclTerraform(this._modifiedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uri_search: {
        value: cdktf.stringToHclTerraform(this._uriSearch),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
