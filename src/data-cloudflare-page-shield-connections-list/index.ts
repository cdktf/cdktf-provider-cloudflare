/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflarePageShieldConnectionsListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The direction used to sort returned connections.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#direction DataCloudflarePageShieldConnectionsList#direction}
  */
  readonly direction?: string;
  /**
  * When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#exclude_cdn_cgi DataCloudflarePageShieldConnectionsList#exclude_cdn_cgi}
  */
  readonly excludeCdnCgi?: boolean | cdktf.IResolvable;
  /**
  * Excludes connections whose URL contains one of the URL-encoded URLs separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#exclude_urls DataCloudflarePageShieldConnectionsList#exclude_urls}
  */
  readonly excludeUrls?: string;
  /**
  * Export the list of connections as a file.
  * Available values: "csv".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#export DataCloudflarePageShieldConnectionsList#export}
  */
  readonly export?: string;
  /**
  * Includes connections that match one or more URL-encoded hostnames separated by commas.
  * 
  * Wildcards are supported at the start and end of each hostname to support starts with, ends with
  * and contains. If no wildcards are used, results will be filtered by exact match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#hosts DataCloudflarePageShieldConnectionsList#hosts}
  */
  readonly hosts?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#max_items DataCloudflarePageShieldConnectionsList#max_items}
  */
  readonly maxItems?: number;
  /**
  * The field used to sort returned connections.
  * Available values: "first_seen_at", "last_seen_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#order_by DataCloudflarePageShieldConnectionsList#order_by}
  */
  readonly orderBy?: string;
  /**
  * The current page number of the paginated results.
  * 
  * We additionally support a special value "all". When "all" is used, the API will return all the connections
  * with the applied filters in a single page. This feature is best-effort and it may only work for zones with
  * a low number of connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#page DataCloudflarePageShieldConnectionsList#page}
  */
  readonly page?: string;
  /**
  * Includes connections that match one or more page URLs (separated by commas) where they were last seen
  * 
  * Wildcards are supported at the start and end of each page URL to support starts with, ends with
  * and contains. If no wildcards are used, results will be filtered by exact match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#page_url DataCloudflarePageShieldConnectionsList#page_url}
  */
  readonly pageUrl?: string;
  /**
  * The number of results per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#per_page DataCloudflarePageShieldConnectionsList#per_page}
  */
  readonly perPage?: number;
  /**
  * When true, malicious connections appear first in the returned connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#prioritize_malicious DataCloudflarePageShieldConnectionsList#prioritize_malicious}
  */
  readonly prioritizeMalicious?: boolean | cdktf.IResolvable;
  /**
  * Filters the returned connections using a comma-separated list of connection statuses. Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#status DataCloudflarePageShieldConnectionsList#status}
  */
  readonly status?: string;
  /**
  * Includes connections whose URL contain one or more URL-encoded URLs separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#urls DataCloudflarePageShieldConnectionsList#urls}
  */
  readonly urls?: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#zone_id DataCloudflarePageShieldConnectionsList#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflarePageShieldConnectionsListResult {
}

export function dataCloudflarePageShieldConnectionsListResultToTerraform(struct?: DataCloudflarePageShieldConnectionsListResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePageShieldConnectionsListResultToHclTerraform(struct?: DataCloudflarePageShieldConnectionsListResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePageShieldConnectionsListResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflarePageShieldConnectionsListResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePageShieldConnectionsListResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // added_at - computed: true, optional: false, required: false
  public get addedAt() {
    return this.getStringAttribute('added_at');
  }

  // domain_reported_malicious - computed: true, optional: false, required: false
  public get domainReportedMalicious() {
    return this.getBooleanAttribute('domain_reported_malicious');
  }

  // first_page_url - computed: true, optional: false, required: false
  public get firstPageUrl() {
    return this.getStringAttribute('first_page_url');
  }

  // first_seen_at - computed: true, optional: false, required: false
  public get firstSeenAt() {
    return this.getStringAttribute('first_seen_at');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_seen_at - computed: true, optional: false, required: false
  public get lastSeenAt() {
    return this.getStringAttribute('last_seen_at');
  }

  // malicious_domain_categories - computed: true, optional: false, required: false
  public get maliciousDomainCategories() {
    return this.getListAttribute('malicious_domain_categories');
  }

  // malicious_url_categories - computed: true, optional: false, required: false
  public get maliciousUrlCategories() {
    return this.getListAttribute('malicious_url_categories');
  }

  // page_urls - computed: true, optional: false, required: false
  public get pageUrls() {
    return this.getListAttribute('page_urls');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // url_contains_cdn_cgi_path - computed: true, optional: false, required: false
  public get urlContainsCdnCgiPath() {
    return this.getBooleanAttribute('url_contains_cdn_cgi_path');
  }

  // url_reported_malicious - computed: true, optional: false, required: false
  public get urlReportedMalicious() {
    return this.getBooleanAttribute('url_reported_malicious');
  }
}

export class DataCloudflarePageShieldConnectionsListResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflarePageShieldConnectionsListResultOutputReference {
    return new DataCloudflarePageShieldConnectionsListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list cloudflare_page_shield_connections_list}
*/
export class DataCloudflarePageShieldConnectionsList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_page_shield_connections_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflarePageShieldConnectionsList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldConnectionsList to import
  * @param importFromId The id of the existing DataCloudflarePageShieldConnectionsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflarePageShieldConnectionsList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_connections_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list cloudflare_page_shield_connections_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflarePageShieldConnectionsListConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflarePageShieldConnectionsListConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_page_shield_connections_list',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.2.0',
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
    this._excludeCdnCgi = config.excludeCdnCgi;
    this._excludeUrls = config.excludeUrls;
    this._export = config.export;
    this._hosts = config.hosts;
    this._maxItems = config.maxItems;
    this._orderBy = config.orderBy;
    this._page = config.page;
    this._pageUrl = config.pageUrl;
    this._perPage = config.perPage;
    this._prioritizeMalicious = config.prioritizeMalicious;
    this._status = config.status;
    this._urls = config.urls;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: false, optional: true, required: false
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

  // exclude_cdn_cgi - computed: false, optional: true, required: false
  private _excludeCdnCgi?: boolean | cdktf.IResolvable; 
  public get excludeCdnCgi() {
    return this.getBooleanAttribute('exclude_cdn_cgi');
  }
  public set excludeCdnCgi(value: boolean | cdktf.IResolvable) {
    this._excludeCdnCgi = value;
  }
  public resetExcludeCdnCgi() {
    this._excludeCdnCgi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCdnCgiInput() {
    return this._excludeCdnCgi;
  }

  // exclude_urls - computed: false, optional: true, required: false
  private _excludeUrls?: string; 
  public get excludeUrls() {
    return this.getStringAttribute('exclude_urls');
  }
  public set excludeUrls(value: string) {
    this._excludeUrls = value;
  }
  public resetExcludeUrls() {
    this._excludeUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUrlsInput() {
    return this._excludeUrls;
  }

  // export - computed: false, optional: true, required: false
  private _export?: string; 
  public get export() {
    return this.getStringAttribute('export');
  }
  public set export(value: string) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string; 
  public get hosts() {
    return this.getStringAttribute('hosts');
  }
  public set hosts(value: string) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // page - computed: false, optional: true, required: false
  private _page?: string; 
  public get page() {
    return this.getStringAttribute('page');
  }
  public set page(value: string) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // page_url - computed: false, optional: true, required: false
  private _pageUrl?: string; 
  public get pageUrl() {
    return this.getStringAttribute('page_url');
  }
  public set pageUrl(value: string) {
    this._pageUrl = value;
  }
  public resetPageUrl() {
    this._pageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageUrlInput() {
    return this._pageUrl;
  }

  // per_page - computed: false, optional: true, required: false
  private _perPage?: number; 
  public get perPage() {
    return this.getNumberAttribute('per_page');
  }
  public set perPage(value: number) {
    this._perPage = value;
  }
  public resetPerPage() {
    this._perPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPageInput() {
    return this._perPage;
  }

  // prioritize_malicious - computed: false, optional: true, required: false
  private _prioritizeMalicious?: boolean | cdktf.IResolvable; 
  public get prioritizeMalicious() {
    return this.getBooleanAttribute('prioritize_malicious');
  }
  public set prioritizeMalicious(value: boolean | cdktf.IResolvable) {
    this._prioritizeMalicious = value;
  }
  public resetPrioritizeMalicious() {
    this._prioritizeMalicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritizeMaliciousInput() {
    return this._prioritizeMalicious;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflarePageShieldConnectionsListResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string; 
  public get urls() {
    return this.getStringAttribute('urls');
  }
  public set urls(value: string) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
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
      exclude_cdn_cgi: cdktf.booleanToTerraform(this._excludeCdnCgi),
      exclude_urls: cdktf.stringToTerraform(this._excludeUrls),
      export: cdktf.stringToTerraform(this._export),
      hosts: cdktf.stringToTerraform(this._hosts),
      max_items: cdktf.numberToTerraform(this._maxItems),
      order_by: cdktf.stringToTerraform(this._orderBy),
      page: cdktf.stringToTerraform(this._page),
      page_url: cdktf.stringToTerraform(this._pageUrl),
      per_page: cdktf.numberToTerraform(this._perPage),
      prioritize_malicious: cdktf.booleanToTerraform(this._prioritizeMalicious),
      status: cdktf.stringToTerraform(this._status),
      urls: cdktf.stringToTerraform(this._urls),
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
      exclude_cdn_cgi: {
        value: cdktf.booleanToHclTerraform(this._excludeCdnCgi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_urls: {
        value: cdktf.stringToHclTerraform(this._excludeUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export: {
        value: cdktf.stringToHclTerraform(this._export),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.stringToHclTerraform(this._hosts),
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
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.stringToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_url: {
        value: cdktf.stringToHclTerraform(this._pageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_page: {
        value: cdktf.numberToHclTerraform(this._perPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prioritize_malicious: {
        value: cdktf.booleanToHclTerraform(this._prioritizeMalicious),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urls: {
        value: cdktf.stringToHclTerraform(this._urls),
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
