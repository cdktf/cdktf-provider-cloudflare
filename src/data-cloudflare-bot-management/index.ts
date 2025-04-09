/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/bot_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareBotManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/bot_management#zone_id DataCloudflareBotManagement#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareBotManagementStaleZoneConfiguration {
}

export function dataCloudflareBotManagementStaleZoneConfigurationToTerraform(struct?: DataCloudflareBotManagementStaleZoneConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareBotManagementStaleZoneConfigurationToHclTerraform(struct?: DataCloudflareBotManagementStaleZoneConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareBotManagementStaleZoneConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareBotManagementStaleZoneConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareBotManagementStaleZoneConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fight_mode - computed: true, optional: false, required: false
  public get fightMode() {
    return this.getBooleanAttribute('fight_mode');
  }

  // optimize_wordpress - computed: true, optional: false, required: false
  public get optimizeWordpress() {
    return this.getBooleanAttribute('optimize_wordpress');
  }

  // sbfm_definitely_automated - computed: true, optional: false, required: false
  public get sbfmDefinitelyAutomated() {
    return this.getStringAttribute('sbfm_definitely_automated');
  }

  // sbfm_likely_automated - computed: true, optional: false, required: false
  public get sbfmLikelyAutomated() {
    return this.getStringAttribute('sbfm_likely_automated');
  }

  // sbfm_static_resource_protection - computed: true, optional: false, required: false
  public get sbfmStaticResourceProtection() {
    return this.getStringAttribute('sbfm_static_resource_protection');
  }

  // sbfm_verified_bots - computed: true, optional: false, required: false
  public get sbfmVerifiedBots() {
    return this.getStringAttribute('sbfm_verified_bots');
  }

  // suppress_session_score - computed: true, optional: false, required: false
  public get suppressSessionScore() {
    return this.getBooleanAttribute('suppress_session_score');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/bot_management cloudflare_bot_management}
*/
export class DataCloudflareBotManagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_bot_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareBotManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareBotManagement to import
  * @param importFromId The id of the existing DataCloudflareBotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/bot_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareBotManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_bot_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/bot_management cloudflare_bot_management} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareBotManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareBotManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_bot_management',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.3.0',
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
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_bots_protection - computed: true, optional: false, required: false
  public get aiBotsProtection() {
    return this.getStringAttribute('ai_bots_protection');
  }

  // auto_update_model - computed: true, optional: false, required: false
  public get autoUpdateModel() {
    return this.getBooleanAttribute('auto_update_model');
  }

  // crawler_protection - computed: true, optional: false, required: false
  public get crawlerProtection() {
    return this.getStringAttribute('crawler_protection');
  }

  // enable_js - computed: true, optional: false, required: false
  public get enableJs() {
    return this.getBooleanAttribute('enable_js');
  }

  // fight_mode - computed: true, optional: false, required: false
  public get fightMode() {
    return this.getBooleanAttribute('fight_mode');
  }

  // optimize_wordpress - computed: true, optional: false, required: false
  public get optimizeWordpress() {
    return this.getBooleanAttribute('optimize_wordpress');
  }

  // sbfm_definitely_automated - computed: true, optional: false, required: false
  public get sbfmDefinitelyAutomated() {
    return this.getStringAttribute('sbfm_definitely_automated');
  }

  // sbfm_likely_automated - computed: true, optional: false, required: false
  public get sbfmLikelyAutomated() {
    return this.getStringAttribute('sbfm_likely_automated');
  }

  // sbfm_static_resource_protection - computed: true, optional: false, required: false
  public get sbfmStaticResourceProtection() {
    return this.getBooleanAttribute('sbfm_static_resource_protection');
  }

  // sbfm_verified_bots - computed: true, optional: false, required: false
  public get sbfmVerifiedBots() {
    return this.getStringAttribute('sbfm_verified_bots');
  }

  // stale_zone_configuration - computed: true, optional: false, required: false
  private _staleZoneConfiguration = new DataCloudflareBotManagementStaleZoneConfigurationOutputReference(this, "stale_zone_configuration");
  public get staleZoneConfiguration() {
    return this._staleZoneConfiguration;
  }

  // suppress_session_score - computed: true, optional: false, required: false
  public get suppressSessionScore() {
    return this.getBooleanAttribute('suppress_session_score');
  }

  // using_latest_model - computed: true, optional: false, required: false
  public get usingLatestModel() {
    return this.getBooleanAttribute('using_latest_model');
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
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
