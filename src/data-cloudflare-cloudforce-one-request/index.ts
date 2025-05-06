/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/cloudforce_one_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareCloudforceOneRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/cloudforce_one_request#account_identifier DataCloudflareCloudforceOneRequest#account_identifier}
  */
  readonly accountIdentifier: string;
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/cloudforce_one_request#request_identifier DataCloudflareCloudforceOneRequest#request_identifier}
  */
  readonly requestIdentifier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request}
*/
export class DataCloudflareCloudforceOneRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_cloudforce_one_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequest to import
  * @param importFromId The id of the existing DataCloudflareCloudforceOneRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareCloudforceOneRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareCloudforceOneRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_cloudforce_one_request',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.4.0',
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
    this._accountIdentifier = config.accountIdentifier;
    this._requestIdentifier = config.requestIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_identifier - computed: false, optional: false, required: true
  private _accountIdentifier?: string; 
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }
  public set accountIdentifier(value: string) {
    this._accountIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdentifierInput() {
    return this._accountIdentifier;
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

  // readable_id - computed: true, optional: false, required: false
  public get readableId() {
    return this.getStringAttribute('readable_id');
  }

  // request - computed: true, optional: false, required: false
  public get request() {
    return this.getStringAttribute('request');
  }

  // request_identifier - computed: false, optional: true, required: false
  private _requestIdentifier?: string; 
  public get requestIdentifier() {
    return this.getStringAttribute('request_identifier');
  }
  public set requestIdentifier(value: string) {
    this._requestIdentifier = value;
  }
  public resetRequestIdentifier() {
    this._requestIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdentifierInput() {
    return this._requestIdentifier;
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
      account_identifier: cdktf.stringToTerraform(this._accountIdentifier),
      request_identifier: cdktf.stringToTerraform(this._requestIdentifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_identifier: {
        value: cdktf.stringToHclTerraform(this._accountIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_identifier: {
        value: cdktf.stringToHclTerraform(this._requestIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
