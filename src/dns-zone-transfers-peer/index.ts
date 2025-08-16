/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneTransfersPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}
  */
  readonly accountId: string;
  /**
  * IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary zones this IP defines the IP of the primary nameserver Cloudflare will send AXFR/IXFR requests to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer#ip DnsZoneTransfersPeer#ip}
  */
  readonly ip?: string;
  /**
  * Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer#ixfr_enable DnsZoneTransfersPeer#ixfr_enable}
  */
  readonly ixfrEnable?: boolean | cdktf.IResolvable;
  /**
  * The name of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer#name DnsZoneTransfersPeer#name}
  */
  readonly name: string;
  /**
  * DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer#port DnsZoneTransfersPeer#port}
  */
  readonly port?: number;
  /**
  * TSIG authentication will be used for zone transfer if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer#tsig_id DnsZoneTransfersPeer#tsig_id}
  */
  readonly tsigId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer}
*/
export class DnsZoneTransfersPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_zone_transfers_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZoneTransfersPeer to import
  * @param importFromId The id of the existing DnsZoneTransfersPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZoneTransfersPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneTransfersPeerConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneTransfersPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_zone_transfers_peer',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.4',
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
    this._ip = config.ip;
    this._ixfrEnable = config.ixfrEnable;
    this._name = config.name;
    this._port = config.port;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ixfr_enable - computed: false, optional: true, required: false
  private _ixfrEnable?: boolean | cdktf.IResolvable; 
  public get ixfrEnable() {
    return this.getBooleanAttribute('ixfr_enable');
  }
  public set ixfrEnable(value: boolean | cdktf.IResolvable) {
    this._ixfrEnable = value;
  }
  public resetIxfrEnable() {
    this._ixfrEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ixfrEnableInput() {
    return this._ixfrEnable;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
      ip: cdktf.stringToTerraform(this._ip),
      ixfr_enable: cdktf.booleanToTerraform(this._ixfrEnable),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ixfr_enable: {
        value: cdktf.booleanToHclTerraform(this._ixfrEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
