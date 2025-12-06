/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaitingRoomSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow verified search engine crawlers to bypass all waiting rooms on this zone.
  * Verified search engine crawlers will not be tracked or counted by the waiting room system,
  * and will not appear in waiting room analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_settings#search_engine_crawler_bypass WaitingRoomSettings#search_engine_crawler_bypass}
  */
  readonly searchEngineCrawlerBypass?: boolean | cdktf.IResolvable;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_settings#zone_id WaitingRoomSettings#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_settings cloudflare_waiting_room_settings}
*/
export class WaitingRoomSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waiting_room_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaitingRoomSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaitingRoomSettings to import
  * @param importFromId The id of the existing WaitingRoomSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaitingRoomSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_settings cloudflare_waiting_room_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaitingRoomSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WaitingRoomSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waiting_room_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
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
    this._searchEngineCrawlerBypass = config.searchEngineCrawlerBypass;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // search_engine_crawler_bypass - computed: true, optional: true, required: false
  private _searchEngineCrawlerBypass?: boolean | cdktf.IResolvable; 
  public get searchEngineCrawlerBypass() {
    return this.getBooleanAttribute('search_engine_crawler_bypass');
  }
  public set searchEngineCrawlerBypass(value: boolean | cdktf.IResolvable) {
    this._searchEngineCrawlerBypass = value;
  }
  public resetSearchEngineCrawlerBypass() {
    this._searchEngineCrawlerBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEngineCrawlerBypassInput() {
    return this._searchEngineCrawlerBypass;
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
      search_engine_crawler_bypass: cdktf.booleanToTerraform(this._searchEngineCrawlerBypass),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      search_engine_crawler_bypass: {
        value: cdktf.booleanToHclTerraform(this._searchEngineCrawlerBypass),
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
