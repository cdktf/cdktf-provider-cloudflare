/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_access_custom_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessCustomPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_access_custom_page#account_id ZeroTrustAccessCustomPage#account_id}
  */
  readonly accountId: string;
  /**
  * Number of apps the custom page is assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_access_custom_page#app_count ZeroTrustAccessCustomPage#app_count}
  */
  readonly appCount?: number;
  /**
  * Custom page HTML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_access_custom_page#custom_html ZeroTrustAccessCustomPage#custom_html}
  */
  readonly customHtml: string;
  /**
  * Custom page name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_access_custom_page#name ZeroTrustAccessCustomPage#name}
  */
  readonly name: string;
  /**
  * Custom page type.
  * Available values: "identity_denied", "forbidden".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_access_custom_page#type ZeroTrustAccessCustomPage#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_access_custom_page cloudflare_zero_trust_access_custom_page}
*/
export class ZeroTrustAccessCustomPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_custom_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessCustomPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessCustomPage to import
  * @param importFromId The id of the existing ZeroTrustAccessCustomPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_access_custom_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessCustomPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_custom_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_access_custom_page cloudflare_zero_trust_access_custom_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessCustomPageConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessCustomPageConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_custom_page',
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
    this._appCount = config.appCount;
    this._customHtml = config.customHtml;
    this._name = config.name;
    this._type = config.type;
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

  // app_count - computed: false, optional: true, required: false
  private _appCount?: number; 
  public get appCount() {
    return this.getNumberAttribute('app_count');
  }
  public set appCount(value: number) {
    this._appCount = value;
  }
  public resetAppCount() {
    this._appCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCountInput() {
    return this._appCount;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_html - computed: false, optional: false, required: true
  private _customHtml?: string; 
  public get customHtml() {
    return this.getStringAttribute('custom_html');
  }
  public set customHtml(value: string) {
    this._customHtml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHtmlInput() {
    return this._customHtml;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      app_count: cdktf.numberToTerraform(this._appCount),
      custom_html: cdktf.stringToTerraform(this._customHtml),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
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
      app_count: {
        value: cdktf.numberToHclTerraform(this._appCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_html: {
        value: cdktf.stringToHclTerraform(this._customHtml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
