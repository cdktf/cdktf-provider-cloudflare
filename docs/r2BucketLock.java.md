# `r2BucketLock` Submodule <a name="`r2BucketLock` Submodule" id="@cdktf/provider-cloudflare.r2BucketLock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### R2BucketLock <a name="R2BucketLock" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock cloudflare_r2_bucket_lock}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLock;

R2BucketLock.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .bucketName(java.lang.String)
//  .jurisdiction(java.lang.String)
//  .rules(IResolvable|java.util.List<R2BucketLockRules>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Name of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | Jurisdiction of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#rules R2BucketLock#rules}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#account_id R2BucketLock#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#bucket_name R2BucketLock#bucket_name}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.jurisdiction"></a>

- *Type:* java.lang.String

Jurisdiction of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#jurisdiction R2BucketLock#jurisdiction}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#rules R2BucketLock#rules}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.resetJurisdiction">resetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.resetRules">resetRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<R2BucketLockRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>>

---

##### `resetJurisdiction` <a name="resetJurisdiction" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.resetJurisdiction"></a>

```java
public void resetJurisdiction()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.resetRules"></a>

```java
public void resetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a R2BucketLock resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLock;

R2BucketLock.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLock;

R2BucketLock.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLock;

R2BucketLock.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLock;

R2BucketLock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),R2BucketLock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a R2BucketLock resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the R2BucketLock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing R2BucketLock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the R2BucketLock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList">R2BucketLockRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.jurisdictionInput">jurisdictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.rules"></a>

```java
public R2BucketLockRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList">R2BucketLockRulesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `jurisdictionInput`<sup>Optional</sup> <a name="jurisdictionInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.jurisdictionInput"></a>

```java
public java.lang.String getJurisdictionInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.rulesInput"></a>

```java
public IResolvable|java.util.List<R2BucketLockRules> getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLock.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### R2BucketLockConfig <a name="R2BucketLockConfig" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLockConfig;

R2BucketLockConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .bucketName(java.lang.String)
//  .jurisdiction(java.lang.String)
//  .rules(IResolvable|java.util.List<R2BucketLockRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Name of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | Jurisdiction of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#rules R2BucketLock#rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#account_id R2BucketLock#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#bucket_name R2BucketLock#bucket_name}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

Jurisdiction of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#jurisdiction R2BucketLock#jurisdiction}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockConfig.property.rules"></a>

```java
public IResolvable|java.util.List<R2BucketLockRules> getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#rules R2BucketLock#rules}.

---

### R2BucketLockRules <a name="R2BucketLockRules" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLockRules;

R2BucketLockRules.builder()
    .condition(R2BucketLockRulesCondition)
    .enabled(java.lang.Boolean|IResolvable)
    .id(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition">R2BucketLockRulesCondition</a></code> | Condition to apply a lock rule to an object for how long in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not this rule is in effect. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for this rule. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Rule will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules.property.condition"></a>

```java
public R2BucketLockRulesCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition">R2BucketLockRulesCondition</a>

Condition to apply a lock rule to an object for how long in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#condition R2BucketLock#condition}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not this rule is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#enabled R2BucketLock#enabled}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#id R2BucketLock#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Rule will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#prefix R2BucketLock#prefix}

---

### R2BucketLockRulesCondition <a name="R2BucketLockRulesCondition" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLockRulesCondition;

R2BucketLockRulesCondition.builder()
    .type(java.lang.String)
//  .date(java.lang.String)
//  .maxAgeSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "Age", "Date", "Indefinite". |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition.property.date">date</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#date R2BucketLock#date}. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#max_age_seconds R2BucketLock#max_age_seconds}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "Age", "Date", "Indefinite".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#type R2BucketLock#type}

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#date R2BucketLock#date}.

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/r2_bucket_lock#max_age_seconds R2BucketLock#max_age_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### R2BucketLockRulesConditionOutputReference <a name="R2BucketLockRulesConditionOutputReference" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLockRulesConditionOutputReference;

new R2BucketLockRulesConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDate` <a name="resetDate" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.resetDate"></a>

```java
public void resetDate()
```

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.resetMaxAgeSeconds"></a>

```java
public void resetMaxAgeSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.dateInput">dateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.date">date</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition">R2BucketLockRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.dateInput"></a>

```java
public java.lang.String getDateInput();
```

- *Type:* java.lang.String

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.maxAgeSecondsInput"></a>

```java
public java.lang.Number getMaxAgeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLockRulesCondition getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition">R2BucketLockRulesCondition</a>

---


### R2BucketLockRulesList <a name="R2BucketLockRulesList" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLockRulesList;

new R2BucketLockRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.get"></a>

```java
public R2BucketLockRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<R2BucketLockRules> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>>

---


### R2BucketLockRulesOutputReference <a name="R2BucketLockRulesOutputReference" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.r2_bucket_lock.R2BucketLockRulesOutputReference;

new R2BucketLockRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.putCondition"></a>

```java
public void putCondition(R2BucketLockRulesCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition">R2BucketLockRulesCondition</a>

---

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference">R2BucketLockRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition">R2BucketLockRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.condition"></a>

```java
public R2BucketLockRulesConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesConditionOutputReference">R2BucketLockRulesConditionOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.conditionInput"></a>

```java
public IResolvable|R2BucketLockRulesCondition getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesCondition">R2BucketLockRulesCondition</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLockRules getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.r2BucketLock.R2BucketLockRules">R2BucketLockRules</a>

---



