/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificatePackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate Authority selected for the order.  For information on any certificate authority specific details or restrictions [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)
  * Available values: "google", "lets_encrypt", "ssl_com".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack#certificate_authority CertificatePack#certificate_authority}
  */
  readonly certificateAuthority: string;
  /**
  * Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack#cloudflare_branding CertificatePack#cloudflare_branding}
  */
  readonly cloudflareBranding?: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of valid host names for the certificate packs. Must contain the zone apex, may not contain more than 50 hosts, and may not be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack#hosts CertificatePack#hosts}
  */
  readonly hosts: string[];
  /**
  * Type of certificate pack.
  * Available values: "advanced".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack#type CertificatePack#type}
  */
  readonly type: string;
  /**
  * Validation Method selected for the order.
  * Available values: "txt", "http", "email".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack#validation_method CertificatePack#validation_method}
  */
  readonly validationMethod: string;
  /**
  * Validity Days selected for the order.
  * Available values: 14, 30, 90, 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack#validity_days CertificatePack#validity_days}
  */
  readonly validityDays: number;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack#zone_id CertificatePack#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack cloudflare_certificate_pack}
*/
export class CertificatePack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_certificate_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificatePack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificatePack to import
  * @param importFromId The id of the existing CertificatePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificatePack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/certificate_pack cloudflare_certificate_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificatePackConfig
  */
  public constructor(scope: Construct, id: string, config: CertificatePackConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_certificate_pack',
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
    this._certificateAuthority = config.certificateAuthority;
    this._cloudflareBranding = config.cloudflareBranding;
    this._hosts = config.hosts;
    this._type = config.type;
    this._validationMethod = config.validationMethod;
    this._validityDays = config.validityDays;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_authority - computed: false, optional: false, required: true
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority;
  }

  // cloudflare_branding - computed: false, optional: true, required: false
  private _cloudflareBranding?: boolean | cdktf.IResolvable; 
  public get cloudflareBranding() {
    return this.getBooleanAttribute('cloudflare_branding');
  }
  public set cloudflareBranding(value: boolean | cdktf.IResolvable) {
    this._cloudflareBranding = value;
  }
  public resetCloudflareBranding() {
    this._cloudflareBranding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareBrandingInput() {
    return this._cloudflareBranding;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // validation_method - computed: false, optional: false, required: true
  private _validationMethod?: string; 
  public get validationMethod() {
    return this.getStringAttribute('validation_method');
  }
  public set validationMethod(value: string) {
    this._validationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationMethodInput() {
    return this._validationMethod;
  }

  // validity_days - computed: false, optional: false, required: true
  private _validityDays?: number; 
  public get validityDays() {
    return this.getNumberAttribute('validity_days');
  }
  public set validityDays(value: number) {
    this._validityDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityDaysInput() {
    return this._validityDays;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
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
      certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
      cloudflare_branding: cdktf.booleanToTerraform(this._cloudflareBranding),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      type: cdktf.stringToTerraform(this._type),
      validation_method: cdktf.stringToTerraform(this._validationMethod),
      validity_days: cdktf.numberToTerraform(this._validityDays),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_authority: {
        value: cdktf.stringToHclTerraform(this._certificateAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudflare_branding: {
        value: cdktf.booleanToHclTerraform(this._cloudflareBranding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_method: {
        value: cdktf.stringToHclTerraform(this._validationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_days: {
        value: cdktf.numberToHclTerraform(this._validityDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
