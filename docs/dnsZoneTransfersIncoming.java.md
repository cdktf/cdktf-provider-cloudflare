# `dnsZoneTransfersIncoming` Submodule <a name="`dnsZoneTransfersIncoming` Submodule" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneTransfersIncoming <a name="DnsZoneTransfersIncoming" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_zone_transfers_incoming.DnsZoneTransfersIncoming;

DnsZoneTransfersIncoming.Builder.create(Construct scope, java.lang.String id)
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
    .autoRefreshSeconds(java.lang.Number)
    .name(java.lang.String)
    .peers(java.util.List<java.lang.String>)
    .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.autoRefreshSeconds">autoRefreshSeconds</a></code> | <code>java.lang.Number</code> | How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Zone name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.peers">peers</a></code> | <code>java.util.List<java.lang.String></code> | A list of peer tags. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoRefreshSeconds`<sup>Required</sup> <a name="autoRefreshSeconds" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.autoRefreshSeconds"></a>

- *Type:* java.lang.Number

How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#auto_refresh_seconds DnsZoneTransfersIncoming#auto_refresh_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#name DnsZoneTransfersIncoming#name}

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.peers"></a>

- *Type:* java.util.List<java.lang.String>

A list of peer tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#peers DnsZoneTransfersIncoming#peers}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_zone_transfers_incoming.DnsZoneTransfersIncoming;

DnsZoneTransfersIncoming.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_zone_transfers_incoming.DnsZoneTransfersIncoming;

DnsZoneTransfersIncoming.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_zone_transfers_incoming.DnsZoneTransfersIncoming;

DnsZoneTransfersIncoming.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_zone_transfers_incoming.DnsZoneTransfersIncoming;

DnsZoneTransfersIncoming.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsZoneTransfersIncoming.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsZoneTransfersIncoming to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsZoneTransfersIncoming that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DnsZoneTransfersIncoming to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.checkedTime">checkedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.modifiedTime">modifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.soaSerial">soaSerial</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSecondsInput">autoRefreshSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peersInput">peersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSeconds">autoRefreshSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peers">peers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `checkedTime`<sup>Required</sup> <a name="checkedTime" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.checkedTime"></a>

```java
public java.lang.String getCheckedTime();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedTime`<sup>Required</sup> <a name="modifiedTime" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.modifiedTime"></a>

```java
public java.lang.String getModifiedTime();
```

- *Type:* java.lang.String

---

##### `soaSerial`<sup>Required</sup> <a name="soaSerial" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.soaSerial"></a>

```java
public java.lang.Number getSoaSerial();
```

- *Type:* java.lang.Number

---

##### `autoRefreshSecondsInput`<sup>Optional</sup> <a name="autoRefreshSecondsInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSecondsInput"></a>

```java
public java.lang.Number getAutoRefreshSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peersInput`<sup>Optional</sup> <a name="peersInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peersInput"></a>

```java
public java.util.List<java.lang.String> getPeersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `autoRefreshSeconds`<sup>Required</sup> <a name="autoRefreshSeconds" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSeconds"></a>

```java
public java.lang.Number getAutoRefreshSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peers"></a>

```java
public java.util.List<java.lang.String> getPeers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneTransfersIncomingConfig <a name="DnsZoneTransfersIncomingConfig" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_zone_transfers_incoming.DnsZoneTransfersIncomingConfig;

DnsZoneTransfersIncomingConfig.builder()
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
    .autoRefreshSeconds(java.lang.Number)
    .name(java.lang.String)
    .peers(java.util.List<java.lang.String>)
    .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.autoRefreshSeconds">autoRefreshSeconds</a></code> | <code>java.lang.Number</code> | How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Zone name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.peers">peers</a></code> | <code>java.util.List<java.lang.String></code> | A list of peer tags. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoRefreshSeconds`<sup>Required</sup> <a name="autoRefreshSeconds" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.autoRefreshSeconds"></a>

```java
public java.lang.Number getAutoRefreshSeconds();
```

- *Type:* java.lang.Number

How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#auto_refresh_seconds DnsZoneTransfersIncoming#auto_refresh_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#name DnsZoneTransfersIncoming#name}

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.peers"></a>

```java
public java.util.List<java.lang.String> getPeers();
```

- *Type:* java.util.List<java.lang.String>

A list of peer tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#peers DnsZoneTransfersIncoming#peers}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}.

---



