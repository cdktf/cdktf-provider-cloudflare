// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicNetworkMonitoringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}
  */
  readonly accountId: string;
  /**
  * Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule#automatic_advertisement MagicNetworkMonitoringRule#automatic_advertisement}
  */
  readonly automaticAdvertisement?: boolean | cdktf.IResolvable;
  /**
  * The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule#bandwidth MagicNetworkMonitoringRule#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
  * Available values: "1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule#duration MagicNetworkMonitoringRule#duration}
  */
  readonly duration?: string;
  /**
  * The id of the rule. Must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule#id MagicNetworkMonitoringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule#name MagicNetworkMonitoringRule#name}
  */
  readonly name: string;
  /**
  * The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule#packet_threshold MagicNetworkMonitoringRule#packet_threshold}
  */
  readonly packetThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}
  */
  readonly prefixes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}
*/
export class MagicNetworkMonitoringRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_network_monitoring_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicNetworkMonitoringRule to import
  * @param importFromId The id of the existing MagicNetworkMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicNetworkMonitoringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MagicNetworkMonitoringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_network_monitoring_rule',
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
    this._accountId = config.accountId;
    this._automaticAdvertisement = config.automaticAdvertisement;
    this._bandwidth = config.bandwidth;
    this._duration = config.duration;
    this._id = config.id;
    this._name = config.name;
    this._packetThreshold = config.packetThreshold;
    this._prefixes = config.prefixes;
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

  // automatic_advertisement - computed: false, optional: true, required: false
  private _automaticAdvertisement?: boolean | cdktf.IResolvable; 
  public get automaticAdvertisement() {
    return this.getBooleanAttribute('automatic_advertisement');
  }
  public set automaticAdvertisement(value: boolean | cdktf.IResolvable) {
    this._automaticAdvertisement = value;
  }
  public resetAutomaticAdvertisement() {
    this._automaticAdvertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticAdvertisementInput() {
    return this._automaticAdvertisement;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bandwidth_threshold - computed: true, optional: false, required: false
  public get bandwidthThreshold() {
    return this.getNumberAttribute('bandwidth_threshold');
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // packet_threshold - computed: false, optional: true, required: false
  private _packetThreshold?: number; 
  public get packetThreshold() {
    return this.getNumberAttribute('packet_threshold');
  }
  public set packetThreshold(value: number) {
    this._packetThreshold = value;
  }
  public resetPacketThreshold() {
    this._packetThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetThresholdInput() {
    return this._packetThreshold;
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
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
      automatic_advertisement: cdktf.booleanToTerraform(this._automaticAdvertisement),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      duration: cdktf.stringToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      packet_threshold: cdktf.numberToTerraform(this._packetThreshold),
      prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixes),
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
      automatic_advertisement: {
        value: cdktf.booleanToHclTerraform(this._automaticAdvertisement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_threshold: {
        value: cdktf.numberToHclTerraform(this._packetThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
