/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareEmailSecurityImpersonationRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry#account_id DataCloudflareEmailSecurityImpersonationRegistry#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry#display_name_id DataCloudflareEmailSecurityImpersonationRegistry#display_name_id}
  */
  readonly displayNameId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry#filter DataCloudflareEmailSecurityImpersonationRegistry#filter}
  */
  readonly filter?: DataCloudflareEmailSecurityImpersonationRegistryFilter;
}
export interface DataCloudflareEmailSecurityImpersonationRegistryFilter {
  /**
  * The sorting direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry#direction DataCloudflareEmailSecurityImpersonationRegistry#direction}
  */
  readonly direction?: string;
  /**
  * The field to sort by.
  * Available values: "name", "email", "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry#order DataCloudflareEmailSecurityImpersonationRegistry#order}
  */
  readonly order?: string;
  /**
  * Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry#provenance DataCloudflareEmailSecurityImpersonationRegistry#provenance}
  */
  readonly provenance?: string;
  /**
  * Allows searching in multiple properties of a record simultaneously.
  * This parameter is intended for human users, not automation. Its exact
  * behavior is intentionally left unspecified and is subject to change
  * in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry#search DataCloudflareEmailSecurityImpersonationRegistry#search}
  */
  readonly search?: string;
}

export function dataCloudflareEmailSecurityImpersonationRegistryFilterToTerraform(struct?: DataCloudflareEmailSecurityImpersonationRegistryFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    order: cdktf.stringToTerraform(struct!.order),
    provenance: cdktf.stringToTerraform(struct!.provenance),
    search: cdktf.stringToTerraform(struct!.search),
  }
}


export function dataCloudflareEmailSecurityImpersonationRegistryFilterToHclTerraform(struct?: DataCloudflareEmailSecurityImpersonationRegistryFilter | cdktf.IResolvable): any {
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
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provenance: {
      value: cdktf.stringToHclTerraform(struct!.provenance),
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

export class DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareEmailSecurityImpersonationRegistryFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._provenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.provenance = this._provenance;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityImpersonationRegistryFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._order = undefined;
      this._provenance = undefined;
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
      this._order = value.order;
      this._provenance = value.provenance;
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

  // provenance - computed: false, optional: true, required: false
  private _provenance?: string; 
  public get provenance() {
    return this.getStringAttribute('provenance');
  }
  public set provenance(value: string) {
    this._provenance = value;
  }
  public resetProvenance() {
    this._provenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provenanceInput() {
    return this._provenance;
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}
*/
export class DataCloudflareEmailSecurityImpersonationRegistry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_impersonation_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityImpersonationRegistry to import
  * @param importFromId The id of the existing DataCloudflareEmailSecurityImpersonationRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityImpersonationRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_impersonation_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareEmailSecurityImpersonationRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareEmailSecurityImpersonationRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_security_impersonation_registry',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.13.0',
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
    this._displayNameId = config.displayNameId;
    this._filter.internalValue = config.filter;
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

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getNumberAttribute('directory_id');
  }

  // directory_node_id - computed: true, optional: false, required: false
  public get directoryNodeId() {
    return this.getNumberAttribute('directory_node_id');
  }

  // display_name_id - computed: false, optional: true, required: false
  private _displayNameId?: number; 
  public get displayNameId() {
    return this.getNumberAttribute('display_name_id');
  }
  public set displayNameId(value: number) {
    this._displayNameId = value;
  }
  public resetDisplayNameId() {
    this._displayNameId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameIdInput() {
    return this._displayNameId;
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // external_directory_node_id - computed: true, optional: false, required: false
  public get externalDirectoryNodeId() {
    return this.getStringAttribute('external_directory_node_id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareEmailSecurityImpersonationRegistryFilter) {
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

  // is_email_regex - computed: true, optional: false, required: false
  public get isEmailRegex() {
    return this.getBooleanAttribute('is_email_regex');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provenance - computed: true, optional: false, required: false
  public get provenance() {
    return this.getStringAttribute('provenance');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      display_name_id: cdktf.numberToTerraform(this._displayNameId),
      filter: dataCloudflareEmailSecurityImpersonationRegistryFilterToTerraform(this._filter.internalValue),
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
      display_name_id: {
        value: cdktf.numberToHclTerraform(this._displayNameId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: dataCloudflareEmailSecurityImpersonationRegistryFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareEmailSecurityImpersonationRegistryFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
