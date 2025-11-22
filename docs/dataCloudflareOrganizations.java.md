# `dataCloudflareOrganizations` Submodule <a name="`dataCloudflareOrganizations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareOrganizations <a name="DataCloudflareOrganizations" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations cloudflare_organizations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizations;

DataCloudflareOrganizations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .containing(DataCloudflareOrganizationsContaining)
//  .id(java.util.List<java.lang.String>)
//  .maxItems(java.lang.Number)
//  .name(DataCloudflareOrganizationsName)
//  .pageSize(java.lang.Number)
//  .pageToken(java.lang.String)
//  .parent(DataCloudflareOrganizationsParent)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id">id</a></code> | <code>java.util.List<java.lang.String></code> | Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | The amount of items to return. Defaults to 10. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.pageToken">pageToken</a></code> | <code>java.lang.String</code> | An opaque token returned from the last list response that when provided will retrieve the next page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containing`<sup>Optional</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.containing"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id"></a>

- *Type:* java.util.List<java.lang.String>

Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#id DataCloudflareOrganizations#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#max_items DataCloudflareOrganizations#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

The amount of items to return. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#page_size DataCloudflareOrganizations#page_size}

---

##### `pageToken`<sup>Optional</sup> <a name="pageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.pageToken"></a>

- *Type:* java.lang.String

An opaque token returned from the last list response that when provided will retrieve the next page.

Parameters used to filter the retrieved list must remain in subsequent
requests with a page token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#page_token DataCloudflareOrganizations#page_token}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.parent"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining">putContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putParent">putParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetContaining">resetContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageToken">resetPageToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetParent">resetParent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putContaining` <a name="putContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining"></a>

```java
public void putContaining(DataCloudflareOrganizationsContaining value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

---

##### `putName` <a name="putName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName"></a>

```java
public void putName(DataCloudflareOrganizationsName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

---

##### `putParent` <a name="putParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putParent"></a>

```java
public void putParent(DataCloudflareOrganizationsParent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putParent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

---

##### `resetContaining` <a name="resetContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetContaining"></a>

```java
public void resetContaining()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetId"></a>

```java
public void resetId()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetName"></a>

```java
public void resetName()
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetPageToken` <a name="resetPageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageToken"></a>

```java
public void resetPageToken()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetParent"></a>

```java
public void resetParent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizations;

DataCloudflareOrganizations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizations;

DataCloudflareOrganizations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizations;

DataCloudflareOrganizations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizations;

DataCloudflareOrganizations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareOrganizations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareOrganizations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareOrganizations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareOrganizations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference">DataCloudflareOrganizationsContainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference">DataCloudflareOrganizationsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference">DataCloudflareOrganizationsParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList">DataCloudflareOrganizationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containingInput">containingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.nameInput">nameInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageTokenInput">pageTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parentInput">parentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageToken">pageToken</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `containing`<sup>Required</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containing"></a>

```java
public DataCloudflareOrganizationsContainingOutputReference getContaining();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference">DataCloudflareOrganizationsContainingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.name"></a>

```java
public DataCloudflareOrganizationsNameOutputReference getName();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference">DataCloudflareOrganizationsNameOutputReference</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parent"></a>

```java
public DataCloudflareOrganizationsParentOutputReference getParent();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference">DataCloudflareOrganizationsParentOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.result"></a>

```java
public DataCloudflareOrganizationsResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList">DataCloudflareOrganizationsResultList</a>

---

##### `containingInput`<sup>Optional</sup> <a name="containingInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containingInput"></a>

```java
public IResolvable|DataCloudflareOrganizationsContaining getContainingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.nameInput"></a>

```java
public IResolvable|DataCloudflareOrganizationsName getNameInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `pageTokenInput`<sup>Optional</sup> <a name="pageTokenInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageTokenInput"></a>

```java
public java.lang.String getPageTokenInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parentInput"></a>

```java
public IResolvable|DataCloudflareOrganizationsParent getParentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `pageToken`<sup>Required</sup> <a name="pageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageToken"></a>

```java
public java.lang.String getPageToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareOrganizationsConfig <a name="DataCloudflareOrganizationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsConfig;

DataCloudflareOrganizationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .containing(DataCloudflareOrganizationsContaining)
//  .id(java.util.List<java.lang.String>)
//  .maxItems(java.lang.Number)
//  .name(DataCloudflareOrganizationsName)
//  .pageSize(java.lang.Number)
//  .pageToken(java.lang.String)
//  .parent(DataCloudflareOrganizationsParent)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | The amount of items to return. Defaults to 10. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageToken">pageToken</a></code> | <code>java.lang.String</code> | An opaque token returned from the last list response that when provided will retrieve the next page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containing`<sup>Optional</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.containing"></a>

```java
public DataCloudflareOrganizationsContaining getContaining();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#id DataCloudflareOrganizations#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#max_items DataCloudflareOrganizations#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.name"></a>

```java
public DataCloudflareOrganizationsName getName();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

The amount of items to return. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#page_size DataCloudflareOrganizations#page_size}

---

##### `pageToken`<sup>Optional</sup> <a name="pageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageToken"></a>

```java
public java.lang.String getPageToken();
```

- *Type:* java.lang.String

An opaque token returned from the last list response that when provided will retrieve the next page.

Parameters used to filter the retrieved list must remain in subsequent
requests with a page token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#page_token DataCloudflareOrganizations#page_token}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.parent"></a>

```java
public DataCloudflareOrganizationsParent getParent();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}.

---

### DataCloudflareOrganizationsContaining <a name="DataCloudflareOrganizationsContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsContaining;

DataCloudflareOrganizationsContaining.builder()
//  .account(java.lang.String)
//  .organization(java.lang.String)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.account">account</a></code> | <code>java.lang.String</code> | Filter the list of organizations to the ones that contain this particular account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.organization">organization</a></code> | <code>java.lang.String</code> | Filter the list of organizations to the ones that contain this particular organization. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.user">user</a></code> | <code>java.lang.String</code> | Filter the list of organizations to the ones that contain this particular user. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

Filter the list of organizations to the ones that contain this particular account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#account DataCloudflareOrganizations#account}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Filter the list of organizations to the ones that contain this particular organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#organization DataCloudflareOrganizations#organization}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Filter the list of organizations to the ones that contain this particular user.

IMPORTANT: Just because an organization "contains" a user is not a
representation of any authorization or privilege to manage any resources
therein. An organization "containing" a user simply means the user is managed by
that organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#user DataCloudflareOrganizations#user}

---

### DataCloudflareOrganizationsName <a name="DataCloudflareOrganizationsName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsName;

DataCloudflareOrganizationsName.builder()
//  .contains(java.lang.String)
//  .endsWith(java.lang.String)
//  .startsWith(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.contains">contains</a></code> | <code>java.lang.String</code> | (case-insensitive) Filter the list of organizations to where the name contains a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.endsWith">endsWith</a></code> | <code>java.lang.String</code> | (case-insensitive) Filter the list of organizations to where the name ends with a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | (case-insensitive) Filter the list of organizations to where the name starts with a particular string. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

(case-insensitive) Filter the list of organizations to where the name contains a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#contains DataCloudflareOrganizations#contains}

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.endsWith"></a>

```java
public java.lang.String getEndsWith();
```

- *Type:* java.lang.String

(case-insensitive) Filter the list of organizations to where the name ends with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#ends_with DataCloudflareOrganizations#ends_with}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

(case-insensitive) Filter the list of organizations to where the name starts with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#starts_with DataCloudflareOrganizations#starts_with}

---

### DataCloudflareOrganizationsParent <a name="DataCloudflareOrganizationsParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsParent;

DataCloudflareOrganizationsParent.builder()
    .build();
```


### DataCloudflareOrganizationsResult <a name="DataCloudflareOrganizationsResult" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResult;

DataCloudflareOrganizationsResult.builder()
    .build();
```


### DataCloudflareOrganizationsResultMeta <a name="DataCloudflareOrganizationsResultMeta" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultMeta;

DataCloudflareOrganizationsResultMeta.builder()
    .build();
```


### DataCloudflareOrganizationsResultMetaFlags <a name="DataCloudflareOrganizationsResultMetaFlags" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultMetaFlags;

DataCloudflareOrganizationsResultMetaFlags.builder()
    .build();
```


### DataCloudflareOrganizationsResultParent <a name="DataCloudflareOrganizationsResultParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultParent;

DataCloudflareOrganizationsResultParent.builder()
    .build();
```


### DataCloudflareOrganizationsResultProfile <a name="DataCloudflareOrganizationsResultProfile" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultProfile;

DataCloudflareOrganizationsResultProfile.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareOrganizationsContainingOutputReference <a name="DataCloudflareOrganizationsContainingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsContainingOutputReference;

new DataCloudflareOrganizationsContainingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.account">account</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.accountInput"></a>

```java
public java.lang.String getAccountInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareOrganizationsContaining getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

---


### DataCloudflareOrganizationsNameOutputReference <a name="DataCloudflareOrganizationsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsNameOutputReference;

new DataCloudflareOrganizationsNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetEndsWith"></a>

```java
public void resetEndsWith()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetStartsWith"></a>

```java
public void resetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWith">endsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWithInput"></a>

```java
public java.lang.String getEndsWithInput();
```

- *Type:* java.lang.String

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWithInput"></a>

```java
public java.lang.String getStartsWithInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWith"></a>

```java
public java.lang.String getEndsWith();
```

- *Type:* java.lang.String

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareOrganizationsName getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

---


### DataCloudflareOrganizationsParentOutputReference <a name="DataCloudflareOrganizationsParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsParentOutputReference;

new DataCloudflareOrganizationsParentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareOrganizationsParent getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

---


### DataCloudflareOrganizationsResultList <a name="DataCloudflareOrganizationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultList;

new DataCloudflareOrganizationsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.get"></a>

```java
public DataCloudflareOrganizationsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareOrganizationsResultMetaFlagsOutputReference <a name="DataCloudflareOrganizationsResultMetaFlagsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference;

new DataCloudflareOrganizationsResultMetaFlagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountCreation">accountCreation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountDeletion">accountDeletion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMigration">accountMigration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMobility">accountMobility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.subOrgCreation">subOrgCreation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags">DataCloudflareOrganizationsResultMetaFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountCreation`<sup>Required</sup> <a name="accountCreation" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountCreation"></a>

```java
public java.lang.String getAccountCreation();
```

- *Type:* java.lang.String

---

##### `accountDeletion`<sup>Required</sup> <a name="accountDeletion" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountDeletion"></a>

```java
public java.lang.String getAccountDeletion();
```

- *Type:* java.lang.String

---

##### `accountMigration`<sup>Required</sup> <a name="accountMigration" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMigration"></a>

```java
public java.lang.String getAccountMigration();
```

- *Type:* java.lang.String

---

##### `accountMobility`<sup>Required</sup> <a name="accountMobility" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMobility"></a>

```java
public java.lang.String getAccountMobility();
```

- *Type:* java.lang.String

---

##### `subOrgCreation`<sup>Required</sup> <a name="subOrgCreation" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.subOrgCreation"></a>

```java
public java.lang.String getSubOrgCreation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.internalValue"></a>

```java
public DataCloudflareOrganizationsResultMetaFlags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags">DataCloudflareOrganizationsResultMetaFlags</a>

---


### DataCloudflareOrganizationsResultMetaOutputReference <a name="DataCloudflareOrganizationsResultMetaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultMetaOutputReference;

new DataCloudflareOrganizationsResultMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.flags">flags</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference">DataCloudflareOrganizationsResultMetaFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.managedBy">managedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta">DataCloudflareOrganizationsResultMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.flags"></a>

```java
public DataCloudflareOrganizationsResultMetaFlagsOutputReference getFlags();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference">DataCloudflareOrganizationsResultMetaFlagsOutputReference</a>

---

##### `managedBy`<sup>Required</sup> <a name="managedBy" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.managedBy"></a>

```java
public java.lang.String getManagedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.internalValue"></a>

```java
public DataCloudflareOrganizationsResultMeta getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta">DataCloudflareOrganizationsResultMeta</a>

---


### DataCloudflareOrganizationsResultOutputReference <a name="DataCloudflareOrganizationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultOutputReference;

new DataCloudflareOrganizationsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference">DataCloudflareOrganizationsResultMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference">DataCloudflareOrganizationsResultParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.profile">profile</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference">DataCloudflareOrganizationsResultProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult">DataCloudflareOrganizationsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.meta"></a>

```java
public DataCloudflareOrganizationsResultMetaOutputReference getMeta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference">DataCloudflareOrganizationsResultMetaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.parent"></a>

```java
public DataCloudflareOrganizationsResultParentOutputReference getParent();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference">DataCloudflareOrganizationsResultParentOutputReference</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.profile"></a>

```java
public DataCloudflareOrganizationsResultProfileOutputReference getProfile();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference">DataCloudflareOrganizationsResultProfileOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareOrganizationsResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult">DataCloudflareOrganizationsResult</a>

---


### DataCloudflareOrganizationsResultParentOutputReference <a name="DataCloudflareOrganizationsResultParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultParentOutputReference;

new DataCloudflareOrganizationsResultParentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent">DataCloudflareOrganizationsResultParent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.internalValue"></a>

```java
public DataCloudflareOrganizationsResultParent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent">DataCloudflareOrganizationsResultParent</a>

---


### DataCloudflareOrganizationsResultProfileOutputReference <a name="DataCloudflareOrganizationsResultProfileOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_organizations.DataCloudflareOrganizationsResultProfileOutputReference;

new DataCloudflareOrganizationsResultProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessAddress">businessAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessEmail">businessEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessName">businessName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessPhone">businessPhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.externalMetadata">externalMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile">DataCloudflareOrganizationsResultProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `businessAddress`<sup>Required</sup> <a name="businessAddress" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessAddress"></a>

```java
public java.lang.String getBusinessAddress();
```

- *Type:* java.lang.String

---

##### `businessEmail`<sup>Required</sup> <a name="businessEmail" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessEmail"></a>

```java
public java.lang.String getBusinessEmail();
```

- *Type:* java.lang.String

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessName"></a>

```java
public java.lang.String getBusinessName();
```

- *Type:* java.lang.String

---

##### `businessPhone`<sup>Required</sup> <a name="businessPhone" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessPhone"></a>

```java
public java.lang.String getBusinessPhone();
```

- *Type:* java.lang.String

---

##### `externalMetadata`<sup>Required</sup> <a name="externalMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.externalMetadata"></a>

```java
public java.lang.String getExternalMetadata();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.internalValue"></a>

```java
public DataCloudflareOrganizationsResultProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile">DataCloudflareOrganizationsResultProfile</a>

---



