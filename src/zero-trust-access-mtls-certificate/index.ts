/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_mtls_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessMtlsCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_mtls_certificate#account_id ZeroTrustAccessMtlsCertificate#account_id}
  */
  readonly accountId?: string;
  /**
  * The hostnames of the applications that will use this certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_mtls_certificate#associated_hostnames ZeroTrustAccessMtlsCertificate#associated_hostnames}
  */
  readonly associatedHostnames?: string[];
  /**
  * The certificate content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_mtls_certificate#certificate ZeroTrustAccessMtlsCertificate#certificate}
  */
  readonly certificate: string;
  /**
  * The name of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_mtls_certificate#name ZeroTrustAccessMtlsCertificate#name}
  */
  readonly name: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_mtls_certificate#zone_id ZeroTrustAccessMtlsCertificate#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_mtls_certificate cloudflare_zero_trust_access_mtls_certificate}
*/
export class ZeroTrustAccessMtlsCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_mtls_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessMtlsCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessMtlsCertificate to import
  * @param importFromId The id of the existing ZeroTrustAccessMtlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_mtls_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessMtlsCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_mtls_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_access_mtls_certificate cloudflare_zero_trust_access_mtls_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessMtlsCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessMtlsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_mtls_certificate',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._associatedHostnames = config.associatedHostnames;
    this._certificate = config.certificate;
    this._name = config.name;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // associated_hostnames - computed: false, optional: true, required: false
  private _associatedHostnames?: string[]; 
  public get associatedHostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_hostnames'));
  }
  public set associatedHostnames(value: string[]) {
    this._associatedHostnames = value;
  }
  public resetAssociatedHostnames() {
    this._associatedHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedHostnamesInput() {
    return this._associatedHostnames;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      associated_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedHostnames),
      certificate: cdktf.stringToTerraform(this._certificate),
      name: cdktf.stringToTerraform(this._name),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      associated_hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associatedHostnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
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
