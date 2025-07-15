# `zoneCacheVariants` Submodule <a name="`zoneCacheVariants` Submodule" id="@cdktf/provider-cloudflare.zoneCacheVariants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneCacheVariants <a name="ZoneCacheVariants" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_cache_variants.ZoneCacheVariants;

ZoneCacheVariants.Builder.create(Construct scope, java.lang.String id)
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
    .value(ZoneCacheVariantsValue)
    .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.value">value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | Value of the zone setting. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

Value of the zone setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#value ZoneCacheVariants#value}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue">putValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putValue` <a name="putValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue"></a>

```java
public void putValue(ZoneCacheVariantsValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_cache_variants.ZoneCacheVariants;

ZoneCacheVariants.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_cache_variants.ZoneCacheVariants;

ZoneCacheVariants.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_cache_variants.ZoneCacheVariants;

ZoneCacheVariants.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_cache_variants.ZoneCacheVariants;

ZoneCacheVariants.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZoneCacheVariants.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZoneCacheVariants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZoneCacheVariants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZoneCacheVariants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable">editable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value">value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput">valueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `editable`<sup>Required</sup> <a name="editable" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable"></a>

```java
public IResolvable getEditable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value"></a>

```java
public ZoneCacheVariantsValueOutputReference getValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneCacheVariantsConfig <a name="ZoneCacheVariantsConfig" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_cache_variants.ZoneCacheVariantsConfig;

ZoneCacheVariantsConfig.builder()
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
    .value(ZoneCacheVariantsValue)
    .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value">value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | Value of the zone setting. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value"></a>

```java
public ZoneCacheVariantsValue getValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

Value of the zone setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#value ZoneCacheVariants#value}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}

---

### ZoneCacheVariantsValue <a name="ZoneCacheVariantsValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_cache_variants.ZoneCacheVariantsValue;

ZoneCacheVariantsValue.builder()
//  .avif(java.util.List<java.lang.String>)
//  .bmp(java.util.List<java.lang.String>)
//  .gif(java.util.List<java.lang.String>)
//  .jp2(java.util.List<java.lang.String>)
//  .jpeg(java.util.List<java.lang.String>)
//  .jpg(java.util.List<java.lang.String>)
//  .jpg2(java.util.List<java.lang.String>)
//  .png(java.util.List<java.lang.String>)
//  .tif(java.util.List<java.lang.String>)
//  .tiff(java.util.List<java.lang.String>)
//  .webp(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif">avif</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for avif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp">bmp</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for bmp. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif">gif</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for gif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2">jp2</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for jp2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg">jpeg</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for jpeg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg">jpg</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for jpg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2">jpg2</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for jpg2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png">png</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for png. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif">tif</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for tif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff">tiff</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for tiff. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp">webp</a></code> | <code>java.util.List<java.lang.String></code> | List of strings with the MIME types of all the variants that should be served for webp. |

---

##### `avif`<sup>Optional</sup> <a name="avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif"></a>

```java
public java.util.List<java.lang.String> getAvif();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for avif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#avif ZoneCacheVariants#avif}

---

##### `bmp`<sup>Optional</sup> <a name="bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp"></a>

```java
public java.util.List<java.lang.String> getBmp();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for bmp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#bmp ZoneCacheVariants#bmp}

---

##### `gif`<sup>Optional</sup> <a name="gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif"></a>

```java
public java.util.List<java.lang.String> getGif();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for gif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#gif ZoneCacheVariants#gif}

---

##### `jp2`<sup>Optional</sup> <a name="jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2"></a>

```java
public java.util.List<java.lang.String> getJp2();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for jp2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#jp2 ZoneCacheVariants#jp2}

---

##### `jpeg`<sup>Optional</sup> <a name="jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg"></a>

```java
public java.util.List<java.lang.String> getJpeg();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for jpeg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}

---

##### `jpg`<sup>Optional</sup> <a name="jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg"></a>

```java
public java.util.List<java.lang.String> getJpg();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for jpg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#jpg ZoneCacheVariants#jpg}

---

##### `jpg2`<sup>Optional</sup> <a name="jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2"></a>

```java
public java.util.List<java.lang.String> getJpg2();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for jpg2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}

---

##### `png`<sup>Optional</sup> <a name="png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png"></a>

```java
public java.util.List<java.lang.String> getPng();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#png ZoneCacheVariants#png}

---

##### `tif`<sup>Optional</sup> <a name="tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif"></a>

```java
public java.util.List<java.lang.String> getTif();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for tif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#tif ZoneCacheVariants#tif}

---

##### `tiff`<sup>Optional</sup> <a name="tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff"></a>

```java
public java.util.List<java.lang.String> getTiff();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for tiff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#tiff ZoneCacheVariants#tiff}

---

##### `webp`<sup>Optional</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp"></a>

```java
public java.util.List<java.lang.String> getWebp();
```

- *Type:* java.util.List<java.lang.String>

List of strings with the MIME types of all the variants that should be served for webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_cache_variants#webp ZoneCacheVariants#webp}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneCacheVariantsValueOutputReference <a name="ZoneCacheVariantsValueOutputReference" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_cache_variants.ZoneCacheVariantsValueOutputReference;

new ZoneCacheVariantsValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif">resetAvif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp">resetBmp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif">resetGif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2">resetJp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg">resetJpeg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg">resetJpg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2">resetJpg2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng">resetPng</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif">resetTif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff">resetTiff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp">resetWebp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvif` <a name="resetAvif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif"></a>

```java
public void resetAvif()
```

##### `resetBmp` <a name="resetBmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp"></a>

```java
public void resetBmp()
```

##### `resetGif` <a name="resetGif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif"></a>

```java
public void resetGif()
```

##### `resetJp2` <a name="resetJp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2"></a>

```java
public void resetJp2()
```

##### `resetJpeg` <a name="resetJpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg"></a>

```java
public void resetJpeg()
```

##### `resetJpg` <a name="resetJpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg"></a>

```java
public void resetJpg()
```

##### `resetJpg2` <a name="resetJpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2"></a>

```java
public void resetJpg2()
```

##### `resetPng` <a name="resetPng" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng"></a>

```java
public void resetPng()
```

##### `resetTif` <a name="resetTif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif"></a>

```java
public void resetTif()
```

##### `resetTiff` <a name="resetTiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff"></a>

```java
public void resetTiff()
```

##### `resetWebp` <a name="resetWebp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp"></a>

```java
public void resetWebp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput">avifInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput">bmpInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput">gifInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input">jp2Input</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput">jpegInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input">jpg2Input</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput">jpgInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput">pngInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput">tiffInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput">tifInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput">webpInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif">avif</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp">bmp</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif">gif</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2">jp2</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg">jpeg</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg">jpg</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2">jpg2</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png">png</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif">tif</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff">tiff</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp">webp</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avifInput`<sup>Optional</sup> <a name="avifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput"></a>

```java
public java.util.List<java.lang.String> getAvifInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bmpInput`<sup>Optional</sup> <a name="bmpInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput"></a>

```java
public java.util.List<java.lang.String> getBmpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gifInput`<sup>Optional</sup> <a name="gifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput"></a>

```java
public java.util.List<java.lang.String> getGifInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jp2Input`<sup>Optional</sup> <a name="jp2Input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input"></a>

```java
public java.util.List<java.lang.String> getJp2Input();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jpegInput`<sup>Optional</sup> <a name="jpegInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput"></a>

```java
public java.util.List<java.lang.String> getJpegInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jpg2Input`<sup>Optional</sup> <a name="jpg2Input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input"></a>

```java
public java.util.List<java.lang.String> getJpg2Input();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jpgInput`<sup>Optional</sup> <a name="jpgInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput"></a>

```java
public java.util.List<java.lang.String> getJpgInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pngInput`<sup>Optional</sup> <a name="pngInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput"></a>

```java
public java.util.List<java.lang.String> getPngInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tiffInput`<sup>Optional</sup> <a name="tiffInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput"></a>

```java
public java.util.List<java.lang.String> getTiffInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tifInput`<sup>Optional</sup> <a name="tifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput"></a>

```java
public java.util.List<java.lang.String> getTifInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `webpInput`<sup>Optional</sup> <a name="webpInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput"></a>

```java
public java.util.List<java.lang.String> getWebpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `avif`<sup>Required</sup> <a name="avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif"></a>

```java
public java.util.List<java.lang.String> getAvif();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bmp`<sup>Required</sup> <a name="bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp"></a>

```java
public java.util.List<java.lang.String> getBmp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gif`<sup>Required</sup> <a name="gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif"></a>

```java
public java.util.List<java.lang.String> getGif();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jp2`<sup>Required</sup> <a name="jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2"></a>

```java
public java.util.List<java.lang.String> getJp2();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jpeg`<sup>Required</sup> <a name="jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg"></a>

```java
public java.util.List<java.lang.String> getJpeg();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jpg`<sup>Required</sup> <a name="jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg"></a>

```java
public java.util.List<java.lang.String> getJpg();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jpg2`<sup>Required</sup> <a name="jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2"></a>

```java
public java.util.List<java.lang.String> getJpg2();
```

- *Type:* java.util.List<java.lang.String>

---

##### `png`<sup>Required</sup> <a name="png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png"></a>

```java
public java.util.List<java.lang.String> getPng();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tif`<sup>Required</sup> <a name="tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif"></a>

```java
public java.util.List<java.lang.String> getTif();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tiff`<sup>Required</sup> <a name="tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff"></a>

```java
public java.util.List<java.lang.String> getTiff();
```

- *Type:* java.util.List<java.lang.String>

---

##### `webp`<sup>Required</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp"></a>

```java
public java.util.List<java.lang.String> getWebp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

---



