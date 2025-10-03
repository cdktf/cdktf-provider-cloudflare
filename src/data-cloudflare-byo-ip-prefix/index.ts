/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/byo_ip_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareByoIpPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of a Cloudflare account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/byo_ip_prefix#account_id DataCloudflareByoIpPrefix#account_id}
  */
  readonly accountId: string;
  /**
  * Identifier of an IP Prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/byo_ip_prefix#prefix_id DataCloudflareByoIpPrefix#prefix_id}
  */
  readonly prefixId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix}
*/
export class DataCloudflareByoIpPrefix extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_byo_ip_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareByoIpPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareByoIpPrefix to import
  * @param importFromId The id of the existing DataCloudflareByoIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareByoIpPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_byo_ip_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareByoIpPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareByoIpPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_byo_ip_prefix',
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
    this._prefixId = config.prefixId;
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

  // advertised - computed: true, optional: false, required: false
  public get advertised() {
    return this.getBooleanAttribute('advertised');
  }

  // advertised_modified_at - computed: true, optional: false, required: false
  public get advertisedModifiedAt() {
    return this.getStringAttribute('advertised_modified_at');
  }

  // approved - computed: true, optional: false, required: false
  public get approved() {
    return this.getStringAttribute('approved');
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // loa_document_id - computed: true, optional: false, required: false
  public get loaDocumentId() {
    return this.getStringAttribute('loa_document_id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // on_demand_enabled - computed: true, optional: false, required: false
  public get onDemandEnabled() {
    return this.getBooleanAttribute('on_demand_enabled');
  }

  // on_demand_locked - computed: true, optional: false, required: false
  public get onDemandLocked() {
    return this.getBooleanAttribute('on_demand_locked');
  }

  // prefix_id - computed: false, optional: true, required: false
  private _prefixId?: string; 
  public get prefixId() {
    return this.getStringAttribute('prefix_id');
  }
  public set prefixId(value: string) {
    this._prefixId = value;
  }
  public resetPrefixId() {
    this._prefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixIdInput() {
    return this._prefixId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      prefix_id: cdktf.stringToTerraform(this._prefixId),
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
      prefix_id: {
        value: cdktf.stringToHclTerraform(this._prefixId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
