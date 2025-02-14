# `dataCloudflareDnsSettingsInternalView` Submodule <a name="`dataCloudflareDnsSettingsInternalView` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsSettingsInternalView <a name="DataCloudflareDnsSettingsInternalView" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view cloudflare_dns_settings_internal_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalView;

DataCloudflareDnsSettingsInternalView.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(DataCloudflareDnsSettingsInternalViewFilter)
//  .viewId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#filter DataCloudflareDnsSettingsInternalView#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.viewId">viewId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#account_id DataCloudflareDnsSettingsInternalView#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#filter DataCloudflareDnsSettingsInternalView#filter}.

---

##### `viewId`<sup>Optional</sup> <a name="viewId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.viewId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#view_id DataCloudflareDnsSettingsInternalView#view_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetViewId">resetViewId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.putFilter"></a>

```java
public void putFilter(DataCloudflareDnsSettingsInternalViewFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetViewId` <a name="resetViewId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetViewId"></a>

```java
public void resetViewId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsSettingsInternalView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalView;

DataCloudflareDnsSettingsInternalView.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalView;

DataCloudflareDnsSettingsInternalView.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalView;

DataCloudflareDnsSettingsInternalView.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalView;

DataCloudflareDnsSettingsInternalView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareDnsSettingsInternalView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareDnsSettingsInternalView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareDnsSettingsInternalView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareDnsSettingsInternalView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsSettingsInternalView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference">DataCloudflareDnsSettingsInternalViewFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.modifiedTime">modifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.viewIdInput">viewIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.viewId">viewId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.filter"></a>

```java
public DataCloudflareDnsSettingsInternalViewFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference">DataCloudflareDnsSettingsInternalViewFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedTime`<sup>Required</sup> <a name="modifiedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.modifiedTime"></a>

```java
public java.lang.String getModifiedTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a>

---

##### `viewIdInput`<sup>Optional</sup> <a name="viewIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.viewIdInput"></a>

```java
public java.lang.String getViewIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.viewId"></a>

```java
public java.lang.String getViewId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsSettingsInternalViewConfig <a name="DataCloudflareDnsSettingsInternalViewConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalViewConfig;

DataCloudflareDnsSettingsInternalViewConfig.builder()
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
//  .filter(DataCloudflareDnsSettingsInternalViewFilter)
//  .viewId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#filter DataCloudflareDnsSettingsInternalView#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.viewId">viewId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#account_id DataCloudflareDnsSettingsInternalView#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.filter"></a>

```java
public DataCloudflareDnsSettingsInternalViewFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#filter DataCloudflareDnsSettingsInternalView#filter}.

---

##### `viewId`<sup>Optional</sup> <a name="viewId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.viewId"></a>

```java
public java.lang.String getViewId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#view_id DataCloudflareDnsSettingsInternalView#view_id}

---

### DataCloudflareDnsSettingsInternalViewFilter <a name="DataCloudflareDnsSettingsInternalViewFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalViewFilter;

DataCloudflareDnsSettingsInternalViewFilter.builder()
//  .direction(java.lang.String)
//  .match(java.lang.String)
//  .name(DataCloudflareDnsSettingsInternalViewFilterName)
//  .order(java.lang.String)
//  .zoneId(java.lang.String)
//  .zoneName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order DNS views in. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.match">match</a></code> | <code>java.lang.String</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#name DataCloudflareDnsSettingsInternalView#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.order">order</a></code> | <code>java.lang.String</code> | Field to order DNS views by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | A zone ID that exists in the zones list for the view. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | A zone name that exists in the zones list for the view. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction to order DNS views in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#direction DataCloudflareDnsSettingsInternalView#direction}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#match DataCloudflareDnsSettingsInternalView#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.name"></a>

```java
public DataCloudflareDnsSettingsInternalViewFilterName getName();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#name DataCloudflareDnsSettingsInternalView#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order DNS views by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#order DataCloudflareDnsSettingsInternalView#order}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#zone_id DataCloudflareDnsSettingsInternalView#zone_id}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#zone_name DataCloudflareDnsSettingsInternalView#zone_name}

---

### DataCloudflareDnsSettingsInternalViewFilterName <a name="DataCloudflareDnsSettingsInternalViewFilterName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalViewFilterName;

DataCloudflareDnsSettingsInternalViewFilterName.builder()
//  .contains(java.lang.String)
//  .endswith(java.lang.String)
//  .exact(java.lang.String)
//  .startswith(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.contains">contains</a></code> | <code>java.lang.String</code> | Substring of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.endswith">endswith</a></code> | <code>java.lang.String</code> | Suffix of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.exact">exact</a></code> | <code>java.lang.String</code> | Exact value of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.startswith">startswith</a></code> | <code>java.lang.String</code> | Prefix of the DNS view name. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#contains DataCloudflareDnsSettingsInternalView#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#endswith DataCloudflareDnsSettingsInternalView#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#exact DataCloudflareDnsSettingsInternalView#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#startswith DataCloudflareDnsSettingsInternalView#startswith}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsSettingsInternalViewFilterNameOutputReference <a name="DataCloudflareDnsSettingsInternalViewFilterNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference;

new DataCloudflareDnsSettingsInternalViewFilterNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetEndswith">resetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetStartswith">resetStartswith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetEndswith` <a name="resetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetEndswith"></a>

```java
public void resetEndswith()
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetStartswith` <a name="resetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetStartswith"></a>

```java
public void resetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.endswithInput">endswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.startswithInput">startswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.endswith">endswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.startswith">startswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `endswithInput`<sup>Optional</sup> <a name="endswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.endswithInput"></a>

```java
public java.lang.String getEndswithInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `startswithInput`<sup>Optional</sup> <a name="startswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.startswithInput"></a>

```java
public java.lang.String getStartswithInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a>

---


### DataCloudflareDnsSettingsInternalViewFilterOutputReference <a name="DataCloudflareDnsSettingsInternalViewFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_dns_settings_internal_view.DataCloudflareDnsSettingsInternalViewFilterOutputReference;

new DataCloudflareDnsSettingsInternalViewFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putName` <a name="putName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.putName"></a>

```java
public void putName(DataCloudflareDnsSettingsInternalViewFilterName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a>

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetMatch"></a>

```java
public void resetMatch()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetZoneId"></a>

```java
public void resetZoneId()
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetZoneName"></a>

```java
public void resetZoneName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference">DataCloudflareDnsSettingsInternalViewFilterNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.matchInput">matchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.nameInput">nameInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.match">match</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.name"></a>

```java
public DataCloudflareDnsSettingsInternalViewFilterNameOutputReference getName();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference">DataCloudflareDnsSettingsInternalViewFilterNameOutputReference</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.matchInput"></a>

```java
public java.lang.String getMatchInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.nameInput"></a>

```java
public java.lang.Object getNameInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a>

---



