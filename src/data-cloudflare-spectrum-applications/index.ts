/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/spectrum_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareSpectrumApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets the direction by which results are ordered.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/spectrum_applications#direction DataCloudflareSpectrumApplications#direction}
  */
  readonly direction?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/spectrum_applications#max_items DataCloudflareSpectrumApplications#max_items}
  */
  readonly maxItems?: number;
  /**
  * Application field by which results are ordered.
  * Available values: "protocol", "app_id", "created_on", "modified_on", "dns".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/spectrum_applications#order DataCloudflareSpectrumApplications#order}
  */
  readonly order?: string;
  /**
  * Zone identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/spectrum_applications#zone_id DataCloudflareSpectrumApplications#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareSpectrumApplicationsResultDns {
}

export function dataCloudflareSpectrumApplicationsResultDnsToTerraform(struct?: DataCloudflareSpectrumApplicationsResultDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareSpectrumApplicationsResultDnsToHclTerraform(struct?: DataCloudflareSpectrumApplicationsResultDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareSpectrumApplicationsResultDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareSpectrumApplicationsResultDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareSpectrumApplicationsResultDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareSpectrumApplicationsResultEdgeIps {
}

export function dataCloudflareSpectrumApplicationsResultEdgeIpsToTerraform(struct?: DataCloudflareSpectrumApplicationsResultEdgeIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareSpectrumApplicationsResultEdgeIpsToHclTerraform(struct?: DataCloudflareSpectrumApplicationsResultEdgeIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareSpectrumApplicationsResultEdgeIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareSpectrumApplicationsResultEdgeIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connectivity - computed: true, optional: false, required: false
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareSpectrumApplicationsResultOriginDns {
}

export function dataCloudflareSpectrumApplicationsResultOriginDnsToTerraform(struct?: DataCloudflareSpectrumApplicationsResultOriginDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareSpectrumApplicationsResultOriginDnsToHclTerraform(struct?: DataCloudflareSpectrumApplicationsResultOriginDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareSpectrumApplicationsResultOriginDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareSpectrumApplicationsResultOriginDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareSpectrumApplicationsResult {
}

export function dataCloudflareSpectrumApplicationsResultToTerraform(struct?: DataCloudflareSpectrumApplicationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareSpectrumApplicationsResultToHclTerraform(struct?: DataCloudflareSpectrumApplicationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareSpectrumApplicationsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareSpectrumApplicationsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareSpectrumApplicationsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // argo_smart_routing - computed: true, optional: false, required: false
  public get argoSmartRouting() {
    return this.getBooleanAttribute('argo_smart_routing');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataCloudflareSpectrumApplicationsResultDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }

  // edge_ips - computed: true, optional: false, required: false
  private _edgeIps = new DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference(this, "edge_ips");
  public get edgeIps() {
    return this._edgeIps;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_firewall - computed: true, optional: false, required: false
  public get ipFirewall() {
    return this.getBooleanAttribute('ip_firewall');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // origin_direct - computed: true, optional: false, required: false
  public get originDirect() {
    return this.getListAttribute('origin_direct');
  }

  // origin_dns - computed: true, optional: false, required: false
  private _originDns = new DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference(this, "origin_dns");
  public get originDns() {
    return this._originDns;
  }

  // origin_port - computed: true, optional: false, required: false
  private _originPort = new cdktf.AnyMap(this, "origin_port");
  public get originPort() {
    return this._originPort;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // proxy_protocol - computed: true, optional: false, required: false
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    return this.getStringAttribute('tls');
  }

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
}

export class DataCloudflareSpectrumApplicationsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareSpectrumApplicationsResultOutputReference {
    return new DataCloudflareSpectrumApplicationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/spectrum_applications cloudflare_spectrum_applications}
*/
export class DataCloudflareSpectrumApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_spectrum_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareSpectrumApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareSpectrumApplications to import
  * @param importFromId The id of the existing DataCloudflareSpectrumApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/spectrum_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareSpectrumApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_spectrum_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/spectrum_applications cloudflare_spectrum_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareSpectrumApplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareSpectrumApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_spectrum_applications',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
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
    this._direction = config.direction;
    this._maxItems = config.maxItems;
    this._order = config.order;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareSpectrumApplicationsResultList(this, "result", false);
  public get result() {
    return this._result;
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
      direction: cdktf.stringToTerraform(this._direction),
      max_items: cdktf.numberToTerraform(this._maxItems),
      order: cdktf.stringToTerraform(this._order),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      order: {
        value: cdktf.stringToHclTerraform(this._order),
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
