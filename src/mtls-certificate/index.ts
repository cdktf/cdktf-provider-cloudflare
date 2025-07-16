/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/mtls_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MtlsCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/mtls_certificate#account_id MtlsCertificate#account_id}
  */
  readonly accountId: string;
  /**
  * Indicates whether the certificate is a CA or leaf certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/mtls_certificate#ca MtlsCertificate#ca}
  */
  readonly ca: boolean | cdktf.IResolvable;
  /**
  * The uploaded root CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/mtls_certificate#certificates MtlsCertificate#certificates}
  */
  readonly certificates: string;
  /**
  * Optional unique name for the certificate. Only used for human readability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/mtls_certificate#name MtlsCertificate#name}
  */
  readonly name?: string;
  /**
  * The private key for the certificate. This field is only needed for specific use cases such as using a custom certificate with Zero Trust's block page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/mtls_certificate#private_key MtlsCertificate#private_key}
  */
  readonly privateKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/mtls_certificate cloudflare_mtls_certificate}
*/
export class MtlsCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_mtls_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MtlsCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MtlsCertificate to import
  * @param importFromId The id of the existing MtlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/mtls_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MtlsCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_mtls_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/mtls_certificate cloudflare_mtls_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MtlsCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: MtlsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_mtls_certificate',
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
    this._ca = config.ca;
    this._certificates = config.certificates;
    this._name = config.name;
    this._privateKey = config.privateKey;
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

  // ca - computed: false, optional: false, required: true
  private _ca?: boolean | cdktf.IResolvable; 
  public get ca() {
    return this.getBooleanAttribute('ca');
  }
  public set ca(value: boolean | cdktf.IResolvable) {
    this._ca = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // certificates - computed: false, optional: false, required: true
  private _certificates?: string; 
  public get certificates() {
    return this.getStringAttribute('certificates');
  }
  public set certificates(value: string) {
    this._certificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uploaded_on - computed: true, optional: false, required: false
  public get uploadedOn() {
    return this.getStringAttribute('uploaded_on');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      ca: cdktf.booleanToTerraform(this._ca),
      certificates: cdktf.stringToTerraform(this._certificates),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
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
      ca: {
        value: cdktf.booleanToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificates: {
        value: cdktf.stringToHclTerraform(this._certificates),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
