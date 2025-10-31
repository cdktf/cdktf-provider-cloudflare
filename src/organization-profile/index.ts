/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationProfileAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}
  */
  readonly businessAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}
  */
  readonly businessEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}
  */
  readonly businessName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}
  */
  readonly businessPhone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}
  */
  readonly externalMetadata: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile cloudflare_organization_profile}
*/
export class OrganizationProfileA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_organization_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationProfileA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationProfileA to import
  * @param importFromId The id of the existing OrganizationProfileA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationProfileA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile cloudflare_organization_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationProfileAConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationProfileAConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_organization_profile',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.12.0',
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
    this._businessAddress = config.businessAddress;
    this._businessEmail = config.businessEmail;
    this._businessName = config.businessName;
    this._businessPhone = config.businessPhone;
    this._externalMetadata = config.externalMetadata;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_address - computed: false, optional: false, required: true
  private _businessAddress?: string; 
  public get businessAddress() {
    return this.getStringAttribute('business_address');
  }
  public set businessAddress(value: string) {
    this._businessAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessAddressInput() {
    return this._businessAddress;
  }

  // business_email - computed: false, optional: false, required: true
  private _businessEmail?: string; 
  public get businessEmail() {
    return this.getStringAttribute('business_email');
  }
  public set businessEmail(value: string) {
    this._businessEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessEmailInput() {
    return this._businessEmail;
  }

  // business_name - computed: false, optional: false, required: true
  private _businessName?: string; 
  public get businessName() {
    return this.getStringAttribute('business_name');
  }
  public set businessName(value: string) {
    this._businessName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessNameInput() {
    return this._businessName;
  }

  // business_phone - computed: false, optional: false, required: true
  private _businessPhone?: string; 
  public get businessPhone() {
    return this.getStringAttribute('business_phone');
  }
  public set businessPhone(value: string) {
    this._businessPhone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessPhoneInput() {
    return this._businessPhone;
  }

  // external_metadata - computed: false, optional: false, required: true
  private _externalMetadata?: string; 
  public get externalMetadata() {
    return this.getStringAttribute('external_metadata');
  }
  public set externalMetadata(value: string) {
    this._externalMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMetadataInput() {
    return this._externalMetadata;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_address: cdktf.stringToTerraform(this._businessAddress),
      business_email: cdktf.stringToTerraform(this._businessEmail),
      business_name: cdktf.stringToTerraform(this._businessName),
      business_phone: cdktf.stringToTerraform(this._businessPhone),
      external_metadata: cdktf.stringToTerraform(this._externalMetadata),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_address: {
        value: cdktf.stringToHclTerraform(this._businessAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_email: {
        value: cdktf.stringToHclTerraform(this._businessEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_name: {
        value: cdktf.stringToHclTerraform(this._businessName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_phone: {
        value: cdktf.stringToHclTerraform(this._businessPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_metadata: {
        value: cdktf.stringToHclTerraform(this._externalMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
