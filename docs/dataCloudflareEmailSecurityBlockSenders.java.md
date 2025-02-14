# `dataCloudflareEmailSecurityBlockSenders` Submodule <a name="`dataCloudflareEmailSecurityBlockSenders` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityBlockSenders <a name="DataCloudflareEmailSecurityBlockSenders" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders cloudflare_email_security_block_senders}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_email_security_block_senders.DataCloudflareEmailSecurityBlockSenders;

DataCloudflareEmailSecurityBlockSenders.Builder.create(Construct scope, java.lang.String id)
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
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .patternType(java.lang.String)
//  .search(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | The sorting direction. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | The field to sort by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.patternType">patternType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#pattern_type DataCloudflareEmailSecurityBlockSenders#pattern_type}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#account_id DataCloudflareEmailSecurityBlockSenders#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

The sorting direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#direction DataCloudflareEmailSecurityBlockSenders#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#max_items DataCloudflareEmailSecurityBlockSenders#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.order"></a>

- *Type:* java.lang.String

The field to sort by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#order DataCloudflareEmailSecurityBlockSenders#order}

---

##### `patternType`<sup>Optional</sup> <a name="patternType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.patternType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#pattern_type DataCloudflareEmailSecurityBlockSenders#pattern_type}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#search DataCloudflareEmailSecurityBlockSenders#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetPatternType">resetPatternType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPatternType` <a name="resetPatternType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetPatternType"></a>

```java
public void resetPatternType()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetSearch"></a>

```java
public void resetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSenders resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_email_security_block_senders.DataCloudflareEmailSecurityBlockSenders;

DataCloudflareEmailSecurityBlockSenders.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_email_security_block_senders.DataCloudflareEmailSecurityBlockSenders;

DataCloudflareEmailSecurityBlockSenders.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_email_security_block_senders.DataCloudflareEmailSecurityBlockSenders;

DataCloudflareEmailSecurityBlockSenders.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_email_security_block_senders.DataCloudflareEmailSecurityBlockSenders;

DataCloudflareEmailSecurityBlockSenders.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareEmailSecurityBlockSenders.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSenders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareEmailSecurityBlockSenders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareEmailSecurityBlockSenders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityBlockSenders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList">DataCloudflareEmailSecurityBlockSendersResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.patternTypeInput">patternTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.patternType">patternType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.result"></a>

```java
public DataCloudflareEmailSecurityBlockSendersResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList">DataCloudflareEmailSecurityBlockSendersResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `patternTypeInput`<sup>Optional</sup> <a name="patternTypeInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.patternTypeInput"></a>

```java
public java.lang.String getPatternTypeInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.patternType"></a>

```java
public java.lang.String getPatternType();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityBlockSendersConfig <a name="DataCloudflareEmailSecurityBlockSendersConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_email_security_block_senders.DataCloudflareEmailSecurityBlockSendersConfig;

DataCloudflareEmailSecurityBlockSendersConfig.builder()
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
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .patternType(java.lang.String)
//  .search(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | The sorting direction. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.order">order</a></code> | <code>java.lang.String</code> | The field to sort by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.patternType">patternType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#pattern_type DataCloudflareEmailSecurityBlockSenders#pattern_type}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.search">search</a></code> | <code>java.lang.String</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#account_id DataCloudflareEmailSecurityBlockSenders#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The sorting direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#direction DataCloudflareEmailSecurityBlockSenders#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#max_items DataCloudflareEmailSecurityBlockSenders#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

The field to sort by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#order DataCloudflareEmailSecurityBlockSenders#order}

---

##### `patternType`<sup>Optional</sup> <a name="patternType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.patternType"></a>

```java
public java.lang.String getPatternType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#pattern_type DataCloudflareEmailSecurityBlockSenders#pattern_type}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_block_senders#search DataCloudflareEmailSecurityBlockSenders#search}

---

### DataCloudflareEmailSecurityBlockSendersResult <a name="DataCloudflareEmailSecurityBlockSendersResult" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_email_security_block_senders.DataCloudflareEmailSecurityBlockSendersResult;

DataCloudflareEmailSecurityBlockSendersResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityBlockSendersResultList <a name="DataCloudflareEmailSecurityBlockSendersResultList" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_email_security_block_senders.DataCloudflareEmailSecurityBlockSendersResultList;

new DataCloudflareEmailSecurityBlockSendersResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.get"></a>

```java
public DataCloudflareEmailSecurityBlockSendersResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareEmailSecurityBlockSendersResultOutputReference <a name="DataCloudflareEmailSecurityBlockSendersResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_email_security_block_senders.DataCloudflareEmailSecurityBlockSendersResultOutputReference;

new DataCloudflareEmailSecurityBlockSendersResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.comments">comments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.isRegex">isRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.patternType">patternType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResult">DataCloudflareEmailSecurityBlockSendersResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.comments"></a>

```java
public java.lang.String getComments();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.isRegex"></a>

```java
public IResolvable getIsRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.patternType"></a>

```java
public java.lang.String getPatternType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareEmailSecurityBlockSendersResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResult">DataCloudflareEmailSecurityBlockSendersResult</a>

---



