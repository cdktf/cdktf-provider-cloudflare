/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OriginCaCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Certificate Signing Request. Must be newline-encoded. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate#csr OriginCaCertificate#csr}
  */
  readonly csr: string;
  /**
  * A list of hostnames or wildcard names bound to the certificate. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate#hostnames OriginCaCertificate#hostnames}
  */
  readonly hostnames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate#id OriginCaCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of days prior to the expiry to trigger a renewal of the certificate if a Terraform operation is run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate#min_days_for_renewal OriginCaCertificate#min_days_for_renewal}
  */
  readonly minDaysForRenewal?: number;
  /**
  * The signature type desired on the certificate. Available values: `origin-rsa`, `origin-ecc`, `keyless-certificate`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate#request_type OriginCaCertificate#request_type}
  */
  readonly requestType: string;
  /**
  * The number of days for which the certificate should be valid. Available values: `7`, `30`, `90`, `365`, `730`, `1095`, `5475`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate#requested_validity OriginCaCertificate#requested_validity}
  */
  readonly requestedValidity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate}
*/
export class OriginCaCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_origin_ca_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OriginCaCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OriginCaCertificate to import
  * @param importFromId The id of the existing OriginCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OriginCaCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_origin_ca_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OriginCaCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: OriginCaCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_origin_ca_certificate',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.26.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._csr = config.csr;
    this._hostnames = config.hostnames;
    this._id = config.id;
    this._minDaysForRenewal = config.minDaysForRenewal;
    this._requestType = config.requestType;
    this._requestedValidity = config.requestedValidity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // csr - computed: false, optional: false, required: true
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // hostnames - computed: false, optional: false, required: true
  private _hostnames?: string[]; 
  public get hostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('hostnames'));
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // min_days_for_renewal - computed: false, optional: true, required: false
  private _minDaysForRenewal?: number; 
  public get minDaysForRenewal() {
    return this.getNumberAttribute('min_days_for_renewal');
  }
  public set minDaysForRenewal(value: number) {
    this._minDaysForRenewal = value;
  }
  public resetMinDaysForRenewal() {
    this._minDaysForRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDaysForRenewalInput() {
    return this._minDaysForRenewal;
  }

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // requested_validity - computed: true, optional: true, required: false
  private _requestedValidity?: number; 
  public get requestedValidity() {
    return this.getNumberAttribute('requested_validity');
  }
  public set requestedValidity(value: number) {
    this._requestedValidity = value;
  }
  public resetRequestedValidity() {
    this._requestedValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedValidityInput() {
    return this._requestedValidity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csr: cdktf.stringToTerraform(this._csr),
      hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
      id: cdktf.stringToTerraform(this._id),
      min_days_for_renewal: cdktf.numberToTerraform(this._minDaysForRenewal),
      request_type: cdktf.stringToTerraform(this._requestType),
      requested_validity: cdktf.numberToTerraform(this._requestedValidity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_days_for_renewal: {
        value: cdktf.numberToHclTerraform(this._minDaysForRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_type: {
        value: cdktf.stringToHclTerraform(this._requestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requested_validity: {
        value: cdktf.numberToHclTerraform(this._requestedValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
