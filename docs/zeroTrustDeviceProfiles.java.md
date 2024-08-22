# `zeroTrustDeviceProfiles` Submodule <a name="`zeroTrustDeviceProfiles` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceProfiles <a name="ZeroTrustDeviceProfiles" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles cloudflare_zero_trust_device_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_profiles.ZeroTrustDeviceProfiles;

ZeroTrustDeviceProfiles.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .description(java.lang.String)
    .name(java.lang.String)
//  .allowedToLeave(java.lang.Boolean)
//  .allowedToLeave(IResolvable)
//  .allowModeSwitch(java.lang.Boolean)
//  .allowModeSwitch(IResolvable)
//  .allowUpdates(java.lang.Boolean)
//  .allowUpdates(IResolvable)
//  .autoConnect(java.lang.Number)
//  .captivePortal(java.lang.Number)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
//  .disableAutoFallback(java.lang.Boolean)
//  .disableAutoFallback(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .excludeOfficeIps(java.lang.Boolean)
//  .excludeOfficeIps(IResolvable)
//  .id(java.lang.String)
//  .match(java.lang.String)
//  .precedence(java.lang.Number)
//  .serviceModeV2Mode(java.lang.String)
//  .serviceModeV2Port(java.lang.Number)
//  .supportUrl(java.lang.String)
//  .switchLocked(java.lang.Boolean)
//  .switchLocked(IResolvable)
//  .tunnelProtocol(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of Policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow devices to leave the organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow mode switch for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow updates under this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | The captive portal value for this policy. Defaults to `180`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the policy refers to the default account policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable auto fallback for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the policy is enabled (cannot be set for default policies). Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to add Microsoft IPs to split tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#id ZeroTrustDeviceProfiles#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.match">match</a></code> | <code>java.lang.String</code> | Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.precedence">precedence</a></code> | <code>java.lang.Number</code> | The precedence of the policy. Lower values indicate higher precedence. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.serviceModeV2Mode">serviceModeV2Mode</a></code> | <code>java.lang.String</code> | The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.serviceModeV2Port">serviceModeV2Port</a></code> | <code>java.lang.Number</code> | The port to use for the proxy service mode. Required when using `service_mode_v2_mode`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The support URL that will be opened when sending feedback. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enablement of the ZT client switch lock. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | Determines which tunnel protocol to use. Available values: `""`, `wireguard`, `masque`. Defaults to `wireguard`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#account_id ZeroTrustDeviceProfiles#account_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#description ZeroTrustDeviceProfiles#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#name ZeroTrustDeviceProfiles#name}

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.allowedToLeave"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow devices to leave the organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#allowed_to_leave ZeroTrustDeviceProfiles#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.allowModeSwitch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow mode switch for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#allow_mode_switch ZeroTrustDeviceProfiles#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.allowUpdates"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow updates under this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#allow_updates ZeroTrustDeviceProfiles#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.autoConnect"></a>

- *Type:* java.lang.Number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#auto_connect ZeroTrustDeviceProfiles#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.captivePortal"></a>

- *Type:* java.lang.Number

The captive portal value for this policy. Defaults to `180`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#captive_portal ZeroTrustDeviceProfiles#captive_portal}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.default"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the policy refers to the default account policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#default ZeroTrustDeviceProfiles#default}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.disableAutoFallback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable auto fallback for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#disable_auto_fallback ZeroTrustDeviceProfiles#disable_auto_fallback}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#enabled ZeroTrustDeviceProfiles#enabled}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.excludeOfficeIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to add Microsoft IPs to split tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#exclude_office_ips ZeroTrustDeviceProfiles#exclude_office_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#id ZeroTrustDeviceProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.match"></a>

- *Type:* java.lang.String

Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#match ZeroTrustDeviceProfiles#match}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.precedence"></a>

- *Type:* java.lang.Number

The precedence of the policy. Lower values indicate higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#precedence ZeroTrustDeviceProfiles#precedence}

---

##### `serviceModeV2Mode`<sup>Optional</sup> <a name="serviceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.serviceModeV2Mode"></a>

- *Type:* java.lang.String

The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#service_mode_v2_mode ZeroTrustDeviceProfiles#service_mode_v2_mode}

---

##### `serviceModeV2Port`<sup>Optional</sup> <a name="serviceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.serviceModeV2Port"></a>

- *Type:* java.lang.Number

The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#service_mode_v2_port ZeroTrustDeviceProfiles#service_mode_v2_port}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.supportUrl"></a>

- *Type:* java.lang.String

The support URL that will be opened when sending feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#support_url ZeroTrustDeviceProfiles#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.switchLocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enablement of the ZT client switch lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#switch_locked ZeroTrustDeviceProfiles#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.tunnelProtocol"></a>

- *Type:* java.lang.String

Determines which tunnel protocol to use. Available values: `""`, `wireguard`, `masque`. Defaults to `wireguard`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#tunnel_protocol ZeroTrustDeviceProfiles#tunnel_protocol}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowedToLeave">resetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowModeSwitch">resetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowUpdates">resetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAutoConnect">resetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetCaptivePortal">resetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDisableAutoFallback">resetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetExcludeOfficeIps">resetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetPrecedence">resetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Mode">resetServiceModeV2Mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Port">resetServiceModeV2Port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSwitchLocked">resetSwitchLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetTunnelProtocol">resetTunnelProtocol</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedToLeave` <a name="resetAllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowedToLeave"></a>

```java
public void resetAllowedToLeave()
```

##### `resetAllowModeSwitch` <a name="resetAllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowModeSwitch"></a>

```java
public void resetAllowModeSwitch()
```

##### `resetAllowUpdates` <a name="resetAllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowUpdates"></a>

```java
public void resetAllowUpdates()
```

##### `resetAutoConnect` <a name="resetAutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAutoConnect"></a>

```java
public void resetAutoConnect()
```

##### `resetCaptivePortal` <a name="resetCaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetCaptivePortal"></a>

```java
public void resetCaptivePortal()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDisableAutoFallback` <a name="resetDisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDisableAutoFallback"></a>

```java
public void resetDisableAutoFallback()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExcludeOfficeIps` <a name="resetExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetExcludeOfficeIps"></a>

```java
public void resetExcludeOfficeIps()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetId"></a>

```java
public void resetId()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetMatch"></a>

```java
public void resetMatch()
```

##### `resetPrecedence` <a name="resetPrecedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetPrecedence"></a>

```java
public void resetPrecedence()
```

##### `resetServiceModeV2Mode` <a name="resetServiceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Mode"></a>

```java
public void resetServiceModeV2Mode()
```

##### `resetServiceModeV2Port` <a name="resetServiceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Port"></a>

```java
public void resetServiceModeV2Port()
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSupportUrl"></a>

```java
public void resetSupportUrl()
```

##### `resetSwitchLocked` <a name="resetSwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSwitchLocked"></a>

```java
public void resetSwitchLocked()
```

##### `resetTunnelProtocol` <a name="resetTunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetTunnelProtocol"></a>

```java
public void resetTunnelProtocol()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_profiles.ZeroTrustDeviceProfiles;

ZeroTrustDeviceProfiles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_profiles.ZeroTrustDeviceProfiles;

ZeroTrustDeviceProfiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_profiles.ZeroTrustDeviceProfiles;

ZeroTrustDeviceProfiles.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_profiles.ZeroTrustDeviceProfiles;

ZeroTrustDeviceProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDeviceProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustDeviceProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDeviceProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDeviceProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeaveInput">allowedToLeaveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitchInput">allowModeSwitchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdatesInput">allowUpdatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnectInput">autoConnectInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortalInput">captivePortalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallbackInput">disableAutoFallbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIpsInput">excludeOfficeIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.matchInput">matchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedenceInput">precedenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2ModeInput">serviceModeV2ModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2PortInput">serviceModeV2PortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrlInput">supportUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLockedInput">switchLockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocolInput">tunnelProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.match">match</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Mode">serviceModeV2Mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Port">serviceModeV2Port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowedToLeaveInput`<sup>Optional</sup> <a name="allowedToLeaveInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeaveInput"></a>

```java
public java.lang.Object getAllowedToLeaveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowModeSwitchInput`<sup>Optional</sup> <a name="allowModeSwitchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitchInput"></a>

```java
public java.lang.Object getAllowModeSwitchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUpdatesInput`<sup>Optional</sup> <a name="allowUpdatesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdatesInput"></a>

```java
public java.lang.Object getAllowUpdatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoConnectInput`<sup>Optional</sup> <a name="autoConnectInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnectInput"></a>

```java
public java.lang.Number getAutoConnectInput();
```

- *Type:* java.lang.Number

---

##### `captivePortalInput`<sup>Optional</sup> <a name="captivePortalInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortalInput"></a>

```java
public java.lang.Number getCaptivePortalInput();
```

- *Type:* java.lang.Number

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableAutoFallbackInput`<sup>Optional</sup> <a name="disableAutoFallbackInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallbackInput"></a>

```java
public java.lang.Object getDisableAutoFallbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeOfficeIpsInput`<sup>Optional</sup> <a name="excludeOfficeIpsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIpsInput"></a>

```java
public java.lang.Object getExcludeOfficeIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.matchInput"></a>

```java
public java.lang.String getMatchInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedenceInput"></a>

```java
public java.lang.Number getPrecedenceInput();
```

- *Type:* java.lang.Number

---

##### `serviceModeV2ModeInput`<sup>Optional</sup> <a name="serviceModeV2ModeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2ModeInput"></a>

```java
public java.lang.String getServiceModeV2ModeInput();
```

- *Type:* java.lang.String

---

##### `serviceModeV2PortInput`<sup>Optional</sup> <a name="serviceModeV2PortInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2PortInput"></a>

```java
public java.lang.Number getServiceModeV2PortInput();
```

- *Type:* java.lang.Number

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrlInput"></a>

```java
public java.lang.String getSupportUrlInput();
```

- *Type:* java.lang.String

---

##### `switchLockedInput`<sup>Optional</sup> <a name="switchLockedInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLockedInput"></a>

```java
public java.lang.Object getSwitchLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tunnelProtocolInput`<sup>Optional</sup> <a name="tunnelProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocolInput"></a>

```java
public java.lang.String getTunnelProtocolInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeave"></a>

```java
public java.lang.Object getAllowedToLeave();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitch"></a>

```java
public java.lang.Object getAllowModeSwitch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdates"></a>

```java
public java.lang.Object getAllowUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallback"></a>

```java
public java.lang.Object getDisableAutoFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIps"></a>

```java
public java.lang.Object getExcludeOfficeIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

---

##### `serviceModeV2Mode`<sup>Required</sup> <a name="serviceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Mode"></a>

```java
public java.lang.String getServiceModeV2Mode();
```

- *Type:* java.lang.String

---

##### `serviceModeV2Port`<sup>Required</sup> <a name="serviceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Port"></a>

```java
public java.lang.Number getServiceModeV2Port();
```

- *Type:* java.lang.Number

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLocked"></a>

```java
public java.lang.Object getSwitchLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceProfilesConfig <a name="ZeroTrustDeviceProfilesConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_profiles.ZeroTrustDeviceProfilesConfig;

ZeroTrustDeviceProfilesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .description(java.lang.String)
    .name(java.lang.String)
//  .allowedToLeave(java.lang.Boolean)
//  .allowedToLeave(IResolvable)
//  .allowModeSwitch(java.lang.Boolean)
//  .allowModeSwitch(IResolvable)
//  .allowUpdates(java.lang.Boolean)
//  .allowUpdates(IResolvable)
//  .autoConnect(java.lang.Number)
//  .captivePortal(java.lang.Number)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
//  .disableAutoFallback(java.lang.Boolean)
//  .disableAutoFallback(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .excludeOfficeIps(java.lang.Boolean)
//  .excludeOfficeIps(IResolvable)
//  .id(java.lang.String)
//  .match(java.lang.String)
//  .precedence(java.lang.Number)
//  .serviceModeV2Mode(java.lang.String)
//  .serviceModeV2Port(java.lang.Number)
//  .supportUrl(java.lang.String)
//  .switchLocked(java.lang.Boolean)
//  .switchLocked(IResolvable)
//  .tunnelProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of Policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow devices to leave the organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow mode switch for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow updates under this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | The captive portal value for this policy. Defaults to `180`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the policy refers to the default account policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable auto fallback for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the policy is enabled (cannot be set for default policies). Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to add Microsoft IPs to split tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#id ZeroTrustDeviceProfiles#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.match">match</a></code> | <code>java.lang.String</code> | Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | The precedence of the policy. Lower values indicate higher precedence. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Mode">serviceModeV2Mode</a></code> | <code>java.lang.String</code> | The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Port">serviceModeV2Port</a></code> | <code>java.lang.Number</code> | The port to use for the proxy service mode. Required when using `service_mode_v2_mode`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The support URL that will be opened when sending feedback. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enablement of the ZT client switch lock. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | Determines which tunnel protocol to use. Available values: `""`, `wireguard`, `masque`. Defaults to `wireguard`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#account_id ZeroTrustDeviceProfiles#account_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#description ZeroTrustDeviceProfiles#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#name ZeroTrustDeviceProfiles#name}

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowedToLeave"></a>

```java
public java.lang.Object getAllowedToLeave();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow devices to leave the organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#allowed_to_leave ZeroTrustDeviceProfiles#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowModeSwitch"></a>

```java
public java.lang.Object getAllowModeSwitch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow mode switch for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#allow_mode_switch ZeroTrustDeviceProfiles#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowUpdates"></a>

```java
public java.lang.Object getAllowUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow updates under this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#allow_updates ZeroTrustDeviceProfiles#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#auto_connect ZeroTrustDeviceProfiles#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

The captive portal value for this policy. Defaults to `180`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#captive_portal ZeroTrustDeviceProfiles#captive_portal}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the policy refers to the default account policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#default ZeroTrustDeviceProfiles#default}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.disableAutoFallback"></a>

```java
public java.lang.Object getDisableAutoFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable auto fallback for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#disable_auto_fallback ZeroTrustDeviceProfiles#disable_auto_fallback}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#enabled ZeroTrustDeviceProfiles#enabled}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.excludeOfficeIps"></a>

```java
public java.lang.Object getExcludeOfficeIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to add Microsoft IPs to split tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#exclude_office_ips ZeroTrustDeviceProfiles#exclude_office_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#id ZeroTrustDeviceProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#match ZeroTrustDeviceProfiles#match}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

The precedence of the policy. Lower values indicate higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#precedence ZeroTrustDeviceProfiles#precedence}

---

##### `serviceModeV2Mode`<sup>Optional</sup> <a name="serviceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Mode"></a>

```java
public java.lang.String getServiceModeV2Mode();
```

- *Type:* java.lang.String

The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#service_mode_v2_mode ZeroTrustDeviceProfiles#service_mode_v2_mode}

---

##### `serviceModeV2Port`<sup>Optional</sup> <a name="serviceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Port"></a>

```java
public java.lang.Number getServiceModeV2Port();
```

- *Type:* java.lang.Number

The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#service_mode_v2_port ZeroTrustDeviceProfiles#service_mode_v2_port}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

The support URL that will be opened when sending feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#support_url ZeroTrustDeviceProfiles#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.switchLocked"></a>

```java
public java.lang.Object getSwitchLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enablement of the ZT client switch lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#switch_locked ZeroTrustDeviceProfiles#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

Determines which tunnel protocol to use. Available values: `""`, `wireguard`, `masque`. Defaults to `wireguard`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#tunnel_protocol ZeroTrustDeviceProfiles#tunnel_protocol}

---



