// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/total_tls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TotalTlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Certificate Authority that Total TLS certificates will be issued through.
  * Available values: "google", "lets_encrypt", "ssl_com".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/total_tls#certificate_authority TotalTls#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/total_tls#enabled TotalTls#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/total_tls#zone_id TotalTls#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/total_tls cloudflare_total_tls}
*/
export class TotalTls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_total_tls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TotalTls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TotalTls to import
  * @param importFromId The id of the existing TotalTls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/total_tls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TotalTls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_total_tls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/total_tls cloudflare_total_tls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TotalTlsConfig
  */
  public constructor(scope: Construct, id: string, config: TotalTlsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_total_tls',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.2.0',
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
    this._enabled = config.enabled;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_authority - computed: false, optional: true, required: false
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // validity_period - computed: true, optional: false, required: false
  public get validityPeriod() {
    return this.getNumberAttribute('validity_period');
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
      enabled: cdktf.booleanToTerraform(this._enabled),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
