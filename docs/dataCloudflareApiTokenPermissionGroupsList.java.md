# `dataCloudflareApiTokenPermissionGroupsList` Submodule <a name="`dataCloudflareApiTokenPermissionGroupsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiTokenPermissionGroupsList <a name="DataCloudflareApiTokenPermissionGroupsList" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/api_token_permission_groups_list cloudflare_api_token_permission_groups_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_token_permission_groups_list.DataCloudflareApiTokenPermissionGroupsList;

DataCloudflareApiTokenPermissionGroupsList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/api_token_permission_groups_list#max_items DataCloudflareApiTokenPermissionGroupsList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/api_token_permission_groups_list#name DataCloudflareApiTokenPermissionGroupsList#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/api_token_permission_groups_list#scope DataCloudflareApiTokenPermissionGroupsList#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.resetName"></a>

```java
public void resetName()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.resetScope"></a>

```java
public void resetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareApiTokenPermissionGroupsList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_token_permission_groups_list.DataCloudflareApiTokenPermissionGroupsList;

DataCloudflareApiTokenPermissionGroupsList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_token_permission_groups_list.DataCloudflareApiTokenPermissionGroupsList;

DataCloudflareApiTokenPermissionGroupsList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_token_permission_groups_list.DataCloudflareApiTokenPermissionGroupsList;

DataCloudflareApiTokenPermissionGroupsList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_token_permission_groups_list.DataCloudflareApiTokenPermissionGroupsList;

DataCloudflareApiTokenPermissionGroupsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareApiTokenPermissionGroupsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareApiTokenPermissionGroupsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareApiTokenPermissionGroupsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareApiTokenPermissionGroupsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/api_token_permission_groups_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiTokenPermissionGroupsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList">DataCloudflareApiTokenPermissionGroupsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.result"></a>

```java
public DataCloudflareApiTokenPermissionGroupsListResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList">DataCloudflareApiTokenPermissionGroupsListResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiTokenPermissionGroupsListConfig <a name="DataCloudflareApiTokenPermissionGroupsListConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_token_permission_groups_list.DataCloudflareApiTokenPermissionGroupsListConfig;

DataCloudflareApiTokenPermissionGroupsListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.name">name</a></code> | <code>java.lang.String</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/api_token_permission_groups_list#max_items DataCloudflareApiTokenPermissionGroupsList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/api_token_permission_groups_list#name DataCloudflareApiTokenPermissionGroupsList#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/api_token_permission_groups_list#scope DataCloudflareApiTokenPermissionGroupsList#scope}

---

### DataCloudflareApiTokenPermissionGroupsListResult <a name="DataCloudflareApiTokenPermissionGroupsListResult" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_token_permission_groups_list.DataCloudflareApiTokenPermissionGroupsListResult;

DataCloudflareApiTokenPermissionGroupsListResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiTokenPermissionGroupsListResultList <a name="DataCloudflareApiTokenPermissionGroupsListResultList" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_token_permission_groups_list.DataCloudflareApiTokenPermissionGroupsListResultList;

new DataCloudflareApiTokenPermissionGroupsListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.get"></a>

```java
public DataCloudflareApiTokenPermissionGroupsListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareApiTokenPermissionGroupsListResultOutputReference <a name="DataCloudflareApiTokenPermissionGroupsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_api_token_permission_groups_list.DataCloudflareApiTokenPermissionGroupsListResultOutputReference;

new DataCloudflareApiTokenPermissionGroupsListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResult">DataCloudflareApiTokenPermissionGroupsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareApiTokenPermissionGroupsListResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionGroupsList.DataCloudflareApiTokenPermissionGroupsListResult">DataCloudflareApiTokenPermissionGroupsListResult</a>

---



