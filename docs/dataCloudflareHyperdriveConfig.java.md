# `dataCloudflareHyperdriveConfig` Submodule <a name="`dataCloudflareHyperdriveConfig` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareHyperdriveConfig <a name="DataCloudflareHyperdriveConfig" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config cloudflare_hyperdrive_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfig;

DataCloudflareHyperdriveConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .hyperdriveId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.hyperdriveId">hyperdriveId</a></code> | <code>java.lang.String</code> | Define configurations using a unique string identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config#account_id DataCloudflareHyperdriveConfig#account_id}

---

##### `hyperdriveId`<sup>Optional</sup> <a name="hyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.hyperdriveId"></a>

- *Type:* java.lang.String

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config#hyperdrive_id DataCloudflareHyperdriveConfig#hyperdrive_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetHyperdriveId">resetHyperdriveId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetHyperdriveId` <a name="resetHyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetHyperdriveId"></a>

```java
public void resetHyperdriveId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareHyperdriveConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfig;

DataCloudflareHyperdriveConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfig;

DataCloudflareHyperdriveConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfig;

DataCloudflareHyperdriveConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfig;

DataCloudflareHyperdriveConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareHyperdriveConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareHyperdriveConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareHyperdriveConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareHyperdriveConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareHyperdriveConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.caching">caching</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference">DataCloudflareHyperdriveConfigCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.mtls">mtls</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference">DataCloudflareHyperdriveConfigMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference">DataCloudflareHyperdriveConfigOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.originConnectionLimit">originConnectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveIdInput">hyperdriveIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveId">hyperdriveId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.caching"></a>

```java
public DataCloudflareHyperdriveConfigCachingOutputReference getCaching();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference">DataCloudflareHyperdriveConfigCachingOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.mtls"></a>

```java
public DataCloudflareHyperdriveConfigMtlsOutputReference getMtls();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference">DataCloudflareHyperdriveConfigMtlsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.origin"></a>

```java
public DataCloudflareHyperdriveConfigOriginOutputReference getOrigin();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference">DataCloudflareHyperdriveConfigOriginOutputReference</a>

---

##### `originConnectionLimit`<sup>Required</sup> <a name="originConnectionLimit" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.originConnectionLimit"></a>

```java
public java.lang.Number getOriginConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `hyperdriveIdInput`<sup>Optional</sup> <a name="hyperdriveIdInput" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveIdInput"></a>

```java
public java.lang.String getHyperdriveIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `hyperdriveId`<sup>Required</sup> <a name="hyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveId"></a>

```java
public java.lang.String getHyperdriveId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareHyperdriveConfigCaching <a name="DataCloudflareHyperdriveConfigCaching" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfigCaching;

DataCloudflareHyperdriveConfigCaching.builder()
    .build();
```


### DataCloudflareHyperdriveConfigConfig <a name="DataCloudflareHyperdriveConfigConfig" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfigConfig;

DataCloudflareHyperdriveConfigConfig.builder()
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
//  .hyperdriveId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.hyperdriveId">hyperdriveId</a></code> | <code>java.lang.String</code> | Define configurations using a unique string identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config#account_id DataCloudflareHyperdriveConfig#account_id}

---

##### `hyperdriveId`<sup>Optional</sup> <a name="hyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.hyperdriveId"></a>

```java
public java.lang.String getHyperdriveId();
```

- *Type:* java.lang.String

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config#hyperdrive_id DataCloudflareHyperdriveConfig#hyperdrive_id}

---

### DataCloudflareHyperdriveConfigMtls <a name="DataCloudflareHyperdriveConfigMtls" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfigMtls;

DataCloudflareHyperdriveConfigMtls.builder()
    .build();
```


### DataCloudflareHyperdriveConfigOrigin <a name="DataCloudflareHyperdriveConfigOrigin" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfigOrigin;

DataCloudflareHyperdriveConfigOrigin.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareHyperdriveConfigCachingOutputReference <a name="DataCloudflareHyperdriveConfigCachingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfigCachingOutputReference;

new DataCloudflareHyperdriveConfigCachingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.disabled">disabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.staleWhileRevalidate">staleWhileRevalidate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching">DataCloudflareHyperdriveConfigCaching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.disabled"></a>

```java
public IResolvable getDisabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `staleWhileRevalidate`<sup>Required</sup> <a name="staleWhileRevalidate" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.staleWhileRevalidate"></a>

```java
public java.lang.Number getStaleWhileRevalidate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.internalValue"></a>

```java
public DataCloudflareHyperdriveConfigCaching getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching">DataCloudflareHyperdriveConfigCaching</a>

---


### DataCloudflareHyperdriveConfigMtlsOutputReference <a name="DataCloudflareHyperdriveConfigMtlsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfigMtlsOutputReference;

new DataCloudflareHyperdriveConfigMtlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.caCertificateId">caCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.sslmode">sslmode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls">DataCloudflareHyperdriveConfigMtls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificateId`<sup>Required</sup> <a name="caCertificateId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.caCertificateId"></a>

```java
public java.lang.String getCaCertificateId();
```

- *Type:* java.lang.String

---

##### `mtlsCertificateId`<sup>Required</sup> <a name="mtlsCertificateId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.mtlsCertificateId"></a>

```java
public java.lang.String getMtlsCertificateId();
```

- *Type:* java.lang.String

---

##### `sslmode`<sup>Required</sup> <a name="sslmode" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.sslmode"></a>

```java
public java.lang.String getSslmode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.internalValue"></a>

```java
public DataCloudflareHyperdriveConfigMtls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls">DataCloudflareHyperdriveConfigMtls</a>

---


### DataCloudflareHyperdriveConfigOriginOutputReference <a name="DataCloudflareHyperdriveConfigOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_hyperdrive_config.DataCloudflareHyperdriveConfigOriginOutputReference;

new DataCloudflareHyperdriveConfigOriginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientId">accessClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientSecret">accessClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin">DataCloudflareHyperdriveConfigOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessClientId`<sup>Required</sup> <a name="accessClientId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientId"></a>

```java
public java.lang.String getAccessClientId();
```

- *Type:* java.lang.String

---

##### `accessClientSecret`<sup>Required</sup> <a name="accessClientSecret" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientSecret"></a>

```java
public java.lang.String getAccessClientSecret();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.internalValue"></a>

```java
public DataCloudflareHyperdriveConfigOrigin getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin">DataCloudflareHyperdriveConfigOrigin</a>

---



