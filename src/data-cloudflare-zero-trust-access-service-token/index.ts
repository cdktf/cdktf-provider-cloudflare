/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustAccessServiceTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token#account_id DataCloudflareZeroTrustAccessServiceToken#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token#filter DataCloudflareZeroTrustAccessServiceToken#filter}
  */
  readonly filter?: DataCloudflareZeroTrustAccessServiceTokenFilter;
  /**
  * UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token#service_token_id DataCloudflareZeroTrustAccessServiceToken#service_token_id}
  */
  readonly serviceTokenId?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token#zone_id DataCloudflareZeroTrustAccessServiceToken#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessServiceTokenFilter {
  /**
  * The name of the service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token#name DataCloudflareZeroTrustAccessServiceToken#name}
  */
  readonly name?: string;
  /**
  * Search for service tokens by other listed query parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token#search DataCloudflareZeroTrustAccessServiceToken#search}
  */
  readonly search?: string;
}

export function dataCloudflareZeroTrustAccessServiceTokenFilterToTerraform(struct?: DataCloudflareZeroTrustAccessServiceTokenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    search: cdktf.stringToTerraform(struct!.search),
  }
}


export function dataCloudflareZeroTrustAccessServiceTokenFilterToHclTerraform(struct?: DataCloudflareZeroTrustAccessServiceTokenFilter | cdktf.IResolvable): any {
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

export class DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessServiceTokenFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessServiceTokenFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._search = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._search = value.search;
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token}
*/
export class DataCloudflareZeroTrustAccessServiceToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_service_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessServiceToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessServiceToken to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustAccessServiceToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessServiceToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_service_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustAccessServiceTokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessServiceTokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_service_token',
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
    this._accountId = config.accountId;
    this._filter.internalValue = config.filter;
    this._serviceTokenId = config.serviceTokenId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustAccessServiceTokenFilter) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_token_id - computed: false, optional: true, required: false
  private _serviceTokenId?: string; 
  public get serviceTokenId() {
    return this.getStringAttribute('service_token_id');
  }
  public set serviceTokenId(value: string) {
    this._serviceTokenId = value;
  }
  public resetServiceTokenId() {
    this._serviceTokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenIdInput() {
    return this._serviceTokenId;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustAccessServiceTokenFilterToTerraform(this._filter.internalValue),
      service_token_id: cdktf.stringToTerraform(this._serviceTokenId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
        value: dataCloudflareZeroTrustAccessServiceTokenFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustAccessServiceTokenFilter",
      },
      service_token_id: {
        value: cdktf.stringToHclTerraform(this._serviceTokenId),
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
