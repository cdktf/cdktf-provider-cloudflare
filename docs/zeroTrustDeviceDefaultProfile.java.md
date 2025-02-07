# `zeroTrustDeviceDefaultProfile` Submodule <a name="`zeroTrustDeviceDefaultProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceDefaultProfile <a name="ZeroTrustDeviceDefaultProfile" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.Builder.create(Construct scope, java.lang.String id)
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
//  .allowedToLeave(java.lang.Boolean)
//  .allowedToLeave(IResolvable)
//  .allowModeSwitch(java.lang.Boolean)
//  .allowModeSwitch(IResolvable)
//  .allowUpdates(java.lang.Boolean)
//  .allowUpdates(IResolvable)
//  .autoConnect(java.lang.Number)
//  .captivePortal(java.lang.Number)
//  .disableAutoFallback(java.lang.Boolean)
//  .disableAutoFallback(IResolvable)
//  .excludeOfficeIps(java.lang.Boolean)
//  .excludeOfficeIps(IResolvable)
//  .serviceModeV2(ZeroTrustDeviceDefaultProfileServiceModeV2)
//  .supportUrl(java.lang.String)
//  .switchLocked(java.lang.Boolean)
//  .switchLocked(IResolvable)
//  .tunnelProtocol(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow devices to leave the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the user to switch WARP between modes. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to receive update notifications when a new version of the client is available. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | Turn on the captive portal after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The URL to launch when the Send Feedback button is clicked. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | Determines which tunnel protocol to use. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}.

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowedToLeave"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow devices to leave the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#allowed_to_leave ZeroTrustDeviceDefaultProfile#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowModeSwitch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the user to switch WARP between modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#allow_mode_switch ZeroTrustDeviceDefaultProfile#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowUpdates"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to receive update notifications when a new version of the client is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#allow_updates ZeroTrustDeviceDefaultProfile#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.autoConnect"></a>

- *Type:* java.lang.Number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#auto_connect ZeroTrustDeviceDefaultProfile#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.captivePortal"></a>

- *Type:* java.lang.Number

Turn on the captive portal after the specified amount of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#captive_portal ZeroTrustDeviceDefaultProfile#captive_portal}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.disableAutoFallback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#disable_auto_fallback ZeroTrustDeviceDefaultProfile#disable_auto_fallback}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.excludeOfficeIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to add Microsoft IPs to Split Tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#exclude_office_ips ZeroTrustDeviceDefaultProfile#exclude_office_ips}

---

##### `serviceModeV2`<sup>Optional</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.serviceModeV2"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}.

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.supportUrl"></a>

- *Type:* java.lang.String

The URL to launch when the Send Feedback button is clicked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#support_url ZeroTrustDeviceDefaultProfile#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.switchLocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the user to turn off the WARP switch and disconnect the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#switch_locked ZeroTrustDeviceDefaultProfile#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.tunnelProtocol"></a>

- *Type:* java.lang.String

Determines which tunnel protocol to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#tunnel_protocol ZeroTrustDeviceDefaultProfile#tunnel_protocol}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2">putServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowedToLeave">resetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowModeSwitch">resetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowUpdates">resetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAutoConnect">resetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetCaptivePortal">resetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDisableAutoFallback">resetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExcludeOfficeIps">resetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetServiceModeV2">resetServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSwitchLocked">resetSwitchLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetTunnelProtocol">resetTunnelProtocol</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServiceModeV2` <a name="putServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2"></a>

```java
public void putServiceModeV2(ZeroTrustDeviceDefaultProfileServiceModeV2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---

##### `resetAllowedToLeave` <a name="resetAllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowedToLeave"></a>

```java
public void resetAllowedToLeave()
```

##### `resetAllowModeSwitch` <a name="resetAllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowModeSwitch"></a>

```java
public void resetAllowModeSwitch()
```

##### `resetAllowUpdates` <a name="resetAllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowUpdates"></a>

```java
public void resetAllowUpdates()
```

##### `resetAutoConnect` <a name="resetAutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAutoConnect"></a>

```java
public void resetAutoConnect()
```

##### `resetCaptivePortal` <a name="resetCaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetCaptivePortal"></a>

```java
public void resetCaptivePortal()
```

##### `resetDisableAutoFallback` <a name="resetDisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDisableAutoFallback"></a>

```java
public void resetDisableAutoFallback()
```

##### `resetExcludeOfficeIps` <a name="resetExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExcludeOfficeIps"></a>

```java
public void resetExcludeOfficeIps()
```

##### `resetServiceModeV2` <a name="resetServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetServiceModeV2"></a>

```java
public void resetServiceModeV2()
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSupportUrl"></a>

```java
public void resetSupportUrl()
```

##### `resetSwitchLocked` <a name="resetSwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSwitchLocked"></a>

```java
public void resetSwitchLocked()
```

##### `resetTunnelProtocol` <a name="resetTunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetTunnelProtocol"></a>

```java
public void resetTunnelProtocol()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDeviceDefaultProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDeviceDefaultProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDeviceDefaultProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceDefaultProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList">ZeroTrustDeviceDefaultProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fallbackDomains">fallbackDomains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList">ZeroTrustDeviceDefaultProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.gatewayUniqueId">gatewayUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList">ZeroTrustDeviceDefaultProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeaveInput">allowedToLeaveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitchInput">allowModeSwitchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdatesInput">allowUpdatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnectInput">autoConnectInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortalInput">captivePortalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallbackInput">disableAutoFallbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIpsInput">excludeOfficeIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2Input">serviceModeV2Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrlInput">supportUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLockedInput">switchLockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocolInput">tunnelProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.exclude"></a>

```java
public ZeroTrustDeviceDefaultProfileExcludeList getExclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList">ZeroTrustDeviceDefaultProfileExcludeList</a>

---

##### `fallbackDomains`<sup>Required</sup> <a name="fallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fallbackDomains"></a>

```java
public ZeroTrustDeviceDefaultProfileFallbackDomainsList getFallbackDomains();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList">ZeroTrustDeviceDefaultProfileFallbackDomainsList</a>

---

##### `gatewayUniqueId`<sup>Required</sup> <a name="gatewayUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.gatewayUniqueId"></a>

```java
public java.lang.String getGatewayUniqueId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.include"></a>

```java
public ZeroTrustDeviceDefaultProfileIncludeList getInclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList">ZeroTrustDeviceDefaultProfileIncludeList</a>

---

##### `serviceModeV2`<sup>Required</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2"></a>

```java
public ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference getServiceModeV2();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowedToLeaveInput`<sup>Optional</sup> <a name="allowedToLeaveInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeaveInput"></a>

```java
public java.lang.Object getAllowedToLeaveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowModeSwitchInput`<sup>Optional</sup> <a name="allowModeSwitchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitchInput"></a>

```java
public java.lang.Object getAllowModeSwitchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUpdatesInput`<sup>Optional</sup> <a name="allowUpdatesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdatesInput"></a>

```java
public java.lang.Object getAllowUpdatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoConnectInput`<sup>Optional</sup> <a name="autoConnectInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnectInput"></a>

```java
public java.lang.Number getAutoConnectInput();
```

- *Type:* java.lang.Number

---

##### `captivePortalInput`<sup>Optional</sup> <a name="captivePortalInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortalInput"></a>

```java
public java.lang.Number getCaptivePortalInput();
```

- *Type:* java.lang.Number

---

##### `disableAutoFallbackInput`<sup>Optional</sup> <a name="disableAutoFallbackInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallbackInput"></a>

```java
public java.lang.Object getDisableAutoFallbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeOfficeIpsInput`<sup>Optional</sup> <a name="excludeOfficeIpsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIpsInput"></a>

```java
public java.lang.Object getExcludeOfficeIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceModeV2Input`<sup>Optional</sup> <a name="serviceModeV2Input" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2Input"></a>

```java
public java.lang.Object getServiceModeV2Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrlInput"></a>

```java
public java.lang.String getSupportUrlInput();
```

- *Type:* java.lang.String

---

##### `switchLockedInput`<sup>Optional</sup> <a name="switchLockedInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLockedInput"></a>

```java
public java.lang.Object getSwitchLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tunnelProtocolInput`<sup>Optional</sup> <a name="tunnelProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocolInput"></a>

```java
public java.lang.String getTunnelProtocolInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeave"></a>

```java
public java.lang.Object getAllowedToLeave();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitch"></a>

```java
public java.lang.Object getAllowModeSwitch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdates"></a>

```java
public java.lang.Object getAllowUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallback"></a>

```java
public java.lang.Object getDisableAutoFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIps"></a>

```java
public java.lang.Object getExcludeOfficeIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLocked"></a>

```java
public java.lang.Object getSwitchLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceDefaultProfileConfig <a name="ZeroTrustDeviceDefaultProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileConfig;

ZeroTrustDeviceDefaultProfileConfig.builder()
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
//  .allowedToLeave(java.lang.Boolean)
//  .allowedToLeave(IResolvable)
//  .allowModeSwitch(java.lang.Boolean)
//  .allowModeSwitch(IResolvable)
//  .allowUpdates(java.lang.Boolean)
//  .allowUpdates(IResolvable)
//  .autoConnect(java.lang.Number)
//  .captivePortal(java.lang.Number)
//  .disableAutoFallback(java.lang.Boolean)
//  .disableAutoFallback(IResolvable)
//  .excludeOfficeIps(java.lang.Boolean)
//  .excludeOfficeIps(IResolvable)
//  .serviceModeV2(ZeroTrustDeviceDefaultProfileServiceModeV2)
//  .supportUrl(java.lang.String)
//  .switchLocked(java.lang.Boolean)
//  .switchLocked(IResolvable)
//  .tunnelProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow devices to leave the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the user to switch WARP between modes. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to receive update notifications when a new version of the client is available. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | Turn on the captive portal after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The URL to launch when the Send Feedback button is clicked. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | Determines which tunnel protocol to use. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}.

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowedToLeave"></a>

```java
public java.lang.Object getAllowedToLeave();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow devices to leave the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#allowed_to_leave ZeroTrustDeviceDefaultProfile#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowModeSwitch"></a>

```java
public java.lang.Object getAllowModeSwitch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the user to switch WARP between modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#allow_mode_switch ZeroTrustDeviceDefaultProfile#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowUpdates"></a>

```java
public java.lang.Object getAllowUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to receive update notifications when a new version of the client is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#allow_updates ZeroTrustDeviceDefaultProfile#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#auto_connect ZeroTrustDeviceDefaultProfile#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

Turn on the captive portal after the specified amount of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#captive_portal ZeroTrustDeviceDefaultProfile#captive_portal}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.disableAutoFallback"></a>

```java
public java.lang.Object getDisableAutoFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#disable_auto_fallback ZeroTrustDeviceDefaultProfile#disable_auto_fallback}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.excludeOfficeIps"></a>

```java
public java.lang.Object getExcludeOfficeIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to add Microsoft IPs to Split Tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#exclude_office_ips ZeroTrustDeviceDefaultProfile#exclude_office_ips}

---

##### `serviceModeV2`<sup>Optional</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.serviceModeV2"></a>

```java
public ZeroTrustDeviceDefaultProfileServiceModeV2 getServiceModeV2();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}.

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

The URL to launch when the Send Feedback button is clicked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#support_url ZeroTrustDeviceDefaultProfile#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.switchLocked"></a>

```java
public java.lang.Object getSwitchLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the user to turn off the WARP switch and disconnect the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#switch_locked ZeroTrustDeviceDefaultProfile#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

Determines which tunnel protocol to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#tunnel_protocol ZeroTrustDeviceDefaultProfile#tunnel_protocol}

---

### ZeroTrustDeviceDefaultProfileExclude <a name="ZeroTrustDeviceDefaultProfileExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileExclude;

ZeroTrustDeviceDefaultProfileExclude.builder()
    .build();
```


### ZeroTrustDeviceDefaultProfileFallbackDomains <a name="ZeroTrustDeviceDefaultProfileFallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileFallbackDomains;

ZeroTrustDeviceDefaultProfileFallbackDomains.builder()
    .build();
```


### ZeroTrustDeviceDefaultProfileInclude <a name="ZeroTrustDeviceDefaultProfileInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileInclude;

ZeroTrustDeviceDefaultProfileInclude.builder()
    .build();
```


### ZeroTrustDeviceDefaultProfileServiceModeV2 <a name="ZeroTrustDeviceDefaultProfileServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileServiceModeV2;

ZeroTrustDeviceDefaultProfileServiceModeV2.builder()
//  .mode(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode to run the WARP client under. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.port">port</a></code> | <code>java.lang.Number</code> | The port number when used with proxy mode. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode to run the WARP client under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#mode ZeroTrustDeviceDefaultProfile#mode}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number when used with proxy mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#port ZeroTrustDeviceDefaultProfile#port}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceDefaultProfileExcludeList <a name="ZeroTrustDeviceDefaultProfileExcludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileExcludeList;

new ZeroTrustDeviceDefaultProfileExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get"></a>

```java
public ZeroTrustDeviceDefaultProfileExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ZeroTrustDeviceDefaultProfileExcludeOutputReference <a name="ZeroTrustDeviceDefaultProfileExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileExcludeOutputReference;

new ZeroTrustDeviceDefaultProfileExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue"></a>

```java
public ZeroTrustDeviceDefaultProfileExclude getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>

---


### ZeroTrustDeviceDefaultProfileFallbackDomainsList <a name="ZeroTrustDeviceDefaultProfileFallbackDomainsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileFallbackDomainsList;

new ZeroTrustDeviceDefaultProfileFallbackDomainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get"></a>

```java
public ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference <a name="ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference;

new ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains">ZeroTrustDeviceDefaultProfileFallbackDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue"></a>

```java
public ZeroTrustDeviceDefaultProfileFallbackDomains getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains">ZeroTrustDeviceDefaultProfileFallbackDomains</a>

---


### ZeroTrustDeviceDefaultProfileIncludeList <a name="ZeroTrustDeviceDefaultProfileIncludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileIncludeList;

new ZeroTrustDeviceDefaultProfileIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get"></a>

```java
public ZeroTrustDeviceDefaultProfileIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ZeroTrustDeviceDefaultProfileIncludeOutputReference <a name="ZeroTrustDeviceDefaultProfileIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileIncludeOutputReference;

new ZeroTrustDeviceDefaultProfileIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue"></a>

```java
public ZeroTrustDeviceDefaultProfileInclude getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>

---


### ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference <a name="ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;

new ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---



