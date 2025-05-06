/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/user_agent_blocking_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareUserAgentBlockingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the User Agent Blocking rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/user_agent_blocking_rule#ua_rule_id DataCloudflareUserAgentBlockingRule#ua_rule_id}
  */
  readonly uaRuleId: string;
  /**
  * Defines an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/user_agent_blocking_rule#zone_id DataCloudflareUserAgentBlockingRule#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule}
*/
export class DataCloudflareUserAgentBlockingRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_user_agent_blocking_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareUserAgentBlockingRule to import
  * @param importFromId The id of the existing DataCloudflareUserAgentBlockingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/user_agent_blocking_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareUserAgentBlockingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_agent_blocking_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareUserAgentBlockingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareUserAgentBlockingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_user_agent_blocking_rule',
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
    this._uaRuleId = config.uaRuleId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ua_rule_id - computed: false, optional: false, required: true
  private _uaRuleId?: string; 
  public get uaRuleId() {
    return this.getStringAttribute('ua_rule_id');
  }
  public set uaRuleId(value: string) {
    this._uaRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uaRuleIdInput() {
    return this._uaRuleId;
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
      ua_rule_id: cdktf.stringToTerraform(this._uaRuleId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ua_rule_id: {
        value: cdktf.stringToHclTerraform(this._uaRuleId),
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
