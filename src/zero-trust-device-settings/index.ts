/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDeviceSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}
  */
  readonly accountId: string;
  /**
  * Sets the time limit, in seconds, that a user can use an override code to bypass WARP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings#disable_for_time ZeroTrustDeviceSettings#disable_for_time}
  */
  readonly disableForTime?: number;
  /**
  * Enable gateway proxy filtering on TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings#gateway_proxy_enabled ZeroTrustDeviceSettings#gateway_proxy_enabled}
  */
  readonly gatewayProxyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable gateway proxy filtering on UDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings#gateway_udp_proxy_enabled ZeroTrustDeviceSettings#gateway_udp_proxy_enabled}
  */
  readonly gatewayUdpProxyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable installation of cloudflare managed root certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings#root_certificate_installation_enabled ZeroTrustDeviceSettings#root_certificate_installation_enabled}
  */
  readonly rootCertificateInstallationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable using CGNAT virtual IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings#use_zt_virtual_ip ZeroTrustDeviceSettings#use_zt_virtual_ip}
  */
  readonly useZtVirtualIp?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings}
*/
export class ZeroTrustDeviceSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_device_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDeviceSettings to import
  * @param importFromId The id of the existing ZeroTrustDeviceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDeviceSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDeviceSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDeviceSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_device_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
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
    this._disableForTime = config.disableForTime;
    this._gatewayProxyEnabled = config.gatewayProxyEnabled;
    this._gatewayUdpProxyEnabled = config.gatewayUdpProxyEnabled;
    this._rootCertificateInstallationEnabled = config.rootCertificateInstallationEnabled;
    this._useZtVirtualIp = config.useZtVirtualIp;
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

  // disable_for_time - computed: false, optional: true, required: false
  private _disableForTime?: number; 
  public get disableForTime() {
    return this.getNumberAttribute('disable_for_time');
  }
  public set disableForTime(value: number) {
    this._disableForTime = value;
  }
  public resetDisableForTime() {
    this._disableForTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableForTimeInput() {
    return this._disableForTime;
  }

  // gateway_proxy_enabled - computed: false, optional: true, required: false
  private _gatewayProxyEnabled?: boolean | cdktf.IResolvable; 
  public get gatewayProxyEnabled() {
    return this.getBooleanAttribute('gateway_proxy_enabled');
  }
  public set gatewayProxyEnabled(value: boolean | cdktf.IResolvable) {
    this._gatewayProxyEnabled = value;
  }
  public resetGatewayProxyEnabled() {
    this._gatewayProxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayProxyEnabledInput() {
    return this._gatewayProxyEnabled;
  }

  // gateway_udp_proxy_enabled - computed: false, optional: true, required: false
  private _gatewayUdpProxyEnabled?: boolean | cdktf.IResolvable; 
  public get gatewayUdpProxyEnabled() {
    return this.getBooleanAttribute('gateway_udp_proxy_enabled');
  }
  public set gatewayUdpProxyEnabled(value: boolean | cdktf.IResolvable) {
    this._gatewayUdpProxyEnabled = value;
  }
  public resetGatewayUdpProxyEnabled() {
    this._gatewayUdpProxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUdpProxyEnabledInput() {
    return this._gatewayUdpProxyEnabled;
  }

  // root_certificate_installation_enabled - computed: false, optional: true, required: false
  private _rootCertificateInstallationEnabled?: boolean | cdktf.IResolvable; 
  public get rootCertificateInstallationEnabled() {
    return this.getBooleanAttribute('root_certificate_installation_enabled');
  }
  public set rootCertificateInstallationEnabled(value: boolean | cdktf.IResolvable) {
    this._rootCertificateInstallationEnabled = value;
  }
  public resetRootCertificateInstallationEnabled() {
    this._rootCertificateInstallationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertificateInstallationEnabledInput() {
    return this._rootCertificateInstallationEnabled;
  }

  // use_zt_virtual_ip - computed: false, optional: true, required: false
  private _useZtVirtualIp?: boolean | cdktf.IResolvable; 
  public get useZtVirtualIp() {
    return this.getBooleanAttribute('use_zt_virtual_ip');
  }
  public set useZtVirtualIp(value: boolean | cdktf.IResolvable) {
    this._useZtVirtualIp = value;
  }
  public resetUseZtVirtualIp() {
    this._useZtVirtualIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useZtVirtualIpInput() {
    return this._useZtVirtualIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      disable_for_time: cdktf.numberToTerraform(this._disableForTime),
      gateway_proxy_enabled: cdktf.booleanToTerraform(this._gatewayProxyEnabled),
      gateway_udp_proxy_enabled: cdktf.booleanToTerraform(this._gatewayUdpProxyEnabled),
      root_certificate_installation_enabled: cdktf.booleanToTerraform(this._rootCertificateInstallationEnabled),
      use_zt_virtual_ip: cdktf.booleanToTerraform(this._useZtVirtualIp),
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
      disable_for_time: {
        value: cdktf.numberToHclTerraform(this._disableForTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_proxy_enabled: {
        value: cdktf.booleanToHclTerraform(this._gatewayProxyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_udp_proxy_enabled: {
        value: cdktf.booleanToHclTerraform(this._gatewayUdpProxyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_certificate_installation_enabled: {
        value: cdktf.booleanToHclTerraform(this._rootCertificateInstallationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_zt_virtual_ip: {
        value: cdktf.booleanToHclTerraform(this._useZtVirtualIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
