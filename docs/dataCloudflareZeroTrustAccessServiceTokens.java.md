# `dataCloudflareZeroTrustAccessServiceTokens` Submodule <a name="`dataCloudflareZeroTrustAccessServiceTokens` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessServiceTokens <a name="DataCloudflareZeroTrustAccessServiceTokens" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens cloudflare_zero_trust_access_service_tokens}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_service_tokens.DataCloudflareZeroTrustAccessServiceTokens;

DataCloudflareZeroTrustAccessServiceTokens.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .search(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the service token. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search for service tokens by other listed query parameters. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#account_id DataCloudflareZeroTrustAccessServiceTokens#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#max_items DataCloudflareZeroTrustAccessServiceTokens#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#name DataCloudflareZeroTrustAccessServiceTokens#name}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search for service tokens by other listed query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#search DataCloudflareZeroTrustAccessServiceTokens#search}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#zone_id DataCloudflareZeroTrustAccessServiceTokens#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetName"></a>

```java
public void resetName()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessServiceTokens resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_service_tokens.DataCloudflareZeroTrustAccessServiceTokens;

DataCloudflareZeroTrustAccessServiceTokens.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_service_tokens.DataCloudflareZeroTrustAccessServiceTokens;

DataCloudflareZeroTrustAccessServiceTokens.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_service_tokens.DataCloudflareZeroTrustAccessServiceTokens;

DataCloudflareZeroTrustAccessServiceTokens.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_service_tokens.DataCloudflareZeroTrustAccessServiceTokens;

DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessServiceTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustAccessServiceTokens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustAccessServiceTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessServiceTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList">DataCloudflareZeroTrustAccessServiceTokensResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.result"></a>

```java
public DataCloudflareZeroTrustAccessServiceTokensResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList">DataCloudflareZeroTrustAccessServiceTokensResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessServiceTokensConfig <a name="DataCloudflareZeroTrustAccessServiceTokensConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_service_tokens.DataCloudflareZeroTrustAccessServiceTokensConfig;

DataCloudflareZeroTrustAccessServiceTokensConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .search(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the service token. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search for service tokens by other listed query parameters. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#account_id DataCloudflareZeroTrustAccessServiceTokens#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#max_items DataCloudflareZeroTrustAccessServiceTokens#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#name DataCloudflareZeroTrustAccessServiceTokens#name}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search for service tokens by other listed query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#search DataCloudflareZeroTrustAccessServiceTokens#search}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_service_tokens#zone_id DataCloudflareZeroTrustAccessServiceTokens#zone_id}

---

### DataCloudflareZeroTrustAccessServiceTokensResult <a name="DataCloudflareZeroTrustAccessServiceTokensResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_service_tokens.DataCloudflareZeroTrustAccessServiceTokensResult;

DataCloudflareZeroTrustAccessServiceTokensResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessServiceTokensResultList <a name="DataCloudflareZeroTrustAccessServiceTokensResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_service_tokens.DataCloudflareZeroTrustAccessServiceTokensResultList;

new DataCloudflareZeroTrustAccessServiceTokensResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.get"></a>

```java
public DataCloudflareZeroTrustAccessServiceTokensResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustAccessServiceTokensResultOutputReference <a name="DataCloudflareZeroTrustAccessServiceTokensResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_service_tokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference;

new DataCloudflareZeroTrustAccessServiceTokensResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResult">DataCloudflareZeroTrustAccessServiceTokensResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustAccessServiceTokensResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResult">DataCloudflareZeroTrustAccessServiceTokensResult</a>

---



