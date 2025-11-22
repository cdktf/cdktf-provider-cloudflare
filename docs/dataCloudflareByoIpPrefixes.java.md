# `dataCloudflareByoIpPrefixes` Submodule <a name="`dataCloudflareByoIpPrefixes` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareByoIpPrefixes <a name="DataCloudflareByoIpPrefixes" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/byo_ip_prefixes cloudflare_byo_ip_prefixes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_byo_ip_prefixes.DataCloudflareByoIpPrefixes;

DataCloudflareByoIpPrefixes.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier of a Cloudflare account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier of a Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/byo_ip_prefixes#account_id DataCloudflareByoIpPrefixes#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/byo_ip_prefixes#max_items DataCloudflareByoIpPrefixes#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.resetMaxItems"></a>

```java
public void resetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareByoIpPrefixes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_byo_ip_prefixes.DataCloudflareByoIpPrefixes;

DataCloudflareByoIpPrefixes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_byo_ip_prefixes.DataCloudflareByoIpPrefixes;

DataCloudflareByoIpPrefixes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_byo_ip_prefixes.DataCloudflareByoIpPrefixes;

DataCloudflareByoIpPrefixes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_byo_ip_prefixes.DataCloudflareByoIpPrefixes;

DataCloudflareByoIpPrefixes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareByoIpPrefixes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareByoIpPrefixes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareByoIpPrefixes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareByoIpPrefixes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/byo_ip_prefixes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareByoIpPrefixes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList">DataCloudflareByoIpPrefixesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.result"></a>

```java
public DataCloudflareByoIpPrefixesResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList">DataCloudflareByoIpPrefixesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareByoIpPrefixesConfig <a name="DataCloudflareByoIpPrefixesConfig" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_byo_ip_prefixes.DataCloudflareByoIpPrefixesConfig;

DataCloudflareByoIpPrefixesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier of a Cloudflare account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier of a Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/byo_ip_prefixes#account_id DataCloudflareByoIpPrefixes#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/byo_ip_prefixes#max_items DataCloudflareByoIpPrefixes#max_items}

---

### DataCloudflareByoIpPrefixesResult <a name="DataCloudflareByoIpPrefixesResult" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_byo_ip_prefixes.DataCloudflareByoIpPrefixesResult;

DataCloudflareByoIpPrefixesResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareByoIpPrefixesResultList <a name="DataCloudflareByoIpPrefixesResultList" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_byo_ip_prefixes.DataCloudflareByoIpPrefixesResultList;

new DataCloudflareByoIpPrefixesResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.get"></a>

```java
public DataCloudflareByoIpPrefixesResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareByoIpPrefixesResultOutputReference <a name="DataCloudflareByoIpPrefixesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_byo_ip_prefixes.DataCloudflareByoIpPrefixesResultOutputReference;

new DataCloudflareByoIpPrefixesResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.advertised">advertised</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.advertisedModifiedAt">advertisedModifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.approved">approved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.asn">asn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.delegateLoaCreation">delegateLoaCreation</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.irrValidationState">irrValidationState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.loaDocumentId">loaDocumentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.onDemandEnabled">onDemandEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.onDemandLocked">onDemandLocked</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.ownershipValidationState">ownershipValidationState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.ownershipValidationToken">ownershipValidationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.rpkiValidationState">rpkiValidationState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResult">DataCloudflareByoIpPrefixesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `advertised`<sup>Required</sup> <a name="advertised" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.advertised"></a>

```java
public IResolvable getAdvertised();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `advertisedModifiedAt`<sup>Required</sup> <a name="advertisedModifiedAt" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.advertisedModifiedAt"></a>

```java
public java.lang.String getAdvertisedModifiedAt();
```

- *Type:* java.lang.String

---

##### `approved`<sup>Required</sup> <a name="approved" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.approved"></a>

```java
public java.lang.String getApproved();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `delegateLoaCreation`<sup>Required</sup> <a name="delegateLoaCreation" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.delegateLoaCreation"></a>

```java
public IResolvable getDelegateLoaCreation();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `irrValidationState`<sup>Required</sup> <a name="irrValidationState" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.irrValidationState"></a>

```java
public java.lang.String getIrrValidationState();
```

- *Type:* java.lang.String

---

##### `loaDocumentId`<sup>Required</sup> <a name="loaDocumentId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.loaDocumentId"></a>

```java
public java.lang.String getLoaDocumentId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `onDemandEnabled`<sup>Required</sup> <a name="onDemandEnabled" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.onDemandEnabled"></a>

```java
public IResolvable getOnDemandEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `onDemandLocked`<sup>Required</sup> <a name="onDemandLocked" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.onDemandLocked"></a>

```java
public IResolvable getOnDemandLocked();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ownershipValidationState`<sup>Required</sup> <a name="ownershipValidationState" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.ownershipValidationState"></a>

```java
public java.lang.String getOwnershipValidationState();
```

- *Type:* java.lang.String

---

##### `ownershipValidationToken`<sup>Required</sup> <a name="ownershipValidationToken" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.ownershipValidationToken"></a>

```java
public java.lang.String getOwnershipValidationToken();
```

- *Type:* java.lang.String

---

##### `rpkiValidationState`<sup>Required</sup> <a name="rpkiValidationState" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.rpkiValidationState"></a>

```java
public java.lang.String getRpkiValidationState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareByoIpPrefixesResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefixes.DataCloudflareByoIpPrefixesResult">DataCloudflareByoIpPrefixesResult</a>

---



