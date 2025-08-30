# `dataCloudflareCloudforceOneRequestAsset` Submodule <a name="`dataCloudflareCloudforceOneRequestAsset` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCloudforceOneRequestAsset <a name="DataCloudflareCloudforceOneRequestAsset" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_asset.DataCloudflareCloudforceOneRequestAsset;

DataCloudflareCloudforceOneRequestAsset.Builder.create(Construct scope, java.lang.String id)
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
    .assetId(java.lang.String)
    .requestId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.assetId">assetId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.requestId">requestId</a></code> | <code>java.lang.String</code> | UUID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#account_id DataCloudflareCloudforceOneRequestAsset#account_id}

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.assetId"></a>

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#asset_id DataCloudflareCloudforceOneRequestAsset#asset_id}

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.requestId"></a>

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#request_id DataCloudflareCloudforceOneRequestAsset#request_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_asset.DataCloudflareCloudforceOneRequestAsset;

DataCloudflareCloudforceOneRequestAsset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_asset.DataCloudflareCloudforceOneRequestAsset;

DataCloudflareCloudforceOneRequestAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_asset.DataCloudflareCloudforceOneRequestAsset;

DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_asset.DataCloudflareCloudforceOneRequestAsset;

DataCloudflareCloudforceOneRequestAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareCloudforceOneRequestAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareCloudforceOneRequestAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareCloudforceOneRequestAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCloudforceOneRequestAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fileType">fileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetIdInput">assetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestIdInput">requestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetId">assetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestId">requestId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetIdInput"></a>

```java
public java.lang.String getAssetIdInput();
```

- *Type:* java.lang.String

---

##### `requestIdInput`<sup>Optional</sup> <a name="requestIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestIdInput"></a>

```java
public java.lang.String getRequestIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestId"></a>

```java
public java.lang.String getRequestId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCloudforceOneRequestAssetConfig <a name="DataCloudflareCloudforceOneRequestAssetConfig" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_asset.DataCloudflareCloudforceOneRequestAssetConfig;

DataCloudflareCloudforceOneRequestAssetConfig.builder()
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
    .assetId(java.lang.String)
    .requestId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.assetId">assetId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.requestId">requestId</a></code> | <code>java.lang.String</code> | UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#account_id DataCloudflareCloudforceOneRequestAsset#account_id}

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#asset_id DataCloudflareCloudforceOneRequestAsset#asset_id}

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.requestId"></a>

```java
public java.lang.String getRequestId();
```

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_asset#request_id DataCloudflareCloudforceOneRequestAsset#request_id}

---



