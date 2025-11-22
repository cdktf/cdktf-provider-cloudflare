# `dataCloudflareApiShieldSchemas` Submodule <a name="`dataCloudflareApiShieldSchemas` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiShieldSchemas <a name="DataCloudflareApiShieldSchemas" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas cloudflare_api_shield_schemas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_shield_schemas.DataCloudflareApiShieldSchemas;

DataCloudflareApiShieldSchemas.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .omitSource(java.lang.Boolean|IResolvable)
//  .validationEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.omitSource">omitSource</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Flag whether schema is enabled for validation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas#zone_id DataCloudflareApiShieldSchemas#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas#max_items DataCloudflareApiShieldSchemas#max_items}

---

##### `omitSource`<sup>Optional</sup> <a name="omitSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.omitSource"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas#omit_source DataCloudflareApiShieldSchemas#omit_source}

---

##### `validationEnabled`<sup>Optional</sup> <a name="validationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.Initializer.parameter.validationEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Flag whether schema is enabled for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas#validation_enabled DataCloudflareApiShieldSchemas#validation_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.resetOmitSource">resetOmitSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.resetValidationEnabled">resetValidationEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOmitSource` <a name="resetOmitSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.resetOmitSource"></a>

```java
public void resetOmitSource()
```

##### `resetValidationEnabled` <a name="resetValidationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.resetValidationEnabled"></a>

```java
public void resetValidationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareApiShieldSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_shield_schemas.DataCloudflareApiShieldSchemas;

DataCloudflareApiShieldSchemas.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_shield_schemas.DataCloudflareApiShieldSchemas;

DataCloudflareApiShieldSchemas.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_shield_schemas.DataCloudflareApiShieldSchemas;

DataCloudflareApiShieldSchemas.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_shield_schemas.DataCloudflareApiShieldSchemas;

DataCloudflareApiShieldSchemas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareApiShieldSchemas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareApiShieldSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareApiShieldSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareApiShieldSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiShieldSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList">DataCloudflareApiShieldSchemasResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.omitSourceInput">omitSourceInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.validationEnabledInput">validationEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.omitSource">omitSource</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.result"></a>

```java
public DataCloudflareApiShieldSchemasResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList">DataCloudflareApiShieldSchemasResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `omitSourceInput`<sup>Optional</sup> <a name="omitSourceInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.omitSourceInput"></a>

```java
public java.lang.Boolean|IResolvable getOmitSourceInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `validationEnabledInput`<sup>Optional</sup> <a name="validationEnabledInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.validationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getValidationEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `omitSource`<sup>Required</sup> <a name="omitSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.omitSource"></a>

```java
public java.lang.Boolean|IResolvable getOmitSource();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.validationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getValidationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemas.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiShieldSchemasConfig <a name="DataCloudflareApiShieldSchemasConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_shield_schemas.DataCloudflareApiShieldSchemasConfig;

DataCloudflareApiShieldSchemasConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .omitSource(java.lang.Boolean|IResolvable)
//  .validationEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.omitSource">omitSource</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Flag whether schema is enabled for validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas#zone_id DataCloudflareApiShieldSchemas#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas#max_items DataCloudflareApiShieldSchemas#max_items}

---

##### `omitSource`<sup>Optional</sup> <a name="omitSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.omitSource"></a>

```java
public java.lang.Boolean|IResolvable getOmitSource();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas#omit_source DataCloudflareApiShieldSchemas#omit_source}

---

##### `validationEnabled`<sup>Optional</sup> <a name="validationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasConfig.property.validationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getValidationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Flag whether schema is enabled for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/api_shield_schemas#validation_enabled DataCloudflareApiShieldSchemas#validation_enabled}

---

### DataCloudflareApiShieldSchemasResult <a name="DataCloudflareApiShieldSchemasResult" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_shield_schemas.DataCloudflareApiShieldSchemasResult;

DataCloudflareApiShieldSchemasResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiShieldSchemasResultList <a name="DataCloudflareApiShieldSchemasResultList" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_shield_schemas.DataCloudflareApiShieldSchemasResultList;

new DataCloudflareApiShieldSchemasResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.get"></a>

```java
public DataCloudflareApiShieldSchemasResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareApiShieldSchemasResultOutputReference <a name="DataCloudflareApiShieldSchemasResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_shield_schemas.DataCloudflareApiShieldSchemasResultOutputReference;

new DataCloudflareApiShieldSchemasResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.validationEnabled">validationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResult">DataCloudflareApiShieldSchemasResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.validationEnabled"></a>

```java
public IResolvable getValidationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareApiShieldSchemasResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchemas.DataCloudflareApiShieldSchemasResult">DataCloudflareApiShieldSchemasResult</a>

---



