/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/cloudforce_one_request_priority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareCloudforceOneRequestPriorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/cloudforce_one_request_priority#account_id DataCloudflareCloudforceOneRequestPriority#account_id}
  */
  readonly accountId: string;
  /**
  * UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/cloudforce_one_request_priority#priority_id DataCloudflareCloudforceOneRequestPriority#priority_id}
  */
  readonly priorityId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}
*/
export class DataCloudflareCloudforceOneRequestPriority extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_cloudforce_one_request_priority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestPriority to import
  * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestPriority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_priority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareCloudforceOneRequestPriorityConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareCloudforceOneRequestPriorityConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_cloudforce_one_request_priority',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
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
    this._priorityId = config.priorityId;
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

  // completed - computed: true, optional: false, required: false
  public get completed() {
    return this.getStringAttribute('completed');
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
    return this.getStringAttribute('id');
  }

  // message_tokens - computed: true, optional: false, required: false
  public get messageTokens() {
    return this.getNumberAttribute('message_tokens');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // priority_id - computed: false, optional: false, required: true
  private _priorityId?: string; 
  public get priorityId() {
    return this.getStringAttribute('priority_id');
  }
  public set priorityId(value: string) {
    this._priorityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityIdInput() {
    return this._priorityId;
  }

  // readable_id - computed: true, optional: false, required: false
  public get readableId() {
    return this.getStringAttribute('readable_id');
  }

  // request - computed: true, optional: false, required: false
  public get request() {
    return this.getStringAttribute('request');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // tlp - computed: true, optional: false, required: false
  public get tlp() {
    return this.getStringAttribute('tlp');
  }

  // tokens - computed: true, optional: false, required: false
  public get tokens() {
    return this.getNumberAttribute('tokens');
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
      priority_id: cdktf.stringToTerraform(this._priorityId),
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
      priority_id: {
        value: cdktf.stringToHclTerraform(this._priorityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
