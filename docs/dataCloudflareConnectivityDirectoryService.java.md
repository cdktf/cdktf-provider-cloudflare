# `dataCloudflareConnectivityDirectoryService` Submodule <a name="`dataCloudflareConnectivityDirectoryService` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareConnectivityDirectoryService <a name="DataCloudflareConnectivityDirectoryService" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service cloudflare_connectivity_directory_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryService;

DataCloudflareConnectivityDirectoryService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .filter(DataCloudflareConnectivityDirectoryServiceFilter)
//  .serviceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}.

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetServiceId">resetServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.putFilter"></a>

```java
public void putFilter(DataCloudflareConnectivityDirectoryServiceFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetServiceId` <a name="resetServiceId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetServiceId"></a>

```java
public void resetServiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryService;

DataCloudflareConnectivityDirectoryService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryService;

DataCloudflareConnectivityDirectoryService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryService;

DataCloudflareConnectivityDirectoryService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryService;

DataCloudflareConnectivityDirectoryService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareConnectivityDirectoryService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareConnectivityDirectoryService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareConnectivityDirectoryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareConnectivityDirectoryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference">DataCloudflareConnectivityDirectoryServiceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference">DataCloudflareConnectivityDirectoryServiceHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filter"></a>

```java
public DataCloudflareConnectivityDirectoryServiceFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference">DataCloudflareConnectivityDirectoryServiceFilterOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.host"></a>

```java
public DataCloudflareConnectivityDirectoryServiceHostOutputReference getHost();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference">DataCloudflareConnectivityDirectoryServiceHostOutputReference</a>

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filterInput"></a>

```java
public IResolvable|DataCloudflareConnectivityDirectoryServiceFilter getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareConnectivityDirectoryServiceConfig <a name="DataCloudflareConnectivityDirectoryServiceConfig" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryServiceConfig;

DataCloudflareConnectivityDirectoryServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .filter(DataCloudflareConnectivityDirectoryServiceFilter)
//  .serviceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.filter"></a>

```java
public DataCloudflareConnectivityDirectoryServiceFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}.

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}.

---

### DataCloudflareConnectivityDirectoryServiceFilter <a name="DataCloudflareConnectivityDirectoryServiceFilter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryServiceFilter;

DataCloudflareConnectivityDirectoryServiceFilter.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "http". |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#type DataCloudflareConnectivityDirectoryService#type}

---

### DataCloudflareConnectivityDirectoryServiceHost <a name="DataCloudflareConnectivityDirectoryServiceHost" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryServiceHost;

DataCloudflareConnectivityDirectoryServiceHost.builder()
    .build();
```


### DataCloudflareConnectivityDirectoryServiceHostNetwork <a name="DataCloudflareConnectivityDirectoryServiceHostNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryServiceHostNetwork;

DataCloudflareConnectivityDirectoryServiceHostNetwork.builder()
    .build();
```


### DataCloudflareConnectivityDirectoryServiceHostResolverNetwork <a name="DataCloudflareConnectivityDirectoryServiceHostResolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork;

DataCloudflareConnectivityDirectoryServiceHostResolverNetwork.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareConnectivityDirectoryServiceFilterOutputReference <a name="DataCloudflareConnectivityDirectoryServiceFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryServiceFilterOutputReference;

new DataCloudflareConnectivityDirectoryServiceFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareConnectivityDirectoryServiceFilter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

---


### DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference;

new DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork">DataCloudflareConnectivityDirectoryServiceHostNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue"></a>

```java
public DataCloudflareConnectivityDirectoryServiceHostNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork">DataCloudflareConnectivityDirectoryServiceHostNetwork</a>

---


### DataCloudflareConnectivityDirectoryServiceHostOutputReference <a name="DataCloudflareConnectivityDirectoryServiceHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryServiceHostOutputReference;

new DataCloudflareConnectivityDirectoryServiceHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork">resolverNetwork</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost">DataCloudflareConnectivityDirectoryServiceHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.network"></a>

```java
public DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference</a>

---

##### `resolverNetwork`<sup>Required</sup> <a name="resolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork"></a>

```java
public DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference getResolverNetwork();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.internalValue"></a>

```java
public DataCloudflareConnectivityDirectoryServiceHost getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost">DataCloudflareConnectivityDirectoryServiceHost</a>

---


### DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_connectivity_directory_service.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference;

new DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps">resolverIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork">DataCloudflareConnectivityDirectoryServiceHostResolverNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resolverIps`<sup>Required</sup> <a name="resolverIps" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps"></a>

```java
public java.util.List<java.lang.String> getResolverIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue"></a>

```java
public DataCloudflareConnectivityDirectoryServiceHostResolverNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork">DataCloudflareConnectivityDirectoryServiceHostResolverNetwork</a>

---



