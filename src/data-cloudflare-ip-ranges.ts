// https://www.terraform.io/docs/providers/cloudflare/d/ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareIpRangesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/d/ip_ranges cloudflare_ip_ranges}
*/
export class DataCloudflareIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ip_ranges";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/d/ip_ranges cloudflare_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // china_ipv4_cidr_blocks - computed: true, optional: false, required: false
  public get chinaIpv4CidrBlocks() {
    return this.getListAttribute('china_ipv4_cidr_blocks');
  }

  // china_ipv6_cidr_blocks - computed: true, optional: false, required: false
  public get chinaIpv6CidrBlocks() {
    return this.getListAttribute('china_ipv6_cidr_blocks');
  }

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_cidr_blocks - computed: true, optional: false, required: false
  public get ipv4CidrBlocks() {
    return this.getListAttribute('ipv4_cidr_blocks');
  }

  // ipv6_cidr_blocks - computed: true, optional: false, required: false
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6_cidr_blocks');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
