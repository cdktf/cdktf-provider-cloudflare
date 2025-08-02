/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareEmailSecurityTrustedDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#account_id DataCloudflareEmailSecurityTrustedDomains#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#filter DataCloudflareEmailSecurityTrustedDomains#filter}
  */
  readonly filter?: DataCloudflareEmailSecurityTrustedDomainsFilter;
  /**
  * The unique identifier for the trusted domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#trusted_domain_id DataCloudflareEmailSecurityTrustedDomains#trusted_domain_id}
  */
  readonly trustedDomainId?: number;
}
export interface DataCloudflareEmailSecurityTrustedDomainsFilter {
  /**
  * The sorting direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#direction DataCloudflareEmailSecurityTrustedDomains#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#is_recent DataCloudflareEmailSecurityTrustedDomains#is_recent}
  */
  readonly isRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#is_similarity DataCloudflareEmailSecurityTrustedDomains#is_similarity}
  */
  readonly isSimilarity?: boolean | cdktf.IResolvable;
  /**
  * The field to sort by.
  * Available values: "pattern", "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#order DataCloudflareEmailSecurityTrustedDomains#order}
  */
  readonly order?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#pattern DataCloudflareEmailSecurityTrustedDomains#pattern}
  */
  readonly pattern?: string;
  /**
  * Allows searching in multiple properties of a record simultaneously.
  * This parameter is intended for human users, not automation. Its exact
  * behavior is intentionally left unspecified and is subject to change
  * in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#search DataCloudflareEmailSecurityTrustedDomains#search}
  */
  readonly search?: string;
}

export function dataCloudflareEmailSecurityTrustedDomainsFilterToTerraform(struct?: DataCloudflareEmailSecurityTrustedDomainsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    is_recent: cdktf.booleanToTerraform(struct!.isRecent),
    is_similarity: cdktf.booleanToTerraform(struct!.isSimilarity),
    order: cdktf.stringToTerraform(struct!.order),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    search: cdktf.stringToTerraform(struct!.search),
  }
}


export function dataCloudflareEmailSecurityTrustedDomainsFilterToHclTerraform(struct?: DataCloudflareEmailSecurityTrustedDomainsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_recent: {
      value: cdktf.booleanToHclTerraform(struct!.isRecent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_similarity: {
      value: cdktf.booleanToHclTerraform(struct!.isSimilarity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareEmailSecurityTrustedDomainsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._isRecent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRecent = this._isRecent;
    }
    if (this._isSimilarity !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSimilarity = this._isSimilarity;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityTrustedDomainsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._isRecent = undefined;
      this._isSimilarity = undefined;
      this._order = undefined;
      this._pattern = undefined;
      this._search = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._isRecent = value.isRecent;
      this._isSimilarity = value.isSimilarity;
      this._order = value.order;
      this._pattern = value.pattern;
      this._search = value.search;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains cloudflare_email_security_trusted_domains}
*/
export class DataCloudflareEmailSecurityTrustedDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_trusted_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareEmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityTrustedDomains to import
  * @param importFromId The id of the existing DataCloudflareEmailSecurityTrustedDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityTrustedDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_trusted_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_security_trusted_domains cloudflare_email_security_trusted_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareEmailSecurityTrustedDomainsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareEmailSecurityTrustedDomainsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_security_trusted_domains',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._filter.internalValue = config.filter;
    this._trustedDomainId = config.trustedDomainId;
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

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareEmailSecurityTrustedDomainsFilter) {
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

  // trusted_domain_id - computed: false, optional: true, required: false
  private _trustedDomainId?: number; 
  public get trustedDomainId() {
    return this.getNumberAttribute('trusted_domain_id');
  }
  public set trustedDomainId(value: number) {
    this._trustedDomainId = value;
  }
  public resetTrustedDomainId() {
    this._trustedDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedDomainIdInput() {
    return this._trustedDomainId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareEmailSecurityTrustedDomainsFilterToTerraform(this._filter.internalValue),
      trusted_domain_id: cdktf.numberToTerraform(this._trustedDomainId),
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
      filter: {
        value: dataCloudflareEmailSecurityTrustedDomainsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareEmailSecurityTrustedDomainsFilter",
      },
      trusted_domain_id: {
        value: cdktf.numberToHclTerraform(this._trustedDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
