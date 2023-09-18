// https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/data-sources/zone_dnssec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZoneDnssecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/data-sources/zone_dnssec#id DataCloudflareZoneDnssec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The zone identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/data-sources/zone_dnssec#zone_id DataCloudflareZoneDnssec#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/data-sources/zone_dnssec cloudflare_zone_dnssec}
*/
export class DataCloudflareZoneDnssec extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_dnssec";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/data-sources/zone_dnssec cloudflare_zone_dnssec} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZoneDnssecConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZoneDnssecConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_dnssec',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.14.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // digest_algorithm - computed: true, optional: false, required: false
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }

  // digest_type - computed: true, optional: false, required: false
  public get digestType() {
    return this.getStringAttribute('digest_type');
  }

  // ds - computed: true, optional: false, required: false
  public get ds() {
    return this.getStringAttribute('ds');
  }

  // flags - computed: true, optional: false, required: false
  public get flags() {
    return this.getNumberAttribute('flags');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_tag - computed: true, optional: false, required: false
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
