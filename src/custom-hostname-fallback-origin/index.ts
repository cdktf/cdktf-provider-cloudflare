/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/custom_hostname_fallback_origin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomHostnameFallbackOriginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your origin hostname that requests to your custom hostnames will be sent to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/custom_hostname_fallback_origin#origin CustomHostnameFallbackOrigin#origin}
  */
  readonly origin: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/custom_hostname_fallback_origin#zone_id CustomHostnameFallbackOrigin#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin}
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
  * @param importFromId The id of the existing CustomHostnameFallbackOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/custom_hostname_fallback_origin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomHostnameFallbackOrigin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostname_fallback_origin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin} Resource
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
    this._origin = config.origin;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.getListAttribute('errors');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
      origin: cdktf.stringToTerraform(this._origin),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
