# `dataCloudflareCustomHostname` Submodule <a name="`dataCloudflareCustomHostname` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomHostname <a name="DataCloudflareCustomHostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname cloudflare_custom_hostname}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostname;

DataCloudflareCustomHostname.Builder.create(Construct scope, java.lang.String id)
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
    .zoneId(java.lang.String)
//  .customHostnameId(java.lang.String)
//  .filter(DataCloudflareCustomHostnameFilter)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.customHostnameId">customHostnameId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#filter DataCloudflareCustomHostname#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#zone_id DataCloudflareCustomHostname#zone_id}

---

##### `customHostnameId`<sup>Optional</sup> <a name="customHostnameId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.customHostnameId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#custom_hostname_id DataCloudflareCustomHostname#custom_hostname_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#filter DataCloudflareCustomHostname#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetCustomHostnameId">resetCustomHostnameId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.putFilter"></a>

```java
public void putFilter(DataCloudflareCustomHostnameFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a>

---

##### `resetCustomHostnameId` <a name="resetCustomHostnameId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetCustomHostnameId"></a>

```java
public void resetCustomHostnameId()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetFilter"></a>

```java
public void resetFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCustomHostname resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostname;

DataCloudflareCustomHostname.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostname;

DataCloudflareCustomHostname.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostname;

DataCloudflareCustomHostname.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostname;

DataCloudflareCustomHostname.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareCustomHostname.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareCustomHostname resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareCustomHostname to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareCustomHostname that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomHostname to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customMetadata">customMetadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customOriginServer">customOriginServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customOriginSni">customOriginSni</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference">DataCloudflareCustomHostnameFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ownershipVerification">ownershipVerification</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference">DataCloudflareCustomHostnameOwnershipVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ownershipVerificationHttp">ownershipVerificationHttp</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference">DataCloudflareCustomHostnameSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.verificationErrors">verificationErrors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customHostnameIdInput">customHostnameIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customHostnameId">customHostnameId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customMetadata"></a>

```java
public StringMap getCustomMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `customOriginServer`<sup>Required</sup> <a name="customOriginServer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customOriginServer"></a>

```java
public java.lang.String getCustomOriginServer();
```

- *Type:* java.lang.String

---

##### `customOriginSni`<sup>Required</sup> <a name="customOriginSni" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customOriginSni"></a>

```java
public java.lang.String getCustomOriginSni();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.filter"></a>

```java
public DataCloudflareCustomHostnameFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference">DataCloudflareCustomHostnameFilterOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownershipVerification`<sup>Required</sup> <a name="ownershipVerification" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ownershipVerification"></a>

```java
public DataCloudflareCustomHostnameOwnershipVerificationOutputReference getOwnershipVerification();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference">DataCloudflareCustomHostnameOwnershipVerificationOutputReference</a>

---

##### `ownershipVerificationHttp`<sup>Required</sup> <a name="ownershipVerificationHttp" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ownershipVerificationHttp"></a>

```java
public DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference getOwnershipVerificationHttp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ssl"></a>

```java
public DataCloudflareCustomHostnameSslOutputReference getSsl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference">DataCloudflareCustomHostnameSslOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `verificationErrors`<sup>Required</sup> <a name="verificationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.verificationErrors"></a>

```java
public java.util.List<java.lang.String> getVerificationErrors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customHostnameIdInput`<sup>Optional</sup> <a name="customHostnameIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customHostnameIdInput"></a>

```java
public java.lang.String getCustomHostnameIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `customHostnameId`<sup>Required</sup> <a name="customHostnameId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customHostnameId"></a>

```java
public java.lang.String getCustomHostnameId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomHostnameConfig <a name="DataCloudflareCustomHostnameConfig" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameConfig;

DataCloudflareCustomHostnameConfig.builder()
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
    .zoneId(java.lang.String)
//  .customHostnameId(java.lang.String)
//  .filter(DataCloudflareCustomHostnameFilter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.customHostnameId">customHostnameId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#filter DataCloudflareCustomHostname#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#zone_id DataCloudflareCustomHostname#zone_id}

---

##### `customHostnameId`<sup>Optional</sup> <a name="customHostnameId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.customHostnameId"></a>

```java
public java.lang.String getCustomHostnameId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#custom_hostname_id DataCloudflareCustomHostname#custom_hostname_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.filter"></a>

```java
public DataCloudflareCustomHostnameFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#filter DataCloudflareCustomHostname#filter}.

---

### DataCloudflareCustomHostnameFilter <a name="DataCloudflareCustomHostnameFilter" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameFilter;

DataCloudflareCustomHostnameFilter.builder()
//  .direction(java.lang.String)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .order(java.lang.String)
//  .ssl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order hostnames. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.id">id</a></code> | <code>java.lang.String</code> | Hostname ID to match against. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.order">order</a></code> | <code>java.lang.String</code> | Field to order hostnames by. Available values: "ssl", "ssl_status". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.ssl">ssl</a></code> | <code>java.lang.Number</code> | Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction to order hostnames. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#direction DataCloudflareCustomHostname#direction}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#hostname DataCloudflareCustomHostname#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Hostname ID to match against.

This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#id DataCloudflareCustomHostname#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order hostnames by. Available values: "ssl", "ssl_status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#order DataCloudflareCustomHostname#order}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.ssl"></a>

```java
public java.lang.Number getSsl();
```

- *Type:* java.lang.Number

Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/custom_hostname#ssl DataCloudflareCustomHostname#ssl}

---

### DataCloudflareCustomHostnameOwnershipVerification <a name="DataCloudflareCustomHostnameOwnershipVerification" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameOwnershipVerification;

DataCloudflareCustomHostnameOwnershipVerification.builder()
    .build();
```


### DataCloudflareCustomHostnameOwnershipVerificationHttp <a name="DataCloudflareCustomHostnameOwnershipVerificationHttp" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameOwnershipVerificationHttp;

DataCloudflareCustomHostnameOwnershipVerificationHttp.builder()
    .build();
```


### DataCloudflareCustomHostnameSsl <a name="DataCloudflareCustomHostnameSsl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSsl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSsl;

DataCloudflareCustomHostnameSsl.builder()
    .build();
```


### DataCloudflareCustomHostnameSslSettings <a name="DataCloudflareCustomHostnameSslSettings" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSslSettings;

DataCloudflareCustomHostnameSslSettings.builder()
    .build();
```


### DataCloudflareCustomHostnameSslValidationErrors <a name="DataCloudflareCustomHostnameSslValidationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSslValidationErrors;

DataCloudflareCustomHostnameSslValidationErrors.builder()
    .build();
```


### DataCloudflareCustomHostnameSslValidationRecords <a name="DataCloudflareCustomHostnameSslValidationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSslValidationRecords;

DataCloudflareCustomHostnameSslValidationRecords.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomHostnameFilterOutputReference <a name="DataCloudflareCustomHostnameFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameFilterOutputReference;

new DataCloudflareCustomHostnameFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetSsl">resetSsl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetSsl"></a>

```java
public void resetSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.sslInput">sslInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.ssl">ssl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.sslInput"></a>

```java
public java.lang.Number getSslInput();
```

- *Type:* java.lang.Number

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.ssl"></a>

```java
public java.lang.Number getSsl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a>

---


### DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference <a name="DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference;

new DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody">httpBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl">httpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttp">DataCloudflareCustomHostnameOwnershipVerificationHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpBody`<sup>Required</sup> <a name="httpBody" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody"></a>

```java
public java.lang.String getHttpBody();
```

- *Type:* java.lang.String

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl"></a>

```java
public java.lang.String getHttpUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue"></a>

```java
public DataCloudflareCustomHostnameOwnershipVerificationHttp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttp">DataCloudflareCustomHostnameOwnershipVerificationHttp</a>

---


### DataCloudflareCustomHostnameOwnershipVerificationOutputReference <a name="DataCloudflareCustomHostnameOwnershipVerificationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference;

new DataCloudflareCustomHostnameOwnershipVerificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerification">DataCloudflareCustomHostnameOwnershipVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.internalValue"></a>

```java
public DataCloudflareCustomHostnameOwnershipVerification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerification">DataCloudflareCustomHostnameOwnershipVerification</a>

---


### DataCloudflareCustomHostnameSslOutputReference <a name="DataCloudflareCustomHostnameSslOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSslOutputReference;

new DataCloudflareCustomHostnameSslOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.bundleMethod">bundleMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customCertificate">customCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customCsrId">customCsrId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customKey">customKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference">DataCloudflareCustomHostnameSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.uploadedOn">uploadedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.validationErrors">validationErrors</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList">DataCloudflareCustomHostnameSslValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.validationRecords">validationRecords</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList">DataCloudflareCustomHostnameSslValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.wildcard">wildcard</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSsl">DataCloudflareCustomHostnameSsl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bundleMethod`<sup>Required</sup> <a name="bundleMethod" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.bundleMethod"></a>

```java
public java.lang.String getBundleMethod();
```

- *Type:* java.lang.String

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.certificateAuthority"></a>

```java
public java.lang.String getCertificateAuthority();
```

- *Type:* java.lang.String

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customCertificate"></a>

```java
public java.lang.String getCustomCertificate();
```

- *Type:* java.lang.String

---

##### `customCsrId`<sup>Required</sup> <a name="customCsrId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customCsrId"></a>

```java
public java.lang.String getCustomCsrId();
```

- *Type:* java.lang.String

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customKey"></a>

```java
public java.lang.String getCustomKey();
```

- *Type:* java.lang.String

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.settings"></a>

```java
public DataCloudflareCustomHostnameSslSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference">DataCloudflareCustomHostnameSslSettingsOutputReference</a>

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.uploadedOn"></a>

```java
public java.lang.String getUploadedOn();
```

- *Type:* java.lang.String

---

##### `validationErrors`<sup>Required</sup> <a name="validationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.validationErrors"></a>

```java
public DataCloudflareCustomHostnameSslValidationErrorsList getValidationErrors();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList">DataCloudflareCustomHostnameSslValidationErrorsList</a>

---

##### `validationRecords`<sup>Required</sup> <a name="validationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.validationRecords"></a>

```java
public DataCloudflareCustomHostnameSslValidationRecordsList getValidationRecords();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList">DataCloudflareCustomHostnameSslValidationRecordsList</a>

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.wildcard"></a>

```java
public IResolvable getWildcard();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.internalValue"></a>

```java
public DataCloudflareCustomHostnameSsl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSsl">DataCloudflareCustomHostnameSsl</a>

---


### DataCloudflareCustomHostnameSslSettingsOutputReference <a name="DataCloudflareCustomHostnameSslSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSslSettingsOutputReference;

new DataCloudflareCustomHostnameSslSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.ciphers">ciphers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.earlyHints">earlyHints</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.http2">http2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.tls13">tls13</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettings">DataCloudflareCustomHostnameSslSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.ciphers"></a>

```java
public java.util.List<java.lang.String> getCiphers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `earlyHints`<sup>Required</sup> <a name="earlyHints" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.earlyHints"></a>

```java
public java.lang.String getEarlyHints();
```

- *Type:* java.lang.String

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.http2"></a>

```java
public java.lang.String getHttp2();
```

- *Type:* java.lang.String

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.tls13"></a>

```java
public java.lang.String getTls13();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.internalValue"></a>

```java
public DataCloudflareCustomHostnameSslSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettings">DataCloudflareCustomHostnameSslSettings</a>

---


### DataCloudflareCustomHostnameSslValidationErrorsList <a name="DataCloudflareCustomHostnameSslValidationErrorsList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSslValidationErrorsList;

new DataCloudflareCustomHostnameSslValidationErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.get"></a>

```java
public DataCloudflareCustomHostnameSslValidationErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareCustomHostnameSslValidationErrorsOutputReference <a name="DataCloudflareCustomHostnameSslValidationErrorsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference;

new DataCloudflareCustomHostnameSslValidationErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrors">DataCloudflareCustomHostnameSslValidationErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.internalValue"></a>

```java
public DataCloudflareCustomHostnameSslValidationErrors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrors">DataCloudflareCustomHostnameSslValidationErrors</a>

---


### DataCloudflareCustomHostnameSslValidationRecordsList <a name="DataCloudflareCustomHostnameSslValidationRecordsList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSslValidationRecordsList;

new DataCloudflareCustomHostnameSslValidationRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.get"></a>

```java
public DataCloudflareCustomHostnameSslValidationRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareCustomHostnameSslValidationRecordsOutputReference <a name="DataCloudflareCustomHostnameSslValidationRecordsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_custom_hostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference;

new DataCloudflareCustomHostnameSslValidationRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.emails">emails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.httpBody">httpBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.httpUrl">httpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.txtName">txtName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.txtValue">txtValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecords">DataCloudflareCustomHostnameSslValidationRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.emails"></a>

```java
public java.util.List<java.lang.String> getEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpBody`<sup>Required</sup> <a name="httpBody" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.httpBody"></a>

```java
public java.lang.String getHttpBody();
```

- *Type:* java.lang.String

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.httpUrl"></a>

```java
public java.lang.String getHttpUrl();
```

- *Type:* java.lang.String

---

##### `txtName`<sup>Required</sup> <a name="txtName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.txtName"></a>

```java
public java.lang.String getTxtName();
```

- *Type:* java.lang.String

---

##### `txtValue`<sup>Required</sup> <a name="txtValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.txtValue"></a>

```java
public java.lang.String getTxtValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.internalValue"></a>

```java
public DataCloudflareCustomHostnameSslValidationRecords getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecords">DataCloudflareCustomHostnameSslValidationRecords</a>

---



