/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/custom_hostname_fallback_origin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomHostnameFallbackOriginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/custom_hostname_fallback_origin#id CustomHostnameFallbackOrigin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Hostname you intend to fallback requests to. Origin must be a proxied A/AAAA/CNAME DNS record within Clouldflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/custom_hostname_fallback_origin#origin CustomHostnameFallbackOrigin#origin}
  */
  readonly origin: string;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/custom_hostname_fallback_origin#zone_id CustomHostnameFallbackOrigin#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin}
*/
export class CustomHostnameFallbackOrigin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_custom_hostname_fallback_origin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomHostnameFallbackOrigin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomHostnameFallbackOrigin to import
  * @param importFromId The id of the existing CustomHostnameFallbackOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/custom_hostname_fallback_origin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomHostnameFallbackOrigin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostname_fallback_origin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomHostnameFallbackOriginConfig
  */
  public constructor(scope: Construct, id: string, config: CustomHostnameFallbackOriginConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_custom_hostname_fallback_origin',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.26.0',
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
    this._origin = config.origin;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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
      origin: cdktf.stringToTerraform(this._origin),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
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
