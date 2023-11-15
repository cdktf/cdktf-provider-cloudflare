/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceSettingsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#account_id DeviceSettingsPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * Whether to allow mode switch for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#allow_mode_switch DeviceSettingsPolicy#allow_mode_switch}
  */
  readonly allowModeSwitch?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow updates under this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#allow_updates DeviceSettingsPolicy#allow_updates}
  */
  readonly allowUpdates?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow devices to leave the organization. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#allowed_to_leave DeviceSettingsPolicy#allowed_to_leave}
  */
  readonly allowedToLeave?: boolean | cdktf.IResolvable;
  /**
  * The amount of time in minutes to reconnect after having been disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#auto_connect DeviceSettingsPolicy#auto_connect}
  */
  readonly autoConnect?: number;
  /**
  * The captive portal value for this policy. Defaults to `180`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#captive_portal DeviceSettingsPolicy#captive_portal}
  */
  readonly captivePortal?: number;
  /**
  * Whether the policy refers to the default account policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#default DeviceSettingsPolicy#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Description of Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#description DeviceSettingsPolicy#description}
  */
  readonly description: string;
  /**
  * Whether to disable auto fallback for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#disable_auto_fallback DeviceSettingsPolicy#disable_auto_fallback}
  */
  readonly disableAutoFallback?: boolean | cdktf.IResolvable;
  /**
  * Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#enabled DeviceSettingsPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to add Microsoft IPs to split tunnel exclusions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#exclude_office_ips DeviceSettingsPolicy#exclude_office_ips}
  */
  readonly excludeOfficeIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#id DeviceSettingsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#match DeviceSettingsPolicy#match}
  */
  readonly match?: string;
  /**
  * Name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#name DeviceSettingsPolicy#name}
  */
  readonly name: string;
  /**
  * The precedence of the policy. Lower values indicate higher precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#precedence DeviceSettingsPolicy#precedence}
  */
  readonly precedence?: number;
  /**
  * The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#service_mode_v2_mode DeviceSettingsPolicy#service_mode_v2_mode}
  */
  readonly serviceModeV2Mode?: string;
  /**
  * The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#service_mode_v2_port DeviceSettingsPolicy#service_mode_v2_port}
  */
  readonly serviceModeV2Port?: number;
  /**
  * The support URL that will be opened when sending feedback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#support_url DeviceSettingsPolicy#support_url}
  */
  readonly supportUrl?: string;
  /**
  * Enablement of the ZT client switch lock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#switch_locked DeviceSettingsPolicy#switch_locked}
  */
  readonly switchLocked?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy cloudflare_device_settings_policy}
*/
export class DeviceSettingsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_device_settings_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceSettingsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceSettingsPolicy to import
  * @param importFromId The id of the existing DeviceSettingsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceSettingsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_device_settings_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/device_settings_policy cloudflare_device_settings_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceSettingsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceSettingsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_device_settings_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.19.0',
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
    this._allowModeSwitch = config.allowModeSwitch;
    this._allowUpdates = config.allowUpdates;
    this._allowedToLeave = config.allowedToLeave;
    this._autoConnect = config.autoConnect;
    this._captivePortal = config.captivePortal;
    this._default = config.default;
    this._description = config.description;
    this._disableAutoFallback = config.disableAutoFallback;
    this._enabled = config.enabled;
    this._excludeOfficeIps = config.excludeOfficeIps;
    this._id = config.id;
    this._match = config.match;
    this._name = config.name;
    this._precedence = config.precedence;
    this._serviceModeV2Mode = config.serviceModeV2Mode;
    this._serviceModeV2Port = config.serviceModeV2Port;
    this._supportUrl = config.supportUrl;
    this._switchLocked = config.switchLocked;
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

  // allow_mode_switch - computed: false, optional: true, required: false
  private _allowModeSwitch?: boolean | cdktf.IResolvable; 
  public get allowModeSwitch() {
    return this.getBooleanAttribute('allow_mode_switch');
  }
  public set allowModeSwitch(value: boolean | cdktf.IResolvable) {
    this._allowModeSwitch = value;
  }
  public resetAllowModeSwitch() {
    this._allowModeSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowModeSwitchInput() {
    return this._allowModeSwitch;
  }

  // allow_updates - computed: false, optional: true, required: false
  private _allowUpdates?: boolean | cdktf.IResolvable; 
  public get allowUpdates() {
    return this.getBooleanAttribute('allow_updates');
  }
  public set allowUpdates(value: boolean | cdktf.IResolvable) {
    this._allowUpdates = value;
  }
  public resetAllowUpdates() {
    this._allowUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUpdatesInput() {
    return this._allowUpdates;
  }

  // allowed_to_leave - computed: false, optional: true, required: false
  private _allowedToLeave?: boolean | cdktf.IResolvable; 
  public get allowedToLeave() {
    return this.getBooleanAttribute('allowed_to_leave');
  }
  public set allowedToLeave(value: boolean | cdktf.IResolvable) {
    this._allowedToLeave = value;
  }
  public resetAllowedToLeave() {
    this._allowedToLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToLeaveInput() {
    return this._allowedToLeave;
  }

  // auto_connect - computed: false, optional: true, required: false
  private _autoConnect?: number; 
  public get autoConnect() {
    return this.getNumberAttribute('auto_connect');
  }
  public set autoConnect(value: number) {
    this._autoConnect = value;
  }
  public resetAutoConnect() {
    this._autoConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConnectInput() {
    return this._autoConnect;
  }

  // captive_portal - computed: false, optional: true, required: false
  private _captivePortal?: number; 
  public get captivePortal() {
    return this.getNumberAttribute('captive_portal');
  }
  public set captivePortal(value: number) {
    this._captivePortal = value;
  }
  public resetCaptivePortal() {
    this._captivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalInput() {
    return this._captivePortal;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_auto_fallback - computed: false, optional: true, required: false
  private _disableAutoFallback?: boolean | cdktf.IResolvable; 
  public get disableAutoFallback() {
    return this.getBooleanAttribute('disable_auto_fallback');
  }
  public set disableAutoFallback(value: boolean | cdktf.IResolvable) {
    this._disableAutoFallback = value;
  }
  public resetDisableAutoFallback() {
    this._disableAutoFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoFallbackInput() {
    return this._disableAutoFallback;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_office_ips - computed: false, optional: true, required: false
  private _excludeOfficeIps?: boolean | cdktf.IResolvable; 
  public get excludeOfficeIps() {
    return this.getBooleanAttribute('exclude_office_ips');
  }
  public set excludeOfficeIps(value: boolean | cdktf.IResolvable) {
    this._excludeOfficeIps = value;
  }
  public resetExcludeOfficeIps() {
    this._excludeOfficeIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeOfficeIpsInput() {
    return this._excludeOfficeIps;
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

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // service_mode_v2_mode - computed: false, optional: true, required: false
  private _serviceModeV2Mode?: string; 
  public get serviceModeV2Mode() {
    return this.getStringAttribute('service_mode_v2_mode');
  }
  public set serviceModeV2Mode(value: string) {
    this._serviceModeV2Mode = value;
  }
  public resetServiceModeV2Mode() {
    this._serviceModeV2Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceModeV2ModeInput() {
    return this._serviceModeV2Mode;
  }

  // service_mode_v2_port - computed: false, optional: true, required: false
  private _serviceModeV2Port?: number; 
  public get serviceModeV2Port() {
    return this.getNumberAttribute('service_mode_v2_port');
  }
  public set serviceModeV2Port(value: number) {
    this._serviceModeV2Port = value;
  }
  public resetServiceModeV2Port() {
    this._serviceModeV2Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceModeV2PortInput() {
    return this._serviceModeV2Port;
  }

  // support_url - computed: false, optional: true, required: false
  private _supportUrl?: string; 
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
  public set supportUrl(value: string) {
    this._supportUrl = value;
  }
  public resetSupportUrl() {
    this._supportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUrlInput() {
    return this._supportUrl;
  }

  // switch_locked - computed: false, optional: true, required: false
  private _switchLocked?: boolean | cdktf.IResolvable; 
  public get switchLocked() {
    return this.getBooleanAttribute('switch_locked');
  }
  public set switchLocked(value: boolean | cdktf.IResolvable) {
    this._switchLocked = value;
  }
  public resetSwitchLocked() {
    this._switchLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchLockedInput() {
    return this._switchLocked;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allow_mode_switch: cdktf.booleanToTerraform(this._allowModeSwitch),
      allow_updates: cdktf.booleanToTerraform(this._allowUpdates),
      allowed_to_leave: cdktf.booleanToTerraform(this._allowedToLeave),
      auto_connect: cdktf.numberToTerraform(this._autoConnect),
      captive_portal: cdktf.numberToTerraform(this._captivePortal),
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      disable_auto_fallback: cdktf.booleanToTerraform(this._disableAutoFallback),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_office_ips: cdktf.booleanToTerraform(this._excludeOfficeIps),
      id: cdktf.stringToTerraform(this._id),
      match: cdktf.stringToTerraform(this._match),
      name: cdktf.stringToTerraform(this._name),
      precedence: cdktf.numberToTerraform(this._precedence),
      service_mode_v2_mode: cdktf.stringToTerraform(this._serviceModeV2Mode),
      service_mode_v2_port: cdktf.numberToTerraform(this._serviceModeV2Port),
      support_url: cdktf.stringToTerraform(this._supportUrl),
      switch_locked: cdktf.booleanToTerraform(this._switchLocked),
    };
  }
}
