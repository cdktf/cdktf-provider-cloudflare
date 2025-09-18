# `authenticatedOriginPulls` Submodule <a name="`authenticatedOriginPulls` Submodule" id="@cdktf/provider-cloudflare.authenticatedOriginPulls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticatedOriginPulls <a name="AuthenticatedOriginPulls" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.authenticated_origin_pulls.AuthenticatedOriginPulls;

AuthenticatedOriginPulls.Builder.create(Construct scope, java.lang.String id)
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
    .config(IResolvable)
    .config(java.util.List<AuthenticatedOriginPullsConfigA>)
    .zoneId(java.lang.String)
//  .hostname(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#config AuthenticatedOriginPulls#config}. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname on the origin for which the client certificate uploaded will be used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.config"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#config AuthenticatedOriginPulls#config}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#zone_id AuthenticatedOriginPulls#zone_id}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

The hostname on the origin for which the client certificate uploaded will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#hostname AuthenticatedOriginPulls#hostname}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.putConfig"></a>

```java
public void putConfig(IResolvable OR java.util.List<AuthenticatedOriginPullsConfigA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.putConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetHostname"></a>

```java
public void resetHostname()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.authenticated_origin_pulls.AuthenticatedOriginPulls;

AuthenticatedOriginPulls.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.authenticated_origin_pulls.AuthenticatedOriginPulls;

AuthenticatedOriginPulls.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.authenticated_origin_pulls.AuthenticatedOriginPulls;

AuthenticatedOriginPulls.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.authenticated_origin_pulls.AuthenticatedOriginPulls;

AuthenticatedOriginPulls.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AuthenticatedOriginPulls.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AuthenticatedOriginPulls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AuthenticatedOriginPulls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AuthenticatedOriginPulls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certId">certId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certStatus">certStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUpdatedAt">certUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUploadedOn">certUploadedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList">AuthenticatedOriginPullsConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certId`<sup>Required</sup> <a name="certId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certId"></a>

```java
public java.lang.String getCertId();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certStatus`<sup>Required</sup> <a name="certStatus" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certStatus"></a>

```java
public java.lang.String getCertStatus();
```

- *Type:* java.lang.String

---

##### `certUpdatedAt`<sup>Required</sup> <a name="certUpdatedAt" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUpdatedAt"></a>

```java
public java.lang.String getCertUpdatedAt();
```

- *Type:* java.lang.String

---

##### `certUploadedOn`<sup>Required</sup> <a name="certUploadedOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUploadedOn"></a>

```java
public java.lang.String getCertUploadedOn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.config"></a>

```java
public AuthenticatedOriginPullsConfigAList getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList">AuthenticatedOriginPullsConfigAList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatedOriginPullsConfig <a name="AuthenticatedOriginPullsConfig" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.authenticated_origin_pulls.AuthenticatedOriginPullsConfig;

AuthenticatedOriginPullsConfig.builder()
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
    .config(IResolvable)
    .config(java.util.List<AuthenticatedOriginPullsConfigA>)
    .zoneId(java.lang.String)
//  .hostname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#config AuthenticatedOriginPulls#config}. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname on the origin for which the client certificate uploaded will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.config"></a>

```java
public java.lang.Object getConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#config AuthenticatedOriginPulls#config}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#zone_id AuthenticatedOriginPulls#zone_id}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The hostname on the origin for which the client certificate uploaded will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#hostname AuthenticatedOriginPulls#hostname}

---

### AuthenticatedOriginPullsConfigA <a name="AuthenticatedOriginPullsConfigA" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.authenticated_origin_pulls.AuthenticatedOriginPullsConfigA;

AuthenticatedOriginPullsConfigA.builder()
//  .certId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .hostname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.certId">certId</a></code> | <code>java.lang.String</code> | Certificate identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname on the origin for which the client certificate uploaded will be used. |

---

##### `certId`<sup>Optional</sup> <a name="certId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.certId"></a>

```java
public java.lang.String getCertId();
```

- *Type:* java.lang.String

Certificate identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#cert_id AuthenticatedOriginPulls#cert_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#enabled AuthenticatedOriginPulls#enabled}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The hostname on the origin for which the client certificate uploaded will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/authenticated_origin_pulls#hostname AuthenticatedOriginPulls#hostname}

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticatedOriginPullsConfigAList <a name="AuthenticatedOriginPullsConfigAList" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.authenticated_origin_pulls.AuthenticatedOriginPullsConfigAList;

new AuthenticatedOriginPullsConfigAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.get"></a>

```java
public AuthenticatedOriginPullsConfigAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>>

---


### AuthenticatedOriginPullsConfigAOutputReference <a name="AuthenticatedOriginPullsConfigAOutputReference" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.authenticated_origin_pulls.AuthenticatedOriginPullsConfigAOutputReference;

new AuthenticatedOriginPullsConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetCertId">resetCertId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertId` <a name="resetCertId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetCertId"></a>

```java
public void resetCertId()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetHostname"></a>

```java
public void resetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certIdInput">certIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certId">certId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certIdInput`<sup>Optional</sup> <a name="certIdInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certIdInput"></a>

```java
public java.lang.String getCertIdInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `certId`<sup>Required</sup> <a name="certId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certId"></a>

```java
public java.lang.String getCertId();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>

---



