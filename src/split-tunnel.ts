// https://www.terraform.io/docs/providers/cloudflare/r/split_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SplitTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/split_tunnel#account_id SplitTunnel#account_id}
  */
  readonly accountId: string;
  /**
  * The mode of the split tunnel policy. Either 'include' or 'exclude'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/split_tunnel#mode SplitTunnel#mode}
  */
  readonly mode: string;
  /**
  * tunnels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/split_tunnel#tunnels SplitTunnel#tunnels}
  */
  readonly tunnels: SplitTunnelTunnels[] | cdktf.IResolvable;
}
export interface SplitTunnelTunnels {
  /**
  * The address for the tunnel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/split_tunnel#address SplitTunnel#address}
  */
  readonly address?: string;
  /**
  * A description for the tunnel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/split_tunnel#description SplitTunnel#description}
  */
  readonly description?: string;
  /**
  * The domain name for the tunnel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/split_tunnel#host SplitTunnel#host}
  */
  readonly host?: string;
}

export function splitTunnelTunnelsToTerraform(struct?: SplitTunnelTunnels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    description: cdktf.stringToTerraform(struct!.description),
    host: cdktf.stringToTerraform(struct!.host),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/split_tunnel cloudflare_split_tunnel}
*/
export class SplitTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_split_tunnel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/split_tunnel cloudflare_split_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SplitTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: SplitTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_split_tunnel',
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
    this._accountId = config.accountId;
    this._mode = config.mode;
    this._tunnels = config.tunnels;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // tunnels - computed: false, optional: false, required: true
  private _tunnels?: SplitTunnelTunnels[] | cdktf.IResolvable; 
  public get tunnels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tunnels');
  }
  public set tunnels(value: SplitTunnelTunnels[] | cdktf.IResolvable) {
    this._tunnels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelsInput() {
    return this._tunnels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      mode: cdktf.stringToTerraform(this._mode),
      tunnels: cdktf.listMapper(splitTunnelTunnelsToTerraform)(this._tunnels),
    };
  }
}
