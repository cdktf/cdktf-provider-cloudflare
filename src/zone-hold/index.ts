/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zone_hold
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneHoldConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `hold_after` is provided and future-dated, the hold will be temporarily disabled,
  * then automatically re-enabled by the system at the time specified
  * in this RFC3339-formatted timestamp. A past-dated `hold_after` value will have
  * no effect on an existing, enabled hold. Providing an empty string will set its value
  * to the current time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zone_hold#hold_after ZoneHold#hold_after}
  */
  readonly holdAfter?: string;
  /**
  * If `true`, the zone hold will extend to block any subdomain of the given zone, as well
  * as SSL4SaaS Custom Hostnames. For example, a zone hold on a zone with the hostname
  * 'example.com' and include_subdomains=true will block 'example.com',
  * 'staging.example.com', 'api.staging.example.com', etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zone_hold#include_subdomains ZoneHold#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zone_hold#zone_id ZoneHold#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zone_hold cloudflare_zone_hold}
*/
export class ZoneHold extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_hold";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneHold resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneHold to import
  * @param importFromId The id of the existing ZoneHold that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zone_hold#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneHold to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_hold", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zone_hold cloudflare_zone_hold} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneHoldConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneHoldConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_hold',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
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
    this._holdAfter = config.holdAfter;
    this._includeSubdomains = config.includeSubdomains;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hold - computed: true, optional: false, required: false
  public get hold() {
    return this.getBooleanAttribute('hold');
  }

  // hold_after - computed: true, optional: true, required: false
  private _holdAfter?: string; 
  public get holdAfter() {
    return this.getStringAttribute('hold_after');
  }
  public set holdAfter(value: string) {
    this._holdAfter = value;
  }
  public resetHoldAfter() {
    this._holdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdAfterInput() {
    return this._holdAfter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_subdomains - computed: true, optional: true, required: false
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
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
      hold_after: cdktf.stringToTerraform(this._holdAfter),
      include_subdomains: cdktf.booleanToTerraform(this._includeSubdomains),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hold_after: {
        value: cdktf.stringToHclTerraform(this._holdAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_subdomains: {
        value: cdktf.booleanToHclTerraform(this._includeSubdomains),
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
