# `infrastructureAccessTarget` Submodule <a name="`infrastructureAccessTarget` Submodule" id="@cdktf/provider-cloudflare.infrastructureAccessTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InfrastructureAccessTarget <a name="InfrastructureAccessTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target cloudflare_infrastructure_access_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTarget;

InfrastructureAccessTarget.Builder.create(Construct scope, java.lang.String id)
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
    .ip(InfrastructureAccessTargetIp)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#account_id InfrastructureAccessTarget#account_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

A non-unique field that refers to a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#hostname InfrastructureAccessTarget#hostname}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.ip"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#ip InfrastructureAccessTarget#ip}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.putIp">putIp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIp` <a name="putIp" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.putIp"></a>

```java
public void putIp(InfrastructureAccessTargetIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InfrastructureAccessTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTarget;

InfrastructureAccessTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTarget;

InfrastructureAccessTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTarget;

InfrastructureAccessTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTarget;

InfrastructureAccessTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),InfrastructureAccessTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a InfrastructureAccessTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the InfrastructureAccessTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing InfrastructureAccessTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the InfrastructureAccessTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference">InfrastructureAccessTargetIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ipInput">ipInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ip"></a>

```java
public InfrastructureAccessTargetIpOutputReference getIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference">InfrastructureAccessTargetIpOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ipInput"></a>

```java
public java.lang.Object getIpInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InfrastructureAccessTargetConfig <a name="InfrastructureAccessTargetConfig" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTargetConfig;

InfrastructureAccessTargetConfig.builder()
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
    .ip(InfrastructureAccessTargetIp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#account_id InfrastructureAccessTarget#account_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

A non-unique field that refers to a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#hostname InfrastructureAccessTarget#hostname}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.ip"></a>

```java
public InfrastructureAccessTargetIp getIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#ip InfrastructureAccessTarget#ip}

---

### InfrastructureAccessTargetIp <a name="InfrastructureAccessTargetIp" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTargetIp;

InfrastructureAccessTargetIp.builder()
//  .ipv4(InfrastructureAccessTargetIpIpv4)
//  .ipv6(InfrastructureAccessTargetIpIpv6)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a></code> | The target's IPv6 address. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv4"></a>

```java
public InfrastructureAccessTargetIpIpv4 getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#ipv4 InfrastructureAccessTarget#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv6"></a>

```java
public InfrastructureAccessTargetIpIpv6 getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#ipv6 InfrastructureAccessTarget#ipv6}

---

### InfrastructureAccessTargetIpIpv4 <a name="InfrastructureAccessTargetIpIpv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTargetIpIpv4;

InfrastructureAccessTargetIpIpv4.builder()
    .ipAddr(java.lang.String)
    .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#ip_addr InfrastructureAccessTarget#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#virtual_network_id InfrastructureAccessTarget#virtual_network_id}

---

### InfrastructureAccessTargetIpIpv6 <a name="InfrastructureAccessTargetIpIpv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTargetIpIpv6;

InfrastructureAccessTargetIpIpv6.builder()
    .ipAddr(java.lang.String)
    .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#ip_addr InfrastructureAccessTarget#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/infrastructure_access_target#virtual_network_id InfrastructureAccessTarget#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### InfrastructureAccessTargetIpIpv4OutputReference <a name="InfrastructureAccessTargetIpIpv4OutputReference" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTargetIpIpv4OutputReference;

new InfrastructureAccessTargetIpIpv4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput"></a>

```java
public java.lang.String getIpAddrInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

---


### InfrastructureAccessTargetIpIpv6OutputReference <a name="InfrastructureAccessTargetIpIpv6OutputReference" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTargetIpIpv6OutputReference;

new InfrastructureAccessTargetIpIpv6OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput"></a>

```java
public java.lang.String getIpAddrInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

---


### InfrastructureAccessTargetIpOutputReference <a name="InfrastructureAccessTargetIpOutputReference" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.infrastructure_access_target.InfrastructureAccessTargetIpOutputReference;

new InfrastructureAccessTargetIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv4"></a>

```java
public void putIpv4(InfrastructureAccessTargetIpIpv4 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv6"></a>

```java
public void putIpv6(InfrastructureAccessTargetIpIpv6 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

---

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference">InfrastructureAccessTargetIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference">InfrastructureAccessTargetIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4"></a>

```java
public InfrastructureAccessTargetIpIpv4OutputReference getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference">InfrastructureAccessTargetIpIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6"></a>

```java
public InfrastructureAccessTargetIpIpv6OutputReference getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference">InfrastructureAccessTargetIpIpv6OutputReference</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4Input"></a>

```java
public java.lang.Object getIpv4Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6Input"></a>

```java
public java.lang.Object getIpv6Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

---



