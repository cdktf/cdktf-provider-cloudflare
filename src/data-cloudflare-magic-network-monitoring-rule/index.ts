/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/magic_network_monitoring_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareMagicNetworkMonitoringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}
  */
  readonly accountId: string;
  /**
  * The id of the rule. Must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/magic_network_monitoring_rule#rule_id DataCloudflareMagicNetworkMonitoringRule#rule_id}
  */
  readonly ruleId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}
*/
export class DataCloudflareMagicNetworkMonitoringRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_network_monitoring_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRule to import
  * @param importFromId The id of the existing DataCloudflareMagicNetworkMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareMagicNetworkMonitoringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareMagicNetworkMonitoringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_network_monitoring_rule',
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
    this._ruleId = config.ruleId;
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

  // automatic_advertisement - computed: true, optional: false, required: false
  public get automaticAdvertisement() {
    return this.getBooleanAttribute('automatic_advertisement');
  }

  // bandwidth_threshold - computed: true, optional: false, required: false
  public get bandwidthThreshold() {
    return this.getNumberAttribute('bandwidth_threshold');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // packet_threshold - computed: true, optional: false, required: false
  public get packetThreshold() {
    return this.getNumberAttribute('packet_threshold');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefixes - computed: true, optional: false, required: false
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zscore_sensitivity - computed: true, optional: false, required: false
  public get zscoreSensitivity() {
    return this.getStringAttribute('zscore_sensitivity');
  }

  // zscore_target - computed: true, optional: false, required: false
  public get zscoreTarget() {
    return this.getStringAttribute('zscore_target');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      rule_id: cdktf.stringToTerraform(this._ruleId),
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
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
