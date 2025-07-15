# `schemaValidationSchemas` Submodule <a name="`schemaValidationSchemas` Submodule" id="@cdktf/provider-cloudflare.schemaValidationSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchemaValidationSchemas <a name="SchemaValidationSchemas" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas cloudflare_schema_validation_schemas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.schema_validation_schemas.SchemaValidationSchemas;

SchemaValidationSchemas.Builder.create(Construct scope, java.lang.String id)
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
    .kind(java.lang.String)
    .name(java.lang.String)
    .source(java.lang.String)
    .validationEnabled(java.lang.Boolean)
    .validationEnabled(IResolvable)
    .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | The kind of the schema Available values: "openapi_v3". |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the schema. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | The raw schema, e.g., the OpenAPI schema, either as JSON or YAML. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | An indicator if this schema is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

The kind of the schema Available values: "openapi_v3".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#kind SchemaValidationSchemas#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A human-readable name for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#name SchemaValidationSchemas#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.source"></a>

- *Type:* java.lang.String

The raw schema, e.g., the OpenAPI schema, either as JSON or YAML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#source SchemaValidationSchemas#source}

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.validationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

An indicator if this schema is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#validation_enabled SchemaValidationSchemas#validation_enabled}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#zone_id SchemaValidationSchemas#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SchemaValidationSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.schema_validation_schemas.SchemaValidationSchemas;

SchemaValidationSchemas.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.schema_validation_schemas.SchemaValidationSchemas;

SchemaValidationSchemas.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.schema_validation_schemas.SchemaValidationSchemas;

SchemaValidationSchemas.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.schema_validation_schemas.SchemaValidationSchemas;

SchemaValidationSchemas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SchemaValidationSchemas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SchemaValidationSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SchemaValidationSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SchemaValidationSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SchemaValidationSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.validationEnabledInput">validationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `validationEnabledInput`<sup>Optional</sup> <a name="validationEnabledInput" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.validationEnabledInput"></a>

```java
public java.lang.Object getValidationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.validationEnabled"></a>

```java
public java.lang.Object getValidationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemas.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SchemaValidationSchemasConfig <a name="SchemaValidationSchemasConfig" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.schema_validation_schemas.SchemaValidationSchemasConfig;

SchemaValidationSchemasConfig.builder()
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
    .kind(java.lang.String)
    .name(java.lang.String)
    .source(java.lang.String)
    .validationEnabled(java.lang.Boolean)
    .validationEnabled(IResolvable)
    .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | The kind of the schema Available values: "openapi_v3". |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the schema. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.source">source</a></code> | <code>java.lang.String</code> | The raw schema, e.g., the OpenAPI schema, either as JSON or YAML. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | An indicator if this schema is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The kind of the schema Available values: "openapi_v3".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#kind SchemaValidationSchemas#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-readable name for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#name SchemaValidationSchemas#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The raw schema, e.g., the OpenAPI schema, either as JSON or YAML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#source SchemaValidationSchemas#source}

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.validationEnabled"></a>

```java
public java.lang.Object getValidationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

An indicator if this schema is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#validation_enabled SchemaValidationSchemas#validation_enabled}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.schemaValidationSchemas.SchemaValidationSchemasConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/schema_validation_schemas#zone_id SchemaValidationSchemas#zone_id}

---



