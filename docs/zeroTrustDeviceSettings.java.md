# `zeroTrustDeviceSettings` Submodule <a name="`zeroTrustDeviceSettings` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceSettings <a name="ZeroTrustDeviceSettings" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_settings.ZeroTrustDeviceSettings;

ZeroTrustDeviceSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .disableForTime(java.lang.Number)
//  .gatewayProxyEnabled(java.lang.Boolean|IResolvable)
//  .gatewayUdpProxyEnabled(java.lang.Boolean|IResolvable)
//  .rootCertificateInstallationEnabled(java.lang.Boolean|IResolvable)
//  .useZtVirtualIp(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.disableForTime">disableForTime</a></code> | <code>java.lang.Number</code> | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.gatewayProxyEnabled">gatewayProxyEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable gateway proxy filtering on TCP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.gatewayUdpProxyEnabled">gatewayUdpProxyEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable gateway proxy filtering on UDP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.rootCertificateInstallationEnabled">rootCertificateInstallationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable installation of cloudflare managed root certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.useZtVirtualIp">useZtVirtualIp</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable using CGNAT virtual IPv4. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}.

---

##### `disableForTime`<sup>Optional</sup> <a name="disableForTime" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.disableForTime"></a>

- *Type:* java.lang.Number

Sets the time limit, in seconds, that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#disable_for_time ZeroTrustDeviceSettings#disable_for_time}

---

##### `gatewayProxyEnabled`<sup>Optional</sup> <a name="gatewayProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.gatewayProxyEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable gateway proxy filtering on TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#gateway_proxy_enabled ZeroTrustDeviceSettings#gateway_proxy_enabled}

---

##### `gatewayUdpProxyEnabled`<sup>Optional</sup> <a name="gatewayUdpProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.gatewayUdpProxyEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable gateway proxy filtering on UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#gateway_udp_proxy_enabled ZeroTrustDeviceSettings#gateway_udp_proxy_enabled}

---

##### `rootCertificateInstallationEnabled`<sup>Optional</sup> <a name="rootCertificateInstallationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.rootCertificateInstallationEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable installation of cloudflare managed root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#root_certificate_installation_enabled ZeroTrustDeviceSettings#root_certificate_installation_enabled}

---

##### `useZtVirtualIp`<sup>Optional</sup> <a name="useZtVirtualIp" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.useZtVirtualIp"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable using CGNAT virtual IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#use_zt_virtual_ip ZeroTrustDeviceSettings#use_zt_virtual_ip}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetDisableForTime">resetDisableForTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayProxyEnabled">resetGatewayProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayUdpProxyEnabled">resetGatewayUdpProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetRootCertificateInstallationEnabled">resetRootCertificateInstallationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetUseZtVirtualIp">resetUseZtVirtualIp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisableForTime` <a name="resetDisableForTime" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetDisableForTime"></a>

```java
public void resetDisableForTime()
```

##### `resetGatewayProxyEnabled` <a name="resetGatewayProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayProxyEnabled"></a>

```java
public void resetGatewayProxyEnabled()
```

##### `resetGatewayUdpProxyEnabled` <a name="resetGatewayUdpProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayUdpProxyEnabled"></a>

```java
public void resetGatewayUdpProxyEnabled()
```

##### `resetRootCertificateInstallationEnabled` <a name="resetRootCertificateInstallationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetRootCertificateInstallationEnabled"></a>

```java
public void resetRootCertificateInstallationEnabled()
```

##### `resetUseZtVirtualIp` <a name="resetUseZtVirtualIp" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetUseZtVirtualIp"></a>

```java
public void resetUseZtVirtualIp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_settings.ZeroTrustDeviceSettings;

ZeroTrustDeviceSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_settings.ZeroTrustDeviceSettings;

ZeroTrustDeviceSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_settings.ZeroTrustDeviceSettings;

ZeroTrustDeviceSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_settings.ZeroTrustDeviceSettings;

ZeroTrustDeviceSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDeviceSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDeviceSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDeviceSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTimeInput">disableForTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabledInput">gatewayProxyEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabledInput">gatewayUdpProxyEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabledInput">rootCertificateInstallationEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIpInput">useZtVirtualIpInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTime">disableForTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabled">gatewayProxyEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabled">gatewayUdpProxyEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabled">rootCertificateInstallationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIp">useZtVirtualIp</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `disableForTimeInput`<sup>Optional</sup> <a name="disableForTimeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTimeInput"></a>

```java
public java.lang.Number getDisableForTimeInput();
```

- *Type:* java.lang.Number

---

##### `gatewayProxyEnabledInput`<sup>Optional</sup> <a name="gatewayProxyEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGatewayProxyEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `gatewayUdpProxyEnabledInput`<sup>Optional</sup> <a name="gatewayUdpProxyEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGatewayUdpProxyEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rootCertificateInstallationEnabledInput`<sup>Optional</sup> <a name="rootCertificateInstallationEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRootCertificateInstallationEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `useZtVirtualIpInput`<sup>Optional</sup> <a name="useZtVirtualIpInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIpInput"></a>

```java
public java.lang.Boolean|IResolvable getUseZtVirtualIpInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `disableForTime`<sup>Required</sup> <a name="disableForTime" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTime"></a>

```java
public java.lang.Number getDisableForTime();
```

- *Type:* java.lang.Number

---

##### `gatewayProxyEnabled`<sup>Required</sup> <a name="gatewayProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGatewayProxyEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `gatewayUdpProxyEnabled`<sup>Required</sup> <a name="gatewayUdpProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGatewayUdpProxyEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rootCertificateInstallationEnabled`<sup>Required</sup> <a name="rootCertificateInstallationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRootCertificateInstallationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `useZtVirtualIp`<sup>Required</sup> <a name="useZtVirtualIp" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIp"></a>

```java
public java.lang.Boolean|IResolvable getUseZtVirtualIp();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceSettingsConfig <a name="ZeroTrustDeviceSettingsConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_settings.ZeroTrustDeviceSettingsConfig;

ZeroTrustDeviceSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .disableForTime(java.lang.Number)
//  .gatewayProxyEnabled(java.lang.Boolean|IResolvable)
//  .gatewayUdpProxyEnabled(java.lang.Boolean|IResolvable)
//  .rootCertificateInstallationEnabled(java.lang.Boolean|IResolvable)
//  .useZtVirtualIp(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.disableForTime">disableForTime</a></code> | <code>java.lang.Number</code> | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayProxyEnabled">gatewayProxyEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable gateway proxy filtering on TCP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayUdpProxyEnabled">gatewayUdpProxyEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable gateway proxy filtering on UDP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.rootCertificateInstallationEnabled">rootCertificateInstallationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable installation of cloudflare managed root certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.useZtVirtualIp">useZtVirtualIp</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable using CGNAT virtual IPv4. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}.

---

##### `disableForTime`<sup>Optional</sup> <a name="disableForTime" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.disableForTime"></a>

```java
public java.lang.Number getDisableForTime();
```

- *Type:* java.lang.Number

Sets the time limit, in seconds, that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#disable_for_time ZeroTrustDeviceSettings#disable_for_time}

---

##### `gatewayProxyEnabled`<sup>Optional</sup> <a name="gatewayProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayProxyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGatewayProxyEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable gateway proxy filtering on TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#gateway_proxy_enabled ZeroTrustDeviceSettings#gateway_proxy_enabled}

---

##### `gatewayUdpProxyEnabled`<sup>Optional</sup> <a name="gatewayUdpProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayUdpProxyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGatewayUdpProxyEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable gateway proxy filtering on UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#gateway_udp_proxy_enabled ZeroTrustDeviceSettings#gateway_udp_proxy_enabled}

---

##### `rootCertificateInstallationEnabled`<sup>Optional</sup> <a name="rootCertificateInstallationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.rootCertificateInstallationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRootCertificateInstallationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable installation of cloudflare managed root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#root_certificate_installation_enabled ZeroTrustDeviceSettings#root_certificate_installation_enabled}

---

##### `useZtVirtualIp`<sup>Optional</sup> <a name="useZtVirtualIp" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.useZtVirtualIp"></a>

```java
public java.lang.Boolean|IResolvable getUseZtVirtualIp();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable using CGNAT virtual IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_device_settings#use_zt_virtual_ip ZeroTrustDeviceSettings#use_zt_virtual_ip}

---



