/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/byo_ip_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ByoIpPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of a Cloudflare account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/byo_ip_prefix#account_id ByoIpPrefix#account_id}
  */
  readonly accountId: string;
  /**
  * Autonomous System Number (ASN) the prefix will be advertised under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/byo_ip_prefix#asn ByoIpPrefix#asn}
  */
  readonly asn: number;
  /**
  * IP Prefix in Classless Inter-Domain Routing format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/byo_ip_prefix#cidr ByoIpPrefix#cidr}
  */
  readonly cidr: string;
  /**
  * Description of the prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/byo_ip_prefix#description ByoIpPrefix#description}
  */
  readonly description?: string;
  /**
  * Identifier for the uploaded LOA document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/byo_ip_prefix#loa_document_id ByoIpPrefix#loa_document_id}
  */
  readonly loaDocumentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix}
*/
export class ByoIpPrefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_byo_ip_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ByoIpPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ByoIpPrefix to import
  * @param importFromId The id of the existing ByoIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ByoIpPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_byo_ip_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ByoIpPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: ByoIpPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_byo_ip_prefix',
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
    this._accountId = config.accountId;
    this._asn = config.asn;
    this._cidr = config.cidr;
    this._description = config.description;
    this._loaDocumentId = config.loaDocumentId;
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

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // loa_document_id - computed: false, optional: false, required: true
  private _loaDocumentId?: string; 
  public get loaDocumentId() {
    return this.getStringAttribute('loa_document_id');
  }
  public set loaDocumentId(value: string) {
    this._loaDocumentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loaDocumentIdInput() {
    return this._loaDocumentId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      asn: cdktf.numberToTerraform(this._asn),
      cidr: cdktf.stringToTerraform(this._cidr),
      description: cdktf.stringToTerraform(this._description),
      loa_document_id: cdktf.stringToTerraform(this._loaDocumentId),
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
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loa_document_id: {
        value: cdktf.stringToHclTerraform(this._loaDocumentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
