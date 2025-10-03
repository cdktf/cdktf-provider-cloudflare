# `dataCloudflareZeroTrustDlpCustomEntries` Submodule <a name="`dataCloudflareZeroTrustDlpCustomEntries` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpCustomEntries <a name="DataCloudflareZeroTrustDlpCustomEntries" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_custom_entries cloudflare_zero_trust_dlp_custom_entries}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntries;

DataCloudflareZeroTrustDlpCustomEntries.Builder.create(Construct scope, java.lang.String id)
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
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_custom_entries#account_id DataCloudflareZeroTrustDlpCustomEntries#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_custom_entries#account_id DataCloudflareZeroTrustDlpCustomEntries#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_custom_entries#max_items DataCloudflareZeroTrustDlpCustomEntries#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.resetMaxItems"></a>

```java
public void resetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDlpCustomEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntries;

DataCloudflareZeroTrustDlpCustomEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntries;

DataCloudflareZeroTrustDlpCustomEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntries;

DataCloudflareZeroTrustDlpCustomEntries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntries;

DataCloudflareZeroTrustDlpCustomEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustDlpCustomEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDlpCustomEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustDlpCustomEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustDlpCustomEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_custom_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpCustomEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList">DataCloudflareZeroTrustDlpCustomEntriesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.result"></a>

```java
public DataCloudflareZeroTrustDlpCustomEntriesResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList">DataCloudflareZeroTrustDlpCustomEntriesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpCustomEntriesConfig <a name="DataCloudflareZeroTrustDlpCustomEntriesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesConfig;

DataCloudflareZeroTrustDlpCustomEntriesConfig.builder()
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
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_custom_entries#account_id DataCloudflareZeroTrustDlpCustomEntries#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_custom_entries#account_id DataCloudflareZeroTrustDlpCustomEntries#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_custom_entries#max_items DataCloudflareZeroTrustDlpCustomEntries#max_items}

---

### DataCloudflareZeroTrustDlpCustomEntriesResult <a name="DataCloudflareZeroTrustDlpCustomEntriesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesResult;

DataCloudflareZeroTrustDlpCustomEntriesResult.builder()
    .build();
```


### DataCloudflareZeroTrustDlpCustomEntriesResultConfidence <a name="DataCloudflareZeroTrustDlpCustomEntriesResultConfidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidence;

DataCloudflareZeroTrustDlpCustomEntriesResultConfidence.builder()
    .build();
```


### DataCloudflareZeroTrustDlpCustomEntriesResultPattern <a name="DataCloudflareZeroTrustDlpCustomEntriesResultPattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesResultPattern;

DataCloudflareZeroTrustDlpCustomEntriesResultPattern.builder()
    .build();
```


### DataCloudflareZeroTrustDlpCustomEntriesResultVariant <a name="DataCloudflareZeroTrustDlpCustomEntriesResultVariant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesResultVariant;

DataCloudflareZeroTrustDlpCustomEntriesResultVariant.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference <a name="DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference;

new DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.aiContextAvailable">aiContextAvailable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.available">available</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidence">DataCloudflareZeroTrustDlpCustomEntriesResultConfidence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aiContextAvailable`<sup>Required</sup> <a name="aiContextAvailable" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.aiContextAvailable"></a>

```java
public IResolvable getAiContextAvailable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.available"></a>

```java
public IResolvable getAvailable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDlpCustomEntriesResultConfidence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidence">DataCloudflareZeroTrustDlpCustomEntriesResultConfidence</a>

---


### DataCloudflareZeroTrustDlpCustomEntriesResultList <a name="DataCloudflareZeroTrustDlpCustomEntriesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesResultList;

new DataCloudflareZeroTrustDlpCustomEntriesResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.get"></a>

```java
public DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference <a name="DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference;

new DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.confidence">confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference">DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference">DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.variant">variant</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference">DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.wordList">wordList</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResult">DataCloudflareZeroTrustDlpCustomEntriesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.caseSensitive"></a>

```java
public IResolvable getCaseSensitive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.confidence"></a>

```java
public DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference getConfidence();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference">DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.pattern"></a>

```java
public DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference getPattern();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference">DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference</a>

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.secret"></a>

```java
public IResolvable getSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.variant"></a>

```java
public DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference getVariant();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference">DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference</a>

---

##### `wordList`<sup>Required</sup> <a name="wordList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.wordList"></a>

```java
public java.lang.String getWordList();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDlpCustomEntriesResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResult">DataCloudflareZeroTrustDlpCustomEntriesResult</a>

---


### DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference <a name="DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference;

new DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.validation">validation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPattern">DataCloudflareZeroTrustDlpCustomEntriesResultPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDlpCustomEntriesResultPattern getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultPattern">DataCloudflareZeroTrustDlpCustomEntriesResultPattern</a>

---


### DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference <a name="DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_custom_entries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference;

new DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.topicType">topicType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariant">DataCloudflareZeroTrustDlpCustomEntriesResultVariant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `topicType`<sup>Required</sup> <a name="topicType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.topicType"></a>

```java
public java.lang.String getTopicType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDlpCustomEntriesResultVariant getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpCustomEntries.DataCloudflareZeroTrustDlpCustomEntriesResultVariant">DataCloudflareZeroTrustDlpCustomEntriesResultVariant</a>

---



