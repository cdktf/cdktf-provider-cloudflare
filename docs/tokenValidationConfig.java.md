# `tokenValidationConfig` Submodule <a name="`tokenValidationConfig` Submodule" id="@cdktf/provider-cloudflare.tokenValidationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenValidationConfig <a name="TokenValidationConfig" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config cloudflare_token_validation_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfig;

TokenValidationConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .credentials(TokenValidationConfigCredentials)
    .description(java.lang.String)
    .title(java.lang.String)
    .tokenSources(java.util.List<java.lang.String>)
    .tokenType(java.lang.String)
    .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#credentials TokenValidationConfig#credentials}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#description TokenValidationConfig#description}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#title TokenValidationConfig#title}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.tokenSources">tokenSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#token_sources TokenValidationConfig#token_sources}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | Available values: "JWT". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.credentials"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#credentials TokenValidationConfig#credentials}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#description TokenValidationConfig#description}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#title TokenValidationConfig#title}.

---

##### `tokenSources`<sup>Required</sup> <a name="tokenSources" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.tokenSources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#token_sources TokenValidationConfig#token_sources}.

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

Available values: "JWT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#token_type TokenValidationConfig#token_type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#zone_id TokenValidationConfig#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.putCredentials">putCredentials</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.putCredentials"></a>

```java
public void putCredentials(TokenValidationConfigCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TokenValidationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfig;

TokenValidationConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfig;

TokenValidationConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfig;

TokenValidationConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfig;

TokenValidationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TokenValidationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TokenValidationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TokenValidationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TokenValidationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TokenValidationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference">TokenValidationConfigCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.credentialsInput">credentialsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenSourcesInput">tokenSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenSources">tokenSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.credentials"></a>

```java
public TokenValidationConfigCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference">TokenValidationConfigCredentialsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.credentialsInput"></a>

```java
public IResolvable|TokenValidationConfigCredentials getCredentialsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `tokenSourcesInput`<sup>Optional</sup> <a name="tokenSourcesInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenSourcesInput"></a>

```java
public java.util.List<java.lang.String> getTokenSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `tokenSources`<sup>Required</sup> <a name="tokenSources" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenSources"></a>

```java
public java.util.List<java.lang.String> getTokenSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TokenValidationConfigConfig <a name="TokenValidationConfigConfig" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfigConfig;

TokenValidationConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .credentials(TokenValidationConfigCredentials)
    .description(java.lang.String)
    .title(java.lang.String)
    .tokenSources(java.util.List<java.lang.String>)
    .tokenType(java.lang.String)
    .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#credentials TokenValidationConfig#credentials}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#description TokenValidationConfig#description}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#title TokenValidationConfig#title}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.tokenSources">tokenSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#token_sources TokenValidationConfig#token_sources}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | Available values: "JWT". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.credentials"></a>

```java
public TokenValidationConfigCredentials getCredentials();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#credentials TokenValidationConfig#credentials}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#description TokenValidationConfig#description}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#title TokenValidationConfig#title}.

---

##### `tokenSources`<sup>Required</sup> <a name="tokenSources" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.tokenSources"></a>

```java
public java.util.List<java.lang.String> getTokenSources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#token_sources TokenValidationConfig#token_sources}.

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

Available values: "JWT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#token_type TokenValidationConfig#token_type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#zone_id TokenValidationConfig#zone_id}

---

### TokenValidationConfigCredentials <a name="TokenValidationConfigCredentials" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfigCredentials;

TokenValidationConfigCredentials.builder()
    .keys(IResolvable|java.util.List<TokenValidationConfigCredentialsKeys>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials.property.keys">keys</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#keys TokenValidationConfig#keys}. |

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials.property.keys"></a>

```java
public IResolvable|java.util.List<TokenValidationConfigCredentialsKeys> getKeys();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#keys TokenValidationConfig#keys}.

---

### TokenValidationConfigCredentialsKeys <a name="TokenValidationConfigCredentialsKeys" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfigCredentialsKeys;

TokenValidationConfigCredentialsKeys.builder()
    .alg(java.lang.String)
    .kid(java.lang.String)
    .kty(java.lang.String)
//  .crv(java.lang.String)
//  .e(java.lang.String)
//  .n(java.lang.String)
//  .x(java.lang.String)
//  .y(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.alg">alg</a></code> | <code>java.lang.String</code> | Algorithm Available values: "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.kid">kid</a></code> | <code>java.lang.String</code> | Key ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.kty">kty</a></code> | <code>java.lang.String</code> | Key Type Available values: "RSA", "EC". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.crv">crv</a></code> | <code>java.lang.String</code> | Curve Available values: "P-256", "P-384". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.e">e</a></code> | <code>java.lang.String</code> | RSA exponent. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.n">n</a></code> | <code>java.lang.String</code> | RSA modulus. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.x">x</a></code> | <code>java.lang.String</code> | X EC coordinate. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.y">y</a></code> | <code>java.lang.String</code> | Y EC coordinate. |

---

##### `alg`<sup>Required</sup> <a name="alg" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.alg"></a>

```java
public java.lang.String getAlg();
```

- *Type:* java.lang.String

Algorithm Available values: "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#alg TokenValidationConfig#alg}

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#kid TokenValidationConfig#kid}

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.kty"></a>

```java
public java.lang.String getKty();
```

- *Type:* java.lang.String

Key Type Available values: "RSA", "EC".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#kty TokenValidationConfig#kty}

---

##### `crv`<sup>Optional</sup> <a name="crv" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.crv"></a>

```java
public java.lang.String getCrv();
```

- *Type:* java.lang.String

Curve Available values: "P-256", "P-384".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#crv TokenValidationConfig#crv}

---

##### `e`<sup>Optional</sup> <a name="e" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

RSA exponent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#e TokenValidationConfig#e}

---

##### `n`<sup>Optional</sup> <a name="n" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

RSA modulus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#n TokenValidationConfig#n}

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.x"></a>

```java
public java.lang.String getX();
```

- *Type:* java.lang.String

X EC coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#x TokenValidationConfig#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.y"></a>

```java
public java.lang.String getY();
```

- *Type:* java.lang.String

Y EC coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_config#y TokenValidationConfig#y}

---

## Classes <a name="Classes" id="Classes"></a>

### TokenValidationConfigCredentialsKeysList <a name="TokenValidationConfigCredentialsKeysList" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfigCredentialsKeysList;

new TokenValidationConfigCredentialsKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.get"></a>

```java
public TokenValidationConfigCredentialsKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TokenValidationConfigCredentialsKeys> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>>

---


### TokenValidationConfigCredentialsKeysOutputReference <a name="TokenValidationConfigCredentialsKeysOutputReference" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfigCredentialsKeysOutputReference;

new TokenValidationConfigCredentialsKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetCrv">resetCrv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetE">resetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetN">resetN</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetX">resetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetY">resetY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrv` <a name="resetCrv" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetCrv"></a>

```java
public void resetCrv()
```

##### `resetE` <a name="resetE" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetE"></a>

```java
public void resetE()
```

##### `resetN` <a name="resetN" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetN"></a>

```java
public void resetN()
```

##### `resetX` <a name="resetX" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetX"></a>

```java
public void resetX()
```

##### `resetY` <a name="resetY" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetY"></a>

```java
public void resetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.algInput">algInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.crvInput">crvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.eInput">eInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kidInput">kidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.ktyInput">ktyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.nInput">nInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.xInput">xInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.yInput">yInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.alg">alg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.crv">crv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.e">e</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kid">kid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kty">kty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.n">n</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.x">x</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.y">y</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algInput`<sup>Optional</sup> <a name="algInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.algInput"></a>

```java
public java.lang.String getAlgInput();
```

- *Type:* java.lang.String

---

##### `crvInput`<sup>Optional</sup> <a name="crvInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.crvInput"></a>

```java
public java.lang.String getCrvInput();
```

- *Type:* java.lang.String

---

##### `eInput`<sup>Optional</sup> <a name="eInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.eInput"></a>

```java
public java.lang.String getEInput();
```

- *Type:* java.lang.String

---

##### `kidInput`<sup>Optional</sup> <a name="kidInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kidInput"></a>

```java
public java.lang.String getKidInput();
```

- *Type:* java.lang.String

---

##### `ktyInput`<sup>Optional</sup> <a name="ktyInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.ktyInput"></a>

```java
public java.lang.String getKtyInput();
```

- *Type:* java.lang.String

---

##### `nInput`<sup>Optional</sup> <a name="nInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.nInput"></a>

```java
public java.lang.String getNInput();
```

- *Type:* java.lang.String

---

##### `xInput`<sup>Optional</sup> <a name="xInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.xInput"></a>

```java
public java.lang.String getXInput();
```

- *Type:* java.lang.String

---

##### `yInput`<sup>Optional</sup> <a name="yInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.yInput"></a>

```java
public java.lang.String getYInput();
```

- *Type:* java.lang.String

---

##### `alg`<sup>Required</sup> <a name="alg" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.alg"></a>

```java
public java.lang.String getAlg();
```

- *Type:* java.lang.String

---

##### `crv`<sup>Required</sup> <a name="crv" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.crv"></a>

```java
public java.lang.String getCrv();
```

- *Type:* java.lang.String

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kty"></a>

```java
public java.lang.String getKty();
```

- *Type:* java.lang.String

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.x"></a>

```java
public java.lang.String getX();
```

- *Type:* java.lang.String

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.y"></a>

```java
public java.lang.String getY();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.internalValue"></a>

```java
public IResolvable|TokenValidationConfigCredentialsKeys getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>

---


### TokenValidationConfigCredentialsOutputReference <a name="TokenValidationConfigCredentialsOutputReference" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_config.TokenValidationConfigCredentialsOutputReference;

new TokenValidationConfigCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.putKeys">putKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeys` <a name="putKeys" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.putKeys"></a>

```java
public void putKeys(IResolvable|java.util.List<TokenValidationConfigCredentialsKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.putKeys.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList">TokenValidationConfigCredentialsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.keysInput">keysInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.keys"></a>

```java
public TokenValidationConfigCredentialsKeysList getKeys();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList">TokenValidationConfigCredentialsKeysList</a>

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.keysInput"></a>

```java
public IResolvable|java.util.List<TokenValidationConfigCredentialsKeys> getKeysInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|TokenValidationConfigCredentials getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a>

---



