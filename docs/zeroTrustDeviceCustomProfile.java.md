# `zeroTrustDeviceCustomProfile` Submodule <a name="`zeroTrustDeviceCustomProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceCustomProfile <a name="ZeroTrustDeviceCustomProfile" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfile;

ZeroTrustDeviceCustomProfile.Builder.create(Construct scope, java.lang.String id)
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
    .match(java.lang.String)
    .name(java.lang.String)
    .precedence(java.lang.Number)
//  .allowedToLeave(java.lang.Boolean)
//  .allowedToLeave(IResolvable)
//  .allowModeSwitch(java.lang.Boolean)
//  .allowModeSwitch(IResolvable)
//  .allowUpdates(java.lang.Boolean)
//  .allowUpdates(IResolvable)
//  .autoConnect(java.lang.Number)
//  .captivePortal(java.lang.Number)
//  .description(java.lang.String)
//  .disableAutoFallback(java.lang.Boolean)
//  .disableAutoFallback(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .exclude(IResolvable)
//  .exclude(java.util.List<ZeroTrustDeviceCustomProfileExclude>)
//  .excludeOfficeIps(java.lang.Boolean)
//  .excludeOfficeIps(IResolvable)
//  .include(IResolvable)
//  .include(java.util.List<ZeroTrustDeviceCustomProfileInclude>)
//  .lanAllowMinutes(java.lang.Number)
//  .lanAllowSubnetSize(java.lang.Number)
//  .registerInterfaceIpWithDns(java.lang.Boolean)
//  .registerInterfaceIpWithDns(IResolvable)
//  .serviceModeV2(ZeroTrustDeviceCustomProfileServiceModeV2)
//  .supportUrl(java.lang.String)
//  .switchLocked(java.lang.Boolean)
//  .switchLocked(IResolvable)
//  .tunnelProtocol(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#account_id ZeroTrustDeviceCustomProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.match">match</a></code> | <code>java.lang.String</code> | The wirefilter expression to match devices. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the device settings profile. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.precedence">precedence</a></code> | <code>java.lang.Number</code> | The precedence of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow devices to leave the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the user to switch WARP between modes. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to receive update notifications when a new version of the client is available. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | Turn on the captive portal after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the policy will be applied to matching devices. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.exclude">exclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>></code> | List of routes excluded in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.include">include</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>></code> | List of routes included in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.lanAllowMinutes">lanAllowMinutes</a></code> | <code>java.lang.Number</code> | The amount of time in minutes a user is allowed access to their LAN. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>java.lang.Number</code> | The size of the subnet for the local access network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#service_mode_v2 ZeroTrustDeviceCustomProfile#service_mode_v2}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The URL to launch when the Send Feedback button is clicked. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | Determines which tunnel protocol to use. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#account_id ZeroTrustDeviceCustomProfile#account_id}.

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.match"></a>

- *Type:* java.lang.String

The wirefilter expression to match devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#match ZeroTrustDeviceCustomProfile#match}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the device settings profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#name ZeroTrustDeviceCustomProfile#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.precedence"></a>

- *Type:* java.lang.Number

The precedence of the policy.

Lower values indicate higher precedence. Policies will be evaluated in ascending order of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#precedence ZeroTrustDeviceCustomProfile#precedence}

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.allowedToLeave"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow devices to leave the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#allowed_to_leave ZeroTrustDeviceCustomProfile#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.allowModeSwitch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the user to switch WARP between modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#allow_mode_switch ZeroTrustDeviceCustomProfile#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.allowUpdates"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to receive update notifications when a new version of the client is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#allow_updates ZeroTrustDeviceCustomProfile#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.autoConnect"></a>

- *Type:* java.lang.Number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#auto_connect ZeroTrustDeviceCustomProfile#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.captivePortal"></a>

- *Type:* java.lang.Number

Turn on the captive portal after the specified amount of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#captive_portal ZeroTrustDeviceCustomProfile#captive_portal}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.disableAutoFallback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#disable_auto_fallback ZeroTrustDeviceCustomProfile#disable_auto_fallback}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the policy will be applied to matching devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#enabled ZeroTrustDeviceCustomProfile#enabled}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.exclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>>

List of routes excluded in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#exclude ZeroTrustDeviceCustomProfile#exclude}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.excludeOfficeIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to add Microsoft IPs to Split Tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#exclude_office_ips ZeroTrustDeviceCustomProfile#exclude_office_ips}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.include"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>>

List of routes included in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#include ZeroTrustDeviceCustomProfile#include}

---

##### `lanAllowMinutes`<sup>Optional</sup> <a name="lanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.lanAllowMinutes"></a>

- *Type:* java.lang.Number

The amount of time in minutes a user is allowed access to their LAN.

A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#lan_allow_minutes ZeroTrustDeviceCustomProfile#lan_allow_minutes}

---

##### `lanAllowSubnetSize`<sup>Optional</sup> <a name="lanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.lanAllowSubnetSize"></a>

- *Type:* java.lang.Number

The size of the subnet for the local access network.

Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#lan_allow_subnet_size ZeroTrustDeviceCustomProfile#lan_allow_subnet_size}

---

##### `registerInterfaceIpWithDns`<sup>Optional</sup> <a name="registerInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.registerInterfaceIpWithDns"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#register_interface_ip_with_dns ZeroTrustDeviceCustomProfile#register_interface_ip_with_dns}

---

##### `serviceModeV2`<sup>Optional</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.serviceModeV2"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#service_mode_v2 ZeroTrustDeviceCustomProfile#service_mode_v2}.

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.supportUrl"></a>

- *Type:* java.lang.String

The URL to launch when the Send Feedback button is clicked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#support_url ZeroTrustDeviceCustomProfile#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.switchLocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the user to turn off the WARP switch and disconnect the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#switch_locked ZeroTrustDeviceCustomProfile#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.tunnelProtocol"></a>

- *Type:* java.lang.String

Determines which tunnel protocol to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#tunnel_protocol ZeroTrustDeviceCustomProfile#tunnel_protocol}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putServiceModeV2">putServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowedToLeave">resetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowModeSwitch">resetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowUpdates">resetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAutoConnect">resetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetCaptivePortal">resetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetDisableAutoFallback">resetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetExcludeOfficeIps">resetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetInclude">resetInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetLanAllowMinutes">resetLanAllowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetLanAllowSubnetSize">resetLanAllowSubnetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetRegisterInterfaceIpWithDns">resetRegisterInterfaceIpWithDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetServiceModeV2">resetServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSwitchLocked">resetSwitchLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetTunnelProtocol">resetTunnelProtocol</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExclude` <a name="putExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putExclude"></a>

```java
public void putExclude(IResolvable OR java.util.List<ZeroTrustDeviceCustomProfileExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putExclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>>

---

##### `putInclude` <a name="putInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putInclude"></a>

```java
public void putInclude(IResolvable OR java.util.List<ZeroTrustDeviceCustomProfileInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>>

---

##### `putServiceModeV2` <a name="putServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putServiceModeV2"></a>

```java
public void putServiceModeV2(ZeroTrustDeviceCustomProfileServiceModeV2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putServiceModeV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a>

---

##### `resetAllowedToLeave` <a name="resetAllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowedToLeave"></a>

```java
public void resetAllowedToLeave()
```

##### `resetAllowModeSwitch` <a name="resetAllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowModeSwitch"></a>

```java
public void resetAllowModeSwitch()
```

##### `resetAllowUpdates` <a name="resetAllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowUpdates"></a>

```java
public void resetAllowUpdates()
```

##### `resetAutoConnect` <a name="resetAutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAutoConnect"></a>

```java
public void resetAutoConnect()
```

##### `resetCaptivePortal` <a name="resetCaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetCaptivePortal"></a>

```java
public void resetCaptivePortal()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableAutoFallback` <a name="resetDisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetDisableAutoFallback"></a>

```java
public void resetDisableAutoFallback()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetExcludeOfficeIps` <a name="resetExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetExcludeOfficeIps"></a>

```java
public void resetExcludeOfficeIps()
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetInclude"></a>

```java
public void resetInclude()
```

##### `resetLanAllowMinutes` <a name="resetLanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetLanAllowMinutes"></a>

```java
public void resetLanAllowMinutes()
```

##### `resetLanAllowSubnetSize` <a name="resetLanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetLanAllowSubnetSize"></a>

```java
public void resetLanAllowSubnetSize()
```

##### `resetRegisterInterfaceIpWithDns` <a name="resetRegisterInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetRegisterInterfaceIpWithDns"></a>

```java
public void resetRegisterInterfaceIpWithDns()
```

##### `resetServiceModeV2` <a name="resetServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetServiceModeV2"></a>

```java
public void resetServiceModeV2()
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSupportUrl"></a>

```java
public void resetSupportUrl()
```

##### `resetSwitchLocked` <a name="resetSwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSwitchLocked"></a>

```java
public void resetSwitchLocked()
```

##### `resetTunnelProtocol` <a name="resetTunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetTunnelProtocol"></a>

```java
public void resetTunnelProtocol()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfile;

ZeroTrustDeviceCustomProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfile;

ZeroTrustDeviceCustomProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfile;

ZeroTrustDeviceCustomProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfile;

ZeroTrustDeviceCustomProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDeviceCustomProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDeviceCustomProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDeviceCustomProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceCustomProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList">ZeroTrustDeviceCustomProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.fallbackDomains">fallbackDomains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList">ZeroTrustDeviceCustomProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.gatewayUniqueId">gatewayUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList">ZeroTrustDeviceCustomProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference">ZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.targetTests">targetTests</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList">ZeroTrustDeviceCustomProfileTargetTestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowedToLeaveInput">allowedToLeaveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowModeSwitchInput">allowModeSwitchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowUpdatesInput">allowUpdatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.autoConnectInput">autoConnectInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.captivePortalInput">captivePortalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.disableAutoFallbackInput">disableAutoFallbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeInput">excludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeOfficeIpsInput">excludeOfficeIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.includeInput">includeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowMinutesInput">lanAllowMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowSubnetSizeInput">lanAllowSubnetSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.matchInput">matchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.precedenceInput">precedenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDnsInput">registerInterfaceIpWithDnsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.serviceModeV2Input">serviceModeV2Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.supportUrlInput">supportUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.switchLockedInput">switchLockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tunnelProtocolInput">tunnelProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.match">match</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.exclude"></a>

```java
public ZeroTrustDeviceCustomProfileExcludeList getExclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList">ZeroTrustDeviceCustomProfileExcludeList</a>

---

##### `fallbackDomains`<sup>Required</sup> <a name="fallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.fallbackDomains"></a>

```java
public ZeroTrustDeviceCustomProfileFallbackDomainsList getFallbackDomains();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList">ZeroTrustDeviceCustomProfileFallbackDomainsList</a>

---

##### `gatewayUniqueId`<sup>Required</sup> <a name="gatewayUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.gatewayUniqueId"></a>

```java
public java.lang.String getGatewayUniqueId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.include"></a>

```java
public ZeroTrustDeviceCustomProfileIncludeList getInclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList">ZeroTrustDeviceCustomProfileIncludeList</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `serviceModeV2`<sup>Required</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.serviceModeV2"></a>

```java
public ZeroTrustDeviceCustomProfileServiceModeV2OutputReference getServiceModeV2();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference">ZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a>

---

##### `targetTests`<sup>Required</sup> <a name="targetTests" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.targetTests"></a>

```java
public ZeroTrustDeviceCustomProfileTargetTestsList getTargetTests();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList">ZeroTrustDeviceCustomProfileTargetTestsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowedToLeaveInput`<sup>Optional</sup> <a name="allowedToLeaveInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowedToLeaveInput"></a>

```java
public java.lang.Object getAllowedToLeaveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowModeSwitchInput`<sup>Optional</sup> <a name="allowModeSwitchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowModeSwitchInput"></a>

```java
public java.lang.Object getAllowModeSwitchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUpdatesInput`<sup>Optional</sup> <a name="allowUpdatesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowUpdatesInput"></a>

```java
public java.lang.Object getAllowUpdatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoConnectInput`<sup>Optional</sup> <a name="autoConnectInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.autoConnectInput"></a>

```java
public java.lang.Number getAutoConnectInput();
```

- *Type:* java.lang.Number

---

##### `captivePortalInput`<sup>Optional</sup> <a name="captivePortalInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.captivePortalInput"></a>

```java
public java.lang.Number getCaptivePortalInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableAutoFallbackInput`<sup>Optional</sup> <a name="disableAutoFallbackInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.disableAutoFallbackInput"></a>

```java
public java.lang.Object getDisableAutoFallbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeInput"></a>

```java
public java.lang.Object getExcludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>>

---

##### `excludeOfficeIpsInput`<sup>Optional</sup> <a name="excludeOfficeIpsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeOfficeIpsInput"></a>

```java
public java.lang.Object getExcludeOfficeIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.includeInput"></a>

```java
public java.lang.Object getIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>>

---

##### `lanAllowMinutesInput`<sup>Optional</sup> <a name="lanAllowMinutesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowMinutesInput"></a>

```java
public java.lang.Number getLanAllowMinutesInput();
```

- *Type:* java.lang.Number

---

##### `lanAllowSubnetSizeInput`<sup>Optional</sup> <a name="lanAllowSubnetSizeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowSubnetSizeInput"></a>

```java
public java.lang.Number getLanAllowSubnetSizeInput();
```

- *Type:* java.lang.Number

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.matchInput"></a>

```java
public java.lang.String getMatchInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.precedenceInput"></a>

```java
public java.lang.Number getPrecedenceInput();
```

- *Type:* java.lang.Number

---

##### `registerInterfaceIpWithDnsInput`<sup>Optional</sup> <a name="registerInterfaceIpWithDnsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDnsInput"></a>

```java
public java.lang.Object getRegisterInterfaceIpWithDnsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceModeV2Input`<sup>Optional</sup> <a name="serviceModeV2Input" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.serviceModeV2Input"></a>

```java
public java.lang.Object getServiceModeV2Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a>

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.supportUrlInput"></a>

```java
public java.lang.String getSupportUrlInput();
```

- *Type:* java.lang.String

---

##### `switchLockedInput`<sup>Optional</sup> <a name="switchLockedInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.switchLockedInput"></a>

```java
public java.lang.Object getSwitchLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tunnelProtocolInput`<sup>Optional</sup> <a name="tunnelProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tunnelProtocolInput"></a>

```java
public java.lang.String getTunnelProtocolInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowedToLeave"></a>

```java
public java.lang.Object getAllowedToLeave();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowModeSwitch"></a>

```java
public java.lang.Object getAllowModeSwitch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowUpdates"></a>

```java
public java.lang.Object getAllowUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.disableAutoFallback"></a>

```java
public java.lang.Object getDisableAutoFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeOfficeIps"></a>

```java
public java.lang.Object getExcludeOfficeIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lanAllowMinutes`<sup>Required</sup> <a name="lanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowMinutes"></a>

```java
public java.lang.Number getLanAllowMinutes();
```

- *Type:* java.lang.Number

---

##### `lanAllowSubnetSize`<sup>Required</sup> <a name="lanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize"></a>

```java
public java.lang.Number getLanAllowSubnetSize();
```

- *Type:* java.lang.Number

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

---

##### `registerInterfaceIpWithDns`<sup>Required</sup> <a name="registerInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDns"></a>

```java
public java.lang.Object getRegisterInterfaceIpWithDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.switchLocked"></a>

```java
public java.lang.Object getSwitchLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceCustomProfileConfig <a name="ZeroTrustDeviceCustomProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileConfig;

ZeroTrustDeviceCustomProfileConfig.builder()
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
    .match(java.lang.String)
    .name(java.lang.String)
    .precedence(java.lang.Number)
//  .allowedToLeave(java.lang.Boolean)
//  .allowedToLeave(IResolvable)
//  .allowModeSwitch(java.lang.Boolean)
//  .allowModeSwitch(IResolvable)
//  .allowUpdates(java.lang.Boolean)
//  .allowUpdates(IResolvable)
//  .autoConnect(java.lang.Number)
//  .captivePortal(java.lang.Number)
//  .description(java.lang.String)
//  .disableAutoFallback(java.lang.Boolean)
//  .disableAutoFallback(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .exclude(IResolvable)
//  .exclude(java.util.List<ZeroTrustDeviceCustomProfileExclude>)
//  .excludeOfficeIps(java.lang.Boolean)
//  .excludeOfficeIps(IResolvable)
//  .include(IResolvable)
//  .include(java.util.List<ZeroTrustDeviceCustomProfileInclude>)
//  .lanAllowMinutes(java.lang.Number)
//  .lanAllowSubnetSize(java.lang.Number)
//  .registerInterfaceIpWithDns(java.lang.Boolean)
//  .registerInterfaceIpWithDns(IResolvable)
//  .serviceModeV2(ZeroTrustDeviceCustomProfileServiceModeV2)
//  .supportUrl(java.lang.String)
//  .switchLocked(java.lang.Boolean)
//  .switchLocked(IResolvable)
//  .tunnelProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#account_id ZeroTrustDeviceCustomProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.match">match</a></code> | <code>java.lang.String</code> | The wirefilter expression to match devices. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the device settings profile. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | The precedence of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow devices to leave the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the user to switch WARP between modes. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to receive update notifications when a new version of the client is available. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | Turn on the captive portal after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the policy will be applied to matching devices. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.exclude">exclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>></code> | List of routes excluded in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.include">include</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>></code> | List of routes included in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>java.lang.Number</code> | The amount of time in minutes a user is allowed access to their LAN. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>java.lang.Number</code> | The size of the subnet for the local access network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#service_mode_v2 ZeroTrustDeviceCustomProfile#service_mode_v2}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The URL to launch when the Send Feedback button is clicked. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | Determines which tunnel protocol to use. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#account_id ZeroTrustDeviceCustomProfile#account_id}.

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

The wirefilter expression to match devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#match ZeroTrustDeviceCustomProfile#match}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the device settings profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#name ZeroTrustDeviceCustomProfile#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

The precedence of the policy.

Lower values indicate higher precedence. Policies will be evaluated in ascending order of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#precedence ZeroTrustDeviceCustomProfile#precedence}

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowedToLeave"></a>

```java
public java.lang.Object getAllowedToLeave();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow devices to leave the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#allowed_to_leave ZeroTrustDeviceCustomProfile#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowModeSwitch"></a>

```java
public java.lang.Object getAllowModeSwitch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the user to switch WARP between modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#allow_mode_switch ZeroTrustDeviceCustomProfile#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowUpdates"></a>

```java
public java.lang.Object getAllowUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to receive update notifications when a new version of the client is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#allow_updates ZeroTrustDeviceCustomProfile#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#auto_connect ZeroTrustDeviceCustomProfile#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

Turn on the captive portal after the specified amount of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#captive_portal ZeroTrustDeviceCustomProfile#captive_portal}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.disableAutoFallback"></a>

```java
public java.lang.Object getDisableAutoFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#disable_auto_fallback ZeroTrustDeviceCustomProfile#disable_auto_fallback}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the policy will be applied to matching devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#enabled ZeroTrustDeviceCustomProfile#enabled}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.exclude"></a>

```java
public java.lang.Object getExclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>>

List of routes excluded in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#exclude ZeroTrustDeviceCustomProfile#exclude}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.excludeOfficeIps"></a>

```java
public java.lang.Object getExcludeOfficeIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to add Microsoft IPs to Split Tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#exclude_office_ips ZeroTrustDeviceCustomProfile#exclude_office_ips}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.include"></a>

```java
public java.lang.Object getInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>>

List of routes included in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#include ZeroTrustDeviceCustomProfile#include}

---

##### `lanAllowMinutes`<sup>Optional</sup> <a name="lanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lanAllowMinutes"></a>

```java
public java.lang.Number getLanAllowMinutes();
```

- *Type:* java.lang.Number

The amount of time in minutes a user is allowed access to their LAN.

A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#lan_allow_minutes ZeroTrustDeviceCustomProfile#lan_allow_minutes}

---

##### `lanAllowSubnetSize`<sup>Optional</sup> <a name="lanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lanAllowSubnetSize"></a>

```java
public java.lang.Number getLanAllowSubnetSize();
```

- *Type:* java.lang.Number

The size of the subnet for the local access network.

Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#lan_allow_subnet_size ZeroTrustDeviceCustomProfile#lan_allow_subnet_size}

---

##### `registerInterfaceIpWithDns`<sup>Optional</sup> <a name="registerInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.registerInterfaceIpWithDns"></a>

```java
public java.lang.Object getRegisterInterfaceIpWithDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#register_interface_ip_with_dns ZeroTrustDeviceCustomProfile#register_interface_ip_with_dns}

---

##### `serviceModeV2`<sup>Optional</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.serviceModeV2"></a>

```java
public ZeroTrustDeviceCustomProfileServiceModeV2 getServiceModeV2();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#service_mode_v2 ZeroTrustDeviceCustomProfile#service_mode_v2}.

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

The URL to launch when the Send Feedback button is clicked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#support_url ZeroTrustDeviceCustomProfile#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.switchLocked"></a>

```java
public java.lang.Object getSwitchLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the user to turn off the WARP switch and disconnect the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#switch_locked ZeroTrustDeviceCustomProfile#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

Determines which tunnel protocol to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#tunnel_protocol ZeroTrustDeviceCustomProfile#tunnel_protocol}

---

### ZeroTrustDeviceCustomProfileExclude <a name="ZeroTrustDeviceCustomProfileExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileExclude;

ZeroTrustDeviceCustomProfileExclude.builder()
    .address(java.lang.String)
    .description(java.lang.String)
//  .host(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.address">address</a></code> | <code>java.lang.String</code> | The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.description">description</a></code> | <code>java.lang.String</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.host">host</a></code> | <code>java.lang.String</code> | The domain name to exclude from the tunnel. If `host` is present, `address` must not be present. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#address ZeroTrustDeviceCustomProfile#address}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#host ZeroTrustDeviceCustomProfile#host}

---

### ZeroTrustDeviceCustomProfileFallbackDomains <a name="ZeroTrustDeviceCustomProfileFallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileFallbackDomains;

ZeroTrustDeviceCustomProfileFallbackDomains.builder()
    .build();
```


### ZeroTrustDeviceCustomProfileInclude <a name="ZeroTrustDeviceCustomProfileInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileInclude;

ZeroTrustDeviceCustomProfileInclude.builder()
    .address(java.lang.String)
    .description(java.lang.String)
//  .host(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.address">address</a></code> | <code>java.lang.String</code> | The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.description">description</a></code> | <code>java.lang.String</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.host">host</a></code> | <code>java.lang.String</code> | The domain name to exclude from the tunnel. If `host` is present, `address` must not be present. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#address ZeroTrustDeviceCustomProfile#address}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#host ZeroTrustDeviceCustomProfile#host}

---

### ZeroTrustDeviceCustomProfileServiceModeV2 <a name="ZeroTrustDeviceCustomProfileServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileServiceModeV2;

ZeroTrustDeviceCustomProfileServiceModeV2.builder()
//  .mode(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode to run the WARP client under. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.property.port">port</a></code> | <code>java.lang.Number</code> | The port number when used with proxy mode. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode to run the WARP client under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#mode ZeroTrustDeviceCustomProfile#mode}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number when used with proxy mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_custom_profile#port ZeroTrustDeviceCustomProfile#port}

---

### ZeroTrustDeviceCustomProfileTargetTests <a name="ZeroTrustDeviceCustomProfileTargetTests" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileTargetTests;

ZeroTrustDeviceCustomProfileTargetTests.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceCustomProfileExcludeList <a name="ZeroTrustDeviceCustomProfileExcludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileExcludeList;

new ZeroTrustDeviceCustomProfileExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.get"></a>

```java
public ZeroTrustDeviceCustomProfileExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>>

---


### ZeroTrustDeviceCustomProfileExcludeOutputReference <a name="ZeroTrustDeviceCustomProfileExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileExcludeOutputReference;

new ZeroTrustDeviceCustomProfileExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resetHost"></a>

```java
public void resetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude">ZeroTrustDeviceCustomProfileExclude</a>

---


### ZeroTrustDeviceCustomProfileFallbackDomainsList <a name="ZeroTrustDeviceCustomProfileFallbackDomainsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileFallbackDomainsList;

new ZeroTrustDeviceCustomProfileFallbackDomainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.get"></a>

```java
public ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference <a name="ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference;

new ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomains">ZeroTrustDeviceCustomProfileFallbackDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue"></a>

```java
public ZeroTrustDeviceCustomProfileFallbackDomains getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomains">ZeroTrustDeviceCustomProfileFallbackDomains</a>

---


### ZeroTrustDeviceCustomProfileIncludeList <a name="ZeroTrustDeviceCustomProfileIncludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileIncludeList;

new ZeroTrustDeviceCustomProfileIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.get"></a>

```java
public ZeroTrustDeviceCustomProfileIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>>

---


### ZeroTrustDeviceCustomProfileIncludeOutputReference <a name="ZeroTrustDeviceCustomProfileIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileIncludeOutputReference;

new ZeroTrustDeviceCustomProfileIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resetHost"></a>

```java
public void resetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude">ZeroTrustDeviceCustomProfileInclude</a>

---


### ZeroTrustDeviceCustomProfileServiceModeV2OutputReference <a name="ZeroTrustDeviceCustomProfileServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference;

new ZeroTrustDeviceCustomProfileServiceModeV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a>

---


### ZeroTrustDeviceCustomProfileTargetTestsList <a name="ZeroTrustDeviceCustomProfileTargetTestsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileTargetTestsList;

new ZeroTrustDeviceCustomProfileTargetTestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.get"></a>

```java
public ZeroTrustDeviceCustomProfileTargetTestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ZeroTrustDeviceCustomProfileTargetTestsOutputReference <a name="ZeroTrustDeviceCustomProfileTargetTestsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_custom_profile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference;

new ZeroTrustDeviceCustomProfileTargetTestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTests">ZeroTrustDeviceCustomProfileTargetTests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue"></a>

```java
public ZeroTrustDeviceCustomProfileTargetTests getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTests">ZeroTrustDeviceCustomProfileTargetTests</a>

---



