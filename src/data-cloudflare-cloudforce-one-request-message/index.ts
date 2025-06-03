/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareCloudforceOneRequestMessageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message#account_id DataCloudflareCloudforceOneRequestMessage#account_id}
  */
  readonly accountId: string;
  /**
  * Retrieve mes  ges created after this time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message#after DataCloudflareCloudforceOneRequestMessage#after}
  */
  readonly after?: string;
  /**
  * Retrieve messages created before this time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message#before DataCloudflareCloudforceOneRequestMessage#before}
  */
  readonly before?: string;
  /**
  * Page number of results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message#page DataCloudflareCloudforceOneRequestMessage#page}
  */
  readonly page: number;
  /**
  * Number of results per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message#per_page DataCloudflareCloudforceOneRequestMessage#per_page}
  */
  readonly perPage: number;
  /**
  * UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message#request_id DataCloudflareCloudforceOneRequestMessage#request_id}
  */
  readonly requestId: string;
  /**
  * Field to sort results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message#sort_by DataCloudflareCloudforceOneRequestMessage#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Sort order (asc or desc).
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message#sort_order DataCloudflareCloudforceOneRequestMessage#sort_order}
  */
  readonly sortOrder?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}
*/
export class DataCloudflareCloudforceOneRequestMessage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_cloudforce_one_request_message";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestMessage to import
  * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestMessage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_message", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareCloudforceOneRequestMessageConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareCloudforceOneRequestMessageConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_cloudforce_one_request_message',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.5.0',
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
    this._after = config.after;
    this._before = config.before;
    this._page = config.page;
    this._perPage = config.perPage;
    this._requestId = config.requestId;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
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

  // after - computed: false, optional: true, required: false
  private _after?: string; 
  public get after() {
    return this.getStringAttribute('after');
  }
  public set after(value: string) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // before - computed: false, optional: true, required: false
  private _before?: string; 
  public get before() {
    return this.getStringAttribute('before');
  }
  public set before(value: string) {
    this._before = value;
  }
  public resetBefore() {
    this._before = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_follow_on_request - computed: true, optional: false, required: false
  public get isFollowOnRequest() {
    return this.getBooleanAttribute('is_follow_on_request');
  }

  // page - computed: false, optional: false, required: true
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // per_page - computed: false, optional: false, required: true
  private _perPage?: number; 
  public get perPage() {
    return this.getNumberAttribute('per_page');
  }
  public set perPage(value: number) {
    this._perPage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perPageInput() {
    return this._perPage;
  }

  // request_id - computed: false, optional: false, required: true
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      after: cdktf.stringToTerraform(this._after),
      before: cdktf.stringToTerraform(this._before),
      page: cdktf.numberToTerraform(this._page),
      per_page: cdktf.numberToTerraform(this._perPage),
      request_id: cdktf.stringToTerraform(this._requestId),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
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
      after: {
        value: cdktf.stringToHclTerraform(this._after),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      before: {
        value: cdktf.stringToHclTerraform(this._before),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_page: {
        value: cdktf.numberToHclTerraform(this._perPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_id: {
        value: cdktf.stringToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
