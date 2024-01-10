# `deviceSettingsPolicy` Submodule <a name="`deviceSettingsPolicy` Submodule" id="@cdktf/provider-cloudflare.deviceSettingsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeviceSettingsPolicy <a name="DeviceSettingsPolicy" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy cloudflare_device_settings_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_settings_policy

deviceSettingsPolicy.DeviceSettingsPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  description: str,
  name: str,
  allowed_to_leave: typing.Union[bool, IResolvable] = None,
  allow_mode_switch: typing.Union[bool, IResolvable] = None,
  allow_updates: typing.Union[bool, IResolvable] = None,
  auto_connect: typing.Union[int, float] = None,
  captive_portal: typing.Union[int, float] = None,
  default: typing.Union[bool, IResolvable] = None,
  disable_auto_fallback: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  exclude_office_ips: typing.Union[bool, IResolvable] = None,
  id: str = None,
  match: str = None,
  precedence: typing.Union[int, float] = None,
  service_mode_v2_mode: str = None,
  service_mode_v2_port: typing.Union[int, float] = None,
  support_url: str = None,
  switch_locked: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of Policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.allowedToLeave">allowed_to_leave</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow devices to leave the organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.allowModeSwitch">allow_mode_switch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow mode switch for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.allowUpdates">allow_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow updates under this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.autoConnect">auto_connect</a></code> | <code>typing.Union[int, float]</code> | The amount of time in minutes to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.captivePortal">captive_portal</a></code> | <code>typing.Union[int, float]</code> | The captive portal value for this policy. Defaults to `180`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the policy refers to the default account policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.disableAutoFallback">disable_auto_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable auto fallback for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the policy is enabled (cannot be set for default policies). Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.excludeOfficeIps">exclude_office_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to add Microsoft IPs to split tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#id DeviceSettingsPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.match">match</a></code> | <code>str</code> | Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | The precedence of the policy. Lower values indicate higher precedence. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.serviceModeV2Mode">service_mode_v2_mode</a></code> | <code>str</code> | The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.serviceModeV2Port">service_mode_v2_port</a></code> | <code>typing.Union[int, float]</code> | The port to use for the proxy service mode. Required when using `service_mode_v2_mode`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.supportUrl">support_url</a></code> | <code>str</code> | The support URL that will be opened when sending feedback. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.switchLocked">switch_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enablement of the ZT client switch lock. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#account_id DeviceSettingsPolicy#account_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.description"></a>

- *Type:* str

Description of Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#description DeviceSettingsPolicy#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#name DeviceSettingsPolicy#name}

---

##### `allowed_to_leave`<sup>Optional</sup> <a name="allowed_to_leave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.allowedToLeave"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow devices to leave the organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#allowed_to_leave DeviceSettingsPolicy#allowed_to_leave}

---

##### `allow_mode_switch`<sup>Optional</sup> <a name="allow_mode_switch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.allowModeSwitch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow mode switch for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#allow_mode_switch DeviceSettingsPolicy#allow_mode_switch}

---

##### `allow_updates`<sup>Optional</sup> <a name="allow_updates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.allowUpdates"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow updates under this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#allow_updates DeviceSettingsPolicy#allow_updates}

---

##### `auto_connect`<sup>Optional</sup> <a name="auto_connect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.autoConnect"></a>

- *Type:* typing.Union[int, float]

The amount of time in minutes to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#auto_connect DeviceSettingsPolicy#auto_connect}

---

##### `captive_portal`<sup>Optional</sup> <a name="captive_portal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.captivePortal"></a>

- *Type:* typing.Union[int, float]

The captive portal value for this policy. Defaults to `180`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#captive_portal DeviceSettingsPolicy#captive_portal}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.default"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the policy refers to the default account policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#default DeviceSettingsPolicy#default}

---

##### `disable_auto_fallback`<sup>Optional</sup> <a name="disable_auto_fallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.disableAutoFallback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable auto fallback for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#disable_auto_fallback DeviceSettingsPolicy#disable_auto_fallback}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#enabled DeviceSettingsPolicy#enabled}

---

##### `exclude_office_ips`<sup>Optional</sup> <a name="exclude_office_ips" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.excludeOfficeIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to add Microsoft IPs to split tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#exclude_office_ips DeviceSettingsPolicy#exclude_office_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#id DeviceSettingsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.match"></a>

- *Type:* str

Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#match DeviceSettingsPolicy#match}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.precedence"></a>

- *Type:* typing.Union[int, float]

The precedence of the policy. Lower values indicate higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#precedence DeviceSettingsPolicy#precedence}

---

##### `service_mode_v2_mode`<sup>Optional</sup> <a name="service_mode_v2_mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.serviceModeV2Mode"></a>

- *Type:* str

The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#service_mode_v2_mode DeviceSettingsPolicy#service_mode_v2_mode}

---

##### `service_mode_v2_port`<sup>Optional</sup> <a name="service_mode_v2_port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.serviceModeV2Port"></a>

- *Type:* typing.Union[int, float]

The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#service_mode_v2_port DeviceSettingsPolicy#service_mode_v2_port}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.supportUrl"></a>

- *Type:* str

The support URL that will be opened when sending feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#support_url DeviceSettingsPolicy#support_url}

---

##### `switch_locked`<sup>Optional</sup> <a name="switch_locked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.switchLocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enablement of the ZT client switch lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#switch_locked DeviceSettingsPolicy#switch_locked}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowedToLeave">reset_allowed_to_leave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowModeSwitch">reset_allow_mode_switch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowUpdates">reset_allow_updates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAutoConnect">reset_auto_connect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetCaptivePortal">reset_captive_portal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDisableAutoFallback">reset_disable_auto_fallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetExcludeOfficeIps">reset_exclude_office_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetPrecedence">reset_precedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Mode">reset_service_mode_v2_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Port">reset_service_mode_v2_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSupportUrl">reset_support_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSwitchLocked">reset_switch_locked</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_to_leave` <a name="reset_allowed_to_leave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowedToLeave"></a>

```python
def reset_allowed_to_leave() -> None
```

##### `reset_allow_mode_switch` <a name="reset_allow_mode_switch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowModeSwitch"></a>

```python
def reset_allow_mode_switch() -> None
```

##### `reset_allow_updates` <a name="reset_allow_updates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowUpdates"></a>

```python
def reset_allow_updates() -> None
```

##### `reset_auto_connect` <a name="reset_auto_connect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAutoConnect"></a>

```python
def reset_auto_connect() -> None
```

##### `reset_captive_portal` <a name="reset_captive_portal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetCaptivePortal"></a>

```python
def reset_captive_portal() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_disable_auto_fallback` <a name="reset_disable_auto_fallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDisableAutoFallback"></a>

```python
def reset_disable_auto_fallback() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_exclude_office_ips` <a name="reset_exclude_office_ips" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetExcludeOfficeIps"></a>

```python
def reset_exclude_office_ips() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_precedence` <a name="reset_precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetPrecedence"></a>

```python
def reset_precedence() -> None
```

##### `reset_service_mode_v2_mode` <a name="reset_service_mode_v2_mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Mode"></a>

```python
def reset_service_mode_v2_mode() -> None
```

##### `reset_service_mode_v2_port` <a name="reset_service_mode_v2_port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Port"></a>

```python
def reset_service_mode_v2_port() -> None
```

##### `reset_support_url` <a name="reset_support_url" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSupportUrl"></a>

```python
def reset_support_url() -> None
```

##### `reset_switch_locked` <a name="reset_switch_locked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSwitchLocked"></a>

```python
def reset_switch_locked() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DeviceSettingsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_settings_policy

deviceSettingsPolicy.DeviceSettingsPolicy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_settings_policy

deviceSettingsPolicy.DeviceSettingsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_settings_policy

deviceSettingsPolicy.DeviceSettingsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_settings_policy

deviceSettingsPolicy.DeviceSettingsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DeviceSettingsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeviceSettingsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeviceSettingsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DeviceSettingsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeaveInput">allowed_to_leave_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitchInput">allow_mode_switch_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdatesInput">allow_updates_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnectInput">auto_connect_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortalInput">captive_portal_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallbackInput">disable_auto_fallback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIpsInput">exclude_office_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.matchInput">match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedenceInput">precedence_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2ModeInput">service_mode_v2_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2PortInput">service_mode_v2_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrlInput">support_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLockedInput">switch_locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeave">allowed_to_leave</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitch">allow_mode_switch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdates">allow_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnect">auto_connect</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortal">captive_portal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallback">disable_auto_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIps">exclude_office_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.match">match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Mode">service_mode_v2_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Port">service_mode_v2_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLocked">switch_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `allowed_to_leave_input`<sup>Optional</sup> <a name="allowed_to_leave_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeaveInput"></a>

```python
allowed_to_leave_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mode_switch_input`<sup>Optional</sup> <a name="allow_mode_switch_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitchInput"></a>

```python
allow_mode_switch_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_updates_input`<sup>Optional</sup> <a name="allow_updates_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdatesInput"></a>

```python
allow_updates_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_connect_input`<sup>Optional</sup> <a name="auto_connect_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnectInput"></a>

```python
auto_connect_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captive_portal_input`<sup>Optional</sup> <a name="captive_portal_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortalInput"></a>

```python
captive_portal_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_auto_fallback_input`<sup>Optional</sup> <a name="disable_auto_fallback_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallbackInput"></a>

```python
disable_auto_fallback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_office_ips_input`<sup>Optional</sup> <a name="exclude_office_ips_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIpsInput"></a>

```python
exclude_office_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.matchInput"></a>

```python
match_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `precedence_input`<sup>Optional</sup> <a name="precedence_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedenceInput"></a>

```python
precedence_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_mode_v2_mode_input`<sup>Optional</sup> <a name="service_mode_v2_mode_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2ModeInput"></a>

```python
service_mode_v2_mode_input: str
```

- *Type:* str

---

##### `service_mode_v2_port_input`<sup>Optional</sup> <a name="service_mode_v2_port_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2PortInput"></a>

```python
service_mode_v2_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `support_url_input`<sup>Optional</sup> <a name="support_url_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrlInput"></a>

```python
support_url_input: str
```

- *Type:* str

---

##### `switch_locked_input`<sup>Optional</sup> <a name="switch_locked_input" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLockedInput"></a>

```python
switch_locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `allowed_to_leave`<sup>Required</sup> <a name="allowed_to_leave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeave"></a>

```python
allowed_to_leave: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mode_switch`<sup>Required</sup> <a name="allow_mode_switch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitch"></a>

```python
allow_mode_switch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_updates`<sup>Required</sup> <a name="allow_updates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdates"></a>

```python
allow_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_connect`<sup>Required</sup> <a name="auto_connect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnect"></a>

```python
auto_connect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captive_portal`<sup>Required</sup> <a name="captive_portal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortal"></a>

```python
captive_portal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_auto_fallback`<sup>Required</sup> <a name="disable_auto_fallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallback"></a>

```python
disable_auto_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_office_ips`<sup>Required</sup> <a name="exclude_office_ips" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIps"></a>

```python
exclude_office_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.match"></a>

```python
match: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_mode_v2_mode`<sup>Required</sup> <a name="service_mode_v2_mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Mode"></a>

```python
service_mode_v2_mode: str
```

- *Type:* str

---

##### `service_mode_v2_port`<sup>Required</sup> <a name="service_mode_v2_port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Port"></a>

```python
service_mode_v2_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

##### `switch_locked`<sup>Required</sup> <a name="switch_locked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLocked"></a>

```python
switch_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeviceSettingsPolicyConfig <a name="DeviceSettingsPolicyConfig" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_settings_policy

deviceSettingsPolicy.DeviceSettingsPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  description: str,
  name: str,
  allowed_to_leave: typing.Union[bool, IResolvable] = None,
  allow_mode_switch: typing.Union[bool, IResolvable] = None,
  allow_updates: typing.Union[bool, IResolvable] = None,
  auto_connect: typing.Union[int, float] = None,
  captive_portal: typing.Union[int, float] = None,
  default: typing.Union[bool, IResolvable] = None,
  disable_auto_fallback: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  exclude_office_ips: typing.Union[bool, IResolvable] = None,
  id: str = None,
  match: str = None,
  precedence: typing.Union[int, float] = None,
  service_mode_v2_mode: str = None,
  service_mode_v2_port: typing.Union[int, float] = None,
  support_url: str = None,
  switch_locked: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.description">description</a></code> | <code>str</code> | Description of Policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowedToLeave">allowed_to_leave</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow devices to leave the organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowModeSwitch">allow_mode_switch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow mode switch for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowUpdates">allow_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow updates under this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.autoConnect">auto_connect</a></code> | <code>typing.Union[int, float]</code> | The amount of time in minutes to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.captivePortal">captive_portal</a></code> | <code>typing.Union[int, float]</code> | The captive portal value for this policy. Defaults to `180`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the policy refers to the default account policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.disableAutoFallback">disable_auto_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable auto fallback for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the policy is enabled (cannot be set for default policies). Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.excludeOfficeIps">exclude_office_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to add Microsoft IPs to split tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#id DeviceSettingsPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.match">match</a></code> | <code>str</code> | Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | The precedence of the policy. Lower values indicate higher precedence. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Mode">service_mode_v2_mode</a></code> | <code>str</code> | The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Port">service_mode_v2_port</a></code> | <code>typing.Union[int, float]</code> | The port to use for the proxy service mode. Required when using `service_mode_v2_mode`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.supportUrl">support_url</a></code> | <code>str</code> | The support URL that will be opened when sending feedback. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.switchLocked">switch_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enablement of the ZT client switch lock. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#account_id DeviceSettingsPolicy#account_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#description DeviceSettingsPolicy#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#name DeviceSettingsPolicy#name}

---

##### `allowed_to_leave`<sup>Optional</sup> <a name="allowed_to_leave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowedToLeave"></a>

```python
allowed_to_leave: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow devices to leave the organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#allowed_to_leave DeviceSettingsPolicy#allowed_to_leave}

---

##### `allow_mode_switch`<sup>Optional</sup> <a name="allow_mode_switch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowModeSwitch"></a>

```python
allow_mode_switch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow mode switch for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#allow_mode_switch DeviceSettingsPolicy#allow_mode_switch}

---

##### `allow_updates`<sup>Optional</sup> <a name="allow_updates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowUpdates"></a>

```python
allow_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow updates under this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#allow_updates DeviceSettingsPolicy#allow_updates}

---

##### `auto_connect`<sup>Optional</sup> <a name="auto_connect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.autoConnect"></a>

```python
auto_connect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time in minutes to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#auto_connect DeviceSettingsPolicy#auto_connect}

---

##### `captive_portal`<sup>Optional</sup> <a name="captive_portal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.captivePortal"></a>

```python
captive_portal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The captive portal value for this policy. Defaults to `180`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#captive_portal DeviceSettingsPolicy#captive_portal}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the policy refers to the default account policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#default DeviceSettingsPolicy#default}

---

##### `disable_auto_fallback`<sup>Optional</sup> <a name="disable_auto_fallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.disableAutoFallback"></a>

```python
disable_auto_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable auto fallback for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#disable_auto_fallback DeviceSettingsPolicy#disable_auto_fallback}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#enabled DeviceSettingsPolicy#enabled}

---

##### `exclude_office_ips`<sup>Optional</sup> <a name="exclude_office_ips" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.excludeOfficeIps"></a>

```python
exclude_office_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to add Microsoft IPs to split tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#exclude_office_ips DeviceSettingsPolicy#exclude_office_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#id DeviceSettingsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.match"></a>

```python
match: str
```

- *Type:* str

Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#match DeviceSettingsPolicy#match}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The precedence of the policy. Lower values indicate higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#precedence DeviceSettingsPolicy#precedence}

---

##### `service_mode_v2_mode`<sup>Optional</sup> <a name="service_mode_v2_mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Mode"></a>

```python
service_mode_v2_mode: str
```

- *Type:* str

The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#service_mode_v2_mode DeviceSettingsPolicy#service_mode_v2_mode}

---

##### `service_mode_v2_port`<sup>Optional</sup> <a name="service_mode_v2_port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Port"></a>

```python
service_mode_v2_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#service_mode_v2_port DeviceSettingsPolicy#service_mode_v2_port}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

The support URL that will be opened when sending feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#support_url DeviceSettingsPolicy#support_url}

---

##### `switch_locked`<sup>Optional</sup> <a name="switch_locked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.switchLocked"></a>

```python
switch_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enablement of the ZT client switch lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#switch_locked DeviceSettingsPolicy#switch_locked}

---



