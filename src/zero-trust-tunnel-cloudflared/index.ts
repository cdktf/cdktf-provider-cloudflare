/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_tunnel_cloudflared
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustTunnelCloudflaredConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_tunnel_cloudflared#account_id ZeroTrustTunnelCloudflared#account_id}
  */
  readonly accountId: string;
  /**
  * Indicates if this is a locally or remotely configured tunnel. If `local`, manage the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the tunnel on the Zero Trust dashboard or using tunnel_config, tunnel_route or tunnel_virtual_network resources. Available values: `local`, `cloudflare`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_tunnel_cloudflared#config_src ZeroTrustTunnelCloudflared#config_src}
  */
  readonly configSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_tunnel_cloudflared#id ZeroTrustTunnelCloudflared#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A user-friendly name chosen when the tunnel is created. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_tunnel_cloudflared#name ZeroTrustTunnelCloudflared#name}
  */
  readonly name: string;
  /**
  * 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_tunnel_cloudflared#secret ZeroTrustTunnelCloudflared#secret}
  */
  readonly secret: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared}
*/
export class ZeroTrustTunnelCloudflared extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustTunnelCloudflared resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustTunnelCloudflared to import
  * @param importFromId The id of the existing ZeroTrustTunnelCloudflared that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_tunnel_cloudflared#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustTunnelCloudflared to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustTunnelCloudflaredConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustTunnelCloudflaredConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.52.0',
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
    this._accountId = config.accountId;
    this._configSrc = config.configSrc;
    this._id = config.id;
    this._name = config.name;
    this._secret = config.secret;
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

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // config_src - computed: false, optional: true, required: false
  private _configSrc?: string; 
  public get configSrc() {
    return this.getStringAttribute('config_src');
  }
  public set configSrc(value: string) {
    this._configSrc = value;
  }
  public resetConfigSrc() {
    this._configSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSrcInput() {
    return this._configSrc;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // tunnel_token - computed: true, optional: false, required: false
  public get tunnelToken() {
    return this.getStringAttribute('tunnel_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      config_src: cdktf.stringToTerraform(this._configSrc),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret: cdktf.stringToTerraform(this._secret),
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
      config_src: {
        value: cdktf.stringToHclTerraform(this._configSrc),
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
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
