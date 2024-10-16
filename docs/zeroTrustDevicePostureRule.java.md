# `zeroTrustDevicePostureRule` Submodule <a name="`zeroTrustDevicePostureRule` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDevicePostureRule <a name="ZeroTrustDevicePostureRule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRule;

ZeroTrustDevicePostureRule.Builder.create(Construct scope, java.lang.String id)
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
//  .input(java.util.List<ZeroTrustDevicePostureRuleInput>)
//  .match(IResolvable)
//  .match(java.util.List<ZeroTrustDevicePostureRuleMatch>)
//  .name(java.lang.String)
//  .schedule(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The device posture rule type. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#description ZeroTrustDevicePostureRule#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.expiration">expiration</a></code> | <code>java.lang.String</code> | Expire posture results after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#id ZeroTrustDevicePostureRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.match">match</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>></code> | match block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Tells the client when to run the device posture check. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#account_id ZeroTrustDevicePostureRule#account_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The device posture rule type.

Available values: `serial_number`, `file`, `application`, `gateway`, `warp`, `domain_joined`, `os_version`, `disk_encryption`, `firewall`, `client_certificate`, `client_certificate_v2`, `workspace_one`, `unique_client_id`, `crowdstrike_s2s`, `sentinelone`, `kolide`, `tanium_s2s`, `intune`, `sentinelone_s2s`, `custom_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#type ZeroTrustDevicePostureRule#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#description ZeroTrustDevicePostureRule#description}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.expiration"></a>

- *Type:* java.lang.String

Expire posture results after the specified amount of time.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#expiration ZeroTrustDevicePostureRule#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#id ZeroTrustDevicePostureRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.input"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#input ZeroTrustDevicePostureRule#input}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.match"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#match ZeroTrustDevicePostureRule#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#name ZeroTrustDevicePostureRule#name}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Tells the client when to run the device posture check.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#schedule ZeroTrustDevicePostureRule#schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInput` <a name="putInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putInput"></a>

```java
public void putInput(IResolvable OR java.util.List<ZeroTrustDevicePostureRuleInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putInput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putMatch"></a>

```java
public void putMatch(IResolvable OR java.util.List<ZeroTrustDevicePostureRuleMatch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putMatch.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetId"></a>

```java
public void resetId()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetInput"></a>

```java
public void resetInput()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetMatch"></a>

```java
public void resetMatch()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetName"></a>

```java
public void resetName()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetSchedule"></a>

```java
public void resetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRule;

ZeroTrustDevicePostureRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRule;

ZeroTrustDevicePostureRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRule;

ZeroTrustDevicePostureRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRule;

ZeroTrustDevicePostureRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDevicePostureRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDevicePostureRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDevicePostureRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDevicePostureRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.input">input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList">ZeroTrustDevicePostureRuleInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList">ZeroTrustDevicePostureRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.expirationInput">expirationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.inputInput">inputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.matchInput">matchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.input"></a>

```java
public ZeroTrustDevicePostureRuleInputList getInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList">ZeroTrustDevicePostureRuleInputList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.match"></a>

```java
public ZeroTrustDevicePostureRuleMatchList getMatch();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList">ZeroTrustDevicePostureRuleMatchList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.expirationInput"></a>

```java
public java.lang.String getExpirationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.inputInput"></a>

```java
public java.lang.Object getInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.matchInput"></a>

```java
public java.lang.Object getMatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDevicePostureRuleConfig <a name="ZeroTrustDevicePostureRuleConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleConfig;

ZeroTrustDevicePostureRuleConfig.builder()
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
//  .input(java.util.List<ZeroTrustDevicePostureRuleInput>)
//  .match(IResolvable)
//  .match(java.util.List<ZeroTrustDevicePostureRuleMatch>)
//  .name(java.lang.String)
//  .schedule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | The device posture rule type. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#description ZeroTrustDevicePostureRule#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.expiration">expiration</a></code> | <code>java.lang.String</code> | Expire posture results after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#id ZeroTrustDevicePostureRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.match">match</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>></code> | match block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Tells the client when to run the device posture check. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#account_id ZeroTrustDevicePostureRule#account_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The device posture rule type.

Available values: `serial_number`, `file`, `application`, `gateway`, `warp`, `domain_joined`, `os_version`, `disk_encryption`, `firewall`, `client_certificate`, `client_certificate_v2`, `workspace_one`, `unique_client_id`, `crowdstrike_s2s`, `sentinelone`, `kolide`, `tanium_s2s`, `intune`, `sentinelone_s2s`, `custom_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#type ZeroTrustDevicePostureRule#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#description ZeroTrustDevicePostureRule#description}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

Expire posture results after the specified amount of time.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#expiration ZeroTrustDevicePostureRule#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#id ZeroTrustDevicePostureRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.input"></a>

```java
public java.lang.Object getInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#input ZeroTrustDevicePostureRule#input}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.match"></a>

```java
public java.lang.Object getMatch();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#match ZeroTrustDevicePostureRule#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#name ZeroTrustDevicePostureRule#name}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Tells the client when to run the device posture check.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#schedule ZeroTrustDevicePostureRule#schedule}

---

### ZeroTrustDevicePostureRuleInput <a name="ZeroTrustDevicePostureRuleInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleInput;

ZeroTrustDevicePostureRuleInput.builder()
//  .activeThreats(java.lang.Number)
//  .certificateId(java.lang.String)
//  .checkDisks(java.util.List<java.lang.String>)
//  .checkPrivateKey(java.lang.Boolean)
//  .checkPrivateKey(IResolvable)
//  .cn(java.lang.String)
//  .complianceStatus(java.lang.String)
//  .connectionId(java.lang.String)
//  .countOperator(java.lang.String)
//  .domain(java.lang.String)
//  .eidLastSeen(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .exists(java.lang.Boolean)
//  .exists(IResolvable)
//  .extendedKeyUsage(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .infected(java.lang.Boolean)
//  .infected(IResolvable)
//  .isActive(java.lang.Boolean)
//  .isActive(IResolvable)
//  .issueCount(java.lang.String)
//  .lastSeen(java.lang.String)
//  .locations(IResolvable)
//  .locations(java.util.List<ZeroTrustDevicePostureRuleInputLocations>)
//  .networkStatus(java.lang.String)
//  .operationalState(java.lang.String)
//  .operator(java.lang.String)
//  .os(java.lang.String)
//  .osDistroName(java.lang.String)
//  .osDistroRevision(java.lang.String)
//  .osVersionExtra(java.lang.String)
//  .overall(java.lang.String)
//  .path(java.lang.String)
//  .requireAll(java.lang.Boolean)
//  .requireAll(IResolvable)
//  .riskLevel(java.lang.String)
//  .running(java.lang.Boolean)
//  .running(IResolvable)
//  .score(java.lang.Number)
//  .sensorConfig(java.lang.String)
//  .sha256(java.lang.String)
//  .state(java.lang.String)
//  .thumbprint(java.lang.String)
//  .totalScore(java.lang.Number)
//  .version(java.lang.String)
//  .versionOperator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.activeThreats">activeThreats</a></code> | <code>java.lang.Number</code> | The number of active threats from SentinelOne. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | The UUID of a Cloudflare managed certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.checkDisks">checkDisks</a></code> | <code>java.util.List<java.lang.String></code> | Specific volume(s) to check for encryption. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.checkPrivateKey">checkPrivateKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Confirm the certificate was not imported from another device. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.cn">cn</a></code> | <code>java.lang.String</code> | The common name for a certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.complianceStatus">complianceStatus</a></code> | <code>java.lang.String</code> | The workspace one or intune device compliance status. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | The workspace one or intune connection id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.countOperator">countOperator</a></code> | <code>java.lang.String</code> | The count comparison operator for kolide. Available values: `>`, `>=`, `<`, `<=`, `==`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain that the client must join. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.eidLastSeen">eidLastSeen</a></code> | <code>java.lang.String</code> | The time a device last seen in Tanium. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the firewall must be enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.exists">exists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Checks if the file should exist. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code>java.util.List<java.lang.String></code> | List of values indicating purposes for which the certificate public key can be used. Available values: `clientAuth`, `emailProtection`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.id">id</a></code> | <code>java.lang.String</code> | The Teams List id. Required for `serial_number` and `unique_client_id` rule types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.infected">infected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if SentinelOne device is infected. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if SentinelOne device is active. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.issueCount">issueCount</a></code> | <code>java.lang.String</code> | The number of issues for kolide. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.lastSeen">lastSeen</a></code> | <code>java.lang.String</code> | The duration of time that the host was last seen from Crowdstrike. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.locations">locations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>></code> | locations block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.networkStatus">networkStatus</a></code> | <code>java.lang.String</code> | The network status from SentinelOne. Available values: `connected`, `disconnected`, `disconnecting`, `connecting`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operationalState">operationalState</a></code> | <code>java.lang.String</code> | The current operational state of a SentinelOne Agent. Available values: `na`, `partially_disabled`, `auto_fully_disabled`, `fully_disabled`, `auto_partially_disabled`, `disabled_error`, `db_corruption`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operator">operator</a></code> | <code>java.lang.String</code> | The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.os">os</a></code> | <code>java.lang.String</code> | OS signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osDistroName">osDistroName</a></code> | <code>java.lang.String</code> | The operating system excluding version information. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osDistroRevision">osDistroRevision</a></code> | <code>java.lang.String</code> | The operating system version excluding OS name information or release name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osVersionExtra">osVersionExtra</a></code> | <code>java.lang.String</code> | Extra version value following the operating system semantic version. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.overall">overall</a></code> | <code>java.lang.String</code> | Overall ZTA score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.path">path</a></code> | <code>java.lang.String</code> | The path to the file. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.requireAll">requireAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if all drives must be encrypted. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | The risk level from Tanium. Available values: `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.running">running</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Checks if the application should be running. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.score">score</a></code> | <code>java.lang.Number</code> | A value between 0-100 assigned to devices set by the 3rd party posture provider for custom device posture integrations. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.sensorConfig">sensorConfig</a></code> | <code>java.lang.String</code> | Sensor signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.sha256">sha256</a></code> | <code>java.lang.String</code> | The sha256 hash of the file. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.state">state</a></code> | <code>java.lang.String</code> | The host’s current online status from Crowdstrike. Available values: `online`, `offline`, `unknown`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | The thumbprint of the file certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.totalScore">totalScore</a></code> | <code>java.lang.Number</code> | The total score from Tanium. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.version">version</a></code> | <code>java.lang.String</code> | The operating system semantic version. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.versionOperator">versionOperator</a></code> | <code>java.lang.String</code> | The version comparison operator for Crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`. |

---

##### `activeThreats`<sup>Optional</sup> <a name="activeThreats" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.activeThreats"></a>

```java
public java.lang.Number getActiveThreats();
```

- *Type:* java.lang.Number

The number of active threats from SentinelOne.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#active_threats ZeroTrustDevicePostureRule#active_threats}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

The UUID of a Cloudflare managed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#certificate_id ZeroTrustDevicePostureRule#certificate_id}

---

##### `checkDisks`<sup>Optional</sup> <a name="checkDisks" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.checkDisks"></a>

```java
public java.util.List<java.lang.String> getCheckDisks();
```

- *Type:* java.util.List<java.lang.String>

Specific volume(s) to check for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#check_disks ZeroTrustDevicePostureRule#check_disks}

---

##### `checkPrivateKey`<sup>Optional</sup> <a name="checkPrivateKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.checkPrivateKey"></a>

```java
public java.lang.Object getCheckPrivateKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Confirm the certificate was not imported from another device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#check_private_key ZeroTrustDevicePostureRule#check_private_key}

---

##### `cn`<sup>Optional</sup> <a name="cn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.cn"></a>

```java
public java.lang.String getCn();
```

- *Type:* java.lang.String

The common name for a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#cn ZeroTrustDevicePostureRule#cn}

---

##### `complianceStatus`<sup>Optional</sup> <a name="complianceStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.complianceStatus"></a>

```java
public java.lang.String getComplianceStatus();
```

- *Type:* java.lang.String

The workspace one or intune device compliance status.

`compliant` and `noncompliant` are values supported by both providers. `unknown`, `conflict`, `error`, `ingraceperiod` values are only supported by intune. Available values: `compliant`, `noncompliant`, `unknown`, `conflict`, `error`, `ingraceperiod`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#compliance_status ZeroTrustDevicePostureRule#compliance_status}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

The workspace one or intune connection id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#connection_id ZeroTrustDevicePostureRule#connection_id}

---

##### `countOperator`<sup>Optional</sup> <a name="countOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.countOperator"></a>

```java
public java.lang.String getCountOperator();
```

- *Type:* java.lang.String

The count comparison operator for kolide. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#count_operator ZeroTrustDevicePostureRule#count_operator}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain that the client must join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#domain ZeroTrustDevicePostureRule#domain}

---

##### `eidLastSeen`<sup>Optional</sup> <a name="eidLastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.eidLastSeen"></a>

```java
public java.lang.String getEidLastSeen();
```

- *Type:* java.lang.String

The time a device last seen in Tanium.

Must be in the format `1h` or `30m`. Valid units are `d`, `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#eid_last_seen ZeroTrustDevicePostureRule#eid_last_seen}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the firewall must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#enabled ZeroTrustDevicePostureRule#enabled}

---

##### `exists`<sup>Optional</sup> <a name="exists" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.exists"></a>

```java
public java.lang.Object getExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Checks if the file should exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#exists ZeroTrustDevicePostureRule#exists}

---

##### `extendedKeyUsage`<sup>Optional</sup> <a name="extendedKeyUsage" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.extendedKeyUsage"></a>

```java
public java.util.List<java.lang.String> getExtendedKeyUsage();
```

- *Type:* java.util.List<java.lang.String>

List of values indicating purposes for which the certificate public key can be used. Available values: `clientAuth`, `emailProtection`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#extended_key_usage ZeroTrustDevicePostureRule#extended_key_usage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The Teams List id. Required for `serial_number` and `unique_client_id` rule types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#id ZeroTrustDevicePostureRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infected`<sup>Optional</sup> <a name="infected" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.infected"></a>

```java
public java.lang.Object getInfected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if SentinelOne device is infected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#infected ZeroTrustDevicePostureRule#infected}

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if SentinelOne device is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#is_active ZeroTrustDevicePostureRule#is_active}

---

##### `issueCount`<sup>Optional</sup> <a name="issueCount" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.issueCount"></a>

```java
public java.lang.String getIssueCount();
```

- *Type:* java.lang.String

The number of issues for kolide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#issue_count ZeroTrustDevicePostureRule#issue_count}

---

##### `lastSeen`<sup>Optional</sup> <a name="lastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.lastSeen"></a>

```java
public java.lang.String getLastSeen();
```

- *Type:* java.lang.String

The duration of time that the host was last seen from Crowdstrike.

Must be in the format `1h` or `30m`. Valid units are `d`, `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#last_seen ZeroTrustDevicePostureRule#last_seen}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.locations"></a>

```java
public java.lang.Object getLocations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>>

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#locations ZeroTrustDevicePostureRule#locations}

---

##### `networkStatus`<sup>Optional</sup> <a name="networkStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.networkStatus"></a>

```java
public java.lang.String getNetworkStatus();
```

- *Type:* java.lang.String

The network status from SentinelOne. Available values: `connected`, `disconnected`, `disconnecting`, `connecting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#network_status ZeroTrustDevicePostureRule#network_status}

---

##### `operationalState`<sup>Optional</sup> <a name="operationalState" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operationalState"></a>

```java
public java.lang.String getOperationalState();
```

- *Type:* java.lang.String

The current operational state of a SentinelOne Agent. Available values: `na`, `partially_disabled`, `auto_fully_disabled`, `fully_disabled`, `auto_partially_disabled`, `disabled_error`, `db_corruption`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#operational_state ZeroTrustDevicePostureRule#operational_state}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#operator ZeroTrustDevicePostureRule#operator}

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

OS signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#os ZeroTrustDevicePostureRule#os}

---

##### `osDistroName`<sup>Optional</sup> <a name="osDistroName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osDistroName"></a>

```java
public java.lang.String getOsDistroName();
```

- *Type:* java.lang.String

The operating system excluding version information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#os_distro_name ZeroTrustDevicePostureRule#os_distro_name}

---

##### `osDistroRevision`<sup>Optional</sup> <a name="osDistroRevision" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osDistroRevision"></a>

```java
public java.lang.String getOsDistroRevision();
```

- *Type:* java.lang.String

The operating system version excluding OS name information or release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#os_distro_revision ZeroTrustDevicePostureRule#os_distro_revision}

---

##### `osVersionExtra`<sup>Optional</sup> <a name="osVersionExtra" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osVersionExtra"></a>

```java
public java.lang.String getOsVersionExtra();
```

- *Type:* java.lang.String

Extra version value following the operating system semantic version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#os_version_extra ZeroTrustDevicePostureRule#os_version_extra}

---

##### `overall`<sup>Optional</sup> <a name="overall" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.overall"></a>

```java
public java.lang.String getOverall();
```

- *Type:* java.lang.String

Overall ZTA score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#overall ZeroTrustDevicePostureRule#overall}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#path ZeroTrustDevicePostureRule#path}

---

##### `requireAll`<sup>Optional</sup> <a name="requireAll" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.requireAll"></a>

```java
public java.lang.Object getRequireAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if all drives must be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#require_all ZeroTrustDevicePostureRule#require_all}

---

##### `riskLevel`<sup>Optional</sup> <a name="riskLevel" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

The risk level from Tanium. Available values: `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#risk_level ZeroTrustDevicePostureRule#risk_level}

---

##### `running`<sup>Optional</sup> <a name="running" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.running"></a>

```java
public java.lang.Object getRunning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Checks if the application should be running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#running ZeroTrustDevicePostureRule#running}

---

##### `score`<sup>Optional</sup> <a name="score" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.score"></a>

```java
public java.lang.Number getScore();
```

- *Type:* java.lang.Number

A value between 0-100 assigned to devices set by the 3rd party posture provider for custom device posture integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#score ZeroTrustDevicePostureRule#score}

---

##### `sensorConfig`<sup>Optional</sup> <a name="sensorConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.sensorConfig"></a>

```java
public java.lang.String getSensorConfig();
```

- *Type:* java.lang.String

Sensor signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#sensor_config ZeroTrustDevicePostureRule#sensor_config}

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

The sha256 hash of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#sha256 ZeroTrustDevicePostureRule#sha256}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The host’s current online status from Crowdstrike. Available values: `online`, `offline`, `unknown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#state ZeroTrustDevicePostureRule#state}

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

The thumbprint of the file certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#thumbprint ZeroTrustDevicePostureRule#thumbprint}

---

##### `totalScore`<sup>Optional</sup> <a name="totalScore" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.totalScore"></a>

```java
public java.lang.Number getTotalScore();
```

- *Type:* java.lang.Number

The total score from Tanium.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#total_score ZeroTrustDevicePostureRule#total_score}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The operating system semantic version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#version ZeroTrustDevicePostureRule#version}

---

##### `versionOperator`<sup>Optional</sup> <a name="versionOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.versionOperator"></a>

```java
public java.lang.String getVersionOperator();
```

- *Type:* java.lang.String

The version comparison operator for Crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#version_operator ZeroTrustDevicePostureRule#version_operator}

---

### ZeroTrustDevicePostureRuleInputLocations <a name="ZeroTrustDevicePostureRuleInputLocations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleInputLocations;

ZeroTrustDevicePostureRuleInputLocations.builder()
//  .paths(java.util.List<java.lang.String>)
//  .trustStores(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | List of paths to check for client certificate rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.property.trustStores">trustStores</a></code> | <code>java.util.List<java.lang.String></code> | List of trust stores to check for client certificate rule. Available values: `system`, `user`. |

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

List of paths to check for client certificate rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#paths ZeroTrustDevicePostureRule#paths}

---

##### `trustStores`<sup>Optional</sup> <a name="trustStores" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.property.trustStores"></a>

```java
public java.util.List<java.lang.String> getTrustStores();
```

- *Type:* java.util.List<java.lang.String>

List of trust stores to check for client certificate rule. Available values: `system`, `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#trust_stores ZeroTrustDevicePostureRule#trust_stores}

---

### ZeroTrustDevicePostureRuleMatch <a name="ZeroTrustDevicePostureRuleMatch" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleMatch;

ZeroTrustDevicePostureRuleMatch.builder()
//  .platform(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch.property.platform">platform</a></code> | <code>java.lang.String</code> | The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`. |

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_device_posture_rule#platform ZeroTrustDevicePostureRule#platform}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDevicePostureRuleInputList <a name="ZeroTrustDevicePostureRuleInputList" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleInputList;

new ZeroTrustDevicePostureRuleInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.get"></a>

```java
public ZeroTrustDevicePostureRuleInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>>

---


### ZeroTrustDevicePostureRuleInputLocationsList <a name="ZeroTrustDevicePostureRuleInputLocationsList" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleInputLocationsList;

new ZeroTrustDevicePostureRuleInputLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.get"></a>

```java
public ZeroTrustDevicePostureRuleInputLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>>

---


### ZeroTrustDevicePostureRuleInputLocationsOutputReference <a name="ZeroTrustDevicePostureRuleInputLocationsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleInputLocationsOutputReference;

new ZeroTrustDevicePostureRuleInputLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resetPaths">resetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resetTrustStores">resetTrustStores</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPaths` <a name="resetPaths" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resetPaths"></a>

```java
public void resetPaths()
```

##### `resetTrustStores` <a name="resetTrustStores" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resetTrustStores"></a>

```java
public void resetTrustStores()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.pathsInput">pathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStoresInput">trustStoresInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores">trustStores</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.pathsInput"></a>

```java
public java.util.List<java.lang.String> getPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustStoresInput`<sup>Optional</sup> <a name="trustStoresInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStoresInput"></a>

```java
public java.util.List<java.lang.String> getTrustStoresInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustStores`<sup>Required</sup> <a name="trustStores" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores"></a>

```java
public java.util.List<java.lang.String> getTrustStores();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>

---


### ZeroTrustDevicePostureRuleInputOutputReference <a name="ZeroTrustDevicePostureRuleInputOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleInputOutputReference;

new ZeroTrustDevicePostureRuleInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.putLocations">putLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetActiveThreats">resetActiveThreats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCheckDisks">resetCheckDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCheckPrivateKey">resetCheckPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCn">resetCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetComplianceStatus">resetComplianceStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCountOperator">resetCountOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetEidLastSeen">resetEidLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetExists">resetExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetExtendedKeyUsage">resetExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetInfected">resetInfected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetIssueCount">resetIssueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetLastSeen">resetLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetNetworkStatus">resetNetworkStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperationalState">resetOperationalState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOs">resetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsDistroName">resetOsDistroName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsDistroRevision">resetOsDistroRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsVersionExtra">resetOsVersionExtra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOverall">resetOverall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRequireAll">resetRequireAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRiskLevel">resetRiskLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRunning">resetRunning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetScore">resetScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSensorConfig">resetSensorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSha256">resetSha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetThumbprint">resetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetTotalScore">resetTotalScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetVersionOperator">resetVersionOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocations` <a name="putLocations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.putLocations"></a>

```java
public void putLocations(IResolvable OR java.util.List<ZeroTrustDevicePostureRuleInputLocations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.putLocations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>>

---

##### `resetActiveThreats` <a name="resetActiveThreats" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetActiveThreats"></a>

```java
public void resetActiveThreats()
```

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetCheckDisks` <a name="resetCheckDisks" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCheckDisks"></a>

```java
public void resetCheckDisks()
```

##### `resetCheckPrivateKey` <a name="resetCheckPrivateKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCheckPrivateKey"></a>

```java
public void resetCheckPrivateKey()
```

##### `resetCn` <a name="resetCn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCn"></a>

```java
public void resetCn()
```

##### `resetComplianceStatus` <a name="resetComplianceStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetComplianceStatus"></a>

```java
public void resetComplianceStatus()
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetConnectionId"></a>

```java
public void resetConnectionId()
```

##### `resetCountOperator` <a name="resetCountOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCountOperator"></a>

```java
public void resetCountOperator()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetEidLastSeen` <a name="resetEidLastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetEidLastSeen"></a>

```java
public void resetEidLastSeen()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExists` <a name="resetExists" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetExists"></a>

```java
public void resetExists()
```

##### `resetExtendedKeyUsage` <a name="resetExtendedKeyUsage" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetExtendedKeyUsage"></a>

```java
public void resetExtendedKeyUsage()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetInfected` <a name="resetInfected" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetInfected"></a>

```java
public void resetInfected()
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetIsActive"></a>

```java
public void resetIsActive()
```

##### `resetIssueCount` <a name="resetIssueCount" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetIssueCount"></a>

```java
public void resetIssueCount()
```

##### `resetLastSeen` <a name="resetLastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetLastSeen"></a>

```java
public void resetLastSeen()
```

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetLocations"></a>

```java
public void resetLocations()
```

##### `resetNetworkStatus` <a name="resetNetworkStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetNetworkStatus"></a>

```java
public void resetNetworkStatus()
```

##### `resetOperationalState` <a name="resetOperationalState" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperationalState"></a>

```java
public void resetOperationalState()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetOs` <a name="resetOs" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOs"></a>

```java
public void resetOs()
```

##### `resetOsDistroName` <a name="resetOsDistroName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsDistroName"></a>

```java
public void resetOsDistroName()
```

##### `resetOsDistroRevision` <a name="resetOsDistroRevision" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsDistroRevision"></a>

```java
public void resetOsDistroRevision()
```

##### `resetOsVersionExtra` <a name="resetOsVersionExtra" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsVersionExtra"></a>

```java
public void resetOsVersionExtra()
```

##### `resetOverall` <a name="resetOverall" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOverall"></a>

```java
public void resetOverall()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRequireAll` <a name="resetRequireAll" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRequireAll"></a>

```java
public void resetRequireAll()
```

##### `resetRiskLevel` <a name="resetRiskLevel" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRiskLevel"></a>

```java
public void resetRiskLevel()
```

##### `resetRunning` <a name="resetRunning" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRunning"></a>

```java
public void resetRunning()
```

##### `resetScore` <a name="resetScore" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetScore"></a>

```java
public void resetScore()
```

##### `resetSensorConfig` <a name="resetSensorConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSensorConfig"></a>

```java
public void resetSensorConfig()
```

##### `resetSha256` <a name="resetSha256" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSha256"></a>

```java
public void resetSha256()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetThumbprint` <a name="resetThumbprint" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetThumbprint"></a>

```java
public void resetThumbprint()
```

##### `resetTotalScore` <a name="resetTotalScore" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetTotalScore"></a>

```java
public void resetTotalScore()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetVersionOperator` <a name="resetVersionOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetVersionOperator"></a>

```java
public void resetVersionOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList">ZeroTrustDevicePostureRuleInputLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.activeThreatsInput">activeThreatsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkDisksInput">checkDisksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKeyInput">checkPrivateKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.cnInput">cnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatusInput">complianceStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.countOperatorInput">countOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeenInput">eidLastSeenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.existsInput">existsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsageInput">extendedKeyUsageInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.infectedInput">infectedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.isActiveInput">isActiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.issueCountInput">issueCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.lastSeenInput">lastSeenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.locationsInput">locationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.networkStatusInput">networkStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operationalStateInput">operationalStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroNameInput">osDistroNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevisionInput">osDistroRevisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osInput">osInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtraInput">osVersionExtraInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.overallInput">overallInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.requireAllInput">requireAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.riskLevelInput">riskLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.runningInput">runningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.scoreInput">scoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfigInput">sensorConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sha256Input">sha256Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.totalScoreInput">totalScoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionOperatorInput">versionOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats">activeThreats</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks">checkDisks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey">checkPrivateKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.cn">cn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus">complianceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.countOperator">countOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen">eidLastSeen</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.exists">exists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.infected">infected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.issueCount">issueCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen">lastSeen</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus">networkStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operationalState">operationalState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.os">os</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName">osDistroName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision">osDistroRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra">osVersionExtra</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.overall">overall</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.requireAll">requireAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.running">running</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.score">score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig">sensorConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.totalScore">totalScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator">versionOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.locations"></a>

```java
public ZeroTrustDevicePostureRuleInputLocationsList getLocations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsList">ZeroTrustDevicePostureRuleInputLocationsList</a>

---

##### `activeThreatsInput`<sup>Optional</sup> <a name="activeThreatsInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.activeThreatsInput"></a>

```java
public java.lang.Number getActiveThreatsInput();
```

- *Type:* java.lang.Number

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `checkDisksInput`<sup>Optional</sup> <a name="checkDisksInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkDisksInput"></a>

```java
public java.util.List<java.lang.String> getCheckDisksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `checkPrivateKeyInput`<sup>Optional</sup> <a name="checkPrivateKeyInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKeyInput"></a>

```java
public java.lang.Object getCheckPrivateKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cnInput`<sup>Optional</sup> <a name="cnInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.cnInput"></a>

```java
public java.lang.String getCnInput();
```

- *Type:* java.lang.String

---

##### `complianceStatusInput`<sup>Optional</sup> <a name="complianceStatusInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatusInput"></a>

```java
public java.lang.String getComplianceStatusInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `countOperatorInput`<sup>Optional</sup> <a name="countOperatorInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.countOperatorInput"></a>

```java
public java.lang.String getCountOperatorInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `eidLastSeenInput`<sup>Optional</sup> <a name="eidLastSeenInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeenInput"></a>

```java
public java.lang.String getEidLastSeenInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `existsInput`<sup>Optional</sup> <a name="existsInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.existsInput"></a>

```java
public java.lang.Object getExistsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extendedKeyUsageInput`<sup>Optional</sup> <a name="extendedKeyUsageInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsageInput"></a>

```java
public java.util.List<java.lang.String> getExtendedKeyUsageInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `infectedInput`<sup>Optional</sup> <a name="infectedInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.infectedInput"></a>

```java
public java.lang.Object getInfectedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.isActiveInput"></a>

```java
public java.lang.Object getIsActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issueCountInput`<sup>Optional</sup> <a name="issueCountInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.issueCountInput"></a>

```java
public java.lang.String getIssueCountInput();
```

- *Type:* java.lang.String

---

##### `lastSeenInput`<sup>Optional</sup> <a name="lastSeenInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.lastSeenInput"></a>

```java
public java.lang.String getLastSeenInput();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.locationsInput"></a>

```java
public java.lang.Object getLocationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>>

---

##### `networkStatusInput`<sup>Optional</sup> <a name="networkStatusInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.networkStatusInput"></a>

```java
public java.lang.String getNetworkStatusInput();
```

- *Type:* java.lang.String

---

##### `operationalStateInput`<sup>Optional</sup> <a name="operationalStateInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operationalStateInput"></a>

```java
public java.lang.String getOperationalStateInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `osDistroNameInput`<sup>Optional</sup> <a name="osDistroNameInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroNameInput"></a>

```java
public java.lang.String getOsDistroNameInput();
```

- *Type:* java.lang.String

---

##### `osDistroRevisionInput`<sup>Optional</sup> <a name="osDistroRevisionInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevisionInput"></a>

```java
public java.lang.String getOsDistroRevisionInput();
```

- *Type:* java.lang.String

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osInput"></a>

```java
public java.lang.String getOsInput();
```

- *Type:* java.lang.String

---

##### `osVersionExtraInput`<sup>Optional</sup> <a name="osVersionExtraInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtraInput"></a>

```java
public java.lang.String getOsVersionExtraInput();
```

- *Type:* java.lang.String

---

##### `overallInput`<sup>Optional</sup> <a name="overallInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.overallInput"></a>

```java
public java.lang.String getOverallInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `requireAllInput`<sup>Optional</sup> <a name="requireAllInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.requireAllInput"></a>

```java
public java.lang.Object getRequireAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `riskLevelInput`<sup>Optional</sup> <a name="riskLevelInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.riskLevelInput"></a>

```java
public java.lang.String getRiskLevelInput();
```

- *Type:* java.lang.String

---

##### `runningInput`<sup>Optional</sup> <a name="runningInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.runningInput"></a>

```java
public java.lang.Object getRunningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scoreInput`<sup>Optional</sup> <a name="scoreInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.scoreInput"></a>

```java
public java.lang.Number getScoreInput();
```

- *Type:* java.lang.Number

---

##### `sensorConfigInput`<sup>Optional</sup> <a name="sensorConfigInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfigInput"></a>

```java
public java.lang.String getSensorConfigInput();
```

- *Type:* java.lang.String

---

##### `sha256Input`<sup>Optional</sup> <a name="sha256Input" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sha256Input"></a>

```java
public java.lang.String getSha256Input();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.thumbprintInput"></a>

```java
public java.lang.String getThumbprintInput();
```

- *Type:* java.lang.String

---

##### `totalScoreInput`<sup>Optional</sup> <a name="totalScoreInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.totalScoreInput"></a>

```java
public java.lang.Number getTotalScoreInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `versionOperatorInput`<sup>Optional</sup> <a name="versionOperatorInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionOperatorInput"></a>

```java
public java.lang.String getVersionOperatorInput();
```

- *Type:* java.lang.String

---

##### `activeThreats`<sup>Required</sup> <a name="activeThreats" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats"></a>

```java
public java.lang.Number getActiveThreats();
```

- *Type:* java.lang.Number

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `checkDisks`<sup>Required</sup> <a name="checkDisks" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks"></a>

```java
public java.util.List<java.lang.String> getCheckDisks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `checkPrivateKey`<sup>Required</sup> <a name="checkPrivateKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey"></a>

```java
public java.lang.Object getCheckPrivateKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cn`<sup>Required</sup> <a name="cn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.cn"></a>

```java
public java.lang.String getCn();
```

- *Type:* java.lang.String

---

##### `complianceStatus`<sup>Required</sup> <a name="complianceStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus"></a>

```java
public java.lang.String getComplianceStatus();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `countOperator`<sup>Required</sup> <a name="countOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.countOperator"></a>

```java
public java.lang.String getCountOperator();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `eidLastSeen`<sup>Required</sup> <a name="eidLastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen"></a>

```java
public java.lang.String getEidLastSeen();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.exists"></a>

```java
public java.lang.Object getExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage"></a>

```java
public java.util.List<java.lang.String> getExtendedKeyUsage();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `infected`<sup>Required</sup> <a name="infected" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.infected"></a>

```java
public java.lang.Object getInfected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issueCount`<sup>Required</sup> <a name="issueCount" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.issueCount"></a>

```java
public java.lang.String getIssueCount();
```

- *Type:* java.lang.String

---

##### `lastSeen`<sup>Required</sup> <a name="lastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen"></a>

```java
public java.lang.String getLastSeen();
```

- *Type:* java.lang.String

---

##### `networkStatus`<sup>Required</sup> <a name="networkStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus"></a>

```java
public java.lang.String getNetworkStatus();
```

- *Type:* java.lang.String

---

##### `operationalState`<sup>Required</sup> <a name="operationalState" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operationalState"></a>

```java
public java.lang.String getOperationalState();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

---

##### `osDistroName`<sup>Required</sup> <a name="osDistroName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName"></a>

```java
public java.lang.String getOsDistroName();
```

- *Type:* java.lang.String

---

##### `osDistroRevision`<sup>Required</sup> <a name="osDistroRevision" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision"></a>

```java
public java.lang.String getOsDistroRevision();
```

- *Type:* java.lang.String

---

##### `osVersionExtra`<sup>Required</sup> <a name="osVersionExtra" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra"></a>

```java
public java.lang.String getOsVersionExtra();
```

- *Type:* java.lang.String

---

##### `overall`<sup>Required</sup> <a name="overall" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.overall"></a>

```java
public java.lang.String getOverall();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `requireAll`<sup>Required</sup> <a name="requireAll" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.requireAll"></a>

```java
public java.lang.Object getRequireAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.running"></a>

```java
public java.lang.Object getRunning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.score"></a>

```java
public java.lang.Number getScore();
```

- *Type:* java.lang.Number

---

##### `sensorConfig`<sup>Required</sup> <a name="sensorConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig"></a>

```java
public java.lang.String getSensorConfig();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `totalScore`<sup>Required</sup> <a name="totalScore" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.totalScore"></a>

```java
public java.lang.Number getTotalScore();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `versionOperator`<sup>Required</sup> <a name="versionOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator"></a>

```java
public java.lang.String getVersionOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>

---


### ZeroTrustDevicePostureRuleMatchList <a name="ZeroTrustDevicePostureRuleMatchList" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleMatchList;

new ZeroTrustDevicePostureRuleMatchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.get"></a>

```java
public ZeroTrustDevicePostureRuleMatchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>>

---


### ZeroTrustDevicePostureRuleMatchOutputReference <a name="ZeroTrustDevicePostureRuleMatchOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_device_posture_rule.ZeroTrustDevicePostureRuleMatchOutputReference;

new ZeroTrustDevicePostureRuleMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resetPlatform"></a>

```java
public void resetPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch">ZeroTrustDevicePostureRuleMatch</a>

---



