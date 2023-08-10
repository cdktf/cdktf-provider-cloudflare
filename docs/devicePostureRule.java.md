# `cloudflare_device_posture_rule`

Refer to the Terraform Registory for docs: [`cloudflare_device_posture_rule`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule).

# `devicePostureRule` Submodule <a name="`devicePostureRule` Submodule" id="@cdktf/provider-cloudflare.devicePostureRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicePostureRule <a name="DevicePostureRule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule cloudflare_device_posture_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRule;

DevicePostureRule.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
//  .description(java.lang.String)
//  .expiration(java.lang.String)
//  .id(java.lang.String)
//  .input(IResolvable)
//  .input(java.util.List<DevicePostureRuleInput>)
//  .match(IResolvable)
//  .match(java.util.List<DevicePostureRuleMatch>)
//  .name(java.lang.String)
//  .schedule(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The device posture rule type. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#description DevicePostureRule#description}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.expiration">expiration</a></code> | <code>java.lang.String</code> | Expire posture results after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#id DevicePostureRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.match">match</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>></code> | match block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Tells the client when to run the device posture check. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#account_id DevicePostureRule#account_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The device posture rule type.

Available values: `serial_number`, `file`, `application`, `gateway`, `warp`, `domain_joined`, `os_version`, `disk_encryption`, `firewall`, `client_certificate`, `workspace_one`, `unique_client_id`, `crowdstrike_s2s`, `sentinelone`, `kolide`, `tanium_s2s`, `intune`, `sentinelone_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#type DevicePostureRule#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#description DevicePostureRule#description}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.expiration"></a>

- *Type:* java.lang.String

Expire posture results after the specified amount of time.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#expiration DevicePostureRule#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#id DevicePostureRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.input"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#input DevicePostureRule#input}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.match"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#match DevicePostureRule#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#name DevicePostureRule#name}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Tells the client when to run the device posture check.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#schedule DevicePostureRule#schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInput` <a name="putInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput"></a>

```java
public void putInput(IResolvable OR java.util.List<DevicePostureRuleInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch"></a>

```java
public void putMatch(IResolvable OR java.util.List<DevicePostureRuleMatch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetId"></a>

```java
public void resetId()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetInput"></a>

```java
public void resetInput()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetMatch"></a>

```java
public void resetMatch()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetName"></a>

```java
public void resetName()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetSchedule"></a>

```java
public void resetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRule;

DevicePostureRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRule;

DevicePostureRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRule;

DevicePostureRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.input">input</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList">DevicePostureRuleInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList">DevicePostureRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expirationInput">expirationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.inputInput">inputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.matchInput">matchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.input"></a>

```java
public DevicePostureRuleInputList getInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList">DevicePostureRuleInputList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.match"></a>

```java
public DevicePostureRuleMatchList getMatch();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList">DevicePostureRuleMatchList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expirationInput"></a>

```java
public java.lang.String getExpirationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.inputInput"></a>

```java
public java.lang.Object getInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.matchInput"></a>

```java
public java.lang.Object getMatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevicePostureRuleConfig <a name="DevicePostureRuleConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRuleConfig;

DevicePostureRuleConfig.builder()
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
    .type(java.lang.String)
//  .description(java.lang.String)
//  .expiration(java.lang.String)
//  .id(java.lang.String)
//  .input(IResolvable)
//  .input(java.util.List<DevicePostureRuleInput>)
//  .match(IResolvable)
//  .match(java.util.List<DevicePostureRuleMatch>)
//  .name(java.lang.String)
//  .schedule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | The device posture rule type. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#description DevicePostureRule#description}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.expiration">expiration</a></code> | <code>java.lang.String</code> | Expire posture results after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#id DevicePostureRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.match">match</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>></code> | match block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Tells the client when to run the device posture check. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#account_id DevicePostureRule#account_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The device posture rule type.

Available values: `serial_number`, `file`, `application`, `gateway`, `warp`, `domain_joined`, `os_version`, `disk_encryption`, `firewall`, `client_certificate`, `workspace_one`, `unique_client_id`, `crowdstrike_s2s`, `sentinelone`, `kolide`, `tanium_s2s`, `intune`, `sentinelone_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#type DevicePostureRule#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#description DevicePostureRule#description}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

Expire posture results after the specified amount of time.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#expiration DevicePostureRule#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#id DevicePostureRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.input"></a>

```java
public java.lang.Object getInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#input DevicePostureRule#input}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.match"></a>

```java
public java.lang.Object getMatch();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#match DevicePostureRule#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#name DevicePostureRule#name}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Tells the client when to run the device posture check.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#schedule DevicePostureRule#schedule}

---

### DevicePostureRuleInput <a name="DevicePostureRuleInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRuleInput;

DevicePostureRuleInput.builder()
//  .activeThreats(java.lang.Number)
//  .certificateId(java.lang.String)
//  .checkDisks(java.util.List<java.lang.String>)
//  .cn(java.lang.String)
//  .complianceStatus(java.lang.String)
//  .connectionId(java.lang.String)
//  .countOperator(java.lang.String)
//  .domain(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .exists(java.lang.Boolean)
//  .exists(IResolvable)
//  .id(java.lang.String)
//  .infected(java.lang.Boolean)
//  .infected(IResolvable)
//  .isActive(java.lang.Boolean)
//  .isActive(IResolvable)
//  .issueCount(java.lang.String)
//  .networkStatus(java.lang.String)
//  .operator(java.lang.String)
//  .os(java.lang.String)
//  .osDistroName(java.lang.String)
//  .osDistroRevision(java.lang.String)
//  .overall(java.lang.String)
//  .path(java.lang.String)
//  .requireAll(java.lang.Boolean)
//  .requireAll(IResolvable)
//  .running(java.lang.Boolean)
//  .running(IResolvable)
//  .sensorConfig(java.lang.String)
//  .sha256(java.lang.String)
//  .thumbprint(java.lang.String)
//  .version(java.lang.String)
//  .versionOperator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.activeThreats">activeThreats</a></code> | <code>java.lang.Number</code> | The number of active threats from SentinelOne. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | The UUID of a Cloudflare managed certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.checkDisks">checkDisks</a></code> | <code>java.util.List<java.lang.String></code> | Specific volume(s) to check for encryption. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.cn">cn</a></code> | <code>java.lang.String</code> | The common name for a certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.complianceStatus">complianceStatus</a></code> | <code>java.lang.String</code> | The workspace one device compliance status. Available values: `compliant`, `noncompliant`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | The workspace one connection id. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.countOperator">countOperator</a></code> | <code>java.lang.String</code> | The count comparison operator for kolide. Available values: `>`, `>=`, `<`, `<=`, `==`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain that the client must join. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the firewall must be enabled. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.exists">exists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Checks if the file should exist. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.id">id</a></code> | <code>java.lang.String</code> | The Teams List id. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.infected">infected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if SentinelOne device is infected. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if SentinelOne device is active. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.issueCount">issueCount</a></code> | <code>java.lang.String</code> | The number of issues for kolide. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.networkStatus">networkStatus</a></code> | <code>java.lang.String</code> | The network status from SentinelOne. Available values: `connected`, `disconnected`, `disconnecting`, `connecting`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.operator">operator</a></code> | <code>java.lang.String</code> | The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.os">os</a></code> | <code>java.lang.String</code> | OS signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroName">osDistroName</a></code> | <code>java.lang.String</code> | The operating system excluding version information. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroRevision">osDistroRevision</a></code> | <code>java.lang.String</code> | The operating system version excluding OS name information or release name. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.overall">overall</a></code> | <code>java.lang.String</code> | Overall ZTA score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.path">path</a></code> | <code>java.lang.String</code> | The path to the file. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.requireAll">requireAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if all drives must be encrypted. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.running">running</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Checks if the application should be running. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sensorConfig">sensorConfig</a></code> | <code>java.lang.String</code> | Sensor signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sha256">sha256</a></code> | <code>java.lang.String</code> | The sha256 hash of the file. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | The thumbprint of the file certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.version">version</a></code> | <code>java.lang.String</code> | The operating system semantic version. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.versionOperator">versionOperator</a></code> | <code>java.lang.String</code> | The version comparison operator for crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`. |

---

##### `activeThreats`<sup>Optional</sup> <a name="activeThreats" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.activeThreats"></a>

```java
public java.lang.Number getActiveThreats();
```

- *Type:* java.lang.Number

The number of active threats from SentinelOne.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#active_threats DevicePostureRule#active_threats}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

The UUID of a Cloudflare managed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#certificate_id DevicePostureRule#certificate_id}

---

##### `checkDisks`<sup>Optional</sup> <a name="checkDisks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.checkDisks"></a>

```java
public java.util.List<java.lang.String> getCheckDisks();
```

- *Type:* java.util.List<java.lang.String>

Specific volume(s) to check for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#check_disks DevicePostureRule#check_disks}

---

##### `cn`<sup>Optional</sup> <a name="cn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.cn"></a>

```java
public java.lang.String getCn();
```

- *Type:* java.lang.String

The common name for a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#cn DevicePostureRule#cn}

---

##### `complianceStatus`<sup>Optional</sup> <a name="complianceStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.complianceStatus"></a>

```java
public java.lang.String getComplianceStatus();
```

- *Type:* java.lang.String

The workspace one device compliance status. Available values: `compliant`, `noncompliant`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#compliance_status DevicePostureRule#compliance_status}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

The workspace one connection id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#connection_id DevicePostureRule#connection_id}

---

##### `countOperator`<sup>Optional</sup> <a name="countOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.countOperator"></a>

```java
public java.lang.String getCountOperator();
```

- *Type:* java.lang.String

The count comparison operator for kolide. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#count_operator DevicePostureRule#count_operator}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain that the client must join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#domain DevicePostureRule#domain}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the firewall must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#enabled DevicePostureRule#enabled}

---

##### `exists`<sup>Optional</sup> <a name="exists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.exists"></a>

```java
public java.lang.Object getExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Checks if the file should exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#exists DevicePostureRule#exists}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The Teams List id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#id DevicePostureRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infected`<sup>Optional</sup> <a name="infected" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.infected"></a>

```java
public java.lang.Object getInfected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if SentinelOne device is infected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#infected DevicePostureRule#infected}

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if SentinelOne device is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#is_active DevicePostureRule#is_active}

---

##### `issueCount`<sup>Optional</sup> <a name="issueCount" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.issueCount"></a>

```java
public java.lang.String getIssueCount();
```

- *Type:* java.lang.String

The number of issues for kolide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#issue_count DevicePostureRule#issue_count}

---

##### `networkStatus`<sup>Optional</sup> <a name="networkStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.networkStatus"></a>

```java
public java.lang.String getNetworkStatus();
```

- *Type:* java.lang.String

The network status from SentinelOne. Available values: `connected`, `disconnected`, `disconnecting`, `connecting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#network_status DevicePostureRule#network_status}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#operator DevicePostureRule#operator}

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

OS signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#os DevicePostureRule#os}

---

##### `osDistroName`<sup>Optional</sup> <a name="osDistroName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroName"></a>

```java
public java.lang.String getOsDistroName();
```

- *Type:* java.lang.String

The operating system excluding version information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#os_distro_name DevicePostureRule#os_distro_name}

---

##### `osDistroRevision`<sup>Optional</sup> <a name="osDistroRevision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroRevision"></a>

```java
public java.lang.String getOsDistroRevision();
```

- *Type:* java.lang.String

The operating system version excluding OS name information or release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#os_distro_revision DevicePostureRule#os_distro_revision}

---

##### `overall`<sup>Optional</sup> <a name="overall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.overall"></a>

```java
public java.lang.String getOverall();
```

- *Type:* java.lang.String

Overall ZTA score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#overall DevicePostureRule#overall}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#path DevicePostureRule#path}

---

##### `requireAll`<sup>Optional</sup> <a name="requireAll" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.requireAll"></a>

```java
public java.lang.Object getRequireAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if all drives must be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#require_all DevicePostureRule#require_all}

---

##### `running`<sup>Optional</sup> <a name="running" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.running"></a>

```java
public java.lang.Object getRunning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Checks if the application should be running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#running DevicePostureRule#running}

---

##### `sensorConfig`<sup>Optional</sup> <a name="sensorConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sensorConfig"></a>

```java
public java.lang.String getSensorConfig();
```

- *Type:* java.lang.String

Sensor signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#sensor_config DevicePostureRule#sensor_config}

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

The sha256 hash of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#sha256 DevicePostureRule#sha256}

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

The thumbprint of the file certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#thumbprint DevicePostureRule#thumbprint}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The operating system semantic version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#version DevicePostureRule#version}

---

##### `versionOperator`<sup>Optional</sup> <a name="versionOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.versionOperator"></a>

```java
public java.lang.String getVersionOperator();
```

- *Type:* java.lang.String

The version comparison operator for crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#version_operator DevicePostureRule#version_operator}

---

### DevicePostureRuleMatch <a name="DevicePostureRuleMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRuleMatch;

DevicePostureRuleMatch.builder()
//  .platform(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.property.platform">platform</a></code> | <code>java.lang.String</code> | The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`. |

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/device_posture_rule#platform DevicePostureRule#platform}

---

## Classes <a name="Classes" id="Classes"></a>

### DevicePostureRuleInputList <a name="DevicePostureRuleInputList" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRuleInputList;

new DevicePostureRuleInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get"></a>

```java
public DevicePostureRuleInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>>

---


### DevicePostureRuleInputOutputReference <a name="DevicePostureRuleInputOutputReference" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRuleInputOutputReference;

new DevicePostureRuleInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetActiveThreats">resetActiveThreats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCheckDisks">resetCheckDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCn">resetCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetComplianceStatus">resetComplianceStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCountOperator">resetCountOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetExists">resetExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetInfected">resetInfected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIssueCount">resetIssueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetNetworkStatus">resetNetworkStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOs">resetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroName">resetOsDistroName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroRevision">resetOsDistroRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOverall">resetOverall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRequireAll">resetRequireAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRunning">resetRunning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSensorConfig">resetSensorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSha256">resetSha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetThumbprint">resetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersionOperator">resetVersionOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveThreats` <a name="resetActiveThreats" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetActiveThreats"></a>

```java
public void resetActiveThreats()
```

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetCheckDisks` <a name="resetCheckDisks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCheckDisks"></a>

```java
public void resetCheckDisks()
```

##### `resetCn` <a name="resetCn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCn"></a>

```java
public void resetCn()
```

##### `resetComplianceStatus` <a name="resetComplianceStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetComplianceStatus"></a>

```java
public void resetComplianceStatus()
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetConnectionId"></a>

```java
public void resetConnectionId()
```

##### `resetCountOperator` <a name="resetCountOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCountOperator"></a>

```java
public void resetCountOperator()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExists` <a name="resetExists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetExists"></a>

```java
public void resetExists()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetInfected` <a name="resetInfected" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetInfected"></a>

```java
public void resetInfected()
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIsActive"></a>

```java
public void resetIsActive()
```

##### `resetIssueCount` <a name="resetIssueCount" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIssueCount"></a>

```java
public void resetIssueCount()
```

##### `resetNetworkStatus` <a name="resetNetworkStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetNetworkStatus"></a>

```java
public void resetNetworkStatus()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetOs` <a name="resetOs" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOs"></a>

```java
public void resetOs()
```

##### `resetOsDistroName` <a name="resetOsDistroName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroName"></a>

```java
public void resetOsDistroName()
```

##### `resetOsDistroRevision` <a name="resetOsDistroRevision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroRevision"></a>

```java
public void resetOsDistroRevision()
```

##### `resetOverall` <a name="resetOverall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOverall"></a>

```java
public void resetOverall()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRequireAll` <a name="resetRequireAll" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRequireAll"></a>

```java
public void resetRequireAll()
```

##### `resetRunning` <a name="resetRunning" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRunning"></a>

```java
public void resetRunning()
```

##### `resetSensorConfig` <a name="resetSensorConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSensorConfig"></a>

```java
public void resetSensorConfig()
```

##### `resetSha256` <a name="resetSha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSha256"></a>

```java
public void resetSha256()
```

##### `resetThumbprint` <a name="resetThumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetThumbprint"></a>

```java
public void resetThumbprint()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetVersionOperator` <a name="resetVersionOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersionOperator"></a>

```java
public void resetVersionOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreatsInput">activeThreatsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisksInput">checkDisksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cnInput">cnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatusInput">complianceStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperatorInput">countOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.existsInput">existsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infectedInput">infectedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActiveInput">isActiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCountInput">issueCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatusInput">networkStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroNameInput">osDistroNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevisionInput">osDistroRevisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osInput">osInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overallInput">overallInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAllInput">requireAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.runningInput">runningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfigInput">sensorConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256Input">sha256Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperatorInput">versionOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreats">activeThreats</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisks">checkDisks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cn">cn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatus">complianceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperator">countOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.exists">exists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infected">infected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCount">issueCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatus">networkStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.os">os</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroName">osDistroName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevision">osDistroRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overall">overall</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAll">requireAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.running">running</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfig">sensorConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperator">versionOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeThreatsInput`<sup>Optional</sup> <a name="activeThreatsInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreatsInput"></a>

```java
public java.lang.Number getActiveThreatsInput();
```

- *Type:* java.lang.Number

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `checkDisksInput`<sup>Optional</sup> <a name="checkDisksInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisksInput"></a>

```java
public java.util.List<java.lang.String> getCheckDisksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cnInput`<sup>Optional</sup> <a name="cnInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cnInput"></a>

```java
public java.lang.String getCnInput();
```

- *Type:* java.lang.String

---

##### `complianceStatusInput`<sup>Optional</sup> <a name="complianceStatusInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatusInput"></a>

```java
public java.lang.String getComplianceStatusInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `countOperatorInput`<sup>Optional</sup> <a name="countOperatorInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperatorInput"></a>

```java
public java.lang.String getCountOperatorInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `existsInput`<sup>Optional</sup> <a name="existsInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.existsInput"></a>

```java
public java.lang.Object getExistsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `infectedInput`<sup>Optional</sup> <a name="infectedInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infectedInput"></a>

```java
public java.lang.Object getInfectedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActiveInput"></a>

```java
public java.lang.Object getIsActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issueCountInput`<sup>Optional</sup> <a name="issueCountInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCountInput"></a>

```java
public java.lang.String getIssueCountInput();
```

- *Type:* java.lang.String

---

##### `networkStatusInput`<sup>Optional</sup> <a name="networkStatusInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatusInput"></a>

```java
public java.lang.String getNetworkStatusInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `osDistroNameInput`<sup>Optional</sup> <a name="osDistroNameInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroNameInput"></a>

```java
public java.lang.String getOsDistroNameInput();
```

- *Type:* java.lang.String

---

##### `osDistroRevisionInput`<sup>Optional</sup> <a name="osDistroRevisionInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevisionInput"></a>

```java
public java.lang.String getOsDistroRevisionInput();
```

- *Type:* java.lang.String

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osInput"></a>

```java
public java.lang.String getOsInput();
```

- *Type:* java.lang.String

---

##### `overallInput`<sup>Optional</sup> <a name="overallInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overallInput"></a>

```java
public java.lang.String getOverallInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `requireAllInput`<sup>Optional</sup> <a name="requireAllInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAllInput"></a>

```java
public java.lang.Object getRequireAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runningInput`<sup>Optional</sup> <a name="runningInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.runningInput"></a>

```java
public java.lang.Object getRunningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sensorConfigInput`<sup>Optional</sup> <a name="sensorConfigInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfigInput"></a>

```java
public java.lang.String getSensorConfigInput();
```

- *Type:* java.lang.String

---

##### `sha256Input`<sup>Optional</sup> <a name="sha256Input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256Input"></a>

```java
public java.lang.String getSha256Input();
```

- *Type:* java.lang.String

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprintInput"></a>

```java
public java.lang.String getThumbprintInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `versionOperatorInput`<sup>Optional</sup> <a name="versionOperatorInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperatorInput"></a>

```java
public java.lang.String getVersionOperatorInput();
```

- *Type:* java.lang.String

---

##### `activeThreats`<sup>Required</sup> <a name="activeThreats" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreats"></a>

```java
public java.lang.Number getActiveThreats();
```

- *Type:* java.lang.Number

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `checkDisks`<sup>Required</sup> <a name="checkDisks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisks"></a>

```java
public java.util.List<java.lang.String> getCheckDisks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cn`<sup>Required</sup> <a name="cn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cn"></a>

```java
public java.lang.String getCn();
```

- *Type:* java.lang.String

---

##### `complianceStatus`<sup>Required</sup> <a name="complianceStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatus"></a>

```java
public java.lang.String getComplianceStatus();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `countOperator`<sup>Required</sup> <a name="countOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperator"></a>

```java
public java.lang.String getCountOperator();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.exists"></a>

```java
public java.lang.Object getExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `infected`<sup>Required</sup> <a name="infected" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infected"></a>

```java
public java.lang.Object getInfected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issueCount`<sup>Required</sup> <a name="issueCount" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCount"></a>

```java
public java.lang.String getIssueCount();
```

- *Type:* java.lang.String

---

##### `networkStatus`<sup>Required</sup> <a name="networkStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatus"></a>

```java
public java.lang.String getNetworkStatus();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

---

##### `osDistroName`<sup>Required</sup> <a name="osDistroName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroName"></a>

```java
public java.lang.String getOsDistroName();
```

- *Type:* java.lang.String

---

##### `osDistroRevision`<sup>Required</sup> <a name="osDistroRevision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevision"></a>

```java
public java.lang.String getOsDistroRevision();
```

- *Type:* java.lang.String

---

##### `overall`<sup>Required</sup> <a name="overall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overall"></a>

```java
public java.lang.String getOverall();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `requireAll`<sup>Required</sup> <a name="requireAll" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAll"></a>

```java
public java.lang.Object getRequireAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.running"></a>

```java
public java.lang.Object getRunning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sensorConfig`<sup>Required</sup> <a name="sensorConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfig"></a>

```java
public java.lang.String getSensorConfig();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `versionOperator`<sup>Required</sup> <a name="versionOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperator"></a>

```java
public java.lang.String getVersionOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>

---


### DevicePostureRuleMatchList <a name="DevicePostureRuleMatchList" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRuleMatchList;

new DevicePostureRuleMatchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get"></a>

```java
public DevicePostureRuleMatchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>>

---


### DevicePostureRuleMatchOutputReference <a name="DevicePostureRuleMatchOutputReference" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.device_posture_rule.DevicePostureRuleMatchOutputReference;

new DevicePostureRuleMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resetPlatform"></a>

```java
public void resetPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>

---



