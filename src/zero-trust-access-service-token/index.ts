/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessServiceTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token#account_id ZeroTrustAccessServiceToken#account_id}
  */
  readonly accountId?: string;
  /**
  * A version number identifying the current `client_secret` associated with the service token. Incrementing it triggers a rotation; the previous secret will still be accepted until the time indicated by `previous_client_secret_expires_at`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token#client_secret_version ZeroTrustAccessServiceToken#client_secret_version}
  */
  readonly clientSecretVersion?: number;
  /**
  * The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The default is 1 year in hours (8760h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token#duration ZeroTrustAccessServiceToken#duration}
  */
  readonly duration?: string;
  /**
  * The name of the service token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token#name ZeroTrustAccessServiceToken#name}
  */
  readonly name: string;
  /**
  * The expiration of the previous `client_secret`. This can be modified at any point after a rotation. For example, you may extend it further into the future if you need more time to update services with the new secret; or move it into the past to immediately invalidate the previous token in case of compromise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token#previous_client_secret_expires_at ZeroTrustAccessServiceToken#previous_client_secret_expires_at}
  */
  readonly previousClientSecretExpiresAt?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token#zone_id ZeroTrustAccessServiceToken#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token}
*/
export class ZeroTrustAccessServiceToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_service_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessServiceToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessServiceToken to import
  * @param importFromId The id of the existing ZeroTrustAccessServiceToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessServiceToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_service_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessServiceTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessServiceTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_service_token',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.13.0',
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
    this._clientSecretVersion = config.clientSecretVersion;
    this._duration = config.duration;
    this._name = config.name;
    this._previousClientSecretExpiresAt = config.previousClientSecretExpiresAt;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_version - computed: true, optional: true, required: false
  private _clientSecretVersion?: number; 
  public get clientSecretVersion() {
    return this.getNumberAttribute('client_secret_version');
  }
  public set clientSecretVersion(value: number) {
    this._clientSecretVersion = value;
  }
  public resetClientSecretVersion() {
    this._clientSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionInput() {
    return this._clientSecretVersion;
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

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // previous_client_secret_expires_at - computed: false, optional: true, required: false
  private _previousClientSecretExpiresAt?: string; 
  public get previousClientSecretExpiresAt() {
    return this.getStringAttribute('previous_client_secret_expires_at');
  }
  public set previousClientSecretExpiresAt(value: string) {
    this._previousClientSecretExpiresAt = value;
  }
  public resetPreviousClientSecretExpiresAt() {
    this._previousClientSecretExpiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousClientSecretExpiresAtInput() {
    return this._previousClientSecretExpiresAt;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      client_secret_version: cdktf.numberToTerraform(this._clientSecretVersion),
      duration: cdktf.stringToTerraform(this._duration),
      name: cdktf.stringToTerraform(this._name),
      previous_client_secret_expires_at: cdktf.stringToTerraform(this._previousClientSecretExpiresAt),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      client_secret_version: {
        value: cdktf.numberToHclTerraform(this._clientSecretVersion),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous_client_secret_expires_at: {
        value: cdktf.stringToHclTerraform(this._previousClientSecretExpiresAt),
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
