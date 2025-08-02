# `dataCloudflareAccountApiTokenPermissionGroupsList` Submodule <a name="`dataCloudflareAccountApiTokenPermissionGroupsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountApiTokenPermissionGroupsList <a name="DataCloudflareAccountApiTokenPermissionGroupsList" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list cloudflare_account_api_token_permission_groups_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_account_api_token_permission_groups_list.DataCloudflareAccountApiTokenPermissionGroupsList;

DataCloudflareAccountApiTokenPermissionGroupsList.Builder.create(Construct scope, java.lang.String id)
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
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list#account_id DataCloudflareAccountApiTokenPermissionGroupsList#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list#max_items DataCloudflareAccountApiTokenPermissionGroupsList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list#name DataCloudflareAccountApiTokenPermissionGroupsList#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list#scope DataCloudflareAccountApiTokenPermissionGroupsList#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetName"></a>

```java
public void resetName()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetScope"></a>

```java
public void resetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAccountApiTokenPermissionGroupsList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_account_api_token_permission_groups_list.DataCloudflareAccountApiTokenPermissionGroupsList;

DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_account_api_token_permission_groups_list.DataCloudflareAccountApiTokenPermissionGroupsList;

DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_account_api_token_permission_groups_list.DataCloudflareAccountApiTokenPermissionGroupsList;

DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_account_api_token_permission_groups_list.DataCloudflareAccountApiTokenPermissionGroupsList;

DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareAccountApiTokenPermissionGroupsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareAccountApiTokenPermissionGroupsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareAccountApiTokenPermissionGroupsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountApiTokenPermissionGroupsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList">DataCloudflareAccountApiTokenPermissionGroupsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.result"></a>

```java
public DataCloudflareAccountApiTokenPermissionGroupsListResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList">DataCloudflareAccountApiTokenPermissionGroupsListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountApiTokenPermissionGroupsListConfig <a name="DataCloudflareAccountApiTokenPermissionGroupsListConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_account_api_token_permission_groups_list.DataCloudflareAccountApiTokenPermissionGroupsListConfig;

DataCloudflareAccountApiTokenPermissionGroupsListConfig.builder()
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
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.name">name</a></code> | <code>java.lang.String</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list#account_id DataCloudflareAccountApiTokenPermissionGroupsList#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list#max_items DataCloudflareAccountApiTokenPermissionGroupsList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list#name DataCloudflareAccountApiTokenPermissionGroupsList#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_api_token_permission_groups_list#scope DataCloudflareAccountApiTokenPermissionGroupsList#scope}

---

### DataCloudflareAccountApiTokenPermissionGroupsListResult <a name="DataCloudflareAccountApiTokenPermissionGroupsListResult" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_account_api_token_permission_groups_list.DataCloudflareAccountApiTokenPermissionGroupsListResult;

DataCloudflareAccountApiTokenPermissionGroupsListResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountApiTokenPermissionGroupsListResultList <a name="DataCloudflareAccountApiTokenPermissionGroupsListResultList" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_account_api_token_permission_groups_list.DataCloudflareAccountApiTokenPermissionGroupsListResultList;

new DataCloudflareAccountApiTokenPermissionGroupsListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.get"></a>

```java
public DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference <a name="DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_account_api_token_permission_groups_list.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference;

new DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult">DataCloudflareAccountApiTokenPermissionGroupsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareAccountApiTokenPermissionGroupsListResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult">DataCloudflareAccountApiTokenPermissionGroupsListResult</a>

---



