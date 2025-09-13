# `dataCloudflareCloudforceOneRequest` Submodule <a name="`dataCloudflareCloudforceOneRequest` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCloudforceOneRequest <a name="DataCloudflareCloudforceOneRequest" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request.DataCloudflareCloudforceOneRequest;

DataCloudflareCloudforceOneRequest.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
//  .filter(DataCloudflareCloudforceOneRequestFilter)
//  .requestId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#filter DataCloudflareCloudforceOneRequest#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.requestId">requestId</a></code> | <code>java.lang.String</code> | UUID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#account_id DataCloudflareCloudforceOneRequest#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#filter DataCloudflareCloudforceOneRequest#filter}.

---

##### `requestId`<sup>Optional</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.requestId"></a>

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#request_id DataCloudflareCloudforceOneRequest#request_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetRequestId">resetRequestId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.putFilter"></a>

```java
public void putFilter(DataCloudflareCloudforceOneRequestFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetRequestId` <a name="resetRequestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetRequestId"></a>

```java
public void resetRequestId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCloudforceOneRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request.DataCloudflareCloudforceOneRequest;

DataCloudflareCloudforceOneRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request.DataCloudflareCloudforceOneRequest;

DataCloudflareCloudforceOneRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request.DataCloudflareCloudforceOneRequest;

DataCloudflareCloudforceOneRequest.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request.DataCloudflareCloudforceOneRequest;

DataCloudflareCloudforceOneRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareCloudforceOneRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareCloudforceOneRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareCloudforceOneRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareCloudforceOneRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCloudforceOneRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.completed">completed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference">DataCloudflareCloudforceOneRequestFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.messageTokens">messageTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.readableId">readableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.request">request</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tlp">tlp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.requestIdInput">requestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.requestId">requestId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.completed"></a>

```java
public java.lang.String getCompleted();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.filter"></a>

```java
public DataCloudflareCloudforceOneRequestFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference">DataCloudflareCloudforceOneRequestFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `messageTokens`<sup>Required</sup> <a name="messageTokens" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.messageTokens"></a>

```java
public java.lang.Number getMessageTokens();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `readableId`<sup>Required</sup> <a name="readableId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.readableId"></a>

```java
public java.lang.String getReadableId();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `tlp`<sup>Required</sup> <a name="tlp" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tlp"></a>

```java
public java.lang.String getTlp();
```

- *Type:* java.lang.String

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a>

---

##### `requestIdInput`<sup>Optional</sup> <a name="requestIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.requestIdInput"></a>

```java
public java.lang.String getRequestIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.requestId"></a>

```java
public java.lang.String getRequestId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCloudforceOneRequestConfig <a name="DataCloudflareCloudforceOneRequestConfig" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request.DataCloudflareCloudforceOneRequestConfig;

DataCloudflareCloudforceOneRequestConfig.builder()
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
    .accountId(java.lang.String)
//  .filter(DataCloudflareCloudforceOneRequestFilter)
//  .requestId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#filter DataCloudflareCloudforceOneRequest#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.requestId">requestId</a></code> | <code>java.lang.String</code> | UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#account_id DataCloudflareCloudforceOneRequest#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.filter"></a>

```java
public DataCloudflareCloudforceOneRequestFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#filter DataCloudflareCloudforceOneRequest#filter}.

---

##### `requestId`<sup>Optional</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.requestId"></a>

```java
public java.lang.String getRequestId();
```

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#request_id DataCloudflareCloudforceOneRequest#request_id}

---

### DataCloudflareCloudforceOneRequestFilter <a name="DataCloudflareCloudforceOneRequestFilter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request.DataCloudflareCloudforceOneRequestFilter;

DataCloudflareCloudforceOneRequestFilter.builder()
    .page(java.lang.Number)
    .perPage(java.lang.Number)
//  .completedAfter(java.lang.String)
//  .completedBefore(java.lang.String)
//  .createdAfter(java.lang.String)
//  .createdBefore(java.lang.String)
//  .requestType(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.page">page</a></code> | <code>java.lang.Number</code> | Page number of results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | Number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.completedAfter">completedAfter</a></code> | <code>java.lang.String</code> | Retrieve requests completed after this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.completedBefore">completedBefore</a></code> | <code>java.lang.String</code> | Retrieve requests completed before this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | Retrieve requests created after this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Retrieve requests created before this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.requestType">requestType</a></code> | <code>java.lang.String</code> | Requested information from request. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Field to sort results by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Sort order (asc or desc). Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.status">status</a></code> | <code>java.lang.String</code> | Request Status. Available values: "open", "accepted", "reported", "approved", "completed", "declined". |

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

Page number of results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#page DataCloudflareCloudforceOneRequest#page}

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#per_page DataCloudflareCloudforceOneRequest#per_page}

---

##### `completedAfter`<sup>Optional</sup> <a name="completedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.completedAfter"></a>

```java
public java.lang.String getCompletedAfter();
```

- *Type:* java.lang.String

Retrieve requests completed after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#completed_after DataCloudflareCloudforceOneRequest#completed_after}

---

##### `completedBefore`<sup>Optional</sup> <a name="completedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.completedBefore"></a>

```java
public java.lang.String getCompletedBefore();
```

- *Type:* java.lang.String

Retrieve requests completed before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#completed_before DataCloudflareCloudforceOneRequest#completed_before}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

Retrieve requests created after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#created_after DataCloudflareCloudforceOneRequest#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

Retrieve requests created before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#created_before DataCloudflareCloudforceOneRequest#created_before}

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

Requested information from request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#request_type DataCloudflareCloudforceOneRequest#request_type}

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Field to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#sort_by DataCloudflareCloudforceOneRequest#sort_by}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Sort order (asc or desc). Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#sort_order DataCloudflareCloudforceOneRequest#sort_order}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Request Status. Available values: "open", "accepted", "reported", "approved", "completed", "declined".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/cloudforce_one_request#status DataCloudflareCloudforceOneRequest#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCloudforceOneRequestFilterOutputReference <a name="DataCloudflareCloudforceOneRequestFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request.DataCloudflareCloudforceOneRequestFilterOutputReference;

new DataCloudflareCloudforceOneRequestFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCompletedAfter">resetCompletedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCompletedBefore">resetCompletedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetRequestType">resetRequestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompletedAfter` <a name="resetCompletedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCompletedAfter"></a>

```java
public void resetCompletedAfter()
```

##### `resetCompletedBefore` <a name="resetCompletedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCompletedBefore"></a>

```java
public void resetCompletedBefore()
```

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCreatedAfter"></a>

```java
public void resetCreatedAfter()
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCreatedBefore"></a>

```java
public void resetCreatedBefore()
```

##### `resetRequestType` <a name="resetRequestType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetRequestType"></a>

```java
public void resetRequestType()
```

##### `resetSortBy` <a name="resetSortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetSortOrder"></a>

```java
public void resetSortOrder()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedAfterInput">completedAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedBeforeInput">completedBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdAfterInput">createdAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdBeforeInput">createdBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.pageInput">pageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.perPageInput">perPageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.requestTypeInput">requestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedAfter">completedAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedBefore">completedBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.page">page</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.requestType">requestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `completedAfterInput`<sup>Optional</sup> <a name="completedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedAfterInput"></a>

```java
public java.lang.String getCompletedAfterInput();
```

- *Type:* java.lang.String

---

##### `completedBeforeInput`<sup>Optional</sup> <a name="completedBeforeInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedBeforeInput"></a>

```java
public java.lang.String getCompletedBeforeInput();
```

- *Type:* java.lang.String

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdAfterInput"></a>

```java
public java.lang.String getCreatedAfterInput();
```

- *Type:* java.lang.String

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdBeforeInput"></a>

```java
public java.lang.String getCreatedBeforeInput();
```

- *Type:* java.lang.String

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.pageInput"></a>

```java
public java.lang.Number getPageInput();
```

- *Type:* java.lang.Number

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.perPageInput"></a>

```java
public java.lang.Number getPerPageInput();
```

- *Type:* java.lang.Number

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.requestTypeInput"></a>

```java
public java.lang.String getRequestTypeInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `completedAfter`<sup>Required</sup> <a name="completedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedAfter"></a>

```java
public java.lang.String getCompletedAfter();
```

- *Type:* java.lang.String

---

##### `completedBefore`<sup>Required</sup> <a name="completedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedBefore"></a>

```java
public java.lang.String getCompletedBefore();
```

- *Type:* java.lang.String

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a>

---



