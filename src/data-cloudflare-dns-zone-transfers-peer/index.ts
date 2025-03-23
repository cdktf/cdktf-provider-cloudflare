// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/dns_zone_transfers_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareDnsZoneTransfersPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/dns_zone_transfers_peer#account_id DataCloudflareDnsZoneTransfersPeer#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/dns_zone_transfers_peer#peer_id DataCloudflareDnsZoneTransfersPeer#peer_id}
  */
  readonly peerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer}
*/
export class DataCloudflareDnsZoneTransfersPeer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_zone_transfers_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersPeer to import
  * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/dns_zone_transfers_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareDnsZoneTransfersPeerConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareDnsZoneTransfersPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_zone_transfers_peer',
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
    this._accountId = config.accountId;
    this._peerId = config.peerId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ixfr_enable - computed: true, optional: false, required: false
  public get ixfrEnable() {
    return this.getBooleanAttribute('ixfr_enable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_id - computed: false, optional: true, required: false
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  public resetPeerId() {
    this._peerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tsig_id - computed: true, optional: false, required: false
  public get tsigId() {
    return this.getStringAttribute('tsig_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      peer_id: cdktf.stringToTerraform(this._peerId),
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
      peer_id: {
        value: cdktf.stringToHclTerraform(this._peerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
