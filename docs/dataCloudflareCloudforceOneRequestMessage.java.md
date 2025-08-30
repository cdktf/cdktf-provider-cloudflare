# `dataCloudflareCloudforceOneRequestMessage` Submodule <a name="`dataCloudflareCloudforceOneRequestMessage` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCloudforceOneRequestMessage <a name="DataCloudflareCloudforceOneRequestMessage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_message.DataCloudflareCloudforceOneRequestMessage;

DataCloudflareCloudforceOneRequestMessage.Builder.create(Construct scope, java.lang.String id)
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
    .page(java.lang.Number)
    .perPage(java.lang.Number)
    .requestId(java.lang.String)
//  .after(java.lang.String)
//  .before(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.page">page</a></code> | <code>java.lang.Number</code> | Page number of results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.perPage">perPage</a></code> | <code>java.lang.Number</code> | Number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.requestId">requestId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.after">after</a></code> | <code>java.lang.String</code> | Retrieve mes  ges created after this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.before">before</a></code> | <code>java.lang.String</code> | Retrieve messages created before this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Field to sort results by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Sort order (asc or desc). Available values: "asc", "desc". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#account_id DataCloudflareCloudforceOneRequestMessage#account_id}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.page"></a>

- *Type:* java.lang.Number

Page number of results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#page DataCloudflareCloudforceOneRequestMessage#page}

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.perPage"></a>

- *Type:* java.lang.Number

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#per_page DataCloudflareCloudforceOneRequestMessage#per_page}

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.requestId"></a>

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#request_id DataCloudflareCloudforceOneRequestMessage#request_id}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.after"></a>

- *Type:* java.lang.String

Retrieve mes  ges created after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#after DataCloudflareCloudforceOneRequestMessage#after}

---

##### `before`<sup>Optional</sup> <a name="before" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.before"></a>

- *Type:* java.lang.String

Retrieve messages created before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#before DataCloudflareCloudforceOneRequestMessage#before}

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.sortBy"></a>

- *Type:* java.lang.String

Field to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#sort_by DataCloudflareCloudforceOneRequestMessage#sort_by}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.sortOrder"></a>

- *Type:* java.lang.String

Sort order (asc or desc). Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#sort_order DataCloudflareCloudforceOneRequestMessage#sort_order}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetAfter">resetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetBefore">resetBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAfter` <a name="resetAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetAfter"></a>

```java
public void resetAfter()
```

##### `resetBefore` <a name="resetBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetBefore"></a>

```java
public void resetBefore()
```

##### `resetSortBy` <a name="resetSortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetSortOrder"></a>

```java
public void resetSortOrder()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_message.DataCloudflareCloudforceOneRequestMessage;

DataCloudflareCloudforceOneRequestMessage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_message.DataCloudflareCloudforceOneRequestMessage;

DataCloudflareCloudforceOneRequestMessage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_message.DataCloudflareCloudforceOneRequestMessage;

DataCloudflareCloudforceOneRequestMessage.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_message.DataCloudflareCloudforceOneRequestMessage;

DataCloudflareCloudforceOneRequestMessage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareCloudforceOneRequestMessage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareCloudforceOneRequestMessage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareCloudforceOneRequestMessage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCloudforceOneRequestMessage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.author">author</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.isFollowOnRequest">isFollowOnRequest</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.afterInput">afterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.beforeInput">beforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.pageInput">pageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.perPageInput">perPageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.requestIdInput">requestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.after">after</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.before">before</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.page">page</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.requestId">requestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.author"></a>

```java
public java.lang.String getAuthor();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `isFollowOnRequest`<sup>Required</sup> <a name="isFollowOnRequest" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.isFollowOnRequest"></a>

```java
public IResolvable getIsFollowOnRequest();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `afterInput`<sup>Optional</sup> <a name="afterInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.afterInput"></a>

```java
public java.lang.String getAfterInput();
```

- *Type:* java.lang.String

---

##### `beforeInput`<sup>Optional</sup> <a name="beforeInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.beforeInput"></a>

```java
public java.lang.String getBeforeInput();
```

- *Type:* java.lang.String

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.pageInput"></a>

```java
public java.lang.Number getPageInput();
```

- *Type:* java.lang.Number

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.perPageInput"></a>

```java
public java.lang.Number getPerPageInput();
```

- *Type:* java.lang.Number

---

##### `requestIdInput`<sup>Optional</sup> <a name="requestIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.requestIdInput"></a>

```java
public java.lang.String getRequestIdInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.after"></a>

```java
public java.lang.String getAfter();
```

- *Type:* java.lang.String

---

##### `before`<sup>Required</sup> <a name="before" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.before"></a>

```java
public java.lang.String getBefore();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.requestId"></a>

```java
public java.lang.String getRequestId();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCloudforceOneRequestMessageConfig <a name="DataCloudflareCloudforceOneRequestMessageConfig" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_cloudforce_one_request_message.DataCloudflareCloudforceOneRequestMessageConfig;

DataCloudflareCloudforceOneRequestMessageConfig.builder()
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
    .page(java.lang.Number)
    .perPage(java.lang.Number)
    .requestId(java.lang.String)
//  .after(java.lang.String)
//  .before(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.page">page</a></code> | <code>java.lang.Number</code> | Page number of results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | Number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.requestId">requestId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.after">after</a></code> | <code>java.lang.String</code> | Retrieve mes  ges created after this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.before">before</a></code> | <code>java.lang.String</code> | Retrieve messages created before this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Field to sort results by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Sort order (asc or desc). Available values: "asc", "desc". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#account_id DataCloudflareCloudforceOneRequestMessage#account_id}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

Page number of results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#page DataCloudflareCloudforceOneRequestMessage#page}

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#per_page DataCloudflareCloudforceOneRequestMessage#per_page}

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.requestId"></a>

```java
public java.lang.String getRequestId();
```

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#request_id DataCloudflareCloudforceOneRequestMessage#request_id}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.after"></a>

```java
public java.lang.String getAfter();
```

- *Type:* java.lang.String

Retrieve mes  ges created after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#after DataCloudflareCloudforceOneRequestMessage#after}

---

##### `before`<sup>Optional</sup> <a name="before" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.before"></a>

```java
public java.lang.String getBefore();
```

- *Type:* java.lang.String

Retrieve messages created before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#before DataCloudflareCloudforceOneRequestMessage#before}

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Field to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#sort_by DataCloudflareCloudforceOneRequestMessage#sort_by}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Sort order (asc or desc). Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#sort_order DataCloudflareCloudforceOneRequestMessage#sort_order}

---



