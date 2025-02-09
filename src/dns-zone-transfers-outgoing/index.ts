/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_outgoing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneTransfersOutgoingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_outgoing#name DnsZoneTransfersOutgoing#name}
  */
  readonly name: string;
  /**
  * A list of peer tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_outgoing#peers DnsZoneTransfersOutgoing#peers}
  */
  readonly peers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_outgoing#zone_id DnsZoneTransfersOutgoing#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing}
*/
export class DnsZoneTransfersOutgoing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_zone_transfers_outgoing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZoneTransfersOutgoing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZoneTransfersOutgoing to import
  * @param importFromId The id of the existing DnsZoneTransfersOutgoing that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_outgoing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZoneTransfersOutgoing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_outgoing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneTransfersOutgoingConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneTransfersOutgoingConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_zone_transfers_outgoing',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.0.0',
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
    this._name = config.name;
    this._peers = config.peers;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checked_time - computed: true, optional: false, required: false
  public get checkedTime() {
    return this.getStringAttribute('checked_time');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_transferred_time - computed: true, optional: false, required: false
  public get lastTransferredTime() {
    return this.getStringAttribute('last_transferred_time');
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

  // peers - computed: false, optional: false, required: true
  private _peers?: string[]; 
  public get peers() {
    return this.getListAttribute('peers');
  }
  public set peers(value: string[]) {
    this._peers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers;
  }

  // soa_serial - computed: true, optional: false, required: false
  public get soaSerial() {
    return this.getNumberAttribute('soa_serial');
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
      name: cdktf.stringToTerraform(this._name),
      peers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peers),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
