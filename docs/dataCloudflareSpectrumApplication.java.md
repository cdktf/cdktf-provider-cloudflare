# `dataCloudflareSpectrumApplication` Submodule <a name="`dataCloudflareSpectrumApplication` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSpectrumApplication <a name="DataCloudflareSpectrumApplication" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/spectrum_application cloudflare_spectrum_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplication;

DataCloudflareSpectrumApplication.Builder.create(Construct scope, java.lang.String id)
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
    .appId(java.lang.String)
    .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | App identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Zone identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/spectrum_application#app_id DataCloudflareSpectrumApplication#app_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/spectrum_application#zone_id DataCloudflareSpectrumApplication#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareSpectrumApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplication;

DataCloudflareSpectrumApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplication;

DataCloudflareSpectrumApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplication;

DataCloudflareSpectrumApplication.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplication;

DataCloudflareSpectrumApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareSpectrumApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareSpectrumApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareSpectrumApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareSpectrumApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/spectrum_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareSpectrumApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.argoSmartRouting">argoSmartRouting</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference">DataCloudflareSpectrumApplicationDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.edgeIps">edgeIps</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference">DataCloudflareSpectrumApplicationEdgeIpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.ipFirewall">ipFirewall</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originDirect">originDirect</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originDns">originDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference">DataCloudflareSpectrumApplicationOriginDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originPort">originPort</a></code> | <code>com.hashicorp.cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.proxyProtocol">proxyProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.tls">tls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.trafficType">trafficType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `argoSmartRouting`<sup>Required</sup> <a name="argoSmartRouting" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.argoSmartRouting"></a>

```java
public IResolvable getArgoSmartRouting();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.dns"></a>

```java
public DataCloudflareSpectrumApplicationDnsOutputReference getDns();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference">DataCloudflareSpectrumApplicationDnsOutputReference</a>

---

##### `edgeIps`<sup>Required</sup> <a name="edgeIps" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.edgeIps"></a>

```java
public DataCloudflareSpectrumApplicationEdgeIpsOutputReference getEdgeIps();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference">DataCloudflareSpectrumApplicationEdgeIpsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipFirewall`<sup>Required</sup> <a name="ipFirewall" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.ipFirewall"></a>

```java
public IResolvable getIpFirewall();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `originDirect`<sup>Required</sup> <a name="originDirect" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originDirect"></a>

```java
public java.util.List<java.lang.String> getOriginDirect();
```

- *Type:* java.util.List<java.lang.String>

---

##### `originDns`<sup>Required</sup> <a name="originDns" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originDns"></a>

```java
public DataCloudflareSpectrumApplicationOriginDnsOutputReference getOriginDns();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference">DataCloudflareSpectrumApplicationOriginDnsOutputReference</a>

---

##### `originPort`<sup>Required</sup> <a name="originPort" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originPort"></a>

```java
public AnyMap getOriginPort();
```

- *Type:* com.hashicorp.cdktf.AnyMap

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `proxyProtocol`<sup>Required</sup> <a name="proxyProtocol" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.proxyProtocol"></a>

```java
public java.lang.String getProxyProtocol();
```

- *Type:* java.lang.String

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.tls"></a>

```java
public java.lang.String getTls();
```

- *Type:* java.lang.String

---

##### `trafficType`<sup>Required</sup> <a name="trafficType" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.trafficType"></a>

```java
public java.lang.String getTrafficType();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSpectrumApplicationConfig <a name="DataCloudflareSpectrumApplicationConfig" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplicationConfig;

DataCloudflareSpectrumApplicationConfig.builder()
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
    .appId(java.lang.String)
    .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | App identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Zone identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/spectrum_application#app_id DataCloudflareSpectrumApplication#app_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/spectrum_application#zone_id DataCloudflareSpectrumApplication#zone_id}

---

### DataCloudflareSpectrumApplicationDns <a name="DataCloudflareSpectrumApplicationDns" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplicationDns;

DataCloudflareSpectrumApplicationDns.builder()
    .build();
```


### DataCloudflareSpectrumApplicationEdgeIps <a name="DataCloudflareSpectrumApplicationEdgeIps" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplicationEdgeIps;

DataCloudflareSpectrumApplicationEdgeIps.builder()
    .build();
```


### DataCloudflareSpectrumApplicationOriginDns <a name="DataCloudflareSpectrumApplicationOriginDns" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplicationOriginDns;

DataCloudflareSpectrumApplicationOriginDns.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSpectrumApplicationDnsOutputReference <a name="DataCloudflareSpectrumApplicationDnsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplicationDnsOutputReference;

new DataCloudflareSpectrumApplicationDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDns">DataCloudflareSpectrumApplicationDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.internalValue"></a>

```java
public DataCloudflareSpectrumApplicationDns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDns">DataCloudflareSpectrumApplicationDns</a>

---


### DataCloudflareSpectrumApplicationEdgeIpsOutputReference <a name="DataCloudflareSpectrumApplicationEdgeIpsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplicationEdgeIpsOutputReference;

new DataCloudflareSpectrumApplicationEdgeIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.connectivity">connectivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIps">DataCloudflareSpectrumApplicationEdgeIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectivity`<sup>Required</sup> <a name="connectivity" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.connectivity"></a>

```java
public java.lang.String getConnectivity();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.internalValue"></a>

```java
public DataCloudflareSpectrumApplicationEdgeIps getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIps">DataCloudflareSpectrumApplicationEdgeIps</a>

---


### DataCloudflareSpectrumApplicationOriginDnsOutputReference <a name="DataCloudflareSpectrumApplicationOriginDnsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_spectrum_application.DataCloudflareSpectrumApplicationOriginDnsOutputReference;

new DataCloudflareSpectrumApplicationOriginDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDns">DataCloudflareSpectrumApplicationOriginDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.internalValue"></a>

```java
public DataCloudflareSpectrumApplicationOriginDns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDns">DataCloudflareSpectrumApplicationOriginDns</a>

---



