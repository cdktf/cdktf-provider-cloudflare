/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareEmailSecurityTrustedDomainsListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#account_id DataCloudflareEmailSecurityTrustedDomainsList#account_id}
  */
  readonly accountId: string;
  /**
  * The sorting direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#direction DataCloudflareEmailSecurityTrustedDomainsList#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#is_recent DataCloudflareEmailSecurityTrustedDomainsList#is_recent}
  */
  readonly isRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#is_similarity DataCloudflareEmailSecurityTrustedDomainsList#is_similarity}
  */
  readonly isSimilarity?: boolean | cdktf.IResolvable;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#max_items DataCloudflareEmailSecurityTrustedDomainsList#max_items}
  */
  readonly maxItems?: number;
  /**
  * The field to sort by.
  * Available values: "pattern", "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#order DataCloudflareEmailSecurityTrustedDomainsList#order}
  */
  readonly order?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#pattern DataCloudflareEmailSecurityTrustedDomainsList#pattern}
  */
  readonly pattern?: string;
  /**
  * Allows searching in multiple properties of a record simultaneously.
  * This parameter is intended for human users, not automation. Its exact
  * behavior is intentionally left unspecified and is subject to change
  * in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#search DataCloudflareEmailSecurityTrustedDomainsList#search}
  */
  readonly search?: string;
}
export interface DataCloudflareEmailSecurityTrustedDomainsListResult {
}

export function dataCloudflareEmailSecurityTrustedDomainsListResultToTerraform(struct?: DataCloudflareEmailSecurityTrustedDomainsListResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareEmailSecurityTrustedDomainsListResultToHclTerraform(struct?: DataCloudflareEmailSecurityTrustedDomainsListResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareEmailSecurityTrustedDomainsListResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityTrustedDomainsListResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_recent - computed: true, optional: false, required: false
  public get isRecent() {
    return this.getBooleanAttribute('is_recent');
  }

  // is_regex - computed: true, optional: false, required: false
  public get isRegex() {
    return this.getBooleanAttribute('is_regex');
  }

  // is_similarity - computed: true, optional: false, required: false
  public get isSimilarity() {
    return this.getBooleanAttribute('is_similarity');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataCloudflareEmailSecurityTrustedDomainsListResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference {
    return new DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list cloudflare_email_security_trusted_domains_list}
*/
export class DataCloudflareEmailSecurityTrustedDomainsList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_trusted_domains_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareEmailSecurityTrustedDomainsList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityTrustedDomainsList to import
  * @param importFromId The id of the existing DataCloudflareEmailSecurityTrustedDomainsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityTrustedDomainsList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_trusted_domains_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list cloudflare_email_security_trusted_domains_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareEmailSecurityTrustedDomainsListConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareEmailSecurityTrustedDomainsListConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_security_trusted_domains_list',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.11.0',
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
    this._accountId = config.accountId;
    this._direction = config.direction;
    this._isRecent = config.isRecent;
    this._isSimilarity = config.isSimilarity;
    this._maxItems = config.maxItems;
    this._order = config.order;
    this._pattern = config.pattern;
    this._search = config.search;
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

  // is_recent - computed: false, optional: true, required: false
  private _isRecent?: boolean | cdktf.IResolvable; 
  public get isRecent() {
    return this.getBooleanAttribute('is_recent');
  }
  public set isRecent(value: boolean | cdktf.IResolvable) {
    this._isRecent = value;
  }
  public resetIsRecent() {
    this._isRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecentInput() {
    return this._isRecent;
  }

  // is_similarity - computed: false, optional: true, required: false
  private _isSimilarity?: boolean | cdktf.IResolvable; 
  public get isSimilarity() {
    return this.getBooleanAttribute('is_similarity');
  }
  public set isSimilarity(value: boolean | cdktf.IResolvable) {
    this._isSimilarity = value;
  }
  public resetIsSimilarity() {
    this._isSimilarity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSimilarityInput() {
    return this._isSimilarity;
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

  // order - computed: false, optional: true, required: false
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareEmailSecurityTrustedDomainsListResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      direction: cdktf.stringToTerraform(this._direction),
      is_recent: cdktf.booleanToTerraform(this._isRecent),
      is_similarity: cdktf.booleanToTerraform(this._isSimilarity),
      max_items: cdktf.numberToTerraform(this._maxItems),
      order: cdktf.stringToTerraform(this._order),
      pattern: cdktf.stringToTerraform(this._pattern),
      search: cdktf.stringToTerraform(this._search),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_recent: {
        value: cdktf.booleanToHclTerraform(this._isRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_similarity: {
        value: cdktf.booleanToHclTerraform(this._isSimilarity),
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
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
