# `magicNetworkMonitoringRule` Submodule <a name="`magicNetworkMonitoringRule` Submodule" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicNetworkMonitoringRule <a name="MagicNetworkMonitoringRule" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_network_monitoring_rule.MagicNetworkMonitoringRule;

MagicNetworkMonitoringRule.Builder.create(Construct scope, java.lang.String id)
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
//  .automaticAdvertisement(java.lang.Boolean)
//  .automaticAdvertisement(IResolvable)
//  .bandwidth(java.lang.Number)
//  .duration(java.lang.String)
//  .packetThreshold(java.lang.Number)
//  .prefixes(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.automaticAdvertisement">automaticAdvertisement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>java.lang.Number</code> | The number of bits per second for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.duration">duration</a></code> | <code>java.lang.String</code> | The amount of time that the rule threshold must be exceeded to send an alert notification. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.packetThreshold">packetThreshold</a></code> | <code>java.lang.Number</code> | The number of packets per second for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.prefixes">prefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the rule.

Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#name MagicNetworkMonitoringRule#name}

---

##### `automaticAdvertisement`<sup>Optional</sup> <a name="automaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.automaticAdvertisement"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered.

Only available for users of Magic Transit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#automatic_advertisement MagicNetworkMonitoringRule#automatic_advertisement}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.bandwidth"></a>

- *Type:* java.lang.Number

The number of bits per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#bandwidth MagicNetworkMonitoringRule#bandwidth}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.duration"></a>

- *Type:* java.lang.String

The amount of time that the rule threshold must be exceeded to send an alert notification.

The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
Available values: "1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#duration MagicNetworkMonitoringRule#duration}

---

##### `packetThreshold`<sup>Optional</sup> <a name="packetThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.packetThreshold"></a>

- *Type:* java.lang.Number

The number of packets per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#packet_threshold MagicNetworkMonitoringRule#packet_threshold}

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.prefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetAutomaticAdvertisement">resetAutomaticAdvertisement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold">resetPacketThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixes">resetPrefixes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutomaticAdvertisement` <a name="resetAutomaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetAutomaticAdvertisement"></a>

```java
public void resetAutomaticAdvertisement()
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidth"></a>

```java
public void resetBandwidth()
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetPacketThreshold` <a name="resetPacketThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold"></a>

```java
public void resetPacketThreshold()
```

##### `resetPrefixes` <a name="resetPrefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixes"></a>

```java
public void resetPrefixes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_network_monitoring_rule.MagicNetworkMonitoringRule;

MagicNetworkMonitoringRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_network_monitoring_rule.MagicNetworkMonitoringRule;

MagicNetworkMonitoringRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_network_monitoring_rule.MagicNetworkMonitoringRule;

MagicNetworkMonitoringRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_network_monitoring_rule.MagicNetworkMonitoringRule;

MagicNetworkMonitoringRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MagicNetworkMonitoringRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MagicNetworkMonitoringRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MagicNetworkMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold">bandwidthThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity">zscoreSensitivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget">zscoreTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput">automaticAdvertisementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthInput">bandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput">packetThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput">prefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement">automaticAdvertisement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidth">bandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold">packetThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes">prefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidthThreshold`<sup>Required</sup> <a name="bandwidthThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold"></a>

```java
public java.lang.Number getBandwidthThreshold();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zscoreSensitivity`<sup>Required</sup> <a name="zscoreSensitivity" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity"></a>

```java
public java.lang.String getZscoreSensitivity();
```

- *Type:* java.lang.String

---

##### `zscoreTarget`<sup>Required</sup> <a name="zscoreTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget"></a>

```java
public java.lang.String getZscoreTarget();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `automaticAdvertisementInput`<sup>Optional</sup> <a name="automaticAdvertisementInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput"></a>

```java
public java.lang.Object getAutomaticAdvertisementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthInput"></a>

```java
public java.lang.Number getBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `packetThresholdInput`<sup>Optional</sup> <a name="packetThresholdInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput"></a>

```java
public java.lang.Number getPacketThresholdInput();
```

- *Type:* java.lang.Number

---

##### `prefixesInput`<sup>Optional</sup> <a name="prefixesInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput"></a>

```java
public java.util.List<java.lang.String> getPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `automaticAdvertisement`<sup>Required</sup> <a name="automaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement"></a>

```java
public java.lang.Object getAutomaticAdvertisement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidth"></a>

```java
public java.lang.Number getBandwidth();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packetThreshold`<sup>Required</sup> <a name="packetThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold"></a>

```java
public java.lang.Number getPacketThreshold();
```

- *Type:* java.lang.Number

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes"></a>

```java
public java.util.List<java.lang.String> getPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MagicNetworkMonitoringRuleConfig <a name="MagicNetworkMonitoringRuleConfig" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_network_monitoring_rule.MagicNetworkMonitoringRuleConfig;

MagicNetworkMonitoringRuleConfig.builder()
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
//  .automaticAdvertisement(java.lang.Boolean)
//  .automaticAdvertisement(IResolvable)
//  .bandwidth(java.lang.Number)
//  .duration(java.lang.String)
//  .packetThreshold(java.lang.Number)
//  .prefixes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement">automaticAdvertisement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidth">bandwidth</a></code> | <code>java.lang.Number</code> | The number of bits per second for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration">duration</a></code> | <code>java.lang.String</code> | The amount of time that the rule threshold must be exceeded to send an alert notification. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold">packetThreshold</a></code> | <code>java.lang.Number</code> | The number of packets per second for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes">prefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the rule.

Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#name MagicNetworkMonitoringRule#name}

---

##### `automaticAdvertisement`<sup>Optional</sup> <a name="automaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement"></a>

```java
public java.lang.Object getAutomaticAdvertisement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered.

Only available for users of Magic Transit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#automatic_advertisement MagicNetworkMonitoringRule#automatic_advertisement}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidth"></a>

```java
public java.lang.Number getBandwidth();
```

- *Type:* java.lang.Number

The number of bits per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#bandwidth MagicNetworkMonitoringRule#bandwidth}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The amount of time that the rule threshold must be exceeded to send an alert notification.

The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
Available values: "1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#duration MagicNetworkMonitoringRule#duration}

---

##### `packetThreshold`<sup>Optional</sup> <a name="packetThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold"></a>

```java
public java.lang.Number getPacketThreshold();
```

- *Type:* java.lang.Number

The number of packets per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#packet_threshold MagicNetworkMonitoringRule#packet_threshold}

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes"></a>

```java
public java.util.List<java.lang.String> getPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}.

---



