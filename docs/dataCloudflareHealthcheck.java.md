# `dataCloudflareHealthcheck` Submodule <a name="`dataCloudflareHealthcheck` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareHealthcheck <a name="DataCloudflareHealthcheck" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/healthcheck cloudflare_healthcheck}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheck;

DataCloudflareHealthcheck.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .healthcheckId(java.lang.String)
    .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.healthcheckId">healthcheckId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `healthcheckId`<sup>Required</sup> <a name="healthcheckId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.healthcheckId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/healthcheck#healthcheck_id DataCloudflareHealthcheck#healthcheck_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/healthcheck#zone_id DataCloudflareHealthcheck#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareHealthcheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheck;

DataCloudflareHealthcheck.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheck;

DataCloudflareHealthcheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheck;

DataCloudflareHealthcheck.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheck;

DataCloudflareHealthcheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareHealthcheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareHealthcheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareHealthcheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareHealthcheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/healthcheck#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareHealthcheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.consecutiveFails">consecutiveFails</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.consecutiveSuccesses">consecutiveSuccesses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference">DataCloudflareHealthcheckHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.suspended">suspended</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.tcpConfig">tcpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference">DataCloudflareHealthcheckTcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.healthcheckIdInput">healthcheckIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.healthcheckId">healthcheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `checkRegions`<sup>Required</sup> <a name="checkRegions" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.checkRegions"></a>

```java
public java.util.List<java.lang.String> getCheckRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consecutiveFails`<sup>Required</sup> <a name="consecutiveFails" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.consecutiveFails"></a>

```java
public java.lang.Number getConsecutiveFails();
```

- *Type:* java.lang.Number

---

##### `consecutiveSuccesses`<sup>Required</sup> <a name="consecutiveSuccesses" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.consecutiveSuccesses"></a>

```java
public java.lang.Number getConsecutiveSuccesses();
```

- *Type:* java.lang.Number

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `httpConfig`<sup>Required</sup> <a name="httpConfig" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.httpConfig"></a>

```java
public DataCloudflareHealthcheckHttpConfigOutputReference getHttpConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference">DataCloudflareHealthcheckHttpConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.suspended"></a>

```java
public IResolvable getSuspended();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tcpConfig`<sup>Required</sup> <a name="tcpConfig" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.tcpConfig"></a>

```java
public DataCloudflareHealthcheckTcpConfigOutputReference getTcpConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference">DataCloudflareHealthcheckTcpConfigOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `healthcheckIdInput`<sup>Optional</sup> <a name="healthcheckIdInput" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.healthcheckIdInput"></a>

```java
public java.lang.String getHealthcheckIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `healthcheckId`<sup>Required</sup> <a name="healthcheckId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.healthcheckId"></a>

```java
public java.lang.String getHealthcheckId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareHealthcheckConfig <a name="DataCloudflareHealthcheckConfig" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheckConfig;

DataCloudflareHealthcheckConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .healthcheckId(java.lang.String)
    .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.healthcheckId">healthcheckId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `healthcheckId`<sup>Required</sup> <a name="healthcheckId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.healthcheckId"></a>

```java
public java.lang.String getHealthcheckId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/healthcheck#healthcheck_id DataCloudflareHealthcheck#healthcheck_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/healthcheck#zone_id DataCloudflareHealthcheck#zone_id}

---

### DataCloudflareHealthcheckHttpConfig <a name="DataCloudflareHealthcheckHttpConfig" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheckHttpConfig;

DataCloudflareHealthcheckHttpConfig.builder()
    .build();
```


### DataCloudflareHealthcheckTcpConfig <a name="DataCloudflareHealthcheckTcpConfig" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheckTcpConfig;

DataCloudflareHealthcheckTcpConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareHealthcheckHttpConfigOutputReference <a name="DataCloudflareHealthcheckHttpConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheckHttpConfigOutputReference;

new DataCloudflareHealthcheckHttpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.expectedBody">expectedBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.expectedCodes">expectedCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.followRedirects">followRedirects</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.header">header</a></code> | <code>com.hashicorp.cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfig">DataCloudflareHealthcheckHttpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.allowInsecure"></a>

```java
public IResolvable getAllowInsecure();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expectedBody`<sup>Required</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.expectedBody"></a>

```java
public java.lang.String getExpectedBody();
```

- *Type:* java.lang.String

---

##### `expectedCodes`<sup>Required</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.expectedCodes"></a>

```java
public java.util.List<java.lang.String> getExpectedCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `followRedirects`<sup>Required</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.followRedirects"></a>

```java
public IResolvable getFollowRedirects();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.header"></a>

```java
public StringListMap getHeader();
```

- *Type:* com.hashicorp.cdktf.StringListMap

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfigOutputReference.property.internalValue"></a>

```java
public DataCloudflareHealthcheckHttpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckHttpConfig">DataCloudflareHealthcheckHttpConfig</a>

---


### DataCloudflareHealthcheckTcpConfigOutputReference <a name="DataCloudflareHealthcheckTcpConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_healthcheck.DataCloudflareHealthcheckTcpConfigOutputReference;

new DataCloudflareHealthcheckTcpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfig">DataCloudflareHealthcheckTcpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfigOutputReference.property.internalValue"></a>

```java
public DataCloudflareHealthcheckTcpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHealthcheck.DataCloudflareHealthcheckTcpConfig">DataCloudflareHealthcheckTcpConfig</a>

---



