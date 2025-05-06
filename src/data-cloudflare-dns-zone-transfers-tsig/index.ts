// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareDnsZoneTransfersTsigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig#account_id DataCloudflareDnsZoneTransfersTsig#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig#tsig_id DataCloudflareDnsZoneTransfersTsig#tsig_id}
  */
  readonly tsigId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig cloudflare_dns_zone_transfers_tsig}
*/
export class DataCloudflareDnsZoneTransfersTsig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_zone_transfers_tsig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersTsig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersTsig to import
  * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersTsig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersTsig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_tsig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig cloudflare_dns_zone_transfers_tsig} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareDnsZoneTransfersTsigConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareDnsZoneTransfersTsigConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_zone_transfers_tsig',
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
    this._tsigId = config.tsigId;
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

  // algo - computed: true, optional: false, required: false
  public get algo() {
    return this.getStringAttribute('algo');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // tsig_id - computed: false, optional: true, required: false
  private _tsigId?: string; 
  public get tsigId() {
    return this.getStringAttribute('tsig_id');
  }
  public set tsigId(value: string) {
    this._tsigId = value;
  }
  public resetTsigId() {
    this._tsigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigIdInput() {
    return this._tsigId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      tsig_id: cdktf.stringToTerraform(this._tsigId),
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
      tsig_id: {
        value: cdktf.stringToHclTerraform(this._tsigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
