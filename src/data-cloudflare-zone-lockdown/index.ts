/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZoneLockdownConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}
  */
  readonly filter?: DataCloudflareZoneLockdownFilter;
  /**
  * The unique identifier of the Zone Lockdown rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#lock_downs_id DataCloudflareZoneLockdown#lock_downs_id}
  */
  readonly lockDownsId?: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#zone_id DataCloudflareZoneLockdown#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareZoneLockdownConfigurations {
}

export function dataCloudflareZoneLockdownConfigurationsToTerraform(struct?: DataCloudflareZoneLockdownConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZoneLockdownConfigurationsToHclTerraform(struct?: DataCloudflareZoneLockdownConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZoneLockdownConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZoneLockdownConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZoneLockdownConfigurations | undefined) {
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

export class DataCloudflareZoneLockdownConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZoneLockdownConfigurationsOutputReference {
    return new DataCloudflareZoneLockdownConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZoneLockdownFilter {
  /**
  * The timestamp of when the rule was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#created_on DataCloudflareZoneLockdown#created_on}
  */
  readonly createdOn?: string;
  /**
  * A string to search for in the description of existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#description DataCloudflareZoneLockdown#description}
  */
  readonly description?: string;
  /**
  * A string to search for in the description of existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#description_search DataCloudflareZoneLockdown#description_search}
  */
  readonly descriptionSearch?: string;
  /**
  * A single IP address to search for in existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#ip DataCloudflareZoneLockdown#ip}
  */
  readonly ip?: string;
  /**
  * A single IP address range to search for in existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#ip_range_search DataCloudflareZoneLockdown#ip_range_search}
  */
  readonly ipRangeSearch?: string;
  /**
  * A single IP address to search for in existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#ip_search DataCloudflareZoneLockdown#ip_search}
  */
  readonly ipSearch?: string;
  /**
  * The timestamp of when the rule was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#modified_on DataCloudflareZoneLockdown#modified_on}
  */
  readonly modifiedOn?: string;
  /**
  * The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#priority DataCloudflareZoneLockdown#priority}
  */
  readonly priority?: number;
  /**
  * A single URI to search for in the list of URLs of existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#uri_search DataCloudflareZoneLockdown#uri_search}
  */
  readonly uriSearch?: string;
}

export function dataCloudflareZoneLockdownFilterToTerraform(struct?: DataCloudflareZoneLockdownFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_on: cdktf.stringToTerraform(struct!.createdOn),
    description: cdktf.stringToTerraform(struct!.description),
    description_search: cdktf.stringToTerraform(struct!.descriptionSearch),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_range_search: cdktf.stringToTerraform(struct!.ipRangeSearch),
    ip_search: cdktf.stringToTerraform(struct!.ipSearch),
    modified_on: cdktf.stringToTerraform(struct!.modifiedOn),
    priority: cdktf.numberToTerraform(struct!.priority),
    uri_search: cdktf.stringToTerraform(struct!.uriSearch),
  }
}


export function dataCloudflareZoneLockdownFilterToHclTerraform(struct?: DataCloudflareZoneLockdownFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_on: {
      value: cdktf.stringToHclTerraform(struct!.createdOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_search: {
      value: cdktf.stringToHclTerraform(struct!.descriptionSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_range_search: {
      value: cdktf.stringToHclTerraform(struct!.ipRangeSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_search: {
      value: cdktf.stringToHclTerraform(struct!.ipSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modified_on: {
      value: cdktf.stringToHclTerraform(struct!.modifiedOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri_search: {
      value: cdktf.stringToHclTerraform(struct!.uriSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZoneLockdownFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZoneLockdownFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdOn = this._createdOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionSearch = this._descriptionSearch;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipRangeSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangeSearch = this._ipRangeSearch;
    }
    if (this._ipSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSearch = this._ipSearch;
    }
    if (this._modifiedOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiedOn = this._modifiedOn;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._uriSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriSearch = this._uriSearch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZoneLockdownFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdOn = undefined;
      this._description = undefined;
      this._descriptionSearch = undefined;
      this._ip = undefined;
      this._ipRangeSearch = undefined;
      this._ipSearch = undefined;
      this._modifiedOn = undefined;
      this._priority = undefined;
      this._uriSearch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdOn = value.createdOn;
      this._description = value.description;
      this._descriptionSearch = value.descriptionSearch;
      this._ip = value.ip;
      this._ipRangeSearch = value.ipRangeSearch;
      this._ipSearch = value.ipSearch;
      this._modifiedOn = value.modifiedOn;
      this._priority = value.priority;
      this._uriSearch = value.uriSearch;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown}
*/
export class DataCloudflareZoneLockdown extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_lockdown";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZoneLockdown to import
  * @param importFromId The id of the existing DataCloudflareZoneLockdown that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZoneLockdown to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_lockdown", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZoneLockdownConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZoneLockdownConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_lockdown',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
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
    this._filter.internalValue = config.filter;
    this._lockDownsId = config.lockDownsId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataCloudflareZoneLockdownConfigurationsList(this, "configurations", false);
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZoneLockdownFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZoneLockdownFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_downs_id - computed: false, optional: true, required: false
  private _lockDownsId?: string; 
  public get lockDownsId() {
    return this.getStringAttribute('lock_downs_id');
  }
  public set lockDownsId(value: string) {
    this._lockDownsId = value;
  }
  public resetLockDownsId() {
    this._lockDownsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDownsIdInput() {
    return this._lockDownsId;
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
      filter: dataCloudflareZoneLockdownFilterToTerraform(this._filter.internalValue),
      lock_downs_id: cdktf.stringToTerraform(this._lockDownsId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataCloudflareZoneLockdownFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZoneLockdownFilter",
      },
      lock_downs_id: {
        value: cdktf.stringToHclTerraform(this._lockDownsId),
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
