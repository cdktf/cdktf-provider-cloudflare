# `devicePostureIntegration` Submodule <a name="`devicePostureIntegration` Submodule" id="@cdktf/provider-cloudflare.devicePostureIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicePostureIntegration <a name="DevicePostureIntegration" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration cloudflare_device_posture_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_integration.DevicePostureIntegration;

DevicePostureIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .type(java.lang.String)
//  .config(IResolvable)
//  .config(java.util.List<DevicePostureIntegrationConfigA>)
//  .id(java.lang.String)
//  .identifier(java.lang.String)
//  .interval(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#id DevicePostureIntegration#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.interval">interval</a></code> | <code>java.lang.String</code> | Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#account_id DevicePostureIntegration#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#name DevicePostureIntegration#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#type DevicePostureIntegration#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.config"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#config DevicePostureIntegration#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#id DevicePostureIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.identifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.interval"></a>

- *Type:* java.lang.String

Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#interval DevicePostureIntegration#interval}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.putConfig"></a>

```java
public void putConfig(IResolvable OR java.util.List<DevicePostureIntegrationConfigA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.putConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetIdentifier"></a>

```java
public void resetIdentifier()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetInterval"></a>

```java
public void resetInterval()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevicePostureIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_integration.DevicePostureIntegration;

DevicePostureIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_integration.DevicePostureIntegration;

DevicePostureIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_integration.DevicePostureIntegration;

DevicePostureIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_integration.DevicePostureIntegration;

DevicePostureIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevicePostureIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevicePostureIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevicePostureIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevicePostureIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevicePostureIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList">DevicePostureIntegrationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.intervalInput">intervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.config"></a>

```java
public DevicePostureIntegrationConfigAList getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList">DevicePostureIntegrationConfigAList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>>

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.intervalInput"></a>

```java
public java.lang.String getIntervalInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevicePostureIntegrationConfig <a name="DevicePostureIntegrationConfig" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_integration.DevicePostureIntegrationConfig;

DevicePostureIntegrationConfig.builder()
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
    .name(java.lang.String)
    .type(java.lang.String)
//  .config(IResolvable)
//  .config(java.util.List<DevicePostureIntegrationConfigA>)
//  .id(java.lang.String)
//  .identifier(java.lang.String)
//  .interval(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.type">type</a></code> | <code>java.lang.String</code> | The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#id DevicePostureIntegration#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.interval">interval</a></code> | <code>java.lang.String</code> | Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#account_id DevicePostureIntegration#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#name DevicePostureIntegration#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#type DevicePostureIntegration#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.config"></a>

```java
public java.lang.Object getConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#config DevicePostureIntegration#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#id DevicePostureIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#interval DevicePostureIntegration#interval}

---

### DevicePostureIntegrationConfigA <a name="DevicePostureIntegrationConfigA" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_integration.DevicePostureIntegrationConfigA;

DevicePostureIntegrationConfigA.builder()
//  .accessClientId(java.lang.String)
//  .accessClientSecret(java.lang.String)
//  .apiUrl(java.lang.String)
//  .authUrl(java.lang.String)
//  .clientId(java.lang.String)
//  .clientKey(java.lang.String)
//  .clientSecret(java.lang.String)
//  .customerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.accessClientId">accessClientId</a></code> | <code>java.lang.String</code> | The Access client ID to be used as the `Cf-Access-Client-ID` header when making a request to the `api_url`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.accessClientSecret">accessClientSecret</a></code> | <code>java.lang.String</code> | The Access client secret to be used as the `Cf-Access-Client-Secret` header when making a request to the `api_url`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | The third-party API's URL. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | The third-party authorization API URL. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client identifier for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | The client key for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.customerId">customerId</a></code> | <code>java.lang.String</code> | The customer identifier for authenticating API calls. |

---

##### `accessClientId`<sup>Optional</sup> <a name="accessClientId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.accessClientId"></a>

```java
public java.lang.String getAccessClientId();
```

- *Type:* java.lang.String

The Access client ID to be used as the `Cf-Access-Client-ID` header when making a request to the `api_url`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#access_client_id DevicePostureIntegration#access_client_id}

---

##### `accessClientSecret`<sup>Optional</sup> <a name="accessClientSecret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.accessClientSecret"></a>

```java
public java.lang.String getAccessClientSecret();
```

- *Type:* java.lang.String

The Access client secret to be used as the `Cf-Access-Client-Secret` header when making a request to the `api_url`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#access_client_secret DevicePostureIntegration#access_client_secret}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

The third-party API's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#api_url DevicePostureIntegration#api_url}

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

The third-party authorization API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#auth_url DevicePostureIntegration#auth_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client identifier for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#client_id DevicePostureIntegration#client_id}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

The client key for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#client_key DevicePostureIntegration#client_key}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#client_secret DevicePostureIntegration#client_secret}

---

##### `customerId`<sup>Optional</sup> <a name="customerId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.customerId"></a>

```java
public java.lang.String getCustomerId();
```

- *Type:* java.lang.String

The customer identifier for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/device_posture_integration#customer_id DevicePostureIntegration#customer_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DevicePostureIntegrationConfigAList <a name="DevicePostureIntegrationConfigAList" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_integration.DevicePostureIntegrationConfigAList;

new DevicePostureIntegrationConfigAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.get"></a>

```java
public DevicePostureIntegrationConfigAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>>

---


### DevicePostureIntegrationConfigAOutputReference <a name="DevicePostureIntegrationConfigAOutputReference" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_integration.DevicePostureIntegrationConfigAOutputReference;

new DevicePostureIntegrationConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAccessClientId">resetAccessClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAccessClientSecret">resetAccessClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAuthUrl">resetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetCustomerId">resetCustomerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessClientId` <a name="resetAccessClientId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAccessClientId"></a>

```java
public void resetAccessClientId()
```

##### `resetAccessClientSecret` <a name="resetAccessClientSecret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAccessClientSecret"></a>

```java
public void resetAccessClientSecret()
```

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetApiUrl"></a>

```java
public void resetApiUrl()
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAuthUrl"></a>

```java
public void resetAuthUrl()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientKey"></a>

```java
public void resetClientKey()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetCustomerId` <a name="resetCustomerId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetCustomerId"></a>

```java
public void resetCustomerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.accessClientIdInput">accessClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.accessClientSecretInput">accessClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrlInput">apiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrlInput">authUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerIdInput">customerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.accessClientId">accessClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.accessClientSecret">accessClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerId">customerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessClientIdInput`<sup>Optional</sup> <a name="accessClientIdInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.accessClientIdInput"></a>

```java
public java.lang.String getAccessClientIdInput();
```

- *Type:* java.lang.String

---

##### `accessClientSecretInput`<sup>Optional</sup> <a name="accessClientSecretInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.accessClientSecretInput"></a>

```java
public java.lang.String getAccessClientSecretInput();
```

- *Type:* java.lang.String

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrlInput"></a>

```java
public java.lang.String getApiUrlInput();
```

- *Type:* java.lang.String

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrlInput"></a>

```java
public java.lang.String getAuthUrlInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `customerIdInput`<sup>Optional</sup> <a name="customerIdInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerIdInput"></a>

```java
public java.lang.String getCustomerIdInput();
```

- *Type:* java.lang.String

---

##### `accessClientId`<sup>Required</sup> <a name="accessClientId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.accessClientId"></a>

```java
public java.lang.String getAccessClientId();
```

- *Type:* java.lang.String

---

##### `accessClientSecret`<sup>Required</sup> <a name="accessClientSecret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.accessClientSecret"></a>

```java
public java.lang.String getAccessClientSecret();
```

- *Type:* java.lang.String

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `customerId`<sup>Required</sup> <a name="customerId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerId"></a>

```java
public java.lang.String getCustomerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>

---



