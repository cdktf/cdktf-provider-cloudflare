# `dataCloudflareConnectivityDirectoryServices` Submodule <a name="`dataCloudflareConnectivityDirectoryServices` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareConnectivityDirectoryServices <a name="DataCloudflareConnectivityDirectoryServices" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_services cloudflare_connectivity_directory_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServices;

DataCloudflareConnectivityDirectoryServices.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Available values: "http". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_services#account_id DataCloudflareConnectivityDirectoryServices#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_services#max_items DataCloudflareConnectivityDirectoryServices#max_items}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_services#type DataCloudflareConnectivityDirectoryServices#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServices;

DataCloudflareConnectivityDirectoryServices.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServices;

DataCloudflareConnectivityDirectoryServices.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServices;

DataCloudflareConnectivityDirectoryServices.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServices;

DataCloudflareConnectivityDirectoryServices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareConnectivityDirectoryServices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareConnectivityDirectoryServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareConnectivityDirectoryServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareConnectivityDirectoryServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList">DataCloudflareConnectivityDirectoryServicesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.result"></a>

```java
public DataCloudflareConnectivityDirectoryServicesResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList">DataCloudflareConnectivityDirectoryServicesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareConnectivityDirectoryServicesConfig <a name="DataCloudflareConnectivityDirectoryServicesConfig" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesConfig;

DataCloudflareConnectivityDirectoryServicesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "http". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_services#account_id DataCloudflareConnectivityDirectoryServices#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_services#max_items DataCloudflareConnectivityDirectoryServices#max_items}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_services#type DataCloudflareConnectivityDirectoryServices#type}

---

### DataCloudflareConnectivityDirectoryServicesResult <a name="DataCloudflareConnectivityDirectoryServicesResult" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesResult;

DataCloudflareConnectivityDirectoryServicesResult.builder()
    .build();
```


### DataCloudflareConnectivityDirectoryServicesResultHost <a name="DataCloudflareConnectivityDirectoryServicesResultHost" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesResultHost;

DataCloudflareConnectivityDirectoryServicesResultHost.builder()
    .build();
```


### DataCloudflareConnectivityDirectoryServicesResultHostNetwork <a name="DataCloudflareConnectivityDirectoryServicesResultHostNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesResultHostNetwork;

DataCloudflareConnectivityDirectoryServicesResultHostNetwork.builder()
    .build();
```


### DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork <a name="DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork;

DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference;

new DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork">DataCloudflareConnectivityDirectoryServicesResultHostNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.internalValue"></a>

```java
public DataCloudflareConnectivityDirectoryServicesResultHostNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork">DataCloudflareConnectivityDirectoryServicesResultHostNetwork</a>

---


### DataCloudflareConnectivityDirectoryServicesResultHostOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference;

new DataCloudflareConnectivityDirectoryServicesResultHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.resolverNetwork">resolverNetwork</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost">DataCloudflareConnectivityDirectoryServicesResultHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.network"></a>

```java
public DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference</a>

---

##### `resolverNetwork`<sup>Required</sup> <a name="resolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.resolverNetwork"></a>

```java
public DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference getResolverNetwork();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.internalValue"></a>

```java
public DataCloudflareConnectivityDirectoryServicesResultHost getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost">DataCloudflareConnectivityDirectoryServicesResultHost</a>

---


### DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference;

new DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.resolverIps">resolverIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resolverIps`<sup>Required</sup> <a name="resolverIps" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.resolverIps"></a>

```java
public java.util.List<java.lang.String> getResolverIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.internalValue"></a>

```java
public DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork</a>

---


### DataCloudflareConnectivityDirectoryServicesResultList <a name="DataCloudflareConnectivityDirectoryServicesResultList" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesResultList;

new DataCloudflareConnectivityDirectoryServicesResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.get"></a>

```java
public DataCloudflareConnectivityDirectoryServicesResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareConnectivityDirectoryServicesResultOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_services.DataCloudflareConnectivityDirectoryServicesResultOutputReference;

new DataCloudflareConnectivityDirectoryServicesResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult">DataCloudflareConnectivityDirectoryServicesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.host"></a>

```java
public DataCloudflareConnectivityDirectoryServicesResultHostOutputReference getHost();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostOutputReference</a>

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareConnectivityDirectoryServicesResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult">DataCloudflareConnectivityDirectoryServicesResult</a>

---



