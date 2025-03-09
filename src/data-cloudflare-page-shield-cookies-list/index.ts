/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflarePageShieldCookiesListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The direction used to sort returned cookies.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#direction DataCloudflarePageShieldCookiesList#direction}
  */
  readonly direction?: string;
  /**
  * Filters the returned cookies that match the specified domain attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#domain DataCloudflarePageShieldCookiesList#domain}
  */
  readonly domain?: string;
  /**
  * Export the list of cookies as a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#export DataCloudflarePageShieldCookiesList#export}
  */
  readonly export?: string;
  /**
  * Includes cookies that match one or more URL-encoded hostnames separated by commas.
  * 
  * Wildcards are supported at the start and end of each hostname to support starts with, ends with
  * and contains. If no wildcards are used, results will be filtered by exact match
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#hosts DataCloudflarePageShieldCookiesList#hosts}
  */
  readonly hosts?: string;
  /**
  * Filters the returned cookies that are set with HttpOnly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#http_only DataCloudflarePageShieldCookiesList#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#max_items DataCloudflarePageShieldCookiesList#max_items}
  */
  readonly maxItems?: number;
  /**
  * Filters the returned cookies that match the specified name.
  * Wildcards are supported at the start and end to support starts with, ends with
  * and contains. e.g. session*
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#name DataCloudflarePageShieldCookiesList#name}
  */
  readonly name?: string;
  /**
  * The field used to sort returned cookies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#order_by DataCloudflarePageShieldCookiesList#order_by}
  */
  readonly orderBy?: string;
  /**
  * The current page number of the paginated results.
  * 
  * We additionally support a special value "all". When "all" is used, the API will return all the cookies
  * with the applied filters in a single page. This feature is best-effort and it may only work for zones with 
  * a low number of cookies
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#page DataCloudflarePageShieldCookiesList#page}
  */
  readonly page?: string;
  /**
  * Includes connections that match one or more page URLs (separated by commas) where they were last seen
  * 
  * Wildcards are supported at the start and end of each page URL to support starts with, ends with
  * and contains. If no wildcards are used, results will be filtered by exact match
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#page_url DataCloudflarePageShieldCookiesList#page_url}
  */
  readonly pageUrl?: string;
  /**
  * Filters the returned cookies that match the specified path attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#path DataCloudflarePageShieldCookiesList#path}
  */
  readonly path?: string;
  /**
  * The number of results per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#per_page DataCloudflarePageShieldCookiesList#per_page}
  */
  readonly perPage?: number;
  /**
  * Filters the returned cookies that match the specified same_site attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#same_site DataCloudflarePageShieldCookiesList#same_site}
  */
  readonly sameSite?: string;
  /**
  * Filters the returned cookies that are set with Secure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#secure DataCloudflarePageShieldCookiesList#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
  /**
  * Filters the returned cookies that match the specified type attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#type DataCloudflarePageShieldCookiesList#type}
  */
  readonly type?: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#zone_id DataCloudflarePageShieldCookiesList#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflarePageShieldCookiesListResult {
}

export function dataCloudflarePageShieldCookiesListResultToTerraform(struct?: DataCloudflarePageShieldCookiesListResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePageShieldCookiesListResultToHclTerraform(struct?: DataCloudflarePageShieldCookiesListResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePageShieldCookiesListResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflarePageShieldCookiesListResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePageShieldCookiesListResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_attribute - computed: true, optional: false, required: false
  public get domainAttribute() {
    return this.getStringAttribute('domain_attribute');
  }

  // expires_attribute - computed: true, optional: false, required: false
  public get expiresAttribute() {
    return this.getStringAttribute('expires_attribute');
  }

  // first_seen_at - computed: true, optional: false, required: false
  public get firstSeenAt() {
    return this.getStringAttribute('first_seen_at');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_only_attribute - computed: true, optional: false, required: false
  public get httpOnlyAttribute() {
    return this.getBooleanAttribute('http_only_attribute');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_seen_at - computed: true, optional: false, required: false
  public get lastSeenAt() {
    return this.getStringAttribute('last_seen_at');
  }

  // max_age_attribute - computed: true, optional: false, required: false
  public get maxAgeAttribute() {
    return this.getNumberAttribute('max_age_attribute');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // page_urls - computed: true, optional: false, required: false
  public get pageUrls() {
    return this.getListAttribute('page_urls');
  }

  // path_attribute - computed: true, optional: false, required: false
  public get pathAttribute() {
    return this.getStringAttribute('path_attribute');
  }

  // same_site_attribute - computed: true, optional: false, required: false
  public get sameSiteAttribute() {
    return this.getStringAttribute('same_site_attribute');
  }

  // secure_attribute - computed: true, optional: false, required: false
  public get secureAttribute() {
    return this.getBooleanAttribute('secure_attribute');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCloudflarePageShieldCookiesListResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflarePageShieldCookiesListResultOutputReference {
    return new DataCloudflarePageShieldCookiesListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list}
*/
export class DataCloudflarePageShieldCookiesList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_page_shield_cookies_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldCookiesList to import
  * @param importFromId The id of the existing DataCloudflarePageShieldCookiesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflarePageShieldCookiesList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_cookies_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflarePageShieldCookiesListConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflarePageShieldCookiesListConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_page_shield_cookies_list',
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
    this._direction = config.direction;
    this._domain = config.domain;
    this._export = config.export;
    this._hosts = config.hosts;
    this._httpOnly = config.httpOnly;
    this._maxItems = config.maxItems;
    this._name = config.name;
    this._orderBy = config.orderBy;
    this._page = config.page;
    this._pageUrl = config.pageUrl;
    this._path = config.path;
    this._perPage = config.perPage;
    this._sameSite = config.sameSite;
    this._secure = config.secure;
    this._type = config.type;
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflarePageShieldCookiesListResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
      domain: cdktf.stringToTerraform(this._domain),
      export: cdktf.stringToTerraform(this._export),
      hosts: cdktf.stringToTerraform(this._hosts),
      http_only: cdktf.booleanToTerraform(this._httpOnly),
      max_items: cdktf.numberToTerraform(this._maxItems),
      name: cdktf.stringToTerraform(this._name),
      order_by: cdktf.stringToTerraform(this._orderBy),
      page: cdktf.stringToTerraform(this._page),
      page_url: cdktf.stringToTerraform(this._pageUrl),
      path: cdktf.stringToTerraform(this._path),
      per_page: cdktf.numberToTerraform(this._perPage),
      same_site: cdktf.stringToTerraform(this._sameSite),
      secure: cdktf.booleanToTerraform(this._secure),
      type: cdktf.stringToTerraform(this._type),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      http_only: {
        value: cdktf.booleanToHclTerraform(this._httpOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
      same_site: {
        value: cdktf.stringToHclTerraform(this._sameSite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure: {
        value: cdktf.booleanToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
