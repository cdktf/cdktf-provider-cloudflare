# `dataCloudflareWebAnalyticsSite` Submodule <a name="`dataCloudflareWebAnalyticsSite` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWebAnalyticsSite <a name="DataCloudflareWebAnalyticsSite" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site cloudflare_web_analytics_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSite;

DataCloudflareWebAnalyticsSite.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .filter(DataCloudflareWebAnalyticsSiteFilter)
//  .siteId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#filter DataCloudflareWebAnalyticsSite#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#account_id DataCloudflareWebAnalyticsSite#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#filter DataCloudflareWebAnalyticsSite#filter}.

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#site_id DataCloudflareWebAnalyticsSite#site_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetSiteId">resetSiteId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.putFilter"></a>

```java
public void putFilter(DataCloudflareWebAnalyticsSiteFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetSiteId` <a name="resetSiteId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetSiteId"></a>

```java
public void resetSiteId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWebAnalyticsSite resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSite;

DataCloudflareWebAnalyticsSite.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSite;

DataCloudflareWebAnalyticsSite.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSite;

DataCloudflareWebAnalyticsSite.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSite;

DataCloudflareWebAnalyticsSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareWebAnalyticsSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareWebAnalyticsSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareWebAnalyticsSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareWebAnalyticsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWebAnalyticsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.autoInstall">autoInstall</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference">DataCloudflareWebAnalyticsSiteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList">DataCloudflareWebAnalyticsSiteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.ruleset">ruleset</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference">DataCloudflareWebAnalyticsSiteRulesetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteTag">siteTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteToken">siteToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.snippet">snippet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autoInstall`<sup>Required</sup> <a name="autoInstall" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.autoInstall"></a>

```java
public IResolvable getAutoInstall();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filter"></a>

```java
public DataCloudflareWebAnalyticsSiteFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference">DataCloudflareWebAnalyticsSiteFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.rules"></a>

```java
public DataCloudflareWebAnalyticsSiteRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList">DataCloudflareWebAnalyticsSiteRulesList</a>

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.ruleset"></a>

```java
public DataCloudflareWebAnalyticsSiteRulesetOutputReference getRuleset();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference">DataCloudflareWebAnalyticsSiteRulesetOutputReference</a>

---

##### `siteTag`<sup>Required</sup> <a name="siteTag" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteTag"></a>

```java
public java.lang.String getSiteTag();
```

- *Type:* java.lang.String

---

##### `siteToken`<sup>Required</sup> <a name="siteToken" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteToken"></a>

```java
public java.lang.String getSiteToken();
```

- *Type:* java.lang.String

---

##### `snippet`<sup>Required</sup> <a name="snippet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.snippet"></a>

```java
public java.lang.String getSnippet();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filterInput"></a>

```java
public IResolvable|DataCloudflareWebAnalyticsSiteFilter getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWebAnalyticsSiteConfig <a name="DataCloudflareWebAnalyticsSiteConfig" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSiteConfig;

DataCloudflareWebAnalyticsSiteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .filter(DataCloudflareWebAnalyticsSiteFilter)
//  .siteId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#filter DataCloudflareWebAnalyticsSite#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#account_id DataCloudflareWebAnalyticsSite#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.filter"></a>

```java
public DataCloudflareWebAnalyticsSiteFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#filter DataCloudflareWebAnalyticsSite#filter}.

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#site_id DataCloudflareWebAnalyticsSite#site_id}

---

### DataCloudflareWebAnalyticsSiteFilter <a name="DataCloudflareWebAnalyticsSiteFilter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSiteFilter;

DataCloudflareWebAnalyticsSiteFilter.builder()
//  .orderBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | The property used to sort the list of results. Available values: "host", "created". |

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

The property used to sort the list of results. Available values: "host", "created".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_site#order_by DataCloudflareWebAnalyticsSite#order_by}

---

### DataCloudflareWebAnalyticsSiteRules <a name="DataCloudflareWebAnalyticsSiteRules" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSiteRules;

DataCloudflareWebAnalyticsSiteRules.builder()
    .build();
```


### DataCloudflareWebAnalyticsSiteRuleset <a name="DataCloudflareWebAnalyticsSiteRuleset" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSiteRuleset;

DataCloudflareWebAnalyticsSiteRuleset.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWebAnalyticsSiteFilterOutputReference <a name="DataCloudflareWebAnalyticsSiteFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSiteFilterOutputReference;

new DataCloudflareWebAnalyticsSiteFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resetOrderBy">resetOrderBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resetOrderBy"></a>

```java
public void resetOrderBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareWebAnalyticsSiteFilter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

---


### DataCloudflareWebAnalyticsSiteRulesetOutputReference <a name="DataCloudflareWebAnalyticsSiteRulesetOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSiteRulesetOutputReference;

new DataCloudflareWebAnalyticsSiteRulesetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneTag">zoneTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset">DataCloudflareWebAnalyticsSiteRuleset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

##### `zoneTag`<sup>Required</sup> <a name="zoneTag" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneTag"></a>

```java
public java.lang.String getZoneTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.internalValue"></a>

```java
public DataCloudflareWebAnalyticsSiteRuleset getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset">DataCloudflareWebAnalyticsSiteRuleset</a>

---


### DataCloudflareWebAnalyticsSiteRulesList <a name="DataCloudflareWebAnalyticsSiteRulesList" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSiteRulesList;

new DataCloudflareWebAnalyticsSiteRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.get"></a>

```java
public DataCloudflareWebAnalyticsSiteRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWebAnalyticsSiteRulesOutputReference <a name="DataCloudflareWebAnalyticsSiteRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_web_analytics_site.DataCloudflareWebAnalyticsSiteRulesOutputReference;

new DataCloudflareWebAnalyticsSiteRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.inclusive">inclusive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.isPaused">isPaused</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules">DataCloudflareWebAnalyticsSiteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.inclusive"></a>

```java
public IResolvable getInclusive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPaused`<sup>Required</sup> <a name="isPaused" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.isPaused"></a>

```java
public IResolvable getIsPaused();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.internalValue"></a>

```java
public DataCloudflareWebAnalyticsSiteRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules">DataCloudflareWebAnalyticsSiteRules</a>

---



