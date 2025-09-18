# `zeroTrustAccessInfrastructureTarget` Submodule <a name="`zeroTrustAccessInfrastructureTarget` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessInfrastructureTarget <a name="ZeroTrustAccessInfrastructureTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTarget;

ZeroTrustAccessInfrastructureTarget.Builder.create(Construct scope, java.lang.String id)
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
    .hostname(java.lang.String)
    .ip(ZeroTrustAccessInfrastructureTargetIp)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#account_id ZeroTrustAccessInfrastructureTarget#account_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

A non-unique field that refers to a target.

Case insensitive, maximum
length of 255 characters, supports the use of special characters dash
and period, does not support spaces, and must start and end with an
alphanumeric character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#hostname ZeroTrustAccessInfrastructureTarget#hostname}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.ip"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#ip ZeroTrustAccessInfrastructureTarget#ip}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp">putIp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIp` <a name="putIp" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp"></a>

```java
public void putIp(ZeroTrustAccessInfrastructureTargetIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTarget;

ZeroTrustAccessInfrastructureTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTarget;

ZeroTrustAccessInfrastructureTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTarget;

ZeroTrustAccessInfrastructureTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTarget;

ZeroTrustAccessInfrastructureTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustAccessInfrastructureTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustAccessInfrastructureTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustAccessInfrastructureTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessInfrastructureTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference">ZeroTrustAccessInfrastructureTargetIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ipInput">ipInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ip"></a>

```java
public ZeroTrustAccessInfrastructureTargetIpOutputReference getIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference">ZeroTrustAccessInfrastructureTargetIpOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ipInput"></a>

```java
public java.lang.Object getIpInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessInfrastructureTargetConfig <a name="ZeroTrustAccessInfrastructureTargetConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTargetConfig;

ZeroTrustAccessInfrastructureTargetConfig.builder()
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
    .hostname(java.lang.String)
    .ip(ZeroTrustAccessInfrastructureTargetIp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#account_id ZeroTrustAccessInfrastructureTarget#account_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

A non-unique field that refers to a target.

Case insensitive, maximum
length of 255 characters, supports the use of special characters dash
and period, does not support spaces, and must start and end with an
alphanumeric character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#hostname ZeroTrustAccessInfrastructureTarget#hostname}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.ip"></a>

```java
public ZeroTrustAccessInfrastructureTargetIp getIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#ip ZeroTrustAccessInfrastructureTarget#ip}

---

### ZeroTrustAccessInfrastructureTargetIp <a name="ZeroTrustAccessInfrastructureTargetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTargetIp;

ZeroTrustAccessInfrastructureTargetIp.builder()
//  .ipv4(ZeroTrustAccessInfrastructureTargetIpIpv4)
//  .ipv6(ZeroTrustAccessInfrastructureTargetIpIpv6)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a></code> | The target's IPv6 address. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv4"></a>

```java
public ZeroTrustAccessInfrastructureTargetIpIpv4 getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#ipv4 ZeroTrustAccessInfrastructureTarget#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv6"></a>

```java
public ZeroTrustAccessInfrastructureTargetIpIpv6 getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#ipv6 ZeroTrustAccessInfrastructureTarget#ipv6}

---

### ZeroTrustAccessInfrastructureTargetIpIpv4 <a name="ZeroTrustAccessInfrastructureTargetIpIpv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTargetIpIpv4;

ZeroTrustAccessInfrastructureTargetIpIpv4.builder()
//  .ipAddr(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used. |

---

##### `ipAddr`<sup>Optional</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}

---

### ZeroTrustAccessInfrastructureTargetIpIpv6 <a name="ZeroTrustAccessInfrastructureTargetIpIpv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTargetIpIpv6;

ZeroTrustAccessInfrastructureTargetIpIpv6.builder()
//  .ipAddr(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used. |

---

##### `ipAddr`<sup>Optional</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference <a name="ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference;

new ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetIpAddr">resetIpAddr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddr` <a name="resetIpAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetIpAddr"></a>

```java
public void resetIpAddr()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddrInput"></a>

```java
public java.lang.String getIpAddrInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>

---


### ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference <a name="ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference;

new ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetIpAddr">resetIpAddr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddr` <a name="resetIpAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetIpAddr"></a>

```java
public void resetIpAddr()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddrInput"></a>

```java
public java.lang.String getIpAddrInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>

---


### ZeroTrustAccessInfrastructureTargetIpOutputReference <a name="ZeroTrustAccessInfrastructureTargetIpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_infrastructure_target.ZeroTrustAccessInfrastructureTargetIpOutputReference;

new ZeroTrustAccessInfrastructureTargetIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4"></a>

```java
public void putIpv4(ZeroTrustAccessInfrastructureTargetIpIpv4 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6"></a>

```java
public void putIpv6(ZeroTrustAccessInfrastructureTargetIpIpv6 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>

---

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4"></a>

```java
public ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6"></a>

```java
public ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4Input"></a>

```java
public java.lang.Object getIpv4Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6Input"></a>

```java
public java.lang.Object getIpv6Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>

---



